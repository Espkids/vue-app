<template>
  <v-card width="600" class="mx-auto mt-12">
    <v-card-title primary-title>
      <h3 class="headline mb-0 mx-auto">Get data from VDVC Laos</h3>
    </v-card-title>
    <v-card-text>
      <v-text-field
        label="Start value"
        v-model="startValue"
        type="number"
        outlined
      ></v-text-field>
      <v-text-field
        label="End value"
        v-model="endValue"
        type="number"
        outlined
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn block color="primary" @click="getData">Get data</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      startValue: '',
      endValue: ''
    }
  },
  methods: {
    async getData () {
      let value
      const result = await axios.get(`http://www.vdvclao.org/thongpong/c/action/simdatacdg2?pass=ati123&type=vehiclereg&division_no=${value}`)
        .then(res => {
          return res.data
        })
        .catch(err => {
          console.log(err)
        })
      const objData = {}
      const arr = result.split('\r\n')
      arr.splice(-1, 1)
      if (arr.length > 74) {
        console.log('Wait')
      } else {
        await arr.forEach(element => {
          var fieldname = element.substring(0, element.indexOf(':'))
          fieldname = fieldname === 'print-template-file' ? 'print_template_file' : fieldname
          var value = element.substring(element.indexOf(':') + 1)
          value = value === '' ? null : value + ''
          const obj = {
            [fieldname]: value
          }
          Object.assign(objData, obj)
        })
        console.log(objData)
        await axios.post('http://localhost:8000/api/car', objData)
          .then(res => {
            console.log(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>
