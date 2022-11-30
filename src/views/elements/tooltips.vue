<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Tooltips</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#tooltipDefault" class="nav-link scrollactive-item">Default</a>
                    <a href="#tooltipDirections" class="nav-link scrollactive-item">Directions</a>
                    <a href="#tooltipDismissible" class="nav-link scrollactive-item">HTML</a>
                    <a href="#tooltipOptions" class="nav-link scrollactive-item">Options</a>
                    <a href="#tooltipColors" class="nav-link scrollactive-item">Colors</a>
                </scrollactive>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        Documentation: <a target="_blank" href="https://bootstrap-vue.org/docs/components/tooltip" class="text-info">
                            https://bootstrap-vue.org/docs/components/tooltip
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div id="tooltipDefault" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4> Tooltips </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">

                            <b-button tag="a" variant="primary" v-b-tooltip class="mb-3 mr-2" title="Tooltip using ANCHOR tag">
                                Link
                            </b-button>
                            <b-button variant="success" v-b-tooltip class="mb-3" title="Tooltip using BUTTON tag">
                                Button
                            </b-button>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button tag=&quot;a&quot; variant=&quot;primary&quot; v-b-tooltip class=&quot;mb-3 mr-2&quot; title=&quot;Tooltip using ANCHOR tag&quot;&gt;
    Link
&lt;/b-button&gt;
&lt;b-button variant=&quot;success&quot; v-b-tooltip class=&quot;mb-3&quot; title=&quot;Tooltip using BUTTON tag&quot;&gt;
    Button
&lt;/b-button&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="tooltipDirections" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4> Placement</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body tooltip-section">

                            <div class="row">

                                <div class="col-lg-6">
                                    <b-button variant="info" v-b-tooltip.top class="mb-4" title="Tooltip on top">
                                        Tooltip on top
                                    </b-button>
                                </div>
                                <div class="col-lg-6">
                                    <b-button variant="danger" v-b-tooltip.right class="mb-4" title="Tooltip on right">
                                        Tooltip on right
                                    </b-button>
                                </div>
                                <div class="col-lg-6">
                                    <b-button variant="warning" v-b-tooltip.bottom class="mb-4" title="Tooltip on bottom">
                                        Tooltip on bottom
                                    </b-button>
                                </div>
                                <div class="col-lg-6">
                                    <b-button variant="secondary" v-b-tooltip.left class="mb-4" title="Tooltip on left">
                                        Tooltip on left
                                    </b-button>
                                </div>

                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;!-- TOP --&gt;
&lt;b-button variant=&quot;info&quot; v-b-tooltip.top class=&quot;mb-4&quot; title=&quot;Tooltip on top&quot;&gt;
    Tooltip on top
&lt;/b-button&gt;

&lt;!-- RIGHT --&gt;
&lt;b-button variant=&quot;danger&quot; v-b-tooltip.right class=&quot;mb-4&quot; title=&quot;Tooltip on right&quot;&gt;
    Tooltip on right
&lt;/b-button&gt;

&lt;!-- BOTTOM --&gt;
&lt;b-button variant=&quot;warning&quot; v-b-tooltip.bottom class=&quot;mb-4&quot; title=&quot;Tooltip on bottom&quot;&gt;
    Tooltip on bottom
&lt;/b-button&gt;

&lt;!-- LEFT --&gt;
&lt;b-button variant=&quot;secondary&quot; v-b-tooltip.left class=&quot;mb-4&quot; title=&quot;Tooltip on left&quot;&gt;
    Tooltip on left
&lt;/b-button&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="tooltipDismissible" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4> HTML </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">

                            <b-button id="btn-html" variant="dark">Tooltip with HTML</b-button>
                            <b-tooltip target="btn-html">
                                <em>Tooltip</em> <u>with</u> <b>HTML</b>
                            </b-tooltip>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button id=&quot;btn-html&quot; variant=&quot;dark&quot;&gt;Tooltip with HTML&lt;/b-button&gt;

&lt;b-tooltip target=&quot;btn-html&quot;&gt;
    &lt;em&gt;Tooltip&lt;/em&gt; &lt;u&gt;with&lt;/u&gt; &lt;b&gt;HTML&lt;/b&gt;
&lt;/b-tooltip&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="tooltipOptions" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Options</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body align-center basic-tooltip">
                            <div class="row">
                                <div class="col-lg-6 mb-4">
                                    <b-button v-b-tooltip.click variant="primary" class="mt-1" title="On Click">
                                        On Click
                                    </b-button>
                                </div>

                                <div class="col-lg-6 mb-4">
                                    <b-button v-b-tooltip.focus variant="secondary" class="mt-1" title="On Focus">
                                        On Focus
                                    </b-button>
                                </div>

                                <div class="col-lg-6 mb-4">
                                    <b-button v-b-tooltip="{delay : 1000}" variant="info" class="mt-1" title="Delay 1s">
                                        Delay
                                    </b-button>
                                </div>

                                <div class="col-lg-6 mb-4">
                                    <b-button v-b-tooltip="{animation : false}" variant="dark" class="mt-1" title="Disable Animation">
                                        Disabled Animation
                                    </b-button>
                                </div>
                            </div>


                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;!-- On Click --&gt;
&lt;b-button v-b-tooltip.click variant=&quot;primary&quot; class=&quot;mt-1&quot; title=&quot;On Click&quot;&gt;
    On Click
&lt;/b-button&gt;

&lt;!-- On Focus --&gt;
&lt;b-button v-b-tooltip variant=&quot;secondary&quot; class=&quot;mt-1&quot; title=&quot;On Focus&quot;&gt;
    On Focus
&lt;/b-button&gt;

&lt;!-- Delay --&gt;
&lt;b-button v-b-tooltip=&quot;{delay : 1000}&quot; variant=&quot;info&quot; class=&quot;mt-1&quot; title=&quot;Delay 1s&quot;&gt;
    Delay
&lt;/b-button&gt;

&lt;!-- Disabled Animation --&gt;
&lt;b-button v-b-tooltip=&quot;{animation : false}&quot; variant=&quot;dark&quot; class=&quot;mt-1&quot; title=&quot;Disable Animation&quot;&gt;
    Disabled Animation
&lt;/b-button&gt;


</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="tooltipColors" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4> Colors </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body align-center">

                            <b-button v-b-tooltip="{customClass: 'tooltip-primary'}" variant="primary" class="mx-1 my-1" title="Primary"> Primary </b-button>
                            <b-button v-b-tooltip="{customClass: 'tooltip-success'}" variant="success" class="mx-1 my-1" title="Success"> Success </b-button>
                            <b-button v-b-tooltip="{customClass: 'tooltip-info'}" variant="info" class="mx-1 my-1" title="Info"> Info </b-button>
                            <b-button v-b-tooltip="{customClass: 'tooltip-danger'}" variant="danger" class="mx-1 my-1" title="Danger"> Danger </b-button>
                            <b-button v-b-tooltip="{customClass: 'tooltip-warning'}" variant="warning" class="mx-1 my-1" title="Warning"> Warning </b-button>
                            <b-button v-b-tooltip="{customClass: 'tooltip-secondary'}" variant="secondary" class="mx-1 my-1" title="Secondary"> Secondary </b-button>
                            <b-button v-b-tooltip="{customClass: 'tooltip-dark'}" variant="dark" class="mx-1 my-1" title="Dark"> Dark </b-button>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button v-b-tooltip=&quot;{customClass: 'tooltip-primary'}&quot; variant=&quot;primary&quot; class=&quot;mx-1 my-1&quot; title=&quot;Primary&quot;&gt; Primary &lt;/b-button&gt;
&lt;b-button v-b-tooltip=&quot;{customClass: 'tooltip-success'}&quot; variant=&quot;success&quot; class=&quot;mx-1 my-1&quot; title=&quot;Success&quot;&gt; Success &lt;/b-button&gt;
&lt;b-button v-b-tooltip=&quot;{customClass: 'tooltip-info'}&quot; variant=&quot;info&quot; class=&quot;mx-1 my-1&quot; title=&quot;Info&quot;&gt; Info &lt;/b-button&gt;
&lt;b-button v-b-tooltip=&quot;{customClass: 'tooltip-danger'}&quot; variant=&quot;danger&quot; class=&quot;mx-1 my-1&quot; title=&quot;Danger&quot;&gt; Danger &lt;/b-button&gt;
&lt;b-button v-b-tooltip=&quot;{customClass: 'tooltip-warning'}&quot; variant=&quot;warning&quot; class=&quot;mx-1 my-1&quot; title=&quot;Warning&quot;&gt; Warning &lt;/b-button&gt;
&lt;b-button v-b-tooltip=&quot;{customClass: 'tooltip-secondary'}&quot; variant=&quot;secondary&quot; class=&quot;mx-1 my-1&quot; title=&quot;Secondary&quot;&gt; Secondary &lt;/b-button&gt;
&lt;b-button v-b-tooltip=&quot;{customClass: 'tooltip-dark'}&quot; variant=&quot;dark&quot; class=&quot;mx-1 my-1&quot; title=&quot;Dark&quot;&gt; Dark &lt;/b-button&gt;
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

<script>
    import '@/assets/sass/scrollspyNav.scss';
    import '@/assets/sass/elements/tooltip.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Tooltips' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: []
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
            }
        }
    };
</script>
