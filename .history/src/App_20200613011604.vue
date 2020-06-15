<template>
  <div id="app">
    <carousel :autoplay="true" class="carousel">
      <div class="carousel-cell" id="carousel-cell1" data-flickity-bg-lazyload="https://unsplash.it/640/480/?random"></div>
  <div class="carousel-cell" id="carousel-cell2" data-flickity-bg-lazyload="https://unsplash.it/640/481/?random"></div>
  <div class="carousel-cell" id="carousel-cell3" data-flickity-bg-lazyload="https://unsplash.it/640/482/?random"></div>
  <div class="carousel-cell" id="carousel-cell4" data-flickity-bg-lazyload="https://unsplash.it/640/483/?random"></div>
  <div class="carousel-cell" id="carousel-cell5" data-flickity-bg-lazyload="https://unsplash.it/640/484/?random"></div>
  <div class="carousel-cell" id="carousel-cell6" data-flickity-bg-lazyload="https://unsplash.it/640/485/?random"></div>
  <div class="carousel-cell" id="carousel-cell7" data-flickity-bg-lazyload="https://unsplash.it/640/486/?random"></div>
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
