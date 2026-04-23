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
                  class="feather feather-radio">
                  <circle cx="12" cy="12" r="2"></circle>
                  <path
                    d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14">
                  </path>
                </svg>
              </div>
              <div class="w-browser-details">
                <div class="w-browser-info">
                  <h6 v-bind:style="{ fontSize: 1.2 + 'em' }">Presión interna pulmones</h6>
                  <p v-bind:style="{ fontSize: 1.2 + 'em' }" class="browser-count">{{ humidity }}%</p>
                </div>

                <div class="w-browser-stats">
                  <b-progress variant="gradient-danger" :value="humidity" :min="0" :max="100"></b-progress>
                </div>
              </div>
            </div>
            <div class="browser-list">
              <div class="w-icon icon-fill-warning">
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
                  <h6 v-bind:style="{ fontSize: 1.2 + 'em' }">Flujo de aire</h6>
                  <p v-bind:style="{ fontSize: 1.2 + 'em' }" class="browser-count">{{ motionDetected }}%</p>
                </div>
                <div class="w-browser-stats">
                  <b-progress variant="gradient-warning" :value="motionDetected" :min="-30" :max="80"></b-progress>
                </div>
              </div>
            </div>
            <b-button @click="toggleTimer" variant="info" class="w-75">
              {{ timerActive ? (timerPaused ? 'Reanudar' : 'Pausar') : 'Iniciar Cronómetro' }}
            </b-button>

            <b-button v-if="timerActive" @click="stopTimer" variant="danger" class="w-75 mt-2">
              Finalizar Maniobra
            </b-button>

            <p class="h5 mt-3">Tiempo restante: {{ formattedTime }}</p>

            <b-button @click="resetTimer" variant="secondary" class="w-75 mt-2" v-if="timerActive">
              Restablecer Cronómetro
            </b-button>

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

              <div class="row mt-4">
                <div class="col-12">
                  <h5>Observaciones</h5>
                  <b-form-textarea v-model="observation" placeholder="Ingrese observaciones de la sesión..." rows="3"
                    max-rows="6"></b-form-textarea>
                </div>
              </div>
              <template #modal-footer>
                <b-button variant="default" @click="discardReport"><i class="flaticon-cancel-12"></i>
                  Descartar</b-button>
                <b-button variant="primary" @click="saveSessionReport">Guardar Reporte</b-button>
              </template>
            </b-modal>

            <b-button v-if="permisos" variant="info" class="w-75 mt-4" v-b-modal.functionModal>Activar
              funciones</b-button>
            <b-modal id="functionModal" ref="functionModal" title="Funciones" :hide-footer="true">
              <div v-if="permisos" class="row">
                <div class="col-4 col-md-6">
                  <b-button variant="info" class="w-100 mb-3 mr-1 equal-btn"
                    @click="activateNormalPulseHeart(120)">Activar ritmo
                    sinusal del corazón</b-button>
                </div>
                <div class="col-4 col-md-6">
                  <b-button variant="info" class="w-100 mb-3 mr-1 equal-btn" @click="activateLowPulseHeart">Activar
                    bradicardia
                    sinusal</b-button>
                </div>
                <div class="col-4 col-md-6">
                  <b-button variant="info" class="w-100 mb-3 mr-1 equal-btn" @click="activateFastPulseHeart">Activar
                    taquicardia
                    sinusal</b-button>
                </div>
                <div class="col-4 col-md-6">
                  <b-button variant="info" class="w-100 mb-3 mr-1 equal-btn"
                    @click="activateVentricularFibrillation">Activar
                    fibrilación ventricular</b-button>
                </div>
                <div class="col-4 col-md-6">
                  <b-button variant="info" class="w-100 mb-3 mr-1 equal-btn"
                    @click="activateVentricularTachycardia">Activar
                    taquicardia ventricular</b-button>
                </div>
                <div class="col-4 col-md-6">
                  <b-button variant="info" class="w-100 mb-3 mr-1 equal-btn" @click="activateStElevation">Supradesnivel
                    del
                    ST</b-button>
                </div>
                <div class="col-4 col-md-6">
                  <b-button variant="info" class="w-100 mb-3 mr-1 equal-btn" @click="activateAsystole">Activar
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
                  <b-input v-if="permisos" type="range" v-model="slider1" :min="0" :max="240"
                    class="progress-range-counter"></b-input>
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
              <b-input v-if="permisos" type="range" v-model="slider2" :min="0" :max="100"
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
              <b-input v-if="permisos" type="range" v-model="slider3" :min="0" :max="240"
                class="progress-range-counter"></b-input>
              <b-input v-if="permisos" type="range" v-model="slider4" :min="0" :max="120"
                class="progress-range-counter"></b-input>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/plugins/axios'
import API_CONFIG from '@/config/api';
import authService from '@/services/authService';
import mqtt from 'mqtt';
import smoothie from 'smoothie';

export default {
  name: 'home',
  components: {},
  data() {
    return {
      tokenInflux: process.env.INFLUXDB_TOKEN,
      permisos: true,
      slider1: 75,
      slider2: 100,
      slider3: 120, // valor inicial sugerido
      slider4: 80,  // valor inicial sugerido
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
        host: "172.19.185.55",
        port: 8083,
        endpoint: "/mqtt",
        clean: true,
        connectTimeout: 30 * 1000, // ms
        reconnectPeriod: 4000, // ms
        clientId: "emqx_vue_" + Math.random().toString(16).substring(2, 8),
        username: "vuesocket",
        password: "test1234",
      },
      subscription: {
        topic: "simulador/situacion",
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
    this.doSubscribe();

    // Si es admin/profesor cargamos la lista de estudiantes
    if (this.userRole !== 'estudiante') {
      this.fetchStudents();
    }

    // Gráfico del frecuencia cardíaca
    this.graphicData = [];
    this.cycleSpace = 0;
    this.iterator = 0;

    var series = new smoothie.TimeSeries();
    var canvas = this.$refs.chart;

    var chart = new smoothie.SmoothieChart({
      grid: {
        strokeStyle: '#bbbbbb', fillStyle: '#ffffff',
        lineWidth: 0, verticalSections: 6,
      }, maxValue: 7, minValue: -4, millisPerPixel: 20
    });
    chart.streamTo(canvas, 1000);
    chart.addTimeSeries(series, { lineWidth: 5, strokeStyle: '#00ff00' });

    // Gráfico de la saturación de oxígeno
    this.graphicSaturation = [];
    this.cycleSpaceSaturation = 0;
    this.iteratorSaturation = 0;

    var seriesSaturation = new smoothie.TimeSeries();
    var canvasSaturation = this.$refs.saturation;

    var chartSaturation = new smoothie.SmoothieChart({
      grid: {
        strokeStyle: '#bbbbbb', fillStyle: '#ffffff',
        lineWidth: 0, verticalSections: 6,
      }, maxValue: 7, minValue: -4, millisPerPixel: 20
    });
    chartSaturation.streamTo(canvasSaturation, 1000);
    chartSaturation.addTimeSeries(seriesSaturation, { lineWidth: 5, strokeStyle: '#FFFF00' });

    // Gráfico de la tensión arterial
    this.graphicPressure = [];
    this.cycleSpacePressure = 0;
    this.iteratorPressure = 0;

    var seriesPressure = new smoothie.TimeSeries();
    var canvasPressure = this.$refs.tensionArterial;

    var chartPressure = new smoothie.SmoothieChart({
      grid: {
        strokeStyle: '#bbbbbb', fillStyle: '#ffffff',
        lineWidth: 0, verticalSections: 6,
      }, maxValue: 7, minValue: -4, millisPerPixel: 20
    });
    chartPressure.streamTo(canvasPressure, 1000);
    chartPressure.addTimeSeries(seriesPressure, { lineWidth: 5, strokeStyle: '#FF0000' });

    // Activo el pulso normal del corazón
    this.activateNormalPulseHeart(120);

    const runIteration = () => {
      series.append(Date.now(), this.graphicData[this.iterator]);
      this.iterator++;
      if (this.iterator === this.graphicData.length) {
        this.iterator = 0;
      }
      setTimeout(runIteration, this.cycleSpace);
    };
    setTimeout(runIteration, this.cycleSpace);

    const runIterationSaturation = () => {
      seriesSaturation.append(Date.now(), this.graphicSaturation[this.iteratorSaturation]);
      this.iteratorSaturation++;
      if (this.iteratorSaturation === this.graphicSaturation.length) {
        this.iteratorSaturation = 0;
      }
      setTimeout(runIterationSaturation, this.cycleSpaceSaturation);
    };
    setTimeout(runIterationSaturation, this.cycleSpaceSaturation);

    const runIterationPressure = () => {
      seriesPressure.append(Date.now(), this.graphicPressure[this.iteratorPressure]);
      this.iteratorPressure++;
      if (this.iteratorPressure === this.graphicPressure.length) {
        this.iteratorPressure = 0;
      }
      setTimeout(runIterationPressure, this.cycleSpacePressure);
    };
    setTimeout(runIterationPressure, this.cycleSpacePressure);

    this.$watch('slider1', (sliderValue) => {
      if (sliderValue === '--') {
        this.isWarningFC = true;
      } else {
        const val = parseFloat(sliderValue);
        this.isWarningFC = val < 60 || val > 100;
      }
    });

    this.$watch('slider2', (sliderValue) => {
      if (sliderValue === '--') {
        this.isWarningSpO2 = true;
      } else {
        const val = parseFloat(sliderValue);
        this.isWarningSpO2 = val < 90;
      }
    });

    this.$watch('slider3', (sliderValue) => {
      if (sliderValue === '--') {
        this.isWarningTAA = true;
      } else {
        const val = parseFloat(sliderValue);
        this.isWarningTAA = val < 70 || val > 130;
      }
    })

    this.$watch('slider4', (sliderValue) => {
      if (sliderValue === '--') {
        this.isWarningTAB = true;
      } else {
        const val = parseFloat(sliderValue);
        this.isWarningTAB = val < 60 || val > 90;
      }
    })
  },

  computed: {
    formattedTime() {
      // Format time in minutes and seconds
      const minutes = Math.floor(this.ramainingTime / 60);
      const seconds = this.ramainingTime % 60;
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },

    // Buscador interactivo de estudiantes
    filteredStudents() {
      if (!this.searchStudent) return this.students;
      const search = this.searchStudent.toLowerCase();
      return this.students.filter(s =>
        (s.name && s.name.toLowerCase().includes(search)) ||
        (s.surname && s.surname.toLowerCase().includes(search)) ||
        (s.username && s.username.toLowerCase().includes(search)) ||
        (s.studentIdNumber && s.studentIdNumber.toLowerCase().includes(search))
      );
    },
    studentOptions() {
      return this.filteredStudents.map(s => ({
        value: s.id,
        text: `${s.name} ${s.surname} - ${s.username} (ID: ${s.studentIdNumber || 'N/A'})`
      }));
    },

    // Promedios calculados para mostrar en las cards
    avgPressure() { return this.getAverage(this.series1); },
    avgVentilation() { return this.getAverage(this.series2); },
    avgPosition() { return this.getAverage(this.series3); },

    followers_options() {
      const is_dark = this.$store.state.is_dark_mode;
      let option = {
        chart: { sparkline: { enabled: true } },
        stroke: { curve: 'smooth', width: 2 },
        colors: ['#4361ee'],
        yaxis: { min: 0 },
        tooltip: { theme: is_dark ? 'dark' : 'light', x: { show: false } },
      };
      if (is_dark) {
        option['fill'] = { type: 'gradient', gradient: { type: 'vertical', shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.3, opacityTo: 0.05, stops: [100, 100] } };
      }
      return option;
    },
    followers_options2() {
      const is_dark = this.$store.state.is_dark_mode;
      let option = {
        chart: { sparkline: { enabled: true } },
        stroke: { curve: 'smooth', width: 2 },
        colors: ['#F3A695'],
        yaxis: { min: 0 },
        tooltip: { theme: is_dark ? 'dark' : 'light', x: { show: false } },
      };
      if (is_dark) {
        option['fill'] = { type: 'gradient', gradient: { type: 'vertical', shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.3, opacityTo: 0.05, stops: [100, 100] } };
      }
      return option;
    },
    followers_options3() {
      const is_dark = this.$store.state.is_dark_mode;
      let option = {
        chart: { sparkline: { enabled: true } },
        stroke: { curve: 'smooth', width: 2 },
        colors: ['#52C1B7'],
        yaxis: { min: 0 },
        tooltip: { theme: is_dark ? 'dark' : 'light', x: { show: false } },
      };
      if (is_dark) {
        option['fill'] = { type: 'gradient', gradient: { type: 'vertical', shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.3, opacityTo: 0.05, stops: [100, 100] } };
      }
      return option;
    },
  },

  watch: {
    slider1(sliderValue) {
      if (this.isVentricularTachycardia) {
        if (sliderValue == '0') {
          this.activateAsystole();
        } else {
          this.setVentricularTachycardia();
          this.$refs.functionModal.hide();
        }
      }
    }
  },

  methods: {
    async fetchStudents() {
      try {
        const res = await axios.get('/users/students?limit=200');
        this.students = res.data.data;
      } catch (error) {
        console.error("No se pudieron cargar los estudiantes", error);
      }
    },
    getAverage(series) {
      const data = series[0].data;
      if (!data || data.length === 0) return 65;
      const sum = data.reduce((acc, curr) => acc + (curr.y || 0), 0);
      return Math.round(sum / data.length);
    },

    initData() {
      this.client = {
        connected: false,
      };
      this.retryTimes = 0;
      this.connecting = false;
      this.subscribeSuccess = false;
    },

    handleOnReConnect() {
      this.retryTimes += 1;
      if (this.retryTimes > 5) {
        try {
          this.client.end();
          this.initData();
          console.warn("MQTT: Connection maxReconnectTimes limit, stop retry");
        } catch (error) {
          console.error("MQTT Error:", error.toString());
        }
      }
    },

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
            console.log("Connection succeeded! 🎉");

            this.client.subscribe(
              this.subscription.topic,
              { qos: this.subscription.qos },
              (error, res) => {
                if (error) {
                  console.error('Subscription failed:', error);
                  return;
                }
                console.log('Subscribe to topics res', res);
                this.subscribeSuccess = true;
              }
            );
          });

          this.client.on("reconnect", this.handleOnReConnect);

          this.client.on("error", (error) => {
            console.log("Connection failed", error);
            this.client.connected = false;
            this.connecting = false;
          });

          this.client.on("message", (topic, message) => {
            const payloadString = message.toString();
            // console.log(`Mensaje recibido en el topic "${topic}":`, payloadString);

            try {
              const parsedMessage = JSON.parse(payloadString);

              if (parsedMessage.temperature !== undefined) {
                this.temperature = parseFloat(parsedMessage.temperature).toFixed(1);
              }
              if (parsedMessage.pressure !== undefined) {
                this.pressure = parseFloat(parsedMessage.pressure).toFixed(3);
              }
              if (parsedMessage.flowrate !== undefined) {
                this.flowrate = parsedMessage.flowrate;
              }
              if (parsedMessage.touch !== undefined) {
                this.touch = parsedMessage.touch;
              }
              // mapeo para la compatibilidad con el resto del código
              if (parsedMessage.humidity !== undefined) {
                this.humidity = parsedMessage.humidity;
              }
              if (parsedMessage.motionDetected !== undefined) {
                this.motionDetected = parsedMessage.motionDetected;
              }
            } catch (error) {
              console.warn('No se pudo parsear el mensaje como JSON:', error);
            }
          });
        }
      } catch (error) {
        this.connecting = false;
        console.log("mqtt.connect error", error);
      }
    },

    doSubscribe() {
      const { topic, qos } = this.subscription
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log('Subscribe to topics error', error)
          return
        }
        this.subscribeSuccess = true
        console.log('Subscribe to topics res', res)
      })
    },

    // Pulso normal del corazón
    activateNormalPulseHeart(cycleSpace) {
      this.isVentricularTachycardia = false;
      this.graphicData = [0, 0, 0, 0.1, 0.45, 0.5, 0, 0, 0, -0.6, 4, -1.3, 0, 0, 0, 0, 0.65, 0.8, 0.65, 0.1, 0.1, 0.1, 0.1, 0.1];
      this.cycleSpace = cycleSpace;
      this.iterator = 0;
      this.slider1 = 75;

      this.activateSaturation();
      this.activatePressure();
      this.bloodPressure = '120/80';
      this.$refs.functionModal.hide();
    },

    // Pulso bajo del corazón (Bradicardia sinusal)
    activateLowPulseHeart() {
      this.isVentricularTachycardia = false;
      this.graphicData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.1, 0.45, 0.5, 0, 0, 0, -0.6, 0, 0, 0, 0, 0, 4, -1.3, 0, 0, 0, 0, 0.65, 0.8, 0.65, 0.1, 0.1, 0.1, 0.1, 0.1];

      this.cycleSpace = 120;
      this.iterator = 0;
      this.slider1 = 35;
      this.slider2 = 95;
      this.slider3 = 100;
      this.slider4 = 60;

      this.graphicSaturation = [4, 0.75, 1, -1.1];
      this.cycleSpaceSaturation = 1000;
      this.iteratorSaturation = 0;

      this.graphicPressure = [4, 2, 2.8, 2, 1.75, 1.5, 1.25, 1];
      this.cycleSpacePressure = 365;
      this.iteratorPressure = 0;
      this.bloodPressure = '100/60';
      this.$refs.functionModal.hide();
    },

    // Pulso alto del corazón (Taquicardia sinusal)
    activateFastPulseHeart() {
      this.isVentricularTachycardia = false;
      this.graphicData = [0.1, 0.45, 0.5, 0, 0, -0.6, 4, -1.3, 0, 0, 0.65, 0.8, 0.65, 0.1, 0.1];

      this.cycleSpace = 120;
      this.iterator = 0;
      this.slider1 = 115;
      this.slider2 = 90;
      this.slider3 = 120;
      this.slider4 = 80;

      this.graphicSaturation = [4, 0.75, 1, -1.1];
      this.cycleSpaceSaturation = 350;
      this.iteratorSaturation = 0;

      this.graphicPressure = [5, 2.5, 0];
      this.cycleSpacePressure = 350;
      this.iteratorPressure = 0;
      this.bloodPressure = '120/80';
      this.$refs.functionModal.hide();
    },

    // Fibrilación ventricular
    activateVentricularFibrillation() {
      this.isVentricularTachycardia = false;
      this.graphicData = [-0.4, 3, -0.4, 1.3, 2.8, -1, 3.1, -0.4, 1.8, 3.5, -1, 3.3, 1.1, 2, 1.2, 1.6, -1, 3.3, -0.9, 2.9, -0.7, 2.6, 1, 2.4, -0.2, 1.3, 3, -0.2, -1, 3.3, 1.1, 2, 1.2, 1.6, -1];
      this.cycleSpace = 180;
      this.iterator = 0;

      this.graphicPressure = [0];
      this.iteratorPressure = 0;
      this.cycleSpacePressure = 250;

      this.graphicSaturation = [0];
      this.iteratorSaturation = 0;
      this.cycleSpaceSaturation = 700;

      this.slider1 = '--';
      this.slider2 = '--';
      this.slider3 = '--';
      this.slider4 = '--';
      this.bloodPressure = '--/--';
      this.$refs.functionModal.hide();
    },

    setVentricularTachycardia() {
      this.graphicData = [5, -2];
      this.cycleSpace = 550;
      this.iterator = 0;

      this.slider2 = 94;
      this.slider3 = 90;
      this.slider4 = 40;
      this.bloodPressure = '90/40';

      this.graphicSaturation = [4.6, 1.35, 1.6, -1.7];
      this.cycleSpaceSaturation = 700;
      this.iteratorSaturation = 0;

      this.graphicPressure = [1.9, 0.9, 1.1, -0.9];
      this.cycleSpacePressure = 700;
      this.iteratorPressure = 0;
    },

    // Taquicardia ventricular
    activateVentricularTachycardia() {
      this.isVentricularTachycardia = true;
      this.slider1 = 145;
      this.setVentricularTachycardia();
      this.$refs.functionModal.hide();
    },

    // Elevación de ST (tus valores ajustados)
    activateStElevation() {
      this.isVentricularTachycardia = false;
      this.graphicData = [0, 0, 0, 0.45, 0, -0.4, 4, 0.7, 1.8];
      this.cycleSpace = 350;
      this.iterator = 0;

      this.activateSaturation();
      this.activatePressure();

      this.slider1 = 60;
      this.slider2 = 90;
      this.slider3 = 160;
      this.slider4 = 80;
      this.bloodPressure = '160/80';

      this.$refs.functionModal.hide();
    },

    // Asistolia
    activateAsystole() {
      this.isVentricularTachycardia = false;
      this.graphicData = [0];
      this.iterator = 0;
      this.cycleSpace = 120;

      this.graphicSaturation = [0];
      this.iteratorSaturation = 0;
      this.cycleSpaceSaturation = 700;

      this.graphicPressure = [0];
      this.iteratorPressure = 0;
      this.cycleSpacePressure = 250;

      this.slider1 = '--';
      this.slider2 = '--';
      this.slider3 = '--';
      this.slider4 = '--';
      this.bloodPressure = '--/--';
      this.$refs.functionModal.hide();
    },

    // Saturación de oxígeno
    activateSaturation() {
      this.graphicSaturation = [4, 0.75, 1, -1.1];
      this.cycleSpaceSaturation = 700;
      this.iteratorSaturation = 0;
      this.slider2 = 100;
    },

    // Tensión Arterial normal (120/80)
    activatePressure() {
      this.graphicPressure = [4, 2, 2.8, 2.25, 2, 1.75, 1.5, 1.25, 1];
      this.cycleSpacePressure = 250;
      this.iteratorPressure = 0;
      this.slider3 = 120;
      this.slider4 = 80;
    },

    async startTimer() {
      if (!this.timepoInicialSesion) {
        this.timepoInicialSesion = Date.now();
        this.recordedPressure = [];
        this.recordedVentilation = [];
        this.recordedPosition = [];

        try {
          if (this.userRole === 'estudiante') {
            const response = await axios.post(API_CONFIG.ENDPOINTS.RCP_SESSION_START(this.studentId), {});
            this.currentSessionId = response.data.sessionId || response.data.id || response.data.session?.id;
            console.log("Sesión de RCP iniciada:", this.currentSessionId);
          }
        } catch (error) {
          console.error("Error al iniciar sesión de RCP:", error);
          this.currentSessionId = "mock-" + Date.now();
        }
      }

      this.timerInterval = setInterval(() => {
        if (!this.timerPaused) {
          if (this.ramainingTime > 0) {
            this.ramainingTime -= 1;

            // Recolección de datos en tiempo real. Default a 65 si son nulos.
            // Presión pulmonar = humidity en tu template
            let p = this.humidity ? parseFloat(this.humidity) : 65;
            // Ventilación = motionDetected en tu template
            let v = this.motionDetected ? parseFloat(this.motionDetected) : 65;
            // Posición/Compresiones = temperature en tu template
            let pos = this.temperature ? parseFloat(this.temperature) : 65;

            const now = Date.now();
            this.recordedPressure.push({ x: now, y: p });
            this.recordedVentilation.push({ x: now, y: v });
            this.recordedPosition.push({ x: now, y: pos });

          } else {
            this.stopTimer();
          }
        }
      }, 1000);
    },

    stopTimer() {
      this.timepoFinalSesion = Date.now();
      clearInterval(this.timerInterval);
      this.timerActive = false;
      this.timerPaused = false;

      // Volcamos los datos recolectados en las series de las gráficas del modal
      if (this.recordedPressure.length > 0) {
        this.series1 = [{ data: this.recordedPressure }];
        this.series2 = [{ data: this.recordedVentilation }];
        this.series3 = [{ data: this.recordedPosition }];
      } else {
        // En caso de que finalice apenas inicia
        this.series1 = [{ data: [{ x: Date.now(), y: 65 }] }];
        this.series2 = [{ data: [{ x: Date.now(), y: 65 }] }];
        this.series3 = [{ data: [{ x: Date.now(), y: 65 }] }];
      }

      // Abrimos el reporte de manera automática al finalizar la maniobra
      this.$bvModal.show('modalxl');
    },

    async saveSessionReport() {
      // Si no es estudiante, validamos que haya elegido uno para asignar el reporte
      if (this.userRole !== 'estudiante' && !this.selectedStudentId) {
        this.$swal.fire("Atención", "Debe seleccionar un estudiante para asignarle el reporte.", "warning");
        return;
      }

      const finalStudentId = this.userRole === 'estudiante' ? this.studentId : this.selectedStudentId;

      // Cálculo del tiempo de la maniobra para enviarlo a BD y evitar el "-1"
      const durationSeconds = 180 - this.ramainingTime;

      const report = {
        avgPulmonaryPressure: this.getAverage(this.series1),
        avgVentilation: this.getAverage(this.series2),
        avgCorrectPosition: this.getAverage(this.series3),
        observation: this.observation,
        duration: durationSeconds > 0 ? durationSeconds : 1,
        startedAt: new Date(this.timepoInicialSesion).toISOString(),
        endedAt: new Date(this.timepoFinalSesion).toISOString()
      };

      try {
        let sessionId = this.currentSessionId;

        // Para profe/admin, como no arrancaron sesión en BD al principio, la arranco acá
        if (this.userRole !== 'estudiante') {
          const startRes = await axios.post(`/students/${finalStudentId}/rcp-sessions/start`, {
            startedAt: new Date(this.timepoInicialSesion).toISOString()
          });
          sessionId = startRes.data.session.id;
        }

        if (sessionId && !sessionId.toString().startsWith("mock")) {
          await axios.post(`/students/${finalStudentId}/rcp-sessions/${sessionId}/end`, report);
          this.$swal.fire("Éxito", "Reporte guardado correctamente", "success");

          // Ocultamos el modal y limpiamos todo el estado de la maniobra
          this.$bvModal.hide('modalxl');
          this.resetTimer();
        } else {
          this.$swal.fire("Atención", "No se encontró una sesión activa o válida", "warning");
        }
      } catch (error) {
        console.error("Error al finalizar:", error);
        this.$swal.fire("Error", "Hubo un error al procesar el reporte", "error");
      }
    },

    discardReport() {
      this.$swal.fire({
        title: '¿Estás seguro?',
        text: "Los datos de esta maniobra se perderán",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, descartar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$bvModal.hide('modalxl');
          this.resetTimer();
        } else {
          // Si cancela, volvemos a abrir el modal por seguridad
          this.$bvModal.show('modalxl');
        }
      });
    },

    toggleTimer() {
      if (!this.timerActive) {
        this.timerActive = true;
        this.startTimer();
      } else {
        if (!this.timerPaused) {
          this.timerPaused = true;
          clearInterval(this.timerInterval);
        } else {
          this.timerPaused = false;
          this.startTimer();
        }
      }
    },

    resetTimer() {
      clearInterval(this.timerInterval);
      this.timerActive = false;
      this.timerPaused = false;
      this.ramainingTime = 180;
      this.timepoInicialSesion = null;
      this.timepoFinalSesion = null;
      this.currentSessionId = null;
      this.observation = '';
      this.selectedStudentId = null;
    },
  },
};
</script>

<style scoped>
.warning {
  animation: blink 1s infinite;
}

.equal-btn {
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

@keyframes blink {
  0% {
    background-color: transparent;
  }

  50% {
    background-color: red;
  }

  100% {
    background-color: transparent;
  }
}
</style>