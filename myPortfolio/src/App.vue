<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from '@/components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

</script>

<script>
import M from 'materialize-css'

export default {
  mounted() {
    M.AutoInit()
  }
}
</script>

<template>
  <NavbarComponent />
  <RouterView />
  <FooterComponent />
</template>

<style>
#app {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  font-weight: normal;
}
</style>
