<template>
    <div class="main-carousel is-hidden">
        <slot></slot>
    </div>

</template>

<script>
    import Flickity from 'flickity'
    import 'flickity/dist/flickity.min.css'
    import 'flickity-imagesloaded'
    import 'flickity-fade'
    import 'flickity-fullscreen'

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
                lazyLoad: 3,
                imagesLoaded: true,
                pageDots: false,
                // fade: true,
                fullscreen: true,
            }).focus()
        }
    }

</script>

<style scoped>
.carousel-cell {
  height: 200px;
}

/* fullscreen */
.carousel.is-fullscreen .carousel-cell {
  height: 100%;
}
</style>
