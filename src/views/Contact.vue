<template>
  <v-container>
    <v-row align="top" justify="center" no-gutters>
      <CardUminho/>
      <CardPersonal/>
    </v-row>
  </v-container>
</template>

<script>
import CardUminho from '@/components/contact/CardUminho'
import CardPersonal from '@/components/contact/CardPersonal'
export default {
  components: {
    CardUminho,
    CardPersonal
  }
}
</script>

<style>

</style>
