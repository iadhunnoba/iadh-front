<template>
    <div class="layout-px-spacing">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Users</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Profile</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="row layout-spacing">
            <!-- Content -->
            <div class="col-xl-4 col-lg-6 col-md-5 col-sm-12 layout-top-spacing">
                <div class="user-profile layout-spacing">
                    <div class="panel">
                        <div class="panel-body">
                            <div class="d-flex justify-content-between">
                                <h3 class="">Profile</h3>
                                <router-link to="/users/account-setting" class="mt-2 edit-profile">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-edit-3"
                                    >
                                        <path d="M12 20h9"></path>
                                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                                    </svg>
                                </router-link>
                            </div>
                            <div class="text-center user-info">
                                <img :src="user.image || require('@/assets/images/profile-3.jpeg')" alt="avatar" />
                                <p class="">{{ user.name }} {{ user.surname }}</p>
                            </div>
                            <div class="user-info-list">
                                <div class="">
                                    <ul class="contacts-block list-unstyled">
                                        <li class="contacts-block__item">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-coffee"
                                            >
                                                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                                                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                                                <line x1="6" y1="1" x2="6" y2="4"></line>
                                                <line x1="10" y1="1" x2="10" y2="4"></line>
                                                <line x1="14" y1="1" x2="14" y2="4"></line>
                                            </svg>
                                            {{ user.role }}
                                        </li>
                                        <li v-if="user.studentIdNumber" class="contacts-block__item">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-calendar"
                                            >
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                <line x1="3" y1="10" x2="21" y2="10"></line></svg
                                            >Legajo: {{ user.studentIdNumber }}
                                        </li>
                                        <li class="contacts-block__item">
                                            <a :href="'mailto:' + user.username"
                                                ><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-mail"
                                                >
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                    <polyline points="22,6 12,13 2,6"></polyline></svg
                                                >{{ user.username }}</a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="sessions.length > 0" class="education layout-spacing ">
                    <div class="panel">
                        <div class="panel-body">
                            <h3 class="">Historial de Sesiones RCP</h3>
                            <div class="timeline-alter">
                                <div v-for="session in sessions" :key="session.id" class="item-timeline">
                                    <div class="t-meta-date">
                                        <p class="">{{ formatDate(session.createdAt) }}</p>
                                    </div>
                                    <div class="t-dot"></div>
                                    <div class="t-text">
                                        <p>Presión: {{ session.avgPulmonaryPressure }}%</p>
                                        <p>Ventilación: {{ session.avgVentilation }}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-8 col-lg-6 col-md-7 col-sm-12 layout-top-spacing">
                <!-- Resto de secciones (Bio, Skills, etc.) se pueden cargar dinámicamente si el backend las provee -->
            </div>
        </div>
    </div>
</template>

<script>
    import '@/assets/sass/scrollspyNav.scss';
    import '@/assets/sass/users/user-profile.scss';
    import axios from 'axios';
    import API_CONFIG, { getApiUrl } from '@/config/api';
    import authService from '@/services/authService';

    export default {
        metaInfo: { title: 'User Profile' },
        data() {
            return {
                user: {},
                sessions: [],
                loading: false
            };
        },
        mounted() {
            this.fetchData();
        },
        methods: {
            async fetchData() {
                this.loading = true;
                const userId = this.$route.params.id || authService.getUser()?.id;
                const token = localStorage.getItem('token');
                
                if (!userId) {
                    this.$router.push('/auth/login-boxed');
                    return;
                }

                try {
                    // Cargar datos del usuario
                    const userResponse = await axios.get(getApiUrl(API_CONFIG.ENDPOINTS.USER_BY_ID(userId)), {
                        headers: { 'auth': token }
                    });
                    this.user = userResponse.data;

                    // Si es estudiante o profesor (que quiere ver sesiones del estudiante), cargar historial
                    if (this.user.role === 'estudiante' || this.user.studentIdNumber) {
                        const sessionsResponse = await axios.get(getApiUrl(API_CONFIG.ENDPOINTS.RCP_SESSION_HISTORY(userId)), {
                            headers: { 'auth': token }
                        });
                        this.sessions = sessionsResponse.data.data || sessionsResponse.data;
                    }
                } catch (error) {
                    console.error('Error fetching profile data:', error);
                } finally {
                    this.loading = false;
                }
            },
            formatDate(dateStr) {
                if (!dateStr) return '';
                const date = new Date(dateStr);
                return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            }
        }
    };
</script>
