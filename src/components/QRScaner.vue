<template lang="html">
  <v-app id="inspire" dark>
    <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.lgAndUp" app v-model="drawer" class="hidden-md-and-up">
      <v-list dense>
        <template v-for="item in items">
          <v-layout row v-if="item.heading" align-center :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
          </v-layout>
          <v-list-tile @click="toPage(item.link)" :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer =! drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>QRCODE</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-md-and-down"><h3>oat.ms@thaimail.com</h3></span>
      <v-btn fab dark small color="indigo" @click="backPage" class="hidden-md-and-down">
        <v-icon>home</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="blue-grey darken-3" app fixed>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy; {{ new Date().getFullYear() }} Internet Thailand Public Company Limited
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { icon: 'home', text: 'Home', link: '/' }
    ]
  }),
  props: {
    source: String
  },
  methods: {
    toPage (url) {
      this.$router.push(url)
    },
    backPage () {
      window.location = '/'
    }
  }
}
</script>

<style lang="css">
</style>
