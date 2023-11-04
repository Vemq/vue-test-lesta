<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from 'pinia';
import { useFilteredShipsStore } from '../stores/filteredShips';
import { type SortField } from '../utils/types';
const filteredShipsStore = useFilteredShipsStore();

const props = defineProps<{
  sortField: SortField;
}>();

const { tableSorting } = storeToRefs(filteredShipsStore);
const { setTableSorting } = filteredShipsStore;

const isActiveSorting = computed(() => tableSorting.value && tableSorting.value.sortField === props.sortField);

const switchSorting = () => {
  const isAscending =
  isActiveSorting.value ? !tableSorting.value!.isAscending
      : false;
  setTableSorting(props.sortField, isAscending);
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
        <v-icon v-if="isActiveSorting" :name="`co-arrow-${tableSorting && tableSorting.isAscending  ? 'bottom': 'top'}`"/>
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
