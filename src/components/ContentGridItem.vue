<script setup lang="ts">
import { ref } from "vue";
import PropIcon from './ui/PropIcon.vue';
import ModalContainer from './ModalContainer.vue';
import DescriptionCard from './DescriptionCard.vue';

import { type ShipData } from '../utils/types';
import toRomanLevel from '../utils/toRomanLevel';

const props = defineProps<ShipData>();
const showDescriptionCard = ref(false);
</script>

<template>
  <div class="grid-item" @click="showDescriptionCard = true">
    <div class="grid-item__info">
      <div class="grid-item__top">
        <span class="grid-item__name">{{ title.toUpperCase() }}</span>
        <PropIcon :iconImageLink="nation.icons.tiny" :title="nation.title" />
      </div>
      <div class="grid-item__bottom">
        <PropIcon :iconImageLink="type.icons.default" :title="type.title" />
        <div class="grid-item__level">{{ toRomanLevel(level) }}</div>
      </div>
    </div>

    <img class="grid-item__image" :src="icons.small" alt="ship image" />
    <div class="grid-item__description-popover">
    </div>

    <Teleport to="body">
      <ModalContainer :show="showDescriptionCard" @close="showDescriptionCard = false">
        <DescriptionCard v-bind="props" />
      </ModalContainer>
    </Teleport>
  </div>
</template>

<style>
.grid-item {
  display: flex;
  position: relative;
  height: 150px;
  width: 300px;
  border: 1px solid var(--color-border);
  cursor: pointer;
}

.grid-item:hover {
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border-hover);
  transition: all 0.2s;
}

.grid-item__info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  width: 100%;
  height: 100%;
  margin-left: 5px;
}

.grid-item__top {
  display: flex;
  align-self: flex-end;
  margin-right: 5px;
  z-index: 1;
}

.grid-item__bottom {
  display: flex;
  align-self: flex-end;
  margin-right: 15px;
}

.grid-item__name {
  color: var(--color-text);
  font-weight: bold;
  margin-right: 10px;
}

.grid-item__image {
  position: relative;
  object-fit: none;
  pointer-events: none;
}

.grid-item__description-popover {
  position: absolute;
  right: 50px;
  box-shadow: 10px 5px 5px red;
  z-index: 2;
}
</style>
