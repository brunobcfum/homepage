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
        <span class="light-green--text text--accent-2">./bc</span>
        <span class="font-weight-bold light-green--text text--accent-2">ferreira</span>
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
          <v-icon>mdi-email</v-icon>
      </v-list-item-action>
      <v-list-item-content>
          <v-list-item-title>Contacts</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item @click="openResume">
      <v-list-item-action>
          <v-icon>mdi-file-account</v-icon>
      </v-list-item-action>
      <v-list-item-content>
          <v-list-item-title>Curriculum vitæ</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item @click="openPapers">
      <v-list-item-action>
          <v-icon>mdi-book-open</v-icon>
      </v-list-item-action>
      <v-list-item-content>
          <v-list-item-title>Publications</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item @click="openResearch">
      <v-list-item-action>
          <v-icon>mdi-microscope</v-icon>
      </v-list-item-action>
      <v-list-item-content>
          <v-list-item-title>Research</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item @click="openAbout">
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
    <v-btn block href="mailto:brunobcf@gmail.com">Send me a message</v-btn>
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
    },
    openResume () {
      this.$router.push({
        name: 'resume'
      })
    },
    openResearch () {
      this.$router.push({
        name: 'research'
      })
    },
    openAbout () {
      this.$router.push({
        name: 'about'
      })
    },
    openPapers () {
      this.$router.push({
        name: 'papers'
      })
    }
  }
}
</script>

<style>

</style>
