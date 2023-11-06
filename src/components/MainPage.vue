<script setup lang="ts">
import SearchToolbar from './SearchToolbar.vue';
import ContentSection from './ContentSection.vue';
import ShipCategories from './ShipCategories.vue';

import { useDisplayedShipsStore } from '../stores/displayedShips';
const displayedShipsStore = useDisplayedShipsStore(); 

</script>

<template>
  <div class="main-page">
    <SearchToolbar />

    <Transition>
      <ContentSection />
    </Transition>

    <Transition>
      <ShipCategories v-if="!displayedShipsStore.haveQueryOrFilters" />
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
