<script setup lang="ts">
import { computed } from 'vue';
import SortSwitcher from './SortSwitcher.vue';
import { type SortField } from '../utils/types';
import { type LayoutType } from '../utils/types';
import { useFilteredShipsStore } from '../stores/filteredShips';

const props = defineProps<{
  selectedLayout: LayoutType;
}>();

defineEmits<{
  switchLayout: [layout: LayoutType];
  toggleFilters: [];
}>();

const filteredShipsStore = useFilteredShipsStore();

const sortElements: { title: string; sortFildName: SortField }[] = [
  { title: 'Nation', sortFildName: 'nation' },
  { title: 'Type', sortFildName: 'type' },
  { title: 'Tier', sortFildName: 'level' },
  { title: 'Name', sortFildName: 'title' },
];

const showGridSort = computed(
  () =>
    filteredShipsStore.totalShipsFound > 0 && props.selectedLayout === 'grid'
);

const selectedShipsMessage = computed(() => {
  if (!filteredShipsStore.haveSelectedFilters) {
    return 'Nothing selected. To begin, please choose a category below or set filters above.';
  }

  return `${ filteredShipsStore.searchQuery
    ? `Search query: "${filteredShipsStore.searchQuery}".`
    : ''}  ${filteredShipsStore.totalShipsFound > 0
    ? `Total ships found: ${filteredShipsStore.totalShipsFound}`
    : 'Nothing found with the specified parameters.'}`
});
</script>

<template>
  <div class="content-toolbar">
    <div class="content-toolbar__selected-ships-info">
      <span>{{ selectedShipsMessage }}</span>
      <span
        class="content-toolbar__clear-query"
        v-if="filteredShipsStore.haveSelectedFilters"
        @click="filteredShipsStore.clearFilters"
      >
        ✕ Clear
      </span>
    </div>

    <div v-if="showGridSort" class="content-toolbar__sort-by">
      <span>Sort by:</span>
      <template v-for="(sortEl, i) in sortElements">
        <div class="content-toolbar__sort-by-item">
          <SortSwitcher :sortField="sortEl.sortFildName">
            {{ sortEl.title }}
          </SortSwitcher>
        </div>

        <div
          v-if="i < sortElements.length - 1"
          class="content-toolbar__sort-by-divider"
        >
          |
        </div>
      </template>
    </div>

    <div
      class="content-toolbar__switch-layout"
      v-if="filteredShipsStore.totalShipsFound > 0"
    >
      <div
        @click="event => $emit('switchLayout', 'table')"
        class="content-toolbar__switch-button"
        :class="{ active: selectedLayout === 'table' }"
      >
        <v-icon name="fa-th-list" />Table
      </div>
      <div
        @click="event => $emit('switchLayout', 'grid')"
        class="content-toolbar__switch-button"
        :class="{ active: selectedLayout === 'grid' }"
      >
        <v-icon name="bi-grid-3x3-gap-fill" /> Grid
      </div>
    </div>
  </div>
</template>

<style>
.content-toolbar {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 15px 0;
  width: 100%;
}

.content-toolbar__selected-ships-info {
  display: flex;
  flex-wrap: wrap;
}

.content-toolbar__clear-query {
  text-decoration: underline dotted;
  cursor: pointer;
  margin: 0 10px;
}

.content-toolbar__sort-by {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  height: 100%;
}

.content-toolbar__sort-by-item {
  width: 60px;
  text-decoration: underline dotted;
}

.content-toolbar__sort-by-divider {
  color: var(--color-border);
}
.content-toolbar__switch-layout {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.content-toolbar__switch-button {
  display: flex;
  align-items: center;
  color: var(--color-border-hover);
  padding: 0 7px;
  gap: 8px;
  border-bottom: 2px solid transparent;
  user-select: none;
}

.content-toolbar__switch-button:hover {
  cursor: pointer;
  border-bottom: 2px solid var(--color-heading);
}

.content-toolbar__switch-button.active {
  color: var(--color-heading);
}
</style>
