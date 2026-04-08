<template>
    <div class="layout-px-spacing">
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div class="custom-table">
                        <div class="table-header">
                            <div class="d-flex align-items-center">
                                <span>Results :</span>
                                <span class="ml-2">
                                    <b-select v-model="table_option.page_size" size="sm">
                                        <b-select-option value="5">5</b-select-option>
                                        <b-select-option value="10">10</b-select-option>
                                        <b-select-option value="20">20</b-select-option>
                                        <b-select-option value="50">50</b-select-option>
                                    </b-select>
                                </span>
                                <b-button variant="primary" size="sm" class="ml-3" @click="show_user_modal()">Agregar Usuario</b-button>
                                <b-button-group size="sm" class="ml-3">
                                    <b-button :variant="view_mode === 'students' ? 'info' : 'outline-info'" @click="set_view_mode('students')">Estudiantes</b-button>
                                    <b-button :variant="view_mode === 'all' ? 'info' : 'outline-info'" @click="set_view_mode('all')">Todos</b-button>
                                </b-button-group>
                            </div>
                            <div class="header-search">
                                <b-input v-model="table_option.search_text" size="sm" placeholder="Search..." />
                                <div class="search-image">
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
                                        class="feather feather-search"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- Los elementos de la tabla son sacados de list.vue, hay que remplazarlos para utilizar el endpoint /users -->
                        
                        <b-table        
                            ref="basic_table"
                            responsive
                            :items="items"
                            :fields="columns"
                            :per-page="table_option.page_size"
                            :current-page="table_option.current_page"
                            :filter="table_option.search_text"
                            sort-by="name"
                            :show-empty="true"
                            @filtered="on_filtered"
                        >
                            <template #cell(salary)="row"> ${{ row.item.salary }} </template>
                            <template #cell(action)="row">
                                <div class="actions text-center">
                                    <router-link :to="'/users/profile/' + row.item.id" class="mr-3" title="Ver Reportes">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye text-primary"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                    </router-link>
                                    <a href="javascript:;" class="edit mr-3" @click="show_user_modal(row.item)">
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
                                            class="feather feather-edit-2"
                                        >
                                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 21l.5-5.5L17 3z"></path>
                                        </svg>
                                    </a>
                                    <a href="javascript:;" class="cancel" @click="delete_row(row.item)">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-x-circle table-cancel"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="15" y1="9" x2="9" y2="15"></line>
                                            <line x1="9" y1="9" x2="15" y2="15"></line>
                                        </svg>
                                    </a>
                                </div>
                            </template>
                        </b-table>

                        <!-- Modal para Agregar/Editar Usuario -->
                        <b-modal id="userModal" :title="edit_user.id ? 'Editar Usuario' : 'Nuevo Usuario'" @ok="save_user">
                            <b-form>
                                <b-form-group label="Email Institutional">
                                    <b-input v-model="edit_user.username" placeholder="email@comunidad.unnoba.edu.ar"></b-input>
                                </b-form-group>
                                <b-form-group v-if="!edit_user.id" label="Contraseña">
                                    <b-input type="password" v-model="edit_user.password" placeholder="Contraseña"></b-input>
                                </b-form-group>
                                <b-form-group label="Nombre">
                                    <b-input v-model="edit_user.name" placeholder="Nombre"></b-input>
                                </b-form-group>
                                <b-form-group label="Apellido">
                                    <b-input v-model="edit_user.surname" placeholder="Apellido"></b-input>
                                </b-form-group>
                                <b-form-group label="Rol">
                                    <b-select v-model="edit_user.role">
                                        <b-select-option value="admin">Admin</b-select-option>
                                        <b-select-option value="profesor">Profesor</b-select-option>
                                        <b-select-option value="estudiante">Estudiante</b-select-option>
                                    </b-select>
                                </b-form-group>
                                <b-form-group v-if="edit_user.role === 'estudiante'" label="Legajo">
                                    <b-input v-model="edit_user.studentIdNumber" placeholder="Legajo"></b-input>
                                </b-form-group>
                            </b-form>
                        </b-modal>

                        <div class="table-footer">
                            <div class="dataTables_info"> Mostrando del {{ meta.total_items ? meta.start_index + 1 : 0 }} al {{ meta.end_index + 1 }} de {{ meta.total_items }}</div>
                            <div class="paginating-container pagination-solid flex-column align-items-right">
                                <b-pagination
                                    v-model="table_option.current_page"
                                    :total-rows="table_option.total_rows"
                                    :per-page="table_option.page_size"
                                    prev-text="Prev"
                                    next-text="Next"
                                    first-text="First"
                                    last-text="Last"
                                    first-class="first"
                                    prev-class="prev"
                                    next-class="next"
                                    last-class="last"
                                    class="rounded"
                                >
                                    <template #first-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                        </svg>
                                    </template>
                                    <template #prev-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </template>
                                    <template #next-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </template>
                                    <template #last-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                        </svg>
                                    </template>
                                </b-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from '@/plugins/axios';
    import API_CONFIG, { getApiUrl } from '@/config/api';

    export default {
        metaInfo: { title: 'Gestión de Estudiantes' },
        data() {
            return {
                items: [],
                columns: [],
                table_option: { total_rows: 0, current_page: 1, page_size: 10, search_text: '' },
                meta: {},
                loading: false,
                error: null,
                pagination: {},
                view_mode: 'students', // 'all' o 'students'
                edit_user: { id: null, username: '', password: '', name: '', surname: '', role: 'estudiante', studentIdNumber: '' },
                // Mock data - TEMPORAL (eliminar después)
                mockStudents: [
                    {
                        id: 1,
                        username: 'jperez@comunidad.unnoba.edu.ar',
                        name: 'Juan',
                        surname: 'Pérez'
                    },
                    {
                        id: 2,
                        username: 'mgarcia@comunidad.unnoba.edu.ar',
                        name: 'María',
                        surname: 'García'
                    },
                    {
                        id: 3,
                        username: 'crodriguez@comunidad.unnoba.edu.ar',
                        name: 'Carlos',
                        surname: 'Rodríguez'
                    },
                    {
                        id: 4,
                        username: 'amartinez@comunidad.unnoba.edu.ar',
                        name: 'Ana',
                        surname: 'Martínez'
                    },
                    {
                        id: 5,
                        username: 'psanchez@comunidad.unnoba.edu.ar',
                        name: 'Pedro',
                        surname: 'Sánchez'
                    },
                    {
                        id: 6,
                        username: 'lfernandez@comunidad.unnoba.edu.ar',
                        name: 'Laura',
                        surname: 'Fernández'
                    },
                    {
                        id: 7,
                        username: 'dlopez@comunidad.unnoba.edu.ar',
                        name: 'Diego',
                        surname: 'López'
                    },
                    {
                        id: 8,
                        username: 'sramirez@comunidad.unnoba.edu.ar',
                        name: 'Sofia',
                        surname: 'Ramírez'
                    },
                    {
                        id: 9,
                        username: 'jcgomez@comunidad.unnoba.edu.ar',
                        name: 'Juan Carlos',
                        surname: 'Gomez'
                    },
                    {
                        id: 10,
                        username: 'mjtorres@comunidad.unnoba.edu.ar',
                        name: 'María José',
                        surname: 'Torres'
                    }
                ]
            };
        },
        watch: {
            'table_option.current_page': function() {
                this.fetchUsers();
            },
            'table_option.page_size': function() {
                this.table_option.current_page = 1;
                this.fetchUsers();
            },
            'table_option.search_text': function() {
                this.table_option.current_page = 1;
                this.fetchUsers();
            }
        },
        mounted() {
            const user = authService.getUser();
            if (user && user.role === 'estudiante') {
                this.$router.push('/charts/apex_chart');
                return;
            }
            this.fetchUsers();
        },
        methods: {
            set_view_mode(mode) {
                this.view_mode = mode;
                this.table_option.current_page = 1;
                this.fetchUsers();
            },
            async fetchUsers() {
                const token = localStorage.getItem('token');
                if (!token) {
                    this.$router.push('/auth/login-boxed');
                    return;
                }
                this.loading = true;
                this.error = null;

                try {
                    const params = {
                        page: this.table_option.current_page,
                        limit: this.table_option.page_size,
                        search: this.table_option.search_text
                    };

                    const endpoint = this.view_mode === 'students' 
                        ? API_CONFIG.ENDPOINTS.STUDENTS_LIST 
                        : API_CONFIG.ENDPOINTS.USERS;

                    const response = await axios.get(getApiUrl(endpoint), { 
                        params,
                        headers: { 'auth': token }
                    });

                    // La estructura es { data: [...], pagination: {...} }
                    if (response.data && response.data.data) {
                        this.items = response.data.data;
                        this.pagination = response.data.pagination;
                        this.table_option.total_rows = this.pagination.total;
                    } else {
                        // Fallback para cuando el backend devuelve el array directamente
                        this.items = Array.isArray(response.data) ? response.data : [];
                        this.table_option.total_rows = this.items.length;
                    }

                    if (this.items.length > 0) {
                        this.generateColumns();
                    }

                    this.get_meta();

                } catch (error) {
                    console.error('Error al obtener usuarios:', error);
                    this.error = error.response?.data?.message || error.message || 'Error al cargar usuarios';
                    
                    // FALLBACK - Usar datos mock solo en modo estudiantes
                    if (this.view_mode === 'students') {
                        console.warn('Usando datos mock de estudiantes como fallback');
                        this.items = this.mockStudents;
                        this.table_option.total_rows = this.items.length;
                        this.generateColumns();
                        this.get_meta();
                    }
                } finally {
                    this.loading = false;
                }
            },

            generateColumns() {
                // Definir el orden específico de las columnas (sin ID)
                const columnOrder = ['surname', 'name', 'username'];
                
                this.columns = columnOrder.map(key => {
                    return {
                        key: key,
                        label: this.formatColumnLabel(key),
                        sortable: true
                    };
                });

                // Agregar columna de acciones al final
                this.columns.push({
                    key: 'action',
                    label: 'Acciones',
                    sortable: false,
                    class: 'text-center'
                });
            },

            formatColumnLabel(key) {
                // Convertir camelCase a formato legible
                const label = key
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, str => str.toUpperCase());
                
                // Traducciones específicas para campos de estudiantes
                const translations = {
                    'Id': 'ID',
                    'Username': 'Email Institucional',
                    'Name': 'Nombre',
                    'Surname': 'Apellido'
                };

                return translations[label] || label;
            },

            on_filtered(filtered_items) {
                // Con paginación en backend, filtered_items no es tan útil aquí 
                // si solo tenemos una página de datos.
                // this.refresh_table(filtered_items.length);
            },

            delete_row(item) {
                if (confirm(`¿Está seguro de que desea eliminar al usuario ${item.name} ${item.surname}?`)) {
                    this.delete_user(item.id);
                }
            },

            async delete_user(userId) {
                try {
                    const token = localStorage.getItem('token');
                    await axios.delete(getApiUrl(API_CONFIG.ENDPOINTS.USER_BY_ID(userId)), {
                        headers: { 'auth': token }
                    });

                    this.fetchUsers();
                    alert('Usuario eliminado correctamente');
                } catch (error) {
                    console.error('Error al eliminar usuario:', error);
                    alert(error.response?.data?.message || 'Error al eliminar el usuario');
                }
            },

            show_user_modal(user = null) {
                if (user) {
                    this.edit_user = { ...user, password: '' };
                } else {
                    this.edit_user = { id: null, username: '', password: '', name: '', surname: '', role: 'estudiante', studentIdNumber: '' };
                }
                this.$bvModal.show('userModal');
            },

            async save_user(bvModalEvt) {
                bvModalEvt.preventDefault();
                const token = localStorage.getItem('token');
                
                try {
                    if (this.edit_user.id) {
                        // Editar
                        await axios.patch(getApiUrl(API_CONFIG.ENDPOINTS.USER_BY_ID(this.edit_user.id)), this.edit_user, {
                            headers: { 'auth': token }
                        });
                        alert('Usuario actualizado correctamente');
                    } else {
                        // Crear
                        await axios.post(getApiUrl(API_CONFIG.ENDPOINTS.USERS), this.edit_user, {
                            headers: { 'auth': token }
                        });
                        alert('Usuario creado correctamente');
                    }
                    
                    this.$bvModal.hide('userModal');
                    this.fetchUsers();
                } catch (error) {
                    console.error('Error al guardar usuario:', error);
                    alert(error.response?.data?.message || 'Error al guardar el usuario');
                }
            },

            refresh_table(total) {
                this.table_option.total_rows = total;
                this.table_option.current_page = 1;
            },

            get_meta() {
                var startPage;
                var endPage;
                var totalPages = this.table_option.page_size < 1 ? 1 : Math.ceil(this.table_option.total_rows / this.table_option.page_size);
                totalPages = Math.max(totalPages || 0, 1);

                var maxSize = 5;
                var isMaxSized = typeof maxSize !== 'undefined' && maxSize < totalPages;
                if (isMaxSized) {
                    startPage = Math.max(this.table_option.current_page - Math.floor(maxSize / 2), 1);
                    endPage = startPage + maxSize - 1;

                    if (endPage > totalPages) {
                        endPage = totalPages;
                        startPage = endPage - maxSize + 1;
                    }
                } else {
                    startPage = 1;
                    endPage = totalPages;
                }

                let startIndex = (this.table_option.current_page - 1) * this.table_option.page_size;
                let endIndex = Math.min(startIndex + this.table_option.page_size - 1, this.table_option.total_rows - 1);

                // Asegurar valores válidos
                if (this.table_option.total_rows === 0) {
                    startIndex = -1;
                    endIndex = -1;
                }

                var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(i => startPage + i);
                this.meta = {
                    total_items: this.table_option.total_rows,
                    current_page: this.table_option.current_page,
                    page_size: this.table_option.page_size,
                    total_pages: totalPages,
                    start_page: startPage,
                    end_page: endPage,
                    start_index: startIndex,
                    end_index: endIndex,
                    pages: pages
                };
            }
        }
    };
</script>
