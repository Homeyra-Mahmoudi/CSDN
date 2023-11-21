<template>
    <div>

    <!-- 
    <media-link  /> -->
      <event-banner-second-vue />
      <media-link-second />

    </div>
  
</template>




<script>

import MediaLinkSecond from '~/components/EventiPassati/Link-media-second.vue'
import EventBannerSecondVue from '~/components/EventiPassati/Event-Banner-second.vue'





export default {
  components: { EventBannerSecondVue, MediaLinkSecond},
  layout: 'default'

}
</script>

<style>


</style>