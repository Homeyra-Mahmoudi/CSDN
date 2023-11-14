<!--  Component for the Orientation Info development-->
<template>
  <div :class="breadcrumpClass" class="orientation-info">
    <div class="container">
      <!-- list of path to be displayed in the breadcrump -->
      <span
        v-for="(item, itemIndex) of myPathList"
        :key="'breadcrump-link-' + itemIndex"
      >
        <a class="font-Roboto text-white text-base text-pink-800 sm:pl-10 text-normal "><nuxt-link :to="item.path"> > {{ item.pathName }} </nuxt-link></a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Object containing all the information about the path and to redirect the user to it
    pathsList: { type: Array, default: () => [] },
    // Class of the div containing the breadcrump
    breadcrumpClass: { type: String, default: () => '' },
  },
  data() {
    return {
      // Object containing all the information about the path and to redirect the user to it
      myPathList: this.pathsList,
    }
  },
  // Mounted property that inables the navigation bar to highligth the corresponding element of the user location inside the website
  mounted() {
    if (this.myPathList === []) {
      this.$root.$emit('location-from-breadcrump', 'Home')
      console.log('Emit home')
    } else {
      console.log('Emit ')
      console.log(this.myPathList)
      this.$root.$emit('location-from-breadcrump', this.myPathList[0].pathName)
    }
  },
}
</script>

<style>

.breadcrump-link {
  margin-bottom: 10px;
  margin-left: 20px;
}

.single-breadcrump-link:hover {
  text-decoration: underline;
}

.orientation-info {
  position: relative;
  top: -6px;
  left: 0;
  z-index: 10;
  background: #C4CAEC;
  width: 100vw;
  box-sizing: border-box;
  margin-top: 6px;
  font-weight: bold;
  padding: 10px 0px;
  color: white;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 00), 0 2px 4px 0 rgba(0, 0, 0, 0.15);
}
</style>
