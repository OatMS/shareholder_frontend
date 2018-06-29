<template lang="html">
  <div id="app">
    <v-content class="centerDiv">
      <section>
        <v-layout column align-center justify-center class="white--text border">
          <v-flex xs12>
            <h1 class="white--text mb-2 text-xs-center">ชื่อวาระ (แสดงชื่อย่อ)</h1>
            <div class="subheading mb-3 text-xs-center">จำนวนหุ้น</div>
          </v-flex>
          <v-flex xs12>
            <v-btn :loading="loading" :disabled="loading" round class="green darken-4 mt-5" dark large @click.native="loader = 'loading'">เห็นด้วย
            <span slot="loader">รอสักครู่...</span>
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn :loading="loading2" :disabled="loading2" round class="green darken-4 mt-5" dark large @click.native="loader = 'loading2'">ไม่เห็นด้วย
            <span slot="loader">รอสักครู่...</span>
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn :loading="loading3" :disabled="loading3" round class="green darken-4 mt-5" dark large @click.native="loader = 'loading3'">งดออกเสียง
            <span slot="loader">รอสักครู่...</span>
            </v-btn>
          </v-flex>
          <v-flex xs12>
            <v-btn :loading="loading4" :disabled="loading4" round class="red darken-4 mt-5" dark large @click.native="loader = 'loading4'">บันทึก</v-btn>
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
#app {
  background-image: url('/static/img/icons/104.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
