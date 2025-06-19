<template>
  <div class="hero">
    <div class="hero-body">
      <slot />
    </div>
  </div>
  <div class="brand-banner">
    <div class="brand-banner-copy">
      <!-- to delete when we have other partners -->
      {{ $t('general.hero.customers') }}
    </div>
    <div class="brand-banner-logos">
      <NuxtImg
        src="/images/landing/home/partners/bpce.webp"
        class="brand-banner-logo"
      />

      <NuxtImg
        src="/images/landing/home/partners/poshmark.webp"
        class="brand-banner-logo"
      />

      <NuxtImg
        src="/images/landing/home/partners/zoho.webp"
        class="brand-banner-logo"
      />

      <NuxtImg
        src="/images/landing/home/partners/mines-paris.webp"
        class="brand-banner-logo"
      />

      <NuxtImg
        src="/images/landing/home/partners/caves-notre-dame.webp"
        class="brand-banner-logo"
      />

      <NuxtImg
        src="/images/landing/home/partners/innodatatics.webp"
        class="brand-banner-logo"
      />
    </div>
  </div>
</template>

<style scoped>
.hero {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .hero-body {
    @apply container mx-auto;
  }
}

.brand-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  @apply border-stone-200 p-6 bg-white;

  .brand-banner-copy {
    letter-spacing: 0.1rem;
    @apply text-sm text-stone-500 p-6;
  }

  .brand-banner-logos {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    @apply gap-14 p-6 md:grid-cols-3;

    .brand-banner-logo {
      object-fit: cover;
      @apply mx-auto md:max-w-52 md:max-h-10;
    }
  }
}
</style>
