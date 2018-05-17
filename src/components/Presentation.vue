<template lang="html">

  <div>
    <v-app light>
      <v-footer height="80" color="green" class="pa-3">
        <v-flex xs12 py-3 text-xs-center white--text>
          <h1>Internet Thailand Public Company Limited {{ new Date().getFullYear() }}</h1>
        </v-flex>
      </v-footer>
      <v-content>
        <section>
          <v-parallax src="/static/img/icons/103.jpg" height="610">
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
              >
              <img src="/static/img/icons/logo.gif" height="100" class="mb-5">
              <h1 class="white--text mb-4 display-1 text-xs-center">Annual General Meeting of Shareholders {{ new Date().getFullYear() }}</h1>
              <div class="subheading text-xs-center">การประชุมสามัญผู้ถือหุ้นประจำปี {{ new Date().getFullYear() }}</div>
            </v-layout>
          </v-parallax>
        </section>
      </v-content>
      <v-footer height="82" color="green" class="pa-3">
        <v-flex xs12 py-3 text-xs-center white--text>
          <v-pagination :length="4" v-model="page" circle></v-pagination>
        </v-flex>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Annual General Meeting of Shareholders',
      header: 'Internet Thailand Public Company Limited',
      page: 1
    }
  }
}
</script>

<style lang="css">
#social img {
  opacity:0.5;
}
.social img:hover {
  opacity:1;
  background-color:black;
  cursor:pointer;
  background: rgb(255, 0, 0) ; opacity: 0.5
}
</style>
