<template>
    <div>
        <Nav />
        <div class="h-auto relative -z-10">
          <div class="px-20 bg-cover bg-center about">
            <div class="px-6 py-48 h-screen">

            </div>

          </div>
          <div class="md:px-20 bg-gray-300 -mt-64">
            <div class="px-6 py-12 md:flex text-gray-800">
              <div class="md:w-1/2">
                <h1 class="text-4xl md:text-6xl font-semibold">About</h1>
                <p class="text-base mt-2 md:text-xl leading-7 font-sans">
                  Our team of professional roofers is committed to build a successful relationship with our clients and agrees that the effort is just as important as knowing how to construct a quality roof.

                </p>

                <p class="mt-4 font-semibold text-base">
                  Harold Alfred

                </p>

                <blockquote class="text-sm text-gray-600 font-bold">
                  Founder of HA Roofing & Construction
                </blockquote>

              </div>

            </div>
          </div>
          <Footer />
        </div>

    </div>
</template>

<script>

import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'


export default {

  name: 'About',

  components: {
    Nav,
    Footer,
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="sass" scoped>
$nav-color: #c53030

header
  background: $nav-color

.about
  background-image: url('../assets/images/about-bg1.jpg')
</style>
