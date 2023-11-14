<!-- this component is the welcome section of homepage-->
<template>
  <div class="grid lg:grid-cols-2 md:pl-44 md:pr-44">
    <div class="basis-1/2 bg-pink-900 sm:pl-16 sm:pr-8 sm:pt-20 sm:pb-4">
      <h1 class="font-Roboto text-5xl text-white font-normal">IL LAVORO PUBBLICO CONTRATTUALIZZATO: UN MODELLO IN EVOLUZIONE</h1>
      <br></br>
      <p class="font-Roboto text-lg text-white font-thin"> Matera, 30 Set 2023, ore 16.00 - 19.00, c/o Camera di Commercio Matera, via Lucana n. 82</p>
      <p class="font-Roboto text-lg text-white font-thin">L'evento è organizzato dal Centro Nazionale Studi di Diritto del Lavoro "D. Napoletano" - Sezione Lucania in collaborazione con l'Ordine degli Avvocati di Matera e con il patrocinio di Comune di Matera, ANCI Basilicata e ALI Basilicata</p>
      <router-link to="/CurrentEvent">
        <button class="text-white font-thin p-2 rounded-lg bg-blue-950 font-Roboto text-lg mt-4">Scopri di più ></button>
      </router-link>
    </div>
    <div class="basis-1/2 ">
      <img class="max-w-full h-auto" src="/home/csdn-img-convegni 2.png" alt="Event image of CSDN"/>
    </div>
  </div>
</template>

<script>
export default {
 
}
</script>

<style >


</style>

