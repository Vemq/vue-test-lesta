<script setup lang="ts">
import { ref } from "vue";
import PropIcon from '../ui/PropIcon.vue';
import ModalContainer from '../ModalContainer.vue';
import DescriptionCard from './DescriptionCard.vue';
import toRomanLevel from "../../utils/toRomanLevel";
import type { ShipData } from "../../types/shipDataType.d.ts";

const props = defineProps<ShipData>();
const showDescriptionCard = ref(false)
</script>

<template>
  <tr class="table-row" @click="showDescriptionCard = true">

    <td class="table-row__cell table-row-nation">
      <PropIcon :iconImageLink="nation.icons.tiny" :title="nation.title" />
    </td>

    <td class="table-row__cell table-row-type">
      <PropIcon :iconImageLink="type.icons.default" :title="type.title" />
    </td>

    <td class="table-row__cell table-row-level">{{ toRomanLevel(level) }}</td>

    <td class="table-row__cell table-row-image">
      <img :src="icons.contour" :alt="`Contour of ${title}`" />
    </td>

    <td class="table-row__cell table-row-title">{{ title }}</td>

    <Teleport to="body">
      <ModalContainer :show="showDescriptionCard" @close="showDescriptionCard = false">
        <DescriptionCard v-bind="props" />
      </ModalContainer>
    </Teleport>    
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
