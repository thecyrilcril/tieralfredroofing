<template>
    <div
        class="main-carousel is-hidden">
        <slot></slot>
    </div>

</template>

<script>
    import Flickity from 'flickity'
    import 'flickity/dist/flickity.min.css'
    import 'flickity-imagesloaded'
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
                cellAlign: "left",
                contain: true,
                imagesLoaded: true,
                bgLazyLoad: 2
            }).focus()
        }
    }

</script>
