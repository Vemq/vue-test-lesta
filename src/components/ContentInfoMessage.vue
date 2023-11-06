<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import { useDisplayedShipsStore } from '../stores/displayedShips';
import { useSearchQueryStore } from '../stores/searchQuery';

const { haveQueryOrFilters, totalShipsFound } = storeToRefs(
  useDisplayedShipsStore()
);

const searchQueryStore = useSearchQueryStore();
const { searchQuery } = storeToRefs(searchQueryStore);

const selectedShipsMessage = computed(() => {
  if (!haveQueryOrFilters.value) {
    return 'Nothing selected. To begin, please choose a category below or set filters above.';
  }

  return `${
    searchQuery.value ? `Search query: "${searchQuery.value}".` : ''
  }  ${
    totalShipsFound.value > 0
      ? `Total ships found: ${totalShipsFound.value}`
      : 'Nothing found with the specified parameters.'
  }`;
});
</script>

<template>
  <div class="content-info-message">
    <span>{{ selectedShipsMessage }}</span>
  </div>
</template>

