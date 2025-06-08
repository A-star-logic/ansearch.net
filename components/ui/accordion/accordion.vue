<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<style scoped>
.accordion {
  border: 1px solid;
  @apply bg-white border-stone-200 shadow-lg rounded-xl;
}
</style>
