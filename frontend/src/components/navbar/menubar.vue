<template>
  <nav>
    <v-navigation-drawer
      app
      src="../../assets/menu-background-edit.jpg"
      dark
      width="200"
      :permanent="isPermanent"
      v-model="drawer">
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
      this.checkPage()
    }
  },
  created () {
    this.checkPage()
    window.addEventListener('resize', this.onScreenChange)
  },
  beforeUpdate () {
    this.checkPage()
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
          this.isPermanent = true
        }
      }
    },
    checkPage () {
      const routeName = this.$route.name
      const pageName = ['login', 'register']
      const screenSize = window.innerWidth
      if (pageName.includes(routeName)) {
        this.drawer = false
        this.isPermanent = false
      } else {
        if (screenSize < 991) {
          this.isPermanent = false
        } else {
          this.isPermanent = true
        }
      }
    }
  }
}
</script>

<style>

</style>
