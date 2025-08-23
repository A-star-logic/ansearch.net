<script setup lang="ts">
import { CardClickable } from '../../components/ui/card';
import Content from '../../components/ui/content/content.vue';
</script>

<template>
  <Content>
    <h1>Policies</h1>
    <div class="link-grid">
      <NuxtLink :to="'/policies/privacy'">
        <CardClickable icon="iconoir:privacy-policy">
          <h2>Privacy policy</h2>
          <p>How we collect and handle your data.</p>
        </CardClickable>
      </NuxtLink>
      <NuxtLink :to="'policies/terms'">
        <CardClickable icon="hugeicons:agreement-02">
          <h2>Terms of use</h2>
          <p>The conditions of our services and our commitment to you.</p>
        </CardClickable>
      </NuxtLink>
      <NuxtLink :to="'policies/subprocessors'">
        <CardClickable icon="solar:diploma-verified-outline">
          <h2>Subprocessors</h2>
          <p>The partners that help us deliver our service.</p>
        </CardClickable>
      </NuxtLink>
      <NuxtLink :to="'policies/security'">
        <CardClickable icon="material-symbols:shield-lock-rounded">
          <h2>Security overview</h2>
          <p>The security measure we take to protect your data.</p>
        </CardClickable>
      </NuxtLink>
    </div>
  </Content>
</template>

<style scoped>
.link-grid {
  display: flex;
  flex-direction: column;
  @apply gap-8 md:grid md:grid-cols-2;
}
</style>
