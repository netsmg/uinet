<!-- components/BlogPost.vue -->

<template>
  <NuxtLink
    :to="'/blog/' + post.slug"
    class="primary-hover flex min-w-[340px] max-w-[340px] overflow-hidden rounded-xl lg:mb-8"
  >
    <div class="size-24 sm:size-28">
      <img
        :src="post.image"
        class="h-full w-full rounded-2xl object-cover p-2"
        alt="Blog image"
      />
    </div>
    <div class="p-3">
      <p class="text-lg font-medium leading-5 tracking-tight">
        {{ post.title }}
      </p>
      <div class="mt-1.5 flex items-center">
        <div class="primary-text-muted flex items-center text-sm tracking-tight">
          {{ post.date }} <span class="mx-1.5">●</span> {{ post.readTime }} min
          <span class="ml-1.5 mr-2 inline-block">●</span>
          <span class="i-twemoji-flag-bangladesh size-5"></span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});
</script>

