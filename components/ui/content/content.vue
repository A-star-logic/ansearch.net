<template>
  <div class="content">
    <slot />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @apply container mx-auto gap-16 py-16;
}
</style>
