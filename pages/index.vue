<script setup lang="ts">
import { UiAccordion, UiAccordionItem } from '../components/ui/accordion';
import { UiButton } from '../components/ui/button';
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
            <h1>Connect all your tools, get answers</h1>
          </template>
          <template #content
            >Search, ask, create reports and work with all your data in a single
            place</template
          >
          <template #footer>
            <UiButton>
              Book a demo
              <Icon name="heroicons:arrow-right"
            /></UiButton>
          </template>
        </Copy>
      </template>
      <template #right>
        <NuxtImg src="/images/landing/home/hero.webp" />
      </template>
    </Columns>
  </Hero>
  <Content>
    <Columns>
      <template #left>
        <Copy>
          <template #header-caption>
            <Icon name="heroicons:exclamation-triangle" />
            This is a caption
          </template>
          <template #header-title>
            <h2>hello</h2>
          </template>
          <template #content>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            id inventore cumque nostrum dignissimos optio aliquam similique.
            Ullam, quaerat, eos fuga magni recusandae reiciendis facilis
            cupiditate, voluptates odio ab temporibus.
          </template>
          <template #footer>
            <UiButton>
              Book a demo
              <Icon name="heroicons:arrow-right"
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
          <template #header-title>
            <h2>hello</h2>
          </template>
          <template #content>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            id inventore cumque nostrum dignissimos optio aliquam similique.
            Ullam, quaerat, eos fuga magni recusandae reiciendis facilis
            cupiditate, voluptates odio ab temporibus.
          </template>
          <template #footer>
            <UiButton>
              Book a demo
              <Icon name="heroicons:arrow-right"
            /></UiButton>
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
            <Icon name="heroicons:exclamation-triangle" />
            This is a caption
          </template>
          <template #header-title>
            <h2>hello</h2>
          </template>
          <template #content>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            id inventore cumque nostrum dignissimos optio aliquam similique.
            Ullam, quaerat, eos fuga magni recusandae reiciendis facilis
            cupiditate, voluptates odio ab temporibus.
          </template>
          <template #footer>
            <UiButton>
              Book a demo
              <Icon name="heroicons:arrow-right"
            /></UiButton>
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
          <template #header-caption>Our commitment</template>
          <template #header-title>
            <h2>Maximum Security</h2>
          </template>
          <template #content>
            Your data is important and sensitive. We take it seriously and are
            taking a proactive approach to data security. We have been certified
            cyber essentials plus in the UK and are working towards ISO 27001
            compliance. Self-hosted option are available in the meantime.
            <br /><br />
            More importantly, we will NEVER sell your data, or use it to train
            AI without your consent.
          </template>
        </Copy>
      </template>
      <template #right>
        <div class="sec-grid">
          <div class="sec-grid-item">
            <Icon name="fa6-solid:lock" class="sec-grid-icon" />
            <div class="sec-grid-item-body">
              <h3>Secure encryption</h3>
              <p>
                Your data is encrypted using AES-256 encryption at rest and in
                transit.
              </p>
            </div>
          </div>
          <div class="sec-grid-item">
            <Icon name="solar:user-id-outline" class="sec-grid-icon" />
            <div class="sec-grid-item-body">
              <h3>Strict permission enforcement</h3>
              <p>
                We are using role-based access control to ensure that only you
                have access to your data, and no one else.
              </p>
            </div>
          </div>
          <div class="sec-grid-item">
            <Icon name="twemoji:flag-european-union" class="sec-grid-icon" />
            <div class="sec-grid-item-body">
              <h3>EU data residency</h3>
              <p>
                Your data stays in the EU, and is protected by the General Data
                Protection Regulation (GDPR).
              </p>
            </div>
          </div>
          <div class="sec-grid-item">
            <Icon name="charm:shield-tick" class="sec-grid-icon" />
            <div class="sec-grid-item-body">
              <h3>Trusted AI providers</h3>
              <p>
                We are using trusted AI providers that are transparent about
                their practices, and we choose to self-host our AI models
                whenever possible.
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
          <template #content>Can't find you answer here? We can help!</template>
          <template #footer>
            <UiButton>
              Book a demo
              <Icon name="heroicons:arrow-right"
            /></UiButton>
          </template>
        </Copy>
      </template>
      <template #right>
        <UiAccordion>
          <UiAccordionItem>
            <template #header>What is Ansearch?</template>
            <template #content>
              Ansearch is a search engine for your data. It allows you to
              search, ask, create reports and work with all your data in a
              single place.
            </template>
          </UiAccordionItem>
          <UiAccordionItem>
            <template #header>What is Ansearch?</template>
            <template #content>
              Ansearch is a search engine for your data. It allows you to
              search, ask, create reports and work with all your data in a
              single place.
            </template>
          </UiAccordionItem>
        </UiAccordion>
      </template>
    </Columns>
  </Content>
  <div class="pricing">
    <h2>Simple, transparent pricing</h2>
    <div class="pricing-hint">(Quick it's free while in beta!)</div>
    <div class="pricing-cards">
      <div class="card">
        <div class="card-header">
          <div class="card-header-top">
            <div class="card-header-title">Wee pot of honey</div>
            <div class="card-header-subtitle">For individuals</div>
          </div>
          <div class="card-header-price"><span>5€</span>/user/month</div>
        </div>
        <div class="card-content">
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>unlimited usage</div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>unlimited usage</div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>unlimited usage</div>
          </div>
        </div>
        <a
          href="https://cal.com/olivia-maraval-cal"
          rel="noopener noreferrer"
          target="_blank"
          class="card-footer"
        >
          Book a demo
        </a>
      </div>
      <div class="card card-pro">
        <div class="card-header">
          <div class="card-header-top">
            <div class="card-header-title">Bees</div>
            <div class="card-header-subtitle">For power users and teams</div>
          </div>
          <div class="card-header-price"><span>23€</span>/user/month</div>
        </div>
        <div class="card-content">
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>unlimited usage</div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>unlimited usage</div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>unlimited usage</div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>unlimited usage</div>
          </div>
        </div>
        <a
          href="https://cal.com/olivia-maraval-cal"
          rel="noopener noreferrer"
          target="_blank"
          class="card-footer"
        >
          Book a demo
        </a>
      </div>
      <div class="card">
        <div class="card-header">
          <div class="card-header-top">
            <div class="card-header-title">Hive</div>
            <div class="card-header-subtitle">For enterprise</div>
          </div>
          <div class="card-header-price"><span>Talk to us</span></div>
        </div>
        <div class="card-content">
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>unlimited usage</div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>unlimited usage</div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>unlimited usage</div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>unlimited usage</div>
          </div>
          <div class="card-content-item">
            <Icon name="heroicons:check" class="pricing-icon" />
            <div>unlimited usage</div>
          </div>
        </div>
        <a
          href="https://cal.com/olivia-maraval-cal"
          rel="noopener noreferrer"
          target="_blank"
          class="card-footer"
        >
          Book a demo
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
  @apply gap-4 py-6;

  .card {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    border: 2px solid;
    width: 35ch;
    @apply bg-white rounded-2xl my-5 p-8 gap-4 border-stone-200 shadow-lg;

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
