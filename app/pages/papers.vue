<template>
  <v-container>
    <v-card>
    <v-toolbar variant="flat" color="blue-darken-4" dark>
      <v-toolbar-title>Publications</v-toolbar-title>
    </v-toolbar>

    <v-card
        class="mx-auto mb-2"
        outlined
        :elevation="5"
        v-for="paper in orderedPapers" :key="paper.id"
      >
        <v-card-text>
          <div class="text-overline mb-4">Title</div>
          <div class="text-h6 mb-2">{{ paper.title }}</div>
          <div class="text-overline mb-4 mt-4">Authors</div>
          <div class="text-body-1 mb-2">{{ paper.authors }}</div>
          <div class="text-overline mb-4 mt-4">Published at:</div>
          <div class="text-body-1 mb-2">{{ paper.publisher }}</div>
          <div class="text-overline mb-4 mt-4">Abstract</div>
          <div class="text-body-2 mb-4">{{ paper.abstract }}</div>
        </v-card-text>

        <v-btn
            color="blue-grey"
            class="ma-2 text-white"
            :href="paper.link"
            target="_blank"
          >
          Link to paper
          <v-icon end dark>mdi-cloud-download</v-icon>
        </v-btn>
      </v-card>

  </v-card>
  </v-container>
</template>

<script>
import papers from '@/pages/Papers.json'

export default {
  data() {
    return {
      papers
    }
  },
  computed: {
    orderedPapers: function() {
      return this.papers.slice().sort((a, b) => a.id - b.id)
    }
  }
}
</script>

<style>

</style>
