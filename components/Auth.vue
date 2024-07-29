<template>
  <div>
    <UDropdown
      :ui="{ width: 'w-28' }"
      :items="items"
      :popper="{ placement: 'bottom-start' }"
    >
      <UButton icon="i-mdi-account" :square="true" variant="ghost" />
    </UDropdown>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (path) => {
  router.push(path)
}

const items = [
  [
    {
      label: "Blog",
      slot: "blog",
      icon: "i-material-symbols-book",
      click: () => {
        navigateTo('/blog')
      },
    },
    {
      label: "Projects",
      icon: "i-material-symbols-pen",
      click: () => {
        navigateTo('/projects')
      },
    },
    {
      label: "Profile",
      icon: "i-material-symbols-account-circle",
      click: () => {
        navigateTo('/profile')
      },
    },
  ],
]
</script>
