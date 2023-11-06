<script setup lang="ts">
import GridItem from './ContentGridItem.vue';

defineProps<{
  shipsData: ShipData[]
}>()
</script>

<template>
  <div class="grid-layout">
    <TransitionGroup name="list">
      <GridItem
        v-for="{
          title,
          level,
          description,
          type,
          nation,
          icons,
          id,
        } in shipsData"
        :title="title"
        :description="description"
        :level="level"
        :type="type"
        :nation="nation"
        :icons="icons"
        :id="id"
        :key="id"
      />
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
