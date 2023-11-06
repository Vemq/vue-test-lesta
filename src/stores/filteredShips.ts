import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'

import { useShipsDataStore } from "./shipsData";

export const useFilteredShipsStore = defineStore('filteredShips', () => {
    const selectedFilters = ref<SelectedFilters>({
        nations: [],
        types: [],
        levels: [],
    });

    const haveSelectedFilters = computed(() => Object.values(selectedFilters.value).some(filters => filters.length > 0));

    function getFilteredShips()  {
        const { shipsData } = storeToRefs(useShipsDataStore());
        const { nations, types, levels } = selectedFilters.value;

        return shipsData.value.filter(ship =>
            (!nations.length || nations.includes(ship.nation.name))
            && (!types.length || types.includes(ship.type.name))
            && (!levels.length || levels.includes(String(ship.level)))
        );
    }

    function setFilter(filterName: string, filterCategory: FiltersCategory, isAdd = true) {
        const filtersArray = selectedFilters.value[filterCategory];
        if (isAdd) {
            filtersArray.push(filterName);
        } else {
            filtersArray.splice(filtersArray.indexOf(filterName), 1);
        }
    }

    function clearFilters() {
        Object.values(selectedFilters.value).forEach(filters => filters.length = 0);
    }

    return {
        selectedFilters,
        haveSelectedFilters,
        
        getFilteredShips,
        setFilter,
        clearFilters,
    }
})
