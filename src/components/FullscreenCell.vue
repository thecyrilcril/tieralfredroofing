<template>
  <div
    class="carousel-cell carousel-img-bg-fullscreen"
    :data-flickity-bg-lazyload="image">
    <slot name="content"></slot>
  </div>
</template>

<script>
    export default {
        props: {
            image: String,
        },
    }
</script>
