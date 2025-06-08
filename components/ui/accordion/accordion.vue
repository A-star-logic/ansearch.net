<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<style scoped>
.accordion {
  width: 100%;
  flex: 1 1 0;
  border: 1px solid;

  @apply bg-white border-stone-200 shadow-lg rounded-xl;
}
</style>
