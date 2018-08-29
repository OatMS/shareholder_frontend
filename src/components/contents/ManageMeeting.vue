<template lang="html">
  <v-container class="outerDiv">
    <v-layout row wrap>
      <v-flex xs12 md6 offset-md3>
        <div class="loginDiv" style="text-align:right;">
          <div class="centerDiv">
            <img class="loginLogo" src="/static/img/icons/logo.jpg" alt="">
          </div>
          <h1 style="text-align:center; font-size:2.3em; " class="mb-4 mt-1">ข้อมูลการประชุมครั้งที่ 2 ปี 2018</h1>
          <v-layout row wrap class="pl-3 pr-3">
            <v-flex xs6>
              <h1 style="text-align:center">Value</h1>
              <v-text-field hint="this_year" value="2561" class="input-group--focused" single-line></v-text-field>
              <v-text-field hint="agenda_date" value="23 เมษายน 2561" class="input-group--focused" single-line></v-text-field>
              <v-text-field hint="limit_person" value="25" class="input-group--focused" single-line></v-text-field>
              <v-text-field hint="location" value="" class="input-group--focused" single-line></v-text-field>
              <v-text-field hint="presenter" value="" class="input-group--focused" single-line></v-text-field>
              <v-text-field hint="type" value="1" class="input-group--focused" single-line></v-text-field>
              <v-text-field hint="term" value="1" class="input-group--focused" single-line></v-text-field>
              <v-text-field hint="fix" value="6" class="input-group--focused" single-line></v-text-field>
              <v-text-field hint="meetingName" value="Annual General Meet" class="input-group--focused" single-line></v-text-field>
              <v-text-field hint="meetingName_th" value="การประชุมสามัญผู้ถือหุ้น" class="input-group--focused" single-line></v-text-field>
            </v-flex>
            <v-flex xs6>
              <h1 style="text-align:center">Detail</h1>
              <v-text-field label="this_year" placeholder="2561" disabled></v-text-field>
              <v-text-field label="agenda_date" placeholder="23 เมษายน 2561" disabled></v-text-field>
              <v-text-field label="limit_person" placeholder="จำนวนผู้ลงทะเบียนขั้นต่ำ" disabled></v-text-field>
              <v-text-field label="location" placeholder="สถานที่" disabled></v-text-field>
              <v-text-field label="presenter" placeholder="name of presenter" disabled></v-text-field>
              <v-text-field label="type" placeholder="1=เสียงข้างมาก 2=เสียง 3 ใน 4" disabled></v-text-field>
              <v-text-field label="term" placeholder="ครั้งที่" disabled></v-text-field>
              <v-text-field label="fix" placeholder="วาระที่ต้องการใส่รูป" disabled></v-text-field>
              <v-text-field label="meetingName" placeholder="ชื่อวาระประชุมภาษาอังกฤษ" disabled></v-text-field>
              <v-text-field label="meetingName_th" placeholder="ชื่อการประชุมภาษาไทย" disabled></v-text-field>

            </v-flex>
          </v-layout>
          <v-btn dark color="primary" @click="saveData">Save</v-btn>
        </div>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
export default {
  data () {
    return {
      year: '',
      date: '',
      person: '',
      location: '',
      presenter: '',
      type: '',
      term: '',
      fix: '',
      meetingName: '',
      meetingNameth: ''
    }
  },
  methods: {
    saveData () {
      alert('test')
    }
  }
}
</script>

<style lang="css">
.loginDiv{
  border: 1px solid #aaa;
  border-radius: 2em;
  border-spacing: 50px 70px;
  padding: 1em;
  background: #fff;
}
.loginLogo{
  width: 50%
}
.outerDiv{
  padding: 3em 1em;
}
.centerDiv{
  display: flex;
  align-items: center;
  justify-content: center;
}
@media only screen and (max-width: 600px){
  .loginLogo{
    width: 100%
  }
}
</style>
