<template>
    <div>
        <current-event-banner />
        <scheduale-of-the-currentevent />
    </div>
</template>

<script>


import SchedualeOfTheCurrentevent from '../components/CurrentEvent/Scheduale-of-the-currentevent.vue'
import CurrentEventBanner from '~/components/CurrentEvent/Current-event-banner.vue'

export default {
  components: { CurrentEventBanner, SchedualeOfTheCurrentevent},
  layout: 'default'

}
</script>

<style>
body{
    background: #051C38;
}

</style>