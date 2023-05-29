<script setup lang="ts">
const email = ref('')
const name = ref('')

const handleSubmit = async () => {
    const {data: response} = await useFetch('/api/users', {
        method: 'POST',
        body: {
            email: email.value,
            name: name.value
        }
    })

    if (response) {
        alert(response.value);
    }
}
</script>

<template>
    <div class="border-2 border-openstadia p-2 rounded-lg">
        <div class="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            <div class="sm:col-span-2">
                <div class="mt-1">
                    <input v-model="name" placeholder='Name' type="text" autocomplete="given-name"
                           class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-openstadia sm:text-sm sm:leading-6">
                </div>
            </div>

            <div class="sm:col-span-2">
                <div class="mt-1">
                    <input v-model="email" placeholder='Email' type="email" autocomplete="email"
                           class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-openstadia sm:text-sm sm:leading-6">
                </div>
            </div>
        </div>

        <div class="mt-6">
            <button @click="handleSubmit" type="button"
                    class="block w-full rounded-md bg-openstadia px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-openstadia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-openstadia">
                Join Alpha Test Now
            </button>
        </div>
    </div>
</template>
