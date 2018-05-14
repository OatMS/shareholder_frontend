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

/* @font-face {
  font-family: Sukhumvit;
  src: url("/static/font/Sukhumvit-Bold.ttf") format('truetype');
  font-weight: bold;
} */

/* @font-face {
  font-family: Sukhumvit;
  src: url("/static/font/Sukhumvit-Thin.ttf") format('truetype');
  font-weight: thin;
}

@font-face {
  font-family: Sukhumvit;
  src: url("/static/font/Sukhumvit-Medium.ttf") format('truetype');
  font-weight: medium;
}

@font-face {
  font-family: Sukhumvit;
  src: url("/static/font/Sukhumvit-Light.ttf") format('truetype');
  font-weight: lighter;
} */
@font-face {
    font-family: Sukhumvit;
    src: url('/static/font/Sukhumvit.ttf') format('truetype');
}
div {
  font-family: Sukhumvit;
  /* font-weight: 600; */
}
</style>
