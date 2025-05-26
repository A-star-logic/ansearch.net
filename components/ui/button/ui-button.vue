<template>
  <div
    class="button"
    :class="[
      `variant-${variant}`,
      size ? `size-${size}` : 'size-default',
      disabled ? 'disabled' : '',
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const {
  disabled = false,
  size = 'default',
  variant = 'primary',
} = defineProps<{
  /** Whether the button is disabled (default: false). */
  disabled?: boolean;
  /**
   * The size of the button
   * - `icon` for a button with only an icon
   * - `icon-rounded` to use exclusively with "send" buttons
   * - `lg` for a large button
   * - `sm` for a small button
   * - `xs` for a very small button
   * - `max` for a button that takes the full width of the container
   */
  size?: 'icon' | 'icon-rounded' | 'lg' | 'max' | 'sm' | 'xs';
  /**
   *
   * The visual style variant of the button
   * - `primary` (default) for call to actions, and important actions
   * - `secondary` for secondary actions, less prominent but
   * - `destructive` for destructive actions
   * - `ghost` for a very subtle button with no background, react to hover
   * - `link` for a link with an underline
   * - `outline` for not important actions, or backtracking
   */
  variant?:
    | 'destructive'
    | 'ghost'
    | 'link'
    | 'outline'
    | 'primary'
    | 'secondary';
}>();
</script>

<style scoped>
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  font-weight: 500;
  cursor: pointer;
  @apply rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-950 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0;

  &.disabled {
    cursor: not-allowed;
  }

  &.variant-primary {
    border: 1px solid;
    @apply bg-brand-500 text-brand-50 shadow border-brand-500;

    &:hover {
      @apply bg-brand-600 border-brand-600;
    }

    &.disabled {
      @apply bg-stone-300 border-stone-300 text-stone-500;
    }
  }

  &.variant-secondary {
    border: 1px solid;
    background-color: transparent;
    @apply text-brand-900 border-brand-300 shadow bg-white;

    &:hover {
      @apply bg-brand-100 text-brand-900 border-brand-400;
    }

    &.disabled {
      @apply bg-stone-100 border-stone-300 text-stone-500;
    }
  }

  &.variant-outline {
    border: 1px solid;
    background-color: transparent;
    @apply border-stone-300 shadow text-stone-900;

    &:hover {
      @apply bg-stone-100 text-stone-900 border-stone-400;
    }

    &.disabled {
      @apply bg-stone-100 border-stone-300 text-stone-500;
    }
  }

  &.variant-ghost {
    &:hover {
      @apply bg-stone-100 text-brand-700;
    }
  }

  &.variant-destructive {
    border: 1px solid;
    @apply border-red-400 text-red-500 shadow;

    &:hover {
      @apply bg-red-500 text-white;
    }

    &.disabled {
      @apply border-red-200 text-red-300 bg-stone-200 shadow;
    }
  }

  &.variant-link {
    @apply text-brand-700 underline-offset-4 hover:underline;
  }

  &.size-default {
    @apply h-9 px-4 py-2;
  }

  &.size-icon-rounded {
    @apply h-9 w-9 rounded-full text-base;
  }

  &.size-icon {
    @apply h-9 w-9 text-xl;
  }

  &.size-lg {
    @apply h-10 rounded-md px-8;
  }

  &.size-sm {
    @apply h-8 rounded-md px-3 text-xs;
  }

  &.size-xs {
    @apply h-7 rounded px-2;
  }

  &.size-max {
    display: flex;
    @apply w-full py-3 px-4;
  }
}
</style>
