import { ILocation, ILocationState, IPlace } from '@/interfaces/ilocation';
import { setNearbyLocations, setSelectedPlace } from './types';

export const selectPlace = (location: IPlace) => ({ type: setSelectedPlace, location });

export const mutations = {

    [setNearbyLocations](state: ILocationState, locations: ILocation[]) {
        state.nearbyLocations = locations;
    },

    [setSelectedPlace](state: ILocationState, { location }: { location: IPlace }) {
        state.selectedPlace = location;
    }
};

export default mutations;