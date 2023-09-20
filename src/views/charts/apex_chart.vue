<template>
  <div class="home">
    <apexchart ref="realtimeChart1" type="line" height="350" :options="chartOptions" :series="series1" />
    <apexchart ref="realtimeChart2" type="line" height="350" :options="chartOptions" :series="series2" />

    <div class="row m-4">
      <div class="col-12 col-md-6">
        <canvas ref="chart" width="600" height="300"></canvas>
      </div>
      <div class="col-12 col-md-6">
        <div class="row">
          <div class="col-12">
            <div class="custom-progress progress-up mb-2" style="width: 100%">
              <div class="range-count">
                <span class="range-count-number" v-bind:class="{ warning: isWarningPulseHeart }"
                  v-bind:style="{ fontSize: 4 + 'em' }">HR: {{ slider1 }}</span>
              </div>
            </div>
          </div>
          <div v-if="permisos" class="row"> 
            <div class="col-4 col-md-6">
              <b-button variant="info" class="w-100 mb-3 mr-1" @click="activateNormalPulseHeart(120)">Activar pulso
                normal
                del
                corazón</b-button>
            </div>
            <div class="col-4 col-md-6">
              <b-button variant="info" class="w-100 mb-3 mr-1" @click="activateLowPulseHeart">Activar frecuencia
                cardiaca
                baja</b-button>
            </div>
            <div class="col-4 col-md-6">
              <b-button variant="info" class="w-100 mb-3 mr-1" @click="activateFastPulseHeart">Activar frecuencia
                cardiaca
                alta</b-button>
            </div>
            <div class="col-4 col-md-6">
              <b-button variant="info" class="w-100 mb-3 mr-1" @click="activateVentricularFibrillation">Activar
                fibrilación
                ventricular</b-button>
            </div>
            <div class="col-4 col-md-6">
              <b-button variant="info" class="w-100 mb-3 mr-1" @click="activateVentricularTachycardia">Activar
                taquicarida
                ventricular</b-button>
            </div>
            <div class="col-4 col-md-6">
              <b-button variant="info" class="w-100 mb-3 mr-1" @click="activateStElevation">Elevación de
                ST</b-button>
            </div>
            <div class="col-4 col-md-6">
              <b-button variant="info" class="w-100 mb-3 mr-1" @click="activateAsystole">Activar
                asistolia</b-button>
            </div>
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
            <span class="range-count-number" v-bind:class="{ warning: isWarning }"
              v-bind:style="{ fontSize: 4 + 'em' }">SpO2: {{ slider2 }}</span>
          </div>
          <b-input v-if="permisos" type="range" v-model="slider2" :min="0" :max="100"
            class="progress-range-counter"></b-input>
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
import Vue from 'vue';
import VueApexCharts from 'vue-apexcharts';
import smoothie from 'smoothie';

Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);

import '@/assets/sass/scrollspyNav.scss';
//import highlight from '@/components/plugins/highlight.vue';

var lastDate = 0,
  data1 = [],
  data2 = [];

function getDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  while (i < count) {
    let x = baseval,
      y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    data1.push({ x, y });
    data2.push({ x, y });
    lastDate = baseval;
    baseval += 86400000;
    i++;
  }
}

getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
  min: 10,
  max: 90,
});

function getNewSeries(baseval, yrange) {
  var newDate = baseval + 86400000;
  lastDate = newDate;
  data1.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
  });
  data2.push({
    x: newDate,
    y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min,
  });
}

function resetData() {
  data1 = data1.slice(data1.length - 10, data1.length);
  data2 = data2.slice(data2.length - 10, data2.length);
}

export default {
  name: 'home',
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      permisos: false,
      slider1: 60,
      slider2: 100,
      isWarning: false,
      isWarningPulseHeart: false,
      bloodPressure: '',
      series1: [{ data: data1.slice() }],
      series2: [{ data: data2.slice() }],
      chartOptions: {
        chart: {
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 2000,
            },
          },
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },

        title: {
          text: 'Dynamic Updating Chart',
          align: 'left',
        },
        markers: {
          size: 0,
        },
        xaxis: {
          type: 'datetime',
          range: 777600000,
        },
        yaxis: {
          max: 100,
        },
        legend: {
          show: false,
        },
      }
    };
  },
  created() {
    this.permisos = !!localStorage.getItem('token');
  },
  mounted() {
    this.intervals();

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
        strokeStyle: '#1e1801', fillStyle: '#000000',
        lineWidth: 0, verticalSections: 6,
      }, maxValue: 8, minValue: -8, millisPerPixel: 20
    });
    chart.streamTo(canvas, 1000);

    chart.addTimeSeries(series, { lineWidth: 3.6, strokeStyle: '#00ff00' });

    // Gràfico de la suturaciòn de oxìgeno
    this.graphicSaturation = []
    this.cycleSpaceSaturation = 0;
    this.iteratorSaturation = 0;

    var seriesSaturation = new smoothie.TimeSeries();
    var canvasSaturation = this.$refs.saturation;

    var chartSaturation = new smoothie.SmoothieChart({
      grid: {
        strokeStyle: '#1e1801', fillStyle: '#000000',
        lineWidth: 0, verticalSections: 6,
      }, maxValue: 8, minValue: -8, millisPerPixel: 20
    });
    chartSaturation.streamTo(canvasSaturation, 1000);

    chartSaturation.addTimeSeries(seriesSaturation, { lineWidth: 3.6, strokeStyle: '#FFFF00' });

    // Gràfico de la suturaciòn de la tensiòn arterial
    this.graphicPressure = []
    this.cycleSpacePressure = 0;
    this.iteratorPressure = 0;

    var seriesPressure = new smoothie.TimeSeries();
    var canvasPressure = this.$refs.tensionArterial;

    var chartPressure = new smoothie.SmoothieChart({
      grid: {
        strokeStyle: '#1e1801', fillStyle: '#000000',
        lineWidth: 0, verticalSections: 6,
      }, maxValue: 8, minValue: -8, millisPerPixel: 20
    });
    chartPressure.streamTo(canvasPressure, 1000);

    chartPressure.addTimeSeries(seriesPressure, { lineWidth: 3.6, strokeStyle: '#FF0000' });


    // Activo el pulso normal del corazón
    this.activateNormalPulseHeart(120)

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
  methods: {
    intervals: function () {
      var me = this;
      window.setInterval(function () {
        getNewSeries(lastDate, { min: 10, max: 90 });
        me.$refs.realtimeChart1.updateSeries([{ data: data1 }]);
        me.$refs.realtimeChart2.updateSeries([{ data: data2 }]);
      }, 2000);

      // every 60 seconds, we reset the data to prevent memory leaks
      window.setInterval(function () {
        resetData();
        me.$refs.realtimeChart1.updateSeries([{ data: [] }], false, true);
        me.$refs.realtimeChart2.updateSeries([{ data: [] }], false, true);
      }, 60000);
    },

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

      this.graphicData = [0, 0, 0, 0, 0.45, 0.5, 0, 0, 0, -0.6, 4, -1.3, 0, 0, 0, 0, 0.65, 0.75, 0.65, 0, 0, 0
      ];

      this.cycleSpace = cycleSpace;
      this.iterator = 0;
      this.slider1 = '60'

      // Activo la saturación de oxígeno normal
      this.activateSaturation()

      // Activo la tensiòn arterial normal (120/80)
      this.activatePressure()
      this.bloodPressure = '120/80'

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
      this.bloodPressure = '90/60'
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
      this.graphicData.splice(14, 2);

      this.iterator = 0;

      this.cycleSpaceSaturation = 350;

      // Tensiòn Arterial alta (150/90)
      this.cycleSpacePressure = 350;
      this.bloodPressure = '150/90'

    },

    // Fibrilación ventricular
    activateVentricularFibrillation() {
      /* 
      Arreglo original:
      this.graphicData = [-0.4, 3, -0.4, 1.3, 2.8, -1, 3.1, -0.4, 1.8, 3.5, -1, 3.3, 1.1, 2, 1.2, 1.6, -1, 3.3, -0.9, 2.9, -0.7,2.6, 1, 2.4, -0.2, 1.3, 3, -0.2]
      */
      this.graphicData = [-0.4, 3, -0.4, 1.3, 2.8, -1, 3.1, -0.4, 1.8, 3.5, -1, 3.3, 1.1, 2, 1.2, 1.6, -1, 3.3, -0.9, 2.9, -0.7, 2.6, 1, 2.4, -0.2, 1.3, 3, -0.2, -1, 3.3, 1.1, 2, 1.2, 1.6, -1,];

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
      this.slider1 = '--'

      this.graphicSaturation = [0];
      this.iteratorSaturation = 0;
      this.slider2 = '--'

      this.graphicPressure = [0];
      this.iteratorPressure = 0;
      this.bloodPressure = '--/--'
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

<style scoped> /* código CSS */
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
 }</style> 