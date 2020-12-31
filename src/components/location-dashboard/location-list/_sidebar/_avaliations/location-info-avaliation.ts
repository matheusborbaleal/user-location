import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'location-info-avaliation',
})

export default class LocationInfoAvaliation extends Vue {

    @Prop()
    avaliation: any;
}