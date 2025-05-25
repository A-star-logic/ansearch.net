<script setup>
import { ref, useI18n, useSwitchLocalePath, watch } from '#imports';

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const showLocaleList = ref(false);
</script>

<template>
  <!-- <div class="lang-switcher">
    <button class="current-language" @click="showLocaleList = !showLocaleList">
      <Icon name="material-symbols:translate-rounded" style="color: black" />
      {{ locale.toUpperCase() }}
    </button>
    <div class="locale-list" v-if="showLocaleList">
      <NuxtLink
        v-for="locale in locales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="locale"
      >
        {{ locale.name }}
      </NuxtLink>
    </div>
    <div
      class="backdrop"
      v-if="showLocaleList"
      @click="showLocaleList = false"
    ></div>
  </div> -->
</template>

<style scoped>
.lang-switcher {
  position: relative;
}

.locale-list {
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  @apply bg-white rounded-lg shadow-lg;

  .locale {
    width: 100%;
    @apply p-2;

    &:hover {
      cursor: pointer;
    }
  }
}

.current-language {
  cursor: pointer;
  letter-spacing: 1px;
}

.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  @apply bg-black/10;
}
</style>
