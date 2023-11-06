<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import ContentToolbar from './ContentToolbar.vue';
import ContentInfoMessage from './ContentInfoMessage.vue';
import ClearQueryElement from './ClearQueryElement.vue';
import GridSorting from './GridSorting.vue';
import LayoutSwitcher from './LayoutSwitcher.vue';
import ContentGrid from './ContentGrid.vue';
import ContentTable from './ContentTable.vue';


import { useDisplayedShipsStore } from '../stores/displayedShips';

const { totalShipsFound, displayedShipsData } = storeToRefs(
  useDisplayedShipsStore()
);

const selectedLayout = ref<LayoutType>('grid');
</script>

<template>
  <div class="ship-page-layout__content">
    <ContentToolbar>
      <template #left>
        <div class="ship-page-layout__left-toolbar-side">
          <ContentInfoMessage />
          <ClearQueryElement>✕ Clear</ClearQueryElement>
        </div>
      </template>

      <template #middle>
        <GridSorting :selectedLayout="selectedLayout" />
      </template>

      <template #right>
        <LayoutSwitcher
          :selectedLayout="selectedLayout"
          @switchLayout="(layout: LayoutType) => selectedLayout = layout"
        />
      </template>
    </ContentToolbar>

    <template v-if="totalShipsFound > 0">
      <ContentTable
        v-if="selectedLayout === 'table'"
        :shipsData="displayedShipsData"
      />
      <ContentGrid
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

.ship-page-layout__left-toolbar-side {
  display: flex;
  flex-wrap: wrap;
}
</style>
