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
  <div class="wrapper" id="app">
    <NavbarComponent />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <FooterComponent />
  </div>
</template>

<style>
@import "@/styles/constants.scss";

#app {
  font-family: Roboto, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
