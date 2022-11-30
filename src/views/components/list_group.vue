<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components </a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>List Group</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#listGroupBasic" class="nav-link scrollactive-item">Basic</a>
                    <a href="#listGroupLinks" class="nav-link scrollactive-item">Links</a>
                    <a href="#listGroupIcons" class="nav-link scrollactive-item">Icons</a>
                    <a href="#listGroupImages" class="nav-link scrollactive-item">Images</a>
                    <a href="#listGroupTask" class="nav-link scrollactive-item">Task</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/list-group" class="text-info">
                            https://bootstrap-vue.org/docs/components/list-group
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-spacing layout-top-spacing">
                <div id="listGroupBasic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-list-group>
                                <b-list-group-item>Cras justo odio</b-list-group-item>
                                <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
                                <b-list-group-item active>Morbi leo risus</b-list-group-item>
                                <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
                                <b-list-group-item>Vestibulum at eros</b-list-group-item>
                            </b-list-group>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-list-group&gt;
    &lt;b-list-group-item&gt;Cras justo odio&lt;/b-list-group-item&gt;
    &lt;b-list-group-item&gt;Dapibus ac facilisis in&lt;/b-list-group-item&gt;
    &lt;b-list-group-item active&gt;Morbi leo risus&lt;/b-list-group-item&gt;
    &lt;b-list-group-item&gt;Porta ac consectetur ac&lt;/b-list-group-item&gt;
    &lt;b-list-group-item&gt;Vestibulum at eros&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="listGroupLinks" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Links</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-list-group>
                                <b-list-group-item href="javascript:;">Cras justo odio</b-list-group-item>
                                <b-list-group-item href="javascript:;" active>Dapibus ac facilisis in</b-list-group-item>
                                <b-list-group-item href="javascript:;">Morbi leo risus</b-list-group-item>
                                <b-list-group-item href="javascript:;">Porta ac consectetur ac</b-list-group-item>
                                <b-list-group-item href="javascript:;" disabled>Vestibulum at eros</b-list-group-item>
                            </b-list-group>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-list-group&gt;
    &lt;b-list-group-item href=&quot;javascript:;&quot;&gt;Cras justo odio&lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;javascript:;&quot; active&gt;Dapibus ac facilisis in&lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;javascript:;&quot;&gt;Morbi leo risus&lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;javascript:;&quot;&gt;Porta ac consectetur ac&lt;/b-list-group-item&gt;
    &lt;b-list-group-item href=&quot;javascript:;&quot; disabled&gt;Vestibulum at eros&lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="listGroupIcons" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Icons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-list-group class="list-group-icons-meta">
                                <b-list-group-item class="list-group-item-action">
                                    <b-media class="mb-0">
                                        <template #aside>
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
                                                class="feather feather-mail"
                                            >
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </template>
                                        <h6 class="tx-inverse">Messages</h6>
                                        <p class="mg-b-0">4 New Messages</p>
                                    </b-media>
                                </b-list-group-item>
                                <b-list-group-item active class="list-group-item-action">
                                    <b-media class="mb-0">
                                        <template #aside>
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
                                                class="feather feather-map-pin"
                                            >
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                        </template>
                                        <h6 class="tx-inverse">Locations</h6>
                                        <p class="mg-b-0">25 New Travel Locations</p>
                                    </b-media>
                                </b-list-group-item>
                                <b-list-group-item class="list-group-item-action">
                                    <b-media class="mb-0">
                                        <template #aside>
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
                                                class="feather feather-droplet"
                                            >
                                                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                                            </svg>
                                        </template>
                                        <h6 class="tx-inverse">Flexible</h6>
                                        <p class="mg-b-0">Customization Flexibility</p>
                                    </b-media>
                                </b-list-group-item>
                            </b-list-group>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-list-group class=&quot;list-group-icons-meta&quot;&gt;
    &lt;b-list-group-item class=&quot;list-group-item-action&quot;&gt;
        &lt;b-media&gt;
            &lt;template #aside&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-mail&quot;&gt;&lt;path d=&quot;M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;22,6 12,13 2,6&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt;
            &lt;/template&gt;
            &lt;h6 class=&quot;tx-inverse&quot;&gt;Messages&lt;/h6&gt;
            &lt;p class=&quot;mg-b-0&quot;&gt;4 New Messages&lt;/p&gt;
        &lt;/b-media&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item active class=&quot;list-group-item-action&quot;&gt;
        &lt;b-media&gt;
            &lt;template #aside&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-map-pin&quot;&gt;&lt;path d=&quot;M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z&quot;&gt;&lt;/path&gt;&lt;circle cx=&quot;12&quot; cy=&quot;10&quot; r=&quot;3&quot;&gt;&lt;/circle&gt;&lt;/svg&gt;
            &lt;/template&gt;
            &lt;h6 class=&quot;tx-inverse&quot;&gt;Locations&lt;/h6&gt;
            &lt;p class=&quot;mg-b-0&quot;&gt;25 New Travel Locations&lt;/p&gt;
        &lt;/b-media&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item class=&quot;list-group-item-action&quot;&gt;
        &lt;b-media&gt;
            &lt;template #aside&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-droplet&quot;&gt;&lt;path d=&quot;M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
            &lt;/template&gt;
            &lt;h6 class=&quot;tx-inverse&quot;&gt;Flexible&lt;/h6&gt;
            &lt;p class=&quot;mg-b-0&quot;&gt;Customization Flexibility&lt;/p&gt;
        &lt;/b-media&gt;
    &lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="listGroupImages" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Images</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-list-group class="list-group-media">
                                <b-list-group-item class="list-group-item-action">
                                    <b-media class="mb-0">
                                        <template #aside>
                                            <img alt="avatar" src="@/assets/images/profile-1.jpeg" class="img-fluid rounded-circle" />
                                        </template>
                                        <h6 class="tx-inverse">Luke Ivory</h6>
                                        <p class="mg-b-0">Project Lead</p>
                                    </b-media>
                                </b-list-group-item>
                                <b-list-group-item active class="list-group-item-action">
                                    <b-media class="mb-0">
                                        <template #aside>
                                            <img alt="avatar" src="@/assets/images/profile-2.jpeg" class="img-fluid rounded-circle" />
                                        </template>
                                        <h6 class="tx-inverse">Sonia Shaw</h6>
                                        <p class="mg-b-0">Web Designer</p>
                                    </b-media>
                                </b-list-group-item>
                                <b-list-group-item class="list-group-item-action">
                                    <b-media class="mb-0">
                                        <template #aside>
                                            <img alt="avatar" src="@/assets/images/profile-3.jpeg" class="img-fluid rounded-circle" />
                                        </template>
                                        <h6 class="tx-inverse">Dale Butler</h6>
                                        <p class="mg-b-0">Developer</p>
                                    </b-media>
                                </b-list-group-item>
                            </b-list-group>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-list-group class=&quot;list-group-media&quot;&gt;
    &lt;b-list-group-item class=&quot;list-group-item-action&quot;&gt;
        &lt;b-media&gt;
            &lt;template #aside&gt;
                &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-1.jpeg&quot; class=&quot;img-fluid rounded-circle&quot;&gt;
            &lt;/template&gt;
            &lt;h6 class=&quot;tx-inverse&quot;&gt;Luke Ivory&lt;/h6&gt;
            &lt;p class=&quot;mg-b-0&quot;&gt;Project Lead&lt;/p&gt;
        &lt;/b-media&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item active class=&quot;list-group-item-action&quot;&gt;
        &lt;b-media&gt;
            &lt;template #aside&gt;
                &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-2.jpeg&quot; class=&quot;img-fluid rounded-circle&quot;&gt;
            &lt;/template&gt;
            &lt;h6 class=&quot;tx-inverse&quot;&gt;Sonia Shaw&lt;/h6&gt;
            &lt;p class=&quot;mg-b-0&quot;&gt;Web Designer&lt;/p&gt;
        &lt;/b-media&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item class=&quot;list-group-item-action&quot;&gt;
        &lt;b-media&gt;
            &lt;template #aside&gt;
                &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-3.jpeg&quot; class=&quot;img-fluid rounded-circle&quot;&gt;
            &lt;/template&gt;
            &lt;h6 class=&quot;tx-inverse&quot;&gt;Dale Butler&lt;/h6&gt;
            &lt;p class=&quot;mg-b-0&quot;&gt;Developer&lt;/p&gt;
        &lt;/b-media&gt;
    &lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="listGroupTask" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Task</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-list-group class="task-list-group">
                                <b-list-group-item class="list-group-item-action">
                                    <b-checkbox v-model="chk_demo" class="checkbox-primary" value="checkbox-1">
                                        <div class="d-inline-flex">
                                            <span class="ml-2">
                                                List groups are a flexible and powerful component for displaying simple.
                                            </span>
                                            <span class="ml-3">
                                                <span class="badge badge-secondary">Project</span>
                                            </span>
                                        </div>
                                    </b-checkbox>
                                </b-list-group-item>
                                <b-list-group-item active class="list-group-item-action">
                                    <b-checkbox v-model="chk_demo" class="checkbox-primary" value="checkbox-2">
                                        <div class="d-inline-flex">
                                            <span class="ml-2">
                                                List groups are a flexible and powerful component for displaying simple.
                                            </span>
                                            <span class="ml-3">
                                                <span class="badge badge-primary">Urgent</span>
                                            </span>
                                        </div>
                                    </b-checkbox>
                                </b-list-group-item>
                                <b-list-group-item class="list-group-item-action">
                                    <b-checkbox v-model="chk_demo" class="checkbox-primary" value="checkbox-3">
                                        <div class="d-inline-flex">
                                            <span class="ml-2">List groups are a flexible and powerful component for displaying simple.</span>
                                            <span class="ml-3">
                                                <span class="badge badge-success">Success</span>
                                            </span>
                                        </div>
                                    </b-checkbox>
                                </b-list-group-item>
                            </b-list-group>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-list-group class=&quot;task-list-group&quot;&gt;
    &lt;b-list-group-item class=&quot;list-group-item-action&quot;&gt;
        &lt;b-checkbox v-model=&quot;chk_demo&quot; class=&quot;checkbox-primary&quot; value=&quot;checkbox-1&quot;&gt;
            &lt;div class=&quot;d-inline-flex&quot;&gt;
                &lt;span class=&quot;ml-2&quot;&gt;
                    List groups are a flexible and powerful component for displaying simple.
                &lt;/span&gt;
                &lt;span class=&quot;ml-3&quot;&gt;
                    &lt;span class=&quot;badge badge-secondary&quot;&gt;Project&lt;/span&gt;
                &lt;/span&gt;
            &lt;/div&gt;
        &lt;/b-checkbox&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item active class=&quot;list-group-item-action&quot;&gt;
        &lt;b-checkbox v-model=&quot;chk_demo&quot; class=&quot;checkbox-primary&quot; value=&quot;checkbox-2&quot;&gt;
            &lt;div class=&quot;d-inline-flex&quot;&gt;
                &lt;span class=&quot;ml-2&quot;&gt;
                    List groups are a flexible and powerful component for displaying simple.
                &lt;/span&gt;
                &lt;span class=&quot;ml-3&quot;&gt;
                    &lt;span class=&quot;badge badge-primary&quot;&gt;Urgent&lt;/span&gt;
                &lt;/span&gt;
            &lt;/div&gt;
        &lt;/b-checkbox&gt;
    &lt;/b-list-group-item&gt;
    &lt;b-list-group-item class=&quot;list-group-item-action&quot;&gt;
        &lt;b-checkbox v-model=&quot;chk_demo&quot; class=&quot;checkbox-primary&quot; value=&quot;checkbox-3&quot;&gt;
            &lt;div class=&quot;d-inline-flex&quot;&gt;
                &lt;span class=&quot;ml-2&quot;&gt;List groups are a flexible and powerful component for displaying simple.&lt;/span&gt;
                &lt;span class=&quot;ml-3&quot;&gt;
                    &lt;span class=&quot;badge badge-success&quot;&gt;Success&lt;/span&gt;
                &lt;/span&gt;
            &lt;/div&gt;
        &lt;/b-checkbox&gt;
    &lt;/b-list-group-item&gt;
&lt;/b-list-group&gt;
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
    import '@/assets/sass/components/custom-list-group.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'List Group' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                chk_demo: []
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
