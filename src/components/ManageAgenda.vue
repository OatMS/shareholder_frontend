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
          <v-list-group  v-else-if="item.children" v-model="item.model" :key="item.text" :prepend-icon="item.model ? item.icon : item['icon-alt']" append-icon="">
            <v-list-tile  slot="activator">
              <v-list-tile-content >
                <v-list-tile-title  >
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile class="child-padding" @click="toPage(child.link)"  v-for="(child, i) in item.children" :key="i" >

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
          <v-list-tile v-else @click="toPage(item.link)" :key="item.text">
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

      <span> <h3>oat.ms@thaimail.com</h3></span>
      <!-- <v-btn fab dark small color="indigo"> -->
        <!-- <v-icon lass="material-icons" dark>account_circle</v-icon> -->
        <v-icon class="person-icon" large dark>account_circle</v-icon>
      <!-- </v-btn> -->
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer color="primary"  class="pa-3 shareholder-footer">
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
        { icon: 'assignment_ind', text: 'ลงทะเบียนผู้ถือหุ้น', link: '/' },
        { icon: 'assignment_returned', text: 'หยุดเวลาแต่ละวาระ', link: '/agendaList' },
        { icon: 'gradient', text: 'สแกนบัตรลงคะแนน', link: '/agendaList' },
        // {
        //   icon: 'keyboard_arrow_up',
        //   'icon-alt': 'keyboard_arrow_down',
        //   text: 'Labels',
        //   model: true,
        //   children: [
        //     { icon: 'add', text: 'Create label' }
        //   ]
        // },
        { icon: 'slideshow', text: 'Presentation', link: '/agendaList' },
        // { icon: 'help', text: 'Help' },
        { icon: 'insert_drive_file', text: 'สรุปผลคะแนนย้อนหลัง', link: '/agendaList' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'จัดการการประชุม',
          model: false,
          children: [
            { icon: 'slideshow', text: 'จัดการข้อมูลการประชุม', link: '/manageMeeting' },
            { icon: 'slideshow', text: 'จัดการข้อมูลวาระ', link: '/agendaList' },
            { icon: 'slideshow', text: 'จัดการวาระการประชุม', link: '/agendaList' }
          ]
        }
      ]
    }
  },
  props: {
    source: String
  },
  methods: {
    toPage (url) {
      this.$router.push(url)
    }
  }
}
</script>


<style media="screen">
.person-icon{
  margin-left: 5px;
}

.shareholder-footer{
  background-color: #2D3548 !important;
}

.child-padding{
  padding-left: 20px;
}
</style>
