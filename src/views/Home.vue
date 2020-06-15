<template>
    <div>
        <Carousel :autoplay="2500" :fade="true">
            <FullscreenCell image="https://unsplash.it/1920/1280/?random">
              <template v-slot:content>
                <!-- <h1 class="text-6xl text-red-400 bg-black px-4 py-2">Works</h1> -->
              </template>
            </FullscreenCell>

            <FullscreenCell image="../assets/images/slide1.jpg">
              <template v-slot:content>
                <!-- <h1 class="text-6xl text-red-400 bg-black px-4 py-2">Life</h1> -->
              </template>
            </FullscreenCell>

            <FullscreenCell image="../assets/images/slide1.jpg">
              <template v-slot:content>
                <!-- <h1 class="text-6xl text-red-400 bg-black px-4 py-2">Husstle</h1> -->
              </template>
            </FullscreenCell>

            <FullscreenCell image="../assets/images/slide1.jpg">
              <template v-slot:content>
                <!-- <h1 class="text-6xl text-red-400 bg-black px-4 py-2">Grind</h1> -->
              </template>
            </FullscreenCell>

            <FullscreenCell image="../assets/images/slide1.jpg">
              <template v-slot:content>
                <!-- <h1 class="text-6xl text-red-400 bg-black px-4 py-2">God</h1> -->
              </template>
            </FullscreenCell>
        </Carousel>
    </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import FullscreenCell from '../components/FullscreenCell.vue'
export default {

  name: 'Home',
  components: {
    Carousel,
    FullscreenCell,

  },

  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
</style>
