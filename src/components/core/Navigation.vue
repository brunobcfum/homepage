<template>
  <v-navigation-drawer
    v-model="menu"
    app
    dark
    @transitionend="toggleMenu"
    src="@/assets/background.jpg"
  >
  <v-list dense>

    <v-list-item two-line>
      <v-list-item-title class="title">
        <span >bc</span>
        <span class="font-weight-bold">ferreira</span>
      </v-list-item-title>
      <v-list-item-avatar>
        <v-img src="@/assets/avatar.jpg"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-divider></v-divider>
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
    <v-list-item @click="openContact">
      <v-list-item-action>
          <v-icon>mdi-file-account</v-icon>
      </v-list-item-action>
      <v-list-item-content>
          <v-list-item-title>Resumé</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item @click="openContact">
      <v-list-item-action>
          <v-icon>mdi-newspaper</v-icon>
      </v-list-item-action>
      <v-list-item-content>
          <v-list-item-title>Publications</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item @click="openContact">
      <v-list-item-action>
          <v-icon>mdi-help-circle</v-icon>
      </v-list-item-action>
      <v-list-item-content>
          <v-list-item-title>About this page</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
  <template v-slot:append>
  <div class="pa-2">
    <v-btn block>Send me a message</v-btn>
  </div>
  </template>
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
