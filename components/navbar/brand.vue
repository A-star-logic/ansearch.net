<template>
  <NuxtLink :to="$localePath('index')" class="brand">
    <NuxtImg
      src="/images/logo-200x200.webp"
      height="200"
      alt="Logo"
      class="brand-logo"
    />
    <div class="brand-title">
      <div class="brand-title-text">Ansearch</div>
      <div class="brand-title-subtext">An<em>[swer &]</em>Search</div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.brand {
  display: flex;
  align-items: center;
  width: max-content;
  @apply gap-2;

  .brand-logo {
    @apply w-6 md:w-10;
  }

  .brand-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1;

    .brand-title-text {
      font-family: 'Red Hat Display', sans-serif;
      @apply text-brand-500 font-bold text-lg md:text-3xl;
      line-height: 1;
    }

    .brand-title-subtext {
      @apply text-stone-500 text-xs md:text-sm;

      em {
        font-style: normal;
        font-size: 0.75rem;
        @apply text-stone-500 text-[0.625rem] md:text-xs;
      }
    }
  }
}
</style>
