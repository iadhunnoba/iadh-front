<template>
  <div class="home">
    <div class="row mt-4 mx-4">
      <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
        <div class="widget widget-visitor-by-browser text-center">
          <div class="widget-heading">
            <h4>Parámetros maniobra RCP</h4>
          </div>
          <div class="widget-content">
            <div class="browser-list">
              <div class="w-icon icon-fill-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-radio">
                  <circle cx="12" cy="12" r="2"></circle>
                  <path
                    d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14">
                  </path>
                </svg>
              </div>
              <div class="w-browser-details">
                <div class="w-browser-info">
                  <h6 v-bind:style="{ fontSize: 1.2 + 'em' }">Compresiones</h6>
                  <p v-bind:style="{ fontSize: 1.2 + 'em' }" class="browser-count">{{ temperature }}%</p>
                </div>
                <div class="w-browser-stats">
                  <b-progress variant="gradient-primary" :value="temperature" :min="0" :max="3500"></b-progress>
                </div>
              </div>
            </div>

            <div class="browser-list">
              <div class="w-icon icon-fill-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-activity">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <div class="w-browser-details">
                <div class="w-browser-info">
                  <h6 v-bind:style="{ fontSize: 1.2 + 'em' }">Presión interna pulmones</h6>
                  <p v-bind:style="{ fontSize: 1.2 + 'em' }" class="browser-count">{{ pressure }}</p>
                </div>
                <div class="w-browser-stats">
                  <b-progress variant="gradient-danger" :value="pressure" :min="0" :max="5"></b-progress>
                </div>
              </div>
            </div>

            <div class="browser-list">
              <div class="w-icon icon-fill-warning">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-wind">
                  <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
                </svg>
              </div>
              <div class="w-browser-details">
                <div class="w-browser-info">
                  <h6 v-bind:style="{ fontSize: 1.2 + 'em' }">Flujo de aire</h6>
                  <p v-bind:style="{ fontSize: 1.2 + 'em' }" class="browser-count">{{ flowrate }}</p>
                </div>
                <div class="w-browser-stats">
                  <b-progress variant="gradient-warning" :value="flowrate" :min="0" :max="100"></b-progress>
                </div>
              </div>
            </div>

            <div class="browser-list">
              <div class="w-icon" :class="touch ? 'icon-fill-success' : 'icon-fill-secondary'">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="feather feather-hand">
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
                </svg>
              </div>
              <div class="w-browser-details">
                <div class="w-browser-info">
                  <h6 v-bind:style="{ fontSize: 1.2 + 'em' }">Contacto</h6>
                  <p v-bind:style="{ fontSize: 1.2 + 'em' }" class="browser-count">
                    <b-badge :variant="touch ? 'success' : 'secondary'">
                      {{ touch ? 'Detectado' : 'Sin contacto' }}
                    </b-badge>
                  </p>
                </div>
                <div class="w-browser-stats">
                  <b-progress :variant="touch ? 'success' : 'secondary'" :value="touch ? 1 : 0" :min="0" :max="1"></b-progress>
                </div>
              </div>
            </div>

            <div v-if="userRole !== 'estudiante'">
              <b-button @click="sendCommand('TOGGLE_TIMER')" variant="info" class="w-75 mt-3">
                {{ timerActive ? (timerPaused ? 'Reanudar' : 'Pausar') : 'Iniciar Cronómetro' }}
              </b-button>
              <b-button v-if="timerActive" @click="sendCommand('STOP_TIMER')" variant="danger" class="w-75 mt-2">
                Finalizar Maniobra
              </b-button>
              <b-button @click="sendCommand('RESET_TIMER')" variant="secondary" class="w-75 mt-2" v-if="timerActive">
                Restablecer Cronómetro
              </b-button>
            </div>

            <!-- Cronómetro moderno -->
            <div class="timer-widget mt-3 mb-2" :class="timerWrapperClass">
              <div class="tw-status">{{ timerStatusLabel }}</div>
              <div class="tw-time" :class="timerColorClass">{{ formattedTime }}</div>
              <b-progress class="tw-bar" :value="ramainingTime" :max="180" :variant="timerVariant"
                height="6px"></b-progress>
              <div class="tw-footer">
                <span>{{ 180 - ramainingTime }}s transcurridos</span>
                <span>3:00 total</span>
              </div>
            </div>

            <!-- Modal de Reporte -->
            <b-modal id="modalxl" title="Reporte de Sesión RCP" size="xl" no-close-on-backdrop>
              <div class="row widget-statistic justify-content-center">
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
                          <p class="w-value">{{ avgPressure }}%</p>
                          <h5>Presión pulmonar - Promedio</h5>
                        </div>
                      </div>
                    </div>
                    <div class="widget-content">
                      <div class="w-chart">
                        <apexchart v-if="followers_options" height="160" type="area" :options="followers_options"
                          :series="series1"></apexchart>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 layout-spacing">
                  <div class="widget">
                    <div class="widget-heading">
                      <div class="w-title">
                        <div class="w-icon icon-fill-primary2">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-activity">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p class="w-value">{{ avgVentilation }}%</p>
                          <h5>Ventilación - Promedio</h5>
                        </div>
                      </div>
                    </div>
                    <div class="widget-content">
                      <div class="w-chart">
                        <apexchart v-if="followers_options2" height="160" type="area" :options="followers_options2"
                          :series="series2"></apexchart>
                      </div>
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
                            class="feather feather-activity">
                            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                          </svg>
                        </div>
                        <div>
                          <p class="w-value">{{ avgPosition }}%</p>
                          <h5>Posición correcta - Promedio</h5>
                        </div>
                      </div>
                    </div>
                    <div class="widget-content">
                      <div class="w-chart">
                        <apexchart v-if="followers_options3" height="160" type="area" :options="followers_options3"
                          :series="series3"></apexchart>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div v-if="userRole !== 'estudiante'" class="row mt-2 mb-4 p-3 border rounded">
                <div class="col-12">
                  <h5 class="text-primary mb-3">Asignar Reporte a Estudiante</h5>
                  <b-form-input v-model="searchStudent" placeholder="Buscar por nombre, apellido o ID..."
                    class="mb-2"></b-form-input>
                  <b-form-select v-model="selectedStudentId" :options="studentOptions">
                    <template #first>
                      <b-form-select-option :value="null" disabled>-- Seleccione un estudiante de la lista
                        --</b-form-select-option>
                    </template>
                  </b-form-select>
                </div>
              </div>

              <!-- Timeline de eventos con observaciones por fase -->
              <div v-if="sessionEvents.length > 0" class="row mt-3 mb-3">
                <div class="col-12">
                  <div class="widget widget-activity-four">
                    <div class="widget-heading">
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
                        Flujo de la sesión — Observaciones por fase
                      </h5>
                      <p class="text-muted mb-0" style="font-size: 0.85em;">
                        Agregue una observación específica para cada paso de la sesión.
                      </p>
                    </div>
                    <div class="widget-content">
                      <div class="mt-container mx-auto">
                        <div v-for="(evt, idx) in sessionEvents" :key="'evt-' + idx" class="timeline-line pb-3">
                          <div class="tl-dot" :class="'b-' + getEventVariant(evt.eventType)"></div>
                          <div class="tl-content" style="width: 100%;">
                            <div class="d-flex align-items-center mb-1">
                              <b-badge :variant="getEventVariant(evt.eventType)" class="mr-2">
                                {{ formatSeconds(evt.sessionTimeSeconds) }}
                              </b-badge>
                              <strong>{{ getEventLabel(evt.eventType) }}</strong>
                            </div>
                            <b-form-textarea v-model="evt.observation"
                              :placeholder="'Observación sobre: ' + getEventLabel(evt.eventType)" rows="2" size="sm"
                              class="mt-1">
                            </b-form-textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mt-4">
                <div class="col-12">
                  <h5>Observaciones Generales de la Sesión</h5>
                  <b-form-textarea v-model="observation" placeholder="Ingrese observaciones generales de la sesión..."
                    rows="3" max-rows="6"></b-form-textarea>
                </div>
              </div>
              <template #modal-footer>
                <b-button variant="default" @click="discardReport"><i class="flaticon-cancel-12"></i>
                  Descartar</b-button>
                <b-button variant="primary" @click="saveSessionReport">Guardar Reporte</b-button>
              </template>
            </b-modal>

            <b-button v-if="userRole !== 'estudiante' && permisos" variant="info" class="w-75 mt-4"
              v-b-modal.functionModal>Activar
              funciones</b-button>

            <b-modal id="functionModal" ref="functionModal" title="Funciones del Simulador" :hide-footer="true">
              <div class="row">
                <div class="col-4 col-md-6">
                  <b-button variant="info" class="w-100 mb-3 mr-1 equal-btn"
                    @click="sendCommand('ACTIVATE_NORMAL', { cycleSpace: 120 })">Activar ritmo sinusal del
                    corazón</b-button>
                </div>
                <div class="col-4 col-md-6">
                  <b-button variant="info" class="w-100 mb-3 mr-1 equal-btn"
                    @click="sendCommand('ACTIVATE_LOW_PULSE')">Activar
                    bradicardia sinusal</b-button>
                </div>
                <div class="col-4 col-md-6">
                  <b-button variant="info" class="w-100 mb-3 mr-1 equal-btn"
                    @click="sendCommand('ACTIVATE_FAST_PULSE')">Activar
                    taquicardia sinusal</b-button>
                </div>
                <div class="col-4 col-md-6">
                  <b-button variant="info" class="w-100 mb-3 mr-1 equal-btn"
                    @click="sendCommand('ACTIVATE_VFIB')">Activar
                    fibrilación ventricular</b-button>
                </div>
                <div class="col-4 col-md-6">
                  <b-button variant="info" class="w-100 mb-3 mr-1 equal-btn"
                    @click="sendCommand('ACTIVATE_VTACH')">Activar
                    taquicardia ventricular</b-button>
                </div>
                <div class="col-4 col-md-6">
                  <b-button variant="info" class="w-100 mb-3 mr-1 equal-btn"
                    @click="sendCommand('ACTIVATE_ST_ELEVATION')">Supradesnivel del ST</b-button>
                </div>
                <div class="col-4 col-md-6">
                  <b-button variant="info" class="w-100 mb-3 mr-1 equal-btn"
                    @click="sendCommand('ACTIVATE_ASYSTOLE')">Activar
                    asistolia</b-button>
                </div>
              </div>
            </b-modal>
          </div>
        </div>

      </div>
      <div class="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
        <div class="row m-4">
          <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
            <canvas ref="chart" class="w-100" width="600" height="140"></canvas>
          </div>
          <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="row">
              <div class="col-12">
                <div class="custom-progress progress-up mb-2" style="width: 100%">
                  <div class="range-count">
                    <span class="range-count-number" v-bind:class="{ warning: isWarningFC }"
                      v-bind:style="{ fontSize: 2.5 + 'em' }">FC: {{ slider1 }}</span>
                  </div>
                  <b-input v-if="userRole !== 'estudiante' && permisos" type="range" v-model="slider1" :min="0"
                    :max="240" class="progress-range-counter"></b-input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row m-4">
          <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
            <canvas ref="saturation" class="w-100" width="600" height="140"></canvas>
          </div>
          <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 col-12">
            <div class="custom-progress progress-up" style="width: 100%">
              <div class="range-count">
                <span class="range-count-number" v-bind:class="{ warning: isWarningSpO2 }"
                  v-bind:style="{ fontSize: 2.5 + 'em' }">SpO2: {{ slider2 }}</span>
              </div>
              <b-input v-if="userRole !== 'estudiante' && permisos" type="range" v-model="slider2" :min="0" :max="100"
                class="progress-range-counter"></b-input>
            </div>
          </div>
        </div>
        <div class="row m-4">
          <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12">
            <canvas ref="tensionArterial" class="w-100" width="600" height="140"></canvas>
          </div>
          <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12">
            <div class="custom-progress progress-up" style="width: 100%">
              <div class="range-count">
                <span class="range-count-number" v-bind:class="{ warning: isWarningTAA || isWarningTAB }"
                  v-bind:style="{ fontSize: 2.5 + 'em' }">TA: {{ slider3 }} / {{ slider4 }}</span>
              </div>
              <b-input v-if="userRole !== 'estudiante' && permisos" type="range" v-model="slider3" :min="0" :max="240"
                class="progress-range-counter"></b-input>
              <b-input v-if="userRole !== 'estudiante' && permisos" type="range" v-model="slider4" :min="0" :max="120"
                class="progress-range-counter"></b-input>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pasos de la sesión: banda horizontal debajo de los gráficos -->
    <div v-if="userRole !== 'estudiante' && timerActive && sessionEvents.length > 0" class="row mx-4 mb-4">
      <div class="col-12">
        <div class="widget steps-widget">
          <div class="widget-heading d-flex align-items-center justify-content-between pb-0 mb-2">
            <h6 class="text-primary mb-0 d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="feather feather-activity mr-1">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              Pasos de la sesión
            </h6>
            <b-badge variant="primary" pill>{{ sessionEvents.length }}</b-badge>
          </div>
          <div class="steps-scroll">
            <div class="steps-track">
              <div v-for="(evt, idx) in sessionEvents" :key="idx" class="step-chip"
                :class="'step-chip--' + getEventVariant(evt.eventType)">
                <span class="step-chip__time">{{ formatSeconds(evt.sessionTimeSeconds) }}</span>
                <span class="step-chip__label">{{ getEventLabel(evt.eventType) }}</span>
                <span class="step-chip__num">#{{ idx + 1 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/plugins/axios'
import authService from '@/services/authService';
import mqtt from 'mqtt';
import smoothie from 'smoothie';

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
  name: 'home',
  components: {},
  data() {
    return {
      tokenInflux: process.env.INFLUXDB_TOKEN,
      permisos: true,
      slider1: 75,
      slider2: 100,
      slider3: 120,
      slider4: 80,
      isWarningSpO2: false,
      isWarningFC: false,
      isWarningTAA: false,
      isWarningTAB: false,
      observation: '',
      bloodPressure: '',
      isVentricularTachycardia: false,
      timepoInicialSesion: null,
      timepoFinalSesion: null,
      currentSessionId: null,

      // Roles y Estudiantes
      userRole: authService.getUser() ? authService.getUser().role : 'estudiante',
      studentId: this.$route.params.id || (authService.getUser() ? authService.getUser().id : 1),
      students: [],
      searchStudent: '',
      selectedStudentId: null,

      // Arrays para recolectar datos reales durante la maniobra
      recordedPressure: [],
      recordedVentilation: [],
      recordedPosition: [],

      series1: [{ data: [] }],
      series2: [{ data: [] }],
      series3: [{ data: [] }],

      // Eventos de la sesión (línea de tiempo)
      sessionEvents: [],

      // Variables necesarias para el cronómetro de la maniobra
      timerActive: false,
      timerPaused: false,
      ramainingTime: 180,
      timerInterval: null,

      // Variables para obtener valores desde esp32
      temperature: 0,
      humidity: 0,
      motionDetected: 0,
      pressure: null,
      flowrate: null,
      touch: null,

      // EMQX CONNECTION VARS
      connection: {
        protocol: "ws",
        host: "192.168.0.100",
        port: 8083,
        endpoint: "/mqtt",
        clean: true,
        connectTimeout: 30 * 1000,
        reconnectPeriod: 4000,
        clientId: "emqx_vue_" + Math.random().toString(16).substring(2, 8),
        username: "vuesocket",
        password: "test1234",
      },
      subscriptionSensor: {
        topic: "simulador/situacion",
        qos: 0,
      },
      subscriptionControl: {
        topic: "simulador/control",
        qos: 0,
      },
      client: {
        connected: false,
      },
      subscribeSuccess: false,
      connecting: false,
      retryTimes: 0,
    };
  },

  mounted() {
    this.initData();
    this.createConnection();

    if (this.userRole !== 'estudiante') {
      this.fetchStudents();
    }

    this.graphicData = [];
    this.cycleSpace = 0;
    this.iterator = 0;
    var series = new smoothie.TimeSeries();
    var canvas = this.$refs.chart;
    var chart = new smoothie.SmoothieChart({ grid: { strokeStyle: '#bbbbbb', fillStyle: '#ffffff', lineWidth: 0, verticalSections: 6 }, maxValue: 7, minValue: -4, millisPerPixel: 20 });
    chart.streamTo(canvas, 1000);
    chart.addTimeSeries(series, { lineWidth: 5, strokeStyle: '#00ff00' });

    this.graphicSaturation = [];
    this.cycleSpaceSaturation = 0;
    this.iteratorSaturation = 0;
    var seriesSaturation = new smoothie.TimeSeries();
    var canvasSaturation = this.$refs.saturation;
    var chartSaturation = new smoothie.SmoothieChart({ grid: { strokeStyle: '#bbbbbb', fillStyle: '#ffffff', lineWidth: 0, verticalSections: 6 }, maxValue: 7, minValue: -4, millisPerPixel: 20 });
    chartSaturation.streamTo(canvasSaturation, 1000);
    chartSaturation.addTimeSeries(seriesSaturation, { lineWidth: 5, strokeStyle: '#FFFF00' });

    this.graphicPressure = [];
    this.cycleSpacePressure = 0;
    this.iteratorPressure = 0;
    var seriesPressure = new smoothie.TimeSeries();
    var canvasPressure = this.$refs.tensionArterial;
    var chartPressure = new smoothie.SmoothieChart({ grid: { strokeStyle: '#bbbbbb', fillStyle: '#ffffff', lineWidth: 0, verticalSections: 6 }, maxValue: 7, minValue: -4, millisPerPixel: 20 });
    chartPressure.streamTo(canvasPressure, 1000);
    chartPressure.addTimeSeries(seriesPressure, { lineWidth: 5, strokeStyle: '#FF0000' });

    this.localActivateNormalPulseHeart(120);

    const runIteration = () => { series.append(Date.now(), this.graphicData[this.iterator]); this.iterator++; if (this.iterator === this.graphicData.length) { this.iterator = 0; } setTimeout(runIteration, this.cycleSpace); };
    setTimeout(runIteration, this.cycleSpace);

    const runIterationSaturation = () => { seriesSaturation.append(Date.now(), this.graphicSaturation[this.iteratorSaturation]); this.iteratorSaturation++; if (this.iteratorSaturation === this.graphicSaturation.length) { this.iteratorSaturation = 0; } setTimeout(runIterationSaturation, this.cycleSpaceSaturation); };
    setTimeout(runIterationSaturation, this.cycleSpaceSaturation);

    const runIterationPressure = () => { seriesPressure.append(Date.now(), this.graphicPressure[this.iteratorPressure]); this.iteratorPressure++; if (this.iteratorPressure === this.graphicPressure.length) { this.iteratorPressure = 0; } setTimeout(runIterationPressure, this.cycleSpacePressure); };
    setTimeout(runIterationPressure, this.cycleSpacePressure);

    this.$watch('slider1', (val) => { this.isWarningFC = val === '--' || parseFloat(val) < 60 || parseFloat(val) > 100; });
    this.$watch('slider2', (val) => { this.isWarningSpO2 = val === '--' || parseFloat(val) < 90; });
    this.$watch('slider3', (val) => { this.isWarningTAA = val === '--' || parseFloat(val) < 70 || parseFloat(val) > 130; });
    this.$watch('slider4', (val) => { this.isWarningTAB = val === '--' || parseFloat(val) < 60 || parseFloat(val) > 90; });
  },

  computed: {
    formattedTime() {
      const minutes = Math.floor(this.ramainingTime / 60);
      const seconds = this.ramainingTime % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
    timerColorClass() {
      if (this.ramainingTime > 60) return 'tw-green';
      if (this.ramainingTime > 30) return 'tw-orange';
      return 'tw-red';
    },
    timerWrapperClass() {
      if (this.ramainingTime <= 30) return 'tw-red-state';
      if (this.ramainingTime <= 60) return 'tw-orange-state';
      return '';
    },
    timerVariant() {
      if (this.ramainingTime > 60) return 'success';
      if (this.ramainingTime > 30) return 'warning';
      return 'danger';
    },
    timerStatusLabel() {
      if (!this.timerActive) return 'Tiempo restante';
      if (this.timerPaused) return 'Cronómetro pausado';
      return 'Tiempo restante';
    },
    filteredStudents() {
      if (!this.searchStudent) return this.students;
      const search = this.searchStudent.toLowerCase();
      return this.students.filter(s => (s.name && s.name.toLowerCase().includes(search)) || (s.surname && s.surname.toLowerCase().includes(search)) || (s.username && s.username.toLowerCase().includes(search)) || (s.studentIdNumber && s.studentIdNumber.toLowerCase().includes(search)));
    },
    studentOptions() {
      return this.filteredStudents.map(s => ({ value: s.id, text: `${s.name} ${s.surname} - ${s.username} (ID: ${s.studentIdNumber || 'N/A'})` }));
    },
    avgPressure() { return this.getAverage(this.series1); },
    avgVentilation() { return this.getAverage(this.series2); },
    avgPosition() { return this.getAverage(this.series3); },
    followers_options() { return this.getChartOptions('#4361ee'); },
    followers_options2() { return this.getChartOptions('#F3A695'); },
    followers_options3() { return this.getChartOptions('#52C1B7'); }
  },

  watch: {
    slider1(sliderValue) {
      if (this.isVentricularTachycardia) {
        if (sliderValue == '0') {
          this.localActivateAsystole();
        } else {
          this.setVentricularTachycardia();
          if (this.$refs.functionModal) this.$refs.functionModal.hide();
        }
      }
    }
  },

  methods: {
    // --- HELPERS DE EVENTOS ---

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

    // Registra un evento en la línea de tiempo
    trackEvent(eventType, eventData = null) {
      // No registrar reset ni eventos sin sesión iniciada
      if (eventType === 'RESET_TIMER') return;
      const elapsed = this.timepoInicialSesion
        ? Math.floor((Date.now() - this.timepoInicialSesion) / 1000)
        : 0;
      this.sessionEvents.push({
        eventType,
        eventData: eventData && Object.keys(eventData).length > 0 ? eventData : null,
        observation: '',
        sessionTimeSeconds: elapsed,
      });
    },

    // --- LÓGICA MAESTRO/ESCLAVO VÍA MQTT ---

    sendCommand(action, payload = {}) {
      if (this.userRole === 'estudiante') return;

      const command = { action, ...payload };

      // Detectar si es pausa o reanudación antes de ejecutar (para trackear correctamente)
      let trackAction = action;
      if (action === 'TOGGLE_TIMER') {
        if (this.timerActive && !this.timerPaused) {
          trackAction = 'TIMER_PAUSE';
        } else if (this.timerActive && this.timerPaused) {
          trackAction = 'TIMER_RESUME';
        }
        // Si !timerActive es inicio → se trackea como TOGGLE_TIMER
      }

      this.executeCommand(command);

      if (this.client && this.client.connected) {
        const message = JSON.stringify(command);
        this.client.publish(this.subscriptionControl.topic, message, { qos: 0 });
      } else {
        console.warn("MQTT no conectado. La función se activó solo en tu pantalla local.");
      }

      // Registrar el evento en la línea de tiempo
      this.trackEvent(trackAction, Object.keys(payload).length > 0 ? payload : null);
    },

    executeCommand(cmd) {
      switch (cmd.action) {
        case 'TOGGLE_TIMER': this.localToggleTimer(); break;
        case 'STOP_TIMER': this.localStopTimer(); break;
        case 'RESET_TIMER': this.localResetTimer(); break;
        case 'ACTIVATE_NORMAL': this.localActivateNormalPulseHeart(cmd.cycleSpace); break;
        case 'ACTIVATE_LOW_PULSE': this.localActivateLowPulseHeart(); break;
        case 'ACTIVATE_FAST_PULSE': this.localActivateFastPulseHeart(); break;
        case 'ACTIVATE_VFIB': this.localActivateVentricularFibrillation(); break;
        case 'ACTIVATE_VTACH': this.localActivateVentricularTachycardia(); break;
        case 'ACTIVATE_ST_ELEVATION': this.localActivateStElevation(); break;
        case 'ACTIVATE_ASYSTOLE': this.localActivateAsystole(); break;
      }
    },

    // --- CONEXIÓN MQTT ---

    createConnection() {
      try {
        this.connecting = true;
        const { protocol, host, port, endpoint, ...options } = this.connection;
        const connectUrl = `${protocol}://${host}:${port}${endpoint}`;

        this.client = mqtt.connect(connectUrl, options);

        if (this.client.on) {
          this.client.on("connect", () => {
            this.connecting = false;
            this.client.connected = true;
            this.doSubscribe();
          });

          this.client.on("reconnect", this.handleOnReConnect);
          this.client.on("error", (error) => {
            console.warn("Error de conexión MQTT:", error);
            this.client.connected = false;
            this.connecting = false;
          });

          this.client.on("message", (topic, message) => {
            const payloadString = message.toString();
            console.log("Tópico recibido:", topic, "Mensaje:", payloadString);
            try {
              const parsedMessage = JSON.parse(payloadString);
              console.log("Mensaje parseado:", parsedMessage);

              if (topic === this.subscriptionControl.topic && this.userRole === 'estudiante') {
                this.executeCommand(parsedMessage);
              } else if (topic === this.subscriptionSensor.topic) {
                if (parsedMessage.temperature !== undefined) this.temperature = parseFloat(parsedMessage.temperature).toFixed(1);
                if (parsedMessage.pressure !== undefined) this.pressure = parseFloat(parsedMessage.pressure).toFixed(3);
                if (parsedMessage.flowrate !== undefined) this.flowrate = parsedMessage.flowrate;
                if (parsedMessage.touch !== undefined) this.touch = parsedMessage.touch;
                if (parsedMessage.humidity !== undefined) this.humidity = parsedMessage.humidity;
                if (parsedMessage.motionDetected !== undefined) this.motionDetected = parsedMessage.motionDetected;
              }
            } catch (error) {
              // Ignorar errores de parseo
              console.warn("No se pudo parsear el mensaje MQTT:", error);
            }
          });
        }
      } catch (error) {
        this.connecting = false;
        console.error("Error al crear conexión MQTT:", error);
      }
    },

    doSubscribe() {
      const topics = [this.subscriptionSensor.topic];
      if (this.userRole === 'estudiante') {
        topics.push(this.subscriptionControl.topic);
      }
      this.client.subscribe(topics, { qos: 0 }, (error) => {
        if (error) {
          console.error('Error al suscribirse a MQTT:', error);
          return;
        }
        this.subscribeSuccess = true;
      });
    },

    initData() { this.client = { connected: false }; this.retryTimes = 0; this.connecting = false; this.subscribeSuccess = false; },
    handleOnReConnect() { this.retryTimes += 1; if (this.retryTimes > 5) { this.client.end(); this.initData(); } },

    // --- FUNCIONES LOCALES MÉDICAS ---

    localActivateNormalPulseHeart(cycleSpace) {
      this.isVentricularTachycardia = false;
      this.graphicData = [0, 0, 0, 0.1, 0.45, 0.5, 0, 0, 0, -0.6, 4, -1.3, 0, 0, 0, 0, 0.65, 0.8, 0.65, 0.1, 0.1, 0.1, 0.1, 0.1];
      this.cycleSpace = cycleSpace;
      this.iterator = 0;
      this.slider1 = 75;
      this.activateSaturation();
      this.activatePressure();
      this.bloodPressure = '120/80';
      if (this.$refs.functionModal) this.$refs.functionModal.hide();
    },

    localActivateLowPulseHeart() {
      this.isVentricularTachycardia = false;
      this.graphicData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.45, 0.5, 0, 0, 0, -0.6, 0, 0, 0, 0, 0, 4, -1.3, 0, 0, 0, 0, 0.65, 0.8, 0.65, 0.1, 0.1, 0.1, 0.1, 0.1];
      this.cycleSpace = 120;
      this.iterator = 0;
      this.slider1 = 35; this.slider2 = 95; this.slider3 = 100; this.slider4 = 60;
      this.graphicSaturation = [4, 0.75, 1, -1.1]; this.cycleSpaceSaturation = 1000; this.iteratorSaturation = 0;
      this.graphicPressure = [4, 2, 2.8, 2, 1.75, 1.5, 1.25, 1]; this.cycleSpacePressure = 365; this.iteratorPressure = 0;
      this.bloodPressure = '100/60';
      if (this.$refs.functionModal) this.$refs.functionModal.hide();
    },

    localActivateFastPulseHeart() {
      this.isVentricularTachycardia = false;
      this.graphicData = [0.1, 0.45, 0.5, 0, 0, -0.6, 4, -1.3, 0, 0, 0.65, 0.8, 0.65, 0.1, 0.1];
      this.cycleSpace = 120;
      this.iterator = 0;
      this.slider1 = 115; this.slider2 = 90; this.slider3 = 120; this.slider4 = 80;
      this.graphicSaturation = [4, 0.75, 1, -1.1]; this.cycleSpaceSaturation = 350; this.iteratorSaturation = 0;
      this.graphicPressure = [5, 2.5, 0]; this.cycleSpacePressure = 350; this.iteratorPressure = 0;
      this.bloodPressure = '120/80';
      if (this.$refs.functionModal) this.$refs.functionModal.hide();
    },

    localActivateVentricularFibrillation() {
      this.isVentricularTachycardia = false;
      this.graphicData = [-0.4, 3, -0.4, 1.3, 2.8, -1, 3.1, -0.4, 1.8, 3.5, -1, 3.3, 1.1, 2, 1.2, 1.6, -1, 3.3, -0.9, 2.9, -0.7, 2.6, 1, 2.4, -0.2, 1.3, 3, -0.2, -1, 3.3, 1.1, 2, 1.2, 1.6, -1];
      this.cycleSpace = 180; this.iterator = 0;
      this.graphicPressure = [0]; this.iteratorPressure = 0; this.cycleSpacePressure = 250;
      this.graphicSaturation = [0]; this.iteratorSaturation = 0; this.cycleSpaceSaturation = 700;
      this.slider1 = '--'; this.slider2 = '--'; this.slider3 = '--'; this.slider4 = '--';
      this.bloodPressure = '--/--';
      if (this.$refs.functionModal) this.$refs.functionModal.hide();
    },

    localActivateVentricularTachycardia() {
      this.isVentricularTachycardia = true;
      this.slider1 = 145;
      this.setVentricularTachycardia();
      if (this.$refs.functionModal) this.$refs.functionModal.hide();
    },

    setVentricularTachycardia() {
      this.graphicData = [5, -2]; this.cycleSpace = 550; this.iterator = 0;
      this.slider2 = 94; this.slider3 = 90; this.slider4 = 40; this.bloodPressure = '90/40';
      this.graphicSaturation = [4.6, 1.35, 1.6, -1.7]; this.cycleSpaceSaturation = 700; this.iteratorSaturation = 0;
      this.graphicPressure = [1.9, 0.9, 1.1, -0.9]; this.cycleSpacePressure = 700; this.iteratorPressure = 0;
    },

    localActivateStElevation() {
      this.isVentricularTachycardia = false;
      this.graphicData = [0, 0, 0, 0.45, 0, -0.4, 4, 0.7, 1.8];
      this.cycleSpace = 350; this.iterator = 0;
      this.activateSaturation(); this.activatePressure();
      this.slider1 = 60; this.slider2 = 90; this.slider3 = 160; this.slider4 = 80; this.bloodPressure = '160/80';
      if (this.$refs.functionModal) this.$refs.functionModal.hide();
    },

    localActivateAsystole() {
      this.isVentricularTachycardia = false;
      this.graphicData = [0]; this.iterator = 0; this.cycleSpace = 120;
      this.graphicSaturation = [0]; this.iteratorSaturation = 0; this.cycleSpaceSaturation = 700;
      this.graphicPressure = [0]; this.iteratorPressure = 0; this.cycleSpacePressure = 250;
      this.slider1 = '--'; this.slider2 = '--'; this.slider3 = '--'; this.slider4 = '--'; this.bloodPressure = '--/--';
      if (this.$refs.functionModal) this.$refs.functionModal.hide();
    },

    activateSaturation() { this.graphicSaturation = [4, 0.75, 1, -1.1]; this.cycleSpaceSaturation = 700; this.iteratorSaturation = 0; this.slider2 = 100; },
    activatePressure() { this.graphicPressure = [4, 2, 2.8, 2.25, 2, 1.75, 1.5, 1.25, 1]; this.cycleSpacePressure = 250; this.iteratorPressure = 0; this.slider3 = 120; this.slider4 = 80; },

    // --- FUNCIONES LOCALES DEL CRONÓMETRO ---

    localToggleTimer() {
      if (!this.timerActive) {
        this.timerActive = true;
        this.startTimerInterval();
      } else {
        if (!this.timerPaused) {
          this.timerPaused = true;
          clearInterval(this.timerInterval);
        } else {
          this.timerPaused = false;
          this.startTimerInterval();
        }
      }
    },

    async startTimerInterval() {
      if (!this.timepoInicialSesion) {
        this.timepoInicialSesion = Date.now();
        this.recordedPressure = []; this.recordedVentilation = []; this.recordedPosition = [];
        this.sessionEvents = [];
      }

      this.timerInterval = setInterval(() => {
        if (!this.timerPaused) {
          if (this.ramainingTime > 0) {
            this.ramainingTime -= 1;
            let p = this.pressure ? parseFloat(this.pressure) : 65;
            let v = this.flowrate ? parseFloat(this.flowrate) : 65;
            let pos = this.temperature ? parseFloat(this.temperature) : 65;
            const now = Date.now();
            this.recordedPressure.push({ x: now, y: p });
            this.recordedVentilation.push({ x: now, y: v });
            this.recordedPosition.push({ x: now, y: pos });
          } else {
            this.localStopTimer();
          }
        }
      }, 1000);
    },

    localStopTimer() {
      this.timepoFinalSesion = Date.now();
      clearInterval(this.timerInterval);
      this.timerActive = false;
      this.timerPaused = false;

      if (this.recordedPressure.length > 0) {
        this.series1 = [{ data: this.recordedPressure }];
        this.series2 = [{ data: this.recordedVentilation }];
        this.series3 = [{ data: this.recordedPosition }];
      } else {
        this.series1 = [{ data: [{ x: Date.now(), y: 65 }] }];
        this.series2 = [{ data: [{ x: Date.now(), y: 65 }] }];
        this.series3 = [{ data: [{ x: Date.now(), y: 65 }] }];
      }

      if (this.userRole !== 'estudiante') {
        this.$bvModal.show('modalxl');
      }
    },

    localResetTimer() {
      clearInterval(this.timerInterval);
      this.timerActive = false;
      this.timerPaused = false;
      this.ramainingTime = 180;
      this.timepoInicialSesion = null;
      this.timepoFinalSesion = null;
      this.currentSessionId = null;
      this.observation = '';
      this.selectedStudentId = null;
      this.sessionEvents = [];
    },

    // --- HELPERS (API y Gráficas) ---

    async fetchStudents() {
      try { const res = await axios.get('/users/students?limit=200'); this.students = res.data.data; }
      catch (error) { console.error("Error", error); }
    },
    getChartOptions(color) {
      const is_dark = this.$store.state.is_dark_mode;
      let option = { chart: { sparkline: { enabled: true } }, stroke: { curve: 'smooth', width: 2 }, colors: [color], yaxis: { min: 0 }, tooltip: { theme: is_dark ? 'dark' : 'light', x: { show: false } } };
      if (is_dark) option['fill'] = { type: 'gradient', gradient: { type: 'vertical', shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.3, opacityTo: 0.05, stops: [100, 100] } };
      return option;
    },
    getAverage(series) {
      const data = series[0].data; if (!data || data.length === 0) return 65;
      return Math.round(data.reduce((acc, curr) => acc + (curr.y || 0), 0) / data.length);
    },

    // --- LÓGICA DE REPORTE ---

    async saveSessionReport() {
      if (this.userRole !== 'estudiante' && !this.selectedStudentId) {
        this.$swal.fire("Atención", "Debe seleccionar un estudiante para asignarle el reporte.", "warning"); return;
      }
      const durationSeconds = 180 - this.ramainingTime;
      const report = {
        avgPulmonaryPressure: this.getAverage(this.series1),
        avgVentilation: this.getAverage(this.series2),
        avgCorrectPosition: this.getAverage(this.series3),
        observation: this.observation,
        duration: durationSeconds > 0 ? durationSeconds : 1,
        startedAt: new Date(this.timepoInicialSesion).toISOString(),
        endedAt: new Date(this.timepoFinalSesion).toISOString(),
        events: this.sessionEvents.map(evt => ({
          eventType: evt.eventType,
          eventData: evt.eventData || null,
          observation: evt.observation || null,
          sessionTimeSeconds: evt.sessionTimeSeconds,
        })),
      };

      try {
        const startRes = await axios.post(`/students/${this.selectedStudentId}/rcp-sessions/start`, { startedAt: report.startedAt });
        const sessionId = startRes.data.session.id;

        await axios.post(`/students/${this.selectedStudentId}/rcp-sessions/${sessionId}/end`, report);
        this.$swal.fire("Éxito", "Reporte guardado correctamente", "success");
        this.$bvModal.hide('modalxl');
        this.sendCommand('RESET_TIMER');
      } catch (error) {
        this.$swal.fire("Error", "Hubo un error al procesar el reporte", "error");
      }
    },

    discardReport() {
      this.$swal.fire({
        title: '¿Estás seguro?', text: "Los datos se perderán", icon: 'warning',
        showCancelButton: true, confirmButtonText: 'Sí, descartar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$bvModal.hide('modalxl');
          this.sendCommand('RESET_TIMER');
        } else { this.$bvModal.show('modalxl'); }
      });
    }
  },
};
</script>

<style scoped>
/* ── Blinking warning for vitals ── */
.warning {
  animation: blink 1s infinite;
}

@keyframes blink {

  0%,
  100% {
    background-color: transparent;
  }

  50% {
    background-color: red;
  }
}

/* ── Buttons in function modal ── */
.equal-btn {
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* ── Modern timer widget ── */
.timer-widget {
  background: #fff;
  border-radius: 12px;
  padding: 14px 16px 10px;
  text-align: center;
  border: 1px solid #e0e6ed;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: border-color 0.4s, box-shadow 0.4s;
}

.timer-widget.tw-red-state {
  border-color: #e7515a;
  box-shadow: 0 0 0 3px rgba(231, 81, 90, 0.12);
}

.timer-widget.tw-orange-state {
  border-color: #e2a03f;
  box-shadow: 0 0 0 3px rgba(226, 160, 63, 0.12);
}

.tw-status {
  font-size: 0.68em;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #888ea8;
  margin-bottom: 4px;
}

.tw-time {
  font-family: 'Courier New', Courier, monospace;
  font-size: 2.8em;
  font-weight: 700;
  letter-spacing: 5px;
  line-height: 1.1;
  color: #3b3f5c;
  transition: color 0.4s;
}

.tw-time.tw-green {
  color: #1abc9c;
}

.tw-time.tw-orange {
  color: #e2a03f;
}

.tw-time.tw-red {
  color: #e7515a;
  animation: timer-pulse 0.8s infinite;
}

@keyframes timer-pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }
}

.tw-bar {
  margin-top: 10px;
  border-radius: 4px;
}

.tw-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
  font-size: 0.72em;
  color: #888ea8;
}

/* ── Session steps horizontal strip ── */
.steps-widget {
  padding: 12px 16px;
  border-radius: 10px;
}

.steps-scroll {
  overflow-x: auto;
  padding-bottom: 6px;
}

.steps-track {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: max-content;
  padding: 4px 2px;
}

.step-chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 110px;
  max-width: 130px;
  border-radius: 10px;
  padding: 8px 10px;
  background: #f1f2f3;
  border-left: 4px solid #888ea8;
  position: relative;
}

.step-chip--success {
  border-left-color: #1abc9c;
  background: #edfaf6;
}

.step-chip--info {
  border-left-color: #2196f3;
  background: #e8f4fd;
}

.step-chip--warning {
  border-left-color: #e2a03f;
  background: #fdf5e8;
}

.step-chip--danger {
  border-left-color: #e7515a;
  background: #fdeaea;
}

.step-chip--secondary {
  border-left-color: #888ea8;
  background: #f1f2f3;
}

.step-chip__num {
  position: absolute;
  top: 5px;
  right: 7px;
  font-size: 0.62em;
  color: #aaa;
  font-weight: 600;
}

.step-chip__time {
  font-size: 0.78em;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  color: #3b3f5c;
  margin-bottom: 3px;
}

.step-chip__label {
  font-size: 0.72em;
  color: #515365;
  text-align: center;
  line-height: 1.3;
}

/* ── Report modal timeline ── */
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
</style>
