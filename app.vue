<template>
  <div class="dark:bg-dark">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
const colorMode = useColorMode();

onMounted(() => {
  
  if(colorMode.preference === 'system'){
  colorMode.preference = 'dark'
}
})
</script>
