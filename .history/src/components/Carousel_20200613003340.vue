<template>
    <div class="carousel main-carousel is-hidden">
        <slot></slot>
    </div>

</template>

<script>
    import Flickity from 'flickity'
    import 'flickity/dist/flickity.min.css'
    import 'flickity-imagesloaded'
    import 'flickity-bg-lazyload'
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
                prevnextbuttons: this.autoplay,
                cellAlign: "left",
                contain: true,
                imagesLoaded: true,
                lazyLoad: 2,
                bgLazyLoad: 2
            }).focus()
        }
    }

</script>
