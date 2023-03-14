<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Popovers</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#popoverDefault" class="nav-link scrollactive-item">Default</a>
                    <a href="#popoverDirections" class="nav-link scrollactive-item">Directions</a>
                    <a href="#popoverDismissible" class="nav-link scrollactive-item">Dismissible</a>
                    <a href="#popoverOptions" class="nav-link scrollactive-item">Options</a>
                    <a href="#popoverColors" class="nav-link scrollactive-item">Colors</a>
                </scrollactive>
            </div>

            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        Documentation: <a target="_blank" href="https://bootstrap-vue.org/docs/directives/popover" class="text-info">
                            https://bootstrap-vue.org/docs/directives/popover
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">

                <div id="popoverDefault" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4> Popover </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">

                            <b-button tag="a" v-b-popover.left="'Tooltip using ANCHOR tag'" variant="primary" class="mb-3 mr-2">Link</b-button>

                            <b-button v-b-popover.right="'Tooltip using BUTTON tag'" variant="success" class="mb-3">Button</b-button>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button tag=&quot;a&quot; v-b-popover.left=&quot;'Tooltip using ANCHOR tag'&quot; variant=&quot;primary&quot; class=&quot;mb-3 mr-2&quot;&gt;Link&lt;/b-button&gt;

&lt;b-button v-b-popover.right=&quot;'Tooltip using BUTTON tag'&quot; variant=&quot;success&quot; class=&quot;mb-3&quot;&gt;Button&lt;/b-button&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="popoverDirections" class="col-lg-12 layout-spacing">
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
                                    <b-button v-b-popover.top="'Tooltip on top'" variant="info" class="mb-4 ml-2">Popover on top</b-button>
                                </div>
                                <div class="col-lg-6">
                                    <b-button v-b-popover.right="'Tooltip on right'" variant="danger" class="mb-4 ml-2">Popover on right</b-button>
                                </div>
                                <div class="col-lg-6">
                                    <b-button v-b-popover.bottom="'Tooltip on bottom'" variant="warning" class="mb-4 ml-2">Popover on bottom</b-button>
                                </div>
                                <div class="col-lg-6">
                                    <b-button v-b-popover.left="'Tooltip on left'" variant="secondary" class="mb-4 ml-2">Popover on left</b-button>
                                </div>

                            </div>


                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;!-- TOP --&gt;
&lt;b-button v-b-popover.top=&quot;'Tooltip on top'&quot; variant=&quot;info&quot; class=&quot;mb-4 ml-2&quot;&gt;Popover on top&lt;/b-button&gt;

&lt;!-- RIGHT --&gt;
&lt;b-button v-b-popover.right=&quot;'Tooltip on right'&quot; variant=&quot;danger&quot; class=&quot;mb-4 ml-2&quot;&gt;Popover on right&lt;/b-button&gt;

&lt;!-- BOTTOM --&gt;
&lt;b-button v-b-popover.bottom=&quot;'Tooltip on bottom'&quot; variant=&quot;warning&quot; class=&quot;mb-4 ml-2&quot;&gt;Popover on bottom&lt;/b-button&gt;

&lt;!-- LEFT --&gt;
&lt;b-button v-b-popover.left=&quot;'Tooltip on left'&quot; variant=&quot;secondary&quot; class=&quot;mb-4 ml-2&quot;&gt;Popover on left&lt;/b-button&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="popoverDismissible" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dismissible popover</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button v-b-popover.focus.left="'Lorem ipsum dolor sit.'" variant="dark" class="mb-3">Popover on left</b-button>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button v-b-popover.focus.left=&quot;'Lorem ipsum dolor sit.'&quot; variant=&quot;dark&quot; class=&quot;mb-3&quot;&gt;Popover on left&lt;/b-button&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="popoverOptions" class="col-lg-12 layout-spacing">
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
                                    <b-button v-b-popover.hover.right="'On Hover'" variant="primary">On Hover</b-button>
                                </div>

                                <div class="col-lg-6 mb-4">
                                    <b-button v-b-popover.focus.right="'On Focus'" variant="secondary">On Focus</b-button>
                                </div>

                                <div class="col-lg-6 mb-4">
                                    <b-button v-b-popover.focus.right="{content : 'Delay 1s', delay : 1000}" variant="info">Delay</b-button>
                                </div>

                                <div class="col-lg-6 mb-4">
                                    <b-button v-b-popover.focus.right="{content : 'Disabled Animation', animation : false}" variant="dark">Disabled Animation</b-button>
                                </div>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;!-- On Hover --&gt;
&lt;b-button v-b-popover.hover.right=&quot;'On Hover'&quot; variant=&quot;primary&quot;&gt;On Hover&lt;/b-button&gt;

&lt;!-- On Focus --&gt;
&lt;b-button v-b-popover.focus.right=&quot;'On Focus'&quot; variant=&quot;secondary&quot;&gt;On Focus&lt;/b-button&gt;

&lt;!-- Delay --&gt;
&lt;b-button v-b-popover.focus.right=&quot;{content : 'Delay 1s', delay : 1000}&quot; variant=&quot;info&quot;&gt;Delay&lt;/b-button&gt;

&lt;!-- Disabled Animation --&gt;
&lt;b-button v-b-popover.focus.right=&quot;{content : 'Disabled Animation', animation : false}&quot; variant=&quot;dark&quot;&gt;Disabled Animation&lt;/b-button&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div id="popoverColors" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4> Colors </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body align-center">
                            <b-button v-b-popover.top="{title: 'Primary', content: 'Primary popover', html: true, customClass: 'popover-primary', variant: 'primary'}" variant="primary" class="mb-2 mx-1">Primary</b-button>
                            <b-button v-b-popover.top="{title: 'Success', content: 'Success popover', html: true, customClass: 'popover-success', variant: 'success'}" variant="success" class="mb-2 mx-1">Success</b-button>
                            <b-button v-b-popover.top="{title: 'Info', content: 'Info popover', html: true, customClass: 'popover-info', variant: 'info'}" variant="info" class="mb-2 mx-1">Info</b-button>
                            <b-button v-b-popover.top="{title: 'Danger', content: 'Danger popover', html: true, customClass: 'popover-danger', variant: 'danger'}" variant="danger" class="mb-2 mx-1">Danger</b-button>
                            <b-button v-b-popover.top="{title: 'Warning', content: 'Warning popover', html: true, customClass: 'popover-warning', variant: 'warning'}" variant="warning" class="mb-2 mx-1">Warning</b-button>
                            <b-button v-b-popover.top="{title: 'Secondary', content: 'Secondary popover', html: true, customClass: 'popover-secondary', variant: 'secondary'}" variant="secondary" class="mb-2 mx-1">Secondary</b-button>
                            <b-button v-b-popover.top="{title: 'Dark', content: 'Dark popover', html: true, customClass: 'popover-dark', variant: 'dark'}" variant="dark" class="mb-2 mx-1">Dark</b-button>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button v-b-popover.top=&quot;{title: 'Primary', content: 'Primary popover', html: true, customClass: 'popover-primary', variant: 'primary'}&quot; variant=&quot;primary&quot; class=&quot;mb-2 mx-1&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button v-b-popover.top=&quot;{title: 'Success', content: 'Success popover', html: true, customClass: 'popover-success', variant: 'success'}&quot; variant=&quot;success&quot; class=&quot;mb-2 mx-1&quot;&gt;Success&lt;/b-button&gt;
&lt;b-button v-b-popover.top=&quot;{title: 'Info', content: 'Info popover', html: true, customClass: 'info-primary', variant: 'info'}&quot; variant=&quot;info&quot; class=&quot;mb-2 mx-1&quot;&gt;Info&lt;/b-button&gt;
&lt;b-button v-b-popover.top=&quot;{title: 'Danger', content: 'Danger popover', html: true, customClass: 'popover-danger', variant: 'danger'}&quot; variant=&quot;danger&quot; class=&quot;mb-2 mx-1&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-button v-b-popover.top=&quot;{title: 'Warning', content: 'Warning popover', html: true, customClass: 'popover-warning', variant: 'warning'}&quot; variant=&quot;warning&quot; class=&quot;mb-2 mx-1&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-button v-b-popover.top=&quot;{title: 'Secondary', content: 'Secondary popover', html: true, customClass: 'popover-secondary', variant: 'secondary'}&quot; variant=&quot;secondary&quot; class=&quot;mb-2 mx-1&quot;&gt;Secondary&lt;/b-button&gt;
&lt;b-button v-b-popover.top=&quot;{title: 'Dark', content: 'Dark popover', html: true, customClass: 'popover-dark', variant: 'dark'}&quot; variant=&quot;dark&quot; class=&quot;mb-2 mx-1&quot;&gt;Dark&lt;/b-button&gt;
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
    import '@/assets/sass/elements/popover.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Popovers' },
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
