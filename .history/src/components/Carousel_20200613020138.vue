<template>
    <!-- <div class="main-carousel is-hidden">
        <slot></slot>
    </div> -->
    <flickity ref="flickity" :options="flickityOptions">
  <div class="carousel-cell">1</div>
  <div class="carousel-cell">2</div>
  <div class="carousel-cell">3</div>
  <div class="carousel-cell">4</div>
  <div class="carousel-cell">5</div>
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
