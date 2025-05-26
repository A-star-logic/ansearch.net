<script setup></script>

<template>
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
        <div class="brand-ethos">Work smarter, not harder</div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="column-title">Product</div>
          <div class="column-link">Features</div>
          <div class="column-link">Pricing</div>
          <div class="column-link">Product 3</div>
        </div>
        <div class="column">
          <div class="column-title">Company</div>
          <NuxtLink to="/blog" class="column-link">Blog</NuxtLink>
          <a
            href="https://linkedin.com/company/ansearch"
            target="_blank"
            nofollow
            rel="noopener noreferrer"
            class="column-link"
          >
            Contact
          </a>
          <a
            href="https://linkedin.com/company/ansearch"
            target="_blank"
            nofollow
            rel="noopener noreferrer"
            class="social"
          >
            <Icon name="bi:linkedin" class="social-icon" />
          </a>
        </div>
      </div>
    </footer>
    <div class="copyright">
      <div>Copyright © {{ new Date().getFullYear() }} - Ansearch</div>
      <span>
        Made with <Icon name="heroicons:heart" /> in Edinburgh, Montpellier &
        Chennai
      </span>
    </div>
  </div>
</template>

<style scoped>
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
