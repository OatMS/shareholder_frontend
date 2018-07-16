<template lang="html">
  <div id="app">
    <v-toolbar color="green" class="">
      <v-flex xs12 py-3 text-xs-left white--text>
        <h3>Internet Thailand Public Company Limited {{ new Date().getFullYear() }}</h3>
      </v-flex>
      <v-flex xs12 text-xs-right white--text>
        <h4>23 เมษายน 2561</h4>
      </v-flex>
    </v-toolbar>
    <div v-if="i==0">
      <v-layout style="margin-top: 200px;" column align-center justify-center class="white--text">
        <img src="/static/img/icons/logo.gif" height="100" class="mt-5 mb-5">
        <h1 class="white--text mb-4 display-1 text-xs-center">Annual General Meeting of Shareholders {{ new Date().getFullYear() }}</h1>
        <div class="white--text subheading text-xs-center">การประชุมสามัญผู้ถือหุ้นประจำปี {{ new Date().getFullYear() }}</div>
        <!-- <span id="element1" @click="changeText(1)">Read More...</span>
        <span id="element2" @click="changeText(2)">Read More...</span> -->
      </v-layout>
    </div>
    <div v-if="i==1">
      <v-content class="centerDiv">
        <section>
          <v-layout row wrap class="white--text border">

            <v-flex xs12>
              <v-flex xs12>
                <h1 class="black--text mb-5">ผู้ถือหุ้น</h1>
              </v-flex>

              <v-flex class="mb-3" xs12>
                <span style="float: left;"  class="mr-5 black--text">จำนวนหุ้นทั้งหมด</span>
                <span  style="float: right;" class="black--text">{{ entrie[0].shareholders }} หุ้น</span>
                <div style="clear: both;"></div>
              </v-flex>

              <v-flex class="mb-3" xs12>
                <span style="float: left;" class="mr-5 black--text">จำนวนผู้ถือหุ้น</span>
                <span style="float: right;" class="black--text">{{ entrie[0].personshareholders }} คน</span>
                <div style="clear: both;"></div>
                <v-divider style="margin-top: 50px;"></v-divider>
              </v-flex>

              <v-flex class="mb-3" xs12>
                <span style="float: left;" class="mr-5 black--text">จำนวนหุ้นที่ลงทะเบียน</span>
                <span style="float: right;" class="black--text">{{ entrie[0].regisshareholders }} หุ้น</span>
                <div style="clear: both;"></div>
              </v-flex>
            </v-flex>

            <v-flex class="mb-3" xs12>
              <span style="float: left;" class="mr-5 black--text">คิดเป็นร้อยละ</span>
              <span style="float: right;" class="black--text">{{ entrie[0].percent }}</span>
              <div style="clear: both;"></div>
            </v-flex>
          </v-flex>

          <v-flex class="mb-3" xs12>
            <span style="float: left;" class="mr-5 black--text">จำนวนผู้ลงทะเบียน</span>
            <span style="float: right;" class="black--text">{{ entrie[0].regisperson }} คน</span>
            <div style="clear: both;"></div>
          </v-flex>
        </v-flex>

        <v-flex class="mb-3" xs12>
          <span style="float: left;" class="mr-5 black--text">-----ผู้มาลงคะแนนด้วยตัวเอง</span>
          <span style="float: right;" class="black--text">{{ entrie[0].membershareholders }} คน</span>
          <div style="clear: both;"></div>
        </v-flex>
      </v-flex>

      <v-flex class="mb-3" xs12>
        <span style="float: left;" class="mr-5 black--text">-----ผู้มอบฉันทะ</span>
        <span style="float: right;" class="black--text">{{ entrie[0].proxyshareholders }} คน</span>
        <div style="clear: both;"></div>
      </v-flex>
    </v-flex>
  </v-layout>
</section>
</v-content>
</div>
<div v-if="i==2">
  <v-content class="centerDiv">
    <section>
      <v-layout row wrap class="white--text border">

        <v-flex xs12>
          <h2 class="black--text text-xs-center mb-5">วาระที่ {{ agendaVote[0].agenda }} {{ agendaVote[0].title }}</h2>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span class="mr-5 black--text">เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[0].accept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">99.9853 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[0].noaccept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0.0147 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[0].abstain }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

        <v-flex md4>
          <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[0].broke }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

      </v-layout>
    </section>
  </v-content>
</div>
<div v-if="i==3">
  <v-content class="centerDiv">
    <section>
      <v-layout row wrap class="white--text border">

        <v-flex xs12>
          <h2 class="black--text text-xs-center mb-5">วาระที่ {{ agendaVote[1].agenda }} {{ agendaVote[1].title }}</h2>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span class="mr-5 black--text">เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[1].accept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">99.9853 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[1].noaccept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0.0147 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[1].abstain }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

        <v-flex md4>
          <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[1].broke }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

      </v-layout>
    </section>
  </v-content>
</div>
<div v-if="i==4">
  <v-content class="centerDiv">
    <section>
      <v-layout row wrap class="white--text border">

        <v-flex xs12>
          <h2 class="black--text text-xs-center mb-5">วาระที่ {{ agendaVote[2].agenda }} {{ agendaVote[2].title }}</h2>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span class="mr-5 black--text">เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[2].accept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">99.9853 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[2].noaccept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0.0147 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[2].abstain }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

        <v-flex md4>
          <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[2].broke }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

      </v-layout>
    </section>
  </v-content>
</div>
<div v-if="i==5">
  <v-content class="centerDiv">
    <section>
      <v-layout row wrap class="white--text border">

        <v-flex xs12>
          <h2 class="black--text text-xs-center mb-5">วาระที่ {{ agendaVote[3].agenda }}.{{ agendaVote[3].subAgenda }} {{ agendaVote[3].title }}</h2>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span class="mr-5 black--text">เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[3].accept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">99.9853 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[3].noaccept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0.0147 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[3].abstain }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

        <v-flex md4>
          <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[3].broke }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

      </v-layout>
    </section>
  </v-content>
</div>
<div v-if="i==6">
  <v-content class="centerDiv">
    <section>
      <v-layout row wrap class="white--text border">

        <v-flex xs12>
          <h2 class="black--text text-xs-center mb-5">วาระที่ {{ agendaVote[4].agenda }}.{{ agendaVote[4].subAgenda }} {{ agendaVote[4].title }}</h2>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span class="mr-5 black--text">เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[4].accept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">99.9853 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[4].noaccept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0.0147 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[4].abstain }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

        <v-flex md4>
          <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[4].broke }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

      </v-layout>
    </section>
  </v-content>
</div>
<div v-if="i==7">
  <v-content class="centerDiv">
    <section>
      <v-layout row wrap class="white--text border">

        <v-flex xs12>
          <h2 class="black--text text-xs-center mb-5">วาระที่ {{ agendaVote[5].agenda }}.{{ agendaVote[5].subAgenda }} {{ agendaVote[5].title }}</h2>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span class="mr-5 black--text">เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[5].accept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">99.9853 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[5].noaccept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0.0147 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[5].abstain }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

        <v-flex md4>
          <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[5].broke }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

      </v-layout>
    </section>
  </v-content>
</div>
<div v-if="i==8">
  <v-content class="centerDiv">
    <section>
      <v-layout row wrap class="white--text border">

        <v-flex xs12>
          <h2 class="black--text text-xs-center mb-5">วาระที่ {{ agendaVote[6].agenda }}.{{ agendaVote[6].subAgenda }} {{ agendaVote[6].title }}</h2>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span class="mr-5 black--text">เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[6].accept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">99.9853 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[6].noaccept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0.0147 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[6].abstain }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

        <v-flex md4>
          <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[6].broke }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

      </v-layout>
    </section>
  </v-content>
</div>
<div v-if="i==9">
  <v-content class="centerDiv">
    <section>
      <v-layout row wrap class="white--text border">

        <v-flex xs12>
          <h2 class="black--text text-xs-center mb-5">วาระที่ {{ agendaVote[7].agenda }} {{ agendaVote[7].title }}</h2>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span class="mr-5 black--text">เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[7].accept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">99.9853 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[7].noaccept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0.0147 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[7].abstain }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

        <v-flex md4>
          <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[7].broke }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

      </v-layout>
    </section>
  </v-content>
</div>
<div v-if="i==10">
  <v-content class="centerDiv">
    <section>
      <v-layout row wrap class="white--text border">

        <v-flex xs12>
          <h2 class="black--text text-xs-center mb-5">วาระที่ {{ agendaVote[8].agenda }} {{ agendaVote[8].title }}</h2>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span class="mr-5 black--text">เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[8].accept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">99.9853 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[8].noaccept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0.0147 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[8].abstain }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

        <v-flex md4>
          <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[8].broke }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

      </v-layout>
    </section>
  </v-content>
</div>
<div v-if="i==11">
  <v-content class="centerDiv">
    <section>
      <v-layout row wrap class="white--text border">

        <v-flex xs12>
          <h2 class="black--text text-xs-center mb-5">วาระที่ {{ agendaVote[9].agenda }} {{ agendaVote[9].title }}</h2>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span class="mr-5 black--text">เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[9].accept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">99.9853 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[9].noaccept }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0.0147 %</span>
        </v-flex>

        <v-flex class="mb-4" md4>
          <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[9].abstain }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

        <v-flex md4>
          <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
        </v-flex>

        <v-flex style="text-align: center;" md4>
          <span class="black--text">{{ agendaVote[9].broke }} หุ้น</span>
        </v-flex>

        <v-flex style="text-align: right;" md4>
          <span class="black--text">0 %</span>
        </v-flex>

      </v-layout>
    </section>
  </v-content>
</div>
<div v-if="i==12">
  <v-layout style="margin-top: 200px;" column align-center justify-center class="white--text">
    <img src="/static/img/icons/logo.gif" height="100" class="mt-5 mb-5">
    <!-- <h1 class="white--text mb-4 display-1 text-xs-center">Annual General Meeting of Shareholders {{ new Date().getFullYear() }}</h1>
    <div class="white--text subheading text-xs-center">การประชุมสามัญผู้ถือหุ้นประจำปี {{ new Date().getFullYear() }}</div> -->
    <h1 class="text-xs-center">ขอขอบคุณผู้ถือหุ้นทุกท่านที่เข้ามาร่วมประชุม</h1>
  </v-layout>
</div>
<!-- <p id="output"> {{ arr[i] }} </p> -->
<!-- <v-btn color="primary" @click="prevItem">Previous</v-btn>
<v-btn color="primary" @click="nextItem">Next</v-btn> -->
</div>
</template>

<script>
export default {
  data () {
    return {
      arr: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11', 'page12', 'page13'],
      entrie: [
        {
          'shareholders': '500,041,575',
          'personshareholders': '3,991',
          'regisshareholders': '272,143,752',
          'percent': '54.42',
          'regisperson': '84',
          'membershareholders': '53',
          'proxyshareholders': '31'
        }
      ],
      agendaVote: [
        {
          'agenda': 2,
          'subAgenda': '',
          'title': 'พิจารณารับรองรายงานการประชุมสามัญผู้ถือหุ้นประจำปี 2560 ซึ่งประชุมเมื่อวันที่ 21 เมษายน 2560',
          'accept': '271,728,732',
          'noaccept': '40,000',
          'abstain': '375,000',
          'broke': '0',
          'imagePath': '/'
        },
        {
          'agenda': 4,
          'subAgenda': '',
          'title': 'พิจารณาอนุมัติงบการเงินประจำปีสิ้นสุด ณ วันที่ 31 ธันวาคม 2560 ซึ่งผ่านการตรวจสอบจากผู้สอบบัญชี',
          'accept': '272,058,632',
          'noaccept': '10,100',
          'abstain': '75,000',
          'broke': '0',
          'imagePath': '/'
        },
        {
          'agenda': 5,
          'subAgenda': '',
          'title': 'พิจารณาจัดสรรกำไรสุทธิเป็นทุนสำรองตามกฎหมายและการจ่ายเงินปันผลสำหรับผลประกอบการประจำปี 2560',
          'accept': '185,924,153',
          'noaccept': '83,399,579',
          'abstain': '2,820,000',
          'broke': '0',
          'imagePath': '/'
        },
        {
          'agenda': 6,
          'subAgenda': 1,
          'title': 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 นายมรกต เธียรมนตรี',
          'accept': '258,686,124',
          'noaccept': '32,100',
          'abstain': '105,000',
          'broke': '0',
          'imagePath': '/'
        },
        {
          'agenda': 6,
          'subAgenda': 2,
          'title': 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 นายอนิรุทธ์ หิรัญรักษ',
          'accept': '258,678,207',
          'noaccept': '40,017',
          'abstain': '105,000',
          'broke': '0',
          'imagePath': '/'
        },
        {
          'agenda': 6,
          'subAgenda': 3,
          'title': 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 นางมรกต กุลธรรมโยธิน',
          'accept': '258,686,224',
          'noaccept': '32,000',
          'abstain': '105,000',
          'broke': '0',
          'imagePath': '/'
        },
        {
          'agenda': 6,
          'subAgenda': 4,
          'title': 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 นางสาวนฤมล วังศธรธนคุณ',
          'accept': '258,742,707',
          'noaccept': '40,000',
          'abstain': '80,517',
          'broke': '0',
          'imagePath': '/'
        },
        {
          'agenda': 7,
          'subAgenda': '',
          'title': 'พิจารณาอนุมัติการกำหนดค่าตอบแทนกรรมการ',
          'accept': '270,715,908',
          'noaccept': '1,057,084',
          'abstain': '105,000',
          'broke': '0',
          'imagePath': '/'
        },
        {
          'agenda': 8,
          'subAgenda': '',
          'title': 'พิจารณาแต่งตั้งผู้สอบบัญชีและกำหนดค่าสอบบัญชีประจำปี 2561',
          'accept': '272,133,632',
          'noaccept': '10,100',
          'abstain': '0',
          'broke': '0',
          'imagePath': '/'
        },
        {
          'agenda': 9,
          'subAgenda': '',
          'title': 'พิจารณาอนุมัติการแก้ไขข้อบังคับ บริษัท อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน)',
          'accept': '272,028,632',
          'noaccept': '10,100',
          'abstain': '105,000',
          'broke': '0',
          'imagePath': '/'
        }
      ],
      // agenda: ['2', '4', '5', '6.1', '6.2', '6.3', '6.4', '7', '8', '9'],
      // agendaTitle: ['พิจารณารับรองรายงานการประชุมสามัญผู้ถือหุ้นประจำปี 2560 ซึ่งประชุมเมื่อวันที่ 21 เมษายน 2560', 'พิจารณาอนุมัติงบการเงินประจำปีสิ้นสุด ณ วันที่ 31 ธันวาคม 2560 ซึ่งผ่านการตรวจสอบจากผู้สอบบัญชี', 'พิจารณาจัดสรรกำไรสุทธิเป็นทุนสำรองตามกฎหมายและการจ่ายเงินปันผลสำหรับผลประกอบการประจำปี 2560', 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 นายมรกต เธียรมนตรี', 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 นายอนิรุทธ์ หิรัญรักษ', 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 นางมรกต กุลธรรมโยธิน', 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 นางสาวนฤมล วังศธรธนคุณ', 'พิจารณาอนุมัติการกำหนดค่าตอบแทนกรรมการ', 'พิจารณาแต่งตั้งผู้สอบบัญชีและกำหนดค่าสอบบัญชีประจำปี 2561', 'พิจารณาอนุมัติการแก้ไขข้อบังคับ บริษัท อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน)'],
      // Agree: ['271,728,732', '272,058,632', '185,924,153', '258,686,124', '258,678,207', '258,686,224', '258,742,707', '270,715,908', '272,133,632', '272,028,632'],
      // disAgree: ['40,000', '10,100', '83,399,579', '32,100', '40,017', '32,000', '80,517', '1,057,084', '10,100', '10,100'],
      // absTention: ['375,000', '75,000', '2,820,000', '105,000', '105,000', '105,000', '0', '105,000', '0', '105,000'],
      // invalidCard: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      i: '0'
    }
  },
  methods: {
    nextItem () {
      // console.log('Next')
      this.i = this.i + 1
      this.i = this.i % this.arr.length
      return this.arr[this.i]
    },
    prevItem () {
      // console.log('Previos')
      if (this.i === 0) {
        this.i = this.arr.length
      }
      this.i = this.i - 1
      return this.arr[this.i]
    }
  },
  mounted () {
    window.addEventListener('keyup', event => {
      if (event.keyCode === 37) {
        this.prevItem()
      } else if (event.keyCode === 39) {
        this.nextItem()
      }
    })
  }
}
</script>

<style lang="css" scoped>
#app {
  background-image: url('/static/img/icons/103.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.border{
  border-radius: 1em;
  border-spacing: 200px 240px;
  padding: 2em 2em;
  /* opacity: 0.9; */
  background: #ffffff;
}
.centerDiv{
  margin: 0;
  position: absolute;
  top: 55%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
}
</style>
