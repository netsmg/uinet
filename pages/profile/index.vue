<script setup lang="ts">
import { ref, reactive } from 'vue'

// Define the tabs for account and password settings
const items = [{
  key: 'account',
  label: 'Account',
  description: 'Make changes to your account here. Click save when you\'re done.'
}, {
  key: 'password',
  label: 'Password',
  description: 'Change your password here. After saving, you\'ll be logged out.'
}]

// Supabase client and user
const supabase = useSupabaseClient()
const user = useSupabaseUser()

// Reactive forms
const accountForm = reactive({
  name: user?.value?.displayName || 'No Name',
  username: 'user',
  email: user?.value?.email || 'user@example.com'
})

const passwordForm = reactive({
  currentPassword: '',
  newPassword: ''
})

// Message state
const message = ref('')
const messageType = ref('')

// Form submission handler
async function onSubmit (form: typeof accountForm | typeof passwordForm) {
  message.value = ''
  messageType.value = ''

  if (form === accountForm) {
    if (user.value) {
      const { data, error } = await supabase
        .from('profiles')
        .update({
          name: accountForm.name,
          username: accountForm.username
        })
        .eq('id', user.value.id)

      if (error) {
        message.value = 'Error updating account: ' + error.message
        messageType.value = 'error'
      } else {
        message.value = 'Account updated successfully'
        messageType.value = 'success'
      }
    } else {
      message.value = 'No user logged in'
      messageType.value = 'error'
    }
  } else if (form === passwordForm) {
    const { error } = await supabase.auth.updateUser({
      password: passwordForm.newPassword
    })

    if (error) {
      message.value = 'Error updating password: ' + error.message
      messageType.value = 'error'
    } else {
      message.value = 'Password updated successfully. You will be logged out.'
      messageType.value = 'success'
      await supabase.auth.signOut()
    }
  }
}
  if (user.value) {
  console.log('User ID:', user.value.id);
  const { data, error } = await supabase
    .from('profiles')
    .update({
      name: accountForm.name,
      username: accountForm.username
    })
    .eq('id', user.value.id)
} else {
  console.log('No user logged in');
  message.value = 'No user logged in'
  messageType.value = 'error'
  }
  const title = ref("Profile")
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
      <UTabs :items="items" class="w-full">
        <template #item="{ item }">
          <UCard @submit.prevent="() => onSubmit(item.key === 'account' ? accountForm : passwordForm)">
            <template #header>
              <p class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                {{ item.label }}
              </p>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {{ item.description }}
              </p>
            </template>

            <div v-if="item.key === 'account'" class="space-y-3">
              <UFormGroup label="Email" name="email">
                <UInput v-model="accountForm.email" disabled />
              </UFormGroup>
              <UFormGroup label="Name" name="name">
                <UInput v-model="accountForm.name" />
              </UFormGroup>
              <UFormGroup label="Username" name="username">
                <UInput v-model="accountForm.username" />
              </UFormGroup>
            </div>
            <div v-else-if="item.key === 'password'" class="space-y-3">
              <UFormGroup label="Current Password" name="current" required>
                <UInput v-model="passwordForm.currentPassword" type="password" required />
              </UFormGroup>
              <UFormGroup label="New Password" name="new" required>
                <UInput v-model="passwordForm.newPassword" type="password" required />
              </UFormGroup>
            </div>

            <template #footer>
              <UButton type="submit" color="black">
                Save {{ item.key === 'account' ? 'account' : 'password' }}
              </UButton>
            </template>
          </UCard>
        </template>
      </UTabs>

      <div v-if="message" :class="messageType === 'error' ? 'text-red-500' : 'text-green-500'" class="mt-4">
        {{ message }}
      </div>
    </div>
  </div>
</template>
