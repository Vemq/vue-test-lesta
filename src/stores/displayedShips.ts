import { computed } from 'vue'
import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'
 
import { useFilteredShipsStore } from "./filteredShips";
import { useSearchQueryStore } from "./searchQuery";
import { useSortedShipsStore } from "./sortedShips";

export const useDisplayedShipsStore = defineStore('displayedShips', () => {
    const { searchQuery } = storeToRefs(useSearchQueryStore());
    const { haveSelectedFilters } = storeToRefs(useFilteredShipsStore());
    const { sorting } = storeToRefs(useSortedShipsStore());
    const { sortShips } = useSortedShipsStore();

    const haveQueryOrFilters = computed(() => searchQuery.value || haveSelectedFilters.value);
    const totalShipsFound = computed(() => displayedShipsData.value.length);

    const displayedShipsData = computed<ShipData[]>(() => {
        let result: ShipData[] = [];

        if (searchQuery.value) {
            const { getShipsBySearchQuery } = useSearchQueryStore();
            result = getShipsBySearchQuery();
        }
        if (haveSelectedFilters.value) {
            const { getFilteredShips } = useFilteredShipsStore();
            result = getFilteredShips();
        }

        if (sorting.value) {
            sortShips(result);
        }

        return result;
    });

    return {
        haveQueryOrFilters,
        sorting,
        displayedShipsData,
        totalShipsFound,
    }
})
