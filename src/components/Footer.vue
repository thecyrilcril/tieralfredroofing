<template>
    <div class="md:px-20 bg-gray-900">
        <div class="px-6 py-4 text-gray-500 font-sans font-light text-sm tracking-wider">
            &copy; {{ date.getFullYear() }} HA Roofing and Construction. All Rights Reserved.

        </div>
    </div>
</template>

<script>
  let date = new Date()
export default {

  name: 'Footer',
  data () {
    return {
        date
    }
  }
}
</script>

<style lang="css" scoped>
</style>
