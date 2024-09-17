<script lang="ts" setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import SearchModal from "./components/SearchModal.vue";
</script>
<template>
  <SearchModal/>
  <Header/>
  <RouterView/>
  <Footer/>
</template>