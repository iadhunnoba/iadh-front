<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Jumbotron</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#jumbotronBasic" class="nav-link scrollactive-item">Basic</a>
                    <a href="#jumbotronFluid" class="nav-link scrollactive-item">Fluid</a>
                </scrollactive>
            </div>

            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        Documentation: <a target="_blank" href="https://bootstrap-vue.org/docs/components/jumbotron" class="text-info">
                            https://bootstrap-vue.org/docs/components/jumbotron
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div id="jumbotronBasic" class="col-xl-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4> Jumbotron</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <b-jumbotron>
                                        <h2 class="display-4 mb-5  mt-4 text-center">Hello, world!</h2>
                                        <p class="lead mt-3 mb-4">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                                        <hr class="my-4">
                                        <p class="mb-5">It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                        <p class="lead">
                                            <b-button variant="dark">Learn more</b-button>
                                        </p>
                                    </b-jumbotron>
                                </div>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-jumbotron&gt;
    &lt;h2 class=&quot;display-4 mb-5  mt-4 text-center&quot;&gt;Hello, world!&lt;/h2&gt;
    &lt;p class=&quot;lead mt-3 mb-4&quot;&gt;This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.&lt;/p&gt;
    &lt;hr class=&quot;my-4&quot;&gt;
    &lt;p class=&quot;mb-5&quot;&gt;It uses utility classes for typography and spacing to space content out within the larger container.&lt;/p&gt;
    &lt;p class=&quot;lead&quot;&gt;
        &lt;b-button variant=&quot;dark&quot;&gt;Learn more&lt;/b-button&gt;
    &lt;/p&gt;
&lt;/b-jumbotron&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="jumbotronFluid" class="col-xl-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4> Jumbotron Fluid</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <b-jumbotron class="jumbotron-fluid">
                                        <div class="container">
                                            <h2 class="display-4 mb-5 mt-4 text-center">Fluid Jumbotron</h2>
                                            <p class="lead mt-3 mb-4">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                                            <br />
                                            <blockquote class="blockquote media-object">
                                                <b-media>
                                                    <template #aside>
                                                        <div class="usr-img mr-2">
                                                            <img class="rounded br-30" src="@/assets/images/profile-16.jpeg" alt="pic1" />
                                                        </div>
                                                    </template>
                                                    <p class="d-inline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                                </b-media>
                                                <small class="text-right">Someone famous <cite title="Source Title">Source Title</cite></small>
                                            </blockquote>
                                        </div>
                                    </b-jumbotron>
                                </div>
                            </div>

                            <div class="code-section-container show-code show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-jumbotron class=&quot;jumbotron-fluid&quot;&gt;
    &lt;div class=&quot;container&quot;&gt;
        &lt;h2 class=&quot;display-4 mb-5 mt-4 text-center&quot;&gt;Fluid Jumbotron&lt;/h2&gt;
        &lt;p class=&quot;lead mt-3 mb-4&quot;&gt;This is a modified jumbotron that occupies the entire horizontal space of its parent.&lt;/p&gt;
        &lt;br /&gt;
        &lt;blockquote class=&quot;blockquote media-object&quot;&gt;
            &lt;b-media&gt;
                &lt;template #aside&gt;
                    &lt;div class=&quot;usr-img mr-2&quot;&gt;
                        &lt;img class=&quot;rounded br-30&quot; src=&quot;@/assets/images/profile-16.jpeg&quot; alt=&quot;pic1&quot; /&gt;
                    &lt;/div&gt;
                &lt;/template&gt;
                &lt;p class=&quot;d-inline&quot;&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&lt;/p&gt;
            &lt;/b-media&gt;
            &lt;small class=&quot;text-right&quot;&gt;Someone famous &lt;cite title=&quot;Source Title&quot;&gt;Source Title&lt;/cite&gt;&lt;/small&gt;
        &lt;/blockquote&gt;
    &lt;/div&gt;
&lt;/b-jumbotron&gt;
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
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Jumbotron' },
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
