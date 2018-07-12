<template lang="html">
  <div id="app">
    <v-toolbar style="position: absolute;"color="green" class="">
      <v-flex xs12 py-3 text-xs-left white--text>
        <h3>Internet Thailand Public Company Limited {{ new Date().getFullYear() }}</h3>
      </v-flex>
      <v-flex xs12 text-xs-right white--text>
        <h4>23 เมษายน 2561</h4>
      </v-flex>
    </v-toolbar>
    <md-card>
      <md-card-media>
        <!-- swiper -->
        <swiper :options="swiperOption">
          <swiper-slide>
            <v-content class="centerDiv">
              <section>
                <v-layout column align-center justify-center class="white--text border">
                  <img src="/static/img/icons/logo.gif" height="100" class="mt-5 mb-5">
                  <h1 class="black--text mb-4 display-1 text-xs-center">Annual General Meeting of Shareholders {{ new Date().getFullYear() }}</h1>
                  <div class="black--text subheading text-xs-center">การประชุมสามัญผู้ถือหุ้นประจำปี {{ new Date().getFullYear() }}</div>
                </v-layout>
              </section>
            </v-content>
          </swiper-slide>
          <swiper-slide>
            <v-content class="centerDiv">
              <section>
                <v-layout row wrap class="white--text border">

                  <v-flex xs12>
                    <v-flex xs12>
                      <h1 class="black--text mb-5">ผู้ถือหุ้น</h1>
                    </v-flex>

                    <v-flex class="mb-3" xs12>
                      <span style="float: left;"  class="mr-5 black--text">จำนวนหุ้นทั้งหมด</span>
                      <span  style="float: right;" class="black--text">500,041,575 หุ้น</span>
                      <div style="clear: both;"></div>
                      <v-divider></v-divider>
                    </v-flex>

                    <v-flex class="mb-3" xs12>
                      <span style="float: left;" class="mr-5 black--text">จำนวนผู้ถือหุ้น</span>
                      <span style="float: right;" class="black--text">3991 คน</span>
                      <div style="clear: both;"></div>
                      <v-divider></v-divider>
                    </v-flex>

                    <v-flex class="mb-3" xs12>
                      <span style="float: left;" class="mr-5 black--text">จำนวนหุ้นที่ลงทะเบียน</span>
                      <span style="float: right;" class="black--text">272,143,752 หุ้น</span>
                      <div style="clear: both;"></div>
                      <v-divider></v-divider>
                    </v-flex>
                  </v-flex>

                  <v-flex class="mb-3" xs12>
                    <span style="float: left;" class="mr-5 black--text">คิดเป็นร้อยละ</span>
                    <span style="float: right;" class="black--text">54.42</span>
                    <div style="clear: both;"></div>
                    <v-divider></v-divider>
                  </v-flex>
                </v-flex>

                <v-flex class="mb-3" xs12>
                  <span style="float: left;" class="mr-5 black--text">จำนวนผู้ลงทะเบียน</span>
                  <span style="float: right;" class="black--text">84 คน</span>
                  <div style="clear: both;"></div>
                  <v-divider></v-divider>
                </v-flex>
              </v-flex>

              <v-flex class="mb-3" xs12>
                <span style="float: left;" class="mr-5 black--text">-----ผู้มาลงคะแนนด้วยตัวเอง</span>
                <span style="float: right;" class="black--text">53 คน</span>
                <div style="clear: both;"></div>
                <v-divider></v-divider>
              </v-flex>
            </v-flex>

            <v-flex class="mb-3" xs12>
              <span style="float: left;" class="mr-5 black--text">-----ผู้มอบฉันทะ</span>
              <span style="float: right;" class="black--text">31 คน</span>
              <div style="clear: both;"></div>
              <v-divider></v-divider>
            </v-flex>
          </v-flex>

        </v-layout>
      </section>
    </v-content>
  </swiper-slide>
  <swiper-slide>
    <v-content class="centerDiv">
      <section>
        <v-layout row wrap class="white--text border">

          <v-flex xs12>
            <h2 class="black--text mb-5">วาระที่ 2 พิจารณารับรองรายงานการประชุมสามัญผู้ถือหุ้นประจำปี 2560 ซึ่งประชุมเมื่อวันที่ 21 เมษายน 2560</h2>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span class="mr-5 black--text">เห็นด้วย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">271,728,732 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">99.9853 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">40,000 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0.0147 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">375,000 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>

          <v-flex md4>
            <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">0 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>

        </v-layout>
      </section>
    </v-content>
  </swiper-slide>
  <swiper-slide>
    <v-content class="centerDiv">
      <section>
        <v-layout row wrap class="white--text border">

          <v-flex xs12>
            <h2 class="black--text mb-5">วาระที่ 4 พิจารณาอนุมัติงบการเงินประจำปีสิ้นสุด ณ วันที่ 31 ธันวาคม 2560 ซึ่งผ่านการตรวจสอบจากผู้สอบบัญชี</h2>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span class="mr-5 black--text">เห็นด้วย</span>
            <!-- <div style="clear: both;"></div> -->
            <!-- <v-divider></v-divider> -->
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">272,058,632 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">99.9963 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">10,100 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0.0037 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">75,000 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>

          <v-flex md4>
            <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">0 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>

        </v-layout>
      </section>
    </v-content>
  </swiper-slide>
  <swiper-slide>
    <v-content class="centerDiv">
      <section>
        <v-layout row wrap class="white--text border">

          <v-flex xs12>
            <h2 class="black--text mb-5">วาระที่ 5 พิจารณาจัดสรรกำไรสุทธิเป็นทุนสำรองตามกฎหมายและการจ่ายเงินปันผลสำหรับผลประกอบการประจำปี 2560</h2>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span class="mr-5 black--text">เห็นด้วย</span>
            <!-- <div style="clear: both;"></div> -->
            <!-- <v-divider></v-divider> -->
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">185,924,153 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">69.0337 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">83,399,579 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">30.9663 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">2,820,000 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>

          <v-flex md4>
            <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">0 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
  </swiper-slide>
  <swiper-slide>
    <v-content class="centerDiv">
      <section>
        <v-layout row wrap class="white--text border">

          <v-flex xs12>
            <h2 class="black--text mb-5">วาระที่ 6.1 พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 นายมรกต เธียรมนตรี</h2>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span class="mr-5 black--text">เห็นด้วย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">185,924,153 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">69.0337 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">83,399,579 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">30.9663 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">2,820,000 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>

          <v-flex md4>
            <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">0 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
  </swiper-slide>
  <swiper-slide>
    <v-content class="centerDiv">
      <section>
        <v-layout row wrap class="white--text border">

          <v-flex xs12>
            <h2 class="black--text mb-5">วาระที่ 6.2 พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 นายอนิรุทธ์ หิรัญรักษ์</h2>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span class="mr-5 black--text">เห็นด้วย</span>
            <!-- <div style="clear: both;"></div> -->
            <!-- <v-divider></v-divider> -->
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">185,924,153 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">69.0337 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">83,399,579 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">30.9663 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">2,820,000 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>

          <v-flex md4>
            <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">0 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
  </swiper-slide>
  <swiper-slide>
    <v-content class="centerDiv">
      <section>
        <v-layout row wrap class="white--text border">

          <v-flex xs12>
            <h2 class="black--text mb-5">วาระที่ 6.3 พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 นางมรกต กุลธรรมโยธิน</h2>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span class="mr-5 black--text">เห็นด้วย</span>
            <!-- <div style="clear: both;"></div> -->
            <!-- <v-divider></v-divider> -->
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">185,924,153 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">69.0337 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">83,399,579 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">30.9663 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">2,820,000 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>

          <v-flex md4>
            <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">0 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
  </swiper-slide>
  <swiper-slide>
    <v-content class="centerDiv">
      <section>
        <v-layout row wrap class="white--text border">

          <v-flex xs12>
            <h2 class="black--text mb-5">วาระที่ 6.4 พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 นางสาวนฤมล วังศธรธนคุณ</h2>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span class="mr-5 black--text">เห็นด้วย</span>
            <!-- <div style="clear: both;"></div> -->
            <!-- <v-divider></v-divider> -->
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">185,924,153 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">69.0337 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">83,399,579 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">30.9663 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">2,820,000 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>

          <v-flex md4>
            <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">0 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
  </swiper-slide>
  <swiper-slide>
    <v-content class="centerDiv">
      <section>
        <v-layout row wrap class="white--text border">

          <v-flex xs12>
            <h2 class="black--text mb-5">วาระที่ 7 พิจารณาอนุมัติการกำหนดค่าตอบแทนกรรมการ</h2>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span class="mr-5 black--text">เห็นด้วย</span>
            <!-- <div style="clear: both;"></div> -->
            <!-- <v-divider></v-divider> -->
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">185,924,153 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">69.0337 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">83,399,579 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">30.9663 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">2,820,000 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>

          <v-flex md4>
            <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">0 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
  </swiper-slide>
  <swiper-slide>
    <v-content class="centerDiv">
      <section>
        <v-layout row wrap class="white--text border">

          <v-flex xs12>
            <h2 class="black--text mb-5">วาระที่ 8 พิจารณาแต่งตั้งผู้สอบบัญชีและกำหนดค่าสอบบัญชีประจำปี 2561</h2>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span class="mr-5 black--text">เห็นด้วย</span>
            <!-- <div style="clear: both;"></div> -->
            <!-- <v-divider></v-divider> -->
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">185,924,153 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">69.0337 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">83,399,579 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">30.9663 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">2,820,000 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>

          <v-flex md4>
            <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">0 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
  </swiper-slide>
  <swiper-slide>
    <v-content class="centerDiv">
      <section>
        <v-layout row wrap class="white--text border">

          <v-flex xs12>
            <h2 class="black--text mb-5">วาระที่ 9 พิจารณาอนุมัติการแก้ไขข้อบังคับ บริษัท อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน)</h2>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span class="mr-5 black--text">เห็นด้วย</span>
            <!-- <div style="clear: both;"></div> -->
            <!-- <v-divider></v-divider> -->
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">185,924,153 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">69.0337 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">ไม่เห็นด้วย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">83,399,579 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">30.9663 %</span>
          </v-flex>

          <v-flex class="mb-4" md4>
            <span style="float: left;"  class="mr-5 black--text">งดออกเสียง</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">2,820,000 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>

          <v-flex md4>
            <span style="float: left;"  class="mr-5 black--text">บัตรเสีย</span>
          </v-flex>

          <v-flex style="text-align: center;" md4>
            <span class="black--text">0 หุ้น</span>
          </v-flex>

          <v-flex style="text-align: right;" md4>
            <span class="black--text">0 %</span>
          </v-flex>
        </v-layout>
      </section>
    </v-content>
  </swiper-slide>
  <div class="swiper-pagination" slot="pagination"></div>
</swiper>
</md-card-media>
</md-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Annual General Meeting of Shareholders',
      header: 'Internet Thailand Public Company Limited',
      page: 1,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        // effect: 'fade',
        keyboard: {
          enabled: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>
<style lang="css">
#app {
  background-image: url('/static/img/icons/103.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.border{
  border-radius: 1em;
  border-spacing: 200px 240px 100px;
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
.swiper-container {
  height: 760px;
  width: 100%;
}
.swiper-slide {
  font-size: 28px;
  font-weight: 700;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  /* -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; */
}
</style>
