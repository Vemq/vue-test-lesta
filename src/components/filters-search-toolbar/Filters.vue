<script setup lang="ts">
import { storeToRefs } from 'pinia';
import FiltersSection from './FiltersSection.vue';
import PropIcon from '../ui/PropIcon.vue';
import { useShipsDataStore} from '@stores/shipsData';

const { nationsData, shipTypesData, levelsData } = storeToRefs(
  useShipsDataStore()
);
</script>

<template>
  <div class="filters">
    <FiltersSection
      v-slot="slotProps"
      title="Nations"
      category="nations"
      :filtersData="nationsData"
    >
      <PropIcon :iconImageLink="slotProps.filter.icons.tiny" />
    </FiltersSection>

    <FiltersSection
      v-slot="slotProps"
      title="Types"
      category="types"
      :filtersData="shipTypesData"
    >
      <PropIcon :iconImageLink="slotProps.filter.icons.default" />
    </FiltersSection>

    <FiltersSection
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