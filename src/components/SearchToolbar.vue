<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import ShipFilters from './ShipFilters.vue';

import { useFilteredShipsStore } from '../stores/filteredShips';
import { useSearchQueryStore } from '../stores/searchQuery';

const showFilters = ref(false);

const searchQueryStore = useSearchQueryStore();
const { serchInputValue } = storeToRefs(searchQueryStore);
const { setSerchQueryText } = searchQueryStore;

const filteredShipsStore = useFilteredShipsStore();
const { haveSelectedFilters } = storeToRefs(filteredShipsStore);
const { clearFilters } = filteredShipsStore;

const searchButtonHandler = () => {
  if (haveSelectedFilters.value && !serchInputValue.value) return;
  clearFilters();
  setSerchQueryText(serchInputValue.value);
};
</script>

<template>
  <div class="search-toolbar">
    <span class="search-toolbar__filters" @click="showFilters = !showFilters">
      <v-icon name="fa-filter" :fill="showFilters && 'var(--color-heading)'" />
      Filters
    </span>

    <form @submit.prevent="searchButtonHandler">
      <label class="search-toolbar__search-lable">
        Search:
        <input
          v-model="serchInputValue"
          class="search-toolbar__search-input"
          placeholder="Enter ship name"
        />
        <button
          v-if="serchInputValue"
          @click="setSerchQueryText('')"
          type="button"
          class="search-toolbar__clear-button"
        >
          ⨉
        </button>
        <button class="search-toolbar__search-button">
          <v-icon name="hi-solid-search" />
        </button>
      </label>
    </form>
  </div>

  <Transition>
    <ShipFilters v-show="showFilters" />
  </Transition>
</template>

<style>
.search-toolbar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  background-color: var(--color-background-mute);
  padding: 10px;
  border: 1px solid var(--color-border);
}

.search-toolbar__filters {
  text-decoration: underline dotted;
  cursor: pointer;
  user-select: none;
  margin: 0 5px;
}

.search-toolbar__search-lable {
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 28px;
}

.search-toolbar__search-input {
  color: var(--color-text);
  background-color: var(--color-background-soft);
  border: 1px solid var(--color-border);
  height: 100%;
  width: 200px;
  margin-left: 5px;
  padding: 0 5px;
}

.search-toolbar__search-button {
  height: 100%;
  color: var(--color-text);
  background-color: var(--color-background-mute);
  border: 1px solid var(--color-border);
  padding: 0 5px;
  cursor: pointer;
}

.search-toolbar__search-input:focus,
.search-toolbar__search-button:focus {
  outline: none;
  border: 1px solid var(--color-text);
}

.search-toolbar__search-button:hover {
  color: var(--color-heading);
}

.search-toolbar__search-button:active {
  border: 1px solid var(--color-heading);
}

.search-toolbar__clear-button {
  position: absolute;
  right: 35px;
  color: var(--color-border);
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.search-toolbar__clear-button:hover {
  color: var(--color-text);
}
</style>
