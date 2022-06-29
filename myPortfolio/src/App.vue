<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<style>
@import '@/assets/base.css';

#app {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  font-weight: normal;
}
</style>
