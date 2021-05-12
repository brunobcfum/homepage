<template>
  <v-container>
    <v-card>
    <v-toolbar flat color="blue darken-4" dark>
      <v-toolbar-title>Publications</v-toolbar-title>
    </v-toolbar>

    <v-card
        class="mx-auto"
        outlined
        v-for="paper in papers" :key="paper.id"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">Title</div>
            <v-list-item-subtitle>
              {{ paper.title }}
            </v-list-item-subtitle>
            <div class="overline mb-4 mt-4">Authors</div>
            <v-list-item-subtitle>
              {{ paper.authors }}
            </v-list-item-subtitle>
            <div class="overline mb-4 mt-4">Published at:</div>
            <v-list-item-subtitle>
              {{ paper.publisher }}
            </v-list-item-subtitle>
            <v-list-item-text class="mt-4">
              <div class="overline mb-4">Abstract</div>
                <div class="caption mb-4">
              {{ paper.abstract }}
                </div>
            </v-list-item-text>
          </v-list-item-content>
        </v-list-item>

        <v-btn
            color="blue-grey"
            class="ma-2 white--text"
            :href=paper.link
            target="_blank"
          >
          Link to paper
          <v-icon right dark>mdi-cloud-download</v-icon>
        </v-btn>
      </v-card>

  </v-card>
  </v-container>
</template>

<script>
import papers from '@/views/Papers.json'

export default {
  components: {
  },
  data () {
    return {
      tab: null,
      papers
    }
  }
}
</script>

<style>

</style>
