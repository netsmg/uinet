<!-- pages/blog/index.vue -->

<template>
  <div class="container mx-auto p-4">
    <div class="text-center">
    <h1 class="flex justify-center gap-2 text-2xl font-semibold">
          <span class="i-ph-pencil size-7"></span> BLOG
        </h1>
        </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <BlogCard
        v-for="post in paginatedPosts"
            :key="post.slug"
            :post="post"
      />
    </div>
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
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import { blogPosts } from '~/data/blogPosts';

const title = ref("Blog");
const currentPage = ref(1);
const blogPostsPerPage = 8;
const totalPages = computed(() => Math.ceil(blogPosts.length / blogPostsPerPage));

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * blogPostsPerPage;
  const end = start + blogPostsPerPage;
  return blogPosts.slice(start, end);
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
  ogImage: "https://web-libnet.vercel.app/img/blog/post2.jpg",
  ogImageWidth: "900",
  ogImageHeight: "561",
});
</script>
