<template>
    <div>
        <Nav />
        <div class="h-auto relative -z-10">
          <div class="px-20 bg-cover bg-center services">
            <div class="px-6 py-48 h-screen">

            </div>

          </div>
          <div class="md:px-20 bg-gray-300 -mt-64">
            <div class="px-6 py-12 md:flex text-gray-800">
              <div class="md:w-1/2">
                <h1 class="text-4xl md:text-6xl font-semibold">Services</h1>
                <p class="text-base mt-2 md:text-xl leading-7 font-sans">
                  HA Roofing and Construction, a proud PLATINUM installer, holds a distinguished place among home construction and roofing companies in Austin, Texas. <br>In addition to specializing in installing all types of new roofing systems, we also provide a comprehensive spectrum of services for all your roof repairs and maintenance needs.
                </p>

              </div>

            </div>
          </div>
        </div>
        <Footer />
    </div>
</template>

<script>

import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'

export default {

  name: 'Services',

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

.services
  background-image: url('../assets/images/services-bg1.jpg')
</style>
