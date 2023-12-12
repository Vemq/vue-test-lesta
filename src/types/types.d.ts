type LayoutType = 'grid' | 'table';
type FiltersCategory = 'nations' | 'types' | 'levels';
type SortField = 'nation' | 'type' | 'title' | 'level';

type FilterInfo = NationInfo | ShipTypeInfo | LevelInfo;

interface ShipData {
    id: string;
    title: string;
    description: string;
    icons: {
        large: string;
        small: string;
        contour: string;
    }
    level: number
    type: {
        name: string;
        title: string;
        icons: {
            default: string;
        }
    }
    nation: {
        name: string;
        title: string;
        icons: {
            large: string;
            tiny: string;
        }
    }
}

interface Sorting {
    sortField: SortField;
    isAscending: boolean;
    sortOrder?: string[];
}

interface LevelInfo {
    name: string;
    title: string;
}

interface ShipTypeInfo {
    name: string;
    title: string;
    contour?: string;
    icons: {
        default: string;
    }
}

interface NationInfo {
    name: string;
    title: string;
    color: string;
    icons: {
        tiny: string;
        large: string;
    }
}

interface ResultData {
    vehicles: ShipData[];
    vehicleTypes: ShipTypeInfo[];
    nations: NationInfo[];
}

interface SelectedFilters {
    nations: string[];
    levels: string[];
    types: string[];
}