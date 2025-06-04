<script setup lang="ts">
defineProps<{ leftFirstOnMobile?: true }>();
</script>

<template>
  <div class="columns">
    <div class="column">
      <slot name="left"></slot>
    </div>
    <div class="column">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
.columns {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.column {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60ch;
}
</style>
