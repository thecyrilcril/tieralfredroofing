<template>
<div class="carousel">
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/480/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/481/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/482/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/483/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/484/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/485/?random"></div>
  <div class="carousel-cell" data-flickity-bg-lazyload="https://unsplash.it/640/486/?random"></div>
</div>

</template>

<script>
    import Flickity from 'flickity'
    import 'flickity/dist/flickity.min.css'
    import 'flickity-bg-lazyload/bg-lazyload.js'

    export default {
        props: {
            wraparound: { default: true},
            autoplay: { default: false},
            prevnextbuttons: { default: false},

        },

        mounted() {
            // console.log(this.$el)
            new Flickity(this.$el, {
                wrapAround: this.wraparound,
                autoPlay: this.autoplay,
                prevNextButtons: this.prevnextbuttons,
                cellAlign: "left",
                contain: true,
                bgLazyLoad: true,
                pageDots: false,
            }).focus()
        }
    }

</script>
