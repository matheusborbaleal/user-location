/* eslint-disable */
import axios from 'axios';
import { ISimpleUser } from '../../interfaces/iuser';
import { setUsers } from './types';

export const fetchUsers = () => ({ type: 'loadUsers' });
export const createUser = (user: ISimpleUser) => ({ type: 'registerUser', user });
export const login = (user: ISimpleUser) => ({ type: 'signIn', user });

export const actions = {

    loadUsers({ commit }: { commit: Function }) {
        return axios.get('https://reqres.in/api/users?per_page=20')
            .then(({ data }) => {
                commit(setUsers, data.data);
            })
            .catch(({ response }) => {
                throw response.data.error;
            });
    },

    registerUser({ commit }: { commit: Function }, { user }: { user: ISimpleUser }) {
        return axios({
            method: 'post',
            url: 'https://reqres.in/api/register',
            data: {
                email: user.email,
                password: user.password
            }
        })
            .then(({ data }) => {
                return data;
            })
            .catch(({ response }) => {
                throw response.data.error;
            });
    },

    signIn({ commit }: { commit: Function }, { user }: { user: ISimpleUser }) {
        return axios({
            method: 'post',
            url: 'https://reqres.in/api/login',
            data: {
                email: user.email,
                password: user.password
            }
        })
            .then(({ data }) => {
                return data;
            })
            .catch(({ response }) => {
                throw response.data.error;
            });
    }
};

export default actions;