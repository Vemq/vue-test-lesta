import { ref, computed } from 'vue'
import { type Ref } from 'vue';
import { defineStore } from 'pinia'

import { type ShipData, type NationInfo, type ShipTypeInfo, type ResultData, type LevelInfo } from "../utils/types";

export const useShipsDataStore = defineStore('allShips', () => {
    const shipsData = ref<ShipData[]>([]);

    const nationsData = ref<NationInfo[]>([]);
    const shipTypesData = ref<ShipTypeInfo[]>([]);

    const maxShipLevel = ref(11);
    const levelsData = computed<LevelInfo[]>(() => Array.from({ length: maxShipLevel.value }, (_, i) => ({
        name: String(i + 1),
        title: ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'][i] || String(i + 1),
    })))

    const nationSortOrder = computed(() => nationsData.value.map(nation => nation.name));
    const shipTypeSortOrder = computed(() => shipTypesData.value.map(shipType => shipType.name));

    function setDataToStore(result: Ref<ResultData> | null) {
        if (!result) return;
        shipsData.value = result.value.vehicles;
        nationsData.value = result.value.nations;

        shipTypesData.value = result.value.vehicleTypes.map(shipType => ({
            ...shipType,
            contour: shipsData.value.find(ship => ship.type.name === shipType.name)?.icons.contour ?? ''
        }));
    }

    return {
        shipsData,
        nationsData,
        shipTypesData,

        maxShipLevel,
        levelsData,

        nationSortOrder,
        shipTypeSortOrder,
        setDataToStore,
    }
})
