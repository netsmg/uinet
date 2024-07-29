<script setup lang="ts">
import { computed } from 'vue';

const links = computed(() => [
  {
    label: 'Features',
    to: '#features',
    icon: 'i-heroicons-cube-transparent'
  },
  {
    label: 'Pricing',
    to: '#pricing',
    icon: 'i-heroicons-credit-card'
  },
  {
    label: 'Testimonials',
    to: '#testimonials',
    icon: 'i-heroicons-academic-cap'
  },
  {
    label: 'FAQ',
    to: '#faq',
    icon: 'i-heroicons-question-mark-circle'
  }
]);
</script>

<template>
  <UHeader :links="links">
    <template #logo>
      Nuxt UI Pro 
      <UBadge
        label="Landing"
        variant="subtle"
        class="mb-0.5"
      />
    </template>

    <template #right>
      <UButton
        label="Sign in"
        color="white"
        variant="ghost"
        trailing-icon="i-heroicons-arrow-right-20-solid"
        class="hidden lg:flex"
      />
    </template>

    <template #panel>
      <UAsideLinks :links="links" />

      <UDivider class="my-6" />

      <UButton
        label="Sign in"
        color="white"
        block
        class="mb-3"
      />
      <UButton
        label="Get started"
        block
      />
    </template>
  </UHeader>
</template>
