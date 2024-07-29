<template>
  <div class="center">
    <GoogleSignInButton @success="onSuccess" @error="onError" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const userState = useState('user', () => ({
  isLoggedIn: false,
  userData: null as { name: string; email: string } | null
}))

interface GoogleSignInResponse {
  profileObj: {
    name: string;
    email: string;
  };
}

const onSuccess = (resp: GoogleSignInResponse) => {
  console.log('Google Sign-In successful:', resp)
  userState.value.isLoggedIn = true
  userState.value.userData = resp.profileObj
  router.push({ name: 'user' })
}

const onError = (resp: any) => {
  console.error('Google Sign-In error:', resp)
  alert('Google Sign-In failed. Please try again.')
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
