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
  @apply container mx-auto gap-10 py-10;
}
</style>
