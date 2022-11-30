<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Breadcrumbs</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#breadcrumbDefault" class="nav-link scrollactive-item">Default</a>
                    <a href="#breadcrumbBasic" class="nav-link scrollactive-item">Basic</a>
                    <a href="#breadcrumbArrowed" class="nav-link scrollactive-item">Arrowed</a>
                    <a href="#breadcrumbDotted" class="nav-link scrollactive-item">Dotted</a>
                    <a href="#breadcrumbWith-icon" class="nav-link scrollactive-item">With Icon</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/breadcrumb" class="text-info">
                            https://bootstrap-vue.org/docs/components/breadcrumb
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div id="breadcrumbDefault" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Default</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <nav class="breadcrumb-one" aria-label="breadcrumb">
                                <b-breadcrumb>
                                    <b-breadcrumb-item href="#home">
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
                                            class="feather feather-home"
                                        >
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                        </svg>
                                    </b-breadcrumb-item>
                                    <b-breadcrumb-item href="#Components">Components</b-breadcrumb-item>
                                    <b-breadcrumb-item href="#UIKit" active>UI Kit</b-breadcrumb-item>
                                </b-breadcrumb>
                            </nav>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-breadcrumb&gt;
    &lt;b-breadcrumb-item href=&quot;#home&quot;&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-home&quot;&gt;&lt;path d=&quot;M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;9 22 9 12 15 12 15 22&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt;
    &lt;/b-breadcrumb-item&gt;
    &lt;b-breadcrumb-item href=&quot;#Components&quot;&gt;Components&lt;/b-breadcrumb-item&gt;
    &lt;b-breadcrumb-item href=&quot;#UIKit&quot; active&gt;UI Kit&lt;/b-breadcrumb-item&gt;
&lt;/b-breadcrumb&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="breadcrumbBasic" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <nav class="breadcrumb-one" aria-label="breadcrumb">
                                <b-breadcrumb>
                                    <b-breadcrumb-item href="#Components">Components</b-breadcrumb-item>
                                    <b-breadcrumb-item href="#UIKit" active>UI Kit</b-breadcrumb-item>
                                </b-breadcrumb>
                            </nav>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-breadcrumb&gt;
    &lt;b-breadcrumb-item href=&quot;#Components&quot;&gt;Components&lt;/b-breadcrumb-item&gt;
    &lt;b-breadcrumb-item href=&quot;#UIKit&quot; active&gt;UI Kit&lt;/b-breadcrumb-item&gt;
&lt;/b-breadcrumb&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="breadcrumbArrowed" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Arrowed</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <nav class="breadcrumb-two" aria-label="breadcrumb">
                                <b-breadcrumb>
                                    <b-breadcrumb-item href="#Home">Home</b-breadcrumb-item>
                                    <b-breadcrumb-item href="#Components" active><a>Components</a></b-breadcrumb-item>
                                    <b-breadcrumb-item href="#UIKit">UI Kit</b-breadcrumb-item>
                                </b-breadcrumb>
                            </nav>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-breadcrumb&gt;
    &lt;b-breadcrumb-item href=&quot;#Home&quot;&gt;Home&lt;/b-breadcrumb-item&gt;
    &lt;b-breadcrumb-item href=&quot;#Components&quot; active&gt;&lt;a&gt;Components&lt;/a&gt;&lt;/b-breadcrumb-item&gt;
    &lt;b-breadcrumb-item href=&quot;#UIKit&quot;&gt;UI Kit&lt;/b-breadcrumb-item&gt;
&lt;/b-breadcrumb&gt;
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
                <div id="breadcrumbDotted" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dotted Seperators</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="breadcrumb-five">
                                <b-breadcrumb>
                                    <b-breadcrumb-item href="#Home" class="mb-2">Home</b-breadcrumb-item>
                                    <b-breadcrumb-item href="#Components" class="mb-2" active><a>Components</a></b-breadcrumb-item>
                                    <b-breadcrumb-item href="#UIKit" class="mb-2">UI Kit</b-breadcrumb-item>
                                </b-breadcrumb>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-breadcrumb&gt;
    &lt;b-breadcrumb-item href=&quot;#Home&quot; class=&quot;mb-2&quot;&gt;Home&lt;/b-breadcrumb-item&gt;
    &lt;b-breadcrumb-item href=&quot;#Components&quot; class=&quot;mb-2&quot; active&gt;&lt;a&gt;Components&lt;/a&gt;&lt;/b-breadcrumb-item&gt;
    &lt;b-breadcrumb-item href=&quot;#UIKit&quot; class=&quot;mb-2&quot;&gt;UI Kit&lt;/b-breadcrumb-item&gt;
&lt;/b-breadcrumb&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="breadcrumbWith-icon" class="col-xl-12 col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With Icons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="breadcrumb-four">
                                <b-breadcrumb>
                                    <b-breadcrumb-item href="#Home">
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
                                            class="feather feather-home"
                                        >
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                        </svg>
                                    </b-breadcrumb-item>
                                    <b-breadcrumb-item active
                                        ><a href="javscript:void(0);"
                                            ><svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="feather feather-box"
                                            >
                                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                            </svg>
                                            <span>Components</span></a
                                        ></b-breadcrumb-item
                                    >
                                    <b-breadcrumb-item href="#UIKit"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-cpu"
                                        >
                                            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                            <rect x="9" y="9" width="6" height="6"></rect>
                                            <line x1="9" y1="1" x2="9" y2="4"></line>
                                            <line x1="15" y1="1" x2="15" y2="4"></line>
                                            <line x1="9" y1="20" x2="9" y2="23"></line>
                                            <line x1="15" y1="20" x2="15" y2="23"></line>
                                            <line x1="20" y1="9" x2="23" y2="9"></line>
                                            <line x1="20" y1="14" x2="23" y2="14"></line>
                                            <line x1="1" y1="9" x2="4" y2="9"></line>
                                            <line x1="1" y1="14" x2="4" y2="14"></line>
                                        </svg>
                                        <span>UI Kit</span></b-breadcrumb-item
                                    >
                                </b-breadcrumb>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-breadcrumb&gt;
    &lt;b-breadcrumb-item href=&quot;#Home&quot;&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-home&quot;&gt;&lt;path d=&quot;M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;9 22 9 12 15 12 15 22&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt;
    &lt;/b-breadcrumb-item&gt;
    &lt;b-breadcrumb-item active&gt;&lt;a href=&quot;javscript:void(0);&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-box&quot;&gt;&lt;path d=&quot;M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;3.27 6.96 12 12.01 20.73 6.96&quot;&gt;&lt;/polyline&gt;&lt;line x1=&quot;12&quot; y1=&quot;22.08&quot; x2=&quot;12&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;/svg&gt; &lt;span&gt;Components&lt;/span&gt;&lt;/a&gt;&lt;/b-breadcrumb-item&gt;
    &lt;b-breadcrumb-item href=&quot;#UIKit&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-cpu&quot;&gt;&lt;rect x=&quot;4&quot; y=&quot;4&quot; width=&quot;16&quot; height=&quot;16&quot; rx=&quot;2&quot; ry=&quot;2&quot;&gt;&lt;/rect&gt;&lt;rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;6&quot; height=&quot;6&quot;&gt;&lt;/rect&gt;&lt;line x1=&quot;9&quot; y1=&quot;1&quot; x2=&quot;9&quot; y2=&quot;4&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;15&quot; y1=&quot;1&quot; x2=&quot;15&quot; y2=&quot;4&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;9&quot; y1=&quot;20&quot; x2=&quot;9&quot; y2=&quot;23&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;15&quot; y1=&quot;20&quot; x2=&quot;15&quot; y2=&quot;23&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;20&quot; y1=&quot;9&quot; x2=&quot;23&quot; y2=&quot;9&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;20&quot; y1=&quot;14&quot; x2=&quot;23&quot; y2=&quot;14&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;1&quot; y1=&quot;9&quot; x2=&quot;4&quot; y2=&quot;9&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;1&quot; y1=&quot;14&quot; x2=&quot;4&quot; y2=&quot;14&quot;&gt;&lt;/line&gt;&lt;/svg&gt; &lt;span&gt;UI Kit&lt;/span&gt;&lt;/b-breadcrumb-item&gt;
&lt;/b-breadcrumb&gt;
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
    import '@/assets/sass/elements/breadcrumb.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Breadcrumbs' },
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
