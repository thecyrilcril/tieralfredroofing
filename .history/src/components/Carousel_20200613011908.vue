<template>
    <div>
        <slot></slot>
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

                bgLazyLoad: true,
                pageDots: false,
            }).focus()
        }
    }

</script>
