<template>
  <div id="app">
    <MyNav></MyNav> 
    <router-view/>
  </div>
</template>

<script>
import MyNav from "@/components/Nav.vue"; // ec6
export default { // vue
  components: {
    MyNav    // this has to equal the name above where it is used
  }
}
</script>

<style lang="scss">
</style>
