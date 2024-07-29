<template>
  <div>
    <h1>Profile Page</h1>
    <p v-if="userState.userData">Welcome, {{ userState.userData.name }}!</p>
    <p v-if="userState.userData">Email: {{ userState.userData.email }}</p>
  </div>
</template>

<script setup lang="ts">
const userState = useState('user', () => ({
  isLoggedIn: false,
  userData: null as { name: string; email: string } | null
}))
</script>
