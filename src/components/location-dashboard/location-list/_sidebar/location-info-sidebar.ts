import { ILocation } from '@/interfaces/ilocation';
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { selectedPlace } from '../../../../store/location/types';
import { loggedUser } from '../../../../store/users/types';
import moment from 'moment';

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

    public selectedPlace: any;
    public loggedUser: any;

    placeRate = null;
    placeAvaliation = '';

    avaliations = JSON.parse(localStorage.getItem('place-avaliations') as string) ? JSON.parse(localStorage.getItem('place-avaliations') as string) : [];

    publishAvaliation() {

        const place = {
            name: this.selectedPlace.name,
            user: `${this.currentUser.first_name} ${this.currentUser.last_name}`,
            avatar: this.currentUser.avatar,
            message: this.placeAvaliation,
            rate: this.placeRate,
            time: moment().format('LLL')
        }

        this.avaliations.unshift(place);

        localStorage.setItem('place-avaliations', this.avaliations)

        this.clearInputs();
    }

    clearInputs(){
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

    mounted() {
        // console.log('this.avaliations', this.avaliations)
        // if (!this.avaliations) {
        //     localStorage.setItem('place-avaliations', '[]');
        // }

        this.$root.$on('bv::toggle::collapse', () => {
            this.placeRate = this.selectedPlace.rating;
        });
    }

}