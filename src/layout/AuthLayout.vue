<script lang="ts" setup>
import {onUpdated} from "vue";
import {initFlowbite} from "flowbite";

onUpdated(() => {
  initFlowbite()
  console.log("Updated")
})
</script>
<template>
  <RouterView v-slot="{Component}">
    <Transition name="slide">
      <Component :is="Component"/>
    </Transition>
  </RouterView>
</template>