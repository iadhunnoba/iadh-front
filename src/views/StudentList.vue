<template>
    <div class="layout-px-spacing">
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="widget-content widget-content-area br-6">

                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3 class="m-0">Lista de Estudiantes</h3>
                        <b-button variant="success" @click="openCreateModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-plus mr-1">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            Crear Estudiante
                        </b-button>
                    </div>

                    <div class="row mb-4">
                        <div class="col-md-4 col-sm-12">
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="feather feather-search">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                    </span>
                                </div>
                                <b-input v-model="searchQuery"
                                    placeholder="Buscar por nombre, apellido, email o matrícula..."
                                    autocomplete="off"></b-input>
                            </div>
                        </div>
                    </div>

                    <b-table responsive hover :items="students" :fields="fields" :busy="isBusy"
                        class="table-hover non-hover">
                        <template #table-busy>
                            <div class="text-center text-primary my-4">
                                <b-spinner class="align-middle mr-2"></b-spinner>
                                <strong>Cargando estudiantes...</strong>
                            </div>
                        </template>

                        <template #cell(actions)="data">
                            <div class="d-flex justify-content-center align-items-center" style="white-space: nowrap;">

                                <b-button variant="info" size="sm" class="mr-2" @click="viewSessions(data.item.id)"
                                    v-b-tooltip.hover title="Ver Sesiones">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-activity">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                    </svg>
                                </b-button>

                                <b-button variant="warning" size="sm" class="mr-2" @click="openEditModal(data.item)"
                                    v-b-tooltip.hover title="Editar Estudiante">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-edit-2">
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                    </svg>
                                </b-button>

                                <b-button variant="danger" size="sm" @click="deleteStudent(data.item.id)"
                                    v-b-tooltip.hover title="Eliminar Estudiante">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="feather feather-trash-2">
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path
                                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2">
                                        </path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </b-button>

                            </div>
                        </template>
                    </b-table>
                </div>
            </div>
        </div>

        <b-modal id="studentModal" :title="isEditMode ? 'Editar Estudiante' : 'Crear Estudiante'" @hidden="resetForm"
            hide-footer>
            <b-form @submit.prevent="saveStudent">
                <div class="row">
                    <div class="col-md-6">
                        <b-form-group label="Nombre *">
                            <b-form-input v-model="form.name" required placeholder="Ej: Juan"></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6">
                        <b-form-group label="Apellido *">
                            <b-form-input v-model="form.surname" required placeholder="Ej: Pérez"></b-form-input>
                        </b-form-group>
                    </div>
                </div>

                <b-form-group label="Email/Usuario *">
                    <b-form-input v-model="form.username" type="email" required
                        placeholder="correo@ejemplo.com"></b-form-input>
                </b-form-group>

                <b-form-group label="Contraseña *" v-if="!isEditMode">
                    <b-form-input v-model="form.password" type="password" required
                        placeholder="Ingresar contraseña segura"></b-form-input>
                </b-form-group>

                <div class="row">
                    <div class="col-md-6">
                        <b-form-group label="Matrícula/ID (Opcional)">
                            <b-form-input v-model="form.studentIdNumber" placeholder="N° de alumno"></b-form-input>
                        </b-form-group>
                    </div>
                    <div class="col-md-6">
                        <b-form-group label="Licencia (Opcional)">
                            <b-form-input v-model="form.license" placeholder="Código de licencia"></b-form-input>
                        </b-form-group>
                    </div>
                </div>

                <div class="text-right mt-4">
                    <b-button variant="default" class="mr-2" @click="$bvModal.hide('studentModal')">Cancelar</b-button>
                    <b-button variant="primary" type="submit" :disabled="isSaving">
                        <b-spinner small v-if="isSaving" class="mr-1"></b-spinner>
                        {{ isEditMode ? 'Guardar Cambios' : 'Crear Estudiante' }}
                    </b-button>
                </div>
            </b-form>
        </b-modal>

    </div>
</template>

<script>
import axios from '@/plugins/axios';

export default {
    data() {
        return {
            isBusy: false,
            isSaving: false,
            students: [],
            searchQuery: '',
            searchTimeout: null,
            isEditMode: false,
            // Estado del formulario
            form: {
                id: null,
                name: '',
                surname: '',
                username: '',
                password: '',
                studentIdNumber: '',
                license: '',
                role: 'estudiante' // Rol fijo por defecto para esta vista
            },
            fields: [
                { key: 'name', label: 'Nombre', sortable: true },
                { key: 'surname', label: 'Apellido', sortable: true },
                { key: 'username', label: 'Email/Usuario' },
                { key: 'studentIdNumber', label: 'Matrícula/ID' },
                // Actualiza esta línea:
                { key: 'actions', label: 'Acciones', class: 'text-center', thStyle: { minWidth: '150px' } }
            ]
        };
    },
    watch: {
        // Ejecuta la búsqueda al escribir, pero con un retraso de 500ms (Debounce)
        searchQuery() {
            clearTimeout(this.searchTimeout);
            this.searchTimeout = setTimeout(() => {
                this.fetchStudents();
            }, 500);
        }
    },
    mounted() {
        this.fetchStudents();
    },
    methods: {
        async fetchStudents() {
            this.isBusy = true;
            try {
                // Pasamos el searchQuery como parámetro para que el backend filtre
                const res = await axios.get('/users/students', {
                    params: {
                        limit: 50,
                        search: this.searchQuery || undefined
                    }
                });
                this.students = res.data.data;
            } catch (error) {
                this.$swal.fire("Error", "No se pudieron cargar los estudiantes", "error");
            } finally {
                this.isBusy = false;
            }
        },

        // ---------- CRUD ACTIONS ---------- //

        openCreateModal() {
            this.isEditMode = false;
            this.resetForm();
            this.$bvModal.show('studentModal');
        },

        openEditModal(student) {
            this.isEditMode = true;
            // Clonamos los datos del estudiante en el form
            this.form = {
                id: student.id,
                name: student.name,
                surname: student.surname,
                username: student.username,
                password: '', // Evitamos que muestre/envíe hash de pass
                studentIdNumber: student.studentIdNumber || '',
                license: student.license || '',
                role: 'estudiante'
            };
            this.$bvModal.show('studentModal');
        },

        resetForm() {
            this.form = {
                id: null,
                name: '',
                surname: '',
                username: '',
                password: '',
                studentIdNumber: '',
                license: '',
                role: 'estudiante'
            };
        },

        async saveStudent() {
            this.isSaving = true;
            try {
                if (this.isEditMode) {
                    // Copiamos todo el form para no mutar el original
                    const updateData = { ...this.form };

                    // Eliminamos el id y el password de la copia que vamos a enviar
                    delete updateData.id;
                    delete updateData.password;

                    await axios.patch(`/users/${this.form.id}`, updateData);
                    this.$swal.fire("Éxito", "Estudiante actualizado correctamente", "success");
                } else {
                    // Creación
                    await axios.post('/users', this.form);
                    this.$swal.fire("Éxito", "Estudiante creado correctamente", "success");
                }

                this.$bvModal.hide('studentModal');
                this.fetchStudents(); // Recargamos la tabla
            } catch (error) {
                // Mejoramos la lectura del error para que sea más claro
                let errorMsg = "Ocurrió un error al guardar";
                if (error.response?.data && Array.isArray(error.response.data)) {
                    errorMsg = Object.values(error.response.data[0].constraints)[0];
                } else if (error.response?.data?.message) {
                    errorMsg = error.response.data.message;
                }
                this.$swal.fire("Error", errorMsg, "error");
            } finally {
                this.isSaving = false;
            }
        },

        deleteStudent(id) {
            this.$swal.fire({
                title: '¿Estás seguro?',
                text: "Esta acción eliminará al estudiante del sistema. (Puede fallar si tiene sesiones RCP asociadas)",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#e7515a',
                cancelButtonColor: '#3b3f5c',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        await axios.delete(`/users/${id}`);
                        this.$swal.fire("Eliminado", "Estudiante eliminado correctamente", "success");
                        this.fetchStudents(); // Recargamos la tabla
                    } catch (error) {
                        const errorMsg = error.response?.data?.message || "No se pudo eliminar el estudiante";
                        this.$swal.fire("No se pudo eliminar", errorMsg, "error");
                    }
                }
            });
        },

        // ---------- RUTAS ---------- //

        viewSessions(studentId) {
            this.$router.push(`/estudiantes/${studentId}/sesiones`);
        }
    }
};
</script>