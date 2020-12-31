import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
    name: 'user-profile-favorite',
})

export default class UserProfileFavorite extends Vue {

    @Prop()
    favorite: any
}