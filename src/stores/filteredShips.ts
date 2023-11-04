import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'
import { type ShipData, type SelectedFilters, type FiltersCategory, type SortField, type Sorting } from "../utils/types";
import { useAllShipsStore } from "./allShips";

export const useFilteredShipsStore = defineStore('filteredShips', () => {
    const selectedFilters = ref<SelectedFilters>({
        nations: [],
        types: [],
        levels: [],
    });

    const serchInputValue = ref('');
    const searchQuery = ref('');

    const tableSorting = ref<Sorting | null>(null);

    const haveSelectedFilters = computed(() => searchQuery.value || Object.values(selectedFilters.value).some(filters => filters.length > 0));

    const filteredShipsData = computed<ShipData[]>(() => {
        const { shipsData } = storeToRefs(useAllShipsStore());
        let result: ShipData[] = [];
        if (haveSelectedFilters.value) {
            if (searchQuery.value) {
                result = shipsData.value.filter(ship => ship.title.toLowerCase().includes(searchQuery.value));
            } else {
                const { nations, types, levels } = selectedFilters.value;
                result = shipsData.value.filter(ship =>
                    (!nations.length || nations.includes(ship.nation.name))
                    && (!types.length || types.includes(ship.type.name))
                    && (!levels.length || levels.includes(String(ship.level)))
                );
            }
        }

        sortIfHaveTableSorting(result);
        return result;
    });

    const totalShipsFound = computed(() => filteredShipsData.value.length);

    function sortIfHaveTableSorting(dataToSort: ShipData[]) {
        if (!tableSorting.value) return;

        const sortField = tableSorting.value.sortField;
        const isAscending = tableSorting.value.isAscending;
        const sortOrder = tableSorting.value.sortOrder;

        dataToSort.sort((a, b) => {
            let valueA = a[sortField];
            let valueB = b[sortField];

            if (sortOrder && typeof valueA === 'object' && typeof valueB === 'object') {
                const indexA = sortOrder.indexOf(valueA.name);
                const indexB = sortOrder.indexOf(valueB.name);

                if (indexA === indexB) {
                    return 0;
                } else if (indexA === -1) {
                    return isAscending ? 1 : -1;
                } else if (indexB === -1) {
                    return isAscending ? -1 : 1;
                } else {
                    return isAscending ? indexA - indexB : indexB - indexA;
                }
            }

            if (typeof valueA === 'number' && typeof valueB === 'number') {
                return isAscending ? valueA - valueB : valueB - valueA;
            }

            if (typeof valueA === 'string' && typeof valueB === 'string') {
                return isAscending ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
            }
            return 0;
        });
    }

    function setTableSorting(sortField: SortField, isAscending: boolean) {
        const { nationSortOrder, shipTypeSortOrder } = storeToRefs(useAllShipsStore());           
        const sortOrder = (sortField === 'nation') ? nationSortOrder : (sortField === 'type') ? shipTypeSortOrder : undefined;

        const currentSorting: Sorting = {
            sortField,
            isAscending,
            sortOrder: (sortField === 'nation') ? nationSortOrder.value : (sortField === 'type') ? shipTypeSortOrder.value : undefined
        }

        tableSorting.value = currentSorting;
    }

    function setFilter(filterName: string, filterCategory: FiltersCategory, isAdd = true) {
        if (searchQuery.value) {
            setSerchQueryText('');
        }
        const filtersArray = selectedFilters.value[filterCategory];
        if (isAdd) {
            filtersArray.push(filterName);
        } else {
            filtersArray.splice(filtersArray.indexOf(filterName), 1);
        }
    };


    function setSerchQueryText(queryText: string) {
        clearFilters();
        serchInputValue.value = queryText;
        searchQuery.value = queryText.toLowerCase().trim();
    }

    function clearFilters() {
        Object.values(selectedFilters.value).forEach(filters => filters.length = 0);
        tableSorting.value = null;
        serchInputValue.value = '';
        searchQuery.value = '';        
    }

    return {
        serchInputValue,
        searchQuery,
        tableSorting,

        selectedFilters,
        haveSelectedFilters,
        filteredShipsData,
        totalShipsFound,

        setTableSorting,
        setFilter,
        sortIfHaveTableSorting,
        clearFilters,
        setSerchQueryText,
    }
})
