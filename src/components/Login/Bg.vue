<template lang="html">
  <div class="row">
    <img v-for="img in images" v-bind:src="img"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: ['https://i.bandori.party/u/c/art/929Saaya-Yamabuki-Happy-keidau.png']
    }
  }
}
</script>

<style lang="css">
</style>
