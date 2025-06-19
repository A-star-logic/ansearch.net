<script setup>
import CtaAlt from './cta-alt.vue';
import Cta from './cta.vue';
import { Copy } from './ui/copy';
import { Section } from './ui/section';
</script>

<template>
  <Section>
    <Copy>
      <template #header-title>
        <h2>{{ $t('general.footer.marketing-banner.title') }}</h2>
      </template>
      <template #content>
        {{ $t('general.footer.marketing-banner.content') }}
      </template>
      <template #footer>
        <cta-alt />
        <cta />
      </template>
    </Copy>
  </Section>
  <div class="invert-rounded">
    <div class="invert-rounded-inner"></div>
  </div>
  <div class="footer-wrapper">
    <footer>
      <div class="brand">
        <div class="brand-title">
          <div class="brand-title-text">Ansearch</div>
          <div class="brand-title-subtext">An<em>[swer &]</em>Search</div>
        </div>
        <div class="brand-ethos">{{ $t('general.footer.ethos') }}</div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="column-title">
            {{ $t('general.footer.columns.product.title') }}
          </div>
          <NuxtLink :to="$localePath('index')" class="column-link">
            {{ $t('general.footer.columns.product.search') }}
          </NuxtLink>
          <NuxtLink :to="$localePath('index')" class="column-link">
            {{ $t('general.footer.columns.product.ask') }}
          </NuxtLink>
          <NuxtLink :to="$localePath('index')" class="column-link">
            {{ $t('general.footer.columns.product.reports') }}
          </NuxtLink>
          <NuxtLink :to="$localePath('index')" class="column-link">
            {{ $t('general.footer.columns.product.onboarding') }}
          </NuxtLink>
        </div>
        <!-- <div class="column">
          <div class="column-title">Solutions</div>
          <NuxtLink :to="$localePath('index')" class="column-link"
            >Sales</NuxtLink
          >
          <NuxtLink :to="$localePath('index')" class="column-link"
            >Support</NuxtLink
          >
          <NuxtLink :to="$localePath('index')" class="column-link"
            >HR</NuxtLink
          >
          <NuxtLink :to="$localePath('index')" class="column-link"
            >IT/Tech</NuxtLink
          >
        </div> -->
        <div class="column">
          <div class="column-title">
            {{ $t('general.footer.columns.company.title') }}
          </div>
          <NuxtLink :to="$localePath('index')" class="column-link">
            {{ $t('general.footer.columns.company.security') }}
          </NuxtLink>
          <NuxtLink :to="$localePath('support')" class="column-link">
            {{ $t('general.footer.columns.company.support') }}
          </NuxtLink>
        </div>
      </div>
    </footer>
    <a
      href="https://linkedin.com/company/ansearch"
      target="_blank"
      nofollow
      rel="noopener noreferrer"
      class="social"
    >
      <Icon name="bi:linkedin" class="social-icon" />
    </a>
    <div class="copyright">
      <div>Copyright © {{ new Date().getFullYear() }} - Ansearch</div>
      <span>
        {{ $t('general.footer.made-with') }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.footer-cta {
  display: flex;
  align-items: center;
  @apply gap-2 bg-white;

  .title {
    @apply text-stone-800 text-2xl;
  }
}

.invert-rounded {
  width: 100%;
  @apply bg-stone-700;

  .invert-rounded-inner {
    width: 100%;
    border-bottom-left-radius: 2.5rem;
    @apply bg-white h-12;
  }
}

.footer-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top-right-radius: 2.5rem;
  @apply bg-stone-700 text-white py-4;

  footer {
    display: flex;
    flex-direction: column;
    @apply container mx-auto py-2;

    .brand {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      top: -3.5rem;
      @apply gap-2;

      .brand-title {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1;
        border: 1px solid;
        @apply py-4 px-8 border-brand-200 rounded-lg bg-gradient-to-br from-brand-300 to-brand-700;

        .brand-title-text {
          font-family: 'Red Hat Display', sans-serif;
          font-size: 2rem;
          @apply text-white font-bold;
        }

        .brand-title-subtext {
          font-size: 0.875rem;
          @apply text-stone-200;

          em {
            font-style: normal;
            font-size: 0.75rem;
            @apply text-stone-200;
          }
        }
      }

      .brand-ethos {
        @apply text-stone-100;
      }
    }

    .columns {
      display: flex;
      justify-content: space-evenly;
      @apply gap-4;

      .social {
        @apply p-2 text-brand-300;

        .social-icon {
          @apply text-lg;
        }
      }

      .column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        @apply gap-2;

        .column-title {
          @apply font-semibold text-stone-100;
        }

        .column-link {
          @apply text-stone-300 text-sm;
        }
      }
    }
  }

  .copyright {
    display: flex;
    flex-direction: column;
    align-items: center;
    @apply text-sm text-stone-300;
  }
}
</style>
