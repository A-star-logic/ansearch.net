<script setup>
import Footer from '../components/footer.vue';
import { Navbar } from '../components/navbar';
</script>

<template>
  <Navbar />
  <div class="content">
    <slot />
  </div>
  <Footer />
</template>

<style scoped>
.content {
  height: 100%;
}
</style>
