import { IUser, IUserState } from '@/interfaces/iuser';
import { setUsers, setLoggedUser, setUserToken, deleteUserToken } from './types';

export const mountLoggedUser = (loggedUser: IUser) => ({ type: setLoggedUser, loggedUser });
export const authUser = (userToken: string) => ({ type: setUserToken, userToken });
export const logoutUser = () => ({ type: deleteUserToken });

export const mutations = {
    [setUsers](state: IUserState, users: IUser[]) {
        state.users = users;
    },
    [setLoggedUser](state: IUserState, { loggedUser }: { loggedUser: IUser }) {
        state.loggedUser = loggedUser;
        return loggedUser;
    },
    //eslint-disable-next-line
    [setUserToken](state: IUserState, { userToken }: { userToken: string }) {
        localStorage.setItem('user-token', userToken);
    },
    //eslint-disable-next-line
    [deleteUserToken](state: IUserState) {
        localStorage.removeItem('user-token');
    }
};

export default mutations;