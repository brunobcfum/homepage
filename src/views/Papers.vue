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
                  In Wireless Sensor Networks (WSN), typically composed of nodes with resource constraints,
                  leveraging efficient processes is crucial to enhance the network lifetime and, consequently,
                  the sustainability in ultra-dense and heterogeneous environments, such as smart cities.
                  <br>
                  Particularly, balancing the energy required to transport data efficiently across such dynamic
                  environments poses significant challenges to routing protocol design and operation, being the
                  trade-off of reducing data redundancy while achieving an acceptable delivery rate a fundamental
                  research topic.
                  <br>
                  In this way, this work proposes a new energy-aware epidemic protocol that uses
                  the current state of the network energy to create a dynamic distribution topology by self-adjusting
                  each node forwarding behavior as eager or lazy according to the local residual battery.
                  Simulated evaluations demonstrate its efficiency in energy consumption, delivery rate, and reduced
                  computational burden when compared with classical gossip protocols as well as with a directional protocol.
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
