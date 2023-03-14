<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Progress Bar</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#progressBarBasic" class="nav-link scrollactive-item">Basic</a>
                    <a href="#progressBarGradient" class="nav-link scrollactive-item">Gradient</a>
                    <a href="#progressBarStriped" class="nav-link scrollactive-item">Striped</a>
                    <a href="#progressBarAnimated" class="nav-link scrollactive-item">Animated</a>
                    <a href="#progressBarLabeled" class="nav-link scrollactive-item">Labeled</a>
                    <a href="#progressBarStacked" class="nav-link scrollactive-item">Stacked</a>
                    <a href="#progressBarSizes" class="nav-link scrollactive-item">Sizes</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/progress" class="text-info">
                            https://bootstrap-vue.org/docs/components/progress
                        </a>
                    </div>
                </div>
            </div>
            <div class="row layout-top-spacing">
                <div id="progressBarBasic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-progress variant="primary" :value="20" :min="0" :max="100" class="br-30"></b-progress>
                            <b-progress variant="info" :value="30" :min="0" :max="100" class="br-30"></b-progress>
                            <b-progress variant="success" :value="50" :min="0" :max="100" class="br-30"></b-progress>
                            <b-progress variant="warning" :value="60" :min="0" :max="100" class="br-30"></b-progress>
                            <b-progress variant="danger" :value="70" :min="0" :max="100" class="br-30"></b-progress>
                            <b-progress variant="secondary" :value="80" :min="0" :max="100" class="br-30"></b-progress>
                            <b-progress variant="dark" :value="90" :min="0" :max="100" class="br-30"></b-progress>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;!-- Primary --&gt;
&lt;b-progress variant=&quot;primary&quot; :value=&quot;20&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;

&lt;!-- Info --&gt;
&lt;b-progress variant=&quot;info&quot; :value=&quot;30&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;

&lt;!-- Success --&gt;
&lt;b-progress variant=&quot;success&quot; :value=&quot;50&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;

&lt;!-- Warning --&gt;
&lt;b-progress variant=&quot;warning&quot; :value=&quot;60&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;

&lt;!-- Danger --&gt;
&lt;b-progress variant=&quot;danger&quot; :value=&quot;70&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;

&lt;!-- Secondary --&gt;
&lt;b-progress variant=&quot;secondary&quot; :value=&quot;80&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;

&lt;!-- Dark --&gt;
&lt;b-progress variant=&quot;dark&quot; :value=&quot;90&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;

</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="progressBarGradient" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Gradient</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-progress variant="gradient-primary" :value="20" :min="0" :max="100" class="br-30"></b-progress>
                            <b-progress variant="gradient-info" :value="30" :min="0" :max="100" class="br-30"></b-progress>
                            <b-progress variant="gradient-success" :value="50" :min="0" :max="100" class="br-30"></b-progress>
                            <b-progress variant="gradient-warning" :value="60" :min="0" :max="100" class="br-30"></b-progress>
                            <b-progress variant="gradient-danger" :value="70" :min="0" :max="100" class="br-30"></b-progress>
                            <b-progress variant="gradient-secondary" :value="80" :min="0" :max="100" class="br-30"></b-progress>
                            <b-progress variant="gradient-dark" :value="90" :min="0" :max="100" class="br-30"></b-progress>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;!-- Primary --&gt;
&lt;b-progress variant=&quot;gradient-primary&quot; :value=&quot;20&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;

&lt;!-- Info --&gt;
&lt;b-progress variant=&quot;gradient-info&quot; :value=&quot;30&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;

&lt;!-- Success --&gt;
&lt;b-progress variant=&quot;gradient-success&quot; :value=&quot;50&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;

&lt;!-- Warning --&gt;
&lt;b-progress variant=&quot;gradient-warning&quot; :value=&quot;60&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;

&lt;!-- Danger --&gt;
&lt;b-progress variant=&quot;gradient-danger&quot; :value=&quot;70&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;

&lt;!-- Secondary --&gt;
&lt;b-progress variant=&quot;gradient-secondary&quot; :value=&quot;80&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;

&lt;!-- Dark --&gt;
&lt;b-progress variant=&quot;gradient-dark&quot; :value=&quot;90&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="progressBarStriped" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Striped</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-progress variant="primary" striped :value="20" :min="0" :max="100" class="br-30"></b-progress>
                        </div>
                    </div>
                </div>

                <div id="progressBarAnimated" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Animated</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-progress variant="primary" striped animated :value="50" :min="0" :max="100" class="br-30"></b-progress>
                        </div>
                    </div>
                </div>

                <div id="progressBarLabeled" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Labels</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-progress variant="info" :min="0" :max="100" class="br-30">
                                <b-progress-bar :value="80" :label="'80%'"></b-progress-bar>
                            </b-progress>
                            <b-progress variant="danger" :min="0" :max="100" show-progress class="br-30">
                                <b-progress-bar :value="90" :label-html="`<div class='progress-title'><span>PHP</span><span>90%</span></div>`"></b-progress-bar>
                            </b-progress>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-progress variant=&quot;info&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;
    &lt;b-progress-bar :value=&quot;80&quot; :label=&quot;'80%'&quot;&gt;&lt;/b-progress-bar&gt;
&lt;/b-progress&gt;
&lt;b-progress variant=&quot;danger&quot; :min=&quot;0&quot; :max=&quot;100&quot; show-progress class=&quot;br-30&quot;&gt;
    &lt;b-progress-bar :value=&quot;90&quot; :label-html=&quot;`&lt;div class='progress-title'&gt;&lt;span&gt;PHP&lt;/span&gt;&lt;span&gt;90%&lt;/span&gt;&lt;/div&gt;`&quot;&gt;&lt;/b-progress-bar&gt;
&lt;/b-progress&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="progressBarStacked" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Stacked</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <h6>Basic</h6>
                            <b-progress class="progress-bar-stack br-30" :min="0" :max="100">
                                <b-progress-bar variant="success" :value="15"></b-progress-bar>
                                <b-progress-bar variant="warning" :value="30"></b-progress-bar>
                                <b-progress-bar variant="danger" :value="20"></b-progress-bar>
                            </b-progress>

                            <h6>Striped</h6>
                            <b-progress class="progress-bar-stack br-30" striped :min="0" :max="100">
                                <b-progress-bar variant="primary" :value="15"></b-progress-bar>
                                <b-progress-bar variant="success" :value="30"></b-progress-bar>
                                <b-progress-bar variant="info" :value="20"></b-progress-bar>
                            </b-progress>

                            <h6>Animated</h6>
                            <b-progress class="progress-bar-stack br-30" striped animated :min="0" :max="100">
                                <b-progress-bar variant="info" :value="15"></b-progress-bar>
                                <b-progress-bar variant="secondary" :value="30"></b-progress-bar>
                                <b-progress-bar variant="primary" :value="20"></b-progress-bar>
                            </b-progress>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-progress class=&quot;progress-bar-stack br-30&quot; :min=&quot;0&quot; :max=&quot;100&quot;&gt;
    &lt;b-progress-bar variant=&quot;success&quot; :value=&quot;15&quot;&gt;&lt;/b-progress-bar&gt;
    &lt;b-progress-bar variant=&quot;warning&quot; :value=&quot;30&quot;&gt;&lt;/b-progress-bar&gt;
    &lt;b-progress-bar variant=&quot;danger&quot; :value=&quot;20&quot;&gt;&lt;/b-progress-bar&gt;
&lt;/b-progress&gt;

&lt;h6&gt;Striped&lt;/h6&gt;
&lt;b-progress class=&quot;progress-bar-stack br-30&quot; striped :min=&quot;0&quot; :max=&quot;100&quot;&gt;
    &lt;b-progress-bar variant=&quot;primary&quot; :value=&quot;15&quot;&gt;&lt;/b-progress-bar&gt;
    &lt;b-progress-bar variant=&quot;success&quot; :value=&quot;30&quot;&gt;&lt;/b-progress-bar&gt;
    &lt;b-progress-bar variant=&quot;info&quot; :value=&quot;20&quot;&gt;&lt;/b-progress-bar&gt;
&lt;/b-progress&gt;

&lt;h6&gt;Animated&lt;/h6&gt;
&lt;b-progress class=&quot;progress-bar-stack br-30&quot; striped animated :min=&quot;0&quot; :max=&quot;100&quot;&gt;
    &lt;b-progress-bar variant=&quot;info&quot; :value=&quot;15&quot;&gt;&lt;/b-progress-bar&gt;
    &lt;b-progress-bar variant=&quot;secondary&quot; :value=&quot;30&quot;&gt;&lt;/b-progress-bar&gt;
    &lt;b-progress-bar variant=&quot;primary&quot; :value=&quot;20&quot;&gt;&lt;/b-progress-bar&gt;
&lt;/b-progress&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="progressBarSizes" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Progress Bars Different Sizes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <span><code>Default Progress Bar Size</code></span>
                            <b-progress variant="primary" :value="20" :min="0" :max="100" class="br-30"></b-progress>

                            <span>Class: <code>.progress-sm</code></span>
                            <b-progress variant="success" :value="40" :min="0" :max="100" class="progress-sm br-30"></b-progress>

                            <span>Class: <code>.progress-md</code></span>
                            <b-progress variant="warning" :value="60" :min="0" :max="100" class="progress-md br-30"></b-progress>

                            <span>Class: <code>.progress-lg</code></span>
                            <b-progress variant="info" :value="80" :min="0" :max="100" class="progress-lg br-30"></b-progress>

                            <span>Class: <code>.progress-xl</code></span>
                            <b-progress variant="danger" :value="90" :min="0" :max="100" class="progress-xl br-30"></b-progress>
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
    export default {
        metaInfo: { title: 'Progress Bar' },
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
