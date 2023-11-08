export interface ShipItemProps {
    title: string;
    nation: string;
    type: string;
    level: number;
    shipImageLink: string;
    flagImageLink: string;
    typeIconLink: string;
}


export interface ShipCardProps extends Omit<ShipItemProps, 'typeIcon'> {
    description: string;
}
