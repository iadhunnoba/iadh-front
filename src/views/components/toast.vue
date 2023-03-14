<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components </a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Notifications</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#toastBasic" class="nav-link scrollactive-item">Basic</a>
                    <a href="#toastTopLeft" class="nav-link scrollactive-item">Top Left</a>
                    <a href="#toastTopCenter" class="nav-link scrollactive-item">Top Center</a>
                    <a href="#toastTopRight" class="nav-link scrollactive-item">Top Right</a>
                    <a href="#toastBottomLeft" class="nav-link scrollactive-item">Bottom Left</a>
                    <a href="#toastBottomCenter" class="nav-link scrollactive-item">Bottom Center</a>
                    <a href="#toastBottomRight" class="nav-link scrollactive-item">Bottom Right</a>
                    <a href="#toastNoAction" class="nav-link scrollactive-item">No Action</a>
                    <a href="#toastActionText" class="nav-link scrollactive-item">Action Text</a>
                    <a href="#toastTextColor" class="nav-link scrollactive-item">Text Color</a>

                    <a href="#toastClickCallback" class="nav-link scrollactive-item">Click Callback</a>
                    <a href="#toastDuration" class="nav-link scrollactive-item">Duration</a>
                    <a href="#toastBackgroundColor" class="nav-link scrollactive-item">Background Color</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/toast" class="text-info">
                            https://bootstrap-vue.org/docs/components/toast
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-spacing layout-top-spacing">
                <div id="toastBasic" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-button variant="primary" @click="$bvToast.show('basic-toast')">Open Toast</b-button>

                            <div style="position: absolute; top: 0; right: 0;z-index: 9999; margin-left: 20px; margin-right: 20px;">
                                <b-toast id="basic-toast" title="Bootstrap" static auto-hide-delay="6000" class="toast-primary" body-class="toast-primary">
                                    <template #toast-title>
                                        <div class="d-flex flex-grow-1 align-items-center">
                                            <strong class="mr-auto">Bootstrap</strong>
                                            <small class="meta-time mr-2">just now</small>
                                        </div>
                                    </template>
                                    Hello, world! This is a toast message.
                                </b-toast>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; @click=&quot;$bvToast.show('basic-toast')&quot;&gt;Open Toast&lt;/b-button&gt;

&lt;div style=&quot;position: absolute; top: 0; right: 0;z-index: 9999; margin-left: 20px; margin-right: 20px;&quot;&gt;
    &lt;b-toast id=&quot;basic-toast&quot; title=&quot;Bootstrap&quot; static auto-hide-delay=&quot;6000&quot; class=&quot;toast-primary&quot; body-class=&quot;toast-primary&quot;&gt;
        &lt;template #toast-title&gt;
            &lt;div class=&quot;d-flex flex-grow-1 align-items-center&quot;&gt;
                &lt;strong class=&quot;mr-auto&quot;&gt;Bootstrap&lt;/strong&gt;
                &lt;small class=&quot;meta-time mr-2&quot;&gt;just now&lt;/small&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        Hello, world! This is a toast message.
    &lt;/b-toast&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="toastTopLeft" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Top Left</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="success" @click="$bvToast.show('top-left-toast')">Top Left</b-button>

                            <b-toast id="top-left-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-top-left">
                                Example notification text.
                                <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide('top-left-toast')">DISMISS</a>
                            </b-toast>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;success&quot; @click=&quot;$bvToast.show('top-left-toast')&quot;&gt;Top Left&lt;/b-button&gt;

&lt;b-toast id=&quot;top-left-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-dark d-flex justify-content-between&quot; toaster=&quot;b-toaster-top-left&quot;&gt;
    Example notification text.
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ml-2&quot; @click=&quot;$bvToast.hide('top-left-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="toastTopCenter" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Top Center</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="info" @click="$bvToast.show('top-center-toast')">Top Center</b-button>

                            <b-toast id="top-center-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-top-center">
                                Example notification text.
                                <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide('top-center-toast')">DISMISS</a>
                            </b-toast>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;info&quot; @click=&quot;$bvToast.show('top-center-toast')&quot;&gt;Top Center&lt;/b-button&gt;

&lt;b-toast id=&quot;top-center-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-dark d-flex justify-content-between&quot; toaster=&quot;b-toaster-top-center&quot;&gt;
    Example notification text.
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ml-2&quot; @click=&quot;$bvToast.hide('top-center-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="toastTopRight" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Top Right</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="danger" @click="$bvToast.show('top-right-toast')">Top Right</b-button>

                            <b-toast id="top-right-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-top-right">
                                Example notification text.
                                <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide('top-right-toast')">DISMISS</a>
                            </b-toast>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;danger&quot; @click=&quot;$bvToast.show('top-right-toast')&quot;&gt;Top Right&lt;/b-button&gt;

&lt;b-toast id=&quot;top-right-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-dark d-flex justify-content-between&quot; toaster=&quot;b-toaster-top-right&quot;&gt;
    Example notification text.
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ml-2&quot; @click=&quot;$bvToast.hide('top-right-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="toastBottomLeft" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Bottom Left</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="warning" @click="$bvToast.show('bottom-left-toast')">Bottom Left</b-button>

                            <b-toast id="bottom-left-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left">
                                Example notification text.
                                <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide('bottom-left-toast')">DISMISS</a>
                            </b-toast>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;warning&quot; @click=&quot;$bvToast.show('bottom-left-toast')&quot;&gt;Bottom Left&lt;/b-button&gt;

&lt;b-toast id=&quot;bottom-left-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-dark d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-left&quot;&gt;
    Example notification text.
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ml-2&quot; @click=&quot;$bvToast.hide('bottom-left-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="toastBottomCenter" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Bottom Center</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="secondary" @click="$bvToast.show('bottom-center-toast')">Bottom Center</b-button>

                            <b-toast id="bottom-center-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-center">
                                Example notification text.
                                <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide('bottom-center-toast')">DISMISS</a>
                            </b-toast>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;secondary&quot; @click=&quot;$bvToast.show('bottom-center-toast')&quot;&gt;Bottom Center&lt;/b-button&gt;

&lt;b-toast id=&quot;bottom-center-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-dark d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-center&quot;&gt;
    Example notification text.
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ml-2&quot; @click=&quot;$bvToast.hide('bottom-center-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="toastBottomRight" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Bottom Right</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="dark" @click="$bvToast.show('bottom-right-toast')">Bottom Right</b-button>

                            <b-toast id="bottom-right-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-right">
                                Example notification text.
                                <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide('bottom-right-toast')">DISMISS</a>
                            </b-toast>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;dark&quot; @click=&quot;$bvToast.show('bottom-right-toast')&quot;&gt;Bottom Right&lt;/b-button&gt;

&lt;b-toast id=&quot;bottom-right-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-dark d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-right&quot;&gt;
    Example notification text.
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ml-2&quot; @click=&quot;$bvToast.hide('bottom-right-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="toastNoAction" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>No Action</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="warning" @click="$bvToast.show('no-action-toast')">No Action</b-button>

                            <b-toast id="no-action-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left">
                                Example notification text.
                            </b-toast>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;warning&quot; @click=&quot;$bvToast.show('no-action-toast')&quot;&gt;No Action&lt;/b-button&gt;

&lt;b-toast id=&quot;no-action-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-dark d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-left&quot;&gt;
    Example notification text.
&lt;/b-toast&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="toastActionText" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Action Text</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" @click="$bvToast.show('action-text-toast')">Action Text</b-button>

                            <b-toast id="action-text-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left">
                                Example notification text.
                                <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide('action-text-toast')">THANKS!</a>
                            </b-toast>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code9')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; @click=&quot;$bvToast.show('action-text-toast')&quot;&gt;Action Text&lt;/b-button&gt;

&lt;b-toast id=&quot;action-text-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-dark d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-left&quot;&gt;
    Example notification text.
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ml-2&quot; @click=&quot;$bvToast.hide('action-text-toast')&quot;&gt;THANKS!&lt;/a&gt;
&lt;/b-toast&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="toastTextColor" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Text Color</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="danger" @click="$bvToast.show('text-color-toast')">Text Color</b-button>

                            <b-toast id="text-color-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left">
                                Example notification text.
                                <a href="javascript:;" class="text-warning ml-2" @click="$bvToast.hide('text-color-toast')">DISMISS</a>
                            </b-toast>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code10')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;danger&quot; @click=&quot;$bvToast.show('text-color-toast')&quot;&gt;Text Color&lt;/b-button&gt;

&lt;b-toast id=&quot;text-color-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-dark d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-left&quot;&gt;
    Example notification text.
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-warning ml-2&quot; @click=&quot;$bvToast.hide('text-color-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="toastClickCallback" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Click Callback</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="info" @click="$bvToast.show('click-callback-toast')">Click Callback</b-button>

                            <b-toast id="click-callback-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left">
                                Custom callback when action button is clicked.
                                <a
                                    href="javascript:;"
                                    class="text-success ml-2"
                                    @click="
                                        $bvToast.hide('click-callback-toast');
                                        $bvToast.show('click-callback1-toast');
                                    "
                                    >DISMISS</a
                                >
                            </b-toast>
                            <!-- callback  toast-->
                            <b-toast id="click-callback1-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left">
                                Thanks for clicking the Dismiss button!
                                <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide('click-callback1-toast')">DISMISS</a>
                            </b-toast>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code11')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;info&quot; @click=&quot;$bvToast.show('click-callback-toast')&quot;&gt;Click Callback&lt;/b-button&gt;

&lt;b-toast id=&quot;click-callback-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-dark d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-left&quot;&gt;
    Custom callback when action button is clicked.
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ml-2&quot; @click=&quot;$bvToast.hide('click-callback-toast');$bvToast.show('click-callback1-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;
&lt;!-- callback  toast--&gt;
&lt;b-toast id=&quot;click-callback1-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-dark d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-left&quot;&gt;
    Thanks for clicking the Dismiss button!
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ml-2&quot; @click=&quot;$bvToast.hide('click-callback1-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="toastDuration" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Duration</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="dark" @click="$bvToast.show('duration-toast')">Duration</b-button>

                            <b-toast id="duration-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left" auto-hide-delay="5000">
                                Example notification text.
                                <a href="javascript:;" class="text-success ml-2" @click="$bvToast.hide('duration-toast')">DISMISS</a>
                            </b-toast>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code12')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code12')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;dark&quot; @click=&quot;$bvToast.show('duration-toast')&quot;&gt;Duration&lt;/b-button&gt;

&lt;b-toast id=&quot;duration-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-dark d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-left&quot; auto-hide-delay=&quot;5000&quot;&gt;
    Example notification text.
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-success ml-2&quot; @click=&quot;$bvToast.hide('duration-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="toastBackgroundColor" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Background Color</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <!-- Primary -->
                            <b-button class="mb-2 mx-1" variant="primary" @click="$bvToast.show('primary-toast')">Primary</b-button>
                            <b-toast id="primary-toast" header-class="d-none" body-class="toast-primary d-flex justify-content-between" toaster="b-toaster-bottom-left">
                                Primary
                                <a href="javascript:;" class="text-white ml-2" @click="$bvToast.hide('primary-toast')">DISMISS</a>
                            </b-toast>

                            <!-- Info -->
                            <b-button class="mb-2 mx-1" variant="info" @click="$bvToast.show('info-toast')">Info</b-button>
                            <b-toast id="info-toast" header-class="d-none" body-class="toast-info d-flex justify-content-between" toaster="b-toaster-bottom-left">
                                Info
                                <a href="javascript:;" class="text-white ml-2" @click="$bvToast.hide('info-toast')">DISMISS</a>
                            </b-toast>

                            <!-- Success -->
                            <b-button class="mb-2 mx-1" variant="success" @click="$bvToast.show('success-toast')">Success</b-button>
                            <b-toast id="success-toast" header-class="d-none" body-class="toast-success d-flex justify-content-between" toaster="b-toaster-bottom-left">
                                Success
                                <a href="javascript:;" class="text-white ml-2" @click="$bvToast.hide('success-toast')">DISMISS</a>
                            </b-toast>

                            <!-- Warning -->
                            <b-button class="mb-2 mx-1" variant="warning" @click="$bvToast.show('warning-toast')">Warning</b-button>
                            <b-toast id="warning-toast" header-class="d-none" body-class="toast-warning d-flex justify-content-between" toaster="b-toaster-bottom-left">
                                Warning
                                <a href="javascript:;" class="text-white ml-2" @click="$bvToast.hide('warning-toast')">DISMISS</a>
                            </b-toast>

                            <!-- Danger -->
                            <b-button class="mb-2 mx-1" variant="danger" @click="$bvToast.show('danger-toast')">Danger</b-button>
                            <b-toast id="danger-toast" header-class="d-none" body-class="toast-danger d-flex justify-content-between" toaster="b-toaster-bottom-left">
                                Danger
                                <a href="javascript:;" class="text-white ml-2" @click="$bvToast.hide('danger-toast')">DISMISS</a>
                            </b-toast>

                            <!-- Dark -->
                            <b-button class="mb-2 mx-1" variant="dark" @click="$bvToast.show('dark-toast')">Dark</b-button>
                            <b-toast id="dark-toast" header-class="d-none" body-class="toast-dark d-flex justify-content-between" toaster="b-toaster-bottom-left">
                                Dark
                                <a href="javascript:;" class="text-white ml-2" @click="$bvToast.hide('dark-toast')">DISMISS</a>
                            </b-toast>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code13')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code13')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;!-- Primary --&gt;
&lt;b-button class=&quot;mb-2 mx-1&quot; variant=&quot;primary&quot; @click=&quot;$bvToast.show('primary-toast')&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-toast id=&quot;primary-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-primary d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-left&quot;&gt;
    Primary
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-white ml-2&quot; @click=&quot;$bvToast.hide('primary-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;

&lt;!-- Info --&gt;
&lt;b-button class=&quot;mb-2 mx-1&quot; variant=&quot;info&quot; @click=&quot;$bvToast.show('info-toast')&quot;&gt;Info&lt;/b-button&gt;
&lt;b-toast id=&quot;info-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-info d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-left&quot;&gt;
    Info
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-white ml-2&quot; @click=&quot;$bvToast.hide('info-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;

&lt;!-- Success --&gt;
&lt;b-button class=&quot;mb-2 mx-1&quot; variant=&quot;success&quot; @click=&quot;$bvToast.show('success-toast')&quot;&gt;Success&lt;/b-button&gt;
&lt;b-toast id=&quot;success-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-success d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-left&quot;&gt;
    Success
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-white ml-2&quot; @click=&quot;$bvToast.hide('success-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;

&lt;!-- Warning --&gt;
&lt;b-button class=&quot;mb-2 mx-1&quot; variant=&quot;warning&quot; @click=&quot;$bvToast.show('warning-toast')&quot;&gt;Warning&lt;/b-button&gt;
&lt;b-toast id=&quot;warning-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-warning d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-left&quot;&gt;
    Warning
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-white ml-2&quot; @click=&quot;$bvToast.hide('warning-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;

&lt;!-- Danger --&gt;
&lt;b-button class=&quot;mb-2 mx-1&quot; variant=&quot;danger&quot; @click=&quot;$bvToast.show('danger-toast')&quot;&gt;Danger&lt;/b-button&gt;
&lt;b-toast id=&quot;danger-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-danger d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-left&quot;&gt;
    Danger
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-white ml-2&quot; @click=&quot;$bvToast.hide('danger-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;

&lt;!-- Dark --&gt;
&lt;b-button class=&quot;mb-2 mx-1&quot; variant=&quot;dark&quot; @click=&quot;$bvToast.show('dark-toast')&quot;&gt;Dark&lt;/b-button&gt;
&lt;b-toast id=&quot;dark-toast&quot; header-class=&quot;d-none&quot; body-class=&quot;toast-dark d-flex justify-content-between&quot; toaster=&quot;b-toaster-bottom-left&quot;&gt;
    Dark
    &lt;a href=&quot;javascript:;&quot; class=&quot;text-white ml-2&quot; @click=&quot;$bvToast.hide('dark-toast')&quot;&gt;DISMISS&lt;/a&gt;
&lt;/b-toast&gt;
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
        metaInfo: { title: 'Notifications' },
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
