<template>
  <v-container>
    <v-card>
    <v-toolbar flat color="blue darken-4" dark>
      <v-toolbar-title>Resumé</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="blue-grey"
        class="ma-2 white--text"
        href="/cv.pdf"
        target="_blank"
      >
      Download CV
      <v-icon right dark>mdi-cloud-download</v-icon>
    </v-btn>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>mdi-account</v-icon>
        Experience
      </v-tab>
      <v-tab>
        <v-icon left>mdi-lock</v-icon>
        Education
      </v-tab>
      <v-tab>
        <v-icon left>mdi-access-point</v-icon>
        Language
      </v-tab>
      <v-tab-item>
        <Experience/>
      </v-tab-item>
      <v-tab-item>
        <Education/>
      </v-tab-item>
      <v-tab-item>
        <Language/>
      </v-tab-item>
    </v-tabs>
  </v-card>
  </v-container>
</template>

<script>
import Experience from '@/components/resume/Experience.vue'
import Education from '@/components/resume/Education.vue'
import Language from '@/components/resume/Language.vue'

export default {
  components: {
    Experience,
    Education,
    Language
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
