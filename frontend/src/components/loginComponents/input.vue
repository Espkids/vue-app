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
      </v-card-text>
      <v-card-actions>
        <v-btn block class="primary" @click="submit">{{ $t('login.login') }}</v-btn>
      </v-card-actions>
      <v-row class="px-5">
        <router-link class="black--text" to="/register">{{ $t('login.register') }}</router-link>
        <!-- <a class="black--text" href="/register">{{ $t('login.register') }}</a> -->
        <v-spacer></v-spacer>
        <router-link class="black--text" to="/register">{{ $t('login.forgetpassword') }}</router-link>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
export default {
  name: 'InputComponent',
  data () {
    return {
      // isFormValid: false,
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
      }
    }
  },
  methods: {
    submit () {
      if (this.username === '') {
        console.log('as')
        this.error.username = 'Enter your username'
        this.$vuetify.goTo('#usr', this.scrollOption)
      } else if (this.password === '') {
        this.error.password = 'Enter your password'
        this.$vuetify.goTo('#pass', this.scrollOption)
      } else {
        this.$axios.get('/user/-1')
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    typeInput () {
      console.log(this.username)
    }
  }
}
</script>

<style>
a {
  text-decoration: none
}
</style>
