<template>
  <div class="layout-px-spacing">
    <div class="row layout-top-spacing">

      <!-- Encabezado -->
      <div class="col-12 layout-spacing">
        <div class="widget-content widget-content-area br-6 p-4">
          <div class="d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <b-button variant="outline-secondary" size="sm" class="mr-3" @click="$router.push('/estudiantes')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-arrow-left">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Volver
              </b-button>
              <div>
                <h4 class="mb-0">Sesiones RCP del Estudiante</h4>
                <p class="text-muted mb-0" style="font-size:0.9em;" v-if="studentName">{{ studentName }}</p>
              </div>
            </div>
            <b-badge variant="primary" pill>{{ pagination.total || 0 }} sesiones</b-badge>
          </div>
        </div>
      </div>

      <!-- Tabla de sesiones -->
      <div class="col-12 layout-spacing">
        <div class="widget-content widget-content-area br-6">

          <b-table
            responsive
            hover
            :items="sessions"
            :fields="fields"
            :busy="isBusy"
            show-empty
            empty-text="Este estudiante no tiene sesiones RCP registradas.">

            <template #table-busy>
              <div class="text-center text-primary my-4">
                <b-spinner class="align-middle mr-2"></b-spinner>
                <strong>Cargando sesiones...</strong>
              </div>
            </template>

            <template #cell(startedAt)="data">
              {{ formatDate(data.value) }}
            </template>

            <template #cell(duration)="data">
              <span v-if="data.value">{{ formatDuration(data.value) }}</span>
              <b-badge v-else variant="warning">En proceso</b-badge>
            </template>

            <template #cell(avgPulmonaryPressure)="data">
              <span v-if="data.value !== null && data.value !== undefined">
                <b-progress :value="data.value" :max="100" show-value variant="primary" height="18px"
                  style="min-width:80px;"></b-progress>
              </span>
              <span v-else class="text-muted">—</span>
            </template>

            <template #cell(avgVentilation)="data">
              <span v-if="data.value !== null && data.value !== undefined">
                <b-progress :value="data.value" :max="100" show-value variant="info" height="18px"
                  style="min-width:80px;"></b-progress>
              </span>
              <span v-else class="text-muted">—</span>
            </template>

            <template #cell(avgCorrectPosition)="data">
              <span v-if="data.value !== null && data.value !== undefined">
                <b-progress :value="data.value" :max="100" show-value variant="success" height="18px"
                  style="min-width:80px;"></b-progress>
              </span>
              <span v-else class="text-muted">—</span>
            </template>

            <template #cell(observation)="data">
              <span v-if="data.value" class="text-truncate d-inline-block" style="max-width:200px;"
                :title="data.value">{{ data.value }}</span>
              <span v-else class="text-muted">Sin observación</span>
            </template>

            <template #cell(acciones)="data">
              <b-button size="sm" variant="outline-primary" @click="openDetail(data.item)"
                :disabled="!data.item.endedAt">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-edit-2 mr-1">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
                Ver / Editar
              </b-button>
            </template>
          </b-table>

          <div class="d-flex justify-content-between align-items-center mt-3" v-if="pagination.totalPages > 1">
            <span class="text-muted">Página {{ pagination.page }} de {{ pagination.totalPages }}</span>
            <b-pagination v-model="currentPage" :total-rows="pagination.total" :per-page="pageLimit"
              @change="onPageChange" pills size="sm"></b-pagination>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de detalle/edición -->
    <b-modal
      id="sessionDetailModal"
      title="Detalle de Sesión — Edición de Observaciones"
      size="xl"
      scrollable
      no-close-on-backdrop
      @hidden="onModalHidden">

      <div v-if="loadingDetail" class="text-center py-5">
        <b-spinner variant="primary"></b-spinner>
        <p class="mt-2 text-muted">Cargando sesión...</p>
      </div>

      <div v-else-if="editingSession">

        <!-- Métricas -->
        <div class="row widget-statistic justify-content-center mb-4">
          <div class="col-xl-4 col-lg-4 col-md-12 layout-spacing">
            <div class="widget">
              <div class="widget-heading">
                <div class="w-title">
                  <div class="w-icon icon-fill-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" class="feather feather-activity">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p class="w-value">{{ editingSession.avgPulmonaryPressure || 0 }}%</p>
                    <h5>Presión pulmonar</h5>
                  </div>
                </div>
              </div>
              <div class="widget-content">
                <b-progress :value="editingSession.avgPulmonaryPressure || 0" :max="100" variant="primary"
                  height="8px" class="mt-2"></b-progress>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-12 layout-spacing">
            <div class="widget">
              <div class="widget-heading">
                <div class="w-title">
                  <div class="w-icon icon-fill-info">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" class="feather feather-wind">
                      <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="w-value">{{ editingSession.avgVentilation || 0 }}%</p>
                    <h5>Ventilación</h5>
                  </div>
                </div>
              </div>
              <div class="widget-content">
                <b-progress :value="editingSession.avgVentilation || 0" :max="100" variant="info"
                  height="8px" class="mt-2"></b-progress>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-12 layout-spacing">
            <div class="widget">
              <div class="widget-heading">
                <div class="w-title">
                  <div class="w-icon icon-fill-success">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2" class="feather feather-check-circle">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <p class="w-value">{{ editingSession.avgCorrectPosition || 0 }}%</p>
                    <h5>Posición correcta</h5>
                  </div>
                </div>
              </div>
              <div class="widget-content">
                <b-progress :value="editingSession.avgCorrectPosition || 0" :max="100" variant="success"
                  height="8px" class="mt-2"></b-progress>
              </div>
            </div>
          </div>
        </div>

        <!-- Info fecha/duración -->
        <div class="row mb-4">
          <div class="col-md-6 mb-3">
            <b-card class="h-100 border-left-primary">
              <p class="mb-1 text-muted" style="font-size:0.8em;">FECHA DE INICIO</p>
              <strong>{{ formatDate(editingSession.startedAt) }}</strong>
            </b-card>
          </div>
          <div class="col-md-6 mb-3">
            <b-card class="h-100 border-left-success">
              <p class="mb-1 text-muted" style="font-size:0.8em;">DURACIÓN</p>
              <strong>{{ formatDuration(editingSession.duration) }}</strong>
            </b-card>
          </div>
        </div>

        <!-- Observación general — editable -->
        <div class="row mb-4">
          <div class="col-12">
            <label class="font-weight-bold">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" class="feather feather-message-square mr-1">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Observación general de la sesión
            </label>
            <b-form-textarea
              v-model="editingSession.observation"
              placeholder="Escriba aquí su observación general sobre la sesión..."
              rows="3"
              max-rows="6">
            </b-form-textarea>
          </div>
        </div>

        <!-- Flujo de la sesión con observaciones por fase — editable -->
        <div v-if="editingSession.events && editingSession.events.length > 0" class="row mb-3">
          <div class="col-12">
            <div class="widget widget-activity-four">
              <div class="widget-heading mb-3">
                <h5 class="text-primary mb-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" class="feather feather-list mr-1"
                    style="vertical-align:middle;">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                  Flujo de la sesión — Observaciones por fase
                </h5>
                <p class="text-muted mb-0" style="font-size:0.85em;">
                  Edite el feedback específico para cada fase de la sesión.
                </p>
              </div>
              <div class="widget-content">
                <div class="mt-container mx-auto">
                  <div v-for="(evt, idx) in editingSession.events" :key="'e-' + idx" class="timeline-line pb-3">
                    <div class="tl-dot" :class="'b-' + getEventVariant(evt.eventType)"></div>
                    <div class="tl-content" style="width:100%;">
                      <div class="d-flex align-items-center mb-2 flex-wrap">
                        <b-badge :variant="getEventVariant(evt.eventType)" class="mr-2">
                          {{ formatSeconds(evt.sessionTimeSeconds) }}
                        </b-badge>
                        <strong>{{ getEventLabel(evt.eventType) }}</strong>
                      </div>
                      <b-form-textarea
                        v-model="evt.observation"
                        :placeholder="'Feedback del docente sobre: ' + getEventLabel(evt.eventType)"
                        rows="2"
                        size="sm">
                      </b-form-textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="text-center text-muted py-3 mb-3">
          <small>No hay eventos registrados para esta sesión.</small>
        </div>

      </div>

      <template #modal-footer>
        <b-button variant="secondary" @click="$bvModal.hide('sessionDetailModal')">Cerrar</b-button>
        <b-button variant="primary" :disabled="isSaving" @click="saveObservations">
          <b-spinner small v-if="isSaving" class="mr-1"></b-spinner>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" class="feather feather-save mr-1">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
          Guardar observaciones
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import axios from '@/plugins/axios';

const EVENT_META = {
  TOGGLE_TIMER:          { label: 'Cronómetro iniciado',              variant: 'success' },
  TIMER_PAUSE:           { label: 'Cronómetro pausado',               variant: 'secondary' },
  TIMER_RESUME:          { label: 'Cronómetro reanudado',             variant: 'info' },
  STOP_TIMER:            { label: 'Maniobra finalizada',              variant: 'danger' },
  ACTIVATE_NORMAL:       { label: 'Ritmo sinusal normal activado',    variant: 'info' },
  ACTIVATE_LOW_PULSE:    { label: 'Bradicardia sinusal activada',     variant: 'warning' },
  ACTIVATE_FAST_PULSE:   { label: 'Taquicardia sinusal activada',     variant: 'warning' },
  ACTIVATE_VFIB:         { label: 'Fibrilación ventricular activada', variant: 'danger' },
  ACTIVATE_VTACH:        { label: 'Taquicardia ventricular activada', variant: 'danger' },
  ACTIVATE_ST_ELEVATION: { label: 'Supradesnivel del ST activado',    variant: 'warning' },
  ACTIVATE_ASYSTOLE:     { label: 'Asistolia activada',              variant: 'danger' },
};

export default {
  name: 'StudentSessions',
  data() {
    return {
      studentId: this.$route.params.id,
      studentName: '',
      isBusy: false,
      isSaving: false,
      loadingDetail: false,
      sessions: [],
      editingSession: null,
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
        { key: 'acciones', label: 'Acciones', thStyle: { width: '140px' } },
      ],
    };
  },

  mounted() {
    this.fetchSessions();
  },

  methods: {
    async fetchSessions() {
      this.isBusy = true;
      try {
        const res = await axios.get(
          `/students/${this.studentId}/rcp-sessions?page=${this.currentPage}&limit=${this.pageLimit}`
        );
        this.sessions = res.data.data;
        this.pagination = res.data.pagination;
        if (this.sessions.length > 0 && this.sessions[0].student) {
          const s = this.sessions[0].student;
          this.studentName = `${s.name} ${s.surname}`;
        }
      } catch (error) {
        this.$swal.fire('Error', 'No se pudo cargar el historial de sesiones.', 'error');
      } finally {
        this.isBusy = false;
      }
    },

    async openDetail(session) {
      this.editingSession = null;
      this.loadingDetail = true;
      this.$bvModal.show('sessionDetailModal');
      try {
        const res = await axios.get(`/students/${this.studentId}/rcp-sessions/${session.id}`);
        // Hacemos una copia profunda para edición
        this.editingSession = JSON.parse(JSON.stringify(res.data.session));
      } catch (error) {
        this.$swal.fire('Error', 'No se pudo cargar el detalle de la sesión.', 'error');
        this.$bvModal.hide('sessionDetailModal');
      } finally {
        this.loadingDetail = false;
      }
    },

    async saveObservations() {
      if (!this.editingSession) return;
      this.isSaving = true;
      try {
        const payload = {
          observation: this.editingSession.observation || null,
          events: (this.editingSession.events || []).map(evt => ({
            id: evt.id,
            observation: evt.observation || null,
          })),
        };
        await axios.patch(`/students/${this.studentId}/rcp-sessions/${this.editingSession.id}`, payload);
        this.$swal.fire('Éxito', 'Observaciones guardadas correctamente.', 'success');
        this.$bvModal.hide('sessionDetailModal');
        this.fetchSessions();
      } catch (error) {
        this.$swal.fire('Error', 'No se pudieron guardar las observaciones.', 'error');
      } finally {
        this.isSaving = false;
      }
    },

    onModalHidden() {
      this.editingSession = null;
    },

    onPageChange(page) {
      this.currentPage = page;
      this.fetchSessions();
    },

    getEventLabel(type) { return EVENT_META[type] ? EVENT_META[type].label : type; },
    getEventVariant(type) { return EVENT_META[type] ? EVENT_META[type].variant : 'secondary'; },
    formatSeconds(secs) {
      const m = Math.floor(secs / 60);
      const s = secs % 60;
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    },
    formatDate(d) {
      if (!d) return '—';
      return new Date(d).toLocaleString('es', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit',
      });
    },
    formatDuration(secs) {
      if (!secs) return '—';
      const m = Math.floor(secs / 60);
      const s = secs % 60;
      return `${m}m ${s < 10 ? '0' : ''}${s}s`;
    },
  },
};
</script>

<style scoped>
.border-left-primary  { border-left: 4px solid #4361ee !important; }
.border-left-success  { border-left: 4px solid #1abc9c !important; }
.border-left-info     { border-left: 4px solid #2196f3 !important; }
.border-left-warning  { border-left: 4px solid #e2a03f !important; }
.border-left-danger   { border-left: 4px solid #e7515a !important; }
.border-left-secondary { border-left: 4px solid #888ea8 !important; }

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
.timeline-line:last-child::before { display: none; }

.tl-dot {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-right: 12px;
  flex-shrink: 0;
  margin-top: 4px;
}
.tl-dot.b-success   { background: #1abc9c; }
.tl-dot.b-info      { background: #2196f3; }
.tl-dot.b-warning   { background: #e2a03f; }
.tl-dot.b-danger    { background: #e7515a; }
.tl-dot.b-secondary { background: #888ea8; }
.tl-dot.b-primary   { background: #4361ee; }
.tl-content { flex: 1; }

.w-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-fill-primary  { background: rgba(67, 97, 238, 0.15); color: #4361ee; }
.icon-fill-info     { background: rgba(33, 150, 243, 0.15); color: #2196f3; }
.icon-fill-success  { background: rgba(26, 188, 156, 0.15); color: #1abc9c; }
</style>
