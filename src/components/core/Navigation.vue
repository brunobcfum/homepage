<template>
  <v-navigation-drawer
    v-model="menu"
    app
    @transitionend="toggleMenu"
  >
  <v-list dense>
    <v-list-item @click="openHome">
      <v-list-item-action>
          <v-icon>mdi-home</v-icon>
      </v-list-item-action>
      <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item @click="openContact">
      <v-list-item-action>
          <v-icon>mdi-contact-mail</v-icon>
      </v-list-item-action>
      <v-list-item-content>
          <v-list-item-title>Contact</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
  </v-navigation-drawer>
</template>

<script>

export default {
  data () {
    return {
      menu: false
    }
  },
  props: {
    drawer: Boolean
  },
  mounted () {
    this.menu = this.drawer
  },
  watch: {
    drawer () {
      this.menu = this.drawer
    }
  },
  methods: {
    toggleMenu () {
      if (this.drawer !== this.menu) {
        this.$emit('toggleMenu')
      }
    },
    openContact () {
      this.$router.push({
        name: 'contact'
      })
    },
    openHome () {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style>

</style>
