<template>
  <v-flex>
    <br>
    <v-card
      class="mx-auto"
      elevation="3"
      max-width="98%"
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">Mother Tongue</v-list-item-title>
          <v-list-item-title class="title mb-1">Portuguese - Brazil</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
    <br>
    <!-- ------------------------------------------------------------------------ -->
    <v-col cols=12>
      <v-data-table
      hide-default-footer
      :headers="headers"
      :items="languages"
      item-key="language"
      class="elevation-1"
      ></v-data-table>
      <br>
      <span class="overline text-center">Levels: A1 and A2: Basic user - B1 and B2: Independent user - C1 and C2: Proficient user</span>
    </v-col>
  </v-flex>
</template>

<script>
export default {
  data () {
    return {
      languages: [
        {
          language: 'English',
          listening: 'C2',
          reading: 'C2',
          spokenInteraction: 'C2',
          spokenProduction: 'C1',
          writing: 'C1'
        },
        {
          language: 'Swedish',
          listening: 'B1',
          reading: 'B1',
          spokenInteraction: 'B1',
          spokenProduction: 'B1',
          writing: 'B1'
        },
        {
          language: 'Norwegian (Bokmal)',
          listening: 'A2',
          reading: 'A2',
          spokenInteraction: 'A2',
          spokenProduction: 'A2',
          writing: 'A2'
        },
        {
          language: 'French',
          listening: 'A2',
          reading: 'A2',
          spokenInteraction: 'A2',
          spokenProduction: 'A2',
          writing: 'A2'
        }
      ],
      headers: [
        { text: 'Language', value: 'language' },
        { text: 'Listening', value: 'listening' },
        { text: 'Reading', value: 'reading' },
        { text: 'Spoken Interaction', value: 'spokenInteraction' },
        { text: 'Spoken Production', value: 'spokenProduction' },
        { text: 'Writing', value: 'writing' }
      ]
    }
  }
}
</script>

<style>

</style>
