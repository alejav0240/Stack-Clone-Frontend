import axios from "axios";

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true, // 👈 Las cookies se enviarán automáticamente
});

// Manejar errores (como 401 y refresh automático)
API.interceptors.response.use(
    response => response,
    async error => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Intentar refrescar el token usando cookies
                await axios.post("http://localhost:8000/api/auth/jwt/refresh/", {}, { withCredentials: true });

                // Reintentar la solicitud original
                return API(originalRequest);
            } catch (refreshError) {
                console.error("❌ Error al refrescar token", refreshError);
                // Si falla el refresh, forzar logout
                if (typeof window !== "undefined") {
                    window.location.href = "/auth/signin";  // Redirigir al login
                }
            }
        }

        return Promise.reject(error);
    }
);

export default API;