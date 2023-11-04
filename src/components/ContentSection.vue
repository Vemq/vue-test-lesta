<script setup lang="ts">
import { ref } from 'vue';
import ContentSectionToolbar from './ContentSectionToolbar.vue';
import ContentSectionGrid from './ContentSectionGrid.vue';
import ContentSectionTable from './ContentSectionTable.vue';
import { type LayoutType } from '../utils/types';
import { useFilteredShipsStore } from '../stores/filteredShips';

const filteredStore = useFilteredShipsStore();
const selectedLayout = ref<LayoutType>('grid');
</script>

<template>
  <div class="ship-page-layout__content">
    <ContentSectionToolbar @switchLayout="(layout: LayoutType) => selectedLayout = layout" :selectedLayout="selectedLayout" />
    <template v-if="filteredStore.totalShipsFound > 0">
      <ContentSectionTable v-if="selectedLayout === 'table'" :shipsData="filteredStore.filteredShipsData"/>
      <ContentSectionGrid v-if="selectedLayout === 'grid'" :shipsData="filteredStore.filteredShipsData"/>
    </template>

  </div>
</template>

<style>
.ship-page-layout__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>