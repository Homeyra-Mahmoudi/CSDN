<template>
    <div>
        <ChiPresente />
    </div>
</template>

<script>
import ChiPresente from '../components/Home/Chi-presente.vue';


export default {
    components:{ChiPresente},
    layout: 'default',
    
  head() {
    return {
      title: "CSDN Piemonte - Associati"
    };
    }

}

</script>

<style>

</style>