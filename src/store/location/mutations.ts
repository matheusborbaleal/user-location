import { ILocation, ILocationState } from '@/interfaces/ilocation';
import { setNearbyLocations, setSelectedPlace } from './types';

export const selectPlace = (location: ILocation) => ({ type: setSelectedPlace, location });

export const mutations = {

    [setNearbyLocations](state: ILocationState, locations: ILocation[]) {
        state.nearbyLocations = locations;
    },

    [setSelectedPlace](state: ILocationState, { location }: { location: ILocation }) {
        state.selectedPlace = location;
    }
};

export default mutations;