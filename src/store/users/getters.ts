import { IUserState } from '@/interfaces/iuser';
import { loggedUser, users } from './types';

export default {

    [users]: (state: IUserState) => state.users,
    [loggedUser]: (state: IUserState) => state.loggedUser,
};