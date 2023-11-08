<script setup lang="ts">
import InfoMessage from './InfoMessage.vue';
import ClearQuery from './ClearQuery.vue';
import GridSorting from './GridSorting.vue';
import LayoutSwitcher from './LayoutSwitcher.vue';

defineProps<{
  selectedLayout: LayoutType;
}>();

defineEmits<{
  switchLayout: [layout: LayoutType];
}>();
</script>

<template>
  <div class="content-toolbar">
    <div class="ship-page-layout__left-toolbar-side">
      <InfoMessage />
      <ClearQuery>✕ Clear</ClearQuery>
    </div>

    <GridSorting :selectedLayout="selectedLayout" />

    <LayoutSwitcher
      :selectedLayout="selectedLayout"
      @switchLayout="layout => $emit('switchLayout', layout)"
    />
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
</style>
