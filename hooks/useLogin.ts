import { useMutation } from '@tanstack/react-query';
import API from '@/lib/api';
import { useRouter } from 'next/navigation';
import {UserLogin, UserRegister} from "@/types/user";

type LoginCredentials = {
    user:  UserLogin
};

type SignupData = {
    user: UserRegister
};

const LOGIN_ENDPOINT = '/auth/jwt/create/';
const SIGNUP_ENDPOINT = '/auth/users/';

export const useLogin = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: async ({user}: LoginCredentials) => {
            await API.post(LOGIN_ENDPOINT, user);
        },
        onSuccess: () => {
            router.push('/');
        },
        onError: (error) => {
            console.error('Error en login:', error);
        },
    });
};

export const useSignup = () => {
    const router = useRouter();

    return useMutation({
        mutationFn: async ({user}: SignupData) => {
            await API.post(SIGNUP_ENDPOINT, user);
        },
        onSuccess: () => {
            router.push('/auth/signin');
        },
        onError: (error) => {
            console.error('Error en signup:', error);
        },
    });
};