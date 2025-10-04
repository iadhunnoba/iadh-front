import { shallowMount, createLocalVue } from '@vue/test-utils';
import BootstrapVue from 'bootstrap-vue';
import LoginBoxed from '@/views/auth/login_boxed.vue';
import authService from '@/services/authService';

// Mock de la configuración SASS
jest.mock('@/assets/sass/authentication/auth-boxed.scss', () => ({}));

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe('LoginBoxed.vue', () => {
    let wrapper;
    let mockPush;

    // Guardar los métodos originales
    const originalIsAuthenticated = authService.isAuthenticated;
    const originalLogin = authService.login;

    beforeEach(() => {
        // Limpiar localStorage
        localStorage.clear();

        // Mock del router
        mockPush = jest.fn();

        // Mockear solo los métodos que necesitamos
        authService.isAuthenticated = jest.fn().mockReturnValue(false);
        authService.login = jest.fn();

        // Crear el wrapper
        wrapper = shallowMount(LoginBoxed, {
            localVue,
            mocks: {
                $router: {
                    push: mockPush
                },
                $route: {
                    query: {}
                }
            },
            stubs: {
                'router-link': true
            }
        });
    });

    afterEach(() => {
        // Restaurar métodos originales
        authService.isAuthenticated = originalIsAuthenticated;
        authService.login = originalLogin;
        
        if (wrapper) {
            wrapper.destroy();
        }
    });

    describe('Component initialization', () => {
        it('should render the component', () => {
            expect(wrapper.exists()).toBe(true);
        });

        it('should have initial data values', () => {
            expect(wrapper.vm.email).toBe('');
            expect(wrapper.vm.password).toBe('');
            expect(wrapper.vm.loading).toBe(false);
            expect(wrapper.vm.error).toBe(false);
            expect(wrapper.vm.errorMessage).toBe('');
            expect(wrapper.vm.pwd_type).toBe('password');
        });

        it('should redirect to home if already authenticated', () => {
            // Arrange
            authService.isAuthenticated.mockReturnValue(true);
            const localMockPush = jest.fn();

            // Act
            const newWrapper = shallowMount(LoginBoxed, {
                localVue,
                mocks: {
                    $router: {
                        push: localMockPush
                    },
                    $route: {
                        query: {}
                    }
                },
                stubs: {
                    'router-link': true
                }
            });

            // Assert
            expect(localMockPush).toHaveBeenCalledWith('/');
            
            newWrapper.destroy();
        });
    });

    describe('set_pwd_type method', () => {
        it('should toggle password type from password to text', () => {
            wrapper.vm.pwd_type = 'password';
            wrapper.vm.set_pwd_type();
            expect(wrapper.vm.pwd_type).toBe('text');
        });

        it('should toggle password type from text to password', () => {
            wrapper.vm.pwd_type = 'text';
            wrapper.vm.set_pwd_type();
            expect(wrapper.vm.pwd_type).toBe('password');
        });
    });

    describe('login method', () => {
        it('should show error when email is empty', async () => {
            wrapper.vm.email = '';
            wrapper.vm.password = 'password123';

            await wrapper.vm.login();

            expect(wrapper.vm.error).toBe(true);
            expect(wrapper.vm.errorMessage).toBe('Por favor ingrese email y contraseña');
            expect(authService.login).not.toHaveBeenCalled();
        });

        it('should show error when password is empty', async () => {
            wrapper.vm.email = 'test@example.com';
            wrapper.vm.password = '';

            await wrapper.vm.login();

            expect(wrapper.vm.error).toBe(true);
            expect(wrapper.vm.errorMessage).toBe('Por favor ingrese email y contraseña');
            expect(authService.login).not.toHaveBeenCalled();
        });

        it('should login successfully and redirect to home', async () => {
            wrapper.vm.email = 'test@example.com';
            wrapper.vm.password = 'password123';
            
            authService.login.mockResolvedValue({
                success: true,
                user: { id: 1, email: 'test@example.com' }
            });

            await wrapper.vm.login();

            expect(authService.login).toHaveBeenCalledWith('test@example.com', 'password123');
            expect(wrapper.vm.loading).toBe(false);
            expect(wrapper.vm.error).toBe(false);
            expect(mockPush).toHaveBeenCalledWith('/');
        });

        it('should redirect to query redirect path after successful login', async () => {
            // Recrear wrapper con redirect query
            wrapper.destroy();
            wrapper = shallowMount(LoginBoxed, {
                localVue,
                mocks: {
                    $router: {
                        push: mockPush
                    },
                    $route: {
                        query: { redirect: '/students' }
                    }
                },
                stubs: {
                    'router-link': true
                }
            });

            wrapper.vm.email = 'test@example.com';
            wrapper.vm.password = 'password123';
            
            authService.login.mockResolvedValue({
                success: true,
                user: { id: 1, email: 'test@example.com' }
            });

            await wrapper.vm.login();

            expect(mockPush).toHaveBeenCalledWith('/students');
        });

        it('should show error message on login failure', async () => {
            wrapper.vm.email = 'test@example.com';
            wrapper.vm.password = 'wrongpassword';
            
            authService.login.mockResolvedValue({
                success: false,
                error: 'Invalid credentials'
            });

            await wrapper.vm.login();

            expect(wrapper.vm.error).toBe(true);
            expect(wrapper.vm.errorMessage).toBe('Invalid credentials');
            expect(wrapper.vm.loading).toBe(false);
        });

        it('should handle unexpected errors', async () => {
            wrapper.vm.email = 'test@example.com';
            wrapper.vm.password = 'password123';
            
            authService.login.mockRejectedValue(new Error('Network error'));

            const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

            await wrapper.vm.login();

            expect(wrapper.vm.error).toBe(true);
            expect(wrapper.vm.errorMessage).toBe('Error inesperado al iniciar sesión');
            expect(wrapper.vm.loading).toBe(false);
            expect(consoleErrorSpy).toHaveBeenCalledWith('Login error:', expect.any(Error));

            consoleErrorSpy.mockRestore();
        });

        it('should set loading state correctly during login', async () => {
            wrapper.vm.email = 'test@example.com';
            wrapper.vm.password = 'password123';
            
            let resolveLogin;
            const loginPromise = new Promise(resolve => {
                resolveLogin = resolve;
            });
            
            authService.login.mockReturnValue(loginPromise);

            const loginCall = wrapper.vm.login();
            
            await wrapper.vm.$nextTick();
            expect(wrapper.vm.loading).toBe(true);

            resolveLogin({ success: true, user: {} });
            await loginCall;

            expect(wrapper.vm.loading).toBe(false);
        });
    });
});