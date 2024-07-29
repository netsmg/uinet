<template>
  <div class="center">
    <GoogleSignInButton @success="onSuccess" @error="onError" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const onSuccess = (resp) => {
  console.log('Google Sign-In successful:', resp)
  // Assuming you have a route named 'profile'
  router.push({ name: 'profile' })
}

const onError = (resp) => {
  console.error('Google Sign-In error:', resp)
}
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
