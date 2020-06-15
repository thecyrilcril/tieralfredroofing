<template>
    <div>
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
            cons
            // new Flickity(this.$el, {
            //     wrapAround: this.wraparound,
            //     autoPlay: this.autoplay,
            //     prevNextButtons: this.prevnextbuttons,
            //     cellAlign: "left",
            //     contain: true,
            //     imagesLoaded: true,
            //     bgLazyLoad: true
            // }).focus()
        }
    }

</script>
