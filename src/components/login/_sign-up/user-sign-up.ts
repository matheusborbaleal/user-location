import { TypeNotification } from '@/interfaces/inotification';
import { ISimpleUser, IUser } from '@/interfaces/iuser';
import { emmitNewNotification } from '@/store/notifications/actions';
import { createUser } from '@/store/users/actions';
import { authUser, mountLoggedUser } from '@/store/users/mutations';
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { users } from '../../../store/users/types';

@Component({
    name: 'user-sign-up',
    computed: {
        ...mapGetters({
            users
        })
    },
})

export default class UserSignUp extends Vue {

    // eslint-disable-next-line
    public users: any;

    passwordToConfirm = '';

    signUpUser: ISimpleUser = {
        email: '',
        password: '',
    };

    clearInput() {
        this.signUpUser = {
            email: '',
            password: '',
        };
        this.passwordToConfirm = '';
    }

    registerUser() {

        if (this.isPasswordValid()) {
            this.$store.dispatch(createUser(this.signUpUser))
                .then((res) => {
                    this.$store.commit(authUser(res.token));
                    this.setLoggedUser();
                    this.$store.dispatch(emmitNewNotification({
                        title: 'Sucesso',
                        message: 'Usuário registrado com sucesso!',
                        type: TypeNotification.SUCCESS,
                    }));
                    this.$router.push({ name: 'LocationDashboard' });
                })
                .catch((err) => {
                    console.log('err', err);
                    const error = this.signUpValidator(err);
                    this.$store.dispatch(emmitNewNotification({
                        title: 'Erro',
                        message: error ? error : err,
                        type: TypeNotification.DANGER,
                    }));
                    this.clearInput();
                });
        } else {
            this.clearInput();
            this.$store.dispatch(emmitNewNotification({
                title: 'Erro',
                message: 'As senhas não conferem!',
                type: TypeNotification.DANGER,
            }));
        }

    }

    signUpValidator(error: string) {

        switch (error) {
            case 'Missing email or username':
                return 'É necessário preencher o email do usuário!';
            case 'Missing password':
                return 'É necessário preencher o campo de senha!';
            case 'Note: Only defined users succeed registration':
                return 'Apenas usuários pré-definidos podem ser registrados! Ex: rachel.howell@reqres.in';
            default:
                return '';
        }
    }

    isPasswordValid() {

        if (this.passwordToConfirm !== this.signUpUser.password) {
            return false;
        } else {
            return true;
        }
    }

    setLoggedUser() {
        this.users.find((user: IUser) => {
            if (user.email === this.signUpUser.email.trim()) {
                this.$store.commit(mountLoggedUser(user));
                localStorage.setItem('user', JSON.stringify(user));
            }
        });
    }

    signUpHandler() {
        this.$emit('sign-up-form-handler');
    }

}