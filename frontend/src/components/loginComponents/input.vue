<template>
  <v-form>
    <v-card width="600" class="mx-auto pa-2 mt-12" elevation="12">
      <v-card-title>
        <h2 class="green--text mx-auto">{{ $t('login.title') }}</h2>
      </v-card-title>
        <v-divider class="black"></v-divider>
      <v-card-text>
        <v-text-field
          id="usr"
          autocomplete="off"
          v-model="username"
          outlined
          :label="$t('login.username')"
          prepend-icon="mdi-account-circle"
          :error-messages="error.username"
          @keypress="error.username=''"/>
        <v-text-field
          id="pass"
          autocomplete="off"
          v-model="password"
          outlined
          :label="$t('login.password')"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          :error-messages="error.password"/>
        <v-row v-if="isErrorLogin">
          <h3 class="red--text mx-auto">{{ $t('rules.errorLogin') }}</h3>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn block class="primary" @click="submit">{{ $t('login.login') }}</v-btn>
      </v-card-actions>
      <v-row class="px-5">
        <router-link class="black--text" :to="{name: 'register'}">{{ $t('login.register') }}</router-link>
        <v-spacer></v-spacer>
        <router-link class="black--text" :to="{name: 'register'}">{{ $t('login.forgetpassword') }}</router-link>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  name: 'InputComponent',
  data () {
    return {
      isErrorLogin: false,
      showPassword: false,
      username: '',
      password: '',
      error: {
        username: '',
        password: ''
      },
      scrollOption: {
        duration: 200,
        offset: 50,
        easing: 'easeInOutCubic'
      },
      msg: []
    }
  },
  watch: {
    getLanguage () {
      if (this.error.username !== '') {
        this.error.username = this.ruleUsername
      }
      if (this.error.password !== '') {
        this.error.password = this.rulePassword
      }
    }
  },
  computed: {
    ...mapGetters({
      getLanguage: 'language/getLanguage'
    }),
    ruleUsername () {
      return this.$t('rules.enterUsername')
    },
    rulePassword () {
      return this.$t('rules.enterPassword')
    }
  },
  methods: {
    submit () {
      // this.clearError()
      // if (this.username === '') {
      //   this.error.username = this.ruleUsername
      //   this.$vuetify.goTo('#usr', this.scrollOption)
      // } else if (this.password === '') {
      //   this.error.password = this.$t('rules.enterPassword')
      //   this.$vuetify.goTo('#pass', this.scrollOption)
      // } else {
      //   const user = {
      //     username: this.username,
      //     password: this.password
      //   }
      //   this.$axios.post('/user/login', user)
      //     .then(res => {
      //       if (res.data.status) {
      //         console.log(res.data)
      //       } else {
      //         this.isErrorLogin = true
      //         this.clearInput()
      //       }
      //     })
      //     .catch(err => {
      //       console.log(err)
      //     })
      // }
      axios.get('http://www.vdvclao.org/thongpong/c/action/simdatacdg2?pass=ati123&type=vehiclereg&division_no=0540022')
        .then(res => {
          const objData = {}
          const data = res.data
          const arr = data.split('\r\n')
          arr.forEach(element => {
            const fieldname = element.substring(0, element.indexOf(':'))
            const value = element.substring(element.indexOf(':') + 1)
            const obj = {
              [fieldname]: value
            }
            Object.assign(objData, obj)
          })
          console.log(objData)
        })
    },
    clearInput () {
      this.username = ''
      this.password = ''
    },
    clearError () {
      this.isErrorLogin = false
      this.error.username = ''
      this.error.password = ''
    }
  }
}
</script>

<style>
a {
  text-decoration: none
}
</style>
