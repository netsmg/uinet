<template>
  <div class="container mx-auto p-4">
    <Splide :options="splideOptions">
      <SplideSlide v-for="project in projects" :key="project.id">
        <div class="p-2">
          <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <NuxtImg  :src="project.image" alt="Project image" class="w-full h-48 object-cover" format="webp" />
            <div class="p-4">
              <h3 class="text-xl font-semibold">{{ project.title }}</h3>
              <p class="text-gray-700 mb-4">{{ project.description }}</p>
              <div class="flex space-x-4">
                <NuxtLink :to="project.liveLink" class="flex items-center space-x-2 text-blue-500 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M8 17l4-4-4-4M12 13h7"/>
                  </svg>
                  <span>Live</span>
                </NuxtLink>
                <NuxtLink :to="project.codeLink" class="flex items-center space-x-2 text-blue-500 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M16 18L22 12l-6-6M8 6L2 12l6 6"/>
                  </svg>
                  <span>Code</span>
                </NuxtLink>
                <NuxtLink :to="'/projects/' + project.slug" class="flex items-center space-x-2 text-blue-500 hover:text-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="16" x2="12" y2="12"/>
                    <line x1="12" y1="8" x2="12" y2="8"/>
                  </svg>
                  <span>Details</span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { projects } from '~/data/projects';

const splideOptions = {
  type: 'loop',
  perPage: 3,
  perMove: 1,
  autoplay: true,
  pauseOnHover: true,
  pagination: false,
  arrows: true,
  breakpoints: {
    1024: {
      perPage: 3,
    },
    768: {
      perPage: 2,
    },
    480: {
      perPage: 1,
    },
  },
};
</script>

<style scoped>
/* Custom styles for the carousel */
.slick-prev, .slick-next {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex !important;
  justify-content: center;
  align-items: center;
}
.slick-prev:hover, .slick-next:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
