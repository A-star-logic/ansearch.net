<script setup lang="ts">
import { setPageLayout } from 'nuxt/app';
setPageLayout('empty');
</script>

<template>
  <div class="content">
    <div class="content-overlay">
      <div class="brand">
        <div class="brand-logo">
          <NuxtImg src="/images/logo-100x100.webp" width="30" height="30" />
          <div class="brand-logo-title">
            <h2>Ansearch</h2>
            <div>An<span>[swer &]</span> Search</div>
          </div>
        </div>
        <h1>Get knowledge superpowers</h1>
      </div>
      <div class="sub-title">
        <p>
          Connect all your pro apps (GMail, Drive, Hubspot, etc.) to search and
          ask from a single place.
        </p>
        <p>A "Google and ChatGPT" just for your business.</p>
      </div>
      <div class="actions">
        <NuxtLink to="/">
          Website
          <Icon name="fa6-solid:arrow-right" />
        </NuxtLink>
        <a
          href="https://cal.com/olivia-maraval-cal"
          rel="noopener noreferrer"
          target="_blank"
        >
          Book a call
          <Icon name="fa6-solid:arrow-up-right-from-square" />
        </a>
        <p>From 5€ per month</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/links/mobile_banner.webp');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: brightness(0.45);
}

.content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @apply text-center bg-brand-700;

  .content-overlay {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @apply gap-8;

    .brand {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      @apply gap-2;

      .brand-logo {
        display: flex;
        align-items: center;
        @apply gap-2;

        .brand-logo-title {
          display: flex;
          align-items: flex-start;
          flex-direction: column;

          div {
            @apply text-stone-300 text-sm;

            span {
              font-style: italic;
              @apply text-[0.7rem];
            }
          }
        }
      }
    }

    .actions {
      display: flex;
      flex-direction: column;
      align-items: center;
      @apply gap-4;
    }
  }
}

h1 {
  font-weight: 700;
  @apply text-white text-4xl;
}

p {
  max-width: 30ch;
  @apply text-stone-100 text-lg;
}

h2 {
  @apply text-white text-xl;
  line-height: 1;
}
a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15ch;
  @apply bg-stone-50 px-4 py-2 rounded-xl gap-4 text-lg;
}
</style>
