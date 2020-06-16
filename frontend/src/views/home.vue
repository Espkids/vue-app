<template>
  <v-card elevation="0">
    <v-card-title class="pa-1">
      <h6>{{ pageName }}</h6>
    </v-card-title>
    <v-card-text>
      <v-btn @click="encrypt">Encrypt</v-btn>
      <v-btn @click="decrypt">Decrypt</v-btn>
    </v-card-text>
    <v-divider/>
  </v-card>
</template>

<script>
export default {
  props: {
    myProp: {
      type: String
    }
  },
  data () {
    return {
      pageName: '',
      encryptText: '',
      decryptText: ''
    }
  },
  created: function () {
    if (this.$route.params.myProp) {
      this.pageName = this.$route.params.myProp
    } else {
      // this.$router.go(-1)
    }
  },
  methods: {
    async encrypt () {
      const CryptoJS = require('crypto-js')
      const data = {
        id: 1,
        name: 'tang',
        age: 22
      }
      this.encryptText = await CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString()
      console.log(`Encrypt: ${this.encryptText}`)
    },
    async decrypt () {
      const CryptoJS = require('crypto-js')
      this.decryptText = await CryptoJS.AES.decrypt(this.encryptText, 'secret key 123')
      // console.log(this.decryptText.toString(CryptoJS.enc.Utf8))
      const decryptData = JSON.parse(this.decryptText.toString(CryptoJS.enc.Utf8))
      console.log(decryptData)
    }
  }
}
</script>

<style>

</style>
