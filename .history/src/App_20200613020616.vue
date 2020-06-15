<template>
  <div id="app">
    <carousel>
      <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/480/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/481/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/482/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/483/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/484/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/485/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/486/?random"></div>
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
