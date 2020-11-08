<template>
  <!-- <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    
  </div> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
export default defineComponent({
  name: "App",
});
</script>

<style lang="less">
</style>
