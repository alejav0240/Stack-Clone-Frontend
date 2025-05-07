// lib/api.ts
import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
});

// Utilidad para evitar múltiples intentos simultáneos de refresh
let isRefreshing = false;
let failedQueue: Array<{
    resolve: (value?: unknown) => void;
    reject: (reason?: unknown) => void;
}> = [];

const processQueue = (error: AxiosError | null, tokenRefreshed: boolean) => {
    failedQueue.forEach(p => {
        if (tokenRefreshed) {
            p.resolve(undefined);
        } else {
            p.reject(error);
        }
    });
    failedQueue = [];
};

// Interceptor de errores para manejo de 401
API.interceptors.response.use(
    response => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then(() => API(originalRequest));
            }

            isRefreshing = true;

            try {
                await axios.post(
                    `${process.env.NEXT_PUBLIC_API_URL}/auth/jwt/refresh/`,
                    {},
                    { withCredentials: true }
                );

                processQueue(null, true);
                return API(originalRequest);
            } catch (refreshError) {
                processQueue(refreshError as AxiosError, false);
                console.error("🔒 Token refresh failed", refreshError);
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default API;
