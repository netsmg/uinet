<!-- pages/projects/[slug].vue -->

<template>
  <UContainer class="pb-6">
    <div class="flex flex-col gap-y-12 print:gap-y-8">
      <div v-if="project" class="flex items-center justify-between gap-8 md:gap-28">
        <div class="flex flex-col gap-y-1.5">
          <h1 class="text-2xl font-bold">{{ project.title }}</h1>

          <div class="flex items-center gap-1">
            <span class="i-ph-globe size-4"></span>
            <div class="text-xs">{{ project.date }}</div>
          </div>

          <div class="mt-1 flex flex-wrap gap-1">
            <span v-for="tech in project.techStack" :key="tech" class="items-center font-medium rounded-md text-xs px-1.5 py-0.5 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 flex gap-0.5">
              <span class="i-ph-tag"></span> {{ tech }}
            </span>
          </div>

          <div class="mt-2">
            <p class="text-sm leading-5 print:leading-4">{{ project.description }}</p>
          </div>

          <div class="mt-2 h-48 overflow-hidden rounded-xl lg:h-96">
          <NuxtImg format="webp" :src="project.image" class="w-full h-full object-cover" alt="Project image" />
          </div>

          <div class="mt-2">
            <p class="text-sm leading-5 print:leading-4">{{ project.content }}</p>
          </div>
        </div>
      </div>
      <div v-else class="text-center">
        <p>Project not found. Redirecting to the projects page...</p>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, computed } from 'vue';
import { projects } from '~/data/projects';

const route = useRoute();
const router = useRouter();
const projectSlug = route.params.slug as string;
const project = computed(() => projects.find(p => p.slug === projectSlug));

onMounted(() => {
  if (!project.value) {
    setTimeout(() => {
      router.replace('/projects');
    }, 2000); // Redirect after 2 seconds
  }
});

// Fallback values if project is not found
const defaultTitle = "Projects";
const defaultDescription = "🎨 Mohammad Al-amin a passionate developer";
const defaultImage = "https://web-libnet.vercel.app/img/blog/versus@0.5x.jpg";

const title = computed(() => project.value ? project.value.title : defaultTitle);
const description = computed(() => project.value ? project.value.description : defaultDescription);
const image = computed(() => project.value ? `https://web-libnet.vercel.app${project.value.image}` : defaultImage);

const runtimeConfig = useRuntimeConfig();
const loadPlausible = runtimeConfig.public.loadPlausible === "yes";

useHead({
  // dynamic title
  title: title.value,

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
            src: "/stats/js/script.js",
            "data-api": "/stats/api/event",
            "data-domain": "web-libnet.vercel.app",
            defer: true,
          },
        ],
      }
    : {}),
});

// Meta tags, OG, Twitter
useSeoMeta({
  title: title.value,
  description: description.value,
  ogTitle: title.value,
  ogDescription: description.value,
  ogType: "website",
  ogSiteName: title.value,
  ogUrl: `https://web-libnet.vercel.app/projects/${projectSlug}`,
  ogImage: image.value,
  ogImageWidth: "1142",
  ogImageHeight: "760",
});
</script>
