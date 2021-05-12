<template>
  <v-app class="myFont">
    <Navigation v-on:toggleMenu="toggleMenu" v-bind:drawer="drawer"></Navigation>
    <Appbar v-on:toggleMenu="toggleMenu" v-bind:drawer="drawer"></Appbar>
    <v-main>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Navigation from '@/components/core/Navigation'
import Footer from '@/components/core/Footer'
import Appbar from '@/components/core/Appbar'

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
    Appbar
  },
  data: () => ({
    drawer: false
  }),
  methods: {
    toggleMenu () {
      this.drawer = !this.drawer
    },
    mounted () {
    }
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid');

.myFont {
  font-family: 'Roboto', cursive;
}
</style>
