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
                            </template>
                        </b-table>

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
    import axios from 'axios';

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
                // Mock data - TEMPORAL (eliminar después)
                mockStudents: [
                    {
                        id: 1,
                        username: 'jperez@comunidad.unnoba.edu.ar',
                        name: 'Juan',
                        surname: 'Pérez',
                        studentIdNumber: '44123456'
                    },
                    {
                        id: 2,
                        username: 'mgarcia@comunidad.unnoba.edu.ar',
                        name: 'María',
                        surname: 'García',
                        studentIdNumber: '43987654'
                    },
                    {
                        id: 3,
                        username: 'crodriguez@comunidad.unnoba.edu.ar',
                        name: 'Carlos',
                        surname: 'Rodríguez',
                        studentIdNumber: '42654321'
                    },
                    {
                        id: 4,
                        username: 'amartinez@comunidad.unnoba.edu.ar',
                        name: 'Ana',
                        surname: 'Martínez',
                        studentIdNumber: '45123789'
                    },
                    {
                        id: 5,
                        username: 'psanchez@comunidad.unnoba.edu.ar',
                        name: 'Pedro',
                        surname: 'Sánchez',
                        studentIdNumber: '43456123'
                    },
                    {
                        id: 6,
                        username: 'lfernandez@comunidad.unnoba.edu.ar',
                        name: 'Laura',
                        surname: 'Fernández',
                        studentIdNumber: '44789456'
                    },
                    {
                        id: 7,
                        username: 'dlopez@comunidad.unnoba.edu.ar',
                        name: 'Diego',
                        surname: 'López',
                        studentIdNumber: '42987123'
                    },
                    {
                        id: 8,
                        username: 'sramirez@comunidad.unnoba.edu.ar',
                        name: 'Sofia',
                        surname: 'Ramírez',
                        studentIdNumber: '45654987'
                    },
                    {
                        id: 9,
                        username: 'jcgomez@comunidad.unnoba.edu.ar',
                        name: 'Juan Carlos',
                        surname: 'Gomez',
                        studentIdNumber: '43321654'
                    },
                    {
                        id: 10,
                        username: 'mjtorres@comunidad.unnoba.edu.ar',
                        name: 'María José',
                        surname: 'Torres',
                        studentIdNumber: '44852963'
                    }
                ]
            };
        },
        watch: {
            table_option: {
                handler: function() {
                    this.get_meta();
                },
                deep: true
            }
        },
        mounted() {
            this.fetchStudents();
        },
        methods: {
            async fetchStudents() {
                this.loading = true;
                this.error = null;

                try {
                    // El token se agrega automáticamente por el interceptor
                    const response = await axios.get('http://localhost:3000/students');

                    this.items = response.data;

                    if (this.items.length > 0) {
                        this.generateColumns();
                    }

                    this.table_option.total_rows = this.items.length;
                    this.get_meta();

                } catch (error) {
                    console.error('Error al obtener estudiantes:', error);
                    this.error = error.response?.data?.message || error.message || 'Error al cargar estudiantes';
                    
                    // FALLBACK - Usar datos mock
                    console.warn('Usando datos mock de estudiantes como fallback');
                    this.items = this.mockStudents;
                    
                    if (this.items.length > 0) {
                        this.generateColumns();
                    }
                    
                    this.table_option.total_rows = this.items.length;
                    this.get_meta();
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
                    'Surname': 'Apellido',
                    'Student Id Number': 'Legajo'
                };

                return translations[label] || label;
            },

            on_filtered(filtered_items) {
                this.refresh_table(filtered_items.length);
            },

            delete_row(item) {
                if (confirm(`¿Está seguro de que desea eliminar al estudiante ${item.name} ${item.surname}?`)) {
                    // TEMPORAL - Para el mock solo removemos del array
                    const index = this.items.findIndex(s => s.id === item.id);
                    if (index !== -1) {
                        this.items.splice(index, 1);
                        this.table_option.total_rows = this.items.length;
                        this.get_meta();
                        alert(`Estudiante ${item.name} ${item.surname} eliminado (mock)`);
                    }
                    
                    // Descomentar cuando la API esté funcionando:
                    // this.deleteStudent(item.id);
                }
            },

            async deleteStudent(studentId) {
                try {
                    const token = localStorage.getItem('token');
                    
                    await axios.delete(`http://localhost:3000/students/${studentId}`, {
                        headers: {
                            'auth': token
                        }
                    });

                    this.fetchStudents();
                    alert('Estudiante eliminado correctamente');
                } catch (error) {
                    console.error('Error al eliminar estudiante:', error);
                    alert(error.response?.data?.message || 'Error al eliminar el estudiante');
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
