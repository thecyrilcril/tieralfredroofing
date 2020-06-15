<template>
    <div class="main-carousel is-hidden">
        <slot></slot>
    </div>

</template>

<script>
    import Flickity from 'vue-flickity'
    import 'flickity/dist/flickity.min.css'
    import 'flickity/dist/flickity.min.css'

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
