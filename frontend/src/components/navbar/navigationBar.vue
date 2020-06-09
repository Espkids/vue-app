<template>
  <v-app-bar app class="primary">
    <v-app-bar-nav-icon v-if="isMenu" class="white--text"/>
    <v-spacer/>
    <v-menu select origin="center center" transition="scale-transition" inline absolute>
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on" class="white--text">
          <country-flag :country="$t('flag')"/>
          {{ $t('flagname') }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(lang, index) in languages"
          :key="index"
          @click="changeLanguage(lang)"
        >
          <country-flag :country='lang.value'/>
          {{ lang.title }}
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavigationBar',
  data () {
    return {
      isMenu: false,
      languages: [
        {
          title: this.$t('languages.thai'),
          value: 'th'
        },
        {
          title: this.$t('languages.english'),
          value: 'us'
        }
      ]
    }
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.locale = lang.value
      this.$store.dispatch('language/setLanguage', lang.value)
    }
  }
}
</script>

<style>

</style>
