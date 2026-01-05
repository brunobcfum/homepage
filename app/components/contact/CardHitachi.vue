<template>
  <div>
    <v-col cols=12 >
      <v-card
        class="mx-auto"
        max-width="450"
        min-width="400"
        min-height="250"
        variant="elevated"
        elevation="3"
      >
        <v-list-item lines="three">
          <template #title>
            <div class="overline mb-4">Senior R&D Engineer:</div>
            <div class="text-h5 mb-1">Bruno Chianca Ferreira</div>
          </template>
          <template #subtitle>
            <div>MACH R&D</div>
            <div>Hitachi Energy Sweden</div>
          </template>

          <template #append>
            <v-avatar tile color="grey" size="80">
              <v-img src="@/assets/hitachi-small.webp"></v-img>
            </v-avatar>
          </template>
        </v-list-item>
        <v-card-text>
          <v-icon dense>mdi-contact-mail</v-icon>
          bruno.chianca-ferreira@hitachienergy.com
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
