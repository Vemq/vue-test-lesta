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
import GridItem from './ShipsCatalogGridItem.vue';
import TableRow from './ShipsCatalogTableRow.vue';

import ShipCard from './ShipCard.vue';
import ModalContainer from '../ModalContainer.vue';

import { useDisplayedShipsStore } from '@/stores/displayedShips';

import type { ShipCardProps } from '../../types/props';

const catalogLayouts = {
  table: {
    base: Table,
    item: TableRow,
  },
  grid: {
    base: Grid,
    item: GridItem,
  },
};

const selectedLayout = ref<LayoutType>('table');
const shipCardData = ref<ShipCardProps | null>(null);

const { totalShipsFound, displayedShipsData } = storeToRefs(
  useDisplayedShipsStore()
);
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

    <component
      v-if="totalShipsFound > 0"
      :is="catalogLayouts[selectedLayout].base"
    >
      <template
        v-for="{
          id,
          title,
          level,
          description,
          type,
          nation,
          icons,
        } in displayedShipsData"
        :key="id"
      >
        <component
          :is="catalogLayouts[selectedLayout].item"
          :title="title"
          :nation="nation.title"
          :type="type.title"
          :level="level"
          :shipImageLink="
            icons[selectedLayout === 'grid' ? 'small' : 'contour']
          "
          :flagImageLink="nation.icons.tiny"
          :typeIconLink="type.icons.default"
          @click="
            shipCardData = {
              title,
              nation: nation.title,
              type: type.title,
              level,
              shipImageLink: icons.large,
              flagImageLink: nation.icons.large,
              typeIconLink: type.icons.default,
              description,
            }
          "
      /></template>
    </component>

    <Teleport to="body">
      <ModalContainer :show="!!shipCardData" @close="shipCardData = null">
        <ShipCard v-if="shipCardData" v-bind="shipCardData" />
      </ModalContainer>
    </Teleport>
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
