<template>
  <v-app-bar app class="primary">
    <v-app-bar-nav-icon v-if="isMenu" class="white--text"/>
    <v-spacer/>
    <languageComponent />
  </v-app-bar>
</template>

<script>
import languageComponent from './language'
export default {
  name: 'NavigationBar',
  components: {
    languageComponent
  },
  data () {
    return {
      isMenu: false
    }
  }
}
</script>

<style>

</style>
