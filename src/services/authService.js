import axios from 'axios';

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

const authService = {
    async login(username, password) {
        try {
            const response = await axios.post('http://localhost:3000/auth/login', {
                username,
                password
            });

            if (response.data && response.data.token) {
                this.setToken(response.data.token);
                
                // Obtener información del usuario de la respuesta
                const user = response.data.user || { username };
                this.setUser(user);
                
                return { 
                    success: true, 
                    token: response.data.token,
                    user: user
                };
            }
        } catch (error) {
            // Extraer el mensaje de error de la respuesta
            const errorMessage = error.response?.data?.message || 'Error al iniciar sesión';
            return { 
                success: false, 
                error: errorMessage 
            };
        }
    },

    logout() {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(USER_KEY);
    },

    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    },

    setToken(token) {
        if (token) {
            localStorage.setItem(TOKEN_KEY, token);
        } else {
            localStorage.removeItem(TOKEN_KEY);
        }
    },

    getUser() {
        const userStr = localStorage.getItem(USER_KEY);
        return userStr ? JSON.parse(userStr) : null;
    },

    setUser(user) {
        if (user) {
            localStorage.setItem(USER_KEY, JSON.stringify(user));
        } else {
            localStorage.removeItem(USER_KEY);
        }
    },

    isAuthenticated() {
        return !!this.getToken();
    },

    hasRole(role) {
        const user = this.getUser();
        if (!user) {
            return false;
        }
        return user.role === role;
    },

    isAdmin() {
        return this.hasRole('ADMIN');
    }
};

export default authService;