<script setup lang="ts">
import TableRow from './ContentTableRow.vue';
import SortSwitcher from './SortSwitcher.vue';

defineProps<{
  shipsData: ShipData[];
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
          :style="field.title === 'Name' && {justifyContent: 'start'}"
          >{{ field.title }}</SortSwitcher
        >
        <span v-else="">{{ field.title }}</span>
      </th>
    </thead>

    <tbody>
      <TableRow
        v-for="{
          title,
          level,
          description,
          type,
          nation,
          icons,
          id,
        } in shipsData"
        :key="id"
        :title="title"
        :description="description"
        :level="level"
        :type="type"
        :nation="nation"
        :icons="icons"
        :id="id"
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
