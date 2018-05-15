<template>
  <v-app id="inspire">
    <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.lgAndUp" app v-model="drawer">
      <v-list dense>
        <template v-for="item in items">
          <v-layout row v-if="item.heading" align-center :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-flex>
          </v-layout>
          <v-list-group v-else-if="item.children" v-model="item.model" :key="item.text" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i" @click="" >
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ child.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="" :key="item.text">
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
    <v-toolbar color="blue darken-3" dark app :clipped-left="$vuetify.breakpoint.lgAndUp" fixed >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span>INET Shareholder</span>
      </v-toolbar-title>
      <v-spacer> </v-spacer>
        <v-btn @click="logout()" fab dark small color="indigo">
          <v-icon dark>person</v-icon>
        </v-btn>
      <span> <h1>oat.ms@thaimail.com </h1></span>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer color = "success"  class="pa-3">
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy; {{ new Date().getFullYear() }} Internet Thailand Public Company Limited
      </v-flex>
    </v-footer>

  </v-app>
</template>

<script>

export default {
  data () {
    return {
      dialog: false,
      drawer: null,
      items: [
        { icon: 'note_add', text: 'ลงทะเบียนผู้ถือหุ้น' },
        { icon: 'assignment_returned', text: 'บันทึกคะแนน' },
        { icon: 'open_in_new', text: 'ลงคะแนนผู้ถือหุ้นครั้งถัดไปใหม่' },
        // {
        //   icon: 'keyboard_arrow_up',
        //   'icon-alt': 'keyboard_arrow_down',
        //   text: 'Labels',
        //   model: true,
        //   children: [
        //     { icon: 'add', text: 'Create label' }
        //   ]
        // },
        { icon: 'slideshow', text: 'Presentation' },
        // { icon: 'help', text: 'Help' },
        { icon: 'phonelink', text: 'สรุปผลคะแนนย้อนหลัง' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'จัดการข้อมูลผู้ถือหุ้น',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'พิมพ์ข้อมูลผู้ถือหุ้น' }
          ]
        }
      ]
    }
  },
  methods: {
    logout () {
      console.log('logout')
      window.location = '/login'
      // this.$cookies.remove('information', '/', process.env.DOMAIN)
      this.$cookies.remove('username_shareholder')
      console.log(this.$cookies.isKey('username_shareholder'))
    }
  },
  props: {
    source: String
  }
}
</script>


<style media="screen">

</style>
