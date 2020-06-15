<template>
    <div class="main-carousel is-hidden">
        <slot></slot>
    </div>

</template>

<script>
    import Flickity from 'flickity'
    import 'flickity/dist/flickity.min.css'
    require('flickity-imagesloaded')
    require('flickity-fade')
    require('flickity-fullscreen')

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
                fade: true
            }).focus()
        }
    }

</script>
