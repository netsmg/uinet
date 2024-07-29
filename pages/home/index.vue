<template>
  <Header />
  <UContainer class="pb-6">
     <div>
      <div class="flex flex-col gap-y-12 print:gap-y-8">
        <div class="flex items-center justify-between gap-8 md:gap-28">
          <div class="flex flex-col gap-y-1.5">
            <h1 class="text-2xl font-bold">Mohammad Al-amin</h1>
            <p class="print:leading-5">
              Versatile Web Designer, crafting challenging products with
              extra attention to detail. 2 years of experience.
            </p>
            <div class="flex items-center gap-1">
              <span class="i-ph-globe size-4"></span>
              <div class="text-xs">Dhaka, Bangladesh</div>
            </div>
            <div class="mt-1 flex gap-2 print:hidden">
              <div class="relative inline-flex">
                <button
                  type="button"
                  class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                >
                  <span class="i-ph-envelope flex-shrink-0 h-3 w-3" aria-hidden="true"></span>
                </button>
              </div>
              <div class="relative inline-flex">
                <NuxtLink
                  class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                 to="https://www.linkedin.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="i-ph-linkedin-logo flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
                </NuxtLink>
              </div>
              <div class="relative inline-flex">
                <NuxtLink
                  class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                  to="https://github.com/netsmg"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="i-ph-github-logo flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
                </NuxtLink>
              </div>
              <div class="relative inline-flex">
                <NuxtLink
                  class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                  to="https://stackoverflow.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="i-ph-stack-overflow-logo flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
                </NuxtLink>
              </div>
              <div class="relative inline-flex">
                <NuxtLink
                  class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
                  to="/blog"
                >
                  <span class="i-ph-pencil flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
                </NuxtLink>
              </div>
               
            </div>
          </div>
        
        
        
        <div class="size-16 shrink-0 md:size-28 print:size-28">
          <img src="/img/profile.jpg" class="rounded-full drop-shadow-lg" />
        </div>
      </div>
      </div>
          </div>
          
              
                  
    <div class="mt-6 text-center sm:my-12">
      <p class="text-3xl font-semibold tracking-tight sm:text-4xl">
        Pick the right UI Library
      </p>
      <p class="text-lg sm:text-xl">
        for your
        <NuxtLink
          to="https://vuejs.org/"
          target="_blank"
          class="primary-text font-semibold"
        >
          Vue 3
        </NuxtLink>
        or
        <NuxtLink
          to="https://nuxt.com/"
          target="_blank"
          class="primary-text font-semibold"
          >Nuxt 3</NuxtLink
        >
        Project.
      </p>
    </div>

    <div class="mt-6 flex flex-grow justify-center gap-4 sm:mt-8">
      <!-- filters -->
      <div class="-mt-2 hidden w-72 shrink-0 p-3 md:block">
        <Filters />
      </div>

      <LibraryCards />
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const title = ref("UI Lib Picker")

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
            "data-domain": "ui-libs.vercel.app",
            "defer": true,
          },
        ],
      }
    : {}),
})

// Meta tags, OG, Twitter
const description = "🎨 Pick the Right UI Library for your Vue 3 or Nuxt 3 Project"
useSeoMeta({
  title: title.value,
  description: description,
  ogTitle: title.value,
  ogDescription: description,
  ogType: "website",
  ogSiteName: title.value,
  ogUrl: "https://ui-libs.vercel.app/",
  ogImage: "https://ui-libs.vercel.app/img/social_small.png",
  ogImageWidth: "1142",
  ogImageHeight: "760",
})
</script>
