<script lang="ts" setup>
import Header from "@/layout/components/Header.vue";
import Footer from "@/layout/components/Footer.vue";
import SearchModal from "@/layout/components/SearchModal.vue";
</script>
<template>
  <SearchModal/>
  <Header/>
  <RouterView/>
  <Footer/>
</template>