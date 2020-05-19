<template>
  <v-container>
  <v-row align="center" justify="center">
    <v-col cols=12>
      <v-card
        class="mx-auto"
        outlined
      >
        <v-img
          class="white--text align-end"
          height="150px"
          :src="currentPhoto"
        >
        <v-card-title>About me:</v-card-title>
        </v-img>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">SHORT BIO</div>
            <v-list-item-text class=" body-2">
              I am an Electrical Engineer who has been working in the high power field. After 10+ years
              working with Control and Automation of Converter and Power substations, I took the decision
              to enroll in a Master’s Degree course in Computer Engineering to increase my knowledge
              in IoT, Computer Networks and Advanced computing. Now I am a PhD candidate researcher at
              ENAC studying distributed computing with drones swarms.
            </v-list-item-text>
            <v-list-item-text class="mt-4">
              <div class="overline mb-4">TECH INTERESTS</div>
              <ul class="body-2 mb-4">
                <li>Internet of the Things</li>
                <li>Wireless Sensors Networks</li>
                <li>Parallel and Distributed Computing</li>
                <li>Computer Networks</li>
              </ul>
            </v-list-item-text>
            <v-list-item-text class="mt-4">
              <div class="overline mb-4">MAIN SKILLS</div>
              <ul class="body-2 mb-4">
                <li>Programming language skills in C/C++, Python and JS (Backend with Node.JS and Frontend with Vue) and programming in general being open to always learn new technologies</li>
                <li>Experience and leadership in the full life-cycle (Sales, Design, Testing, Commissioning and Service) of technology related projects mostly in the area of electrical power systems</li>
                <li>Team work oriented and very comfortable with “learning by doing”</li>
                <li>Knowledge in the Control and Automation area for electrical power systems</li>
                <li>Knowledge and ability on planning and developing technology related projects</li>
              </ul>
            </v-list-item-text>
            <v-list-item-text class="mt-4">
              <div class="overline mb-4">HOBBIES</div>
              <ul class="body-2 mb-4">
                <li>Reading about technology, space and Sci-Fi</li>
                <li>Refactoring my old personal projects</li>
                <li>Fidelling with diverse micro-controllers such as diverse AVRs, ESP(8266 and 32) and nRF52840</li>
                <li>Traveling</li>
              </ul>
            </v-list-item-text>
          </v-list-item-content>
        </v-list-item>
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
    window: 0,
    photos: [
      require('@/assets/backdrops/banner.jpg'),
      require('@/assets/backdrops/joao_pessoa.jpg'),
      require('@/assets/backdrops/joao_pessoa1.jpg'),
      require('@/assets/backdrops/campina_grande.jpg')
    ]
  }),
  computed: {
    currentPhoto () {
      return this.photos[0]
      // return this.photos[Math.floor(Math.random()*this.photos.length)]
    }
  }
}
</script>
