<template>
  <div class="home">
    <apexchart ref="realtimeChart1" type="line" height="350" :options="chartOptions" :series="series1" />
    <apexchart ref="realtimeChart2" type="line" height="350" :options="chartOptions" :series="series2" />
    <div class="row m-4">
        <canvas ref="chart" width="600" height="300"></canvas>
    </div>
    <button @click="activateNormalPulseHeart">Activar pulso normal del corazón</button>
    <button @click="activateVentricularFibrillation">Activar fibrilación ventricular</button>
    <button @click="activateVentricularTachycardia">Activar taquicarida ventricular</button>
    <button @click="activateAsystole">Activar asistolia</button>
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
  mounted() {

    this.intervals();

    /* Declaro las variables que necesito para volver dinamico el grafico: 
    los datos del grafico, el espacio entre cada ciclo y un iterador (Necesito un iterador dinamico porque a la hora de producir una cambio de datos, necesito que iterador vuelva a cero, para evitar problema con los índices de los arreglos, debido a que tienen diferente longitud, y me ayuda para actualizar el espacio entre cada ciclo) */
    this.graphicData = [];
    this.cycleSpace = 0;
    this.iterator = 0

    var series = new smoothie.TimeSeries();
    var canvas = this.$refs.chart;

    var chart = new smoothie.SmoothieChart({grid: { strokeStyle:'#1e1801', fillStyle:'#000000',
          lineWidth: 0, verticalSections: 6, }, maxValue: 8, minValue: -8, millisPerPixel: 20});
    chart.streamTo(canvas, 1000);

    chart.addTimeSeries(series, {lineWidth:3.6,strokeStyle:'#00ff00'});


    // Activo el Pulso normal del corazón
    this.activateNormalPulseHeart()

    /* Defino la función runIteration que se ejecuta en cada iteración del ciclo. Dentro de esta función, se actualiza this.cycleSpace cuando this.iterator es igual a 0, y luego se utiliza setTimeout para programar la próxima iteración de runIteration con el nuevo tiempo de espera this.cycleSpace. */

    const runIteration = () => {
      //series.append(Date.now(), Math.random());
      series.append(Date.now(), this.graphicData[this.iterator]);
      this.iterator++;

      if (this.iterator === this.graphicData.length){
        this.iterator = 0;
      }

      setTimeout(runIteration, this.cycleSpace);
    };

    setTimeout(runIteration, this.cycleSpace);

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
    activateNormalPulseHeart(){
      // Pre armado del array
      // Cantidad de ceros al medio (pausa entre periodos)
      // Identificar valores extremos (4, -0.8 -1.3) que corresponden a R, Q y S respectivamente
      // Pruebas con 150 de delay en el interval, si aumenta a 200, baja el ritmo cardiaco
      // series.append(Date.now(), 10);
      // const data = [1, 1, 1.2, 1.3, 1.2, 1, 1, 1, 1, 2.3, 0.16, 0.17, 0.55, 0.58, 0.67, 1 , 1, 1]

      this.graphicData = [0, 0, 0, 0, 0.25, 0.5, 0, 0, 0, -0.8, 4, -1.3, 0, 0, 0.9, 1, 0.8, 0, 0, 0, 0, 0, 0, 0, 0.3, 0.5, 0, 0, 0, -0.8, 4, -1.3, 0, 0, 0.9, 1, 0.8, 0, 0, 0];

      this.cycleSpace = 120
      this.iterator = 0

    },

    // Fibrilación ventricular
    activateVentricularFibrillation(){
      this.graphicData = [-0.4, 3, -0.4, 1.3, 2.8, -1, 3.1, -0.4, 1.8, 3.5, -1, 3.3, 1.1, 2, 1.2, 1.6, -1, 3.3, -0.9, 2.9, -0.7,2.6, 1, 2.4, -0.2, 1.3, 3, -0.2]

      this.cycleSpace = 400
      this.iterator = 0
    },

    // Taquicardia ventricular
    activateVentricularTachycardia(){
      this.graphicData = [0.3, 0.5, 0, 0, 0, -0.8, 4, -1.3, 0, 0, 0.9, 1, 0.8, -0.5, -0.9, 
      -1.2, -0.6, 1, 2.5, 2.6, 2.7, 0.1, -1.8,   
      -1.2, -0.6, 1, 2.4, 2.5, 2.8, 0.5, -1.9, 
      -1.2, -0.6, 1, 2.4, 2.5, 2.9, 0.2, -1.7,
      -1.3, -0.6, 1.2, 2.5, 2.6, 2.7, 0.3, -2,
      -1.2, -0.6, 1, 2.3, 2.5, 2.6, 0.1, -1.8,
      -1.2, -0.6, 1, 2.4, 2.5, 2.8, 0.4, -1.5,
      -1.2, -0.6, 1, 2.4, 2.5, 2.7, 0.5, -1.7,
      ]

      this.cycleSpace = 150
      this.iterator = 0
    },

    // Asistolia
    activateAsystole(){
      this.graphicData = [0]
      this.iterator = 0
    }

    // Obtengo un valor aleatorio entre dos números seleccionados
   /*  getRandomNegativeArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    }  */
    
  },
};
</script>
