<template>
  <div class="home">
    <!-- <apexchart ref="realtimeChart1" type="line" height="350" :options="chartOptions" :series="series1" /> -->

    <div class="row m-4">
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <div class="widget widget-visitor-by-browser">
          <div class="widget-heading">
            <h5>Parámetros maniobra RCP</h5>
          </div>
          <div class="widget-content">
            <div class="browser-list">
              <div class="w-icon icon-fill-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chrome">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="4"></circle>
                  <line x1="21.17" y1="8" x2="12" y2="8"></line>
                  <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                  <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
                </svg>
              </div>
              <div class="w-browser-details">
                <div class="w-browser-info">
                  <h6>Compresiones</h6>
                  <p class="browser-count">65%</p>
                </div>
                <div class="w-browser-stats">
                  <b-progress variant="gradient-primary" :value="randomValue" :min="0" :max="100"></b-progress>
                </div>
              </div>
            </div>
            <div class="browser-list">
              <div class="w-icon icon-fill-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-compass">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
              </div>
              <div class="w-browser-details">
                <div class="w-browser-info">
                  <h6>Presión interna pulmones</h6>
                  <p class="browser-count">25%</p>
                </div>

                <div class="w-browser-stats">
                  <b-progress variant="gradient-danger" :value="35" :min="0" :max="100"></b-progress>
                </div>
              </div>
            </div>
            <div class="browser-list">
              <div class="w-icon icon-fill-warning">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
              </div>
              <div class="w-browser-details">
                <div class="w-browser-info">
                  <h6>Flujo de aire</h6>
                  <p class="browser-count">15%</p>
                </div>
                <div class="w-browser-stats">
                  <b-progress variant="gradient-warning" :value="15" :min="0" :max="100"></b-progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
        <div class="row widget-statistic">
          <div class="col-xl-12 col-lg-12 col-md-8 col-sm-4 col-12 layout-spacing">
            <div class="widget">
              <div class="widget-heading">
                <div class="w-title">
                  <div class="w-icon icon-fill-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <p class="w-value">23</p>
                    <h5>Comp. / MIN</h5>
                  </div>
                </div>
              </div>
              <div class="widget-content">
                <div class="w-chart">
                  <apexchart v-if="followers_options" height="160" type="area" :options="followers_options" :series="followers_series"></apexchart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row m-4">
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
             <div class="widget widget-expenses">
                    <div class="widget-heading">
                        <h5>Expenses</h5>
                        <div class="task-action">
                            <b-dropdown variant="icon-only" toggle-tag="a" :right="true">
                                <template #button-content>
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
                                        class="feather feather-more-horizontal"
                                    >
                                        <circle cx="12" cy="12" r="1"></circle>
                                        <circle cx="19" cy="12" r="1"></circle>
                                        <circle cx="5" cy="12" r="1"></circle>
                                    </svg>
                                </template>

                                <b-dropdown-item>This Week</b-dropdown-item>
                                <b-dropdown-item>Last Week</b-dropdown-item>
                                <b-dropdown-item>Last Month</b-dropdown-item>
                            </b-dropdown>
                        </div>
                    </div>

                    <div class="widget-content">
                        <p class="value">
                            $ 45,141
                            <span>this week </span>
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
                                class="feather feather-trending-up"
                            >
                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                <polyline points="17 6 23 6 23 12"></polyline>
                            </svg>
                        </p>
                        <div class="w-progress-stats">
                            <b-progress variant="gradient-secondary" :value="57" :min="0" :max="100"></b-progress>
                            <div class="w-icon">57%</div>
                        </div>
                    </div>
                </div>
        </div>
    </div>

    <div class="row m-4">
      <div class="col-12 col-md-6">
        <canvas ref="chart" width="600" height="300"></canvas>
      </div>
      <div class="col-12 col-md-6">
        <div class="row">
          <div class="col-12">
            <div class="custom-progress progress-up mb-2" style="width: 100%">
              <div class="range-count">
                <span class="range-count-number" v-bind:class="{ warning: isWarningPulseHeart }" v-bind:style="{ fontSize: 4 + 'em' }">HR: {{ slider1 }}</span>
              </div>
            </div>
          </div>
          <div class="col-4 col-md-6">
            <b-button variant="outline-info" class="w-100 mb-2 mr-1" @click="activateNormalPulseHeart(120)">Activar pulso normal
              del
              corazón</b-button>
          </div>
          <div class="col-4 col-md-6">
            <b-button variant="outline-info" class="w-100 mb-2 mr-1" @click="activateLowPulseHeart">Activar frecuencia cardiaca
              baja</b-button>
          </div>
          <div class="col-4 col-md-6">
            <b-button variant="outline-info" class="w-100 mb-2 mr-1" @click="activateFastPulseHeart">Activar frecuencia cardiaca
              alta</b-button>
          </div>
          <div class="col-4 col-md-6">
            <b-button variant="outline-info" class="w-100 mb-2 mr-1" @click="activateVentricularFibrillation">Activar
              fibrilación
              ventricular</b-button>
          </div>
          <div class="col-4 col-md-6">
            <b-button variant="outline-info" class="w-100 mb-2 mr-1" @click="activateVentricularTachycardia">Activar taquicarida
              ventricular</b-button>
          </div>
          <div class="col-4 col-md-6">
            <b-button variant="outline-info" class="w-100 mb-2 mr-1" @click="activateStElevation">Elevación de ST</b-button>
          </div>
          <div class="col-4 col-md-6">
            <b-button variant="outline-info" class="w-100 mb-2 mr-1" @click="activateAsystole">Activar asistolia</b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-12 col-md-6">
        <canvas ref="saturation" width="600" height="300"></canvas>
      </div>
      <div class="col-12 col-md-6">
        <div class="custom-progress progress-up" style="width: 100%">
          <div class="range-count">
            <span class="range-count-number" v-bind:class="{ warning: isWarning }" v-bind:style="{ fontSize: 4 + 'em' }">SpO2: {{ slider2 }}</span>
          </div>
          <b-input type="range" v-model="slider2" :min="0" :max="100" class="progress-range-counter"></b-input>
        </div>
      </div>
    </div>

    <div class="row m-4">
      <div class="col-12 col-md-6">
        <canvas ref="tensionArterial" width="600" height="300"></canvas>
      </div>
      <div class="col-12 col-md-6">
        <div class="custom-progress progress-up" style="width: 100%">
          <div class="range-count">
            <span class="range-count-number" v-bind:style="{ fontSize: 4 + 'em' }">ABP: {{ bloodPressure }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Vue from 'vue';
//import VueApexCharts from 'vue-apexcharts';
import smoothie from 'smoothie';

//Vue.use(VueApexCharts);

//Vue.component('apexchart', VueApexCharts);
import '@/assets/sass/widgets/widgets.scss';
import '@/assets/sass/scrollspyNav.scss';
//import highlight from '@/components/plugins/highlight.vue';

import mqtt from 'mqtt';

export default {
  name: 'home',
  components: {
    //apexchart: VueApexCharts,
  },
  data() {
    return {
      slider1: 60,
      slider2: 100,
      isWarning: false,
      isWarningPulseHeart: false,
      bloodPressure: '',

      randomValue: 0,

      // EMQX CONNECTION

      connection: {
        host: '192.168.0.223',
        port: 1880,
        endpoint: '',
        clean: true, // Reserved session
        connectTimeout: 4000, // Time out
        reconnectPeriod: 4000, // Reconnection interval
        // Certification Information
        clientId: 'mqttjs_3be2c321',
        username: 'admin',
        password: 'admin',
      },
      subscription: {
        topic: '/iadh/medical',
        qos: 0,
      },
      publish: {
        topic: '/iadh/medical',
        qos: 0,
        payload: '{ "msg": "Hello, I am browser." }',
      },
      receiveNews: '',
      qosList: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 },
      ],
      client: {
        connected: false,
      },
      subscribeSuccess: false,

      // REALTIME DATA FROM RCP
      //Followers
      followers_series: [{ name: 'Intensidad', data: [18, 50, 28, 52, 10, 40, 15, 52, 18, 60, 23] }],
    };
  },
  created() {},

  beforeDestroy() {
    // Limpiar el intervalo cuando el componente se destruye
    clearInterval(this.interval);
  },

  mounted() {
    // Iniciar la generación de valores aleatorios cada 2 segundos
    //this.interval = setInterval(this.generateRandomValue, 2000);

    const socket = new WebSocket('ws://192.168.0.223:1880/ws-endpoint');

    socket.onopen = () => {
      console.log('WebSocket connection opened');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Received WebSocket data:', data);
      this.randomValue = Math.round(data * 100);

      // Actualiza la interfaz de usuario con los datos recibidos
      // ...
    };

    socket.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Gràfico del frecuencia cardíaca
    /* Declaro las variables que necesito para volver dinamico el gràfico: 
    los datos del gràfico, el espacio entre cada ciclo y un iterador (Necesito un iterador dinamico porque a la hora de producir una cambio de datos, necesito que iterador vuelva a cero, para evitar problema con los índices de los arreglos, debido a que tienen diferente longitud, y me ayuda para actualizar el espacio entre cada ciclo) */
    this.graphicData = [];
    this.cycleSpace = 0;
    this.iterator = 0;

    var series = new smoothie.TimeSeries();
    var canvas = this.$refs.chart;

    var chart = new smoothie.SmoothieChart({
      grid: {
        strokeStyle: '#1e1801',
        fillStyle: '#000000',
        lineWidth: 0,
        verticalSections: 6,
      },
      maxValue: 8,
      minValue: -8,
      millisPerPixel: 20,
    });
    chart.streamTo(canvas, 1000);

    chart.addTimeSeries(series, { lineWidth: 3.6, strokeStyle: '#00ff00' });

    // Gràfico de la suturaciòn de oxìgeno
    this.graphicSaturation = [];
    this.cycleSpaceSaturation = 0;
    this.iteratorSaturation = 0;

    var seriesSaturation = new smoothie.TimeSeries();
    var canvasSaturation = this.$refs.saturation;

    var chartSaturation = new smoothie.SmoothieChart({
      grid: {
        strokeStyle: '#1e1801',
        fillStyle: '#000000',
        lineWidth: 0,
        verticalSections: 6,
      },
      maxValue: 8,
      minValue: -8,
      millisPerPixel: 20,
    });
    chartSaturation.streamTo(canvasSaturation, 1000);

    chartSaturation.addTimeSeries(seriesSaturation, { lineWidth: 3.6, strokeStyle: '#FFFF00' });

    // Gràfico de la suturaciòn de la tensiòn arterial
    this.graphicPressure = [];
    this.cycleSpacePressure = 0;
    this.iteratorPressure = 0;

    var seriesPressure = new smoothie.TimeSeries();
    var canvasPressure = this.$refs.tensionArterial;

    var chartPressure = new smoothie.SmoothieChart({
      grid: {
        strokeStyle: '#1e1801',
        fillStyle: '#000000',
        lineWidth: 0,
        verticalSections: 6,
      },
      maxValue: 8,
      minValue: -8,
      millisPerPixel: 20,
    });
    chartPressure.streamTo(canvasPressure, 1000);

    chartPressure.addTimeSeries(seriesPressure, { lineWidth: 3.6, strokeStyle: '#FF0000' });

    // Activo el pulso normal del corazón
    this.activateNormalPulseHeart(120);

    /* Defino la función runIteration que se ejecuta en cada iteración del ciclo. Dentro de esta función, se actualiza this.cycleSpace cuando this.iterator es igual a 0, y luego se utiliza setTimeout para programar la próxima iteración de runIteration con el nuevo tiempo de espera this.cycleSpace. */

    const runIteration = () => {
      //series.append(Date.now(), Math.random());
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

    /* this.$watch('slider1', (sliderValue) => {
      if (sliderValue < 40) {
        this.activateLowPulseHeart(4);
        this.cycleSpaceSaturation = 1000;
      } else if (sliderValue == 60) {
        this.activateNormalPulseHeart(120);
        this.cycleSpaceSaturation = 700;
      } else if (sliderValue > 95) {
        this.activateFastPulseHeart(4);
        this.cycleSpaceSaturation = 350;
      } else if (sliderValue > 75) {
        this.activateFastPulseHeart(2);
        this.cycleSpaceSaturation = 500;
      } 
    }); */

    this.$watch('slider2', (sliderValue) => {
      this.isWarning = sliderValue < 90;
    });

    this.$watch('slider1', (sliderValue) => {
      this.isWarningPulseHeart = sliderValue <= 40;
    });
  },

  computed: {
    followers_options() {
      const is_dark = this.$store.state.is_dark_mode;
      let option = {
        chart: { sparkline: { enabled: true } },
        stroke: { curve: 'smooth', width: 2 },
        colors: ['#4361ee'],
        //labels: ['1', '2', '3', '4', '5', '6', '7'],
        yaxis: { min: 0 },
        tooltip: { theme: is_dark ? 'dark' : 'light', x: { show: false } },
      };
      if (is_dark) {
        option['fill'] = { type: 'gradient', gradient: { type: 'vertical', shadeIntensity: 1, inverseColors: !1, opacityFrom: 0.3, opacityTo: 0.05, stops: [100, 100] } };
      }
      return option;
    },
  },

  methods: {
    generateRandomValue() {
      this.randomValue = Math.floor(Math.random() * 101); // Generar valor aleatorio entre 0 y 100
    },

    createConnection() {
      // Connect string, and specify the connection method used through protocol
      // ws unencrypted WebSocket connection
      // wss encrypted WebSocket connection
      // mqtt unencrypted TCP connection
      // mqtts encrypted TCP connection
      // wxs WeChat mini app connection
      // alis Alipay mini app connection
      const { host, port, endpoint, ...options } = this.connection;
      const connectUrl = `ws://${host}:${port}${endpoint}/mqtt`;
      try {
        this.client = mqtt.connect(connectUrl, options);
      } catch (error) {
        console.log('mqtt.connect error', error);
      }
      this.client.on('connect', () => {
        console.log('Connection succeeded!');
      });
      this.client.on('error', (error) => {
        console.log('Connection failed', error);
      });
      this.client.on('message', (topic, message) => {
        this.receiveNews = this.receiveNews.concat(message);
        console.log(`Received message ${message} from topic ${topic}`);
      });
    },

    doSubscribe() {
      const { topic, qos } = this.subscription;
      this.client.subscribe(topic, { qos }, (error, res) => {
        if (error) {
          console.log('Subscribe to topics error', error);
          return;
        }
        this.subscribeSuccess = true;
        console.log('Subscribe to topics res', res);
      });
    },

    doUnSubscribe() {
      const { topic } = this.subscription;
      this.client.unsubscribe(topic, (error) => {
        if (error) {
          console.log('Unsubscribe error', error);
        }
      });
    },

    doPublish() {
      const { topic, qos, payload } = this.publish;
      this.client.publish(topic, payload, qos, (error) => {
        if (error) {
          console.log('Publish error', error);
        }
      });
    },

    destroyConnection() {
      if (this.client.connected) {
        try {
          this.client.end();
          this.client = {
            connected: false,
          };
          console.log('Successfully disconnected!');
        } catch (error) {
          console.log('Disconnect failed', error.toString());
        }
      }
    },

    // intervals: function () {
    //   //var me = this;
    //   window.setInterval(function () {
    //     let x = Math.random() * 100;
    //     this.valuesChrome = Math.round(x);
    //   }, 2000);

    //   // every 60 seconds, we reset the data to prevent memory leaks
    //   window.setInterval(function () {}, 60000);
    // },

    //Pulso normal del corazón
    activateNormalPulseHeart(cycleSpace) {
      // Pre armado del array
      // Cantidad de ceros al medio (pausa entre periodos)
      // Identificar valores extremos (4, -0.8 -1.3) que corresponden a R, Q y S respectivamente
      // Pruebas con 150 de delay en el interval, si aumenta a 200, baja el ritmo cardiaco
      // series.append(Date.now(), 10);
      // const data = [1, 1, 1.2, 1.3, 1.2, 1, 1, 1, 1, 2.3, 0.16, 0.17, 0.55, 0.58, 0.67, 1 , 1, 1]
      /* 
      Arreglo original:
      this.graphicData = [0, 0, 0, 0, 0.25, 0.5, 0, 0, 0, -0.8, 4, -1.3, 0, 0, 0.9, 1, 0.8, 0, 0, 0, 0, 0, 0, 0, 0.3, 0.5, 0, 0, 0, -0.8, 4, -1.3, 0, 0, 0.9, 1, 0.8, 0, 0, 0];
      */

      this.graphicData = [0, 0, 0, 0, 0.45, 0.5, 0, 0, 0, -0.6, 4, -1.3, 0, 0, 0, 0, 0.65, 0.8, 0.65, 0, 0, 0, 0, 0];

      this.cycleSpace = cycleSpace;
      this.iterator = 0;
      this.slider1 = '60';

      // Activo la saturación de oxígeno normal
      this.activateSaturation();

      // Activo la tensiòn arterial normal (120/80)
      this.activatePressure();
      this.bloodPressure = '120/80';
    },

    //Pulso bajo del corazón
    activateLowPulseHeart() {
      this.activateNormalPulseHeart(120);
      this.slider1 = '35';

      /*    for (var i = 0; i < quantityZeros; i++) {
           this.graphicData.splice(0, 0, 0);
           this.graphicData.splice(12 + 4, 0, 0)
         } */

      // Agrego 4 ceros al principio
      this.graphicData.splice(0, 0, 0, 0, 0, 0);

      //Agrego 4 ceros después de la posición 12 del arreglo orginal, pero debido a que agregue 4 ceros, la posición
      //  se desplazo hacia la derecha 4 lugares

      this.graphicData.splice(12 + 4, 0, 0, 0, 0, 0);

      this.iterator = 0;

      this.cycleSpaceSaturation = 1000;

      // Tensiòn Arterial baja (90/60)
      this.cycleSpacePressure = 1000;
      this.bloodPressure = '90/60';
    },

    //Pulso bajo del corazón
    activateFastPulseHeart() {
      this.activateNormalPulseHeart(120);
      this.slider1 = '85';

      /*   // Eliminar ceros al principio del arreglo
        this.graphicData.splice(0, quantityZeros);
  
        // Encontrar el índice del número -1.3
        const indexNegativeOnePointThree = this.graphicData.indexOf(-1.3);
        if (indexNegativeOnePointThree !== -1) {
          // Eliminar ceros después del número -1.3
          const endIndex = indexNegativeOnePointThree + quantityZeros;
          this.graphicData.splice(indexNegativeOnePointThree + 1, endIndex);
        }
  
        // Encontrar el último índice del número 0.65
        const lastIndexZeroPointSixFive = this.graphicData.lastIndexOf(0.65);
        if (lastIndexZeroPointSixFive !== -1) {
          // Eliminar 3 ceros después del último número 0.65
          const startIndex = lastIndexZeroPointSixFive + 1;
          this.graphicData.splice(startIndex, 3);
        }
   */
      // Elimino los primeros 3 ceros
      this.graphicData.splice(0, 3);

      // Elimino 2 ceros después del pico mas alto
      this.graphicData.splice(9, 2);

      // Elimino 3 ceros de los ultimos de la función
      this.graphicData.splice(14, 3);

      this.iterator = 0;

      this.cycleSpaceSaturation = 350;

      // Tensiòn Arterial alta (150/90)
      this.cycleSpacePressure = 350;
      this.bloodPressure = '150/90';
    },

    // Fibrilación ventricular
    activateVentricularFibrillation() {
      /* 
      Arreglo original:
      this.graphicData = [-0.4, 3, -0.4, 1.3, 2.8, -1, 3.1, -0.4, 1.8, 3.5, -1, 3.3, 1.1, 2, 1.2, 1.6, -1, 3.3, -0.9, 2.9, -0.7,2.6, 1, 2.4, -0.2, 1.3, 3, -0.2]
      */
      this.graphicData = [-0.4, 3, -0.4, 1.3, 2.8, -1, 3.1, -0.4, 1.8, 3.5, -1, 3.3, 1.1, 2, 1.2, 1.6, -1, 3.3, -0.9, 2.9, -0.7, 2.6, 1, 2.4, -0.2, 1.3, 3, -0.2, -1, 3.3, 1.1, 2, 1.2, 1.6, -1];

      this.cycleSpace = 180;
      this.iterator = 0;
    },

    // Taquicardia ventricular
    activateVentricularTachycardia() {
      /* Arreglo original:
      this.graphicData = [0.3, 0.5, 0, 0, 0, -0.8, 4, -1.3, 0, 0, 0.9, 1, 0.8, -0.5, -0.9, 
      -1.2, -0.6, 1, 2.5, 2.6, 2.7, 0.1, -1.8,   
      -1.2, -0.6, 1, 2.4, 2.5, 2.8, 0.5, -1.9, 
      -1.2, -0.6, 1, 2.4, 2.5, 2.9, 0.2, -1.7,
      -1.3, -0.6, 1.2, 2.5, 2.6, 2.7, 0.3, -2,
      -1.2, -0.6, 1, 2.3, 2.5, 2.6, 0.1, -1.8,
      -1.2, -0.6, 1, 2.4, 2.5, 2.8, 0.4, -1.5,
      -1.2, -0.6, 1, 2.4, 2.5, 2.7, 0.5, -1.7,
      ]
      */
      this.graphicData = [4.2, -3.8];

      this.cycleSpace = 550;
      this.iterator = 0;
    },

    // Asistolia
    activateAsystole() {
      this.graphicData = [0];
      this.iterator = 0;
      this.slider1 = '--';

      this.graphicSaturation = [0];
      this.iteratorSaturation = 0;
      this.slider2 = '--';

      this.graphicPressure = [0];
      this.iteratorPressure = 0;
      this.bloodPressure = '--/--';
    },

    // Saturación de oxígeno
    activateSaturation() {
      this.graphicSaturation = [4, 0.75, 1, -1.1];
      this.cycleSpaceSaturation = 700;
      this.iteratorSaturation = 0;
    },

    // Tensiòn Arterial normal (120/80)
    activatePressure() {
      this.graphicPressure = [1.2, 0.2, 0.4, -0.3];
      this.cycleSpacePressure = 700;
      this.iteratorPressure = 0;
    },

    // Elevación de ST
    activateStElevation() {
      this.graphicData = [0, 0, 0, 0.45, 0, -0.4, 4, 0.7, 1.8];
      this.cycleSpace = 350;
      this.iterator = 0;
      this.slider1 = '40';
    },

    // Obtengo un valor aleatorio entre dos números seleccionados
    /*  getRandomNegativeArbitrary(min, max) {
       return Math.random() * (max - min) + min;
     }  */
  },
};
</script>

<style scoped>
/* código CSS */
.warning {
  animation: blink 1s infinite;
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
