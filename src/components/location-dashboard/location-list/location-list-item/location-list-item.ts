import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
    name: 'location-list-item',
})
export default class LocationListItem extends Vue {

    @Prop()
    location: any;

}