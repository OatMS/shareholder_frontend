<template lang="html">
  <div id="app">
    <v-toolbar color="green" class="">
      <v-flex xs12 py-3 text-xs-left white--text>
        <h3>Internet Thailand Public Company Limited {{ new Date().getFullYear() }}</h3>
      </v-flex>
      <v-flex xs12 text-xs-right white--text>
        <h4>23 เมษายน 2561</h4>
      </v-flex>
    </v-toolbar>
    <div v-if="i==1">
      <v-layout style="margin-top: 200px;" column align-center justify-center class="white--text">
        <img src="/static/img/icons/logo.gif" height="100" class="mt-5 mb-5">
        <h1 class="white--text mb-4 display-1 text-xs-center">Annual General Meeting of Shareholders {{ new Date().getFullYear() }}</h1>
        <div class="white--text subheading text-xs-center">การประชุมสามัญผู้ถือหุ้นประจำปี {{ new Date().getFullYear() }}</div>
        <!-- <span id="element1" @click="changeText(1)">Read More...</span>
        <span id="element2" @click="changeText(2)">Read More...</span> -->
      </v-layout>
    </div>
    <div v-if="i==2">
      <v-content class="centerDiv">
        <section>
          <v-layout row wrap class="white--text border">

            <v-flex xs12>
              <v-flex xs12>
                <h1 class="black--text mb-5">ผู้ถือหุ้น</h1>
              </v-flex>

              <v-flex class="mb-3" xs12>
                <span style="float: left;"  class="mr-5 black--text">จำนวนหุ้นทั้งหมด</span>
                <span  style="float: right;" class="black--text">500,041,575 หุ้น</span>
                <div style="clear: both;"></div>
                <v-divider></v-divider>
              </v-flex>

              <v-flex class="mb-3" xs12>
                <span style="float: left;" class="mr-5 black--text">จำนวนผู้ถือหุ้น</span>
                <span style="float: right;" class="black--text">3991 คน</span>
                <div style="clear: both;"></div>
                <v-divider></v-divider>
              </v-flex>

              <v-flex class="mb-3" xs12>
                <span style="float: left;" class="mr-5 black--text">จำนวนหุ้นที่ลงทะเบียน</span>
                <span style="float: right;" class="black--text">272,143,752 หุ้น</span>
                <div style="clear: both;"></div>
                <v-divider></v-divider>
              </v-flex>
            </v-flex>

            <v-flex class="mb-3" xs12>
              <span style="float: left;" class="mr-5 black--text">คิดเป็นร้อยละ</span>
              <span style="float: right;" class="black--text">54.42</span>
              <div style="clear: both;"></div>
              <v-divider></v-divider>
            </v-flex>
          </v-flex>

          <v-flex class="mb-3" xs12>
            <span style="float: left;" class="mr-5 black--text">จำนวนผู้ลงทะเบียน</span>
            <span style="float: right;" class="black--text">84 คน</span>
            <div style="clear: both;"></div>
            <v-divider></v-divider>
          </v-flex>
        </v-flex>

        <v-flex class="mb-3" xs12>
          <span style="float: left;" class="mr-5 black--text">-----ผู้มาลงคะแนนด้วยตัวเอง</span>
          <span style="float: right;" class="black--text">53 คน</span>
          <div style="clear: both;"></div>
          <v-divider></v-divider>
        </v-flex>
      </v-flex>

      <v-flex class="mb-3" xs12>
        <span style="float: left;" class="mr-5 black--text">-----ผู้มอบฉันทะ</span>
        <span style="float: right;" class="black--text">31 คน</span>
        <div style="clear: both;"></div>
        <v-divider></v-divider>
      </v-flex>
    </v-flex>
  </v-layout>
</section>
</v-content>
</div>
<!-- <p id="output"> {{ arr[i] }} </p> -->
<v-btn color="primary" @click="prevItem">Previous</v-btn>
<v-btn color="primary" @keyup.left="nextItem()">Next</v-btn>
</div>
</template>

<script>
export default {
  data () {
    return {
      arr: ['page1', 'page2', 'page3'],
      i: '0'
    }
  },
  methods: {
    nextItem () {
      this.i = this.i + 1
      this.i = this.i % this.arr.length
      return this.arr[this.i]
    },
    prevItem () {
      if (this.i === 0) {
        this.i = this.arr.length
      }
      this.i = this.i - 1
      return this.arr[this.i]
    }
    // changeText (idElement) {
    //   var element = document.getElementById('element' + idElement)
    //   if (idElement === 1 || idElement === 2) {
    //     if (element.innerHTML === 'test1stclick') element.innerHTML = 'test2ndclick'
    //     else {
    //       element.innerHTML = 'test1stclick'
    //     }
    //   }
    // }
  }
}
</script>

<style lang="css" scoped>
#app {
  background-image: url('/static/img/icons/103.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.border{
  border-radius: 1em;
  border-spacing: 200px 240px 100px;
  padding: 2em 2em;
  /* opacity: 0.9; */
  background: #ffffff;
}
.centerDiv{
  margin: 0;
  position: absolute;
  top: 55%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
</style>
