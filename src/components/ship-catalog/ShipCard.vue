x
<script setup lang="ts">
import toRomanLevel from '../../utils/toRomanLevel';
import type { ShipCardProps } from "../../types/props";

defineProps<ShipCardProps>();
defineEmits<{
    close: [];
}>()
</script>

<template>
  <div class="ship-card">
    <span class="ship-card__close-cross" @click="() => ($emit('close'))">🗙</span>
    <div class="ship-card__top">
      <div class="ship-card__info">
        <p class="ship-card__title">{{ title.toUpperCase() }}</p>
        <p>{{ `Tier ${toRomanLevel(level)} ${type}` }}</p>
        <p>{{ nation }}</p>
      </div>
      <div
        class="ship-card__flag"
        :style="{ 'background-image': `url(${flagImageLink})` }"
      ></div>
      <img
        class="ship-card__image ship-card__image_ship"
        :src="shipImageLink"
        alt="ship image"
      />
    </div>
    <div class="ship-card__text">{{ description }}</div>
  </div>
</template>

<style>
.ship-card {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 600px;
  width: 90vw;
  padding: 30px;
  border: 1px solid var(--color-border);
  background-color: var(--color-background-mute);
}

.ship-card__close-cross {
    position: absolute;
    top: 0;
    right: 5px;
    color: var(--color-border-hover);
    cursor: pointer;
    user-select: none;
    z-index: 1;    
}

.ship-card__close-cross:hover {
    color: var(--color-text); 
}

.ship-card__top {
  position: relative;
  height: min(300px, 40vw);
}

.ship-card__info {
  text-align: right;
}

.ship-card__title {
  font-size: 1.5rem;
  font-weight: bold;
}

.ship-card__flag {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 70%;
  top: 0;
  opacity: 0.5;
}

.ship-card__image {
  width: 100%;
  object-fit: contain;
}

.ship-card__image_flag {
  width: 70%;
}

.ship-card__image_ship {
  position: absolute;
  bottom: 0;
}

.ship-card__text {
  padding-top: 10px;
  border-top: 1px solid var(--color-border);
}
</style>
