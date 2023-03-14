<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Date and Range Picker</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#date_time_picker" class="nav-link scrollactive-item">Date Time Picker</a>
                    <a href="#js_range_slider" class="nav-link scrollactive-item">JS Range Slider</a>
                    <a href="#noUi_sliders" class="nav-link scrollactive-item">noUi Sliders</a>
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
                        <a target="_blank" href="https://www.npmjs.com/package/vue-flatpickr-component" class="text-info">
                            https://www.npmjs.com/package/vue-flatpickr-component
                        </a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div id="date_time_picker" class="col-lg-12 layout-top-spacing">
                    <div class="seperator-header">
                        <h4 class="">Date and Time Picker</h4>
                    </div>
                </div>

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="form-group mb-0">
                                <flat-pickr v-model="date1" class="form-control flatpickr active"></flat-pickr>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;flat-pickr v-model=&quot;date1&quot; class=&quot;form-control flatpickr active&quot;&gt;&lt;/flat-pickr&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Date Time</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p>Use <code>{enableTime: true, dateFormat: 'Y-m-d H:i'}</code> option to enable time support</p>
                            <div class="form-group mb-0">
                                <flat-pickr v-model="date2" :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }" class="form-control flatpickr active"></flat-pickr>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;flat-pickr v-model=&quot;date2&quot; :config=&quot;{enableTime: true, dateFormat: 'Y-m-d H:i'}&quot; class=&quot;form-control flatpickr active&quot;&gt;&lt;/flat-pickr&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Range Calendar</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p>Use <code>{mode: 'range'}</code> select the date with range.</p>

                            <div class="form-group mb-0">
                                <flat-pickr v-model="date3" :config="{ mode: 'range' }" class="form-control flatpickr active"></flat-pickr>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;flat-pickr v-model=&quot;date3&quot; :config=&quot;{mode: 'range'}&quot; class=&quot;form-control flatpickr active&quot;&gt;&lt;/flat-pickr&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Preloading Time</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p>Use <code>{noCalendar: true, enableTime: true, dateFormat: 'H:i'}</code> with Date Time options to disable calendar and show time picker only.</p>
                            <div class="form-group mb-0">
                                <flat-pickr v-model="date4" :config="{ noCalendar: true, enableTime: true, dateFormat: 'H:i' }" class="form-control flatpickr active"></flat-pickr>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;flat-pickr v-model=&quot;date4&quot; :config=&quot;{noCalendar: true, enableTime: true, dateFormat: 'H:i'}&quot; class=&quot;form-control flatpickr active&quot;&gt;&lt;/flat-pickr&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div id="js_range_slider" class="col-lg-12">
                    <div class="seperator-header">
                        <h4 class="">Javascript Range Slider</h4>
                    </div>
                </div>

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Postion : Top-Left</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="custom-progress progress-up" style="width: 100%">
                                <div class="range-count">
                                    <span class="range-count-number">{{ slider1 }}</span> <span class="range-count-unit">%</span>
                                </div>
                                <b-input type="range" v-model="slider1" :min="0" :max="100" class="progress-range-counter"></b-input>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;custom-progress progress-up&quot; style=&quot;width: 100%&quot;&gt;
    &lt;div class=&quot;range-count&quot;&gt;&lt;span class=&quot;range-count-number&quot; &gt;{{ slider1 }}&lt;/span&gt; &lt;span class=&quot;range-count-unit&quot;&gt;%&lt;/span&gt;&lt;/div&gt;
    &lt;b-input type=&quot;range&quot; v-model=&quot;slider1&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;progress-range-counter&quot;&gt;&lt;/b-input&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Postion : Top-Right</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="custom-progress top-right progress-up" style="width: 100%">
                                <div class="range-count">
                                    <span class="range-count-number">{{ slider2 }}</span> <span class="range-count-unit">%</span>
                                </div>
                                <b-input type="range" v-model="slider2" :min="0" :max="100" class="progress-range-counter"></b-input>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;custom-progress top-right progress-up&quot; style=&quot;width: 100%&quot;&gt;
    &lt;div class=&quot;range-count&quot;&gt;&lt;span class=&quot;range-count-number&quot;&gt;{{ slider2 }}&lt;/span&gt; &lt;span class=&quot;range-count-unit&quot;&gt;%&lt;/span&gt;&lt;/div&gt;
    &lt;b-input type=&quot;range&quot; v-model=&quot;slider2&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;progress-range-counter&quot;&gt;&lt;/b-input&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Postion : Bottom-Left</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="custom-progress progress-down" style="width: 100%">
                                <b-input type="range" v-model="slider3" :min="0" :max="100" class="progress-range-counter"></b-input>
                                <div class="range-count">
                                    <span class="range-count-number">{{ slider3 }}</span> <span class="range-count-unit">%</span>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;custom-progress progress-down&quot; style=&quot;width: 100%&quot;&gt;
    &lt;b-input type=&quot;range&quot; v-model=&quot;slider3&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;progress-range-counter&quot;&gt;&lt;/b-input&gt;
    &lt;div class=&quot;range-count&quot;&gt;&lt;span class=&quot;range-count-number&quot;&gt;{{ slider3 }}&lt;/span&gt; &lt;span class=&quot;range-count-unit&quot;&gt;%&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Postion : Bottom-Right</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="custom-progress bottom-right progress-down" style="width: 100%">
                                <b-input type="range" v-model="slider4" :min="0" :max="100" class="progress-range-counter"></b-input>
                                <div class="range-count">
                                    <span class="range-count-number">{{ slider4 }}</span> <span class="range-count-unit">%</span>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;custom-progress bottom-right progress-down&quot; style=&quot;width: 100%&quot;&gt;
    &lt;b-input type=&quot;range&quot; v-model=&quot;slider4&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;progress-range-counter&quot;&gt;&lt;/b-input&gt;
    &lt;div class=&quot;range-count&quot;&gt;&lt;span class=&quot;range-count-number&quot;&gt;{{ slider4 }}&lt;/span&gt; &lt;span class=&quot;range-count-unit&quot;&gt;%&lt;/span&gt;&lt;/div&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row my-4">
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
                        <a target="_blank" href="https://www.npmjs.com/package/nouislider-vue" class="text-info">
                            https://www.npmjs.com/package/nouislider-vue
                        </a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div id="noUi_sliders" class="col-lg-12">
                    <div class="seperator-header">
                        <h4 class="">noUI Slider</h4>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="row">
                        <div class="col-lg-12 mb-4">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4 class="mb-4">Using HTML5 input elements</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body align-center">
                                    <div class="container">
                                        <nouislider
                                            :set="[noui_min1, noui_max1]"
                                            :handles="[noui_min1, noui_max1]"
                                            :range="{ min: -20, max: 40 }"
                                            :connect="true"
                                            :tooltips="true"
                                            @update="noui_update1"
                                        ></nouislider>
                                        <br />
                                        <div class="row mt-4 mb-4">
                                            <div class="col-lg-6 mb-3">
                                                <b-select v-model="noui_min1" @change="noui_change1(noui_min1, noui_max1)">
                                                    <b-select-option v-for="(i, index) in 61" :key="i" :value="index - 20">{{ index - 20 }}</b-select-option>
                                                </b-select>
                                            </div>
                                            <div class="col-lg-6">
                                                <b-input type="number" v-model="noui_max1" :min="-20" :max="40" step="1" @change="noui_change1(noui_min1, noui_max1)"></b-input>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></b-button>

                                        <div v-if="code_arr.includes('code9')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;div class=&quot;container&quot;&gt;
    &lt;nouislider :set=&quot;[noui_min1, noui_max1]&quot; :handles=&quot;[noui_min1, noui_max1]&quot; :range=&quot;{min: -20, max: 40}&quot; :connect=&quot;true&quot; :tooltips=&quot;true&quot; @update=&quot;noui_update1&quot;&gt;&lt;/nouislider&gt;
    &lt;br /&gt;
    &lt;div class=&quot;row mt-4 mb-4&quot;&gt;
        &lt;div class=&quot;col-lg-6 mb-3&quot;&gt;
            &lt;b-select v-model=&quot;noui_min1&quot; @change=&quot;noui_change1(noui_min1, noui_max1)&quot;&gt;
                &lt;b-select-option v-for=&quot;(i, index) in 61&quot; :key=&quot;i&quot; :value=&quot;index - 20&quot;&gt;{{ index - 20 }}&lt;/b-select-option&gt;
            &lt;/b-select&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-lg-6&quot;&gt;
            &lt;b-input type=&quot;number&quot; v-model=&quot;noui_max1&quot; :min=&quot;-20&quot; :max=&quot;40&quot; step=&quot;1&quot; @change=&quot;noui_change1(noui_min1, noui_max1)&quot;&gt;&lt;/b-input&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre
                                                >
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-12">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4 class="mb-4">Non linear slider</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body align-center">
                                    <div class="container">
                                        <nouislider
                                            :handles="[noui_min2, noui_max2]"
                                            :range="{ min: [0], '10%': [500, 500], '50%': [4000, 1000], max: [10000] }"
                                            :connect="true"
                                            :tooltips="true"
                                            behaviour="tap"
                                            @update="noui_update2"
                                        ></nouislider>
                                        <br />
                                        <div class="row mt-4 mb-4">
                                            <div class="col-lg-6">
                                                <span class="example-val"
                                                    >{{ noui_min2 }} <span class="precentage-val">{{ noui_min2_perc }}%</span></span
                                                >
                                            </div>
                                            <div class="col-lg-6 text-right">
                                                <span class="example-val"
                                                    >{{ noui_max2 }} <span class="precentage-val">{{ noui_max2_perc }}%</span></span
                                                >
                                            </div>
                                        </div>
                                    </div>

                                    <div class="code-section-container show-code">
                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></b-button>
                                        <div v-if="code_arr.includes('code10')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;div class=&quot;container&quot;&gt;
    &lt;nouislider :handles=&quot;[noui_min2, noui_max2]&quot; :range=&quot;{min: [0], '10%': [500,500], '50%': [4000,1000],'max': [10000] }&quot; :connect=&quot;true&quot; :tooltips=&quot;true&quot; behaviour=&quot;tap&quot; @update=&quot;noui_update2&quot;&gt;&lt;/nouislider&gt;
    &lt;br /&gt;
    &lt;div class=&quot;row mt-4 mb-4&quot;&gt;
        &lt;div class=&quot;col-lg-6&quot;&gt;
            &lt;span class=&quot;example-val&quot;&gt;{{ noui_min2 }} &lt;span class=&quot;precentage-val&quot;&gt;{{ noui_min2_perc }}%&lt;/span&gt;&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-lg-6 text-right&quot;&gt;
            &lt;span class=&quot;example-val&quot;&gt;{{ noui_max2 }} &lt;span class=&quot;precentage-val&quot;&gt;{{ noui_max2_perc }}%&lt;/span&gt;&lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre
                                                >
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4 class="mb-4">Locking sliders together</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body align-center">
                            <div class="container">
                                <div class="row mb-4">
                                    <div class="col-lg-12 mb-5">
                                        <nouislider
                                            :handles="noui_min3"
                                            :range="{ min: 50, max: 100 }"
                                            :animate="false"
                                            :tooltips="true"
                                            @update="noui_update3"
                                            @change="set_locked_values"
                                            @slide="noui_slide3"
                                        ></nouislider>
                                        <span class="example-val mt-4 d-inline-block">{{ noui_min3 }}</span>
                                    </div>
                                </div>
                                <br />
                                <div class="row mb-0">
                                    <div class="col-lg-12 mb-5">
                                        <nouislider
                                            :set="noui_min4"
                                            :handles="noui_min4"
                                            :range="{ min: 50, max: 100 }"
                                            :animate="false"
                                            :tooltips="true"
                                            @update="noui_update4"
                                            @change="set_locked_values"
                                        ></nouislider>
                                        <span class="example-val mt-4 d-inline-block">{{ noui_min4 }}</span>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <b-button variant="primary" class="my-4 float-right" @click="is_lock = !is_lock">{{ is_lock ? 'unlock' : 'lock' }}</b-button>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code11')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;row mb-4&quot;&gt;
        &lt;div class=&quot;col-lg-12 mb-5&quot;&gt;
            &lt;nouislider :handles=&quot;noui_min3&quot; :range=&quot;{min: 50, max: 100}&quot; :animate=&quot;false&quot; :tooltips=&quot;true&quot; @update=&quot;noui_update3&quot; @change=&quot;set_locked_values&quot; @slide=&quot;noui_slide3&quot;&gt;&lt;/nouislider&gt;
            &lt;span class=&quot;example-val mt-4 d-inline-block&quot;&gt;{{ noui_min3 }}&lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;br /&gt;
    &lt;div class=&quot;row mb-0&quot;&gt;
        &lt;div class=&quot;col-lg-12 mb-5&quot;&gt;
            &lt;nouislider :set=&quot;noui_min4&quot; :handles=&quot;noui_min4&quot; :range=&quot;{min: 50, max: 100}&quot; :animate=&quot;false&quot; :tooltips=&quot;true&quot; @update=&quot;noui_update4&quot; @change=&quot;set_locked_values&quot;&gt;&lt;/nouislider&gt;
            &lt;span class=&quot;example-val mt-4 d-inline-block&quot;&gt;{{ noui_min4 }}&lt;/span&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-lg-12&quot;&gt;
            &lt;b-button variant=&quot;primary&quot; class=&quot;my-4 float-right&quot; @click=&quot;is_lock = !is_lock;&quot;&gt;{{ is_lock ? 'unlock' : 'lock' }}&lt;/b-button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre
                                        >
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

<script>
    import '@/assets/sass/scrollspyNav.scss';
    import highlight from '@/components/plugins/highlight.vue';

    //normal range slider
    import '@/assets/sass/forms/bootstrap-slider.css';

    //flatpickr
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';

    //nouislider
    import nouislider from 'veeno';
    import 'nouislider/distribute/nouislider.css';
    import '@/assets/sass/forms/custom-nouiSlider.css';

    export default {
        metaInfo: { title: 'Bootstrap Forms' },
        components: {
            highlight,
            flatPickr,
            nouislider
        },
        data() {
            return {
                code_arr: [],
                date1: '2020-09-04',
                date2: '2020-09-19 12:00',
                date3: '',
                date4: '13:45',
                slider1: 0,
                slider2: 0,
                slider3: 0,
                slider4: 0,
                noui_min1: 10,
                noui_max1: 30,
                noui_min2: 500,
                noui_max2: 4000,
                noui_min2_perc: 0,
                noui_max2_perc: 0,
                noui_min3: 60,
                noui_min4: 80,
                is_lock: false,
                locked_values: [60, 80]
            };
        },
        mounted() {
            this.noui_change1(this.noui_min1, this.noui_max1);
        },
        methods: {
            toggleCode(name) {
                if (this.code_arr.includes(name)) {
                    this.code_arr = this.code_arr.filter(d => d != name);
                } else {
                    this.code_arr.push(name);
                }
            },
            noui_change1(min, max) {
                this.noui_min1 = parseInt(min);
                this.noui_max1 = parseInt(max);
            },
            noui_update1(data) {
                if (data.values) {
                    this.noui_min1 = Math.round(parseFloat(data.values[0]));
                    this.noui_max1 = parseFloat(data.values[1]);
                }
            },
            noui_update2(data) {
                if (data.values) {
                    this.noui_min2 = data.values[0];
                    this.noui_max2 = data.values[1];
                }
                if (data.positions) {
                    this.noui_min2_perc = data.positions[0].toFixed(2);
                    this.noui_max2_perc = data.positions[1].toFixed(2);
                }
            },
            noui_update3(data) {
                if (data.values) {
                    this.noui_min3 = parseFloat(data.values[0]);
                }
            },
            noui_update4(data) {
                if (data.values) {
                    this.noui_min4 = parseFloat(data.values[0]);
                }
            },
            set_locked_values() {
                this.locked_values = [Number(this.noui_min3), Number(this.noui_min4)];
            },
            noui_slide3() {
                if (this.is_lock) {
                    let val = JSON.parse(JSON.stringify(this.noui_min3));
                    val -= this.locked_values[0] - this.locked_values[1];
                    this.noui_min4 = val;
                }
            }
        }
    };
</script>
