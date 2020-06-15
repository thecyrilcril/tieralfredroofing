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
    import 'flickity/dist/flickity.min.css'
    require('flickity-bg-lazyload')

    export default {
        props: {
            wraparound: { default: true},
            autoplay: { default: false},
            prevnextbuttons: { default: false},

        },

        mounted() {
            new Flickity(this.$el, {
                wrapAround: this.wraparound,
                autoPlay: this.autoplay,
                prevNextButtons: this.prevnextbuttons,
                cellAlign: "left",
                lazyLoad: true,
                pageDots: false,
                bgLazyLoad: true
            }).focus()
        }
    }

</script>
