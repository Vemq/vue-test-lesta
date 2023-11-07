<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from 'pinia';

import { useSortedShipsStore } from "../stores/sortedShips";

const props = defineProps<{
  sortField: SortField;
}>();

const sortedShipsStore = useSortedShipsStore();
const { sorting } = storeToRefs(sortedShipsStore);
const { setSortingData } = sortedShipsStore;

const isActiveSorting = computed(() => sorting.value && sorting.value.sortField === props.sortField);

function switchSorting() {
  const isAscending = isActiveSorting.value ? !sorting.value!.isAscending : true;  
  setSortingData(props.sortField, isAscending);
};
</script>

<template>
  <div class="sort-switcher" 
    :class="{'sort-switcher_active': isActiveSorting}" 
    @click="switchSorting">
    <div class="sort-switcher__content">
      <slot></slot>
      <span
        v-if="isActiveSorting"
        class="sort-switcher__arrow"        
      >
        <v-icon v-if="isActiveSorting" :name="`co-arrow-${sorting && sorting.isAscending  ? 'bottom': 'top'}`"/>
      </span>
    </div>
  </div>
</template>

<style>
.sort-switcher {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  user-select: none;
}

.sort-switcher_active {
  color: var(--color-heading);
}

.sort-switcher__content {
  position: relative;
}

.sort-switcher__arrow {
  position: absolute;
  right: -19px;
  font-weight: bold;
}
</style>
