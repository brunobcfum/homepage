<template>
  <v-container>
    <v-card>
    <v-toolbar variant="flat" color="blue-darken-4" dark>
      <v-toolbar-title>Research</v-toolbar-title>
    </v-toolbar>
    <v-tabs v-model="tab">
      <v-tab value="phd">
        <v-icon start>mdi-microscope</v-icon>
        Phd Research
      </v-tab>
      <v-tab value="masters">
        <v-icon start>mdi-school</v-icon>
        Master's Research
      </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="phd">
        <Phd/>
      </v-window-item>
      <v-window-item value="masters">
        <Masters/>
      </v-window-item>
    </v-window>
  </v-card>
  </v-container>
</template>

<script>
import Phd from '@/components/research/Phd.vue'
import Masters from '@/components/research/Masters.vue'

export default {
  components: {
    Phd,
    Masters
  },
  data() {
    return {
      tab: 'phd'
    }
  }
}
</script>

<style>

</style>
