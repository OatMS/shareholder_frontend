<template lang="html">
  <div>
    <h1 style="text-align:center; font-size:2.3em; " class="mt-4">ข้อมูลการประชุมครั้งที่ 2 ปี 2018</h1>
    <v-dialog v-model="dialog" max-width="500px">
      <!-- <v-btn slot="activator" color="primary" dark class="mb-3">เพิ่มวาระ</v-btn> -->
    </v-dialog>
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
      <td class="text-xs-left">{{ props.item.value }}</td>
      <td class="text-xs-left">{{ props.item.detail}}</td>
      <!-- <td class="justify-right layout px-0">
        <v-btn small round color="primary" dark>คำนวณคะแนน</v-btn>
      </td> -->
      <!-- <td class="text-xs-center">{{ props.item.agree }}</td> -->

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
    headers: [
      {
        text: '',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Value', value: 'value', sortable: false },
      { text: 'Detail', value: 'detail', sortable: false }
      // { text: 'ไม่เห็นด้วย (เสียง)', value: 'disagree', sortable: true },
      // { text: 'Protein (g)', value: 'protein', sortable: false },
      // { text: 'งดออกเสียง (เสียง)', value: 'discard', sortable: true }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      value: '',
      detail: '',
      agree: '',
      disagree: '',
      discard: ''
    },
    defaultItem: {
      name: '',
      value: '',
      detail: '',
      agree: '',
      disagree: '',
      discard: ''
    }
  }),
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
          name: 'this_year',
          value: 2561,
          detail: 2561
        },
        {
          name: 'agenda_date',
          value: '23 เมษายน 2561',
          detail: '23 เมษายน 2561'
        },
        {
          name: 'limit_person',
          value: '25',
          detail: 'จำนวนผู้ลงทะเบียนขั้นต่ำ'
        },
        {
          name: 'location',
          value: '',
          detail: 'สถานที่'
        },
        {
          name: 'presenter',
          value: '',
          detail: 'name of presenter'
        },
        {
          name: 'type',
          value: '',
          detail: '1 คือ เสียงข้างมาก 2 = เสียง 3 ใน 4'
        },
        {
          name: 'term',
          value: '1',
          detail: 'ครั้งที่'
        },
        {
          name: 'fix',
          value: '6',
          detail: 'วาระที่ต้องการใส่รูป'
        },
        {
          name: 'meetingname',
          value: 'Annual General Meet',
          detail: 'ชื่อการประชุมภาษาอังกฤษ'
        },
        {
          name: 'meetingname_th',
          value: 'การประชุมสามัญผู้ถือหุ้น',
          detail: 'ชื่อการประชุมภาษาไทย'
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
