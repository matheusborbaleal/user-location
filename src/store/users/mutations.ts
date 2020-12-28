import { IUser, IUserState } from '@/interfaces/iuser';
import { setUsers, setLoggedUser } from './types';

export const mountLoggedUser = (loggedUser: IUser) => ({ type: setLoggedUser, loggedUser });

export const mutations = {
    [setUsers](state: IUserState, users: IUser[]) {
        state.users = users;
    },
    [setLoggedUser](state: IUserState, { loggedUser }: { loggedUser: IUser }) {
        state.loggedUser = loggedUser;
    }
};

export default mutations;