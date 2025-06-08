<script setup lang="ts">
import Cta from '../components/cta.vue';
import { UiAccordion, UiAccordionItem } from '../components/ui/accordion';
import { Columns } from '../components/ui/columns';
import { Content } from '../components/ui/content';
import { Copy } from '../components/ui/copy';
import { Hero } from '../components/ui/hero';
import { Section } from '../components/ui/section';
</script>

<template>
  <Hero>
    <Columns rightFirstOnMobile>
      <template #left>
        <Copy>
          <template #header-title>
            <h1>{{ $t('pages.index.title') }}</h1>
          </template>
          <template #content>{{ $t('pages.index.content') }}</template>
          <template #footer>
            <Cta />
          </template>
        </Copy>
      </template>
      <template #right>
        <NuxtImg src="/images/landing/home/hero.webp" />
      </template>
    </Columns>
  </Hero>
  <Content>
    <h2>{{ $t('pages.index.features.title') }}</h2>
    <Columns>
      <template #left>
        <Copy>
          <template #header-caption>
            <Icon name="fa6-solid:magnifying-glass" />
            {{ $t('pages.index.features.search.caption') }}
          </template>
          <template #header-title>
            <h2>{{ $t('pages.index.features.search.title') }}</h2>
          </template>
          <template #content>
            {{ $t('pages.index.features.search.content') }}
          </template>
          <template #footer>
            <Cta />
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
            <Icon name="streamline:decent-work-and-economic-growth-solid" />
            {{ $t('pages.index.features.ask.caption') }}
          </template>
          <template #header-title>
            <h2>{{ $t('pages.index.features.ask.title') }}</h2>
          </template>
          <template #content>
            {{ $t('pages.index.features.ask.content') }}
          </template>
          <template #footer>
            <Cta />
          </template>
        </Copy>
      </template>
      <template #right>
        <NuxtImg src="/images/landing/home/ask.webp" />
      </template>
    </Columns>
    <Columns>
      <template #left>
        <Copy>
          <template #header-caption>
            <Icon name="fluent:folder-48-filled" />
            {{ $t('pages.index.features.onboarding.caption') }}
          </template>
          <template #header-title>
            <h2>{{ $t('pages.index.features.onboarding.title') }}</h2>
          </template>
          <template #content>
            {{ $t('pages.index.features.onboarding.content') }}
          </template>
          <template #footer>
            <Cta />
          </template>
        </Copy>
      </template>
      <template #right>
        <NuxtImg src="/images/landing/home/onboarding.webp" />
      </template>
    </Columns>
  </Content>
  <Section>
    <Columns rightFirstOnMobile>
      <template #left>
        <Copy color="blue">
          <template #header-caption>{{
            $t('pages.index.security.caption')
          }}</template>
          <template #header-title>
            <h2>{{ $t('pages.index.security.title') }}</h2>
          </template>
          <template #content>
            {{ $t('pages.index.security.content') }}
          </template>
        </Copy>
      </template>
      <template #right>
        <div class="sec-grid">
          <div class="sec-grid-item">
            <Icon name="fa6-solid:lock" class="sec-grid-icon" />
            <div class="sec-grid-item-body">
              <h3>
                {{
                  $t(
                    'pages.index.security.security-features.secure-encryption.title',
                  )
                }}
              </h3>
              <p>
                {{
                  $t(
                    'pages.index.security.security-features.secure-encryption.content',
                  )
                }}
              </p>
            </div>
          </div>
          <div class="sec-grid-item">
            <Icon name="solar:user-id-outline" class="sec-grid-icon" />
            <div class="sec-grid-item-body">
              <h3>
                {{
                  $t(
                    'pages.index.security.security-features.strict-permission-enforcement.title',
                  )
                }}
              </h3>
              <p>
                {{
                  $t(
                    'pages.index.security.security-features.strict-permission-enforcement.content',
                  )
                }}
              </p>
            </div>
          </div>
          <div class="sec-grid-item">
            <Icon name="twemoji:flag-european-union" class="sec-grid-icon" />
            <div class="sec-grid-item-body">
              <h3>
                {{
                  $t(
                    'pages.index.security.security-features.eu-data-residency.title',
                  )
                }}
              </h3>
              <p>
                {{
                  $t(
                    'pages.index.security.security-features.eu-data-residency.content',
                  )
                }}
              </p>
            </div>
          </div>
          <div class="sec-grid-item">
            <Icon name="charm:shield-tick" class="sec-grid-icon" />
            <div class="sec-grid-item-body">
              <h3>
                {{
                  $t(
                    'pages.index.security.security-features.trusted-ai-providers.title',
                  )
                }}
              </h3>
              <p>
                {{
                  $t(
                    'pages.index.security.security-features.trusted-ai-providers.content',
                  )
                }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </Columns>
  </Section>
  <Content>
    <h2 class="mobile">FAQ</h2>
    <Columns>
      <template #left>
        <Copy>
          <template #header-title>
            <h2 class="desktop">FAQ</h2>
          </template>
          <template #content>
            {{ $t('pages.index.faq.description') }}
          </template>
          <template #footer>
            <Cta />
          </template>
        </Copy>
      </template>
      <template #right>
        <UiAccordion>
          <UiAccordionItem>
            <template #header>{{
              $t('pages.index.faq.items.data-location.question')
            }}</template>
            <template #content>
              {{ $t('pages.index.faq.items.data-location.answer') }}
            </template>
          </UiAccordionItem>
          <UiAccordionItem>
            <template #header>{{
              $t('pages.index.faq.items.data-training.question')
            }}</template>
            <template #content>
              {{ $t('pages.index.faq.items.data-training.answer0') }}
              <br />
              {{ $t('pages.index.faq.items.data-training.answer1') }}
            </template>
          </UiAccordionItem>
          <UiAccordionItem>
            <template #header>{{
              $t('pages.index.faq.items.AI-providers.question')
            }}</template>
            <template #content>
              {{ $t('pages.index.faq.items.AI-providers.answer') }}
            </template>
          </UiAccordionItem>
        </UiAccordion>
      </template>
    </Columns>
  </Content>
  <div class="pricing">
    <h2>{{ $t('pages.index.pricing.title') }}</h2>
    <div class="pricing-hint">{{ $t('pages.index.pricing.hint') }}</div>
    <div class="pricing-cards">
      <div class="card">
        <div class="card-header">
          <div class="card-header-top">
            <div class="card-header-title">
              {{ $t('pages.index.pricing.cards.honey.title') }}
            </div>
            <div class="card-header-subtitle">
              {{ $t('pages.index.pricing.cards.honey.subtitle') }}
            </div>
          </div>
          <div class="card-header-price">
            <span>{{ $t('pages.index.pricing.cards.honey.price') }}</span>
            {{ $t('pages.index.pricing.cards.honey.price-detail') }}
          </div>
        </div>
        <div class="card-content">
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>
              {{ $t('pages.index.pricing.cards.honey.features.search') }}
            </div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>
              {{ $t('pages.index.pricing.cards.honey.features.connections') }}
            </div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>
              {{ $t('pages.index.pricing.cards.honey.features.ask') }}
            </div>
          </div>
        </div>
        <a
          href="https://cal.com/olivia-maraval-cal"
          rel="noopener noreferrer"
          target="_blank"
          class="card-footer"
        >
          {{ $t('general.cta') }}
        </a>
      </div>
      <div class="card card-pro">
        <div class="card-header">
          <div class="card-header-top">
            <div class="card-header-title">
              {{ $t('pages.index.pricing.cards.bees.title') }}
            </div>
            <div class="card-header-subtitle">
              {{ $t('pages.index.pricing.cards.bees.subtitle') }}
            </div>
          </div>
          <div class="card-header-price">
            <span>{{ $t('pages.index.pricing.cards.bees.price') }}</span>
            {{ $t('pages.index.pricing.cards.bees.price-detail') }}
          </div>
        </div>
        <div class="card-content">
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>
              {{ $t('pages.index.pricing.cards.bees.features.search') }}
            </div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>
              {{ $t('pages.index.pricing.cards.bees.features.connections') }}
            </div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>{{ $t('pages.index.pricing.cards.bees.features.ask') }}</div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>
              {{ $t('pages.index.pricing.cards.bees.features.onboarding') }}
            </div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>
              {{ $t('pages.index.pricing.cards.bees.features.agent') }}
            </div>
          </div>
        </div>
        <a
          href="https://cal.com/olivia-maraval-cal"
          rel="noopener noreferrer"
          target="_blank"
          class="card-footer"
        >
          {{ $t('general.cta') }}
        </a>
      </div>
      <div class="card">
        <div class="card-header">
          <div class="card-header-top">
            <div class="card-header-title">
              {{ $t('pages.index.pricing.cards.hive.title') }}
            </div>
            <div class="card-header-subtitle">
              {{ $t('pages.index.pricing.cards.hive.subtitle') }}
            </div>
          </div>
          <div class="card-header-price">
            <span>{{ $t('pages.index.pricing.cards.hive.price') }}</span>
          </div>
        </div>
        <div class="card-content">
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>
              {{ $t('pages.index.pricing.cards.hive.features.search') }}
            </div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>
              {{ $t('pages.index.pricing.cards.hive.features.connections') }}
            </div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>{{ $t('pages.index.pricing.cards.hive.features.ask') }}</div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>
              {{ $t('pages.index.pricing.cards.hive.features.onboarding') }}
            </div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>{{ $t('pages.index.pricing.cards.hive.features.agent') }}</div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>
              {{ $t('pages.index.pricing.cards.hive.features.analytics') }}
            </div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>{{ $t('pages.index.pricing.cards.hive.features.sso') }}</div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>{{ $t('pages.index.pricing.cards.hive.features.iso') }}</div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>
              {{ $t('pages.index.pricing.cards.hive.features.roadmap') }}
            </div>
          </div>
        </div>
        <a
          href="https://cal.com/olivia-maraval-cal"
          rel="noopener noreferrer"
          target="_blank"
          class="card-footer"
        >
          {{ $t('general.cta') }}
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sec-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @apply gap-8 md:p-8;
  .sec-grid-item {
    display: flex;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    @apply gap-2 lg:flex-nowrap;
  }

  .sec-grid-icon {
    flex-shrink: 0;
    @apply size-8 text-cyan-500;
  }

  .sec-grid-item-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h3 {
      @apply text-lg;
    }

    p {
      @apply text-sm text-stone-500;
    }
  }
}

h2 {
  font-weight: 700;
  @apply text-4xl text-stone-600;
}

.pricing {
  display: flex;
  flex-direction: column;
  align-items: center;
  @apply gap-2 bg-stone-50 p-8;

  .pricing-hint {
    @apply text-stone-500 text-sm;
  }
}

.pricing-cards {
  display: flex;
  flex-wrap: wrap;
  @apply gap-4 py-6;

  .card {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    border: 2px solid;
    width: 100%;
    @apply bg-white rounded-2xl my-5 p-8 gap-4 border-stone-200 shadow-lg md:w-[35ch];

    .card-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      @apply gap-6;

      .card-header-top {
        display: flex;
        flex-direction: column;
        align-items: center;

        .card-header-title {
          text-wrap: nowrap;
          font-weight: 700;
          @apply text-2xl;
        }

        .card-header-subtitle {
          @apply text-stone-500 text-base;
        }
      }

      .card-header-price {
        display: flex;
        align-items: baseline;
        @apply text-stone-500 text-sm gap-1;

        span {
          font-weight: 700;
          @apply text-2xl text-stone-950;
        }
      }
    }

    .card-content {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: flex-start;
      @apply gap-1;

      .card-content-item {
        display: flex;
        align-items: center;
        @apply gap-1 text-lg text-stone-500;

        .pricing-icon {
          @apply w-5 h-5 text-brand-500;
        }
      }
    }

    .card-footer {
      display: flex;
      justify-content: center;
      width: 100%;
      font-weight: 700;
      @apply bg-[#ffd78f] text-brand-600 p-4 rounded-2xl;
    }
  }

  .card-pro {
    @apply border-brand-200 my-0 bg-brand-50 p-10;

    .card-footer {
      @apply bg-brand-500 text-white;
    }
  }
}
</style>
