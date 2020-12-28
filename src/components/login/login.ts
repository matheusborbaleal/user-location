import { ISimpleUser, IUser } from '@/interfaces/iuser';
import { createUser, fetchUsers, login } from '../../store/users/actions';
import { Vue, Component } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { mountLoggedUser } from '@/store/users/mutations';
import { users } from '../../store/users/types';
import { emmitNewNotification } from '@/store/notifications/actions';
import { ITypeNotification } from '@/interfaces/inotification';

@Component({
  name: 'login',
  computed: {
    ...mapGetters({
      users
    })
  },
})
export default class Login extends Vue {

  public users: any;

  isCreating = false;

  passwordToConfirm = '';

  signInUser: ISimpleUser = {
    email: '',
    password: ''
  };

  signUpUser: ISimpleUser = {
    name: '',
    email: '',
    password: '',
  };

  clearInputs() {
    this.signInUser = {
      email: '',
      password: ''
    };

    this.signUpUser = {
      name: '',
      email: '',
      password: '',
    };
    this.passwordToConfirm = '';
  }

  signUpHandler() {
    this.isCreating = !this.isCreating;
    this.clearInputs();
  }

  registerUser() {
    this.$store.dispatch(createUser(this.signUpUser))
      .then(() => {
        this.$store.dispatch(emmitNewNotification({
          title: 'Sucesso',
          message: 'Usuário registrado com sucesso!',
          type: ITypeNotification.SUCCESS,
        }));
        this.$router.push({ name: 'LocationDashboard' });
      })
      .catch((err) => {
        this.clearInputs();
        const error = this.signUpValidator(err);
        this.$store.dispatch(emmitNewNotification({
          title: 'Erro',
          message: error ? error : err,
          type: ITypeNotification.DANGER,
        }));
      });
  }

  signUpValidator(error: string) {

    switch (error) {
      case 'Missing email or username':
        return 'É necessário preencher o email do usuário!';
      case 'Missing password':
        return 'É necessário preencher o campo de senha!';
      case 'Note: Only defined users succeed registration':
        return 'Apenas usuários pré-definidos podem ser registrados!';
      default:
        return '';
    }

  }

  signIn() {
    this.$store.dispatch(login(this.signInUser))
      .then(() => {
        this.setLoggedUser();
        this.$router.push({ name: 'LocationDashboard' });
      })
      .catch((err) => {
        this.clearInputs();
        const validatedError = this.signInValidator(err);
        this.$store.dispatch(emmitNewNotification({
          title: 'Erro',
          message: validatedError ? validatedError : err,
          type: ITypeNotification.DANGER,
        }));
      });
  }

  signInValidator(error: string) {

    switch (error) {
      case 'Missing email or username':
        return 'É necessário preencher o email do usuário!';
      case 'Missing password':
        return 'É necessário preencher o campo de senha!';
      case 'user not found':
        return 'Usuário não encontrado!';
      default:
        return '';
    }

  }

  setLoggedUser() {
    this.users.find((user: IUser) => {
      if (user.email === this.signInUser.email.trim()) {
        this.$store.commit(mountLoggedUser(user));
        localStorage.setItem('user', JSON.stringify(user));
      }
    });
  }

  mounted() {
    this.$store.dispatch(fetchUsers());
  }

}
