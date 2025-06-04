<script setup lang="ts">
import { ref } from 'vue';
import LangSwitcher from '../language-switcher.vue';
import { UiButton } from '../ui/button';
import BrandLink from './brand.vue';

const mobileMenuOpen = ref(false);
</script>

<template>
  <div class="nav-wrapper">
    <nav>
      <BrandLink />
      <div class="desktop menu">
        <div class="nav-links">
          <a href="#" class="nav-link">Home</a>
          <a href="#" class="nav-link">About</a>
          <a href="#" class="nav-link">Contact</a>
        </div>
        <div class="actions">
          <LangSwitcher />
          <UiButton variant="ghost">Login</UiButton>
          <UiButton variant="primary">Get Started</UiButton>
        </div>
      </div>
      <div class="mobile mobile-actions">
        <LangSwitcher />
        <button @click="mobileMenuOpen = !mobileMenuOpen">
          <UiButton variant="outline" size="icon">
            <Icon name="iconamoon:menu-burger-horizontal-bold" />
          </UiButton>
        </button>
      </div>
    </nav>
  </div>
  <div v-if="mobileMenuOpen" class="mobile-menu">
    <div class="mobile-menu-links">
      <a href="#" class="nav-link">Home</a>
      <a href="#" class="nav-link">About</a>
      <a href="#" class="nav-link">Contact</a>
    </div>
    <div class="mobile-menu-actions">
      <div class="desktop">
        <LangSwitcher />
      </div>
      <UiButton variant="ghost">Login</UiButton>
      <UiButton variant="primary">Get Started</UiButton>
    </div>
  </div>
  <div
    v-if="mobileMenuOpen"
    class="mobile-menu-overlay"
    @click="mobileMenuOpen = false"
  ></div>
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
  @apply bg-white/70 border-stone-200 rounded-b-2xl md:rounded-b-[2.5rem] px-2;

  nav {
    display: flex;
    justify-content: space-between;
    @apply container mx-auto py-2;
  }
}

.menu {
  justify-content: space-between;
  width: 100%;
  flex: 1 1 0;
  @apply md:flex px-2;
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

.actions {
  display: flex;
  align-items: center;
  @apply gap-2;
}

.mobile-actions {
  align-items: center;
  @apply gap-2;
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  @apply bg-white border-stone-400 rounded-xl p-4 m-1 sm:m-2;

  .mobile-menu-links {
    display: flex;
    flex-direction: column;
    @apply gap-2;
  }

  .mobile-menu-actions {
    display: flex;
    flex-direction: column;
    @apply gap-2;
  }
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  backdrop-filter: blur(2px);
  @apply bg-stone-200/40;
}
</style>
