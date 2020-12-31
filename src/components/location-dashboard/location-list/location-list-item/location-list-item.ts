import { IPlace } from '@/interfaces/ilocation';
import { selectPlace } from '@/store/location/mutations';
import { Component, Prop, Vue } from 'vue-property-decorator';
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

    // eslint-disable-next-line
    public loggedUser: any;

    @Prop()
    // eslint-disable-next-line
    location: any;

    isLocationFavorited = false;

    choosePlace(location: IPlace) {
        this.$store.commit(selectPlace(location));
    }

    get currentUser() {
        if (Object.keys(this.loggedUser).length) {
            return this.loggedUser;
        } else {
            const user = JSON.parse(localStorage.getItem('user') as string);
            return user;
        }
    }

    favoritePlaceMethod(locationName: string) {

        const favorites = JSON.parse(localStorage.getItem('favorite-places') || '[]');

        const place = {
            name: locationName,
            user: this.currentUser.id,
        };

        // eslint-disable-next-line
        const index = favorites.findIndex((item: any) => {
            if (item.user === place.user) {
                if (item.name === place.name) {
                    return true;
                }
            }
        });

        if (index > -1) {
            favorites.splice(index, 1);
        } else {
            favorites.push(place);
        }

        localStorage.setItem('favorite-places', JSON.stringify(favorites));

        this.isLocationFavorited = this.checkIfIsFavorited();
    }

    checkIfIsFavorited() {
        const favorites = JSON.parse(localStorage.getItem('favorite-places') || '[]');

        // eslint-disable-next-line
        const index = favorites.findIndex((item: any) => {
            if (item.user === this.currentUser.id) {
                if (item.name === this.location.name) {
                    return true;
                }
            }
        });

        if (index > -1) {
            return true;
        } else {
            return false;
        }
    }

    mounted() {
        this.isLocationFavorited = this.checkIfIsFavorited();
    }

}