<script setup lang="ts">
import { storeToRefs } from 'pinia';

import { useDisplayedShipsStore } from '../stores/displayedShips';
import { useFilteredShipsStore } from '../stores/filteredShips';
import { useSearchQueryStore } from '../stores/searchQuery';
import { useSortedShipsStore } from '../stores/sortedShips';

const { haveQueryOrFilters } = storeToRefs(useDisplayedShipsStore());
const { clearFilters } = useFilteredShipsStore();
const { setSortingData } = useSortedShipsStore();
const { setSerchQueryText } = useSearchQueryStore();

function clearCrossHandler() {
  clearFilters();
  setSerchQueryText('');
  setSortingData(null);
}
</script>

<template>
  <div class="clear-query-element">
    <span v-if="haveQueryOrFilters" @click="clearCrossHandler">
      <slot></slot>
    </span>
  </div>
</template>

<style>
.clear-query-element {
  display: inline-block;
  text-decoration: underline dotted;
  cursor: pointer;
  margin: 0 10px;
}
</style>
