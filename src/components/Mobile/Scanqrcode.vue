<template lang="html">
  <div class="bg">
    <v-content class="centerDiv">
      <section>
        <v-layout column align-center justify-center class="white--text border">
          <v-flex xs12 md12>
            <h1 class="white--text mb-2 text-xs-center">ชื่อผู้ถือหุ้น</h1>
            <h1 class="white--text mb-2 text-xs-center">ชื่อวาระ (แสดงชื่อย่อ)</h1>
            <div class="subheading mb-3 text-xs-center">จำนวนหุ้น</div>
          </v-flex>
          <v-flex xs12 md12>
            <v-btn :loading="loading" :disabled="loading" round class="green darken-4 mt-5" dark large @click.native="loader = 'loading'">เห็นด้วย
              <span slot="loader">รอสักครู่...</span>
            </v-btn>
          </v-flex>
          <v-flex xs12 md12>
            <v-btn :loading="loading2" :disabled="loading2" round class="green darken-4 mt-5" dark large @click.native="loader = 'loading2'">ไม่เห็นด้วย
              <span slot="loader">รอสักครู่...</span>
            </v-btn>
          </v-flex>
          <v-flex xs12 md12>
            <v-btn :loading="loading3" :disabled="loading3" round class="green darken-4 mt-5" dark large @click.native="loader = 'loading3'">งดออกเสียง
              <span slot="loader">รอสักครู่...</span>
            </v-btn>
          </v-flex>
          <v-flex xs12 md12>
            <v-btn :loading="loading4" :disabled="loading4" round class="green darken-4 mt-5" dark large @click.native="loader = 'loading4'">บัตรเสีย
              <span slot="loader">รอสักครู่...</span>
            </v-btn>
          </v-flex>
          <v-flex xs6 md6>
            <v-btn round class="red darken-4 mr-2 mt-5" dark @click.native="cancel">ยกเลิก</v-btn>
            <v-btn round class="primary darken-4 mt-5" dark @click.native="saveData">บันทึก</v-btn>
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
    saveData () {
      this.$swal({
        title: 'บันทึกข้อมูลแล้ว',
        text: '',
        type: 'success',
        showConfirmButton: false
      })
      setTimeout(function () { window.location = '/qrcode/shareholderid/submit' }, 1500)
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
  padding: 5em;
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
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
.bg {
  background-image: url('/static/img/icons/104.jpg');
  height: 100%;
  /* height: -webkit-fill-available !important; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media only screen and (max-width: 600px) {
  .cg {
    height: auto !important;
  }
}
</style>
