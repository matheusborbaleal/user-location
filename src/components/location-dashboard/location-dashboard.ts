import { loadNearbyPlaces } from '@/store/location/actions';
import { Component, Vue } from 'vue-property-decorator';
// eslint-disable-next-line
import { googlemaps } from 'googlemaps';
import { mapGetters } from 'vuex';
import { nearbyLocations } from '../../store/location/types';
import { logoutUser } from '@/store/users/mutations';

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

    // eslint-disable-next-line
    public nearbyLocations: any;

    selectedLocalType: string | null = 'restaurant';

    localTypes: {}[] = [
        { value: null, text: 'Selecione um tipo de local', disabled: true },
        { value: 'gym', text: 'Academias' },
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
        // eslint-disable-next-line
        const mapElement: any = document.getElementById('map');
        const location = new google.maps.Map(mapElement, {
            zoom: 14,
            center: new google.maps.LatLng(this.location.latitude, this.location.longitude),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        const infowindow = new google.maps.InfoWindow();
        // eslint-disable-next-line
        this.nearbyLocations.forEach((place: any, index: any) => {
            const lat = place.geometry.location.lat;
            const lng = place.geometry.location.lng;

            setTimeout(() => {
                const marker = new google.maps.Marker({
                    position: new google.maps.LatLng(lat, lng),
                    map: location,
                    animation: google.maps.Animation.DROP
                });
                google.maps.event.addListener(marker, 'click', () => {
                    infowindow.setContent(`
                    <div class="header">
                        <h5>${place.name}</h5>
                    </div>
                    <div style="display:flex;flex-direction:column;margin-bottom:0.5rem" >
                        <span>${place.vicinity}</span>
                    </div>`);
                    infowindow.open(location, marker);
                });
            }, index * 100);
        });
    }

    logout() {
        this.$store.commit(logoutUser());
        this.$router.push({ name: 'Login' });
    }

    mounted() {
        this.getCurrentLocation();
    }

}