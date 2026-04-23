<template>
    <div class="layout-px-spacing">
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="widget-content widget-content-area br-6">
                    <div class="d-flex justify-content-between align-items-center mb-4">
                        <h3>Sesiones de RCP del Alumno</h3>
                        <b-button variant="outline-secondary" @click="$router.push('/estudiantes')">Volver</b-button>
                    </div>

                    <b-table responsive hover :items="sessions" :fields="fields" :busy="isBusy"
                        class="table-hover non-hover">
                        <template #table-busy>
                            <div class="text-center text-primary my-2">
                                <b-spinner class="align-middle"></b-spinner>
                                <strong>Cargando historial...</strong>
                            </div>
                        </template>

                        <template #cell(startedAt)="data">
                            {{ new Date(data.value).toLocaleString() }}
                        </template>

                        <template #cell(avgPulmonaryPressure)="data">
                            <span v-if="data.value">{{ data.value }}%</span>
                            <span v-else class="text-muted">En proceso</span>
                        </template>
                    </b-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '@/plugins/axios';

export default {
    data() {
        return {
            isBusy: false,
            sessions: [],
            studentId: this.$route.params.id,
            fields: [
                { key: 'id', label: 'ID Sesión' },
                { key: 'startedAt', label: 'Fecha/Hora Inicio', sortable: true },
                { key: 'duration', label: 'Duración' },
                { key: 'avgPulmonaryPressure', label: 'Presión Pulmonar (Prom)' },
                { key: 'avgVentilation', label: 'Ventilación (Prom)' },
                { key: 'avgCorrectPosition', label: 'Posición Correcta (Prom)' },
                { key: 'observation', label: 'Observaciones' }
            ]
        };
    },
    mounted() {
        this.fetchSessions();
    },
    methods: {
        async fetchSessions() {
            this.isBusy = true;
            try {
                // Endpoint extraído de tu Controller GET /students/:id/rcp-sessions
                const res = await axios.get(`/students/${this.studentId}/rcp-sessions`);
                this.sessions = res.data.data;
            } catch (error) {
                this.$swal.fire("Error", "No se pudo cargar el historial de sesiones", "error");
            } finally {
                this.isBusy = false;
            }
        }
    }
};
</script>