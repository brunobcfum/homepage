<template>
  <v-container>
    <v-row align-items="start" justify="center" no-gutters>
      <CardHitachi/>
      <CardPersonal/>
    </v-row>
  </v-container>
</template>

<script>
import CardHitachi from '@/components/contact/CardHitachi'
import CardPersonal from '@/components/contact/CardPersonal'

export default {
  components: {
    CardHitachi,
    CardPersonal
  }
}
</script>

<style>

</style>
