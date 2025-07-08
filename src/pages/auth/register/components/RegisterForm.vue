<script setup lang="ts">

import AppleIcon from "@/icons/AppleIcon.vue";
import GoogleIcon from "@/icons/GoogleIcon.vue";
import UserInformation from "@/pages/auth/register/components/components/UserInformation.vue";
import ConfirmPassword from "@/pages/auth/register/components/components/ConfirmPassword.vue";
import {currentStep} from "@/pages/auth/register/components/RegisterForm.ts";
</script>

<template>
  <form action="#" class="space-y-4 max-w-md md:space-y-6 xl:max-w-xl">
    <h2 class="text-xl font-bold text-gray-900 dark:text-white">Your Best Work Starts Here</h2>
    <div class="items-center space-y-3 space-x-0 sm:flex sm:space-x-4 sm:space-y-0">
      <a class="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
         href="#">
        <GoogleIcon class="mr-2 w-5 h-5"/>
        Sign up with Google
      </a>
      <a class="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
         href="#">
        <AppleIcon class="mr-2 w-5 h-5 text-gray-900 dark:text-white"/>
        Sign up with Apple
      </a>
    </div>
    <div class="flex items-center">
      <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
      <div class="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
      <div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
    </div>
    <TransitionGroup name="slide-fade">
      <UserInformation v-show="currentStep===0"/>
      <ConfirmPassword v-show="currentStep===1"/>
    </TransitionGroup>
    <button class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-700"
            @click=""
            type="button">
      Create
      an account
    </button>
    <p class="text-sm font-light text-gray-500 dark:text-gray-300">
      Already have an account?
      <router-link :to="{name: 'login'}"
                   class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login
        here
      </router-link>
    </p>
  </form>
</template>

<style scoped>

</style>