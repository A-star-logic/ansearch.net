<template>
  <div class="dropdown-wrapper" ref="dropdown">
    <div class="dropdown-trigger" @click="openClose" ref="menu">
      <slot name="trigger" />
    </div>

    <div class="dropdown-content" v-if="isOpen" @click="openClose">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);

/**
 * Toggles the dropdown menu visibility
 */
function openClose(): void {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
.dropdown-wrapper {
  position: relative;

  .dropdown-trigger {
    z-index: 2;
    cursor: pointer;
  }

  .dropdown-content {
    position: absolute;
    top: 120%;
    width: 100%;
    min-width: max-content;
    border: 1px solid;
    @apply bg-white shadow-xl rounded border-stone-300 p-2;
  }
}
</style>
