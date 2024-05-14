<template>
  <div class="flex flex-wrap mt-4">
    <div class="w-full mb-12 px-4">
      <card-table />
    </div>
    <div class="w-full mb-12 px-4">
      <card-table color="dark" />
    </div>
  </div>
</template>
<script setup lang="ts">
import CardTable from "@/components/Cards/CardTable.vue";

definePageMeta({
  layout: "admin"
})
</script>
