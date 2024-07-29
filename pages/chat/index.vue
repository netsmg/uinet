<template>
  <div class="p-4 max-w-2xl mx-auto">
    <div v-if="!user">
      <p>Please log in to join the chat.</p>
      <UButton @click="signInWithGithub" color="black" label="Login with GitHub" icon="i-simple-icons-github" block class="mb-1" /> 
    </div>
    <div v-else>
      <div class="mb-4">
        <input
          v-model="newMessage"
          @keyup.enter="sendMessage"
          type="text"
          placeholder="Type your message..."
          class="w-full p-2 border rounded"
        />
        <button @click="sendMessage" class="px-4 py-2 mt-2 bg-blue-500 text-white rounded">Send</button>
      </div>
      <div>
        <div
          v-for="message in messages"
          :key="message.id"
          :class="[
            'mb-2 my-1 p-2 text-sm flex flex-col relative max-w-sm md:max-w-lg',
            message.user_id === user.id ? 'ml-auto bg-green-300 speech-bubble-right' : 'bg-white speech-bubble-left'
          ]"
        >
          <p><strong>{{ message.user_id }}:</strong> {{ message.content }}</p>
          <small>{{ new Date(message.created_at).toLocaleString() }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const messages = ref([])
const newMessage = ref('')
  
const fetchMessages = async () => {
  const { data } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false })
  messages.value = data || []
}

const sendMessage = async () => {
  if (newMessage.value.trim() === '') return

  await supabase
    .from('messages')
    .insert([{ content: newMessage.value, user_id: user.value.id }])
  newMessage.value = ''
  }

const signInWithGithub = async () => {
  await supabase.auth.signInWithOAuth({ provider: 'github' })
}

supabase
  .channel('public:messages')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'messages' }, payload => {
    fetchMessages()
  })
  .subscribe()

onMounted(fetchMessages)


</script>

<style>
.speech-bubble-right::before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 5px solid #9ae6b4;
  border-right: 5px solid transparent;
  border-top: 5px solid #9ae6b4;
  border-bottom: 5px solid transparent;
  right: -10px;
  top: 0;
}

.speech-bubble-left::before {
  content: "";
  width: 0px;
  height: 0px;
  position: absolute;
  border-left: 5px solid transparent;
  border-right: 5px solid white;
  border-top: 5px solid white;
  border-bottom: 5px solid transparent;
  left: -10px;
  top: 0;
}
</style>
