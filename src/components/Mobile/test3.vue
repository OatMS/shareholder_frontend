<template lang="html">
  <div id="app">
    <v-content class="centerDiv">
      <section>
        <v-layout column align-center justify-center class="white--text border">
          <v-flex xs12>
            <h1 class="white--text mb-2 text-xs-center">ชื่อผู้ถือหุ้น</h1>
            <h1 class="white--text mb-2 text-xs-center">ชื่อวาระ (แสดงชื่อย่อ)</h1>
            <div class="subheading mb-3 text-xs-center">จำนวนหุ้น</div>
          </v-flex>
          <v-flex xs12>
            <h1 class="mt-5 mb-5">ลงคะแนน : บัตรเสีย</h1>
          </v-flex>
          <!-- <v-flex xs12>
            <v-btn :loading="loading2" :disabled="loading2" round class="green darken-4 mt-5" dark large @click.native="loader = 'loading2'">ไม่เห็นด้วย
            <span slot="loader">รอสักครู่...</span>
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn :loading="loading3" :disabled="loading3" round class="green darken-4 mt-5" dark large @click.native="loader = 'loading3'">งดออกเสียง
            <span slot="loader">รอสักครู่...</span>
            </v-btn>
          </v-flex> -->
          <v-flex xs6>
            <v-btn :loading="loading4" :disabled="loading4" round class="success darken-4 mr-2 mt-5" dark @click.native="cancel">กลับไปหน้าแรก</v-btn>
            <v-btn round class="primary darken-4 mt-5" dark @click.native="editData">แก้ไข</v-btn>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]
      setTimeout(() => (this[l] = false), 3000)
      this.loader = null
    }
  },
  methods: {
    editData () {
      window.location = '/qrcode/shareholderid'
    },
    cancel () {
      window.location = '/manageAgenda'
    }
  }
}
</script>

<style lang="css">
.border{
  border-radius: 3em;
  border-spacing: 50px 70px;
  padding: 3em;
  opacity: 0.9;
  background: #000000;
}
.centerDiv{
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
#app {
  background-image: url('/static/img/icons/104.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
