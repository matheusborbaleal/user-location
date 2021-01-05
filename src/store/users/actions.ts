/* eslint-disable */
import { ISimpleUser } from '../../interfaces/iuser';
import { handleErrors } from '@/utils/handle-errors';
import fetch from '../../utils/fetch';
import { setUsers } from './types';

export const fetchUsers = () => ({ type: 'loadUsers' });
export const createUser = (user: ISimpleUser) => ({ type: 'registerUser', user });
export const login = (user: ISimpleUser) => ({ type: 'signIn', user });

const USERS_AUTOCOMPLETE_URL =
        process.env.NODE_ENV === 'production'
            ? 'https://reqres.in/api'
            : 'api';

export const actions = {

    loadUsers({ commit }: { commit: Function }) {
        return fetch(`${USERS_AUTOCOMPLETE_URL}/users?per_page=20`)
            .then(handleErrors)
            .then(res => {
                commit(setUsers, res.data);
            })
            .catch(error => {
                throw error;
            });
    },

    registerUser({ commit }: { commit: Function }, { user }: { user: ISimpleUser }) {
        return fetch(`${USERS_AUTOCOMPLETE_URL}/register`, {
            method: 'POST',
            body: JSON.stringify(user)
        })
            .then(handleErrors)
            .then(res => {
                return res;
            })
            .catch(error => {
                throw error[0].error;
            });
    },

    signIn({ commit }: { commit: Function }, { user }: { user: ISimpleUser }) {
        return fetch(`${USERS_AUTOCOMPLETE_URL}/login`, {
            method: 'POST',
            body: JSON.stringify(user)
        })
            .then(handleErrors)
            .then(res => {
                return res;
            })
            .catch(error => {
                throw error[0].error;
            });
    }
};

export default actions;