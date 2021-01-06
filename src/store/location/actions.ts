import { ILocation } from '@/interfaces/ilocation';
import axios from 'axios';
import { setNearbyLocations } from './types';

const APIKEY = 'AIzaSyCRumgMs4so4e_pjNMZe4EEw29ygunZFz8';

export const loadNearbyPlaces = (location: ILocation) => ({ type: 'getNearbyLocations', location });

export const actions = {
    getNearbyLocations({ commit }: { commit: Function }, { location }: { location: ILocation }) {
        return axios.get(`https://thingproxy.freeboard.io/fetch/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location.latitude},${location.longitude}&type=${location.type}&radius=5000&key=${APIKEY}`)
            .then(({ data }) => {
                commit(setNearbyLocations, data.results);
            })
            .catch(error => {
                throw error;
            });
    }
};

export default actions;