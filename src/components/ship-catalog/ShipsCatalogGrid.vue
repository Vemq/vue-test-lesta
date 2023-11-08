<script setup lang="ts">
import GridItem from './ShipsCatalogGridItem.vue';
import type { ShipCardProps } from "../../types/props";

defineProps<{
  shipsData: ShipData[];
}>();

defineEmits<{
  showShipCard: [descriptionCardData: ShipCardProps];
}>();
</script>

<template>
  <div class="grid-layout">
    <TransitionGroup name="list">
      <GridItem
        v-for="{
          id,
          title,
          level,
          description,
          type,
          nation,
          icons
        } in shipsData"
        :key="id"
        :title="title"
        :nation="nation.title"
        :type="type.title"
        :level="level"   
        :shipImageLink="icons.small"
        :flagImageLink="nation.icons.tiny"
        :typeIconLink="type.icons.default"
        @click="
          $emit('showShipCard', {
            title,
            nation: nation.title,
            type: type.title,
            level,
            shipImageLink: icons.large,
            flagImageLink: nation.icons.large,
            typeIconLink: type.icons.default,
            description,
          })
        "
      />
    </TransitionGroup>
  </div>
</template>

<style>
.grid-layout {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 110%;
  gap: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
