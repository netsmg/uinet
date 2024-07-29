<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import { useReCaptcha } from 'vue-recaptcha-v3'

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

type Schema = z.output<typeof schema>

const state = reactive({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)
const error = ref('')

const isAdmin = computed(() => user.value?.id === '4dc0491e-0699-4fa6-bd5d-6915022d2379')

const contacts = ref([])
const contactColumns = ref([
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'message', label: 'Message' },
  { key: 'created_at', label: 'Created At' }
])

const fetchContacts = async () => {
  const { data, error } = await supabase.from('contacts').select('*').order('created_at', { ascending: false })
  if (error) {
    console.error(error)
  } else {
    contacts.value = data
  }
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  loading.value = true
  success.value = false
  error.value = ''

  try {
    const token = await recaptcha();
    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name: state.name, email: state.email, message: state.message }])

    if (error) {
      throw error
    }

    success.value = true
    state.name = ''
    state.email = ''
    state.message = ''
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (isAdmin.value) {
    fetchContacts()
  }
})

const title = ref("Contacts")
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

const recaptchaInstance = useReCaptcha();
const token = ref<string | null>(null);

const recaptcha = async (): Promise<string | null> => {
  try {
    // optional: you can await the reCaptcha load
    await recaptchaInstance?.recaptchaLoaded();

    // get the token, a custom action could be added as an argument to the method
    token.value = await recaptchaInstance?.executeRecaptcha('yourActionHere') || null;

    // return the token if needed
    return token.value;
  } catch (error) {
    console.error('ReCaptcha execution failed:', error);
    return null;
  }
};

</script>

<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-6">Contact Us</h1>

    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Name" name="name">
        <UInput v-model="state.name" />
      </UFormGroup>

      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormGroup>

      <UFormGroup label="Message" name="message">
        <UTextarea v-model="state.message" rows="5" />
      </UFormGroup>

      <div v-if="success" class="text-green-500">Message sent successfully!</div>
      <div v-if="error" class="text-red-500">{{ error }}</div>

      <UButton type="submit" color="black" block :disabled="loading">
        <div v-if="loading">Sending...</div>
        <div v-else>Send Message</div>
      </UButton>
    </UForm>

    <div v-if="isAdmin" class="mt-8">
      <h2 class="text-2xl font-bold mb-4">Contacts</h2>
      <UTable :rows="contacts" :columns="contactColumns" />
    </div>
  </div>
      </div>
</div>
</template>

