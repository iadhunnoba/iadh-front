<template>
    <div class="layout-px-spacing">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components </a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Lightbox</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="row layout-top-spacing">
            <div class="col-12">
                <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
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
                        class="feather feather-bell"
                    >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    Documentation:
                    <a target="_blank" href="https://www.npmjs.com/package/vue-cool-lightbox" class="text-info">
                        https://www.npmjs.com/package/vue-cool-lightbox
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 layout-spacing layout-top-spacing">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Lightbox</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div>
                            <b-radio v-model="allControls" class="radio-info mb-4" :value="true" @change="initData">
                                All controls<br />
                                <span>caption, slideshow, thumbnails and fullscreen buttons, tap to toggle controls</span>
                            </b-radio>
                            <b-radio v-model="allControls" class="radio-info mb-4" :value="false" @change="initData">
                                Minimal<br />
                                <span>no caption, no slideshow, no thumbnails, no fullscreen, tap to close</span>
                            </b-radio>
                        </div>

                        <CoolLightBox :items="items" :index="index" :gallery="allControls" :slideshow="allControls" :fullScreen="allControls" slideshow-color-bar="#2196f3" @close="index = null">
                        </CoolLightBox>
                        <div class="demo-gallery">
                            <a v-for="(item, i) in items" :key="i" href="javascript:;" :class="`img-${i + 1}`" @click="index = i">
                                <img :src="item.src" alt="image-gallery" />
                            </a>
                        </div>

                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import CoolLightBox from 'vue-cool-lightbox';
    import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';
    Vue.component('CoolLightBox', CoolLightBox);

    import '@/assets/sass/components/custom-lightbox.scss';
    export default {
        metaInfo: { title: 'Lightbox' },
        data() {
            return {
                code_arr: [],
                index: null,
                allControls: true, // all, minimal
                items: [
                    {
                        src: require('@/assets/images/lightbox-1.jpg'),
                        thumb: require('@/assets/images/lightbox-1.jpg'),
                        title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.',
                        description: 'Photo: Samuel Rohl'
                    },
                    {
                        src: require('@/assets/images/lightbox-8.jpeg'),
                        thumb: require('@/assets/images/lightbox-8.jpeg'),
                        title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.',
                        description: 'Photo: Samuel Rohl'
                    },
                    {
                        src: require('@/assets/images/lightbox-3.jpeg'),
                        thumb: require('@/assets/images/lightbox-3.jpeg'),
                        title: "Dummy caption. It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense.",
                        description: 'Photo: Michael Hull'
                    },
                    { src: require('@/assets/images/lightbox-2.jpeg'), thumb: require('@/assets/images/lightbox-2.jpeg'), title: 'This is dummy caption.', description: 'Photo: Folkert Gorter' },
                    {
                        src: require('@/assets/images/lightbox-14.jpeg'),
                        thumb: require('@/assets/images/lightbox-14.jpeg'),
                        title: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
                        description: 'Photo: Thomas Lefebvre'
                    },
                    {
                        src: require('@/assets/images/lightbox-15.jpeg'),
                        thumb: require('@/assets/images/lightbox-15.jpeg'),
                        title: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
                        description: 'Photo: Thomas Lefebvre'
                    }
                ]
            };
        },
        mounted() {
            this.initData();
        },
        methods: {
            initData() {
                if (this.allControls) {
                    this.items = [
                        {
                            src: require('@/assets/images/lightbox-1.jpg'),
                            thumb: require('@/assets/images/lightbox-1.jpg'),
                            title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.',
                            description: 'Photo: Samuel Rohl'
                        },
                        {
                            src: require('@/assets/images/lightbox-8.jpeg'),
                            thumb: require('@/assets/images/lightbox-8.jpeg'),
                            title: 'This is dummy caption. It has been placed here solely to demonstrate the look and feel of finished, typeset text.',
                            description: 'Photo: Samuel Rohl'
                        },
                        {
                            src: require('@/assets/images/lightbox-3.jpeg'),
                            thumb: require('@/assets/images/lightbox-3.jpeg'),
                            title: "Dummy caption. It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense.",
                            description: 'Photo: Michael Hull'
                        },
                        { src: require('@/assets/images/lightbox-2.jpeg'), thumb: require('@/assets/images/lightbox-2.jpeg'), title: 'This is dummy caption.', description: 'Photo: Folkert Gorter' },
                        {
                            src: require('@/assets/images/lightbox-14.jpeg'),
                            thumb: require('@/assets/images/lightbox-14.jpeg'),
                            title: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
                            description: 'Photo: Thomas Lefebvre'
                        },
                        {
                            src: require('@/assets/images/lightbox-15.jpeg'),
                            thumb: require('@/assets/images/lightbox-15.jpeg'),
                            title: "It's a dummy caption. He who searches for meaning here will be sorely disappointed.",
                            description: 'Photo: Thomas Lefebvre'
                        }
                    ];
                } else {
                    this.items = [
                        { src: require('@/assets/images/lightbox-1.jpg') },
                        { src: require('@/assets/images/lightbox-8.jpeg') },
                        { src: require('@/assets/images/lightbox-3.jpeg') },
                        { src: require('@/assets/images/lightbox-2.jpeg') },
                        { src: require('@/assets/images/lightbox-14.jpeg') },
                        { src: require('@/assets/images/lightbox-15.jpeg') }
                    ];
                }
            },
            toggleCode(name) {
                if (this.code_arr.includes(name)) {
                    this.code_arr = this.code_arr.filter(d => d != name);
                } else {
                    this.code_arr.push(name);
                }
            }
        }
    };
</script>
