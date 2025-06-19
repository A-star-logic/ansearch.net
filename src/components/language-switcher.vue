<script setup lang="ts">
// eslint-disable-next-line import-x/no-unresolved -- later
import { useI18n, useSwitchLocalePath } from '#imports';
import UiButton from './ui/button/ui-button.vue';
import { UiDropdown } from './ui/dropdown';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call -- later
const { locale: currentLocale, locales } = useI18n();
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call -- later
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <UiDropdown :menu-title="currentLocale">
    <template #trigger>
      <UiButton variant="ghost" size="">
        <Icon
          name="twemoji:flag-united-kingdom"
          v-if="currentLocale === 'en'"
          class="flag"
        />
        <Icon
          name="twemoji:flag-france"
          v-else-if="currentLocale === 'fr'"
          class="flag"
        />
        <Icon name="heroicons:chevron-down" />
      </UiButton>
    </template>

    <template #content>
      <div class="locales">
        <NuxtLink
          v-for="locale in locales"
          :key="locale.code"
          :to="switchLocalePath(locale.code)"
          class="locale"
        >
          <template v-if="locale.code === 'en'">
            <Icon name="twemoji:flag-united-kingdom" class="flag" />
            Rosbif
          </template>
          <template v-else-if="locale.code === 'fr'">
            <Icon name="twemoji:flag-france" class="flag" />
            Frogs
          </template>
        </NuxtLink>
      </div>
    </template>
  </UiDropdown>
</template>

<style scoped>
.locales {
  display: flex;
  flex-direction: column;

  .locale {
    display: flex;
    align-items: center;
    @apply p-2 rounded gap-2;

    &:hover {
      @apply bg-stone-200;
    }
  }
}

.flag {
  @apply w-5 h-5;
}
</style>
