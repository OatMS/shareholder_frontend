<template lang="html">

  <div>
    <v-app light>
      <v-toolbar class="white">
        <v-toolbar-title class="white--text" v-text="header"></v-toolbar-title>
      </v-toolbar>
      <v-content>
        <section>
          <v-parallax src="/static/img/icons/103.jpg" height="600">
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
              >
              <img src="/static/img/icons/102.png" height="200" class="mb-5">
              <h1 class="white--text mb-2 display-1 text-xs-center">Annual General Meeting of Shareholders {{ new Date().getFullYear() }}</h1>
              <div class="subheading mb-3 text-xs-center">การประชุมสามัญผู้ถือหุ้นประจำปี {{ new Date().getFullYear() }}</div>
            </v-layout>
          </v-parallax>
        </section>
      </v-content>
      <v-toolbar class="white">
        <v-toolbar-title class="white--text" v-text="title"></v-toolbar-title>
      </v-toolbar>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Annual General Meeting of Shareholders',
      header: 'Internet Thailand Public Company Limited'
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
