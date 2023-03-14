<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Alerts</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#alertDefault" class="nav-link scrollactive-item">Default</a>
                    <a href="#alertOutline" class="nav-link scrollactive-item">Outline</a>
                    <a href="#alertSolid" class="nav-link scrollactive-item">Solid</a>
                    <a href="#alertIcon" class="nav-link scrollactive-item">Icon</a>
                    <a href="#alertArrowed" class="nav-link scrollactive-item">Arrowed</a>
                    <a href="#alertCustom" class="nav-link scrollactive-item">Custom</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/alert" class="text-info">
                            https://bootstrap-vue.org/docs/components/alert
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div id="alertDefault" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Default Alerts</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-alert show dismissible variant="light-primary" class="border-0 mb-4"> <strong>Primary!</strong> Lorem Ipsum is simply dummy text of the printing. </b-alert>

                            <b-alert show dismissible variant="light-warning" class="border-0 mb-4"> <strong>Warning!</strong> Lorem Ipsum is simply dummy text of the printing. </b-alert>

                            <b-alert show dismissible variant="light-success" class="border-0 mb-4"> <strong>Success!</strong> Lorem Ipsum is simply dummy text of the printing. </b-alert>

                            <b-alert show dismissible variant="light-info" class="border-0 mb-4"> <strong>Info!</strong> Lorem Ipsum is simply dummy text of the printing. </b-alert>

                            <b-alert show dismissible variant="light-dark" class="border-0 mb-4"> <strong>Error!</strong> Lorem Ipsum is simply dummy text of the printing. </b-alert>

                            <b-alert show dismissible variant="light-danger" class="border-0 mb-4"> <strong>Error!</strong> Lorem Ipsum is simply dummy text of the printing. </b-alert>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-alert show dismissible variant=&quot;light-primary&quot; class=&quot;border-0 mb-4&quot;&gt;
    &lt;strong&gt;Primary!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
&lt;/b-alert&gt;

&lt;b-alert show dismissible variant=&quot;light-warning&quot; class=&quot;border-0 mb-4&quot;&gt;
    &lt;strong&gt;Warning!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
&lt;/b-alert&gt;

&lt;b-alert show dismissible variant=&quot;light-success&quot; class=&quot;border-0 mb-4&quot;&gt;
    &lt;strong&gt;Success!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
&lt;/b-alert&gt;

&lt;b-alert show dismissible variant=&quot;light-info&quot; class=&quot;border-0 mb-4&quot;&gt;
    &lt;strong&gt;Info!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
&lt;/b-alert&gt;

&lt;b-alert show dismissible variant=&quot;light-dark&quot; class=&quot;border-0 mb-4&quot;&gt;
    &lt;strong&gt;Error!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
&lt;/b-alert&gt;

&lt;b-alert show dismissible variant=&quot;light-danger&quot; class=&quot;border-0 mb-4&quot;&gt;
    &lt;strong&gt;Error!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
&lt;/b-alert&gt;
 </pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="alertOutline" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Outline Alerts</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-alert show dismissible variant="outline-primary" class="mb-4"> <strong>Primary!</strong> Lorem Ipsum is simply dummy text of the printing. </b-alert>
                            <b-alert show dismissible variant="outline-danger" class="mb-4"> <strong>Error!</strong> Lorem Ipsum is simply dummy text of the printing. </b-alert>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-alert show dismissible variant=&quot;outline-primary&quot; class=&quot;mb-4&quot;&gt;
    &lt;strong&gt;Primary!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
&lt;/b-alert&gt;
&lt;b-alert show dismissible variant=&quot;outline-danger&quot; class=&quot;mb-4&quot;&gt;
    &lt;strong&gt;Error!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
&lt;/b-alert&gt;
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
                <div id="alertSolid" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Solid Alerts</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-alert show dismissible variant="primary" class="mb-4"> <strong>Warning!</strong> Lorem Ipsum is simply dummy text of the printing. </b-alert>
                            <b-alert show dismissible variant="warning" class="mb-4"> <strong>Info!</strong> Lorem Ipsum is simply dummy text of the printing. </b-alert>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-alert show dismissible variant=&quot;primary&quot; class=&quot;mb-4&quot;&gt;
    &lt;strong&gt;Warning!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
&lt;/b-alert&gt;
&lt;b-alert show dismissible variant=&quot;warning&quot; class=&quot;mb-4&quot;&gt;
    &lt;strong&gt;Info!&lt;/strong&gt; Lorem Ipsum is simply dummy text of the printing.
&lt;/b-alert&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="alertIcon" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Alerts with icon</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-alert show dismissible variant="light-success" class="alert-icon-left mb-4">
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
                                    class="feather feather-alert-triangle"
                                >
                                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                    <line x1="12" y1="9" x2="12" y2="13"></line>
                                    <line x1="12" y1="17" x2="12" y2="17"></line>
                                </svg>
                                <strong>Warning!</strong> Lorem Ipsum is simply dummy printing.
                            </b-alert>

                            <b-alert show dismissible variant="light-dark" class="alert-icon-right mb-4">
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
                                    class="feather feather-settings"
                                >
                                    <circle cx="12" cy="12" r="3"></circle>
                                    <path
                                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                                    ></path>
                                </svg>
                                <strong>Warning!</strong> Lorem Ipsum is simply dummy printing.
                            </b-alert>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-alert show dismissible variant=&quot;light-success&quot; class=&quot;alert-icon-left mb-4&quot;&gt;
    &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-alert-triangle&quot;&gt;&lt;path d=&quot;M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z&quot;&gt;&lt;/path&gt;&lt;line x1=&quot;12&quot; y1=&quot;9&quot; x2=&quot;12&quot; y2=&quot;13&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;12&quot; y1=&quot;17&quot; x2=&quot;12&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
    &lt;strong&gt;Warning!&lt;/strong&gt; Lorem Ipsum is simply dummy printing.
&lt;/b-alert&gt;

&lt;b-alert show dismissible variant=&quot;light-dark&quot; class=&quot;alert-icon-right mb-4&quot;&gt;
    &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-settings&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;3&quot;&gt;&lt;/circle&gt;&lt;path d=&quot;M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
    &lt;strong&gt;Warning!&lt;/strong&gt; Lorem Ipsum is simply dummy printing.
&lt;/b-alert&gt;
 </pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="alertArrowed" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Arrowed Alerts</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-alert show dismissible variant="light-primary" class="alert-arrow-left alert-icon-left mb-4">
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
                                <strong>Warning!</strong> Lorem Ipsum is simply dummy printing.
                            </b-alert>

                            <b-alert show dismissible variant="light-danger" class="alert-arrow-right alert-icon-right mb-4">
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
                                    class="feather feather-alert-circle"
                                >
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="12"></line>
                                    <line x1="12" y1="16" x2="12" y2="16"></line>
                                </svg>
                                <strong>Warning!</strong> Lorem Ipsum is simply dummy printing.
                            </b-alert>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-alert show dismissible variant=&quot;light-primary&quot; class=&quot;alert-arrow-left alert-icon-left mb-4&quot;&gt;
    &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-bell&quot;&gt;&lt;path d=&quot;M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9&quot;&gt;&lt;/path&gt;&lt;path d=&quot;M13.73 21a2 2 0 0 1-3.46 0&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
    &lt;strong&gt;Warning!&lt;/strong&gt; Lorem Ipsum is simply dummy printing.
&lt;/b-alert&gt;

&lt;b-alert show dismissible variant=&quot;light-danger&quot; class=&quot;alert-arrow-right alert-icon-right mb-4&quot;&gt;
    &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-alert-circle&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;10&quot;&gt;&lt;/circle&gt;&lt;line x1=&quot;12&quot; y1=&quot;8&quot; x2=&quot;12&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;12&quot; y1=&quot;16&quot; x2=&quot;12&quot; y2=&quot;16&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
    &lt;strong&gt;Warning!&lt;/strong&gt; Lorem Ipsum is simply dummy printing.
&lt;/b-alert&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="alertCustom" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom Alerts</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-alert show dismissible class="custom-alert-1 mb-4">
                                <b-media>
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
                                            class="feather feather-alert-triangle"
                                        >
                                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                            <line x1="12" y1="9" x2="12" y2="13"></line>
                                            <line x1="12" y1="17" x2="12" y2="17"></line>
                                        </svg>
                                    </template>
                                    <div class="alert-text ml-2"><strong>Warning! </strong><span> Lorem Ipsum is simply dummy text of the printing.</span></div>
                                    <div class="alert-btn">
                                        <b-button variant="default" class="btn-dismiss">Accept</b-button>
                                    </div>
                                </b-media>
                            </b-alert>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet mb-3" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left mb-5">
                                    <highlight>
                                        <pre>
&lt;b-alert show dismissible class=&quot;custom-alert-1 mb-4&quot;&gt;
    &lt;b-media&gt;
        &lt;template #aside&gt;
            &lt;div class=&quot;alert-icon&quot;&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-alert-triangle&quot;&gt;&lt;path d=&quot;M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z&quot;&gt;&lt;/path&gt;&lt;line x1=&quot;12&quot; y1=&quot;9&quot; x2=&quot;12&quot; y2=&quot;13&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;12&quot; y1=&quot;17&quot; x2=&quot;12&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
            &lt;/div&gt;
        &lt;/template&gt;
        &lt;div class=&quot;alert-text&quot;&gt;
            &lt;strong&gt;Warning! &lt;/strong&gt;&lt;span&gt; Lorem Ipsum is simply dummy text of the printing.&lt;/span&gt;
        &lt;/div&gt;
        &lt;div class=&quot;alert-btn&quot;&gt;
            &lt;b-button variant=&quot;default&quot; class=&quot;btn-dismiss&quot;&gt;Accept&lt;/b-button&gt;
        &lt;/div&gt;
    &lt;/b-media&gt;
&lt;/b-alert&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>

                            <b-alert show dismissible variant="gradient" class="mb-4"> <strong>New!</strong> Alert with gradient. </b-alert>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet mb-3" @click="toggleCode('code7')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code7')" class="code-section text-left mb-5">
                                    <highlight>
                                        <pre>
&lt;b-alert show dismissible variant=&quot;gradient&quot; class=&quot;mb-4&quot;&gt;
    &lt;strong&gt;New!&lt;/strong&gt; Alert with gradient.
&lt;/b-alert&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>

                            <b-alert show dismissible variant="background" class="mb-4">
                                <strong>New!</strong> Alert with background image.
                            </b-alert>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet mb-3" @click="toggleCode('code8')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-left mb-5">
                                    <highlight>
                                        <pre>
&lt;b-alert show dismissible variant=&quot;background&quot; class=&quot;mb-4&quot; :style=&quot;{ backgroundImage: `url(${require('@/assets/images/ab-1.jpeg')})` }&quot;&gt;
    &lt;strong&gt;New!&lt;/strong&gt; Alert with background image.
&lt;/b-alert&gt;
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
        metaInfo: { title: 'Alerts' },
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
