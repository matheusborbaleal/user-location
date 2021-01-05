import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { nearbyLocations } from '../../../store/location/types';

@Component({
    name: 'location-list',
    computed: {
        ...mapGetters({
            nearbyLocations
        })
    },
    components: {
        LocationListItem: () => import('./location-list-item/location-list-item.vue')
    },
})
export default class LocationList extends Vue {

}