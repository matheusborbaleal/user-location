import { ILocationState } from '@/interfaces/ilocation';
import { nearbyLocations, selectedPlace } from './types';

export default {
    [nearbyLocations]: (state: ILocationState) => state.nearbyLocations,
    [selectedPlace]: (state: ILocationState) => state.selectedPlace
};