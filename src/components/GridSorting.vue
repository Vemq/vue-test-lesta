<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';

import SortSwitcher from './SortSwitcher.vue';

import { useDisplayedShipsStore } from '../stores/displayedShips';

const props = defineProps<{
  selectedLayout: LayoutType;
}>();

const sortElements: { title: string; sortFildName: SortField }[] = [
  { title: 'Nation', sortFildName: 'nation' },
  { title: 'Type', sortFildName: 'type' },
  { title: 'Tier', sortFildName: 'level' },
  { title: 'Name', sortFildName: 'title' },
];

const { totalShipsFound } = storeToRefs(useDisplayedShipsStore());

const showGridSort = computed(
  () => totalShipsFound.value > 0 && props.selectedLayout === 'grid'
);
</script>

<template>
  <div v-if="showGridSort" class="grid-sorting">
    <span>Sort by:</span>
    <template v-for="(sortEl, i) in sortElements">
      <div class="grid-sorting-item">
        <SortSwitcher :sortField="sortEl.sortFildName">
          {{ sortEl.title }}
        </SortSwitcher>
      </div>

      <div v-if="i < sortElements.length - 1" class="grid-sorting-divider">
        |
      </div>
    </template>
  </div>
</template>

<style>
.grid-sorting {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  height: 100%;
}

.grid-sorting-item {
  text-decoration: underline dotted;
}

.grid-sorting-divider {
  color: var(--color-border);
  user-select: none;
}
</style>
