/* eslint-disable @eslint-community/eslint-comments/require-description -- this file is riddled with issues */
/* eslint-disable camelcase */

/*

TS check is disabled on this file, because it's a pain to debug nuxt
It works, that's enough.

*/

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// eslint-disable-next-line import-x/no-unresolved
import { defineNuxtPlugin } from '#app';
import { useRouter } from 'nuxt/app';
// eslint-disable-next-line import-x/no-named-as-default
import posthog from 'posthog-js';
import { nextTick } from 'vue';

// eslint-disable-next-line import-x/no-default-export, @typescript-eslint/no-unused-vars, @typescript-eslint/no-unsafe-call
export default defineNuxtPlugin((nuxtApp) => {
  const posthogClient = posthog.init(
    import.meta.dev
      ? 'phc_I57DxGhpqMIJXVzsBoGCwdnKtAcNwVq4e8tFBO7FTed'
      : 'phc_8X8sNhaIvulZisJBI6cmvPsX9Rvauvp8yDaFURijeK',
    {
      api_host: 'https://eu.i.posthog.com',
      capture_pageview: false, // we add manual pageview capturing below
      loaded: (_posthog) => {
        //posthog.debug();
      },
    },
  );

  // Make sure that pageviews are captured with each route change
  const router = useRouter();
  router.afterEach(async (to) => {
    await nextTick(() => {
      posthog.capture('$pageview', {
        current_url: to.fullPath,
      });
    });
  });

  /**
   * This event listener track when the user closes the tab, and send a pageLeave event
   * https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
   */
  globalThis.addEventListener('beforeunload', (_event) => {
    posthog.capture('$pageleave', {
      $current_url: `${globalThis.location.origin}${router.currentRoute.value.path}`,
    });
  });

  /**
   * This event listener track when the user is active on the page and when they are not.
   * On mobile, this is a better way to track when the user leaves
   */
  globalThis.addEventListener('visibilitychange', (_event) => {
    if (document.visibilityState === 'hidden') {
      posthog.capture('$pageleave', {
        $current_url: `${globalThis.location.origin}${router.currentRoute.value.path}`,
      });
    }
    if (document.visibilityState === 'visible') {
      posthog.capture('$pageview', {
        $current_url: `${globalThis.location.origin}${router.currentRoute.value.path}`,
      });
    }
  });

  return {
    provide: {
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      posthog: () => {
        return posthogClient;
      },
    },
  };
});

/* eslint-enable camelcase */
/* eslint-enable @eslint-community/eslint-comments/require-description -- this file is riddled with issues */
