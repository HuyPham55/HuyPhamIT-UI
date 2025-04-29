<script setup lang="ts">
/*
Search input on mobile devices that shows when user click on hamburger menu
Directly related to showSearchButton
 */
let showMobileSearchInput = 0;
</script>

<template>
  <div id="navbar-sticky" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
    <div v-if="showMobileSearchInput" class="relative mt-3 md:hidden">
      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400"
             fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" stroke="currentColor" stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2"/>
        </svg>
      </div>
      <input id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="Search..."
             type="text">
    </div>
    <ul class="navbar-nav">
      <li>
        <router-link :to="{name:'home'}"
                     class="nav-link"
                     aria-current="page">Home
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'posts'}" aria-current="page"
                     class="nav-link">
          Posts
        </router-link>
      </li>
      <li>
        <a class="nav-link"
           href="#">About</a>
      </li>
      <li>
        <router-link
            :to="{name: 'contact_us'}"
            class="nav-link">
          Contact us
        </router-link>
      </li>
      <li>
        <button id="dropdownNavbarLink" class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                data-dropdown-toggle="dropdownNavbar">
          Dropdown &nbsp;
          <i class="fa fa-angle-down"></i>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdownNavbar"
             class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <ul aria-labelledby="dropdownLargeButton"
              class="py-2 text-sm text-gray-700 dark:text-gray-400">
            <li>
              <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                 href="#">Dashboard</a>
            </li>
            <li>
              <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                 href="#">Settings</a>
            </li>
            <li>
              <a class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                 href="#">Earnings</a>
            </li>
          </ul>
          <div class="py-1">
            <a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
               href="#">Sign
              out</a>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>