export interface ISimpleUser {
    name?: string;
    email: string;
    password: string;
}

export interface IUser {
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export interface IUserState {
    loggedUser: IUser;
    users: IUser[];
    userToken: string;
}