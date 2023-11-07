<script setup lang="ts">
import { storeToRefs } from 'pinia';
import ShipFiltersSection from './ShipFiltersSection.vue';
import PropIcon from './ui/PropIcon.vue';
import { useShipsDataStore} from '../stores/shipsData';

const { nationsData, shipTypesData, levelsData } = storeToRefs(
  useShipsDataStore()
);
</script>

<template>
  <div class="filters">
    <ShipFiltersSection
      v-slot="slotProps"
      title="Nations"
      category="nations"
      :filtersData="nationsData"
    >
      <PropIcon :iconImageLink="slotProps.filter.icons.tiny" />
    </ShipFiltersSection>

    <ShipFiltersSection
      v-slot="slotProps"
      title="Types"
      category="types"
      :filtersData="shipTypesData"
    >
      <PropIcon :iconImageLink="slotProps.filter.icons.default" />
    </ShipFiltersSection>

    <ShipFiltersSection
      title="Tiers"
      category="levels"
      :filtersData="levelsData"
    />
  </div>
</template>

<style>
.filters {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 15px;
  gap: 10%;
}
</style>