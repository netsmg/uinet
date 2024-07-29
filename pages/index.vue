<template>
  <UContainer class="pb-6">
    <div class="flex flex-col gap-y-12 print:gap-y-8">
      <div class="flex items-center justify-between gap-8 md:gap-28">
        <div class="flex flex-col gap-y-1.5">
          <h1 class="text-2xl font-bold">Mohammad Al-amin</h1>
          <p class="print:leading-5">
            Versatile Web Developer, crafting challenging products with
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
          <img src="/img/profile.jpg" class="rounded-full drop-shadow-lg" alt="author"/>
        </div>
      </div>
      
<div class="container mx-auto p-4">
    <div class="text-center">
      <h1 class="flex justify-center gap-2 text-2xl font-semibold">
        <span class="i-ph-pencil size-7"></span> BLOG
      </h1>
    </div>
    <div class="text-center mt-4">
      <p>Showing {{ showingRange }} of {{ blogPosts.length }}</p>
    </div>
    <transition-group name="slide-fade" tag="div" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <BlogCard
        v-for="post in paginatedPosts"
        :key="post.slug"
        :post="post"
      />
    </transition-group>
    <div class="flex justify-center mt-6">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="mr-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        Next
      </button>
    </div>
  </div>
      
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
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { blogPosts } from '~/data/blogPosts';

const title = ref("Blog");
const currentPage = ref(1);
const blogPostsPerPage = 2;
const totalPages = computed(() => Math.ceil(blogPosts.length / blogPostsPerPage));

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * blogPostsPerPage;
  const end = start + blogPostsPerPage;
  return blogPosts.slice(start, end);
});

const showingRange = computed(() => {
  const start = (currentPage.value - 1) * blogPostsPerPage + 1;
  const end = Math.min(currentPage.value * blogPostsPerPage, blogPosts.length);
  return `${start} - ${end}`;
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};


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
});

// Meta tags, OG, Twitter
const description = "🎨 Mohammad Al-amin a passionate developer";
useSeoMeta({
  title: title.value,
  description: description,
  ogTitle: title.value,
  ogDescription: description,
  ogType: "website",
 ogSiteName: title.value,
  ogUrl: "https://web-libnet.vercel.app/",
  ogImage: "https://web-libnet.vercel.app/img/profile.jpg",
  ogImageWidth: "900",
  ogImageHeight: "561",
});
</script>
<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(50px);
}
</style>
