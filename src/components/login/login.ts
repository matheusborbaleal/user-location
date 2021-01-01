import { logoutUser } from '@/store/users/mutations';
import { Component, Vue } from 'vue-property-decorator';
import { fetchUsers } from '../../store/users/actions';

@Component({
  name: 'login',
  components: {
    UserSignIn: () => import('./_sign-in/user-sign-in.vue'),
    UserSignUp: () => import('./_sign-up/user-sign-up.vue'),
  }
})
export default class Login extends Vue {

  isCreating = false;

  registerFormHandler() {
    this.isCreating = !this.isCreating;
  }

  get isAuthenticated() {
    return localStorage.getItem('user-token') ? true : false;
  }

  mounted() {
    this.$store.dispatch(fetchUsers());

    if (!this.isAuthenticated) {
      this.$store.commit(logoutUser());
    }
  }

}
