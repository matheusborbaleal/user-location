import { ILocationState } from '@/interfaces/ilocation';
import { nearbyLocations } from './types';

export default {
    [nearbyLocations]: (state: ILocationState) => state.nearbyLocations
};