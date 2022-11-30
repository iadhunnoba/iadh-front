<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Maps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>jVector</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#mapWorld" class="nav-link scrollactive-item">World</a>
                    <a href="#mapContinents" class="nav-link scrollactive-item">Continents</a>
                    <a href="#mapAfrica" class="nav-link scrollactive-item">Africa</a>
                    <a href="#mapAsia" class="nav-link scrollactive-item">Asia</a>
                    <a href="#mapNorthAmerica" class="nav-link scrollactive-item">North America</a>
                    <a href="#mapOceania" class="nav-link scrollactive-item">Oceania</a>
                    <a href="#mapEurope" class="nav-link scrollactive-item">Europe</a>
                    <a href="#mapSouthAmerica" class="nav-link scrollactive-item">South America</a>
                </scrollactive>
            </div>
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
                        <a target="_blank" href="https://jvectormap.com" class="text-info">
                            https://jvectormap.com
                        </a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div id="mapWorld" class="col-lg-12 layout-top-spacing layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>World</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div id="world-map" style="height: 400px"></div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre></pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="mapContinents" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Continents</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div id="continents-map" style="height: 400px"></div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre></pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="mapAfrica" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Africa</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div id="africa-map" style="height: 400px"></div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre></pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="mapAsia" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Asia</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div id="asia-map" style="height: 400px"></div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre></pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="mapNorthAmerica" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>North America</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div id="north_america-map" style="height: 400px"></div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre></pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="mapOceania" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Oceania</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div id="oceanina-map" class="mx-sm-5" style="height: 400px;"></div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre></pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="mapEurope" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Europe</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div id="europe-map" style="height: 400px"></div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre></pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="mapSouthAmerica" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>South America</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div id="south-america-map" style="height: 400px"></div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-left">
                                    <highlight>
                                        <pre></pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .jvectormap-container {
        border-radius: 14px;
        padding: 20px 0;
    }
    .jvectormap-zoomin,
    .jvectormap-zoomout,
    .jvectormap-goback {
        left: 20px;
        border-radius: 50%;
        background: #ffffff;
        padding: 6px 6px;
        color: #3b3f5c;
        border: 2px solid #3b3f5c;
        font-size: 19px;
        font-weight: 700;
        top: 20px;
    }
    .jvectormap-zoomout {
        top: 20px;
        left: 50px;
    }
</style>
<script>
    import '@/assets/sass/scrollspyNav.scss';
    import highlight from '@/components/plugins/highlight.vue';

    export default {
        metaInfo: { title: 'jVector Maps' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: []
            };
        },
        mounted() {},
        methods: {
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
