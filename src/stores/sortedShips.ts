import { ref } from "vue";
import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'

import { type ShipData, type SortField, type Sorting } from "../utils/types";
import { useShipsDataStore } from "./shipsData";

export const useSortedShipsStore = defineStore('sortedShips', () => {
    const sorting = ref<Sorting | null>(null);

    function sortShips(dataToSort: ShipData[]) {
        if (!sorting.value) return;

        const sortField = sorting.value.sortField;
        const isAscending = sorting.value.isAscending;
        const sortOrder = sorting.value.sortOrder;

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

    function setSortingData(sortField: SortField | null, isAscending = false) {
        if (sortField === null) {
            sorting.value = null;
        }

        if (sortField) {
            const { nationSortOrder, shipTypeSortOrder } = storeToRefs(useShipsDataStore());
            const sortOrder = (sortField === 'nation') ? nationSortOrder.value : (sortField === 'type') ? shipTypeSortOrder.value : undefined;

            const currentSorting: Sorting = {
                sortField,
                isAscending,
                sortOrder,
            }

            sorting.value = currentSorting;
        }
    }

    return {
        sorting,
        sortShips,
        setSortingData,
    }
})


