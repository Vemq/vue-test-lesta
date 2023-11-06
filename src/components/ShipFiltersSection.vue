<script setup lang="ts" generic="T extends FilterInfo">
import CheckboxLabel from './ui/CheckboxLabel.vue';
import { type FiltersCategory, type FilterInfo } from '../utils/types';

import { useFilteredShipsStore } from '../stores/filteredShips';
import { useSearchQueryStore } from "../stores/searchQuery";

const props = defineProps<{
  title: string;
  category: FiltersCategory;
  filtersData: T[];
}>();

const { setSerchQueryText } = useSearchQueryStore();
const filteredStore = useFilteredShipsStore();

const isChecked = (filter: string) => filteredStore.selectedFilters[props.category].includes(filter);

function checkBoxToggle(filter: string, filterCategory: FiltersCategory, checked: boolean) {
  setSerchQueryText('');
  filteredStore.setFilter(filter, filterCategory, checked);
}
</script>

<template>
  <div class="filters-section">
    <h2 class="filters-section__title">{{ title }}</h2>
    <div class="filters-section__labels">
      <CheckboxLabel
        v-for="filter in filtersData"
        @toggle="checkBoxToggle(filter.name, category, $event)"
        :value="filter.name"
        :is-checked="isChecked(filter.name)"
      >
        <slot :filter="filter"></slot>
        {{ filter.title }}
      </CheckboxLabel>
    </div>
  </div>
</template>

<style>
.filters-category {
  padding: 0 50px;
}

.filters-section__title {
  text-align: center;
}

.filters-section__labels {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  gap: 0 15px;
  max-height: 180px;
  margin: 0 10px;
}
</style>
