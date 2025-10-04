<template>
    <div class="form auth-boxed">
        <div class="form-container outer">
            <div class="form-form">
                <div class="form-form-wrap">
                    <div class="form-container">
                        <div class="form-content">

                            <h1 class="">Login docente</h1>
                            <p class="">Inicie sesión para continuar.</p>

                            <!-- Banner de credenciales MOCK -->
                            <div v-if="showMockCredentials" class="alert alert-info" style="margin-bottom: 20px;">
                                <h6>🧪 Modo Testing - Credenciales Mock:</h6>
                                <p style="margin: 5px 0;">
                                    <strong>Email:</strong> {{ mockCredentials.email }}<br>
                                    <strong>Password:</strong> {{ mockCredentials.password }}
                                </p>
                                <button 
                                    type="button" 
                                    class="btn btn-sm btn-success"
                                    @click="fillMockCredentials"
                                    style="margin-top: 5px;">
                                    Autocompletar
                                </button>
                            </div>

                            <p v-if="error" class="alert alert-danger">
                                {{ errorMessage }}
                            </p>


                            <!-- .prevent hace que la página no se recarge pero si obtiene los datos -->
                            <b-form class="text-left" v-on:submit.prevent="login">
                                <div class="form">

                                    <div id="username-field" class="field-wrapper input">
                                        <label for="email">EMAIL</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-user">
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <b-input placeholder="Email" v-model="email" :disabled="loading"></b-input>
                                    </div>

                                    <div id="password-field" class="field-wrapper input mb-2">
                                        <div class="d-flex justify-content-between">
                                            <label for="password">CONTRASEÑA</label>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" class="feather feather-lock">
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        <b-input :type="pwd_type" placeholder="Contraseña" v-model="password" :disabled="loading"></b-input>
                                        <svg @click="set_pwd_type" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" 
                                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye toggle-password">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    </div>

                                    <div class="d-sm-flex justify-content-between">
                                        <div class="field-wrapper">
                                            <button type="submit" class="btn btn-primary" :disabled="loading">
                                                <span v-if="loading">Cargando...</span>
                                                <span v-else>Iniciar sesión</span>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </b-form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* Importo authService */
import authService from '@/services/authService';
import '@/assets/sass/authentication/auth-boxed.scss';

export default {
    metaInfo: { title: 'Login Boxed' },
    data() {
        return {
            email: "",
            password: "",
            error: false,
            errorMessage: "",
            pwd_type: 'password',
            loading: false,
            showMockCredentials: process.env.NODE_ENV === 'development',
            mockCredentials: authService.getMockCredentials()
        }
    },
    created() {
        // Si ya está autenticado, redirigir al dashboard
        if (authService.isAuthenticated()) {
            this.$router.push('/');
        }
    },
    methods: {
        set_pwd_type() {
            if (this.pwd_type == 'password') { this.pwd_type = 'text'; } else { this.pwd_type = 'password'; }
        },
        
        fillMockCredentials() {
            this.email = this.mockCredentials.email;
            this.password = this.mockCredentials.password;
        },
        
        async login() {
            // Validación básica
            if (!this.email || !this.password) {
                this.errorMessage = 'Por favor ingrese email y contraseña';
                this.error = true;
                return;
            }

            this.loading = true;
            this.error = false;
            this.errorMessage = "";

            try {
                const result = await authService.login(this.email, this.password);

                if (result.success) {
                    // Login exitoso - redirigir
                    const redirect = this.$route.query.redirect || '/';
                    this.$router.push(redirect);
                } else {
                    // Mostrar error
                    this.errorMessage = result.error;
                    this.error = true;
                }
            } catch (error) {
                // Error inesperado
                this.errorMessage = 'Error inesperado al iniciar sesión';
                this.error = true;
                console.error('Login error:', error);
            } finally {
                this.loading = false;
            }
        }
    }
};
</script>

<style scoped>
.alert-info {
    background-color: #e7f3ff;
    border: 1px solid #b3d9ff;
    color: #004085;
    padding: 15px;
    border-radius: 5px;
}
</style>



