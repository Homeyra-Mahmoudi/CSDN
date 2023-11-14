<template>
    <div>
    <event-banner />
    <media-link  />
    <event-banner-second-vue />
    <media-link-second />

    </div>
  
</template>




<script>


import EventBanner from '../components/EventiPassati/Event-Banner.vue'
import MediaLinkSecond from '~/components/EventiPassati/Link-media-second.vue'
import MediaLink from '~/components/EventiPassati/Links-media.vue'
import EventBannerSecondVue from '~/components/EventiPassati/Event-Banner-second.vue'

export default {
  components: { EventBanner , MediaLink, EventBannerSecondVue, MediaLinkSecond},
  layout: 'default'

}
</script>

<style>
body{
    background:#C3C6E7; /* not apply if you go from page-1 to page-2 */
   }

</style>