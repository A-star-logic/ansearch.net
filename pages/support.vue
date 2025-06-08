<script setup>
import { Content } from '../components/ui/content';
</script>

<template>
  <Content>
    <h1>Support</h1>
    <p>
      {{ $t('pages.support.subtitle0') }}
      <a href="mailto:contact@ansearch.net" class="mail"
        >contact@ansearch.net</a
      >
      {{ $t('pages.support.subtitle1') }}
    </p>
    <p>{{ $t('pages.support.alternative-option') }}</p>
    <div class="cards">
      <div class="card">
        <NuxtImg src="/images/support/mael.webp" alt="Mael" class="card-img" />
        <h2>{{ $t('pages.support.people.mael.name') }}</h2>
        <h3>{{ $t('pages.support.people.mael.title') }}</h3>
        <div class="card-content">
          <span>{{ $t('pages.support.people.mael.description') }}</span>
          <ul>
            <li>
              {{ $t('pages.support.people.mael.list.0') }}
            </li>
            <li>
              {{ $t('pages.support.people.mael.list.1') }}
            </li>
            <li>
              {{ $t('pages.support.people.mael.list.2') }}
            </li>
            <li>
              {{ $t('pages.support.people.mael.list.3') }}
            </li>
          </ul>
          <span>
            {{ $t('pages.support.people.mael.second-description') }}
          </span>
        </div>
        <a
          nofollow
          href="https://cal.com/mael-abgrall"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t('pages.support.people-action') }}
        </a>
      </div>
      <div class="card">
        <NuxtImg
          src="/images/support/olivia.webp"
          alt="Olivia"
          class="card-img"
        />
        <h2>{{ $t('pages.support.people.olivia.name') }}</h2>
        <h3>{{ $t('pages.support.people.olivia.title') }}</h3>
        <div class="card-content">
          <span>{{ $t('pages.support.people.olivia.description') }}</span>
          <ul>
            <li>{{ $t('pages.support.people.olivia.list.0') }}</li>
            <li>{{ $t('pages.support.people.olivia.list.1') }}</li>
            <li>{{ $t('pages.support.people.olivia.list.2') }}</li>
            <li>{{ $t('pages.support.people.olivia.list.3') }}</li>
          </ul>
        </div>
        <a
          nofollow
          href="https://cal.com/olivia-maraval-cal"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t('pages.support.people-action') }}
        </a>
      </div>
      <div class="card">
        <NuxtImg
          src="/images/support/rohith.webp"
          alt="Rohith"
          class="card-img"
        />
        <h2>{{ $t('pages.support.people.rohith.name') }}</h2>
        <h3>{{ $t('pages.support.people.rohith.title') }}</h3>
        <div class="card-content">
          <span>{{ $t('pages.support.people.rohith.description') }}</span>
        </div>
      </div>
    </div>
  </Content>
</template>

<style scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  @apply gap-4;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30ch;
  border: 2px solid;
  @apply gap-4 bg-white p-4 rounded-2xl border-stone-200;

  .card-content {
    width: 100%;
    flex: 1;
    ul {
      width: 100%;
      @apply list-disc list-inside;
    }
  }

  span {
    font-style: italic;
    @apply text-stone-500 text-sm;
  }

  a {
    text-align: center;
    width: 100%;
    @apply text-white bg-brand-500 p-2 rounded-2xl;

    &:hover {
      @apply bg-brand-600;
    }
  }
}

.card-img {
  @apply rounded-full h-24 w-24 bg-stone-400;
}

.mail {
  @apply text-brand-500;

  &:hover {
    @apply text-brand-600;
  }
}

h1 {
  font-weight: 700;
  @apply text-4xl text-brand-500;
}
</style>
