<template>
    <!-- <div class="main-carousel is-hidden">
        <slot></slot>
    </div> -->
    <flickity ref="flickity" :options="flickityOptions">
<div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/480/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/481/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/482/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/483/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/484/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/485/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/486/?random"></div>
</flickity>

</template>

<script>
    import Flickity from 'vue-flickity'
    // import 'flickity/dist/flickity.min.css'
    require('flickity-bg-lazyload')

    export default {
        components: {
    Flickity
  },

  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true

        // any options from Flickity can be used
      }
    }
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    }
  }
    }

</script>
