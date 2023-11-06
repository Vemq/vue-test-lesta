<script setup lang="ts" generic="T extends FilterInfo">
import { useFilteredShipsStore } from '../stores/filteredShips';

defineProps<{
  title: string;
  category: FiltersCategory;
  filtersData: T[];
}>();

const filteredShipsStore = useFilteredShipsStore(); 
</script>

<template>
  <div class="category-section">
    <h2 class="category-section__title">{{ title }}</h2>
    <ul class="category-section__list">
      <li class="category-section__list-item"
        v-for="filter in filtersData"
        @click="filteredShipsStore.setFilter(filter.name, category)"
      >
        <slot :filter="filter"></slot>
      </li>
    </ul>
  </div>
</template>

<style>
.category-section__title {
  text-align: center;
}

.category-section__list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  list-style-type: none;
}

.category-section__list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.1s;
  cursor: pointer;
}

.category-section__list-item:hover {
  transform: translateY(5px);
  transition: 0.2s;
  color: var(--color-heading);
  font-weight: bold;
  filter: saturate(1.3); 
}
</style>
