<script setup lang="ts">
import toRomanLevel from '../../utils/toRomanLevel'
import type { ShipData } from "../../types/shipDataType.d.ts";

defineProps<ShipData>();
</script>

<template>
    <div class="description-card">
        <div class="description-card__top">
            <div class="description-card__info">
                <p class="description-card__title">{{ title.toUpperCase() }}</p>
                <p>{{ `Tier ${toRomanLevel(level)} ${type.title}` }}</p>
                <p>{{ nation.title }}</p>
            </div>
            <div class="description-card__flag" :style="{ 'background-image': `url(${nation.icons.large})` }"></div>
            <img class="description-card__image description-card__image_ship" :src="icons.large" alt="ship image" />
        </div>
        <div class="description-card__text"> {{ description }}</div>
    </div>
</template>

<style>
.description-card {
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 600px;
    padding: 30px;
    border: 1px solid var(--color-border);
    background-color: var(--color-background-mute);
}

.description-card__top {
    position: relative;
    height: 310px;
}

.description-card__info{
    text-align: right;
}

.description-card__title {
    font-size: 1.5rem;
    font-weight: bold;
}

.description-card__flag {
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 70%;
    top: 0;
    opacity: 0.5;
}

.description-card__image {
    width: 100%;
    object-fit: contain;
}

.description-card__image_flag {
    width: 70%;
}

.description-card__image_ship {
    position: absolute;
    bottom: 0;
}

.description-card__text {
    padding-top: 10px;
    border-top: 1px solid var(--color-border);
}
</style>
