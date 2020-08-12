<template>
  <div>
    <v-card width="600" class="mx-auto mt-12" elevation="5">
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
        <v-btn disabled block color="primary" @click="getDataVDVC">Get data from VDVC</v-btn>
      </v-card-actions>
    </v-card>

    <v-card width="600" class="mx-auto mt-6" elevation="5">
      <v-card-actions>
        <v-btn disabled block color="success" @click="generatePDF">Generate PDF</v-btn>
      </v-card-actions>
    </v-card>

    <v-card width="600" class="mx-auto mt-6" elevation="5">
      <v-card-actions>
        <v-btn block color="warning" @click="getDataAccess">Get data from Access</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
// import axios from 'axios'
const service = require('../services/index')
export default {
  data () {
    return {
      startValue: '',
      endValue: ''
    }
  },
  methods: {
    async getDataVDVC () {
      service.vdvc.getData(this.startValue, this.endValue)
    },
    async generatePDF () {
      await service.generatePDF.createPDF()
        .then(res => {
          console.log(`Upload success\nFilename -> ${res.fileName}`)
          window.open(res.fileUrl)
        }).catch(err => {
          // console.log(err)
          console.log(`Error code: ${err.response.status}. ${err.response.statusText}\nMessage: ${err.response.data.message}`)
          console.log(`Description: \n${err.response.data.error.code}`)
        })
    },
    async getDataAccess () {
      // await service.access.getData()
      const ADODB = require('node-adodb')
      const path = require('path')
      const a = 'Provider=Microsoft.Jet.OLEDB.4.0;'
      const b = 'Data Source=SuperABS;'
      const c = 'Persist Security Info=False;'
      const e = path.join(a, b, c)
      const connection = ADODB.open(e)
      connection.execute('SELECT * FROM TableCarData')
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
