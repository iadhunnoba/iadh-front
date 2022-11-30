<template>
    <div class="container touchspin">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Touchspin</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#fbtBasic" class="nav-link scrollactive-item">Basic</a>
                    <a href="#fbtSize" class="nav-link scrollactive-item">Size</a>
                    <a href="#fbtInline" class="nav-link scrollactive-item">Inline Buttons</a>
                    <a href="#fbtVerticalBtns" class="nav-link scrollactive-item">Vertical Buttons</a>
                    <a href="#fbtChangeBtnClass" class="nav-link scrollactive-item">Change Button Class</a>
                </scrollactive>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        Documentation: <a target="_blank" href="https://bootstrap-vue.org/docs/components/form-spinbutton" class="text-info">
                            https://bootstrap-vue.org/docs/components/form-spinbutton
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">

                <div id="fbtBasic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Button Spin</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="mb-4">
                                <b-form-spinbutton :value="55" min="1" max="100"></b-form-spinbutton>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form-spinbutton :value=&quot;55&quot; min=&quot;1&quot; max=&quot;100&quot;&gt;&lt;/b-form-spinbutton&gt;
</pre>
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
                                    <h4>Spin button with step of 0.25</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <form class="form-horizontal">
                                <div class="form-group mb-4">
                                    <b-form-spinbutton :value="0" min="0" max="10" step="0.25"></b-form-spinbutton>
                                </div>
                            </form>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form-spinbutton :value=&quot;0&quot; min=&quot;0&quot; max=&quot;10&quot; step=&quot;0.25&quot;&gt;&lt;/b-form-spinbutton&gt;
</pre>
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
                                    <h4>Wrapping value spin button</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="mb-4">
                                <b-form-spinbutton wrap min="1" max="25" placeholder="--"></b-form-spinbutton>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form-spinbutton wrap min=&quot;1&quot; max=&quot;25&quot; placeholder=&quot;--&quot;&gt;&lt;/b-form-spinbutton&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="fbtSize" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Spin button with size</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="mb-4">
                                <h6>Small size</h6>
                                <b-form-spinbutton size="sm" min="1" max="100" placeholder="--" class="mb-2"></b-form-spinbutton>
                            </div>
                            <div class="mb-4">
                                <h6>Default size</h6>
                                <b-form-spinbutton min="1" max="100" placeholder="--" class="mb-2"></b-form-spinbutton>
                            </div>
                            <div class="mb-4">
                                <h6>Large size</h6>
                                <b-form-spinbutton size="lg" min="1" max="100" placeholder="--" class="mb-2"></b-form-spinbutton>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
===Small size===
&lt;b-form-spinbutton size=&quot;sm&quot; min=&quot;1&quot; max=&quot;100&quot; placeholder=&quot;--&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-spinbutton&gt;

===Default size===
&lt;b-form-spinbutton min=&quot;1&quot; max=&quot;100&quot; placeholder=&quot;--&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-spinbutton&gt;

===Large size===
&lt;b-form-spinbutton size=&quot;lg&quot; min=&quot;1&quot; max=&quot;100&quot; placeholder=&quot;--&quot; class=&quot;mb-2&quot;&gt;&lt;/b-form-spinbutton&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="fbtInline" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Inline spin button</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="mb-4">
                                <b-form-spinbutton :value="10" min="1" max="100" inline></b-form-spinbutton>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form-spinbutton :value=&quot;10&quot; min=&quot;1&quot; max=&quot;100&quot; inline&gt;&lt;/b-form-spinbutton&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="fbtVerticalBtns" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Vertical spin button</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="mb-4">
                                <b-form-spinbutton :value="10" min="1" max="100" vertical></b-form-spinbutton>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form-spinbutton :value=&quot;10&quot; min=&quot;1&quot; max=&quot;100&quot; vertical&gt;&lt;/b-form-spinbutton&gt;
</pre>
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
                                    <h4>Text with spin button</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="mb-4">
                                <b-form-spinbutton v-model="value" :formatter-fn="dayFormatter" min="0" max="6" wrap></b-form-spinbutton>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form-spinbutton v-model=&quot;value&quot; :formatter-fn=&quot;dayFormatter&quot; min=&quot;0&quot; max=&quot;6&quot; wrap&gt;&lt;/b-form-spinbutton&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fbtChangeBtnClass" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Change button class</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body spin-color">
                            <div class="mb-4">
                                <b-form-spinbutton wrap min="1" max="25" placeholder="--"></b-form-spinbutton>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form-spinbutton wrap min=&quot;1&quot; max=&quot;25&quot; placeholder=&quot;--&quot;&gt;&lt;/b-form-spinbutton&gt;
</pre>
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
<style>
    .touchspin .b-form-spinbutton { padding: 0 !important; }
    .touchspin .form-control.focus { border-color: #4361ee; box-shadow: 0 0 5px 2px rgb(194 213 255 / 62%); }
    .touchspin .b-form-spinbutton output { border: 0 !important; }
    .touchspin .b-form-spinbutton .btn { padding: 0.4rem 0.6rem; color: #fff; background-color: #4361ee; border-color: #4361ee; box-shadow: 0 10px 20px -10px #4361ee; }
    .touchspin .form-control.form-control-sm { padding: 0; height: calc(2.4em + 2px); }
    .touchspin .form-control.form-control-lg { padding: 0; height: calc(3em + 2px) }
    .touchspin .spin-color .form-control > button:first-child { background-color: #e2a03f; }
    .touchspin .spin-color .form-control > button:last-child { background-color: #e7515a; }
</style>
<script>
    import '@/assets/sass/scrollspyNav.scss';
    import highlight from '@/components/plugins/highlight.vue';

    export default {
        metaInfo: { title: 'Bootstrap Touchspin' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                value: 0,
                days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            }
        },
        mounted() {
        },
        methods: {
            toggleCode(name) {
                if (this.code_arr.includes(name)) {
                    this.code_arr = this.code_arr.filter(d => d != name);
                }
                else {
                    this.code_arr.push(name);
                }
            },
            dayFormatter(value) {
                return this.days[value]
            }
        }
    };
</script>
