<script setup>
import { LangSwitcher } from '../lang-switcher';
import { UiButton } from '../ui/button';
import BrandLink from './brand.vue';
</script>

<template>
  <div class="nav-wrapper">
    <nav>
      <BrandLink />
      <div class="nav-links">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Contact</a>
      </div>
      <div class="right">
        <LangSwitcher />
        <UiButton variant="ghost">Login</UiButton>
        <UiButton variant="primary">Get Started</UiButton>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.nav-wrapper {
  width: 100%;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid;
  border-left: 1px solid;
  border-right: 1px solid;
  border-bottom-left-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
  @apply bg-white/70 border-stone-200;

  nav {
    display: flex;
    justify-content: space-between;
    @apply container mx-auto py-2;
  }
}

.nav-links {
  display: flex;
  align-items: center;
  @apply gap-2;

  .nav-link {
    @apply p-4;

    &:hover {
      @apply text-brand-500;
    }
  }
}

.right {
  display: flex;
  align-items: center;
  @apply gap-2;
}
</style>
