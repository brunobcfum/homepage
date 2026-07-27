<template>
  <v-app-bar app theme="dark" density="compact">
    <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
    <v-toolbar-title v-if="!drawer">
        <span class="phosphor-green">./bc</span>
        <span class="font-weight-bold phosphor-green phosphor-cursor">ferreira</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-switch
        :model-value="isDark"
        @update:model-value="toggleTheme"
        label="Dark"
      ></v-switch>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

const isDark = computed(() => theme.global.name.value === 'dark')

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}

const toggleMenu = () => {
  emit('toggleMenu')
}

const emit = defineEmits(['toggleMenu'])

defineProps({
  drawer: Boolean
})
</script>

<style>

</style>
