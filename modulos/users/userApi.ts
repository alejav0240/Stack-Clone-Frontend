import {User, UserLogin} from "@/modulos/users/userType";
import api from "@/lib/api";
import {isAxiosError} from "axios";


const LOGIN_ENDPOINT = '/auth/create-cookie/';
const SIGNUP_ENDPOINT = '/auth/users/';
const LOGOUT_ENDPOINT = '/auth/users/';

const PROFILE_ENDPOINT = '/auth/me/';
const EDIT_ENDPOINT = '/auth/users/';
const DELETE_ENDPOINT = '/auth/users/';

export async function loginUser(formData: UserLogin): Promise<User> {
    try {
        const response = await api.post<User>(LOGIN_ENDPOINT, formData);

        return response.data;
    } catch (error: unknown) {
        console.log(error);
        if (isAxiosError(error) && error.response) {
            const detail = (error.response.data as { detail?: string }).detail;
            throw new Error(detail || "Error en la autenticación.");
        }

        throw new Error("Ocurrió un error inesperado al iniciar sesión.");
    }
}

export async function logoutUser(): Promise<void> {
    try {
        await api.post(LOGOUT_ENDPOINT);
    } catch (error: unknown) {
        if (isAxiosError(error) && error.response) {
            const detail = (error.response.data as { detail?: string }).detail;
            throw new Error(detail || "Error al cerrar sesión.");
        }

        throw new Error("Ocurrió un error inesperado al cerrar sesión.");
    }
}

export async function signupUser(formData: User): Promise<User> {
    try {
        const response = await api.post<User>(SIGNUP_ENDPOINT, formData);
        return response.data;
    } catch (error: unknown) {
        if (isAxiosError(error) && error.response) {
            const detail = (error.response.data as { detail?: string }).detail;
            throw new Error(detail || "Error al registrar el usuario.");
        }

        throw new Error("Ocurrió un error inesperado al registrar el usuario.");
    }
}

export async function getProfile(): Promise<User> {
    try {
        const { data } = await api.get<User>(PROFILE_ENDPOINT);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const message = (error.response.data as { error?: string }).error;
            throw new Error(message || "Error al obtener el perfil.");
        }

        throw new Error("Error inesperado al obtener los datos del usuario.");
    }
}

export async function editProfielr(user: User): Promise<User> {
    try {
        const { data } = await api.put<User>(EDIT_ENDPOINT, user);
        return data;
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const message = (error.response.data as { error?: string }).error;
            throw new Error(message || "Error al editar el perfil.");
        }

        throw new Error("Error inesperado al editar el perfil.");
    }
}

export async function deleteUser(user: User): Promise<void> {
    try {
        await api.delete(DELETE_ENDPOINT, { data: user });
    } catch (error: unknown) {
        if (isAxiosError(error) && error.response) {
            const message = (error.response.data as { error?: string }).error;
            throw new Error(message || "Error al eliminar el user.");
        }
        throw new Error("Error inesperado al eliminar el user.");
    }
}