import moment from 'moment';
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { selectedPlace } from '../../../../store/location/types';
import { loggedUser } from '../../../../store/users/types';

@Component({
    name: 'location-info-sidebar',
    computed: {
        ...mapGetters({
            selectedPlace,
            loggedUser
        })
    },
    components: {
        LocationInfoAvaliation: () => import('./_avaliations/location-info-avaliation.vue')
    }
})

export default class LocationInfoSidebar extends Vue {
    // eslint-disable-next-line
    public selectedPlace: any;
    // eslint-disable-next-line
    public loggedUser: any;

    placeRate = null;
    placeAvaliation = '';
    // eslint-disable-next-line
    avaliations: any = JSON.parse(localStorage.getItem('place-avaliations') || '[]');

    publishAvaliation() {

        const place = {
            name: this.selectedPlace.name,
            user: `${this.currentUser.first_name} ${this.currentUser.last_name}`,
            avatar: this.currentUser.avatar,
            message: this.placeAvaliation,
            rate: this.placeRate,
            time: moment().format('LLL')
        };

        this.avaliations.unshift(place);

        localStorage.setItem('place-avaliations', JSON.stringify(this.avaliations));

        this.clearInputs();
    }

    clearInputs() {
        this.placeAvaliation = '';
        this.placeRate = this.selectedPlace.rating;
    }

    get isPlaceSelected() {
        return Object.keys(this.selectedPlace).length;
    }

    get currentUser() {
        if (Object.keys(this.loggedUser).length) {
            return this.loggedUser;
        } else {
            const user = JSON.parse(localStorage.getItem('user') as string);
            return user;
        }
    }

    get avaliationsByPlace() {
        if (this.avaliations.length) {
            // eslint-disable-next-line
            const byPlace = this.avaliations.reduce((arr: any, obj: any) => {
                const key = obj.name;
                if (!arr[key]) {
                    arr[key] = [];
                }
                arr[key].push(obj);
                return arr;
            }, {});

            return byPlace;
        } else {
            return [];
        }
    }

    mounted() {
        this.$root.$on('bv::toggle::collapse', () => {
            this.placeRate = this.selectedPlace.rating;
        });
    }

}