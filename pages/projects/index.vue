<!-- pages/projects/index.vue -->

<template>
  <UContainer class="pb-6">
    <div class="flex flex-col gap-y-12 print:gap-y-8">
      <div class="text-center">
        <h1 class="flex justify-center gap-2 text-2xl font-semibold">
          <span class="i-ph-pencil size-7"></span> Projects
        </h1>
        <div class="flex items-center justify-center my-4">
          <div class="border-t border-solid border-gray-200 dark:border-gray-800 w-full"></div>
        </div>
        
          <ProjectCard />
      </div>
    </div>
  </UContainer>
</template>
<script setup lang="ts">
const title = ref("Projects")

const runtimeConfig = useRuntimeConfig()
const loadPlausible = runtimeConfig.public.loadPlausible == "yes"

useHead({
  // dynamic title
  title,

  // helps for accessibility - remove if using i18n
  htmlAttrs: { lang: "en" },

  // favicon
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon/palette.svg",
    },
  ],

  // plausible
  ...(loadPlausible
    ? {
        script: [
          {
            "src": "/stats/js/script.js",
            "data-api": "/stats/api/event",
            "data-domain": "web-libnet.vercel.app",
            "defer": true,
          },
        ],
      }
    : {}),
})

// Meta tags, OG, Twitter
const description = "🎨 Mohammad Al-amin a passionate developer"
useSeoMeta({
  title: title.value,
  description: description,
  ogTitle: title.value,
  ogDescription: description,
  ogType: "website",
  ogSiteName: title.value,
  ogUrl: "https://web-libnet.vercel.app/",
  ogImage: "https://web-libnet.vercel.app/img/social_small.png",
  ogImageWidth: "1142",
  ogImageHeight: "760",
})
</script>


