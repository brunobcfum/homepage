<template>
  <v-container>
    <v-card>
    <v-toolbar variant="flat" color="blue-darken-4" dark>
      <v-toolbar-title>Curriculum vitæ</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        color="blue-grey"
        class="ma-2 text-white"
        href="/cv.pdf"
        target="_blank"
      >
      Download CV
      <v-icon end dark>mdi-cloud-download</v-icon>
    </v-btn>
    </v-toolbar>
    <v-tabs v-model="tab">
      <v-tab value="experience">
        <v-icon start>mdi-account-tie</v-icon>
        Experience
      </v-tab>
      <v-tab value="education">
        <v-icon start>mdi-school</v-icon>
        Education
      </v-tab>
      <v-tab value="language">
        <v-icon start>mdi-earth</v-icon>
        Language
      </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="experience">
        <Experience/>
      </v-window-item>
      <v-window-item value="education">
        <Education/>
      </v-window-item>
      <v-window-item value="language">
        <Language/>
      </v-window-item>
    </v-window>
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
  data() {
    return {
      tab: 'experience'
    }
  }
}
</script>

<style>

</style>
