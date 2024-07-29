<template>
  <div class="h-screen w-full dark:bg-gray-900">
    <div class="w-full mx-auto py-10 px-4 md:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          From The Blog
        </h2>
      </div>
      <div class="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-8 auto-rows-fr lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article
          class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
          <NuxtImg format="webp" src="/img/blog/post3.jpg" alt="Blog Image" class="absolute inset-0 object-cover w-full h-full -z-10"/>
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

          <NuxtLink class="text-lg font-semibold leading-6 text-white hover:text-teal-100" to="blog">
            The Future of Artificial Intelligence: Trends and Challenges
          </NuxtLink>
        </article>
        <article
          class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
          <NuxtImg format="webp" src="/img/blog/post8.jpg" alt="Blog Image" class="absolute inset-0 object-cover w-full h-full -z-10"/>
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

          <NuxtLink class="text-lg font-semibold leading-6 text-white hover:text-teal-100" to="blog">
            The Rise of Blockchain Technology: A Comprehensive Guide
          </NuxtLink>
        </article>
        <article
          class="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl dark:shadow dark:shadow-gray-400/50">
          <NuxtImg format="webp" src="/img/blog/post9.jpg" alt="Blog Image" class="absolute inset-0 object-cover w-full h-full -z-10"/>
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <div class="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

          <NuxtLink class="text-lg font-semibold leading-6 text-white hover:text-teal-100" to="blog">
            How Quantum Computing Will Revolutionize Data Security
          </NuxtLink>
        </article>
      </div>
    </div>
  </div>
</template>

