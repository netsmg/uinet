<!-- components/BlogCard.vue -->

<template>
  <div class="max-w-md p-6  rounded-lg shadow-md dark:ring-gray-700 dark:text-gray-200">
    <div class="flex items-center mb-4">
      <NuxtImg format="webp" 
        src="/img/profile.jpg"
        alt="Author Avatar"
        class="w-10 h-10 rounded-full"
      />
      <div class="ml-4">
        <p class="text-gray-700">Posted by</p>
        <p class="font-semibold text-gray-900">{{ post.author }}</p>
      </div>
 <div class="mt-1.5 flex items-center">
        <div class="primary-text-muted flex items-center text-sm tracking-tight">
          {{ post.date }} <span class="mx-1.5">●</span> {{ post.readTime }} min
        </div>
        </div>
    </div>
    <NuxtImg format="webp"
      :src="post.image"
      alt="Blog post image"
      class="w-full mt-4 rounded-lg"
    />
    <NuxtLink :to="'/blog/' + post.slug">
 <h2 class="mb-2 text-xl font-semibold text-gray-900">{{ post.title }}</h2>
    </NuxtLink>
    <div class="flex gap-2 mb-4">
      
      <span
        v-for="category in post.category"
        :key="category"
        class="px-3 py-1 text-sm bg-gray-200 rounded-full"
      >
       <span class="i-ph-tag"></span> {{ category }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
i {
  font-size: 0.875rem;
}
</style>
