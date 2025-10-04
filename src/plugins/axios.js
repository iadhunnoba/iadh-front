import axios from 'axios';
import authService from '@/services/authService';
import router from '@/router';
import API_CONFIG from '@/config/api';

/**
 * Interceptor para agregar el token de autenticación a todas las peticiones
 */
axios.interceptors.request.use(
    config => {
        const token = authService.getToken();
        if (token) {
            config.headers[API_CONFIG.HEADERS.AUTH_HEADER] = token;
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
axios.interceptors.response.use(
    response => {
        // Verificar si hay un nuevo token en la respuesta y actualizarlo
        const newToken = response.headers[API_CONFIG.HEADERS.TOKEN_HEADER];
        if (newToken) {
            authService.setToken(newToken);
        }
        return response;
    },
    error => {
        // Si hay error 401 (No autorizado), hacer logout y redirigir al login
        if (error.response?.status === 401) {
            authService.logout();
            
            // Solo redirigir si no estamos ya en la página de login
            if (router.currentRoute.path !== '/auth/login-boxed') {
                router.push('/auth/login-boxed');
            }
        }
        
        return Promise.reject(error);
    }
);

export default axios;