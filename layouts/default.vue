c<template>
  <div>
    <Headers
      :navLinks="[
        {
          name: 'Home',
          link: '/',
          dropdown: false,
        },
        {
          name: 'Archivio Eventi',
          link: '/EventiPassati',
          dropdown: false,
        },

        { name: 'Chi Siamo', link: '/ChiSiamo', dropdown: false, 
        }
      ]"
    ></Headers>
    <Nuxt />
    <Footers />
  </div>
</template>

<script>
import Headers from '~/components/The-Header.vue'
import Footers from '~/components/The-footer.vue'

export default {
  components: { Headers, Footers },
}
</script>

<style>
body {
  background: linear-gradient(to bottom, #C3C6E7 15%, #CAAFBD 42%, #69113E 80%);
}
</style>
