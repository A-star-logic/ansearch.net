<template>
  <div class="dropdown-container" ref="dropdownContainerReference">
    <div
      @click="toggleDropdown"
      ref="triggerWrapperReference"
      class="trigger-wrapper"
    >
      <slot name="trigger"></slot>
    </div>

    <div
      v-if="isOpen"
      ref="contentAreaReference"
      class="content-area"
      :style="contentStyle"
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';

const isOpen = ref(false);
const dropdownContainerReference = ref<HTMLElement | undefined>(undefined);
const triggerWrapperReference = ref<HTMLElement | undefined>(undefined);
const contentAreaReference = ref<HTMLElement | undefined>(undefined);

const contentDynamicStyle = ref({
  left: '0px',
  minWidth: 'auto',
  top: '100%', // Default: directly below the trigger
});

const contentStyle = computed(() => {
  return {
    left: contentDynamicStyle.value.left,
    minWidth: contentDynamicStyle.value.minWidth,
    top: contentDynamicStyle.value.top,
  };
});

/**
 * Closes the dropdown.
 */
function closeDropdown(): void {
  isOpen.value = false;
}

/**
 * Handles click events outside the dropdown to close it.
 * @param event The mouse event.
 */
function handleClickOutside(event: MouseEvent): void {
  if (!isOpen.value) return;

  const target = event.target as Node;

  // Check if the click is outside the dropdown container
  if (
    dropdownContainerReference.value &&
    !dropdownContainerReference.value.contains(target) &&
    contentAreaReference.value && // Also ensure content area exists
    !contentAreaReference.value.contains(target) // And click is not inside content
  ) {
    closeDropdown();
  }
}

/**
 * Opens the dropdown and updates its content position.
 */
function openDropdown(): void {
  isOpen.value = true;
  void nextTick(() => {
    updateContentPosition();
  });
}

/**
 * Toggles the dropdown's visibility.
 */
function toggleDropdown(): void {
  if (isOpen.value) {
    closeDropdown();
  } else {
    openDropdown();
  }
}

/**
 * Calculates and updates the position of the dropdown content area.
 * It tries to position the content below the trigger, adjusting if it
 * would overflow the viewport.
 */
function updateContentPosition(): void {
  if (!isOpen.value || !triggerWrapperReference.value) {
    return;
  }

  // Ensure this runs only on the client where window is available
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, sonarjs/different-types-comparison -- later
  if (globalThis.window === undefined) return;

  void nextTick(() => {
    if (!triggerWrapperReference.value || !contentAreaReference.value) return;

    const triggerRect = triggerWrapperReference.value.getBoundingClientRect();
    const contentRect = contentAreaReference.value.getBoundingClientRect();

    let topPos = triggerWrapperReference.value.offsetHeight;
    let leftPos = 0;

    // Viewport adjustment: if content would go off bottom, try to position above
    if (
      triggerRect.bottom + contentRect.height > globalThis.innerHeight &&
      triggerRect.top - contentRect.height > 0
    ) {
      topPos = -contentRect.height;
    }

    // Viewport adjustment: if content would go off right
    if (triggerRect.left + contentRect.width > globalThis.innerWidth) {
      // Try aligning content's right edge with trigger's right edge
      const potentialLeft =
        triggerWrapperReference.value.offsetWidth - contentRect.width;
      // Ensure this new left doesn't push it off the left side of the screen
      if (triggerRect.left + potentialLeft >= 0) {
        leftPos = potentialLeft;
      }
      // Further adjustments could be made here if it's still off-screen
    }

    contentDynamicStyle.value = {
      left: `${leftPos}px`,
      minWidth: `${triggerWrapperReference.value.offsetWidth}px`,
      top: `${topPos}px`,
    };
  });
}

onBeforeUnmount(() => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, sonarjs/different-types-comparison -- later
  if (globalThis.document !== undefined) {
    globalThis.document.removeEventListener('click', handleClickOutside, true);
  }
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, sonarjs/different-types-comparison -- later
  if (globalThis.window !== undefined) {
    globalThis.window.removeEventListener('resize', updateContentPosition);
  }
});

onMounted(() => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, sonarjs/different-types-comparison -- later
  if (globalThis.document !== undefined) {
    globalThis.document.addEventListener('click', handleClickOutside, true);
  }
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, sonarjs/different-types-comparison -- later
  if (globalThis.window !== undefined) {
    globalThis.window.addEventListener('resize', updateContentPosition);
    if (isOpen.value) {
      updateContentPosition();
    }
  }
});
</script>

<style scoped>
.dropdown-container {
  position: relative;
  display: inline-block;
}

.trigger-wrapper {
  cursor: pointer;
  display: inline-block; /* Ensures dimensions are calculable */
}

.content-area {
  position: absolute;
  z-index: 50; /* Ensure content is above other elements */
  border: 1px solid; /* Sets border width and style */
  /* Tailwind classes for bg, shadow, rounded, border color, padding */
  @apply bg-white shadow-xl rounded border-stone-300 p-2;
}
</style>
