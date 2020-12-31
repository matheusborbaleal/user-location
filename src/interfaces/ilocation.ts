export interface ILocation {
    latitude: number;
    longitude: number;
    type: string;
}

export interface IPlace {
    name: string;
    icon: string;
    opening_hours: {
        open_now: boolean;
    };
    vicinity: string;
    user_ratings_total: number;
}

export interface ILocationState {
    nearbyLocations: ILocation[];
    selectedPlace: IPlace;
}