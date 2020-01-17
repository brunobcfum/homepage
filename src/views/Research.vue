<template>
  <v-container>
    <v-card>
    <v-toolbar flat color="blue darken-4" dark>
      <v-toolbar-title>Research</v-toolbar-title>
    </v-toolbar>
    <v-tabs>
      <v-tab>
        <v-icon left>mdi-microscope</v-icon>
        Phd Reseach
      </v-tab>
      <v-tab>
        <v-icon left>mdi-school</v-icon>
        Master's Research
      </v-tab>
      <v-tab-item>
        <Phd/>
      </v-tab-item>
      <v-tab-item>
        <Masters/>
      </v-tab-item>
    </v-tabs>
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
  data () {
    return {
      tab: null
    }
  }
}
</script>

<style>

</style>
