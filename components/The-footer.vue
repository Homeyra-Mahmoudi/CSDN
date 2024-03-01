<template>
  <div class="w-full bg-footer-blue-dark flex justify-center items-center pb-10">
    <div class="grid sm:grid-cols-3 sm:gap-cols-4 realtive max-w-screen-xl w-full py-4 px-8">
      <div class="hidden lg:flex lg:pt-6 lg:pl-16  col-span-1 lg:pb-10 ">
          <img  src="/CSDN-logo.png" alt="Logo" />
      </div>
      <div class="col-span-1 lg:pl-16 pl-2 sm:pt-10 pb-4">
          <p class="font-Roboto lg:text-2xl text-white text-extrabold pb-4 ">Contatti</p>
          <p class="font-Roboto lg:text-l text-white text-light whitespace-break-spaces">Segreteria del Centro Studi, Via San Pio V n. 20-10125 TORINO 
  Tel. 011/669.28.48-650.81.97 Fax 011/74.32.141</p>
          <a class="font-Roboto lg:text-l text-white text-light underline" href="mailto:rcarapelle@carapelle-clivio.it">info@csdnpiemonte.it</a>
      </div>
      <div class="col-span-1 lg:pl-16 pl-2 sm:pt-10 pb-4">
          <p class="font-Roboto lg:text-2xl text-white text-extrabold pb-4">Quick Links</p>
          <ul class="list-none">
              <li><nuxt-link class="font-Roboto lg:text-l text-white  text-light" to="/">Home</nuxt-link></li>
              <li><nuxt-link class="font-Roboto lg:text-l text-white  text-light" to="/ChiSiamo">Chi Siamo</nuxt-link></li>
              <li><nuxt-link class="font-Roboto lg:text-l text-white text-light" to="/EventiPassati">Eventi Passati</nuxt-link></li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

