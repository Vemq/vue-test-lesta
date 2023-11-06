<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { type LayoutType } from '../utils/types';
import { useDisplayedShipsStore } from '../stores/displayedShips';

defineProps<{
  selectedLayout: LayoutType;
}>();

defineEmits<{
  switchLayout: [layout: LayoutType];
}>();

const { totalShipsFound } = storeToRefs(useDisplayedShipsStore());
</script>

<template>
  <div class="layout-switcher" v-if="totalShipsFound > 0">
    <div
      @click="$emit('switchLayout', 'table')"
      class="layout-switcher__switch-button"
      :class="{ active: selectedLayout === 'table' }"
    >
      <v-icon name="fa-th-list" />Table
    </div>
    <div
      @click="$emit('switchLayout', 'grid')"
      class="layout-switcher__switch-button"
      :class="{ active: selectedLayout === 'grid' }"
    >
      <v-icon name="bi-grid-3x3-gap-fill" /> Grid
    </div>
  </div>
</template>

<style>
.layout-switcher {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.layout-switcher__switch-button {
  display: flex;
  align-items: center;
  color: var(--color-border-hover);
  padding: 0 7px;
  gap: 8px;
  border-bottom: 2px solid transparent;
  user-select: none;
}

.layout-switcher__switch-button:hover {
  cursor: pointer;
  border-bottom: 2px solid var(--color-heading);
}

.layout-switcher__switch-button.active {
  color: var(--color-heading);
}
</style>
