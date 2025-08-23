<script setup lang="ts">
defineProps<{ icon: string }>();
</script>

<template>
  <div class="card">
    <Icon :name="icon" class="card-icon" />
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
  max-width: 60ch;
  height: 100%;
  @apply gap-2 bg-[#eeefe9] p-4 rounded-lg;

  &:hover {
    background-color: rgb(79 149 207 / 0.2);
  }

  .card-icon {
    @apply w-12 h-12 text-stone-600;
  }
}
</style>
