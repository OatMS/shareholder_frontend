<template lang="html">
  <div>
    <h1 style="text-align:center; font-size:2.3em; " class="mt-5">ผลคะแนนของวาระการประชุมครั้งที่ 2 ปี 2018</h1>

    <v-flex class="ml-4" xs5 md2>
      <v-select
      v-bind:items="datatable"
      v-model="selected"
      item-value="item"
      item-text="year"
      overflow
      label="Select"
      ></v-select>
    </v-flex>

    <v-data-table
    v-bind:headers="headers"
    :items="selected.test"
    class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <!-- <v-layout wrap>
      <v-flex xs12 sm1 md1>
      <td>{{ props.item.name }}</td>
    </v-flex>
    <v-flex xs12 sm8 md8>
    <td class="text-xs-left">{{ props.item.agendaname }}</td>
  </v-flex>
  <v-flex xs12 sm2 md2>
  <td class="justify-right layout px-0">
  <v-btn small round color="primary" dark>คำนวณคะแนน</v-btn>
</td>
</v-flex>
</v-layout> -->
<td>{{ props.item.name }}</td>
<td class="text-xs-left">{{ props.item.agendaname }}</td>
<!-- <td class="justify-right layout px-0">
<v-btn small round color="primary" dark>คำนวณคะแนน</v-btn>
</td> -->
<td class="text-xs-center">{{ props.item.agree }}</td>
<td class="text-xs-center">{{ props.item.disagree }}</td>
<td class="text-xs-center">{{ props.item.discard }}</td>

</template>
<template slot="no-data">
  <v-btn color="primary" @click="initialize">Reset</v-btn>
</template>
<template slot="pageText" slot-scope="props">
  Lignes {{ props.pageStart }} - {{ props.pageStop }} de {{ props.itemsLength }}
</template>
</v-data-table>
</div>
</template>

<script>
export default {
  data: () => ({
    selectedItem: {},
    showInfo: false,
    dialog: false,
    selected: [],
    dropdown_font: [],
    headers: [
      {
        text: 'วาระที่',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'ชื่อวาระ', value: 'agendaname', sortable: false },
      { text: 'เห็นด้วย (เสียง)', value: 'agree', sortable: true },
      { text: 'ไม่เห็นด้วย (เสียง)', value: 'disagree', sortable: true },
      // { text: 'Protein (g)', value: 'protein', sortable: false },
      { text: 'งดออกเสียง (เสียง)', value: 'discard', sortable: true }
    ],
    datatable: [],
    editedIndex: -1
  }),
  watch: {
    selectedItem () {
      this.showInfo = true
      console.log(this.selectedItem)
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.datatable = [
        {
          name: '1',
          subname: '',
          agendaname: 'เรื่องประธานแจ้งเพื่อทราบ (ถ้ามี)',
          agree: 111,
          disagree: 24,
          discard: 4.0,
          year: 2008,
          test: [{
            name: '1',
            subname: '',
            agendaname: 'เรื่องประธานแจ้งเพื่อทราบ (ถ้ามี)',
            agree: 111,
            disagree: 24,
            discard: 4.0
          },
          {
            name: '2',
            subname: '',
            agendaname: 'พิจารณารับรองรายงานการประชุมสามัญผู้ถือหุ้นประจำปี 2560 ซึ่งประชุมเมื่อวันที่ 21 เมษายน 2560 (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 1)',
            agree: 112,
            disagree: 37,
            discard: 4.3
          },
          {
            name: '3',
            subname: '',
            agendaname: 'รับทราบรายงานคณะกรรมการบริษัทเกี่ยวกับผลการดำเนินงานประจำปี 2560 (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 2)',
            agree: 113,
            disagree: 23,
            discard: 6.0
          },
          {
            name: '5',
            subname: '',
            agendaname: 'พิจารณาจัดสรรกำไรสุทธิเป็นทุนสำรองตามกฎหมายและการจ่ายเงินปันผลสำหรับผลประกอบการประจำปี 2560',
            agree: 115,
            disagree: 49,
            discard: 3.9
          },
          {
            name: '6',
            subname: '',
            agendaname: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3)',
            agree: 116,
            disagree: 94,
            discard: 0.0
          },
          {
            name: '6.1',
            subname: '',
            agendaname: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3) นายอนิรุทธ์ หิรัญรักษ์',
            agree: 117,
            disagree: 98,
            discard: 0
          },
          {
            name: '6.2',
            subname: '',
            agendaname: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3) นางมรกต กุลธรรมโยธิน',
            agree: 118,
            disagree: 87,
            discard: 6.5
          },
          {
            name: '6.3',
            subname: '',
            agendaname: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3) นายมรกต เธียรมนตรี',
            agree: 119,
            disagree: 51,
            discard: 4.9
          },
          {
            name: '6.4',
            subname: '',
            agendaname: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3) นางสาวนฤมล วังศธรธนคุณ',
            agree: 120,
            disagree: 65,
            discard: 7
          },
          {
            name: '7',
            subname: '',
            agendaname: 'พิจารณาอนุมัติการกำหนดค่าตอบแทนกรรมการ',
            agree: 125,
            disagree: 51,
            discard: 4.9
          },
          {
            name: '8',
            subname: '',
            agendaname: 'พิจารณาแต่งตั้งผู้สอบบัญชีและกำหนดค่าสอบบัญชีประจำปี 2561 (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 6)',
            agree: 121,
            disagree: 51,
            discard: 4.9
          },
          {
            name: '9',
            subname: '',
            agendaname: 'พิจารณาอนุมัติการแก้ไขข้อบังคับ บริษัท อินเทอร์เน็ตประเทศไทย จำกัด(มหาชน) ข้อ 16 (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 7)',
            agree: 123,
            disagree: 51,
            discard: 4.9
          },
          {
            name: '10',
            subname: '',
            agendaname: 'พิจารณาเรื่องอื่นๆ (ถ้ามี)',
            agree: 124,
            disagree: 51,
            discard: 4.9
          }]
        },
        {
          name: '2',
          subname: '',
          agendaname: 'พิจารณารับรองรายงานการประชุมสามัญผู้ถือหุ้นประจำปี 2560 ซึ่งประชุมเมื่อวันที่ 21 เมษายน 2560 (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 1)',
          agree: 112,
          disagree: 37,
          discard: 4.3,
          year: 2009,
          test: [{
            name: '1',
            subname: '',
            agendaname: 'เรื่องประธานแจ้งเพื่อทราบ (ถ้ามี)',
            agree: 111,
            disagree: 24,
            discard: 4.0
          },
          {
            name: '2',
            subname: '',
            agendaname: 'พิจารณารับรองรายงานการประชุมสามัญผู้ถือหุ้นประจำปี 2560 ซึ่งประชุมเมื่อวันที่ 21 เมษายน 2560 (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 1)',
            agree: 112,
            disagree: 37,
            discard: 4.3
          },
          {
            name: '3',
            subname: '',
            agendaname: 'รับทราบรายงานคณะกรรมการบริษัทเกี่ยวกับผลการดำเนินงานประจำปี 2560 (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 2)',
            agree: 113,
            disagree: 23,
            discard: 6.0
          },
          {
            name: '5',
            subname: '',
            agendaname: 'พิจารณาจัดสรรกำไรสุทธิเป็นทุนสำรองตามกฎหมายและการจ่ายเงินปันผลสำหรับผลประกอบการประจำปี 2560',
            agree: 115,
            disagree: 49,
            discard: 3.9
          },
          {
            name: '6',
            subname: '',
            agendaname: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3)',
            agree: 116,
            disagree: 94,
            discard: 0.0
          },
          {
            name: '6.1',
            subname: '',
            agendaname: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3) นายอนิรุทธ์ หิรัญรักษ์',
            agree: 117,
            disagree: 98,
            discard: 0
          },
          {
            name: '6.2',
            subname: '',
            agendaname: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3) นางมรกต กุลธรรมโยธิน',
            agree: 118,
            disagree: 87,
            discard: 6.5
          },
          {
            name: '6.3',
            subname: '',
            agendaname: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3) นายมรกต เธียรมนตรี',
            agree: 119,
            disagree: 51,
            discard: 4.9
          },
          {
            name: '6.4',
            subname: '',
            agendaname: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3) นางสาวนฤมล วังศธรธนคุณ',
            agree: 120,
            disagree: 65,
            discard: 7
          },
          {
            name: '7',
            subname: '',
            agendaname: 'พิจารณาอนุมัติการกำหนดค่าตอบแทนกรรมการ',
            agree: 125,
            disagree: 51,
            discard: 4.9
          },
          {
            name: '8',
            subname: '',
            agendaname: 'พิจารณาแต่งตั้งผู้สอบบัญชีและกำหนดค่าสอบบัญชีประจำปี 2561 (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 6)',
            agree: 121,
            disagree: 51,
            discard: 4.9
          },
          {
            name: '9',
            subname: '',
            agendaname: 'พิจารณาอนุมัติการแก้ไขข้อบังคับ บริษัท อินเทอร์เน็ตประเทศไทย จำกัด(มหาชน) ข้อ 16 (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 7)',
            agree: 123,
            disagree: 51,
            discard: 4.9
          }]
        }
      ]
    }
  },
  mounted () {
    this.axios.post('http://127.0.0.1:5000' + '/getYear').then((response) => {
      // var result = JSON.parse(response.data)
      var result = response.data
      if (response.status === 200) {
        this.dropdown_font = result
        console.log(result)
      }
    })
  }
}
</script>

<style lang="css">
.elevation-1{
  margin: 15px;
}
td{
  margin-top: 5px;
}
</style>
