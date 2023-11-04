
export type LayoutType = 'grid' | 'table'
export type FiltersCategory = 'nations' | 'types' | 'levels'
export type SortField = 'nation' | 'type' | 'title' | 'level'

export type FilterInfo = NationInfo | ShipTypeInfo | LevelInfo

export interface Sorting {
    sortField: SortField 
    isAscending: boolean
    sortOrder?: string[]
}

export interface ShipData {
    id: string
    title: string
    description: string
    icons: {
        large: string
        small: string
        contour: string
    }
    level: number
    type: {
        name: string
        title: string
        icons: {
            default: string
        }
    }
    nation: {
        name: string
        title: string
        icons: {
            large: string
            tiny: string
        }
    }
}

export interface LevelInfo {
    name: string
    title: string
}

export interface ShipTypeInfo {
    name: string
    title: string
    contour?: string
    icons: {
        default: string
    }
}

export interface NationInfo {
    name: string
    title: string
    color: string
    icons: {
        tiny: string
        small: string
    }
}

export interface ResultData {
    vehicles: ShipData[];
    vehicleTypes: ShipTypeInfo[];
    nations: NationInfo[];
}

export interface SelectedFilters {
    nations: string[],
    levels: string[],
    types: string[],
}