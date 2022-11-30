<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Badges</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#badgeOutline" class="nav-link scrollactive-item">Outline</a>
                    <a href="#badgePills" class="nav-link scrollactive-item">Pills</a>
                    <a href="#badgeClassic" class="nav-link scrollactive-item">Classic</a>
                    <a href="#badgeWith-headings" class="active nav-link scrollactive-item">With Headings</a>
                    <!--<a href="#badgeTags" class="active nav-link scrollactive-item">Tags</a>-->
                    <a href="#badgeCustom" class="active nav-link scrollactive-item">Custom</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/badge" class="text-info">
                            https://bootstrap-vue.org/docs/components/badge
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div id="badgeDefault" class="col-lg-12 mx-auto layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Badges</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-badge variant="primary" class="mr-1">Primary</b-badge>
                            <b-badge variant="info" class="mr-1">Info</b-badge>
                            <b-badge variant="success" class="mr-1">Success</b-badge>
                            <b-badge variant="secondary" class="mr-1">Secondary</b-badge>
                            <b-badge variant="warning" class="mr-1">Warning</b-badge>
                            <b-badge variant="danger" class="mr-1">Danger</b-badge>
                            <b-badge variant="dark">Dark</b-badge>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-badge variant=&quot;primary&quot; class=&quot;mr-1&quot;&gt;Primary&lt;/b-badge&gt;
&lt;b-badge variant=&quot;info&quot; class=&quot;mr-1&quot;&gt;Info&lt;/b-badge&gt;
&lt;b-badge variant=&quot;success&quot; class=&quot;mr-1&quot;&gt;Success&lt;/b-badge&gt;
&lt;b-badge variant=&quot;secondary&quot; class=&quot;mr-1&quot;&gt;Secondary&lt;/b-badge&gt;
&lt;b-badge variant=&quot;warning&quot; class=&quot;mr-1&quot;&gt;Warning&lt;/b-badge&gt;
&lt;b-badge variant=&quot;danger&quot; class=&quot;mr-1&quot;&gt;Danger&lt;/b-badge&gt;
&lt;b-badge variant=&quot;dark&quot;&gt;Dark&lt;/b-badge&gt; 
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="badgeOutline" class="col-lg-12 mx-auto layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Outline</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-badge variant="outline-primary" class="outline-badge-primary mr-1">Primary</b-badge>
                            <b-badge variant="outline-info" class="outline-badge-info mr-1">Info</b-badge>
                            <b-badge variant="outline-success" class="outline-badge-success mr-1">Success</b-badge>
                            <b-badge variant="outline-secondary" class="outline-badge-secondary mr-1">Secondary</b-badge>
                            <b-badge variant="outline-warning" class="outline-badge-warning mr-1">Warning</b-badge>
                            <b-badge variant="outline-danger" class="outline-badge-danger mr-1">Danger</b-badge>
                            <b-badge variant="outline-dark" class="outline-badge-dark">Dark</b-badge>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-badge variant=&quot;outline-primary&quot; class=&quot;outline-badge-primary mr-1&quot;&gt;Primary&lt;/b-badge&gt;
&lt;b-badge variant=&quot;outline-info&quot; class=&quot;outline-badge-info mr-1&quot;&gt;Info&lt;/b-badge&gt;
&lt;b-badge variant=&quot;outline-success&quot; class=&quot;outline-badge-success mr-1&quot;&gt;Success&lt;/b-badge&gt;
&lt;b-badge variant=&quot;outline-secondary&quot; class=&quot;outline-badge-secondary mr-1&quot;&gt;Secondary&lt;/b-badge&gt;
&lt;b-badge variant=&quot;outline-warning&quot; class=&quot;outline-badge-warning mr-1&quot;&gt;Warning&lt;/b-badge&gt;
&lt;b-badge variant=&quot;outline-danger&quot; class=&quot;outline-badge-danger mr-1&quot;&gt;Danger&lt;/b-badge&gt;
&lt;b-badge variant=&quot;outline-dark&quot; class=&quot;outline-badge-dark&quot;&gt;Dark&lt;/b-badge&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="badgePills" class="col-lg-12 mx-auto layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Pills</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="row mb-4">
                                <div class="col-6">
                                    <b-badge variant="primary" pill>Primary</b-badge>
                                </div>
                                <div class="col-6">
                                    <b-badge variant="outline-primary" pill class="outline-badge-primary">Primary</b-badge>
                                </div>
                            </div>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-badge variant=&quot;primary&quot; pill&gt;Primary&lt;/b-badge&gt;
&lt;b-badge variant=&quot;outline-primary&quot; pill class=&quot;outline-badge-primary&quot;&gt;Primary&lt;/b-badge&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="badgeClassic" class="col-lg-12 mx-auto layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Classic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="row mb-4">
                                <div class="col-6">
                                    <b-badge variant="primary" class="badge-classic">Primary</b-badge>
                                </div>
                                <div class="col-6">
                                    <b-badge variant="outline-primary" class="outline-badge-primary badge-classic">Primary</b-badge>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-badge variant=&quot;primary&quot; class=&quot;badge-classic&quot;&gt;Primary&lt;/b-badge&gt;
&lt;b-badge variant=&quot;outline-primary&quot; class=&quot;outline-badge-primary badge-classic&quot;&gt;Primary&lt;/b-badge&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="badgeWith-headings" class="col-lg-12 mx-auto layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Badges with Heading</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <p class="mb-4">Badges scale to match the size of the immediate parent element by using relative font sizing and em units.</p>
                                </div>
                            </div>
                            <h1>Example heading <b-badge variant="primary">Primary</b-badge></h1>
                            <h2>Example heading <b-badge variant="success">success</b-badge></h2>
                            <h3>Example heading <b-badge variant="info">info</b-badge></h3>
                            <h4>Example heading <b-badge variant="warning">warning</b-badge></h4>
                            <h5>Example heading <b-badge variant="danger">danger</b-badge></h5>
                            <h6>Example heading <b-badge variant="dark">dark</b-badge></h6>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;h1&gt;Example heading &lt;b-badge variant=&quot;primary&quot;&gt;Primary&lt;/b-badge&gt;&lt;/h1&gt;
&lt;h2&gt;Example heading &lt;b-badge variant=&quot;success&quot;&gt;success&lt;/b-badge&gt;&lt;/h2&gt;
&lt;h3&gt;Example heading &lt;b-badge variant=&quot;info&quot;&gt;info&lt;/b-badge&gt;&lt;/h3&gt;
&lt;h4&gt;Example heading &lt;b-badge variant=&quot;warning&quot;&gt;warning&lt;/b-badge&gt;&lt;/h4&gt;
&lt;h5&gt;Example heading &lt;b-badge variant=&quot;danger&quot;&gt;danger&lt;/b-badge&gt;&lt;/h5&gt;
&lt;h6&gt;Example heading &lt;b-badge variant=&quot;dark&quot;&gt;dark&lt;/b-badge&gt;&lt;/h6&gt;
 </pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--<div id="badgeTags" class="col-lg-12 mx-auto layout-spacing">
                                    <div class="statbox panel box box-shadow">
                                        <div class="panel-heading">
                                            <div class="row">
                                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                                    <h4>Tags</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="panel-body text-center tags-content">
                                            <div>
                                                <input type="text" id="skill-input">
                                            </div>

                                            <div class="code-section-container show-code">
                                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>
                                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                                    <highlight>
                                                        <pre>
                &lt;input type="text" id="skill-input"&gt; </pre>
                                                    </highlight>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>-->

                <div id="badgeCustom" class="col-lg-12 mx-auto layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom Badges</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="position-relative mt-3 mb-3 ml-2">
                                <span
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
                                        class="feather feather-facebook"
                                    >
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                    </svg>
                                    Facebook</span
                                >
                                <b-badge variant="danger" class="counter">9</b-badge>
                            </b-button>

                            <b-button variant="info" class="position-relative mt-3 mb-3 ml-2">
                                <span>Twitter</span>
                                <b-badge variant="danger" class="counter">4</b-badge>
                            </b-button>

                            <b-button variant="secondary" class="position-relative mt-3 mb-3 ml-2">
                                <span
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
                                        class="feather feather-settings"
                                    >
                                        <circle cx="12" cy="12" r="3"></circle>
                                        <path
                                            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                                        ></path>
                                    </svg>
                                </span>
                                <b-badge variant="danger" class="counter">8</b-badge>
                            </b-button>

                            <b-button variant="dark" class="mt-3 mb-3 ml-2"> Notifications<b-badge variant="light" class="ml-2">4</b-badge> </b-button>

                            <b-badge variant="warning" class="badge-chip mt-3 mb-3 ml-2 position-relative">
                                <img src="@/assets/images/delete-user-4.jpeg" alt="Person" width="96" height="96" />
                                <span class="text">John Doe</span>
                            </b-badge>

                            <b-badge variant="danger" class="badge-chip mt-3 mb-3 ml-2">
                                <img src="@/assets/images/delete-user-17.jpeg" alt="Person" width="96" height="96" />
                                <span class="text">John Doe</span>
                                <span class="closebtn pl-2">&times;</span>
                            </b-badge>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;position-relative mt-3 mb-3 ml-2&quot;&gt;
    &lt;span&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-facebook&quot;&gt;&lt;path d=&quot;M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Facebook&lt;/span&gt;
    &lt;b-badge variant=&quot;danger&quot; class=&quot;counter&quot;&gt;9&lt;/b-badge&gt;
&lt;/b-button&gt;

&lt;b-button variant=&quot;info&quot; class=&quot;position-relative mt-3 mb-3 ml-2&quot;&gt;
    &lt;span&gt;Twitter&lt;/span&gt;
    &lt;b-badge variant=&quot;danger&quot; class=&quot;counter&quot;&gt;4&lt;/b-badge&gt;
&lt;/b-button&gt;

&lt;b-button variant=&quot;secondary&quot; class=&quot;position-relative mt-3 mb-3 ml-2&quot;&gt;
    &lt;span&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-settings&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;3&quot;&gt;&lt;/circle&gt;&lt;path d=&quot;M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; &lt;/span&gt;
    &lt;b-badge variant=&quot;danger&quot; class=&quot;counter&quot;&gt;8&lt;/b-badge&gt;
&lt;/b-button&gt;

&lt;b-button variant=&quot;dark&quot; class=&quot;mt-3 mb-3 ml-2&quot;&gt;
    Notifications&lt;b-badge variant=&quot;light&quot; class=&quot;ml-2&quot;&gt;4&lt;/b-badge&gt;
&lt;/b-button&gt;

&lt;b-badge variant=&quot;warning&quot; class=&quot;badge-chip mt-3 mb-3 ml-2 position-relative&quot;&gt;
    &lt;img src=&quot;@/assets/images/delete-user-4.jpeg&quot; alt=&quot;Person&quot; width=&quot;96&quot; height=&quot;96&quot;&gt;
    &lt;span class=&quot;text&quot;&gt;John Doe&lt;/span&gt;
&lt;/b-badge&gt;

&lt;b-badge variant=&quot;danger&quot; class=&quot;badge-chip mt-3 mb-3 ml-2&quot;&gt;
    &lt;img src=&quot;@/assets/images/delete-user-17.jpeg&quot; alt=&quot;Person&quot; width=&quot;96&quot; height=&quot;96&quot;&gt;
    &lt;span class=&quot;text&quot;&gt;John Doe&lt;/span&gt;
    &lt;span class=&quot;closebtn pl-2&quot;&gt;&amp;times;&lt;/span&gt;
&lt;/b-badge&gt;
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
        metaInfo: { title: 'Badges' },
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
