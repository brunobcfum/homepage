<template>
  <v-app>
    <Navigation v-on:toggleMenu="toggleMenu" v-bind:drawer="drawer"></Navigation>
    <Appbar v-on:toggleMenu="toggleMenu" v-bind:drawer="drawer"></Appbar>
    <v-main>
      <NuxtPage />
    </v-main>

    <AppFooter />

  </v-app>
</template>

<script>
import Navigation from '@/components/core/Navigation'
import Appbar from '@/components/core/Appbar'

export default {
  components: {
    Navigation,
    Appbar
  },
  data: () => ({
    drawer: false
  }),
  methods: {
    toggleMenu () {
      this.drawer = !this.drawer  
    }
  }
}
</script>

<style>

</style>