<template>
    <div>
        <ScorpiPassatiEventi/>
        <CardEventiPassati/>





    </div>
</template>

<script>
import ScorpiPassatiEventi from '~/components/Home/scorpi-passati-eventi.vue'
import CardEventiPassati from '~/components/Home/card-eventi-passati.vue'


export default{
    components:{ScorpiPassatiEventi, CardEventiPassati},

    layout: 'default',
}

</script>

<style>

</style>