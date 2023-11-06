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
