<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style media="screen">
.toolbar__content{
  background-color: green;
}

@font-face {
    font-family: Sukhumvit;
    src: src('@/assets/Sukhumvit.ttf');
}
.application {
    font-family: Sukhumvit;
}
</style>
