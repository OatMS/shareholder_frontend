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
                    v-model="searchText"
                    autocomplete
                    label=""
                    placeholder="ชื่อ / นามสกุล / บริษัท / เลขผู้ถือหุ้น"
                    required
                  ></v-select>

      </v-flex>

    </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchText: '',
      shareholder: []
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


</style>
