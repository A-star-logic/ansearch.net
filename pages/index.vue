<script setup lang="ts">
import { UiButton } from '../components/ui/button';
import { Columns } from '../components/ui/columns';
import { Content } from '../components/ui/content';
import { Copy } from '../components/ui/copy';
</script>

<template>
  <Content>
    <Columns>
      <template #left>
        <Copy>
          <template #header-caption>
            <Icon name="heroicons:exclamation-triangle" />
            This is a caption
          </template>
          <template #header-title>{{ $t('welcome') }}</template>
          <template #content>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            id inventore cumque nostrum dignissimos optio aliquam similique.
            Ullam, quaerat, eos fuga magni recusandae reiciendis facilis
            cupiditate, voluptates odio ab temporibus.
          </template>
          <template #footer>
            <UiButton
              >Get Started<Icon name="heroicons:arrow-right"
            /></UiButton>
          </template>
        </Copy>
      </template>
      <template #right>
        <NuxtImg src="/images/landing/home/search.webp" />
      </template>
    </Columns>
    <Columns>
      <template #left>
        <Copy>
          <template #header-caption>
            <Icon name="heroicons:exclamation-triangle" />
            This is a caption
          </template>
          <template #header-title>{{ $t('welcome') }}</template>
          <template #content>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            id inventore cumque nostrum dignissimos optio aliquam similique.
            Ullam, quaerat, eos fuga magni recusandae reiciendis facilis
            cupiditate, voluptates odio ab temporibus.
          </template>
          <template #footer>
            <UiButton
              >Get Started<Icon name="heroicons:arrow-right"
            /></UiButton>
          </template>
        </Copy>
      </template>
      <template #right>
        <NuxtImg src="/images/landing/home/search.webp" />
      </template>
    </Columns>
  </Content>
</template>

<style scoped>
.title {
  @apply text-5xl font-bold;
}
</style>
