<template>
    <main class="container mx-auto p-4">
        <article class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
            <div class="flex items-center mb-4">
                <img src="/img/blog/default.png" alt="Blog image" class="w-full h-128  rounded-lg">
                <div>
                    <p class="text-gray-600 dark:text-gray-400">May 2024 • 6 min read</p>
                    <p class="text-gray-600 dark:text-gray-400">Dhaka, Bangladesh</p>
                </div>
            </div>
            <h2 class="text-2xl font-bold mb-4">Understanding Quantum Computing</h2>
            <p class="mb-4">Quantum computing is a revolutionary technology that leverages the principles of quantum mechanics to perform computations far beyond the capabilities of classical computers. Unlike classical bits, which represent either 0 or 1, quantum bits (qubits) can exist in multiple states simultaneously, enabling unprecedented computational power.</p>
            
            <h3 class="text-xl font-bold mb-2">Potential Applications</h3>
            <ul class="list-disc list-inside mb-4">
                <li>Drug discovery and healthcare advancements</li>
                <li>Optimization in logistics and supply chains</li>
                <li>Advanced cryptography and security</li>
                <li>Climate modeling and sustainability</li>
            </ul>
            
            <h3 class="text-xl font-bold mb-2">Challenges Ahead</h3>
            <p class="mb-4">Despite its potential, quantum computing faces several significant challenges. These include error rates, qubit stability, and the need for extremely low temperatures. Researchers are continuously working on overcoming these obstacles to make quantum computing more practical and accessible.</p>
            
            <h3 class="text-xl font-bold mb-2">Looking Forward</h3>
            <p class="mb-4">The future of quantum computing holds immense promise. As the technology matures, we can expect breakthroughs that will transform industries and solve complex problems that are currently beyond our reach. Companies and governments are investing heavily in quantum research, signaling a bright future for this cutting-edge field.</p>
        </article>
    </main>
    </template>
<script setup>
const user = useSupabaseUser()
const router = useRouter()

watchEffect(async () => {
  if (!user.value) {
    await router.push('/login')
  }
})
</script>
    
