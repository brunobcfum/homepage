<template>
  <v-container>
  <v-row align="center" justify="center">
    <v-col cols=12>
      <v-card
        class="mx-auto"
        outlined
      >
        <v-card-title>Master's Rearch Topic:</v-card-title>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">Dissertation title</div>
            <v-list-item-subtitle>
              Energy-Aware Gossip Protocol for Wireless Sensors Networks
            </v-list-item-subtitle>
            <v-list-item-text class="mt-4">
              <div class="overline mb-4">Main topics</div>
              <ul class="body-2 mb-4">
                <li>Routing Protocols</li>
                <li>Wireless Sensors Networks</li>
              </ul>
            </v-list-item-text>
            <v-list-item-text class="mt-4">
              <div class="overline mb-4">Abstract</div>
                <div class="caption mb-4">
                  In Wireless Sensor Networks (WSNs), typically composed of nodes with resource con-
                  straints, leveraging efficient processes is crucial to enhance the network longevity and
                  consequently the sustainability in ultra-dense and heterogeneous environments, such as
                  smart cities. Epidemic algorithms are usually efficient in delivering packets to a sink or
                  to all it’s peers but have poor energy efficiency due to the amount of packet redundancy.
                  Directional algorithms, such as Minimum Cost Forward Algorithm (MCFA) or Directed
                  Diffusion, yield high energy efficiency but fail to handle mobile environments, and have
                  poor network coverage.
                  <br>
                  This work proposes a new epidemic algorithm that uses the current energy state of the
                  network to create a topology that is cyclically updated, fault tolerant, whilst being able
                  to handle the challenges of a static or mobile heterogeneous network. Depending on the
                  application, tuning in the protocol settings can be made to prioritise desired characteristics.
                  The proposed protocol has a small computational footprint and the required memory is
                  proportional not to the size of the network, but to the number of neighbours of a node,
                  enabling high scalability.
                  <br>
                  The proposed protocol was tested, using a ESP8266 as an energy model reference, in a
                  simulated environment with ad-hoc wireless nodes. It was implemented at the application
                  level with UDP sockets, and resulted in a highly energy efficient protocol, capable of lever-
                  aging extended network longevity with different static or mobile topologies, with results
                  comparable to a static directional algorithm in delivery efficiency.
                </div>
            </v-list-item-text>
          </v-list-item-content>
        </v-list-item>
        <v-btn
            color="blue-grey"
            class="ma-2 white--text"
            href="/dissertation.pdf"
            target="_blank"
          >
          Download Dissertation
          <v-icon right dark>mdi-cloud-download</v-icon>
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>

export default {
  components: {
  },
  data: () => ({
  })
}
</script>
