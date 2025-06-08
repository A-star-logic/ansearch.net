<script setup>
import { UiButton } from './ui/button';
</script>

<template>
  <a
    nofollow
    href="https://cal.com/olivia-maraval-cal"
    target="_blank"
    rel="noopener noreferrer"
  >
    <UiButton>
      {{ $t('general.cta') }}
      <Icon name="heroicons:arrow-right" />
    </UiButton>
  </a>
</template>
