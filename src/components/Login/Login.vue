<template lang="html">
  <v-app>
    <v-content>
      <div class="vertical-center">
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <div class="text-xs-center">
                <img src="/static/img/icons/logo.png" height="180px">
              </div>
              <v-card color="grey lighten-3" class="elevation-24">
                <v-toolbar dark color="green">
                  <v-toolbar-title>INET Shareholder Meeting</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form >
                    <v-text-field @keyup.enter="login()" autocapitalize="off" prepend-icon="person" color="amber accent-4" name="login" label="ชื่อผู้ใช้งาน" v-model="username" type="text" autocomplete="off"></v-text-field>
                    <v-text-field @keyup.enter="login()" prepend-icon="lock" color="amber accent-4" name="password" label="รหัสผ่าน" id="password" v-model="password" type="password"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn round depressed class="widthfull" color="success" @click.native="login">
                    <v-icon class="pr-2">lock</v-icon>เข้าสู่ระบบ
                  </v-btn>
                  <v-snackbar :top="y === 'top'" v-model="snackbar"> {{ text }}</v-snackbar>
                </v-card-actions>
                <v-footer color="blue-grey darken-1" class="pa-3">
                  <v-flex xs12 py-3 text-xs-center white--text>
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
      isLoading: false,
      snackbar: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 6000,
      text: 'ยินดีต้อนรับเข้าสู่ INET Shareholder'
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
          this.snackbar = true
          setTimeout(function () { window.location = '/manageAgenda' }, 2000)
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
/* #app {
background-image: url('/static/img/icons/104.jpg');
height: 100%;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
} */
.content:before {
  content: "";
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;

  /* background-position: center; */
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('/static/img/icons/bg.jpg');
  height: 100%;

  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -o-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
}
.content {
  position: fixed;
  left: 0;
  right: 0;
  z-index: 0;
  margin-left: 20px;
  margin-right: 20px;
}
.vertical-center {
  min-height: 100%;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

</style>
