import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL || 'http://localhost:3000';

// Usuario mock para testing
const MOCK_USER = {
    id: 1,
    username: 'testuser',
    email: 'test@example.com',
    nombre: 'Usuario',
    apellido: 'Test',
    role: 'teacher'
};

const MOCK_PASSWORD = 'Test123!';
const MOCK_TOKEN = 'mock-jwt-token-for-testing-12345';

// Flag para habilitar/deshabilitar el mock
const USE_MOCK = true; // Cambia a false para usar la API real

class AuthService {
    async login(email, password) {
        try {
            // Modo MOCK
            if (USE_MOCK) {
                console.log('🧪 Usando MOCK de autenticación');
                
                // Simular delay de red
                await new Promise(resolve => setTimeout(resolve, 500));

                // Validar credenciales mock
                if (email === MOCK_USER.email && password === MOCK_PASSWORD) {
                    // Guardar en localStorage
                    localStorage.setItem('token', MOCK_TOKEN);
                    localStorage.setItem('user', JSON.stringify(MOCK_USER));
                    
                    console.log('✅ Login exitoso con MOCK');
                    console.log('📧 Email:', email);
                    console.log('👤 Usuario:', MOCK_USER);
                    
                    return {
                        success: true,
                        user: MOCK_USER,
                        token: MOCK_TOKEN
                    };
                } else {
                    console.log('❌ Credenciales incorrectas');
                    return {
                        success: false,
                        error: 'Credenciales inválidas. Usa: test@example.com / Test123!'
                    };
                }
            }

            // Modo REAL - API
            console.log('🌐 Usando API real');
            const response = await axios.post(`${API_URL}/auth/login`, {
                email,
                password
            });

            if (response.data.success) {
                const { token, user } = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                return { success: true, user, token };
            }

            return {
                success: false,
                error: response.data.error || 'Error en el login'
            };

        } catch (error) {
            console.error('Login error:', error);
            return {
                success: false,
                error: error.response?.data?.error || 'Error de conexión con el servidor'
            };
        }
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        console.log('👋 Sesión cerrada');
    }

    isAuthenticated() {
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        return !!(token && user);
    }

    getCurrentUser() {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    }

    getToken() {
        return localStorage.getItem('token');
    }

    // Método para obtener info del mock (útil para testing)
    getMockCredentials() {
        return {
            email: MOCK_USER.email,
            password: MOCK_PASSWORD,
            user: MOCK_USER
        };
    }
}

export default new AuthService();