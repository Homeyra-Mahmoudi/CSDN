<template>
  <div  class="flex flex-col flex-wraap justify-center items-center max-w-screen-lg w-full">
    <client-only placeholder="Loading...">
      <pdf
          v-for="i in 14"
          :key="i"
          class="w-full"
          src="Statutoo.pdf"
          :page="i"
        ></pdf>
    </client-only>
  </div>
</template>

<script>

export default {
}
</script>

<style >

</style>