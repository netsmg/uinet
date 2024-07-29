<template>
  <nav class="fixed top-0 left-0 right-0 bg-white shadow">
    <ul class="flex justify-around py-4">
      <li v-for="link in links" :key="link.to" :class="{'font-bold': link.active}">
        <a :href="link.to" @click="scrollTo(link.to)">
          <i :class="link.icon"></i>
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';

const sections = ['features', 'pricing', 'testimonials', 'faq'];
const activeSection = ref('');
const activeHeadings = ref<string[]>([]);

const links = computed(() => sections.map(section => ({
  label: section.charAt(0).toUpperCase() + section.slice(1),
  to: `#${section}`,
  icon: 'i-heroicons-cube-transparent',  // Add any icon class here
  active: activeSection.value === section
})));

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

function onScroll() {
  const scrollPosition = window.scrollY + window.innerHeight / 2;
  activeHeadings.value = sections.filter(section => {
    const element = document.querySelector(`#${section}`);
    if (element) {
      const rect = element.getBoundingClientRect();
      return rect.top <= scrollPosition && rect.bottom >= scrollPosition;
    }
    return false;
  });
  activeSection.value = activeHeadings.value[0] || '';
}

onMounted(() => {
  window.addEventListener('scroll', onScroll);
  onScroll();
});

</script>

