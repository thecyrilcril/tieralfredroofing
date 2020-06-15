<template>
    <div class="main-carousel is-hidden">
        <slot></slot>
    </div>

</template>

<script>
    import Flickity from 'flickity'
    import 'flickity/dist/flickity.min.css'
    require('flickity-imagesloaded')

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
                lazyLoad: true,
                pageDots: false
            }).focus()
        }
    }

</script>
