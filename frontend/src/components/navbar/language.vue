<template>
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
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'language',
  data () {
    return {
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
  computed: {
    ...mapGetters({
      getLanguage: 'language/getLanguage'
    })
  },
  methods: {
    changeLanguage (lang) {
      const selectLanguage = lang.value === 'us' ? 'en' : lang.value
      //   if (lang.value === 'us') {
      //     selectLanguage = 'en'
      //   } else {
      //     selectLanguage = lang.value
      //   }
      if (this.getLanguage !== selectLanguage) {
        this.$i18n.locale = selectLanguage
        this.$store.dispatch('language/setLanguage', selectLanguage)
        this.$router.push({
          params: {
            lang: selectLanguage
          }
        })
      }
    }
  }
}
</script>
