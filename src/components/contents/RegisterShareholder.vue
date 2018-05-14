<template lang="html">
  <div  class="regiterationLayout text-xs-center">
    <h1 style="font-weight: 900; font-size:2.5em">ลงทะเบียนเข้างาน</h1>
    <v-layout row wrap class="mt-4">
      <v-flex xs12 sm2>
        <h2 >ค้นหา</h2>
      </v-flex>
      <v-flex xs12 sm8>
        <!-- <v-text-field v-model="searchText" v-on:change="searchShareholder" solo label="ชื่อ / นามสกุล / บริษัท / เลขผู้ถือหุ้น"></v-text-field> -->
        <v-select
        ref="shareholder"
        :items="shareholder"
        v-model="selectedItem"
        item-value="shareholder.info"
        autocomplete
        label=""
        placeholder="ชื่อ / นามสกุล / บริษัท / เลขผู้ถือหุ้น"
        required
        ></v-select>

      </v-flex>
    </v-layout>
    <div class="formInfo" v-if="showInfo" v-show="showInfo">
      <div class="infoDiv">
        <v-layout row wrap v-show="selectedItem.info.title != 'บริษัท' ">
          <v-flex xs12 sm2>
            <h3>ชื่อ-นามสกุล :</h3>
          </v-flex>
          <v-flex xs12 sm7>
            <h3>{{selectedItem.info.title}} {{selectedItem.info.firstname}} {{selectedItem.info.lastname}}</h3>
          </v-flex>
          <v-flex xs12 sm3 class="text-xs-right">
            <v-btn v-show="selectedItem.info.register != 0" style="width:100% height:60px;font-weight: bold;" color="primary darken-2" dark>พิมพ์บัตรลงคะแนน</v-btn>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-4" v-show="selectedItem.info.title == 'บริษัท' ">
          <v-flex xs12 sm2>
            <h3>ชื่อบริษัท :</h3>
          </v-flex>
          <v-flex xs12 sm7>
            <h3>{{selectedItem.info.companyname}} </h3>
          </v-flex>
          <v-flex xs12 sm3 class="text-xs-right">
            <v-btn style="width:100% height:60px;font-weight: bold;" color="primary darken-2" dark >พิมพ์บัตรลงคะแนน</v-btn>
          </v-flex>

        </v-layout>
        <v-layout row wrap class="mt-4">
          <v-flex xs12 sm2>
            <h3>จำนวนหุ้น</h3>
          </v-flex>
          <v-flex xs12 sm2>
            <h3>{{selectedItem.info.q_share.toLocaleString()}}</h3>
          </v-flex>
          <v-flex xs12 sm1>
            <h3>หุ้น</h3>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-4">
          <v-flex xs12 sm2>
            <h3>สถานะ :</h3>
          </v-flex>
          <v-flex xs12 sm4>
            <h3 v-show="selectedItem.info.register == 0">ยังไม่ได้ลงทะเบียน</h3>
            <h3 v-show="selectedItem.info.register != 0">ลงทะเบียนแล้ว</h3>
          </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-4">
          <v-flex xs12 sm12  class="text-xs-right">
            <v-btn  v-show="selectedItem.info.register == 0" style="width:100% height:60px;font-weight: bold;" @click.stop="proxyDialog = true" large color="amber darken-2" dark depressed>ผู้มอบฉันทะ</v-btn>
            <v-btn  v-show="selectedItem.info.register != 0" style="width:100% height:60px;font-weight: bold;" @click.stop="proxyDialog = true" large disabled >ผู้มอบฉันทะ</v-btn>
          <!-- </v-flex>
          <v-flex xs12 sm3 class="text-xs-right"> -->
            <v-btn v-show="selectedItem.info.register == 0" @click.native.stop="registerDialog = true" style="width:100% height:60px;background-color:#61C356;" large dark depressed>ลงทะเบียน</v-btn>
            <v-btn v-show="selectedItem.info.register != 0" style="width:100% height:60px" large  disabled>ลงทะเบียน</v-btn>
          </v-flex>

        </v-layout>

        <v-dialog v-model="proxyDialog" width="60%">
          <v-form ref="form">

          <v-card>
            <v-card-title>
              <h2>ลงทะเบียนแบบมอบฉันทะ</h2>
            </v-card-title>
            <v-card-text >
              <v-layout row wrap  class="mt-4">
                <v-flex xs12 sm2 class="pd5"  >
                  <v-select
                  ref="proxyTitle"
                  :items="title"
                  v-model="proxyTitle"
                  autocomplete
                  label=""
                  placeholder="คำนำหน้า"
                  :rules="[() => !!proxyTitle || 'This field is required']"
                  required
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm5 class="pd5">
                  <v-text-field v-model="proxyName"  label="ชื่อ"
                  ref="proxyName"
                  :rules="[() => !!proxyName || 'This field is required']" required>

                  </v-text-field>
                </v-flex>
                <v-flex xs12 sm5 class="pd5">
                  <v-text-field v-model="proxyLastname" label="นามสกุล"
                  ref="proxyLastname"
                  :rules="[() => !!proxyLastname || 'This field is required']"
                  required ></v-text-field>
                </v-flex >

              </v-layout>
              <v-layout row wrap class="mt-4">
                <v-flex xs12 sm2 >
                </v-flex>
                <v-flex xs12 sm2>
                  <v-btn style="width:100% height:60px" @click="clearProxyDialog" @click.stop="proxyDialog=false" large >ย้อนกลับ</v-btn>

                </v-flex >
                <v-flex xs12 sm4>
                </v-flex >
                <v-flex xs12 sm2 style="text-align:right;" >
                  <v-btn style="width:100% height:60px" @click='register("proxy")' large color="success">ลงทะเบียน</v-btn>
                </v-flex>

              </v-layout>
            </v-card-text>
          </v-card>

        </v-form>
        </v-dialog>

        <v-layout row justify-center>
          <!-- <v-btn color="primary" dark >Open Dialog</v-btn> -->
          <v-dialog v-model="registerDialog"  max-width="400">
            <v-card >
              <v-card-title ></v-card-title>
              <v-card-text style="text-align:center;"><h2>ยืนยันการละทะเบียนผู้ถือหุ้น</h2></v-card-text>
              <v-card-actions>
                <v-btn color="green darken-1" flat="flat" @click.native="registerDialog = false">ย้อนกลับ</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat="flat" @click="register('simple')" @click.native="registerDialog = false">ยืนยัน</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-layout>
      </div>

    </div>
  </div>




</template>

<script>
export default {
  data () {
    return {
      selectedItem: {},
      shareholder: [],
      proxyDialog: false,
      registerDialog: false,
      title: [ 'นาย', 'นาง', 'น.ส.' ],
      proxyTitle: '',
      proxyName: '',
      proxyLastname: '',
      showInfo: false,
      errorMessages: [],
      checkProxyForm: false
    }
  },
  methods: {
    register (registerBy) {
      var data = {}
      if (registerBy === 'proxy') {
        if (this.proxyTitle === '' || this.proxyName === '' || this.proxyLastname === '') {
          this.checkProxyForm = true
          this.$swal('กรุณากรอกข้อมูลให้ครบค่ะ', '', 'error')
          this.Loading = false
          return
        } else {
          data = {
            'registertype': registerBy,
            'proxytitle': this.proxyTitle,
            'proxyname': this.proxyName,
            'proxylastname': this.proxyLastname,
            'memberid': this.selectedItem.info.memberid,
            'registerby': 'manassanan.bo' }
        }
      } else {
        data = {
          'registertype': registerBy,
          'memberid': this.selectedItem.info.memberid,
          'registerby': 'manassanan.bo' }
      }

      this.axios.post('http://203.154.58.87:5000' + '/register/2/2018', data).then((response) => {
        // var result = JSON.parse(response.data)
        var result = response.data
        if (response.status === 200) {
          if (result.status === 'success') {
            this.clearProxyDialog()
            console.log(result)
            this.selectedItem.info.register = result.info
            this.shareholder[result.info.id - 1].info = result.info
            // --- register success -----
          }
        }
      })
    },
    clearProxyDialog () {
      // this.proxyTitle = ''
      // this.proxyName = ''
      // this.proxyLastname = ''
      // Object.keys(this.proxyTitle)[0].reset()
      // Object.keys(this.proxyName)[0].reset()
      // Object.keys(this.proxyLastname)[0].reset()
      this.$refs.form.reset()
    }
  },
  mounted () {
    this.axios.get('http://203.154.58.87:5000' + '/getAllShareholder/2/2018').then((response) => {
      // var result = JSON.parse(response.data)
      var result = response.data
      if (response.status === 200) {
        this.shareholder = result
        console.log(result)
      }
    })
    // this.shareholder = [{ 'text': 'มนัสนันท์ บุญนวสิน อินเตอร์เน็ตประเทศไทย จำกัดมหาชน(INET)' }, { 'text': 'สมชาย นามสมมติ ลูกไก่น้อย' }]
  },
  computed: {
    // form () {
    //   return {
    //     title: this.proxyTitle,
    //     name: this.proxyName,
    //     lastname: this.proxyLastname
    //   }
    // }
  },
  watch: {
    selectedItem () {
      this.showInfo = true
      console.log(this.selectedItem)
    }
    // searchShareholder () {
    //   this.axios.post('203.154.58.87:5000' + '/searchShareholder', { 'str': this.searchText }).then((response) => {
    //     var result = JSON.parse(response.data)
    //     if (response.status === 200) {
    //       if (result.length > 0) {
    //         this.profileImg = result[0]['profile_image']
    //       }
    //     }
    //   })
    // }
  }

}
</script>

<style lang="css">

.regiterationLayout{
  /* border: solid;  */
  width : 70%;
  height: 70%;
  margin: 10% auto;
  /* text-align: center; */
}

.searchShareholder{
  margin-top: 25px;
}

.formInfo{
  margin-top:10%;
  text-align: left;
}
.infoDiv{
  border: 2px solid #ccc;
  border-radius: 1em;
  padding: 2em;
}
.pd5{
  padding: 5px;
}

</style>
