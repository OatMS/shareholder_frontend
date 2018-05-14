<template lang="html">
  <div>
    <h1 style="text-align:center; font-size:2.3em; " class="mt-4">วาระการประชุมครั้งที่ 2 ปี 2018</h1>
    <v-dialog v-model="dialog" max-width="500px">
      <v-btn slot="activator" color="primary" dark class="mb-3">เพิ่มวาระ</v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.name" label="วาระที่"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="editedItem.calories" label="ชื่อวาระ"></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field v-model="editedItem.fat" label="ชื่อวาระย่อย"></v-text-field>
              </v-flex>
              <v-flex xs12 md6>
                <h2>รูปภาพ</h2>
                  <v-btn raised class="primary" @click="onPickFile">Upload Image</v-btn>
                <input
                type="file"
                style="display: none"
                ref="fileInput"
                accept="image/*"
                @change="onFilePicked">
              </v-flex>
              <v-flex xs12 sm6>
                <img :src="imageUrl" height="150">
              </v-flex>
              <v-flex xs12 md6>
                <h2>การนับคะแนน</h2>
                <v-radio-group v-model="radios" :mandatory="false">
                  <v-radio label="เสียงข้างมาก" value="radio-1"></v-radio>
                  <v-radio label="เสียงไม่น้อยกว่าสามในสี่" value="radio-2"></v-radio>
                </v-radio-group>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table
    :headers="headers"
    :items="desserts"
    hide-actions
    class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-left">{{ props.item.calories }}</td>
      <!-- <td class="text-xs-right">{{ props.item.fat }}</td>
      <td class="text-xs-right">{{ props.item.carbs }}</td>
      <td class="text-xs-right">{{ props.item.protein }}</td> -->
      <td class="justify-right layout px-0">
        <v-btn icon class="mx-0" @click="editItem(props.item)">
          <v-icon color="teal">edit</v-icon>
        </v-btn>
        <v-btn icon class="mx-0" @click="deleteItem(props.item)">
          <v-icon color="pink">delete</v-icon>
        </v-btn>
      </td>
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
        text: 'วาระที่',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'ชื่อวาระ', value: 'calories', sortable: false },
      // { text: 'Fat (g)', value: 'fat', sortable: false },
      // { text: 'Carbs (g)', value: 'carbs', sortable: false },
      // { text: 'Protein (g)', value: 'protein', sortable: false },
      { text: 'Actions', value: 'name', sortable: false }
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: ''
    },
    defaultItem: {
      name: '',
      calories: '',
      fat: '',
      carbs: '',
      protein: ''
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
          calories: 'เรื่องประธานแจ้งเพื่อทราบ (ถ้ามี)',
          fat: 6.0,
          carbs: 24,
          protein: 4.0
        },
        {
          name: '2',
          calories: 'พิจารณารับรองรายงานการประชุมสามัญผู้ถือหุ้นประจำปี 2560 ซึ่งประชุมเมื่อวันที่ 21 เมษายน 2560 (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 1)',
          fat: 9.0,
          carbs: 37,
          protein: 4.3
        },
        {
          name: '3',
          calories: 'รับทราบรายงานคณะกรรมการบริษัทเกี่ยวกับผลการดำเนินงานประจำปี 2560 (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 2)',
          fat: 16.0,
          carbs: 23,
          protein: 6.0
        },
        {
          name: '4',
          calories: 'พิจารณาอนุมัติงบการเงินประจำปีสิ้นสุด ณ วันที่ 31 ธันวาคม 2560 ซึ่งผ่านการตรวจสอบจากผู้สอบบัญชี (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 2)',
          fat: 3.7,
          carbs: 67,
          protein: 4.3
        },
        {
          name: '5',
          calories: 'พิจารณาจัดสรรกำไรสุทธิเป็นทุนสำรองตามกฎหมายและการจ่ายเงินปันผลสำหรับผลประกอบการประจำปี 2560',
          fat: 16.0,
          carbs: 49,
          protein: 3.9
        },
        {
          name: '6',
          calories: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3)',
          fat: 0.0,
          carbs: 94,
          protein: 0.0
        },
        {
          name: '6.1',
          calories: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3) นายอนิรุทธ์ หิรัญรักษ์',
          fat: 0.2,
          carbs: 98,
          protein: 0
        },
        {
          name: '6.2',
          calories: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3) นางมรกต กุลธรรมโยธิน',
          fat: 3.2,
          carbs: 87,
          protein: 6.5
        },
        {
          name: '6.3',
          calories: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3) นายมรกต เธียรมนตรี',
          fat: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          name: '6.4',
          calories: 'พิจารณาเลือกตั้งกรรมการแทนกรรมการที่ออกตามวาระประจำปี 2561 (ประวัติโดยสังเขปของบุคคลที่ได้รับการเสนอชื่อเพิ่มพิจารณาเลือกตั้งเป็นกรรมการแทนกรรมการที่ออกตามวาระตามสิ่งที่ส่งมาด้วยลำดับที่ 3) นางสาวนฤมล วังศธรธนคุณ',
          fat: 26.0,
          carbs: 65,
          protein: 7
        },
        {
          name: '7',
          calories: 'พิจารณาอนุมัติการกำหนดค่าตอบแทนกรรมการ',
          fat: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          name: '8',
          calories: 'พิจารณาแต่งตั้งผู้สอบบัญชีและกำหนดค่าสอบบัญชีประจำปี 2561 (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 6)',
          fat: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          name: '9',
          calories: 'พิจารณาอนุมัติการแก้ไขข้อบังคับ บริษัท อินเทอร์เน็ตประเทศไทย จำกัด(มหาชน) ข้อ 16 (รายละเอียดตามสิ่งที่ส่งมาด้วยลำดับที่ 7)',
          fat: 25.0,
          carbs: 51,
          protein: 4.9
        },
        {
          name: '10',
          calories: 'พิจารณาเรื่องอื่นๆ (ถ้ามี)',
          fat: 25.0,
          carbs: 51,
          protein: 4.9
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
      confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    },
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
</style>
