<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Quill Editor</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#basic" class="nav-link scrollactive-item">Basic</a>
                    <a href="#tooltip" class="nav-link scrollactive-item">Tooltip</a>
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
                        <a target="_blank" href="https://www.npmjs.com/package/vue-quill-editor" class="text-info">
                            https://www.npmjs.com/package/vue-quill-editor
                        </a>
                    </div>
                </div>
            </div>

            <div id="basic" class="row layout-spacing layout-top-spacing">
                <div class="col-lg-12">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <quill-editor v-model="content1" :options="options1"></quill-editor>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;quill-editor v-model=&quot;content1&quot; :options=&quot;options1&quot;&gt;&lt;/quill-editor&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="tooltip" class="row layout-spacing">
                <div class="col-lg-12">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With Tooltip</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <quill-editor v-model="content2" :options="options2">
                                <div id="toolbar" slot="toolbar">
                                    <button type="button" v-b-tooltip.bottom class="ql-bold" title="Bold"></button>
                                    <button type="button" v-b-tooltip.bottom class="ql-underline" title="Underline"></button>
                                    <button type="button" v-b-tooltip.bottom class="ql-italic" title="Add italic text <cmd+i>"></button>
                                    <button type="button" v-b-tooltip.bottom class="ql-image" title="Upload image"></button>
                                    <button type="button" v-b-tooltip.bottom class="ql-code-block" title="Show code"></button>
                                </div>
                            </quill-editor>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;quill-editor v-model=&quot;content2&quot; :options=&quot;options2&quot;&gt;
    &lt;div id=&quot;toolbar&quot; slot=&quot;toolbar&quot;&gt;
        &lt;button type=&quot;button&quot; v-b-tooltip.bottom class=&quot;ql-bold&quot; title=&quot;Bold&quot;&gt;&lt;/button&gt;
        &lt;button type=&quot;button&quot; v-b-tooltip.bottom class=&quot;ql-underline&quot; title=&quot;Underline&quot;&gt;&lt;/button&gt;
        &lt;button type=&quot;button&quot; v-b-tooltip.bottom class=&quot;ql-italic&quot; title=&quot;Add italic text &lt;cmd+i&gt;&quot;&gt;&lt;/button&gt;
        &lt;button type=&quot;button&quot; v-b-tooltip.bottom class=&quot;ql-image&quot; title=&quot;Upload image&quot;&gt;&lt;/button&gt;
        &lt;button type=&quot;button&quot; v-b-tooltip.bottom class=&quot;ql-code-block&quot; title=&quot;Show code&quot;&gt;&lt;/button&gt;
    &lt;/div&gt;
&lt;/quill-editor&gt;
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
<style>
    .ql-toolbar.ql-snow .ql-picker-label {
        border: 1px solid transparent;
        color: #4361ee;
    }
    .ql-snow .ql-stroke {
        fill: none;
        stroke: #4361ee;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    .ql-snow .ql-fill,
    .ql-snow .ql-stroke.ql-fill {
        fill: #4361ee;
    }
    .ql-toolbar.ql-snow {
        border: 1px solid #bfc9d4;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        padding: 8px;
        border-radius: 6px;
    }
    .ql-container.ql-snow {
        border-top: 0px;
        margin-top: 28px;
        padding: 13px 0;
        border: 1px solid #bfc9d4 !important;
        border-radius: 6px;
    }
</style>
<script>
    import Vue from 'vue';
    import VueQuillEditor from 'vue-quill-editor';
    Vue.use(VueQuillEditor);
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';

    import '@/assets/sass/scrollspyNav.scss';
    import highlight from '@/components/plugins/highlight.vue';

    export default {
        metaInfo: { title: 'Quill Editor' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                content1: `
<h1>This is a heading text...</h1>
                                        <br/>
                                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui arcu, pellentesque id mattis sed, mattis semper erat. Etiam commodo arcu a mollis consequat. Curabitur pretium auctor tortor, bibendum placerat elit feugiat et. Ut ac turpis nec dui ullamcorper ornare. Vestibulum finibus quis magna at accumsan. Praesent a purus vitae tortor fringilla tempus vel non purus. Suspendisse eleifend nibh porta dolor ullamcorper laoreet. Ut sit amet ipsum vitae lectus pharetra tincidunt. In ipsum quam, iaculis at erat ut, fermentum efficitur ipsum. Nunc odio diam, fringilla in auctor et, scelerisque at lorem. Sed convallis tempor dolor eu dictum. Cras ornare ornare imperdiet. Pellentesque sagittis lacus non libero fringilla faucibus. Aenean ullamcorper enim et metus vestibulum, eu aliquam nunc placerat. Praesent fringilla dolor sit amet leo pulvinar semper. </p>
                                        <br/>
                                        <p> Curabitur vel tincidunt dui. Duis vestibulum eget velit sit amet aliquet. Curabitur vitae cursus ex. Aliquam pulvinar vulputate ullamcorper. Maecenas luctus in eros et aliquet. Cras auctor luctus nisl a consectetur. Morbi hendrerit nisi nunc, quis egestas nibh consectetur nec. Aliquam vel lorem enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc placerat, enim quis varius luctus, enim arcu tincidunt purus, in vulputate tortor mi a tortor. Praesent porta ornare fermentum. Praesent sed ligula at ante tempor posuere a at lorem. </p>
                                        <br/>
                                        <p> Aliquam diam felis, vehicula ut ipsum eu, consectetur tincidunt ipsum. Vestibulum sed metus ac nisi tincidunt mollis sed non urna. Vivamus lacinia ullamcorper interdum. Sed sed erat vel leo venenatis pretium. Sed aliquet sem nunc, ut iaculis dolor consectetur et. Vivamus ligula sapien, maximus nec pellentesque ut, imperdiet at libero. Vivamus semper nulla lectus, id dapibus nulla convallis id. Quisque elementum lectus ac dui gravida, ut molestie nunc convallis. Pellentesque et odio non dolor convallis commodo sit amet a ante. </p>
`,
                content2: `
<h1>This is a heading text...</h1>
                                            <br/>
                                            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui arcu, pellentesque id mattis sed, mattis semper erat. Etiam commodo arcu a mollis consequat. Curabitur pretium auctor tortor, bibendum placerat elit feugiat et. Ut ac turpis nec dui ullamcorper ornare. Vestibulum finibus quis magna at accumsan. Praesent a purus vitae tortor fringilla tempus vel non purus. Suspendisse eleifend nibh porta dolor ullamcorper laoreet. Ut sit amet ipsum vitae lectus pharetra tincidunt. In ipsum quam, iaculis at erat ut, fermentum efficitur ipsum. Nunc odio diam, fringilla in auctor et, scelerisque at lorem. Sed convallis tempor dolor eu dictum. Cras ornare ornare imperdiet. Pellentesque sagittis lacus non libero fringilla faucibus. Aenean ullamcorper enim et metus vestibulum, eu aliquam nunc placerat. Praesent fringilla dolor sit amet leo pulvinar semper. </p>
                                            <br/>
                                            <p> Curabitur vel tincidunt dui. Duis vestibulum eget velit sit amet aliquet. Curabitur vitae cursus ex. Aliquam pulvinar vulputate ullamcorper. Maecenas luctus in eros et aliquet. Cras auctor luctus nisl a consectetur. Morbi hendrerit nisi nunc, quis egestas nibh consectetur nec. Aliquam vel lorem enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc placerat, enim quis varius luctus, enim arcu tincidunt purus, in vulputate tortor mi a tortor. Praesent porta ornare fermentum. Praesent sed ligula at ante tempor posuere a at lorem. </p>
                                            <br/>
                                            <p>Aliquam diam felis, vehicula ut ipsum eu, consectetur tincidunt ipsum. Vestibulum sed metus ac nisi tincidunt mollis sed non urna. Vivamus lacinia ullamcorper interdum. Sed sed erat vel leo venenatis pretium. Sed aliquet sem nunc, ut iaculis dolor consectetur et. Vivamus ligula sapien, maximus nec pellentesque ut, imperdiet at libero. Vivamus semper nulla lectus, id dapibus nulla convallis id. Quisque elementum lectus ac dui gravida, ut molestie nunc convallis. Pellentesque et odio non dolor convallis commodo sit amet a ante. </p>
`,
                options1: {
                    modules: {
                        toolbar: [[{ header: [1, 2, false] }], ['bold', 'italic', 'underline'], ['image', 'code-block']]
                    }
                },
                options2: {
                    modules: {
                        toolbar: '#toolbar'
                    }
                }
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
