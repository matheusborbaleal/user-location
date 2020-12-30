import { ILocation } from '@/interfaces/ilocation';
import { selectPlace } from '@/store/location/mutations';
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { nearbyLocations } from '../../../../store/location/types';
import { loggedUser } from '../../../../store/users/types';

@Component({
    name: 'location-list-item',
    computed: {
        ...mapGetters({
            nearbyLocations,
            loggedUser
        })
    },
})
export default class LocationListItem extends Vue {

    public loggedUser: any;

    @Prop()
    location: any;

    choosePlace(location: ILocation) {
        this.$store.commit(selectPlace(location));
    }

    favoritePlaceMethod(location: string) {
        // const userName = this.loggedUser.first_name;
        // const favoritePlaceByUser = { userName: { favoritesPlaces: { places: location } } };
    }

}