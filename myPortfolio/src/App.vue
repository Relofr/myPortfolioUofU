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
  <div class="wrapper" id="app">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
  <FooterComponent /> 
</template>

<style>
@import "@/styles/constants.scss";

#app {
  font-family: Roboto, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
