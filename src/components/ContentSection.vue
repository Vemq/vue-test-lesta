<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import ContentSectionToolbar from './ContentSectionToolbar.vue';
import ContentSectionGrid from './ContentSectionGrid.vue';
import ContentSectionTable from './ContentSectionTable.vue';
import { type LayoutType } from '../utils/types';

import { useDisplayedShipsStore } from '../stores/displayedShips';

const { totalShipsFound, displayedShipsData } = storeToRefs(
  useDisplayedShipsStore()
);

const selectedLayout = ref<LayoutType>('grid');
</script>

<template>
  <div class="ship-page-layout__content">
    <ContentSectionToolbar
      @switchLayout="(layout: LayoutType) => selectedLayout = layout"
      :selectedLayout="selectedLayout"
    />
    <template v-if="totalShipsFound > 0">
      <ContentSectionTable
        v-if="selectedLayout === 'table'"
        :shipsData="displayedShipsData"
      />
      <ContentSectionGrid
        v-if="selectedLayout === 'grid'"
        :shipsData="displayedShipsData"
      />
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
