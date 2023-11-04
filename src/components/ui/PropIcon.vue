<script setup lang="ts">
defineProps<{
  iconImageLink: string;
  title?: string;
}>();
</script>

<template>
  <i
    class="prop-icon"
    :style="{ backgroundImage: `url(${iconImageLink})` }"
    :title="title"
  ></i>
</template>

<style>
.prop-icon {
  display: inline-block;
  width: 30px;
  height: 25px;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
