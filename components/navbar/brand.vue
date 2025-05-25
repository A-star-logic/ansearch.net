<template>
  <NuxtLink to="/" class="brand">
    <NuxtImg
      src="/images/logo.webp"
      height="200"
      alt="Logo"
      class="brand-logo"
    />
    <div class="brand-title">
      <div class="brand-title-text">Ansearch</div>
      <div class="brand-title-subtext">An<em>[swer &]</em>Search</div>
    </div>
    <div class="pill">Beta</div>
  </NuxtLink>
</template>

<style scoped>
.brand {
  display: flex;
  align-items: center;
  @apply gap-2;

  .brand-logo {
    width: 42px;
  }

  .brand-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1;

    .brand-title-text {
      font-family: 'Red Hat Display', sans-serif;
      font-size: 2rem;
      @apply text-brand-500 font-bold;
    }

    .brand-title-subtext {
      font-size: 0.875rem;
      @apply text-stone-500;

      em {
        font-style: normal;
        font-size: 0.75rem;
        @apply text-stone-500;
      }
    }
  }

  .pill {
    border: 1px solid;
    @apply px-2 py-1 bg-stone-50 text-stone-600 font-semibold rounded-full text-sm border-stone-200;
  }
}
</style>
