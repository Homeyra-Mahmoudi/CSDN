<template>
    <div>
        
        <scheduale-of-the-currentevent />
    </div>
</template>

<script>


import SchedualeOfTheCurrentevent from '../components/CurrentEvent/Scheduale-of-the-currentevent.vue'


export default {
  components: { SchedualeOfTheCurrentevent},
  layout: 'default', 
  head() {
    return {
      title: "CSDN Piemonte - Prossimo Evento"
    };
    }

}
</script>

<style>


</style>