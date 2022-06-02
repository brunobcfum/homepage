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
        I am an Electrical Engineer who has been working in the high power field. After 10+ years
        working with Control and Automation of Converter and Power substations, I took the decision
        to enroll in a Master’s Degree course in Computer Engineering to increase my knowledge
        in IoT, Computer Networks and Advanced Computing. Now I am a PhD candidate at ENAC
        studying distributed computing in dynamic networks.
        </div>
        <div class="overline mt-3 teal--text">TECH INTERESTS</div>
        <div >
          <ul class="body-2">
            <li>Parallel and Distributed Computing</li>
            <li>Cyber Physical Systems</li>
            <li>Computer Networks</li>
            <li>Internet of the Things</li>
            <li>Wireless Sensors Networks</li>
          </ul>
        </div>
        <div class="overline mt-3 teal--text">MAIN SKILLS</div>
        <div>
          <ul class="body-2 mb-4">
            <li>Programming language skills in C,C++ Python and JS (Backend with Node.JS and Frontend with Vue) and programming in general being open to always learn new technologies</li>
            <li>Growing interest in distributed algorithms</li>
            <li>Knowledge in the Control and Automation area for electrical power systems</li>
            <li>Knowledge and ability on planning and developing technology related projects</li>
          </ul>
        </div>
        <div class="overline mt-3 teal--text">HOBBIES</div>
        <div>
          <ul class="body-2 mb-4">
            <li>Reading about technology, space and Sci-Fi</li>
            <li>Refactoring my old personal projects</li>
            <li>Fidelling with diverse micro-controllers such as diverse AVRs, ESP(8266 and 32) and nRF52840</li>
            <li>Travelling</li>
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
