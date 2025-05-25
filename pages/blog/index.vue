<script setup lang="ts">
import { useAsyncData, useSeoMeta } from '#app';

const { data: home } = await useAsyncData(() => {
  return queryCollection('content').path('/').first();
});

useSeoMeta({
  description: home.value?.description,
  title: home.value?.title,
});
</script>

<template>
  <ContentRenderer v-if="home" :value="home" />
  <div v-else>Home not found</div>
</template>
