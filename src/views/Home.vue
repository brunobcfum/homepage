<template>
  <v-container>
  <v-row align="center" justify="center">
    <v-col cols=12>
      <v-card
        class="mx-auto"
        outlined
      >
      <v-card-text>
        <div class="overline mb-2 teal--text">SHORT BIO</div>
        <div >
        I am an Electrical Engineer / Computer Scientist who has been working in the high power field.
        After 10+ years working with Control and Automation of Converter and Power substations, I spent
        a season in Academia where I completed a Master's Degree course in Computer Engineering with focus
        in Computer Networks and Advanced Computing. Later on I completed my PhD degree at ENAC researching
        distributed computing in dynamic networks. No I am currently a senior R&D Engineer working with Hitachi's
        DRTOS MACH, used in Control and Protection systems of diverse fields and applications.
        </div>
        <div class="overline mt-3 teal--text">TECHNOLOGY INTERESTS</div>
        <div >
          <ul class="body-2">
            <li>Parallel and Distributed Computing</li>
            <li>Cyber Physical Systems</li>
            <li>Computer Networks</li>
            <li>Real-time Systems</li>
            <li>Wireless Sensors Networks</li>
          </ul>
        </div>
        <div class="overline mt-3 teal--text">MAIN SKILLS</div>
        <div>
          <ul class="body-2 mb-4">
            <li>Programming language skills in C,C++ Python and JS (Backend with Node.JS and Frontend with Vue)</li>
            <li>Control and Automation systems for industry and electrical power grids</li>
            <li>Knowledge and ability on planning and developing large scale technology related projects</li>
          </ul>
        </div>
        <div class="overline mt-3 teal--text">HOBBIES</div>
        <div>
          <ul class="body-2 mb-4">
            <li>Reading about technology, space and Sci-Fi</li>
            <li>Refactoring my old personal projects</li>
            <li>Sailing</li>
            <li>Fidelling with diverse micro-controllers such as diverse AVRs, ESP(8266 and 32) and nRF52840</li>
          </ul>
        </div>
      </v-card-text>
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
    length: 3,
    window: 0
  }),
  computed: {
  }
}
</script>
