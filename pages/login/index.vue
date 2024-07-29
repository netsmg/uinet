<script setup lang="ts">
import { ref, reactive } from 'vue'
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
const supabase = useSupabaseClient()
const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive({
  email: '',
  password: ''
})

const loading = ref(false)
const authError = ref('')

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true
  const { user, error } = await supabase.auth.signInWithPassword({
    email: state.email,
    password: state.password
  })
  
  loading.value = false
  if (error) {
    authError.value = error.message
  } else {
    console.log('Login successful:', user)
    await navigateTo('/profile');
  }
}
  const signInWithOAuth = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: '/profile',
    },
  })
    if (error) {
    authError.value = error.message
  } else {
    console.log('Login successful:', user)
  }
  }
  const User = useSupabaseUser()
  watchEffect(async () => {
  if (User.value) {
    await navigateTo('/profile')
  }
});
  const title = ref("Login")
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
  ]
})

// Meta tags, OG, Twitter
const description = "Contact me through this form"
useSeoMeta({
  title: title.value,
  description: description,
  ogTitle: title.value,
  ogDescription: description,
  ogType: "website",
  ogSiteName: title.value,
  ogUrl: "https://web-libnet.vercel.app/",
  ogImage: "https://web-libnet.vercel.app/img/profile.jpg",
  ogImageWidth: "1142",
  ogImageHeight: "760",
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 class="text-2xl font-bold mb-8 text-center">LOGIN</h1>
      
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" type="password" />
        </UFormGroup>

        <div v-if="authError" class="bg-red-100 text-red-700 px-4 py-2 rounded">
          {{ authError }}
        </div>

        <UButton type="submit" color="gray" block :disabled="loading">
          <div v-if="loading">Logging in...</div>
          <div v-else>Submit</div>
        </UButton>
      </UForm>
      <UDivider label="OR" /> 
      <UButton color="black" label="Login with GitHub" icon="i-simple-icons-github" block class="mb-1" @click="signInWithOAuth" /> 
      <UButton color="black" label="Login with Google" icon="i-simple-icons-google" block />
    </div>
  </div>
</template>

