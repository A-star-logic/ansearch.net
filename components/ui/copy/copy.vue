<script setup lang="ts">
defineProps<{ color?: 'blue' }>();
</script>

<template>
  <div class="copy">
    <div class="copy-header">
      <div class="copy-header-caption" :class="`copy-header-caption-${color}`">
        <slot name="header-caption" />
      </div>
      <h2>
        <slot name="header-title" />
      </h2>
    </div>
    <div class="copy-content">
      <slot name="content" />
    </div>
    <div class="copy-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped>
.copy {
  display: flex;
  flex-direction: column;
  max-width: 60ch;
  @apply text-stone-700 gap-4;

  .copy-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: 600;
    @apply gap-4;

    h2 {
      font-weight: 700;
      @apply text-4xl;
    }

    .copy-header-caption {
      display: flex;
      align-items: center;
      @apply gap-2 text-brand-500 text-lg;
    }

    .copy-header-caption-blue {
      @apply text-cyan-500;
    }
  }

  .copy-content {
    @apply text-lg;
  }

  .copy-footer {
    display: flex;
    align-items: center;
    @apply gap-4;
  }
}
</style>
