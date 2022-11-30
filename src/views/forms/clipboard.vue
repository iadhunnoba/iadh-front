<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Clipboard</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#fclCopyInput" class="nav-link scrollactive-item">Copy form Input</a>
                    <a href="#fclCopyTextarea" class="nav-link scrollactive-item">Copy form Textarea</a>
                    <a href="#fclCoyParagraph" class="nav-link scrollactive-item">Copy Text from Paragraph</a>
                    <a href="#fclAdvance" class="nav-link scrollactive-item">Advanced</a>
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
                        <a target="_blank" href="https://www.npmjs.com/package/vue-clipboard2" class="text-info">
                            https://www.npmjs.com/package/vue-clipboard2
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div id="fclCopyInput" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Copy from input</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body clipboard-copy-input">
                            <div class="clipboard">
                                <b-form class="form-horizontal">
                                    <b-input class="mb-4" value="http://www.admin-dashboard.com" v-model="message1"></b-input>
                                    <b-button variant="primary" class="mb-1 mx-1" v-clipboard:copy="message1" @click="show_message()">
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
                                            class="feather feather-copy"
                                        >
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                        </svg>
                                        Copy from Input
                                    </b-button>
                                    <b-button variant="dark" class="mb-1 mx-1" v-clipboard:copy="message1" @click="show_message()" @blur="message1 = ''">
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
                                            class="feather feather-edit-2"
                                        >
                                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                        </svg>
                                        Cut from Input
                                    </b-button>
                                </b-form>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;clipboard&quot;&gt;
    &lt;b-form class=&quot;form-horizontal&quot;&gt;
        &lt;b-input class=&quot;mb-4&quot; value=&quot;http://www.admin-dashboard.com&quot; v-model=&quot;message1&quot;&gt;&lt;/b-input&gt;
        &lt;b-button variant=&quot;primary&quot; class=&quot;mb-1 mx-1&quot; v-clipboard:copy=&quot;message1&quot; @click=&quot;show_message();&quot;&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-copy&quot;&gt;&lt;rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot; ry=&quot;2&quot;&gt;&lt;/rect&gt;&lt;path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Copy from Input
        &lt;/b-button&gt;
        &lt;b-button variant=&quot;dark&quot; class=&quot;mb-1 mx-1&quot; v-clipboard:copy=&quot;message1&quot; @click=&quot;show_message();&quot; @blur=&quot;message1 = '';&quot;&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-edit-2&quot;&gt;&lt;path d=&quot;M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Cut from Input
        &lt;/b-button&gt;
    &lt;/b-form&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fclCopyTextarea" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Copy from Text Area</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body clipboard-copy-textarea">
                            <div class="clipboard">
                                <b-form class="form-horizontal">
                                    <b-textarea class="mb-4" rows="3" v-model="message2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</b-textarea>
                                    <b-button variant="primary" class="mb-1 mx-1" v-clipboard:copy="message2" @click="show_message()">
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
                                            class="feather feather-copy"
                                        >
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                        </svg>
                                        Copy from Input
                                    </b-button>
                                    <b-button variant="dark" class="mb-1 mx-1" v-clipboard:copy="message2" @click="show_message()" @blur="message2 = ''">
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
                                            class="feather feather-edit-2"
                                        >
                                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                        </svg>
                                        Cut from Input
                                    </b-button>
                                </b-form>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;clipboard&quot;&gt;
    &lt;b-form class=&quot;form-horizontal&quot;&gt;
        &lt;b-textarea class=&quot;mb-4&quot; rows=&quot;3&quot; v-model=&quot;message2&quot;&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit...&lt;/b-textarea&gt;
        &lt;b-button variant=&quot;primary&quot; class=&quot;mb-1 mx-1&quot; v-clipboard:copy=&quot;message2&quot; @click=&quot;show_message();&quot;&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-copy&quot;&gt;&lt;rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot; ry=&quot;2&quot;&gt;&lt;/rect&gt;&lt;path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Copy from Input
        &lt;/b-button&gt;
        &lt;b-button variant=&quot;dark&quot; class=&quot;mb-1 mx-1&quot; v-clipboard:copy=&quot;message2&quot; @click=&quot;show_message();&quot; @blur=&quot;message2 = '';&quot;&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-edit-2&quot;&gt;&lt;path d=&quot;M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Cut from Input
        &lt;/b-button&gt;
    &lt;/b-form&gt;
&lt;/div&gt;
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
                <div id="fclCoyParagraph" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Copy Text from Paragraph</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body clipboard-copy-para">
                            <div class="clipboard copy-txt">
                                <p class="otp-pass">Here is your OTP <span>22991</span>.</p>
                                <p class="mb-4">Please do not share it to anyone</p>
                                <b-button variant="primary" class="mb-1" v-clipboard:copy="22991" @click="show_message()">
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
                                        class="feather feather-copy"
                                    >
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                    </svg>
                                    Copy from Input
                                </b-button>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;clipboard copy-txt&quot;&gt;
    &lt;p class=&quot;otp-pass&quot;&gt;Here is your OTP &lt;span&gt;22991&lt;/span&gt;.&lt;/p&gt;
    &lt;p class=&quot;mb-4&quot;&gt;Please do not share it to anyone&lt;/p&gt;
    &lt;b-button variant=&quot;primary&quot; class=&quot;mb-1&quot; v-clipboard:copy=&quot;22991&quot; @click=&quot;show_message()&quot;&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-copy&quot;&gt;&lt;rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot; ry=&quot;2&quot;&gt;&lt;/rect&gt;&lt;path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Copy from Input
    &lt;/b-button&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="fclAdvance" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Copy Hidden Text (Advanced)</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body paragraph-advance">
                            <div class="clipboard copy-txt">
                                <p class="mb-4">Link -> <span>http://www.admin-dashboard.com/code</span></p>
                                <b-button variant="primary" class="mb-1 mx-1" v-clipboard:copy="'http://www.admin-dashboard.com/code'" @click="show_message()">
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
                                        class="feather feather-copy"
                                    >
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                    </svg>
                                    Copy Link
                                </b-button>
                                <b-button variant="dark" class="mb-1 mx-1" v-clipboard:copy="2291" @click="show_message()">
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
                                        class="feather feather-copy"
                                    >
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                    </svg>
                                    Copy Hidden Code
                                </b-button>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;clipboard copy-txt&quot;&gt;
    &lt;p class=&quot;mb-4&quot;&gt;Link -&gt; &lt;span&gt;http://www.admin-dashboard.com/code&lt;/span&gt;&lt;/p&gt;
    &lt;b-button variant=&quot;primary&quot; class=&quot;mb-1 mx-1&quot; v-clipboard:copy=&quot;'http://www.admin-dashboard.com/code'&quot; @click=&quot;show_message()&quot;&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-copy&quot;&gt;&lt;rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot; ry=&quot;2&quot;&gt;&lt;/rect&gt;&lt;path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Copy Link
    &lt;/b-button&gt;
    &lt;b-button variant=&quot;dark&quot; class=&quot;mb-1&quot; v-clipboard:copy=&quot;2291&quot; @click=&quot;show_message()&quot;&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-copy&quot;&gt;&lt;rect x=&quot;9&quot; y=&quot;9&quot; width=&quot;13&quot; height=&quot;13&quot; rx=&quot;2&quot; ry=&quot;2&quot;&gt;&lt;/rect&gt;&lt;path d=&quot;M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Copy Hidden Code
    &lt;/b-button&gt;
&lt;/div&gt;
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
<style></style>
<script>
    import Vue from 'vue';
    import VueClipboard from 'vue-clipboard2';
    Vue.use(VueClipboard);

    import '@/assets/sass/scrollspyNav.scss';
    import '@/assets/sass/forms/custom-clipboard.scss';
    import highlight from '@/components/plugins/highlight.vue';

    export default {
        metaInfo: { title: 'Clipboard' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                message1: 'http://www.admin-dashboard.com',
                message2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
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
            },
            show_message() {
                this.$bvToast.toast('copied successfully.', { headerClass: 'd-none', bodyClass: 'toast-success', toaster: 'b-toaster-top-center', autoHideDelay: 2000 });
            }
        }
    };
</script>
