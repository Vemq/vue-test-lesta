import { ref } from 'vue'
import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'

import { useShipsDataStore } from "./shipsData";

export const useSearchQueryStore = defineStore('searchQueryStore', () => {
    const serchInputValue = ref('');
    const searchQuery = ref('');

    function setSerchQueryText(queryText: string) {
        const query = queryText.toLowerCase().trim();
        serchInputValue.value = query;
        searchQuery.value = query;
    }

    function getShipsBySearchQuery() {
        const { shipsData } = storeToRefs(useShipsDataStore());
        return shipsData.value.filter(ship => ship.title.toLowerCase().includes(searchQuery.value));
    }

    return {
        serchInputValue,
        searchQuery,
        setSerchQueryText,
        getShipsBySearchQuery,
    }
})
