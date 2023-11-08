<script setup lang="ts">
import PropIcon from '../ui/PropIcon.vue';
import toRomanLevel from '../../utils/toRomanLevel';
import type { ShipItemProps } from "../../types/props";

defineProps<ShipItemProps>();
</script>

<template>
  <div class="grid-item">
    <div class="grid-item__info">
      <div class="grid-item__top">
        <span class="grid-item__name">{{ title.toUpperCase() }}</span>
        <PropIcon :iconImageLink="flagImageLink" :title="nation" />
      </div>
      <div class="grid-item__bottom">
        <PropIcon :iconImageLink="typeIconLink" :title="type" />
        <div class="grid-item__level">{{ toRomanLevel(level) }}</div>
      </div>
    </div>

    <img class="grid-item__image" :src="shipImageLink" alt="ship image" />
    <div class="grid-item__description-popover"></div>
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
