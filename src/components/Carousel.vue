<template>
    <div class="carousel main-carousel is-hidden -z-10">
        <slot></slot>
    </div>

</template>

<script>
    import Flickity from 'flickity'
    import 'flickity/dist/flickity.min.css'
    import 'flickity-imagesloaded'
    import 'flickity-bg-lazyload'
    import 'flickity-fade'

    export default {
        props: {
            wraparound: { default: true},
            autoplay: { default: false},
            prevnextbuttons: { default: false},
            pagedots: { default: false},
            pauseonhover: { default: false},
            fade: { default: false},

        },

        mounted() {
            new Flickity(this.$el, {
                wrapAround: this.wraparound,
                autoPlay: this.autoplay,
                pauseAutoPlayOnHover: this.pauseonhover,
                cellAlign: "left",
                prevNextButtons: this.prevnextbuttons,
                pageDots: this.pagedots,
                imagesLoaded: true,
                bgLazyLoad: 1,
                fade: this.fade
            }).focus()
        }
    }

</script>

<style>


/* fullscreen */
.main-carousel {
  height: 100vh;
}

.main-carousel > img {
    height: 100%;
    width: auto;
}
</style>
