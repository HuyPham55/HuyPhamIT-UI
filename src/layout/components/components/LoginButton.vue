<script setup lang="ts">
import {computed} from "vue";
import {useRouter} from "vue-router";

const isLoginPage = computed(() => router.currentRoute.value.name === 'login');
const router = useRouter()

</script>

<template>
  <button :class="['transition', isLoginPage ? 'text-blue-700 bg-transparent border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:text-blue-500 dark:border-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800' : 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800']"
          type="button">
    Log in
  </button>
</template>

<style scoped>

</style>