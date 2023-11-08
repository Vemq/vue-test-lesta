<script setup lang="ts">
</script>

<template>
  <div class="grid-layout">
    <TransitionGroup name="list">
      <slot></slot>
    </TransitionGroup>
  </div>
</template>

<style>
.grid-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 110%;
  gap: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
