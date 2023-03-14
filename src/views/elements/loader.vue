<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Loader</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#loaderWith-buttons" class="nav-link scrollactive-item">With Buttons</a>
                    <a href="#loaderPositions" class="nav-link scrollactive-item">Positions</a>
                    <a href="#loaderSizes" class="nav-link scrollactive-item">Sizes</a>
                    <a href="#loaderColors" class="nav-link scrollactive-item">Colors</a>
                    <a href="#loaderCustom" class="nav-link scrollactive-item">Custom</a>
                </scrollactive>
            </div>

            <div class="row  layout-top-spacing">

                <div id="loaderWith-buttons" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Loaders with Buttons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-button variant="info" size="lg" class="mb-3 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin mr-2"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>  Loading
                            </b-button>
                            <b-button variant="danger" size="lg" class="mb-3 mr-3">
                                <span class="spinner-border text-white mr-2 align-self-center loader-sm ">Loading...</span> Loading
                            </b-button>
                            <b-button variant="secondary" size="lg" class="mb-3 mr-3">
                                <span class="spinner-grow text-white mr-2 align-self-center loader-sm">Loading...</span> Loading
                            </b-button>
                            <div class="row">
                                <div class="col-lg-12">
                                </div>
                                <div class="col-lg-12">
                                </div>
                                <div class="col-lg-12">
                                </div>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;info&quot; size=&quot;lg&quot; class=&quot;mb-3 mr-3&quot;&gt;
    &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-loader spin mr-2&quot;&gt;&lt;line x1=&quot;12&quot; y1=&quot;2&quot; x2=&quot;12&quot; y2=&quot;6&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;12&quot; y1=&quot;18&quot; x2=&quot;12&quot; y2=&quot;22&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;4.93&quot; y1=&quot;4.93&quot; x2=&quot;7.76&quot; y2=&quot;7.76&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;16.24&quot; y1=&quot;16.24&quot; x2=&quot;19.07&quot; y2=&quot;19.07&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;2&quot; y1=&quot;12&quot; x2=&quot;6&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;18&quot; y1=&quot;12&quot; x2=&quot;22&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;4.93&quot; y1=&quot;19.07&quot; x2=&quot;7.76&quot; y2=&quot;16.24&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;16.24&quot; y1=&quot;7.76&quot; x2=&quot;19.07&quot; y2=&quot;4.93&quot;&gt;&lt;/line&gt;&lt;/svg&gt;  Loading
&lt;/b-button&gt;
&lt;b-button variant=&quot;danger&quot; size=&quot;lg&quot; class=&quot;mb-3 mr-3&quot;&gt;
    &lt;span class=&quot;spinner-border text-white mr-2 align-self-center loader-sm &quot;&gt;Loading...&lt;/span&gt; Loading
&lt;/b-button&gt;
&lt;b-button variant=&quot;secondary&quot; size=&quot;lg&quot; class=&quot;mb-3 mr-3&quot;&gt;
    &lt;span class=&quot;spinner-grow text-white mr-2 align-self-center loader-sm&quot;&gt;Loading...&lt;/span&gt; Loading
&lt;/b-button&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="loaderPositions" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Position</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="row">
                                <div class="col-xl-6">
                                    <p class="">Default Button</p>
                                    <b-button variant="primary" size="lg" class="mb-4 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin mr-2"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>  Loading
                                    </b-button>
                                </div>
                                <div class="col-xl-6">
                                    <p class="">Outline Button</p>
                                    <b-button variant="outline-primary" size="lg" class="mb-4 mr-3">
                                        Loading <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin ml-2"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                                    </b-button>
                                </div>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; size=&quot;lg&quot; class=&quot;mb-4 mr-3&quot;&gt;
    &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-loader spin mr-2&quot;&gt;&lt;line x1=&quot;12&quot; y1=&quot;2&quot; x2=&quot;12&quot; y2=&quot;6&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;12&quot; y1=&quot;18&quot; x2=&quot;12&quot; y2=&quot;22&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;4.93&quot; y1=&quot;4.93&quot; x2=&quot;7.76&quot; y2=&quot;7.76&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;16.24&quot; y1=&quot;16.24&quot; x2=&quot;19.07&quot; y2=&quot;19.07&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;2&quot; y1=&quot;12&quot; x2=&quot;6&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;18&quot; y1=&quot;12&quot; x2=&quot;22&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;4.93&quot; y1=&quot;19.07&quot; x2=&quot;7.76&quot; y2=&quot;16.24&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;16.24&quot; y1=&quot;7.76&quot; x2=&quot;19.07&quot; y2=&quot;4.93&quot;&gt;&lt;/line&gt;&lt;/svg&gt;  Loading
&lt;/b-button&gt;

&lt;b-button variant=&quot;outline-primary&quot; size=&quot;lg&quot; class=&quot;mb-4 mr-3&quot;&gt;
    Loading &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-loader spin ml-2&quot;&gt;&lt;line x1=&quot;12&quot; y1=&quot;2&quot; x2=&quot;12&quot; y2=&quot;6&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;12&quot; y1=&quot;18&quot; x2=&quot;12&quot; y2=&quot;22&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;4.93&quot; y1=&quot;4.93&quot; x2=&quot;7.76&quot; y2=&quot;7.76&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;16.24&quot; y1=&quot;16.24&quot; x2=&quot;19.07&quot; y2=&quot;19.07&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;2&quot; y1=&quot;12&quot; x2=&quot;6&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;18&quot; y1=&quot;12&quot; x2=&quot;22&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;4.93&quot; y1=&quot;19.07&quot; x2=&quot;7.76&quot; y2=&quot;16.24&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;16.24&quot; y1=&quot;7.76&quot; x2=&quot;19.07&quot; y2=&quot;4.93&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
&lt;/b-button&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="row">

                <div id="loaderSizes" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Sizes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="d-flex justify-content-between mx-5 mt-3 mb-5">
                                <div class="spinner-border text-success  align-self-center loader-lg">Loading...</div>
                                <div class="spinner-border text-success  align-self-center">Loading...</div>
                                <div class="spinner-border text-success  align-self-center loader-sm ">Loading...</div>
                            </div>

                            <div class="d-flex justify-content-between mx-5 mt-3 mb-5">
                                <div class="spinner-border spinner-border-reverse align-self-center loader-lg text-secondary">Loading...</div>
                                <div class="spinner-border spinner-border-reverse align-self-center text-secondary">Loading...</div>
                                <div class="spinner-border spinner-border-reverse align-self-center loader-sm text-secondary">Loading...</div>
                            </div>

                            <div class="d-flex justify-content-between mx-5 mt-3">
                                <div class="spinner-grow text-info align-self-center loader-lg">Loading...</div>
                                <div class="spinner-grow text-info align-self-center">Loading...</div>
                                <div class="spinner-grow text-info align-self-center loader-sm">Loading...</div>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class="d-flex justify-content-between mx-5 mt-3 mb-5"&gt;
    &lt;div class="spinner-border text-success align-self-center loader-lg"&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-border text-success align-self-center"&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-border text-success align-self-center loader-sm "&gt;Loading...&lt;/div&gt;
&lt;/div&gt;

&lt;div class="d-flex justify-content-between mx-5 mt-3 mb-5"&gt;
    &lt;div class="spinner-border spinner-border-reverse align-self-center loader-lg text-secondary"&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-border spinner-border-reverse align-self-center text-secondary"&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-border spinner-border-reverse align-self-center loader-sm text-secondary"&gt;Loading...&lt;/div&gt;
&lt;/div&gt;

&lt;div class="d-flex justify-content-between mx-5 mt-3"&gt;
    &lt;div class="spinner-grow text-info align-self-center loader-lg"&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-grow text-info align-self-center"&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-grow text-info align-self-center loader-sm"&gt;Loading...&lt;/div&gt;
&lt;/div&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="loaderColors" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Colors</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="d-flex justify-content-between mx-5 mt-3 mb-5">
                                <div class="spinner-border text-success  align-self-center ">Loading...</div>
                                <div class="spinner-border text-danger  align-self-center">Loading...</div>
                                <div class="spinner-border text-warning  align-self-center  ">Loading...</div>
                                <div class="spinner-border text-primary  align-self-center  ">Loading...</div>
                            </div>

                            <div class="d-flex justify-content-between mx-5 mt-3 mb-5">
                                <div class="spinner-border spinner-border-reverse align-self-center text-dark">Loading...</div>
                                <div class="spinner-border spinner-border-reverse align-self-center text-secondary">Loading...</div>
                                <div class="spinner-border spinner-border-reverse align-self-center text-primary">Loading...</div>
                                <div class="spinner-border spinner-border-reverse align-self-center text-danger">Loading...</div>
                            </div>

                            <div class="d-flex justify-content-between mx-5 mt-3 mb-5">
                                <div class="spinner-grow text-info align-self-center">Loading...</div>
                                <div class="spinner-grow text-danger align-self-center">Loading...</div>
                                <div class="spinner-grow text-secondary align-self-center">Loading...</div>
                                <div class="spinner-grow text-warning align-self-center">Loading...</div>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class="d-flex justify-content-between mx-5 mt-3 mb-5"&gt;
    &lt;div class="spinner-border text-success align-self-center "&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-border text-danger align-self-center"&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-border text-warning align-self-center  "&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-border text-primary align-self-center  "&gt;Loading...&lt;/div&gt;
&lt;/div&gt;

&lt;div class="d-flex justify-content-between mx-5 mt-3 mb-5"&gt;
    &lt;div class="spinner-border spinner-border-reverse align-self-center text-dark"&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-border spinner-border-reverse align-self-center text-secondary"&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-border spinner-border-reverse align-self-center text-primary"&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-border spinner-border-reverse align-self-center text-danger"&gt;Loading...&lt;/div&gt;
&lt;/div&gt;

&lt;div class="d-flex justify-content-between mx-5 mt-3 mb-5"&gt;
    &lt;div class="spinner-grow text-info align-self-center"&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-grow text-danger align-self-center"&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-grow text-secondary align-self-center"&gt;Loading...&lt;/div&gt;
    &lt;div class="spinner-grow text-warning align-self-center"&gt;Loading...&lt;/div&gt;
&lt;/div&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row pt-5 layout-spacing">

                <div id="loaderCustom" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-4">
                                    <div class="loader mx-auto"></div>
                                </div>
                                <div class="col-4">
                                    <div class="loader dual-loader mx-auto"></div>
                                </div>
                                <div class="col-4">
                                    <div class="loader multi-loader mx-auto"></div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class="loader mx-auto">&lt;/div&gt;
&lt;div class="loader dual-loader mx-auto"&gt;&lt;/div&gt;
&lt;div class="loader multi-loader mx-auto"&gt;&lt;/div&gt;
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
        metaInfo: { title: 'Loader' },
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
