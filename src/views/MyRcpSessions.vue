<template>
  <div class="layout-px-spacing">
    <div class="row layout-top-spacing">

      <!-- Encabezado -->
      <div class="col-12 layout-spacing">
        <div class="widget-content widget-content-area br-6 p-4">
          <div class="d-flex align-items-center">
            <div class="w-icon icon-fill-primary mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-activity">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
            </div>
            <div>
              <h3 class="mb-0">Mis Sesiones RCP</h3>
              <p class="text-muted mb-0">Historial de tus maniobras y feedback del docente</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabla de sesiones -->
      <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
        <div class="widget-content widget-content-area br-6">
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h5 class="mb-0">Historial de sesiones</h5>
            <b-badge variant="primary" pill>{{ pagination.total }} sesiones</b-badge>
          </div>

          <b-table responsive hover :items="sessions" :fields="fields" :busy="isBusy" show-empty
            empty-text="Aún no tienes sesiones RCP registradas." class="table-hover">

            <template #table-busy>
              <div class="text-center text-primary my-4">
                <b-spinner class="align-middle mr-2"></b-spinner>
                <strong>Cargando sesiones...</strong>
              </div>
            </template>

            <template #cell(startedAt)="data">
              <span>{{ formatDate(data.value) }}</span>
            </template>

            <template #cell(duration)="data">
              <span v-if="data.value">{{ formatDuration(data.value) }}</span>
              <b-badge v-else variant="warning">En proceso</b-badge>
            </template>

            <template #cell(avgPulmonaryPressure)="data">
              <span v-if="data.value !== null && data.value !== undefined">
                <b-progress :value="data.value" :max="100" show-value variant="primary" height="18px"
                  style="min-width: 80px;"></b-progress>
              </span>
              <span v-else class="text-muted">—</span>
            </template>

            <template #cell(avgVentilation)="data">
              <span v-if="data.value !== null && data.value !== undefined">
                <b-progress :value="data.value" :max="100" show-value variant="info" height="18px"
                  style="min-width: 80px;"></b-progress>
              </span>
              <span v-else class="text-muted">—</span>
            </template>

            <template #cell(avgCorrectPosition)="data">
              <span v-if="data.value !== null && data.value !== undefined">
                <b-progress :value="data.value" :max="100" show-value variant="success" height="18px"
                  style="min-width: 80px;"></b-progress>
              </span>
              <span v-else class="text-muted">—</span>
            </template>

            <template #cell(observation)="data">
              <span v-if="data.value" class="text-truncate d-inline-block" style="max-width: 200px;"
                :title="data.value">
                {{ data.value }}
              </span>
              <span v-else class="text-muted">Sin observación</span>
            </template>

            <template #cell(acciones)="data">
              <b-button size="sm" variant="outline-primary" @click="openSessionDetail(data.item)"
                :disabled="!data.item.endedAt">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-eye mr-1">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                Ver detalle
              </b-button>
            </template>
          </b-table>

          <!-- Paginación -->
          <div class="d-flex justify-content-between align-items-center mt-3" v-if="pagination.totalPages > 1">
            <span class="text-muted">
              Página {{ pagination.page }} de {{ pagination.totalPages }}
            </span>
            <b-pagination v-model="currentPage" :total-rows="pagination.total" :per-page="pageLimit"
              @change="onPageChange" pills size="sm">
            </b-pagination>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de detalle de sesión -->
    <b-modal id="sessionDetailModal" title="Detalle de Sesión RCP" size="xl" ok-only ok-title="Cerrar"
      ok-variant="secondary" scrollable>

      <div v-if="loadingDetail" class="text-center py-5">
        <b-spinner variant="primary"></b-spinner>
        <p class="mt-2 text-muted">Cargando detalle...</p>
      </div>

      <div v-else-if="selectedSession">

        <!-- Métricas generales -->
        <div class="row widget-statistic justify-content-center mb-4">
          <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 layout-spacing">
            <div class="widget">
              <div class="widget-heading">
                <div class="w-title">
                  <div class="w-icon icon-fill-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-activity">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p class="w-value">{{ selectedSession.avgPulmonaryPressure || 0 }}%</p>
                    <h5>Presión pulmonar</h5>
                  </div>
                </div>
              </div>
              <div class="widget-content">
                <b-progress :value="selectedSession.avgPulmonaryPressure || 0" :max="100" variant="primary" height="8px"
                  class="mt-2">
                </b-progress>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 layout-spacing">
            <div class="widget">
              <div class="widget-heading">
                <div class="w-title">
                  <div class="w-icon icon-fill-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-wind">
                      <path
                        d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2">
                      </path>
                    </svg>
                  </div>
                  <div>
                    <p class="w-value">{{ selectedSession.avgVentilation || 0 }}%</p>
                    <h5>Ventilación</h5>
                  </div>
                </div>
              </div>
              <div class="widget-content">
                <b-progress :value="selectedSession.avgVentilation || 0" :max="100" variant="info" height="8px"
                  class="mt-2">
                </b-progress>
              </div>
            </div>
          </div>

          <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 layout-spacing">
            <div class="widget">
              <div class="widget-heading">
                <div class="w-title">
                  <div class="w-icon icon-fill-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      class="feather feather-check-circle">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p class="w-value">{{ selectedSession.avgCorrectPosition || 0 }}%</p>
                    <h5>Posición correcta</h5>
                  </div>
                </div>
              </div>
              <div class="widget-content">
                <b-progress :value="selectedSession.avgCorrectPosition || 0" :max="100" variant="success" height="8px"
                  class="mt-2">
                </b-progress>
              </div>
            </div>
          </div>
        </div>

        <!-- Info general de la sesión -->
        <div class="row mb-4">
          <div class="col-md-6">
            <b-card class="border-left-primary">
              <p class="mb-1 text-muted" style="font-size: 0.85em;">FECHA DE INICIO</p>
              <strong>{{ formatDate(selectedSession.startedAt) }}</strong>
            </b-card>
          </div>
          <div class="col-md-6">
            <b-card class="border-left-success">
              <p class="mb-1 text-muted" style="font-size: 0.85em;">DURACIÓN DE LA MANIOBRA</p>
              <strong>{{ formatDuration(selectedSession.duration) }}</strong>
            </b-card>
          </div>
        </div>

        <!-- Observación general del docente -->
        <div class="row mb-4" v-if="selectedSession.observation">
          <div class="col-12">
            <div class="alert alert-primary" role="alert" style="color: #fff;">
              <div class="d-flex align-items-start">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-message-square mr-2 flex-shrink-0 mt-1">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <div>
                  <strong>Observación general del docente:</strong>
                  <p class="mb-0 mt-1 text-white">{{ selectedSession.observation }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-4" v-else>
          <div class="col-12">
            <div class="alert alert-secondary" role="alert">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" class="feather feather-info mr-1">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              El docente no agregó una observación general para esta sesión.
            </div>
          </div>
        </div>

        <!-- Línea de tiempo con eventos y observaciones -->
        <div class="row" v-if="selectedSession.events && selectedSession.events.length > 0">
          <div class="col-12">
            <div class="widget widget-activity-four">
              <div class="widget-heading mb-3">
                <h5 class="text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-list mr-1" style="vertical-align: middle;">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                  Flujo de la sesión — Feedback por fase
                </h5>
                <p class="text-muted mb-0" style="font-size: 0.85em;">
                  Cada paso registrado por el docente durante la maniobra.
                </p>
              </div>

              <div class="widget-content">
                <div class="mt-container mx-auto">
                  <div v-for="(evt, idx) in selectedSession.events" :key="'detail-' + idx" class="timeline-line pb-3">
                    <div class="tl-dot" :class="'b-' + getEventVariant(evt.eventType)"></div>
                    <div class="tl-content">
                      <div class="d-flex align-items-center mb-1 flex-wrap">
                        <b-badge :variant="getEventVariant(evt.eventType)" class="mr-2">
                          {{ formatSeconds(evt.sessionTimeSeconds) }}
                        </b-badge>
                        <strong>{{ getEventLabel(evt.eventType) }}</strong>
                      </div>

                      <!-- Observación del docente para este evento -->
                      <div v-if="evt.observation" class="alert alert-light border-left-event py-2 px-3 mt-1 mb-0"
                        :class="'border-left-' + getEventVariant(evt.eventType)">
                        <small class="text-muted d-block">Feedback del docente:</small>
                        <span>{{ evt.observation }}</span>
                      </div>
                      <div v-else class="text-muted mt-1">
                        <small><em>Sin observación para esta fase.</em></small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center text-muted py-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="1" class="feather feather-inbox mb-2 d-block mx-auto">
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
            <path
              d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z">
            </path>
          </svg>
          <p>No hay eventos registrados para esta sesión.</p>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from '@/plugins/axios';
import authService from '@/services/authService';

const EVENT_META = {
  TOGGLE_TIMER: { label: 'Cronómetro iniciado', variant: 'success' },
  TIMER_PAUSE: { label: 'Cronómetro pausado', variant: 'secondary' },
  TIMER_RESUME: { label: 'Cronómetro reanudado', variant: 'info' },
  STOP_TIMER: { label: 'Maniobra finalizada', variant: 'danger' },
  ACTIVATE_NORMAL: { label: 'Ritmo sinusal normal activado', variant: 'info' },
  ACTIVATE_LOW_PULSE: { label: 'Bradicardia sinusal activada', variant: 'warning' },
  ACTIVATE_FAST_PULSE: { label: 'Taquicardia sinusal activada', variant: 'warning' },
  ACTIVATE_VFIB: { label: 'Fibrilación ventricular activada', variant: 'danger' },
  ACTIVATE_VTACH: { label: 'Taquicardia ventricular activada', variant: 'danger' },
  ACTIVATE_ST_ELEVATION: { label: 'Supradesnivel del ST activado', variant: 'warning' },
  ACTIVATE_ASYSTOLE: { label: 'Asistolia activada', variant: 'danger' },
};

export default {
  name: 'MyRcpSessions',
  data() {
    const user = authService.getUser();
    return {
      studentId: user ? user.id : null,
      isBusy: false,
      loadingDetail: false,
      sessions: [],
      selectedSession: null,
      currentPage: 1,
      pageLimit: 10,
      pagination: { total: 0, page: 1, totalPages: 1 },
      fields: [
        { key: 'id', label: '#', thStyle: { width: '60px' } },
        { key: 'startedAt', label: 'Fecha / Hora', sortable: true },
        { key: 'duration', label: 'Duración' },
        { key: 'avgPulmonaryPressure', label: 'Presión Pulmonar' },
        { key: 'avgVentilation', label: 'Ventilación' },
        { key: 'avgCorrectPosition', label: 'Posición Correcta' },
        { key: 'observation', label: 'Observación general' },
        { key: 'acciones', label: 'Acciones' },
      ],
    };
  },

  mounted() {
    if (!this.studentId) {
      this.$swal.fire('Error', 'No se pudo identificar el usuario.', 'error');
      return;
    }
    this.fetchSessions();
  },

  methods: {
    async fetchSessions() {
      this.isBusy = true;
      try {
        const res = await axios.get(
          `/students/${this.studentId}/rcp-sessions?page=${this.currentPage}&limit=${this.pageLimit}&isCompleted=true`
        );
        this.sessions = res.data.data;
        this.pagination = res.data.pagination;
      } catch (error) {
        this.$swal.fire('Error', 'No se pudo cargar el historial de sesiones.', 'error');
      } finally {
        this.isBusy = false;
      }
    },

    async openSessionDetail(session) {
      this.selectedSession = null;
      this.loadingDetail = true;
      this.$bvModal.show('sessionDetailModal');
      try {
        const res = await axios.get(`/students/${this.studentId}/rcp-sessions/${session.id}`);
        this.selectedSession = res.data.session;
      } catch (error) {
        this.$swal.fire('Error', 'No se pudo cargar el detalle de la sesión.', 'error');
        this.$bvModal.hide('sessionDetailModal');
      } finally {
        this.loadingDetail = false;
      }
    },

    onPageChange(page) {
      this.currentPage = page;
      this.fetchSessions();
    },

    getEventLabel(eventType) {
      return EVENT_META[eventType] ? EVENT_META[eventType].label : eventType;
    },
    getEventVariant(eventType) {
      return EVENT_META[eventType] ? EVENT_META[eventType].variant : 'secondary';
    },
    formatSeconds(secs) {
      const m = Math.floor(secs / 60);
      const s = secs % 60;
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    },
    formatDate(dateStr) {
      if (!dateStr) return '—';
      return new Date(dateStr).toLocaleString('es', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit',
      });
    },
    formatDuration(seconds) {
      if (!seconds) return '—';
      const m = Math.floor(seconds / 60);
      const s = seconds % 60;
      return `${m}m ${s < 10 ? '0' : ''}${s}s`;
    },
  },
};
</script>

<style scoped>
.border-left-primary {
  border-left: 4px solid #4361ee !important;
}

.border-left-success {
  border-left: 4px solid #1abc9c !important;
}

.border-left-info {
  border-left: 4px solid #2196f3 !important;
}

.border-left-warning {
  border-left: 4px solid #e2a03f !important;
}

.border-left-danger {
  border-left: 4px solid #e7515a !important;
}

.border-left-secondary {
  border-left: 4px solid #888ea8 !important;
}

.border-left-event {
  border-left-width: 3px !important;
  border-left-style: solid !important;
}

.timeline-line {
  display: flex;
  align-items: flex-start;
  padding: 8px 0;
  position: relative;
}

.timeline-line::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 24px;
  bottom: -8px;
  width: 2px;
  background: #e0e6ed;
}

.timeline-line:last-child::before {
  display: none;
}

.tl-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;
  margin-top: 4px;
}

.tl-dot.b-success {
  background: #1abc9c;
}

.tl-dot.b-info {
  background: #2196f3;
}

.tl-dot.b-warning {
  background: #e2a03f;
}

.tl-dot.b-danger {
  background: #e7515a;
}

.tl-dot.b-secondary {
  background: #888ea8;
}

.tl-dot.b-primary {
  background: #4361ee;
}

.tl-content {
  flex: 1;
}

.w-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-fill-primary {
  background: rgba(67, 97, 238, 0.15);
  color: #4361ee;
}

.icon-fill-info {
  background: rgba(33, 150, 243, 0.15);
  color: #2196f3;
}

.icon-fill-success {
  background: rgba(26, 188, 156, 0.15);
  color: #1abc9c;
}
</style>
