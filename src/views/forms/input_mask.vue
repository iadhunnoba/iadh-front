<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Input Mask</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#basic" class="nav-link scrollactive-item">Basic</a>
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
                        <a target="_blank" href="https://www.npmjs.com/package/v-mask" class="text-info">
                            https://www.npmjs.com/package/v-mask
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div id="basic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Static Mask Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p class="">Input mask are use with <code>input</code> tags.</p>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label for="static-mask1">v-mask="'##-#######'" (99-9999999)</label>
                                        <b-input id="static-mask1" v-model="inputs['input1']" v-mask="'##-#######'" placeholder="__-_______"></b-input>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label for="static-mask2">v-mask="'AA-####'" (aa-9999)</label>
                                        <b-input id="static-mask2" v-model="inputs['input2']" v-mask="'AA-####'" placeholder="__-____"></b-input>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-input id=&quot;static-mask1&quot; v-model=&quot;inputs['input1']&quot; v-mask=&quot;'##-#######'&quot; placeholder=&quot;__-_______&quot;&gt;&lt;/b-input&gt;

&lt;b-input id=&quot;static-mask2&quot; v-model=&quot;inputs['input2']&quot; v-mask=&quot;'AA-####'&quot; placeholder=&quot;__-____&quot;&gt;&lt;/b-input&gt;
</pre
                                        >
                                    </highlight>
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
                                    <h4>Alternate masks</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label for="alternate-masks1">v-mask="'##.#'" (99.9)</label>
                                        <b-input id="alternate-masks1" v-model="inputs['input3']" v-mask="'##.#'" placeholder="__._"></b-input>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="form-group">
                                        <label for="alternate-masks2">v-mask="'##.##'" (99.99)</label>
                                        <b-input id="alternate-masks2" v-model="inputs['input4']" v-mask="'##.##'" placeholder="__.__"></b-input>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-input id=&quot;alternate-masks1&quot; v-model=&quot;inputs['input3']&quot; v-mask=&quot;'##.#'&quot; placeholder=&quot;__._&quot;&gt;&lt;/b-input&gt;

&lt;b-input id=&quot;alternate-masks2&quot; v-model=&quot;inputs['input4']&quot; v-mask=&quot;'##.##'&quot; placeholder=&quot;__.__&quot;&gt;&lt;/b-input&gt;
</pre
                                        >
                                    </highlight>
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
                                    <h4>Dynamic Syntax</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label for="dynamic-syntax-1">v-mask="'#-AAA###'" (9-a{1,3}9{1,3})</label>
                                        <b-input id="dynamic-syntax-1" v-model="inputs['input5']" v-mask="'#-AAA###'" placeholder="_-__"></b-input>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label for="dynamic-syntax-2">v-mask="'AA-####'" (aa-9{1,4})</label>
                                        <b-input id="dynamic-syntax-2" v-model="inputs['input6']" v-mask="'AA-####'" placeholder="__-____"></b-input>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label for="dynamic-syntax-3">v-mask="'AA-##'" (aa-9{1,2})</label>
                                        <b-input id="dynamic-syntax-3" v-model="inputs['input7']" v-mask="'AA-##'" placeholder="__-__"></b-input>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-input id=&quot;dynamic-syntax-1&quot; v-model=&quot;inputs['input5']&quot; v-mask=&quot;'#-AAA###'&quot; placeholder=&quot;_-__&quot;&gt;&lt;/b-input&gt;

&lt;b-input id=&quot;dynamic-syntax-2&quot; v-model=&quot;inputs['input6']&quot; v-mask=&quot;'AA-####'&quot; placeholder=&quot;__-____&quot;&gt;&lt;/b-input&gt;

&lt;b-input id=&quot;dynamic-syntax-3&quot; v-model=&quot;inputs['input7']&quot; v-mask=&quot;'AA-##'&quot; placeholder=&quot;__-__&quot;&gt;&lt;/b-input&gt;
</pre
                                        >
                                    </highlight>
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
                                    <h4>Date</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label for="date">v-mask="'##/##/####'" (dd/mm/yyyy)</label>
                                        <b-input id="date" v-model="inputs['input8']" v-mask="'##/##/####'" placeholder="__/__/____"></b-input>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label for="date2">v-mask="'##-##-####'" (99-99-9999)</label>
                                        <b-input id="date2" v-model="inputs['input9']" v-mask="'##-##-####'" placeholder="__-__-____"></b-input>
                                    </div>
                                </div>
                                <div class="col-xl-4">
                                    <div class="form-group">
                                        <label for="date3">v-mask="'## December, ####'" (99 December, 9999)</label>
                                        <b-input id="date3" v-model="inputs['input10']" v-mask="'## December, ####'" placeholder="__ December, ____"></b-input>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-input id=&quot;date&quot; v-model=&quot;inputs['input8']&quot; v-mask=&quot;'##/##/####'&quot; placeholder=&quot;__/__/____&quot;&gt;&lt;/b-input&gt;

&lt;b-input id=&quot;date2&quot; v-model=&quot;inputs['input9']&quot; v-mask=&quot;'##-##-####'&quot; placeholder=&quot;__-__-____&quot;&gt;&lt;/b-input&gt;

&lt;b-input id=&quot;date3&quot; v-model=&quot;inputs['input10']&quot; v-mask=&quot;'## December, ####'&quot; placeholder=&quot;__ December, ____&quot;&gt;&lt;/b-input&gt;
</pre
                                        >
                                    </highlight>
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
                                    <h4>IP</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <label for="ip-add">v-mask="'###.###.###.###'" (192.198.1.1)</label>
                            <b-input id="ip-add" v-model="inputs['input12']" v-mask="'###.###.###.###'" placeholder="___.___.___.___"></b-input>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-input id=&quot;ip-add&quot; v-model=&quot;inputs['input12']&quot; v-mask=&quot;'###.###.###.###'&quot; placeholder=&quot;___.___.___.___&quot;&gt;&lt;/b-input&gt;
</pre
                                        >
                                    </highlight>
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
                                    <h4>Phone</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <label for="ph-number">v-mask="'(###) ###-####'" ((999) 999-9999)</label>
                            <b-input id="ph-number" v-model="inputs['input13']" v-mask="'(###) ###-####'" placeholder="(___) ___-____"></b-input>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-input id=&quot;ph-number&quot; v-model=&quot;inputs['input13']&quot; v-mask=&quot;'(###) ###-####'&quot; placeholder=&quot;(___) ___-____&quot;&gt;&lt;/b-input&gt;
</pre
                                        >
                                    </highlight>
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
                                    <h4>Currency</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <label for="currency">$999,9999,999.99</label>
                            <b-input id="currency" v-model="inputs['input14']" v-mask="'$###,####,###.##'" placeholder="$___,____,___.__"></b-input>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-input id=&quot;currency&quot; v-model=&quot;inputs['input14']&quot; v-mask=&quot;'$###,####,###.##'&quot; placeholder=&quot;$___,____,___.__&quot;&gt;&lt;/b-input&gt;
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
    import Vue from 'vue';
    import VueMask from 'v-mask';
    Vue.use(VueMask);

    import '@/assets/sass/scrollspyNav.scss';
    import highlight from '@/components/plugins/highlight.vue';

    export default {
        metaInfo: { title: 'Input Mask' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                inputs: []
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
