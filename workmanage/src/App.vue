<template>
  <div id="app">
    <topnav></topnav>
    <router-view/>
  </div>
</template>

<script>
import topnav from "@/components/common/topnav"  
export default {
  name: 'app',
  components:{
    topnav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
