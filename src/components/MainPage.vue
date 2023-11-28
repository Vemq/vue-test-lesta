<script setup lang="ts">
import FiltersSearchToolbar from './filters-search-toolbar/FiltersSearchToolbar.vue';
import ShipsCatalog from './ship-catalog/ShipsCatalog.vue';
import ShipCategories from './ship-categories/ShipCategories.vue';
</script>

<template>
  <div class="main-page">
    <FiltersSearchToolbar />

    <Transition>
      <ShipsCatalog />
    </Transition>

    <Transition>
      <ShipCategories />
    </Transition>
  </div>
</template>

<style>
.main-page {
 padding: 2vh 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
