<template>
    <div>

    <!-- 
    <media-link  /> -->
  
      <event-banner-second-vue />


    </div>
  
</template>




<script>


import EventBannerSecondVue from '~/components/EventiPassati/Event-Banner-second.vue'





export default {
  components: { EventBannerSecondVue},
  layout: 'default',
  head() {
    return {
      title: "CSDN Piemonte - Archivio Eventi"
    };
  }
}
</script>

<style>

</style>