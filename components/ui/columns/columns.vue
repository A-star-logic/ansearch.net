<script setup lang="ts">
defineProps<{ rightFirstOnMobile?: true }>();
</script>

<template>
  <div class="columns" :class="{ 'columns-reverse': rightFirstOnMobile }">
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
  justify-content: space-evenly;
  flex-direction: column-reverse;
  align-items: stretch;
  width: 100%;
  @apply md:flex-row md:[align-items:center];
}

.columns-reverse {
  flex-direction: column;
  @apply md:flex-row;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60ch;
  width: 100%;
}
</style>
