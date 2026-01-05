<template>
  <v-navigation-drawer
    v-model="menu"
    theme="dark"
    @transitionend="toggleMenu"
    image="@/assets/background.jpg"
  >
  <v-list density="compact">

    <v-list-item two-line class="ma-3">
      <v-list-item-title class="text-h6">
        <span class="phosphor-green">./bc</span>
        <span class="font-weight-bold phosphor-green">ferreira</span>
      </v-list-item-title>
      <template #append>
        <v-avatar size="small">
          <v-img src="@/assets/avatar.jpg"></v-img>
        </v-avatar>
      </template>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item prepend-icon="mdi-home" subtitle="Home" @click="openHome">
    </v-list-item>
    <v-list-item prepend-icon="mdi-email" subtitle="Contacts" @click="openContact">
    </v-list-item>
    <v-list-item prepend-icon="mdi-file-account" subtitle="Curriculum vitæ" @click="openResume">
    </v-list-item>
    <v-list-item prepend-icon="mdi-book-open" subtitle="Publications" @click="openPapers">
    </v-list-item>
    <v-list-item prepend-icon="mdi-microscope" subtitle="Research" @click="openResearch">
    </v-list-item>
    <v-list-item prepend-icon="mdi-help-circle" subtitle="About this page" @click="openAbout">
    </v-list-item>

  </v-list>
  <template #append>
  <div class="pa-2">
    <v-btn block href="mailto:brunobcf@gmail.com">Send me a message</v-btn>
  </div>
  </template>
  </v-navigation-drawer>
</template>

<script setup>
const menu = ref(false)

const emit = defineEmits(['toggleMenu'])

const props = defineProps({
  drawer: Boolean
})

const toggleMenu = () => {
  if (props.drawer !== menu.value) {
    emit('toggleMenu')
  }
}

const openContact = () => {
  navigateTo({
    name: 'contact'
  })
}

const openHome = () => {
  navigateTo({
    name: 'index'
  })
}

const openResume = () => {
  navigateTo({
    name: 'cv'
  })
}

const openResearch = () => {
  navigateTo({
    name: 'research'
  })
}

const openAbout = () => {
  navigateTo({
    name: 'about'
  })
}

const openPapers = () => {
  navigateTo({
    name: 'papers'
  })
}

watch(() => props.drawer, (newVal) => {
  menu.value = newVal
})

onMounted(() => {
  menu.value = props.drawer
})
</script>

<style>

  .phosphor-green {
    color: #00ff0094;
    text-shadow: 0 0 5px #00FF00;
  }

</style>
