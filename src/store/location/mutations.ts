import { ILocation, ILocationState } from '@/interfaces/ilocation';
import { setNearbyLocations } from './types';

export const mutations = {

    [setNearbyLocations](state: ILocationState, locations: ILocation[]) {
        state.nearbyLocations = locations;
    }
};

export default mutations;