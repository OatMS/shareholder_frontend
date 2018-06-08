<template lang="html">
  <div>
    <h1 style="text-align:center; font-size:2.3em; " class="mt-4">ผลคะแนนของวาระการประชุมครั้งที่ 2 ปี 2018</h1>
    <v-dialog v-model="dialog" max-width="500px">
      <!-- <v-btn slot="activator" color="primary" dark class="mb-3">เพิ่มวาระ</v-btn> -->
    </v-dialog>
      <v-menu class="pt-2 mb-3">
      <v-btn slot="activator" color="primary" dark>Select Year</v-btn>
      <v-list>
        <v-list-tile v-for="(item, index) in items" :key="index" @click="">
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-data-table
    :headers="headers"
    :items="desserts"
    hide-actions
    class="elevation-12 "
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
  </v-data-table>
</div>
</template>

<script>
export default {
  data: () => ({
    imageUrl: '',
    image: null,
    dialog: false,
    items: [
      { title: '2561' },
      { title: '2560' },
      { title: '2559' },
      { title: '2558' },
      { title: '2557' },
      { title: '2556' },
      { title: '2555' },
      { title: '2554' },
      { title: '2553' },
      { title: '2552' },
      { title: '2551' }
    ],
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
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      subname: '',
      agendaname: '',
      agree: '',
      disagree: '',
      discard: ''
    },
    defaultItem: {
      name: '',
      subname: '',
      agendaname: '',
      agree: '',
      disagree: '',
      discard: ''
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'เพิ่มวาระ' : 'แก้ไขข้อมูล'
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  created () {
    this.initialize()
  },
  methods: {
    initialize () {
      this.desserts = [
        {
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
          name: '4',
          subname: '',
          agendaname: 'พิจารณาอนุมัติงบการเงินประจำปีสิ้นสุด ณ วันที่ 31 ธันวาคม 2560 ซึ่งผ่านการตรวจสอบจากผู้สอบบัญชี (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 2)',
          agree: 114,
          disagree: 67,
          discard: 4.3
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
        }
      ]
    },
    editItem (item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    deleteItem (item) {
      const index = this.desserts.indexOf(item)
      this.$swal({
        title: 'อ๊ะ! อ๊ะ! เดี๋ยวก่อน',
        text: 'คุณต้องการลบรายการที่เลือกอย่างถาวรหรือไม่',
        type: 'warning',
        showCancelButton: true,
        cancelButtonText: 'ยกเลิก',
        confirmButtonText: 'ตกลง',
        // confirmButtonColor: 'blue',
        // cancelButtonColor: 'green',
        showCloseButton: true,
        showLoaderOnConfirm: true,
        reverseButtons: true
      }).then((result) => {
        if (!result.value) {
          this.$swal('ข้อมูลถูกลบ', 'คุณได้ลบข้อมูลวาระสำเร็จแล้ว', 'success') && this.desserts.splice(index, 1)
        }
      })
    },
    //   confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    // },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },
    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
    onPickFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
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
