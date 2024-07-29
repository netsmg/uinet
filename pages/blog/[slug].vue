<!-- pages/blog/[slug].vue -->
<template>
  <UContainer class="pb-6">
    <div v-if="post" class="flex flex-col gap-y-12 print:gap-y-8">
      <div class="flex items-center justify-between gap-8 md:gap-28">
        <div class="flex flex-col gap-y-1.5">
          <h1 class="text-2xl font-bold">{{ post.title }}</h1>
          <p class="print:leading-5">{{ post.excerpt }}</p>
          <div class="flex items-center gap-1">
            <span class="i-ph-globe size-4"></span>
            <div class="text-xs">{{ post.date }} <span class="mx-1.5">●</span> {{ post.readTime }} min</div>
            </div>
            <div class="mt-1 flex flex-wrap gap-1">
            <span v-for="category in post.category"
        :key="category" class="items-center font-medium rounded-md text-xs px-1.5 py-0.5 ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-800 flex gap-0.5">
              <span class="i-ph-tag"></span> {{ category }}
            </span>
          </div>
        </div>
        <div class="size-16 shrink-0 md:size-28 print:size-28">
          <NuxtImg format="webp" src="/img/profile.jpg" class="rounded-full drop-shadow-lg" alt="Post Author" />
        </div>
      </div>
      <div class="h-48 overflow-hidden rounded-xl lg:h-96">
<NuxtImg format="webp"
      :src="post.image"
      alt="Blog post image"
      class="w-full h-full object-cover"
    />
        </div>
      <div v-if="postContent.length">
        <div v-for="(block, index) in postContent" :key="index">
          <h2 class="text-xl mb-1" v-if="block.type === 'header'">{{ block.text }}</h2>
          <p class="print:leading-5 mb-2" v-else-if="block.type === 'paragraph'">{{ block.text }}</p>
        </div>
      </div>
      
    </div>
    <div v-else class="text-center">
      <p>Post not found. Redirecting to the blog page...</p>
    </div>
  <!-- Basic use -->
    <fieldset class="text-lg border-2 border-gray-300 rounded-lg p-4 mb-4 max-w-sm mx-auto mt-24">
    <legend class="px-2 text-xl font-semibold">
        Share
    </legend>
       <div class="flex justify-center gap-4 flex-wrap">

         <div  class="border-2 border-blue-500 rounded-md py-1 px-2 text-blue-500 hover:bg-blue-500 hover:text-white">
           <SocialShare network="facebook" />
</div>
         <div  class="border-2 border-blue-500 rounded-md py-1 px-2 text-blue-500 hover:bg-blue-500 hover:text-white">
<SocialShare network="twitter" />
</div>
         <div  class="border-2 border-blue-500 rounded-md py-1 px-2 text-blue-500 hover:bg-blue-500 hover:text-white">
<SocialShare network="linkedin" />
           </div>
         <div  class="border-2 border-blue-500 rounded-md py-1 px-2 text-blue-500 hover:bg-blue-500 hover:text-white">
<SocialShare network="email" />
           </div>
         </div>
</fieldset>
  
</UContainer>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, computed, ref } from 'vue';
import { blogPosts } from '~/data/blogPosts';


    const route = useRoute();
    const router = useRouter();
    const postSlug = ref(route.params.slug as string);
    const post = computed(() => blogPosts.find(p => p.slug === postSlug.value));
    const postContent = computed(() => post.value?.content || []);

    onMounted(() => {
      if (!post.value) {
        setTimeout(() => {
          router.replace('/blog');
        }, 2000); // Redirect after 2 seconds
      }
    });



// Fallback values if post is not found
const defaultTitle = "Blog";
const defaultDescription = "🎨 Mohammad Al-amin a passionate developer";
const defaultImage = "https://web-libnet.vercel.app/img/blog/versus@0.5x.jpg";

const title = computed(() => post.value ? post.value.title : defaultTitle);
const description = computed(() => post.value ? post.value.excerpt : defaultDescription);
const image = computed(() => post.value ? `https://web-libnet.vercel.app${post.value.image}` : defaultImage);

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
});

// Meta tags, OG, Twitter
useSeoMeta({
  title: title.value,
  description: description.value,
  ogTitle: title.value,
  ogDescription: description.value,
  ogType: "website",
  ogSiteName: title.value,
  ogUrl: `https://web-libnet.vercel.app/blog/${postSlug}`,
  ogImage: image.value,
  ogImageWidth: "1142",
  ogImageHeight: "760",
});
</script>
