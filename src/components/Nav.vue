<template>
    <header class="md:px-20 md:py-8 w-full fixed top-0 font-sans">
        <nav class="flex justify-between uppercase">
            <div class="brand py-8 px-6 w-full flex justify-between md:py-0 md:px-0 md:w-1/5 relative z-10">
                <div>
                    <router-link to="/"
                    class="md:mx-8 md:font-semibold tracking-wider text-white border-transparent border-b-2 transition-colors duration-200 ease-in-out hover:border-white" @click.native="toggleNav(false)" exact>
                        Tieralfred Roofing
                    </router-link>
                </div>
                <div class="menu-trigger md:hidden cursor-pointer py-2 text-white" @click="toggleNav">
                    <i class="gg-menu"></i>
                </div>
            </div>


            <div class="navigation md:x-navigation fixed md:static top-0 w-full md:w-auto min-h-screen md:min-h-0 bg-red-500 mobile-nav-bg md:bg-transparent pt-32 md:pt-0 md:flex md:justify-end"
            :class="{'open': mobileMenu}"
            >
            <ul class="list-reset md:flex md:flex-1 md:justify-between">

                <li class="text-center py-4 text-3xl md:py-0 md:text-base">
                    <router-link
                    to="/about"
                    class="md:mx-8 md:font-semibold tracking-wider text-white border-transparent border-b-2 transition-colors duration-200 ease-in-out hover:border-white"
                    @click.native="toggleNav(false)">About</router-link>
                </li>

                <li class="text-center py-4 text-3xl md:py-0 md:text-base">
                    <router-link to="/services"
                      class="md:mx-8 md:font-semibold tracking-wider text-white border-transparent border-b-2 transition-colors duration-200 ease-in-out hover:border-white"
                      @click.native="toggleNav(false)">
                        Services
                    </router-link>
                </li>

                <li class="text-center py-4 text-3xl md:py-0 md:text-base">
                    <router-link to="/contact" class="md:mx-8 md:font-semibold tracking-wider text-white border-transparent border-b-2 transition-colors duration-200 ease-in-out hover:border-white"
                     @click.native="toggleNav(false)"
                    >Contact</router-link>
                </li>

            </ul>

        </div>
    </nav>

    </header>

</template>

<script>
import 'css.gg/icons/css/menu.css';
export default {

  name: 'Nav',

  data () {
    return {
        mobileMenu: false
    }
  },

  methods: {
      toggleNav(status) {
          if (!status) {
              this.mobileMenu = status
              return
          }
          this.mobileMenu = !this.mobileMenu
      }
  }
}
</script>

<style lang="sass">

</style>
