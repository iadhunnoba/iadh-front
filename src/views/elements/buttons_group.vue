<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Button Groups </span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#btnGroupHorizontal" class="nav-link scrollactive-item">Horizontal</a>
                    <a href="#btnGroupInput-group" class="nav-link scrollactive-item">Input Group</a>
                    <a href="#btnGroupVertical" class="nav-link scrollactive-item">Vertical</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/button-group" class="text-info">
                            https://bootstrap-vue.org/docs/components/button-group
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div id="btnGroupHorizontal" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Horizontal</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button-group>
                                <b-button variant="dark">Left</b-button>
                                <b-button variant="dark">Middle</b-button>
                                <b-button variant="dark">Right</b-button>
                            </b-button-group>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button-group&gt;
    &lt;b-button variant=&quot;dark&quot;&gt;Left&lt;/b-button&gt;
    &lt;b-button variant=&quot;dark&quot;&gt;Middle&lt;/b-button&gt;
    &lt;b-button variant=&quot;dark&quot;&gt;Right&lt;/b-button&gt;
&lt;/b-button-group&gt;
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
                <div id="btnGroupInput-group" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Input Group</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="btn-toolbar justify-content-between mr-2" role="toolbar" aria-label="Toolbar with button groups">
                                <b-button-group class="mb-2">
                                    <b-button variant="dark">1</b-button>
                                    <b-button variant="dark">2</b-button>
                                    <b-button variant="dark">3</b-button>
                                    <b-button variant="dark">4</b-button>
                                </b-button-group>

                                <b-input-group class="mb-2">
                                    <b-input-group-prepend><span class="input-group-text">@</span></b-input-group-prepend>
                                    <b-input placeholder="Input group example"></b-input>
                                </b-input-group>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button-group class=&quot;mb-2&quot;&gt;
    &lt;b-button variant=&quot;dark&quot;&gt;1&lt;/b-button&gt;
    &lt;b-button variant=&quot;dark&quot;&gt;2&lt;/b-button&gt;
    &lt;b-button variant=&quot;dark&quot;&gt;3&lt;/b-button&gt;
    &lt;b-button variant=&quot;dark&quot;&gt;4&lt;/b-button&gt;
&lt;/b-button-group&gt;

&lt;b-input-group class=&quot;mb-2&quot;&gt;
    &lt;b-input-group-prepend&gt;&lt;span class=&quot;input-group-text&quot;&gt;@&lt;/span&gt;&lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;Input group example&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div id="btnGroupVertical" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Vertical</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button-group vertical>
                                <b-button variant="dark">Button</b-button>
                                <b-button-group>
                                    <b-dropdown variant="dark" class="custom-dropdown">
                                        <template #button-content>
                                            Dropdown
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
                                                class="feather feather-chevron-down"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </template>
                                        <b-dropdown-item href="#">Dropdown link</b-dropdown-item>
                                        <b-dropdown-item href="#">Dropdown link</b-dropdown-item>
                                    </b-dropdown>
                                </b-button-group>
                                <b-button variant="dark">Button</b-button>
                                <b-button variant="dark">Button</b-button>
                                <b-button-group>
                                    <b-dropdown variant="dark" menu-class="!left-0" class="custom-dropdown">
                                        <template #button-content>
                                            Dropdown
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
                                                class="feather feather-chevron-down"
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </template>
                                        <b-dropdown-item href="#">Dropdown link</b-dropdown-item>
                                        <b-dropdown-item href="#">Dropdown link</b-dropdown-item>
                                    </b-dropdown>
                                </b-button-group>
                            </b-button-group>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button-group vertical&gt;
    &lt;b-button variant=&quot;dark&quot;&gt;Button&lt;/b-button&gt;
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;dark&quot; class=&quot;custom-dropdown&quot;&gt;
            &lt;template #button-content&gt;
                Dropdown
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-chevron-down&quot;&gt;&lt;polyline points=&quot;6 9 12 15 18 9&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt;
            &lt;/template&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Dropdown link&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Dropdown link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;
    &lt;b-button variant=&quot;dark&quot;&gt;Button&lt;/b-button&gt;
    &lt;b-button variant=&quot;dark&quot;&gt;Button&lt;/b-button&gt;
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;dark&quot; menu-class=&quot;!left-0&quot; class=&quot;custom-dropdown&quot;&gt;
            &lt;template #button-content&gt;
                Dropdown
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-chevron-down&quot;&gt;&lt;polyline points=&quot;6 9 12 15 18 9&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt;
            &lt;/template&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Dropdown link&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Dropdown link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;
&lt;/b-button-group&gt;
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
    export default {
        metaInfo: { title: 'Button Group' },
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
