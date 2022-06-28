<script setup>
import { RouterView } from 'vue-router'
import AboutMe from '@/components/AboutMe.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar />
  <header>
    <div>
      <AboutMe name="Kyle Hatch" job="Software Engineer + UX/UI designer at LogMeIn" bio="Passionate about bringing my ideas to life and creating a great user experience." />
    </div>
  </header>

  <RouterView />
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
