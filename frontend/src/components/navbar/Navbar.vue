<template>
  <nav>
    <v-app-bar app flat class="primary">
      <v-app-bar-nav-icon v-if="menuButton" @click="isMenu = !isMenu" class="white--text"/>
      <v-spacer/>
      <languageComponent />
    </v-app-bar>
    <menuComponent v-bind:isMenu.sync="isMenu" />
  </nav>
</template>

<script>
import languageComponent from './language'
import menuComponent from './menubar'
export default {
  name: 'NavigationBar',
  components: {
    languageComponent,
    menuComponent
  },
  data () {
    return {
      menuButton: false,
      isMenu: false
    }
  },
  watch: {
    $route () {
      this.checkPage()
    }
  },
  created () {
    window.addEventListener('resize', this.onScreenChange)
  },
  destroyed () {
    window.removeEventListener('resize', this.onScreenChange)
  },
  methods: {
    async onScreenChange () {
      const routeName = this.$route.name
      const pageName = ['login', 'register']
      const screenSize = window.innerWidth
      if (pageName.includes(routeName)) {
        this.menuButton = false
        this.isMenu = false
      } else {
        if (screenSize < 991) {
          this.menuButton = true
        } else {
          if (pageName.includes(routeName)) {
            this.menuButton = false
            this.isMenu = false
          } else {
            this.menuButton = false
            this.isMenu = true
          }
        }
      }
    },
    checkPage () {
      const routeName = this.$route.name
      const pageName = ['login', 'register']
      if (pageName.includes(routeName)) {
        this.menuButton = false
        this.isMenu = false
      } else {
        this.menuButton = true
      }
    }
  }
}
</script>

<style>

</style>
