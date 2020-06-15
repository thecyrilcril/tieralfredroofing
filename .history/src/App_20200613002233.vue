<template>
  <div id="app">

    <carousel :autoplay="true">
        <img class="carousel-cell-image" data-flickity-lazyload="https://placeimg.com/640/480/any">
        <img class="carousel-cell-image" data-flickity-lazyload="https://placeimg.com/640/480/any?2">
        <img class="carousel-cell-image" data-flickity-lazyload="https://placeimg.com/640/480/any?5">
        <img class="carousel-cell-image" data-flickity-lazyload="https://placeimg.com/640/480/any?4">
        <img class="carousel-cell-image" data-flickity-lazyload="https://placeimg.com/640/480/any?3">
    </carousel>
    <router-link to="/" exact>home</router-link>
    <router-view />
  </div>
</template>

<script>
import Carousel from './components/Carousel.vue'

export default {
  name: 'App',
  components: {
    Carousel
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
