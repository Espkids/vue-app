<template>
  <nav>
    <v-navigation-drawer
      app
      :permanent="isPermanent"
      v-model="drawer"
      color="#424242">
      <v-icon>mdi-account-circle</v-icon>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'menuBar',
  props: ['isMenu'],
  data () {
    return {
      drawer: this.isMenu,
      isPermanent: false
    }
  },
  watch: {
    isMenu () {
      this.drawer = this.isMenu
    },
    drawer () {
      if (this.drawer === false) {
        this.$emit('update:isMenu', this.drawer)
      }
    },
    $route () {
      const routeName = this.$route.name
      const pageName = ['login', 'register']
      if (pageName.includes(routeName)) {
        this.isPermanent = false
      }
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
        this.isPermanent = false
      } else {
        if (screenSize < 991) {
          this.isPermanent = false
        } else {
          if (pageName.includes(routeName)) {
            this.isPermanent = false
          } else {
            this.isPermanent = true
          }
        }
      }
    }
  }
}
</script>

<style>

</style>
