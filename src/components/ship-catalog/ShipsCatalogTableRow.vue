<script setup lang="ts">
import PropIcon from '../ui/PropIcon.vue';
import toRomanLevel from "../../utils/toRomanLevel";
import type { ShipItemProps } from "../../types/props";

defineProps<ShipItemProps>();
</script>

<template>
  <tr class="table-row">
    <td class="table-row__cell table-row-nation">
      <PropIcon :iconImageLink="flagImageLink" :title="nation" />
    </td>

    <td class="table-row__cell table-row-type">
      <PropIcon :iconImageLink="typeIconLink" :title="type" />
    </td>

    <td class="table-row__cell table-row-level">{{ toRomanLevel(level) }}</td>

    <td class="table-row__cell table-row-image">
      <img :src="shipImageLink" :alt="`contour of ${title}`" />
    </td>

    <td class="table-row__cell table-row-title">{{ title }}</td> 
  </tr>
</template>

<style>
.table-row {
  border-top: 1px solid var(--color-border);
  background-color: var(--color-background-soft);
  transition: 0.1s;
  cursor: pointer;
}

.table-row:hover {
  border-top: 1px solid var(--color-border-hover);
  background-color: var(--color-background-mute);
  transition: 0.1s;
}

.table-row__cell {
  text-align: center;
}

td.table-row-title {
  text-align: left;
  width: 40%;
}

.table-row-image {
  width: 30%;
}

.table-row-type,
.table-row-level {
  width: 7%;
}

.table-row-nation {
  width: 11%;
}
</style>
