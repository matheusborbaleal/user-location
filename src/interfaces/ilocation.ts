export interface ILocation {
    latitude: number;
    longitude: number;
    type: string;
}

export interface ILocationState {
    nearbyLocations: ILocation[];
    selectedPlace: ILocation;
}