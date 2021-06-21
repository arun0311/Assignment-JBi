export interface IRegisterUser {
    name: string;
    email: string;
    userName: string;
    releaseDate: string;
    password: string;
    confirmPassword: string;
    contactNumber: number;
    address: string;
}

export interface IRegisteredUsers {
    id: string,
    name: string,
    email: string,
    bio: string,
    age: number 
    avatar: string
}
