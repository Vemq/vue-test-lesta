<script setup lang="ts">
import TableRow from './ShipsCatalogTableRow.vue';
import SortSwitcher from './SortSwitcher.vue';
import type { ShipCardProps } from '../../types/props';

defineProps<{
  shipsData: ShipData[];
}>();

defineEmits<{
  showShipCard: [descriptionCardData: ShipCardProps];
}>();

const tableFields: { title: string; sortFildName?: SortField }[] = [
  { title: 'Nation', sortFildName: 'nation' },
  { title: 'Type', sortFildName: 'type' },
  { title: 'Tier', sortFildName: 'level' },
  { title: 'Image' },
  { title: 'Name', sortFildName: 'title' },
];
</script>

<template>
  <table class="table-layout">
    <thead>
      <th
        v-for="field in tableFields"
        :class="`table-layout__header-cell table-layout__header-${field.title.toLowerCase()}-cell`"
      >
        <SortSwitcher
          v-if="field.sortFildName"
          :sortField="field.sortFildName"
          :style="field.title === 'Name' && { justifyContent: 'start' }"
          >{{ field.title }}</SortSwitcher
        >
        <span v-else="">{{ field.title }}</span>
      </th>
    </thead>

    <tbody>
      <TableRow
        v-for="{
          id,
          title,
          level,
          description,
          type,
          nation,
          icons,
        } in shipsData"
        :key="id"
        :title="title"
        :nation="nation.title"
        :type="type.title"
        :level="level"
        :shipImageLink="icons.contour"
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
    </tbody>
  </table>
</template>

<style>
.table-layout {
  width: 80%;
  border-collapse: collapse;
}

.table-layout thead {
  height: 50px;
}

.table-layout__header-cell {
  height: 100%;
  color: var(--color-heading);
  vertical-align: middle;
  background-color: var(--color-background-soft);
}

.table-layout__header-cell:not(.table-layout__header-image-cell):hover {
  background-color: var(--color-background-mute);
}

.table-layout__header-name-cell {
  padding-left: 15px;
  text-align: left;
}
</style>
