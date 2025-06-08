<script setup>
import { Content } from '../components/ui/content';
</script>

<template>
  <Content>
    <h1>Support</h1>
    <p>
      The best way to reach us is at
      <a href="mailto:contact@ansearch.net" class="mail"
        >contact@ansearch.net</a
      >
      We are only three people, so bear with us, we'll reply as soon as we can.
    </p>
    <p>If you would rather speak to us, you can book a call:</p>
    <div class="cards">
      <div class="card">
        <NuxtImg src="/images/support/mael.webp" alt="Mael" class="card-img" />
        <h2>Mael</h2>
        <h3>CEO / Technical</h3>
        <div class="card-content">
          <span>Can help and answer questions with:</span>
          <ul>
            <li>Onboarding</li>
            <li>Technical issues</li>
            <li>AI</li>
            <li>Security</li>
            <li>Enterprise deployment</li>
          </ul>
          <span>
            I will be more than happy to have a chat, but my time is precious.
            Book a slot with me only if your question could not be answered by
            email or by Olivia.
          </span>
        </div>
        <a
          nofollow
          href="https://cal.com/mael-abgrall"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call
        </a>
      </div>
      <div class="card">
        <NuxtImg
          src="/images/support/olivia.webp"
          alt="Olivia"
          class="card-img"
        />
        <h2>Olivia</h2>
        <h3>CSMO / Not technical</h3>
        <div class="card-content">
          <span>Can help and answer questions with:</span>
          <ul>
            <li>General questions</li>
            <li>Sales</li>
            <li>Everything else</li>
          </ul>
        </div>
        <a
          nofollow
          href="https://cal.com/olivia-maraval-cal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a call
        </a>
      </div>
      <div class="card">
        <NuxtImg
          src="/images/support/rohith.webp"
          alt="Rohith"
          class="card-img"
        />
        <h2>Rohith</h2>
        <h3>CTO / Technical</h3>
        <div class="card-content">
          <span
            >You cannot book me, but now you know the third co-founder :)</span
          >
        </div>
      </div>
    </div>
  </Content>
</template>

<style scoped>
.cards {
  display: flex;
  @apply gap-4;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35ch;
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
