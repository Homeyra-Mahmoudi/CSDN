<template>
  <div class="grid sm:grid-cols-3 sm:gap-cols-4 realtive bg-footer-blue-dark md:pl-44 md:pr-44 pl-4 pr-4">
    <div class="invisible lg:visible  col-span-1 lg:pt-10 lg:pb-10">
        <img  src="/Logo-new-CSDN.png" alt="Logo" />
    </div>
    <div class="col-span-1 sm:pt-10 pb-4">
        <p class="font-Roboto lg:text-2xl text-white text-extrabold pb-4 ">Conttati</p>
        <p class="font-Roboto lg:text-l text-white  text-light">Segreteria del Centro Studi, Via San Pio  V n. 20-10125 TORINO Tel. 011/669.28.48-650.81.97 Fax 011/74.32.141</p>
        <a class="font-Roboto lg:text-l text-white text-light underline" href="mailto:rcarapelle@carapelle-clivio.it">rcarapelle@carapelle-clivio.it</a>
    </div>
    <div class="col-span-1  sm:pt-10 pb-4">
        <p class="font-Roboto lg:text-2xl text-white text-extrabold pb-4">Quick Links</p>
        <ul class="list-none">
            <li><nuxt-link class="font-Roboto lg:text-l text-white  text-light" to="/">Home</nuxt-link></li>
            <li><nuxt-link class="font-Roboto lg:text-l text-white  text-light" to="/ChiSiamo">Chi Siamo</nuxt-link></li>
            <li><nuxt-link class="font-Roboto lg:text-l text-white text-light" to="/EventiPassati">Eventi Passati</nuxt-link></li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

