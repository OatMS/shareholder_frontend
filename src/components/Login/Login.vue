<template lang="html">
  <v-app>
    <v-content>
      <div id="app">
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="green">
                  <v-toolbar-title>INET Shareholder Meeting</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form >
                    <v-text-field @keyup.enter="login()" autocapitalize="off" prepend-icon="person" color="amber accent-4" name="login" label="Username" v-model="username" type="text" autocomplete="off"></v-text-field>
                    <v-text-field @keyup.enter="login()" prepend-icon="lock" color="amber accent-4" name="password" label="Password" id="password" v-model="password" type="password"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn depressed class="widthfull" color="success" @click.native="login">
                    <v-icon>lock_open</v-icon>Login
                  </v-btn>
                </v-card-actions>
                <v-footer  class="pa-3">
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
    // // getLogin () {
    // //   this.isLoading = true
    // //   if (this.username.trim() === '') {
    // //     this.isLoading = false
    // //     this.$swal('กรุณากรอก Username', '', 'error')
    // //   } else if (this.password.trim() === '') {
    // //     this.isLoading = false
    // //     this.$swal('กรุณากรอก Password', '', 'error')
    // //   }
    // //   // $('input').blur()
    // //   this.Loading = false
    // //   // console.log('login')
    // },
    login () {
      var data = {
        'username': this.username,
        'password': this.password
      }
      this.isLoading = true
      if (this.username.trim() === '') {
        this.isLoading = false
        this.$swal('กรุณากรอก Username', '', 'warning')
        return
      } else if (this.password.trim() === '') {
        this.isLoading = false
        this.$swal('กรุณากรอก Password', '', 'warning')
        return
      }
      this.Loading = false

      this.axios.post('http://203.154.58.87:5000' + '/login', data).then((response) => {
        var result = response.data
        if (response.status === 200) {
          console.log(result)
        }
        if (result.status === 'success') {
          window.location = '/manageAgenda'
          // this.$cookies.set('information', Encode.encode(JSON.stringify(result.oneIdData[0])), null, '/', process.env.DOMAIN)
          this.$cookies.set('username_shareholder', this.username)
        } else {
          this.isLoading = false
          this.$swal('', 'กรุณาตรวจสอบอีเมลและรหัสผ่านใหม่อีกครั้ง', 'error')
        }
        // this.$cookies.remove('username_inet_register')
      })
    }
    // mounted () {
    //   this.axios.get('http://203.154.58.87:5000' + '/login').then((response) => {
    //     var result = response.data
    //     if (response.status === 200) {
    //       this.username = result1
    //       console.log(result)
    //     }
    //   }
    // }
  }
}
</script>

<style lang="css">
#app {
  background-image: url('/static/img/icons/104.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
