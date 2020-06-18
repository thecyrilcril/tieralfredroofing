<template>
    <div>
        <Nav />
        <Carousel :autoplay="4500" :fade="true" :pauseonhover="true">
            <FullscreenCell v-for="slide in slides" :key="slide.id" :image="slide.image">
              <template v-slot:content>
                <div class="md:px-20 md:container md:mx-auto md:w-full h-screen flex mt-64">
                  <div class="px-6">
                    <h1 class="bg-red-700 text-3xl md:text-5xl font-bold text-left text-gray-100 px-4 py-2 md:py-8 inline-block leading-10">
                      HA Roofing and Construction
                    </h1>
                    <p class="text-gray-200 text-xl md:text-2xl font-light mt-2 md:w-1/2 hero-text">
                      HA Roofing and Construction, a proud PLATINUM installer, holds a distinguished place among home construction and roofing companies in Austin, Texas.
                    </p>

                  </div>

                </div>
              </template>
            </FullscreenCell>

        </Carousel>
    </div>
</template>

<script>
import Nav from '../components/Nav.vue'
import Carousel from '../components/Carousel.vue'
import FullscreenCell from '../components/FullscreenCell.vue'
// import Footer from '../components/Footer.vue'
const slides = [
  {id: 1, image: require('../assets/images/slide1.jpg')},
  {id: 2, image: require('../assets/images/slide2.jpg')},
  {id: 3, image: require('../assets/images/slide333.jpg')},
  {id: 4, image: require('../assets/images/slide4.jpg')},
  {id: 5, image: require('../assets/images/slide5.jpg')},
]


export default {

  name: 'Home',
  components: {
    Nav,
    Carousel,
    FullscreenCell,

  },

  data () {
    return {
      slides
    }
  }
}
</script>

<style lang="sass">
$nav-color: #c53030

header
  background: transparentize($nav-color, 1)

.hero-text
  text-shadow: 0 0 50px hsla(0, 0%, 0, .7)
</style>
