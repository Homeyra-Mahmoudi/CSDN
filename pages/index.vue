<!-- this page contain the whole components for the home page and render the home page-->
<template>
  <div class="section">

    <!-- 
    <home-row-banner />
    <chi-presente /> 
    <current-event-banner />-->
    <home-banner />   
    <!-- <scorpi-passati-eventi />
    <card-eventi-passati /> -->

  </div>
</template>

<script>

import HomeBanner from '~/components/Home/home-banner.vue'
// import HomeRowBanner from '~/components/Home/home-row-banner.vue'
// import ChiPresente from '~/components/Home/Chi-presente.vue'
// import CurrentEventBanner from '~/components/CurrentEvent/Current-event-banner.vue'
// import ScorpiPassatiEventi from '~/components/Home/scorpi-passati-eventi.vue'
// import CardEventiPassati from '~/components/Home/card-eventi-passati.vue'




export default {
  components: {HomeBanner},
  layout: 'default',
  
}
</script>

<style>
body{
  background: linear-gradient(to bottom,#C3C6E7 15%, #CAAFBD 42%, #69113E 80%);


}

</style>
