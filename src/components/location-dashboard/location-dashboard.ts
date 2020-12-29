import { loadNearbyPlaces } from '@/store/location/actions';
import { Component, Vue } from 'vue-property-decorator';
// eslint-disable-next-line
import { googlemaps } from 'googlemaps';
import { mapGetters } from 'vuex';
import { nearbyLocations } from '../../store/location/types';

@Component({
    name: 'location-dashboard',
    components: {
        LocationList: () => import('./location-list/location-list.vue'),
        UserProfile: () => import('./user-profile/user-profile.vue'),
        UserProfileSidebar: () => import('./user-profile/_sidebar/user-profile-sidebar.vue'),
        LocationInfoSidebar: () => import('./location-list/_sidebar/location-info-sidebar.vue')
    },
    computed: {
        ...mapGetters({
            nearbyLocations,
        })
    },
})
export default class LocationDashboard extends Vue {

    public nearbyLocations: any;

    selectedLocalType: string | null = 'restaurant';

    localTypes: {}[] = [
        { value: null, text: 'Selecione um tipo de local', disabled: true },
        { value: 'gym', text: 'Academias' },
        { value: 'airport', text: 'Aeroportos' },
        { value: 'bank', text: 'Bancos' },
        { value: 'bar', text: 'Bares' },
        { value: 'movie_theater', text: 'Cinemas' },
        { value: 'pharmacy', text: 'Farmácias' },
        { value: 'hospital', text: 'Hospitais' },
        { value: 'restaurant', text: 'Restaurantes' },
        { value: 'shopping_mall', text: 'Shoppings' },
        { value: 'supermarket', text: 'Supermercados' },
    ];

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
                this.location.type = this.selectedLocalType as string;
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

    mounted() {
        this.getCurrentLocation();
    }

}