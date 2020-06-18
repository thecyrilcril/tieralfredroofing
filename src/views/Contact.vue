<template>
    <div>
        <Nav />
        <div class="h-auto relative -z-10">
          <div class="md:px-20 bg-cover bg-center contact">
            <div class="px-6 py-48">
              <h1 class="text-4xl md:text-6xl font-semibold">Contact</h1>
              <p class="text-xl font-sans">
                You can always contact us for your roofing projects.
              </p>

            </div>

          </div>
          <div class="md:px-20 bg-red-600">
            <div class="px-6 py-24 md:flex font-sans text-gray-100">
              <div class="flex items-baseline mr-4">
                <i class="gg-pin"></i>
                <p class="ml-4 py-4">1235 S.Hampton Rd. Desoto, Tx 75115</p>
              </div>
              <div class="flex items-center md:ml-4">
                <i class="gg-smartphone"></i>
                <p class="ml-4">(409) 768-0732</p>
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
import 'css.gg/icons/css/pin.css';
import 'css.gg/icons/css/phone.css';
import 'css.gg/icons/css/smartphone.css';


export default {

  name: 'Contact',

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

.contact
  background-image: url('../assets/images/contact-bg.jpg')
</style>
