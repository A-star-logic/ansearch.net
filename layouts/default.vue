<script setup>
import Footer from '../components/footer.vue';
import { Navbar } from '../components/navbar';
</script>

<template>
  <Navbar />
  <div class="layout">
    <slot />
  </div>
  <Footer />
</template>

<style scoped>
.layout {
  min-height: 100%;
}
</style>
