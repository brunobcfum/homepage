<template>
  <div>
    <v-col cols=12 >
      <v-card
        class="mx-auto"
        max-width="450"
        min-width="250"
        outlined
        elevation="3"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">PhD Researcher at:</div>
            <v-list-item-title class="headline mb-1">Bruno Chianca Ferreira</v-list-item-title>
            <!-- <v-list-item-subtitle>Telecom</v-list-item-subtitle> -->
            <v-list-item-subtitle>Networks and Communication Systems Research Group</v-list-item-subtitle>
            <v-list-item-subtitle>Ecole Nationale de l'Aviation Civile</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          >
          <v-img src="@/assets/enac.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-card-text>
          <v-icon dense>mdi-contact-mail</v-icon>
          bruno.chianca@enac.fr
        </v-card-text>
        <v-card-actions>
          <v-btn href="https://github.com/brunobcfum/" text>GitHub</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
