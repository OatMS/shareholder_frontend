<template>
<v-app id="inspire">
  <v-content>
        <v-container fluid fill-height hidden-lg-and-up>
          <v-toolbar color="indigo" dark fixed app>
            <v-toolbar-title>Shareholder Meeting</v-toolbar-title>
          </v-toolbar>
          <v-layout justify-center align-center>
            <v-flex text-xs-center justify-center>
              <div class="center">
                  <v-btn class="bt-choice" large color="green lighten-2">เห็นด้วย</v-btn>
                  <v-btn class="bt-choice" large color="green lighten-1">ไม่เห็นด้วย</v-btn>
                  <v-btn class="bt-choice" large color="green lighten-3">งดออกเสียง</v-btn>
                  <v-btn class="bt-choice" large color="lime darken-1">บัตรเสีย</v-btn>
                  <v-flex text-xs-right>
                    <div>
                      <v-btn flat color="primary">ยืนยัน</v-btn>
                    </div>
                  </v-flex>
              </div>
            </v-flex>
          </v-layout>
          <v-footer app color="grey lighten-3">
            INET
          </v-footer>
        </v-container>
        <v-container>
         <v-layout row wrap hidden-md-and-down hidden-md-only>
           <v-flex lg6 offset-lg3 >
             <v-card class=elevation-18>
               <v-toolbar dark>
                   <v-toolbar-title>Shareholder Meeting</v-toolbar-title>
               </v-toolbar>
               <v-layout row wrap>
                 <v-flex lg4 offset-lg4>
                   <v-btn block class="btn" color="green darken-1">เห็นด้วย</v-btn>
                 </v-flex>
                 <v-flex lg4 offset-lg4>
                   <v-btn block color="green darken-1" class="btn">ไม่เห็นด้วย</v-btn>
                 </v-flex>
                 <v-flex lg4 offset-lg4>
                   <v-btn block color="green darken-1" class="btn" green darken-1>งดออกเสียง</v-btn>
                 </v-flex>
                 <v-flex lg4 offset-lg4>
                   <v-btn block color="green darken-1" class="btn" green darken-1>บัตรเสีย</v-btn>
                 </v-flex>
               </v-layout>
             <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn flat color="black">ยืนยัน</v-btn>
             </v-card-actions>
             <v-footer>
               <v-flex text-xs-center>
               <v-spacer></v-spacer>
               &copy; {{ new Date().getFullYear() }} INET
               </v-flex>
             </v-footer>
             </v-card>
           </v-flex>
         </v-layout>
        </v-container>
  </v-content>
</v-app>







</template>
<script type="text/javascript">
export default {
  mounted () {
    this.$('.btn').click(function (e) {
      e.preventDefault()
      this.$('.btn').removeClass('active')
      this.$(this).addClass('active')
    })
  }
  // methods: {
  //   chooseButton (btn) {
  //     $(btn).toggleClass('active')
  //   }
  // }
}
</script>
<style scoped>

.btn.active {
  background: green !important;
  text-decoration: none;
}


.bt-choice{
  /* display:block; */
  width: 50%;
  margin:10px 0px;
}

.center{
  margin:0 auto;
}

</style>
