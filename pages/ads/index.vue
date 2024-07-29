<template>
  <form @submit.prevent="onSubmit" class="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg mt-4">
    <div class="mb-4">
      <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name:</label>
      <input v-model="form.name" type="text" id="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>
    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
      <input v-model="form.email" type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
    </div>
    <div class="mb-4">
      <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message:</label>
      <textarea v-model="form.message" id="message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
    </div>
    <UButton :loading loading-icon="i-lucide-loader" type="submit" color="gray" block>Submit</UButton>
  </form>
</template>

<script setup>
import { useReCaptcha } from 'vue-recaptcha-v3'
import { ref } from 'vue'

const { executeRecaptcha } = useReCaptcha()

const form = ref({
  name: '',
  email: '',
  message: '',
})

const onSubmit = async () => {
  const token = await executeRecaptcha('contact_form')
  console.log('ReCaptcha Token:', token)
  // Handle form submission logic here
}
</script>
