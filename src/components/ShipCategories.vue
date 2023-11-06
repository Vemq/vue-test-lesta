<script setup lang="ts">
import PropIcon from './ui/PropIcon.vue';
import ShipCategoriesSection from './ShipCategoriesSection.vue';
import { storeToRefs } from 'pinia';
import { useShipsDataStore } from '../stores/shipsData';

const { nationsData, shipTypesData, levelsData } = storeToRefs(useShipsDataStore());
</script>

<template>
  <div class="ship-categories">
    <ShipCategoriesSection
      v-slot="slotProps"
      title="Nation"
      category="nations"
      :filtersData="nationsData"
    >
      <img class="ship-categories__flag-image"
        :src="slotProps.filter.icons?.small"
        :alt="`flag image of ${slotProps.filter.title}`"
      />

      <p class="ship-categories__name">{{ slotProps.filter.title }}</p>
    </ShipCategoriesSection>

    <ShipCategoriesSection
      v-slot="slotProps"
      title="Type"
      category="types"
      :filtersData="shipTypesData"
    >     
      <img
        :src="slotProps.filter.contour"
        :alt="`contour image of ${slotProps.filter.name}`"
      />
      <PropIcon :iconImageLink="slotProps.filter.icons.default" />
      <p class="ship-categories__name">{{ slotProps.filter.title }}</p>
    </ShipCategoriesSection>

    <ShipCategoriesSection
      v-slot="slotProps"
      title="Tier"
      category="levels"
      :filtersData="levelsData"
    >
      <div class="ship-categories__level-item">{{ slotProps.filter.title }}</div>
    </ShipCategoriesSection>
  </div>
</template>

<style>
.ship-categories {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.ship-categories__list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
}

.ship-categories__name {
  text-align: center;
}

.ship-categories__level-item {
  font-size: 2rem;
  border: 1px solid var(--color-border);
  width: 60px;
  text-align: center;
}

.ship-categories__level-item:hover {
  border: 1px solid var(--color-border-hover);
}

.ship-categories__ship-type li:hover img {
  filter: invert(1);
  transition: all 0.2s ease-out;
}
</style>
../stores/shipsData