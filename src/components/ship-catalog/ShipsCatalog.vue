<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import ShipCatalogToolbar from './toolbar/ShipCatalogToolbar.vue';
import InfoMessage from './toolbar/InfoMessage.vue';
import ClearQuery from './toolbar/ClearQuery.vue';
import GridSorting from './toolbar/GridSorting.vue';
import LayoutSwitcher from './toolbar/LayoutSwitcher.vue';
import Grid from './ShipsCatalogGrid.vue';
import Table from './ShipsCatalogTable.vue';

import { useDisplayedShipsStore } from '@/stores/displayedShips';

const { totalShipsFound, displayedShipsData } = storeToRefs(
  useDisplayedShipsStore()
);

const selectedLayout = ref<LayoutType>('grid');
</script>

<template>
  <div class="ship-page-layout__content">
    <ShipCatalogToolbar>
      <template #left>
        <div class="ship-page-layout__left-toolbar-side">
          <InfoMessage />
          <ClearQuery>✕ Clear</ClearQuery>
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
    </ShipCatalogToolbar>

    <template v-if="totalShipsFound > 0">
      <Table
        v-if="selectedLayout === 'table'"
        :shipsData="displayedShipsData"
      />
      <Grid
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
