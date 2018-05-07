<template lang="html">
  <v-app id="Login">
    <v-content>
      <div id="app">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="green">
                <v-toolbar-title>INET Shareholder Meeting</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                  <v-btn icon large :href="source" target="_blank" slot="activator">
                    <v-icon> autorenew </v-icon>
                  </v-btn>
                  <span> Refresh </span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field @keyup.enter="getLogin()" autocapitalize="off" prepend-icon="person" name="login" label="Username" v-model="username" type="text" autocomplete="off"></v-text-field>
                  <v-text-field @keyup.enter="getLogin()" prepend-icon="lock" name="password" label="Password" id="password" v-model="password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn depressed class="widthfull" color="success" @click="getLogin()">
                  <v-icon>lock_open</v-icon>Login
                </v-btn>
              </v-card-actions>
              <v-footer class="pa-3">
                <v-flex xs12 py-3 text-xs-center black--text>
                  &copy; {{ new Date().getFullYear() }} INET
                </v-flex>
              </v-footer>
            </v-card>
          </v-flex>

        </v-layout>
      </v-container>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      isLoading: false
    }
  },

  methods: {
    getLogin () {
      this.isLoading = true
      if (this.username.trim() === '') {
        this.isLoading = false
        this.$swal('กรุณากรอก Username', '', 'warning')
      } else if (this.password.trim() === '') {
        this.isLoading = false
        this.$swal('กรุณากรอก Password', '', 'warning')
      }
      // $('input').blur()
      this.Loading = false
      console.log('login')
    }
  }
}
</script>

<style lang="css">
#app {
background-image: url('/static/img/icons/100.jpg');
height: 100%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
</style>
