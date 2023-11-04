<script setup lang="ts">
defineProps<{
  errorData: Error;
}>();
</script>

<template>
  <div class="error-page">
    <div>
      <div class="error-page__title">An error occurred and the page did not load</div>      
      <div>{{ errorData.name }}</div>
      <div>{{ errorData.message }}</div>     
    </div>
  </div>
</template>

<style>
.error-page {
  display: flex;
  justify-content: center;
  margin: 20vh 0;  
}

.error-page__title{
  color:  var(--color-heading);
  font-size: 2rem;
}
</style>
