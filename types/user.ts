export type User = {
    id: number;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    age: number;
    rol: string;
    rank: string;
    habilitado: boolean;
    created_at: string;
}

export type UserLogin = Pick<User, 'username'> & {
    password: string;
};

export type UserRegister = Pick<User, 'username' | 'email' | 'first_name' | 'last_name'> & {
    password: string;
};