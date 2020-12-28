import { loadNearbyPlaces } from '@/store/location/actions';
import { Component, Vue } from 'vue-property-decorator';
// eslint-disable-next-line
import { googlemaps } from 'googlemaps';
import { mapGetters } from 'vuex';
import { nearbyLocations } from '../../store/location/types';
import { loggedUser } from '../../store/users/types';

@Component({
    name: 'location-dashboard',
    components: {
        LocationList: () => import('./location-list/location-list.vue')
    },
    computed: {
        ...mapGetters({
            nearbyLocations,
            loggedUser
        })
    },
})
export default class LocationDashboard extends Vue {

    public nearbyLocations: any;
    public loggedUser: any;

    location = {
        latitude: 0,
        longitude: 0,
        type: '',
    };

    async getCurrentLocation() {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                this.location.latitude = position.coords.latitude;
                this.location.longitude = position.coords.longitude;
                this.location.type = 'restaurant';
                await this.$store.dispatch(loadNearbyPlaces(this.location));
                this.addLocationsToGoogleMaps();
            },
        );
    }

    addLocationsToGoogleMaps() {
        const mapElement: any = document.getElementById('map');
        const location = new google.maps.Map(mapElement, {
            zoom: 14,
            center: new google.maps.LatLng(this.location.latitude, this.location.longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        const infowindow = new google.maps.InfoWindow();
        this.nearbyLocations.forEach((place: any) => {
            const lat = place.geometry.location.lat;
            const lng = place.geometry.location.lng;
            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(lat, lng),
                map: location,
            });
            google.maps.event.addListener(marker, 'click', () => {
                infowindow.setContent(`<div class="ui header">${place.name}</div><p>${place.vicinity}</p>`);
                infowindow.open(location, marker);
            });
        });
    }

    get currentUser() {
        if (Object.keys(this.loggedUser).length) {
            return this.loggedUser;
        } else {
            const user = JSON.parse(localStorage.getItem('user') as string);
            return user;
        }
    }

    mounted() {
        this.getCurrentLocation();
    }

}