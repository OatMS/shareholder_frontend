<template lang="html">
  <div  class="regiterationLayout text-xs-center">
    <h1 style="font-weight: 900; font-size:2.5em">ลงทะเบียนเข้างาน</h1>
    <v-layout row wrap class="mt-4">
      <v-flex xs12 sm2>
        <h1 >ค้นหา</h1>
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
      <v-layout row wrap class="mt-4">
        <v-flex xs12 sm2>
          <h2>ชื่อ-นามสกุล :</h2>
        </v-flex>
        <v-flex xs12 sm6>
          <h2>{{selectedItem.info.title}} {{selectedItem.info.firstname}} {{selectedItem.info.lastname}}</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-4">
        <v-flex xs12 sm2>
          <h2>ชื่อบริษัท :</h2>
        </v-flex>
        <v-flex xs12 sm8>
          <h2>{{selectedItem.info.companyname}} </h2>
        </v-flex>

      </v-layout>
      <v-layout row wrap class="mt-4">
        <v-flex xs12 sm2>
          <h2>จำนวนหุ้น</h2>
        </v-flex>
        <v-flex xs12 sm3>
          <h2>{{selectedItem.info.q_share}}</h2>
        </v-flex>
        <v-flex xs12 sm1>
          <h2>หุ้น</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-4">
        <v-flex xs12 sm2>
          <h2>สถานะ :</h2>
        </v-flex>
        <v-flex xs12 sm4>
          <h2>ยังไม่ได้ลงทะเบียน</h2>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mt-4">
        <v-flex xs12 sm2 >
          <v-btn style="width:100% height:60px" @click.stop="dialog2 = true" large color="success">ผู้มอบฉันทะ</v-btn>
        </v-flex>
        <v-flex xs12 sm6>
          <!-- <h2>สถานะ :</h2> -->
        </v-flex >
        <v-flex xs12 sm2 style="text-align:right;" >
          <v-btn style="width:100% height:60px" large color="success">ลงทะเบียน</v-btn>
        </v-flex>

      </v-layout>

      <v-dialog v-model="dialog2" width="60%">
        <v-card>
          <v-card-title>
            <h2>ลงทะเบียนแบบมอบฉันทะ</h2>
          </v-card-title>
          <v-card-text>
            <v-layout row wrap class="mt-4">
              <v-flex xs12 sm2 class="pd5" >
                <v-select
                ref="shareholder"
                :items="title"
                solo
                v-model="proxyTitle"
                autocomplete
                label=""
                placeholder="title"
                required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm5 class="pd5">
                <v-text-field v-model="proxyName"  solo label="ชื่อ"></v-text-field>
              </v-flex>
              <v-flex xs12 sm5 class="pd5">
                <v-text-field v-model="proxyLastname"  solo label="นามสกุล"></v-text-field>
              </v-flex >
              <!-- <v-flex xs12 sm2 style="text-align:right;" >
                <v-btn style="width:100% height:60px" large color="success">ลงทะเบียน</v-btn>
              </v-flex> -->

            </v-layout>
            <v-layout row wrap class="mt-4">
              <v-flex xs12 sm2 >
                <!-- <v-btn style="width:100% height:60px" @click.stop="dialog2 = true" large color="success">ผู้มอบฉันทะ</v-btn> -->
              </v-flex>
              <v-flex xs12 sm2>
                <!-- <h2>สถานะ :</h2> -->
                <v-btn style="width:100% height:60px" @click.stop="dialog2=false" large >ย้อนกลับ</v-btn>

              </v-flex >
              <v-flex xs12 sm4>
                <!-- <h2>สถานะ :</h2> -->
              </v-flex >
              <v-flex xs12 sm2 style="text-align:right;" >
                <v-btn style="width:100% height:60px" large color="success">ลงทะเบียน</v-btn>
              </v-flex>

            </v-layout>
          </v-card-text>
          <!-- <v-card-actions>
            <v-btn color="primary" flat >Close</v-btn>
          </v-card-actions> -->
        </v-card>
      </v-dialog>



    </div>
  </div>




</template>

<script>
export default {
  data () {
    return {
      selectedItem: {},
      shareholder: [],
      dialog2: false,
      title: [ 'นาย', 'นาง', 'นางสาว' ],
      proxyTitle: '',
      proxyName: '',
      proxyLastname: '',
      showInfo: false
    }
  },
  methods: {
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

.pd5{
  padding: 5px;
}

</style>
