<script setup lang="ts">

</script>

<template>
  <div>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
           for="full-name">What should we call
      you?</label>
    <input id="email"
           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
           name="full-name"
           placeholder="e.g. Bonnie Green"
           type="text">
  </div>
  <div>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="email">Your
      email</label>
    <input id="email"
           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
           name="email"
           placeholder="name@company.com"
           type="email">
  </div>
  <div>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
           for="password">Your
      password</label>
    <input id="password"
           class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
           name="password" placeholder="••••••••"
           type="password"
    >
  </div>
  <div class="space-y-3">
    <div class="flex items-start">
      <div class="flex items-center h-5">
        <input id="terms" aria-describedby="terms"
               class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
               type="checkbox"
        >
      </div>
      <div class="ml-3 text-sm">
        <label class="font-light text-gray-500 dark:text-gray-300" for="terms">By signing up,
          you are creating a Flowbite account, and you agree to Flowbite’s <a
              class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              href="#">Terms of Use</a> and <a
              class="font-medium text-primary-600 dark:text-primary-500 hover:underline"
              href="#">Privacy Policy</a>.</label>
      </div>
    </div>
    <div class="flex items-start">
      <div class="flex items-center h-5">
        <input id="newsletter" aria-describedby="newsletter"
               class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
               type="checkbox"
        >
      </div>
      <div class="ml-3 text-sm">
        <label class="font-light text-gray-500 dark:text-gray-300" for="newsletter">Email me
          about product updates and resources.</label>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>