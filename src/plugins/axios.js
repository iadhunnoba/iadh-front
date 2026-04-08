import axios from 'axios';
import router from '@/router';
import API_CONFIG from '@/config/api';

// Crear una instancia de axios
const instance = axios.create({
    baseURL: API_CONFIG.BASE_URL
});

/**
 * Interceptor para agregar el token de autenticación a todas las peticiones
 */
instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            // Aseguramos que la cabecera 'auth' esté presente
            config.headers[API_CONFIG.HEADERS.AUTH_HEADER] = token;
            console.log(`Petición a ${config.url} enviada con token en cabecera 'auth'`);
        } else {
            console.warn(`Petición a ${config.url} sin token en localStorage`);
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

/**
 * Interceptor para manejar respuestas y errores de autenticación
 */
instance.interceptors.response.use(
    response => {
        // Verificar si hay un nuevo token en la respuesta y actualizarlo
        const newToken = response.headers[API_CONFIG.HEADERS.TOKEN_HEADER];
        if (newToken) {
            localStorage.setItem('token', newToken);
        }
        return response;
    },
    error => {
        // Si hay error 401 (No autorizado), hacer logout y redirigir al login
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            
            if (router.currentRoute.path !== '/auth/login-boxed') {
                router.push('/auth/login-boxed');
            }
        }
        
        return Promise.reject(error);
    }
);

export default instance;