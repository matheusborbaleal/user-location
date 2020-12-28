import { ILocation } from '@/interfaces/ilocation';
import { handleErrors } from '@/utils/handle-errors';
import fetch from '../../utils/fetch';
import { setNearbyLocations } from './types';

const APIKEY = 'AIzaSyCRumgMs4so4e_pjNMZe4EEw29ygunZFz8';

export const loadNearbyPlaces = (location: ILocation) => ({ type: 'getNearbyLocations', location });

export const actions = {
    getNearbyLocations({ commit }: { commit: Function }, { location }: { location: ILocation }) {
        return fetch(`place/nearbysearch/json?location=${location.latitude},${location.longitude}&type=${location.type}&radius=5000&key=${APIKEY}`)
            .then(handleErrors)
            .then(res => {
                commit(setNearbyLocations, res.results);
            })
            .catch(error => {
                throw error;
            });
    }
};

export default actions;