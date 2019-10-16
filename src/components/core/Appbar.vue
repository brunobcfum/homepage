<template>
  <v-app-bar app dark dense floating>
  <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
  <v-toolbar-title v-if="!drawer" class="grey--text">
    <span>bc</span>
    <span class="font-weight-bold">ferreira</span>
  </v-toolbar-title>
  <v-spacer></v-spacer>
</v-app-bar>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    toggleMenu () {
      this.$emit('toggleMenu')
    }
  },
  props: {
    drawer: Boolean
  }
}
</script>

<style>

</style>
