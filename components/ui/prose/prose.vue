<template>
  <div class="prose">
    <slot />
  </div>
</template>

<style scoped>
.prose {
  display: flex;
  flex-direction: column;
  max-width: 65ch;
  @apply mx-auto py-16;
}

:deep(p) {
  @apply mt-4;
}

:deep(h1) {
  text-align: center;
  @apply mb-0;
}

:deep(.subtitle) {
  text-align: center;
  @apply text-stone-600 text-lg mt-0;
}

:deep(h2) {
  @apply mt-12;
}

:deep(h3) {
  @apply mt-8;
}

:deep(h4) {
  @apply mt-6;
}

:deep(a) {
  @apply text-brand-500;
}

:deep(ul) {
  @apply list-disc ml-6;
}

:deep(ol) {
  @apply list-decimal ml-6;
}
</style>
