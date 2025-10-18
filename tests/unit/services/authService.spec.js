// Primero limpiar el cache de módulos
jest.resetModules();

// Mock de axios ANTES de importar el servicio
jest.mock('axios');

// Mock de API_CONFIG ANTES de importar el servicio
jest.mock('@/config/api', () => ({
    __esModule: true,
    default: {
        BASE_URL: 'http://localhost:3000',
        TIMEOUT: 5000,
        ENDPOINTS: {
            LOGIN: '/auth/login',
            CHANGE_PASSWORD: '/auth/change-password'
        },
        HEADERS: {
            AUTH_HEADER: 'auth',
            TOKEN_HEADER: 'auth'
        }
    },
    getApiUrl: (endpoint) => `http://localhost:3000${endpoint}`
}));

// Importar DESPUÉS de los mocks
import authService from '@/services/authService';
import axios from 'axios';

describe('AuthService', () => {
    beforeEach(() => {
        // Limpiar localStorage antes de cada test
        localStorage.clear();
        // Limpiar todos los mocks
        jest.clearAllMocks();
    });

    afterEach(() => {
        // Limpiar después de cada test
        localStorage.clear();
    });

    describe('login', () => {
        it('should login successfully and store token and user in localStorage', async () => {
            // Arrange
            const mockResponse = {
                data: {
                    token: 'mock-jwt-token-12345',
                    user: {
                        id: 1,
                        username: 'testuser',
                        name: 'Test',
                        surname: 'User',
                        role: 'ADMIN'
                    }
                }
            };

            axios.post.mockResolvedValue(mockResponse);

            // Act
            const result = await authService.login('testuser', 'password123');

            // Assert
            expect(result.success).toBe(true);
            expect(result.user).toEqual(mockResponse.data.user);
            expect(authService.getToken()).toBe('mock-jwt-token-12345');
            expect(authService.getUser()).toEqual(mockResponse.data.user);
        });

        it('should handle login error with custom message', async () => {
            // Arrange
            const errorMessage = 'Invalid credentials';
            axios.post.mockRejectedValue({
                response: {
                    data: {
                        message: errorMessage
                    }
                }
            });

            // Act
            const result = await authService.login('wronguser', 'wrongpass');

            // Assert
            expect(result.success).toBe(false);
            expect(result.error).toBe(errorMessage);
            expect(authService.getToken()).toBeNull();
            expect(authService.getUser()).toBeNull();
        });

        it('should handle login error without response message', async () => {
            // Arrange
            axios.post.mockRejectedValue(new Error('Network error'));

            // Act
            const result = await authService.login('testuser', 'password');

            // Assert
            expect(result.success).toBe(false);
            expect(result.error).toBe('Error al iniciar sesión');
            expect(authService.getToken()).toBeNull();
        });
    });

    describe('logout', () => {
        it('should clear token and user from localStorage', () => {
            // Arrange
            authService.setToken('test-token');
            authService.setUser({ id: 1, username: 'test' });

            // Act
            authService.logout();

            // Assert
            expect(authService.getToken()).toBeNull();
            expect(authService.getUser()).toBeNull();
        });
    });

    describe('getToken and setToken', () => {
        it('should store and retrieve token from localStorage', () => {
            // Act
            authService.setToken('test-token-abc');

            // Assert
            expect(authService.getToken()).toBe('test-token-abc');
            expect(localStorage.getItem('token')).toBe('test-token-abc');
        });

        it('should return null when token does not exist', () => {
            // Assert
            expect(authService.getToken()).toBeNull();
        });
    });

    describe('isAuthenticated', () => {
        it('should return true when token exists', () => {
            // Arrange
            authService.setToken('valid-token');
            // Assert
            expect(authService.isAuthenticated()).toBe(true);
        });

        it('should return false when token does not exist', () => {
            // Assert
            expect(authService.isAuthenticated()).toBe(false);
        });
    });

    describe('hasRole', () => {
        it('should return true when user has the specified role', () => {
            // Arrange
            authService.setUser({ role: 'ADMIN' });
            // Assert
            expect(authService.hasRole('ADMIN')).toBe(true);
        });

        it('should return false when user does not have the specified role', () => {
            // Arrange
            authService.setUser({ role: 'USER' });
            // Assert
            expect(authService.hasRole('ADMIN')).toBe(false);
        });

        it('should return false when user does not exist', () => {
            // Assert
            expect(authService.hasRole('ADMIN')).toBe(false);
        });
    });

    describe('isAdmin', () => {
        it('should return true when user is admin', () => {
            // Arrange
            authService.setUser({ role: 'ADMIN' });
            // Assert
            expect(authService.isAdmin()).toBe(true);
        });

        it('should return false when user is not admin', () => {
            // Arrange
            authService.setUser({ role: 'USER' });
            // Assert
            expect(authService.isAdmin()).toBe(false);
        });

        it('should return false when no user is logged in', () => {
            // Assert
            expect(authService.isAdmin()).toBe(false);
        });
    });
});