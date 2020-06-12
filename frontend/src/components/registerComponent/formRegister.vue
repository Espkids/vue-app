<template>
  <v-form ref="form" v-model="isFormValid">
    <v-card outlined class="ma-6 mx-auto" max-width="600" elevation="6">
      <v-card-title>
        <h2 class="mx-auto primary--text">{{ $t('register.title') }}</h2>
      </v-card-title>
      <v-divider/>
      <v-card-text>
        <v-text-field
          v-model="form.name"
          :rules="[rules.require]"
          :label="$t('register.name')"
          outlined/>
        <v-text-field
          v-model="form.username"
          ref="username"
          id="username"
          :rules="[rules.require, rules.space]"
          :label="$t('register.username')"
          outlined/>
        <v-text-field
          v-model="form.password"
          :rules="[rules.require, rules.space]"
          :label="$t('register.password')"
          :type="showPassword ? 'test' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          outlined/>
          <v-text-field
          v-model="confirmPassword"
          :rules="[rules.require, rules.space, rules.passwordMatch]"
          :label="$t('register.confirmPassword')"
          :type="showPassword ? 'test' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          outlined/>
      </v-card-text>
      <v-card-actions class="mx-3 mb-3">
        <router-link class="white--text" :to="{name: 'login'}">
          <v-icon class="error--text" size="30">mdi-arrow-left-circle</v-icon>
        </router-link>
        <v-spacer/>
        <v-btn class="success" @click="submit">{{ $t('register.confirm') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
import userService from '../../services/userService'
export default {
  data: () => ({
    isFormValid: false,
    showPassword: false,
    form: {
      name: '',
      username: '',
      password: ''
    },
    confirmPassword: ''
  }),
  watch: {
    getLanguage: {
      handler () {
        this.validate()
      },
      deep: true
    }
  },
  computed: {
    ...mapGetters({
      getLanguage: 'language/getLanguage'
    }),
    rules () {
      return {
        require: value => !!value || this.$t('rules.require'),
        space: value => (value || '').indexOf(' ') < 0 || this.$t('rules.space'),
        passwordMatch: value => value === this.form.password || this.$t('rules.passwordmatch')
      }
    }
  },
  methods: {
    async submit () {
      if (this.isFormValid) {
        const credential = this.form
        console.log(credential)
        const result = await userService.register(credential)
        console.log(result)
      } else {
        this.validate()
      }
    },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
