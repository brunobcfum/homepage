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
            <div class="overline mb-4">Student at:</div>
            <v-list-item-title class="headline mb-1">Bruno Chianca Ferreira</v-list-item-title>
            <v-list-item-subtitle>School of Engineering</v-list-item-subtitle>
            <v-list-item-subtitle>Department of Informatics</v-list-item-subtitle>
            <v-list-item-subtitle>Universidade do Minho</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          >
          <v-img src="@/assets/uminho.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-card-text>
          <v-icon dense>mdi-contact-mail</v-icon>
          pg33878@alunos.uminho.pt
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
