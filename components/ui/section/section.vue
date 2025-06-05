<template>
  <div class="section">
    <div class="section-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @apply bg-white p-10;

  .section-content {
    @apply container mx-auto;
  }
}
</style>
