<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
</script>

<template>
  <div class="accordion-item">
    <div
      class="accordion-item-header"
      :class="{ 'header-closed': !isOpen }"
      @click="isOpen = !isOpen"
    >
      <slot name="header"></slot>
      <Icon v-if="isOpen" name="fa6-solid:chevron-up" />
      <Icon v-else name="fa6-solid:chevron-down" />
    </div>
    <transition name="accordion-content-transition">
      <div class="accordion-item-content" v-if="isOpen">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.accordion-item {
  width: 100%;

  &:first-child {
    @apply rounded-t-xl;

    .accordion-item-header {
      @apply rounded-t-xl;
    }
  }

  &:last-child {
    @apply rounded-b-xl;

    .header-closed {
      @apply rounded-b-xl;
    }
  }

  + .accordion-item {
    border-top: 1px solid;
    @apply border-stone-200;
  }

  .accordion-item-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @apply cursor-pointer p-4;

    &:hover {
      @apply text-brand-500 bg-stone-100;
    }
  }

  .accordion-item-content {
    @apply p-4;
    overflow: hidden; /* Crucial for max-height animation */
    /* max-height is controlled by transition classes and JS hooks */
  }

  /* Vue transition classes for accordion content */
  .accordion-content-transition-enter-active,
  .accordion-content-transition-leave-active {
    transition:
      max-height 0.3s ease-in-out,
      padding-top 0.3s ease-in-out,
      padding-bottom 0.3s ease-in-out;
    overflow: hidden; /* Ensure overflow is hidden during transition */
  }

  .accordion-content-transition-enter-from,
  .accordion-content-transition-leave-to {
    max-height: 0;
    padding-top: 0 !important; /* Override @apply p-4's padding */
    padding-bottom: 0 !important; /* Override @apply p-4's padding */
  }
}
</style>
