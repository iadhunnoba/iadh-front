// Configuración de la API

const API_CONFIG = {
    // URL base de la API
    BASE_URL: process.env.VUE_APP_API_URL || 'http://localhost:3000',
    
    // Endpoints
    ENDPOINTS: {
        // Autenticación
        LOGIN: '/auth/login',
        CHANGE_PASSWORD: '/auth/change-password',
        
        // Usuarios
        USERS: '/users',
        USER_BY_ID: (id) => `/users/${id}`,
        STUDENTS_LIST: '/users/students',
        
        // Sesiones de RCP
        RCP_SESSION_START: (id) => `/students/${id}/rcp-sessions/start`,
        RCP_SESSION_END: (id, sessionId) => `/students/${id}/rcp-sessions/${sessionId}/end`,
        RCP_SESSION_HISTORY: (id) => `/students/${id}/rcp-sessions`,
        RCP_SESSION_BY_ID: (id, sessionId) => `/students/${id}/rcp-sessions/${sessionId}`,
        RCP_SESSION_UPDATE_OBS: (id, sessionId) => `/students/${id}/rcp-sessions/${sessionId}`,
    },
    
    // Headers
    HEADERS: {
        AUTH_HEADER: 'auth',  // Nombre del header para el token según la documentación
        TOKEN_HEADER: 'token' // Nombre del header de respuesta con el nuevo token
    },
    
    // Timeout para las peticiones (en milisegundos)
    TIMEOUT: 10000
};

// Helper para obtener la URL completa de un endpoint
export const getApiUrl = (endpoint) => {
    return `${API_CONFIG.BASE_URL}${endpoint}`;
};

// Helper para obtener el token del localStorage
export const getAuthToken = () => {
    return localStorage.getItem('token');
};

// Helper para guardar el token en localStorage
export const setAuthToken = (token) => {
    localStorage.setItem('token', token);
};

// Helper para eliminar el token
export const removeAuthToken = () => {
    localStorage.removeItem('token');
};

// Helper para obtener headers con autenticación
export const getAuthHeaders = () => {
    const token = getAuthToken();
    if (!token) {
        throw new Error('No hay token de autenticación');
    }
    return {
        [API_CONFIG.HEADERS.AUTH_HEADER]: token
    };
};

export default API_CONFIG;