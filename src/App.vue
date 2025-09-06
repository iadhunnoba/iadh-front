<template>
    <div :class="[$store.state.layout_style, $store.state.menu_style]">
        <component v-bind:is="layout"></component>
    </div>
</template>
<script>
    // layouts
    import appLayout from './layouts/app-layout.vue';
    import authLayout from './layouts/auth-layout.vue';

    import '@/assets/sass/app.scss';

    export default {
        metaInfo: {
            title: 'Sales Admin',
            titleTemplate: '%s | CORK - Multipurpose Bootstrap Dashboard Template'
        },
        components: {
            app: appLayout,
            auth: authLayout
        },
        computed: {
            layout() {
                return this.$store.getters.layout;
            }
        },
        data() {
            return {};
        },
        mounted() {},
        methods: {}
    };
</script>

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
      this.$refs.functionModal.hide();

      this.

      this.$watch('slider1', (sliderValue) => {

        if (sliderValue == '0') {

          this.activateAsystole();

        }/* else{

          this.graphicData = [5, -2];
          this.cycleSpace = 550;
          this.iterator = 0;
          this.graphicSaturation = [4.6, 1.35, 1.6, -1.7];
          this.cycleSpaceSaturation = 700;
          this.iteratorSaturation = 0;
          this.graphicPressure = [1.9, 0.9, 1.1, -0.9];
          this.cycleSpacePressure = 700;
          this.iteratorPressure = 0;
          this.$refs.functionModal.hide();

        } */

      })

    },
