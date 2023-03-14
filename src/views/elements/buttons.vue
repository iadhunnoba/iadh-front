<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Buttons</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#buttonsDefault" class="nav-link scrollactive-item">Default</a>
                    <a href="#buttonsRounded" class="nav-link scrollactive-item">Rounded</a>
                    <a href="#buttonsSolid" class="nav-link scrollactive-item">Solid</a>
                    <a href="#buttonsOutline" class="nav-link scrollactive-item">Outline</a>
                    <a href="#buttonsSizes" class="nav-link scrollactive-item">Sizes</a>
                    <a href="#buttonsIcons" class="nav-link scrollactive-item">Icons</a>
                    <a href="#buttonsBlock" class="nav-link scrollactive-item">Block</a>
                </scrollactive>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        Documentation: <a target="_blank" href="https://bootstrap-vue.org/docs/components/button" class="text-info">
                            https://bootstrap-vue.org/docs/components/button
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">

                <div id="buttonsDefault" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4> Default </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">

                                <div class="col-lg-6">
                                    <b-button variant="primary" class="mb-2">Primary</b-button>
                                </div>

                                <div class="col-lg-6">
                                    <b-button variant="outline-primary" class="mb-2">Primary</b-button>
                                </div>

                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mb-2&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button variant=&quot;outline-primary&quot; class=&quot;mb-2&quot;&gt;Primary&lt;/b-button&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="buttonsRounded" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4> Rounded </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">

                                <div class="col-lg-6">
                                    <b-button variant="primary" pill class="mb-2">Primary</b-button>
                                </div>

                                <div class="col-lg-6">
                                    <b-button variant="outline-primary" pill class="mb-2">Primary</b-button>
                                </div>

                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; pill class=&quot;mb-2&quot;&gt;Primary&lt;/b-button&gt;
&lt;b-button variant=&quot;outline-primary&quot; pill class=&quot;mb-2&quot;&gt;Primary&lt;/b-button&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="buttonsSolid" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Solid</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <b-button variant="primary" class="mb-2 mr-1">Primary</b-button>
                            <b-button variant="info" class="mb-2 mr-1">Info</b-button>
                            <b-button variant="success" class="mb-2 mr-1">Success</b-button>
                            <b-button variant="warning" class="mb-2 mr-1">Warning</b-button>
                            <b-button variant="danger" class="mb-2 mr-1">Danger</b-button>
                            <b-button variant="secondary" class="mb-2 mr-1">Secondary</b-button>
                            <b-button variant="dark" class="mb-2">Dark</b-button>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>

&lt;!-- Primary --&gt;
&lt;b-button variant=&quot;primary&quot; class=&quot;mb-2 mr-1&quot;&gt;Primary&lt;/b-button&gt;

&lt;!-- Info --&gt;
&lt;b-button variant=&quot;info&quot; class=&quot;mb-2 mr-1&quot;&gt;Info&lt;/b-button&gt;

&lt;!-- Success --&gt;
&lt;b-button variant=&quot;success&quot; class=&quot;mb-2 mr-1&quot;&gt;Success&lt;/b-button&gt;

&lt;!-- Warning --&gt;
&lt;b-button variant=&quot;warning&quot; class=&quot;mb-2 mr-1&quot;&gt;Warning&lt;/b-button&gt;

&lt;!-- Danger --&gt;
&lt;b-button variant=&quot;danger&quot; class=&quot;mb-2 mr-1&quot;&gt;Danger&lt;/b-button&gt;

&lt;!-- Secondary --&gt;
&lt;b-button variant=&quot;secondary&quot; class=&quot;mb-2 mr-1&quot;&gt;Secondary&lt;/b-button&gt;

&lt;!-- Dark --&gt;
&lt;b-button variant=&quot;dark&quot; class=&quot;mb-2&quot;&gt;Dark&lt;/b-button&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="buttonsOutline" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Outline</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <b-button variant="outline-primary" class="mb-2 mr-1">Primary</b-button>
                            <b-button variant="outline-info" class="mb-2 mr-1">Info</b-button>
                            <b-button variant="outline-success" class="mb-2 mr-1">Success</b-button>
                            <b-button variant="outline-warning" class="mb-2 mr-1">Warning</b-button>
                            <b-button variant="outline-danger" class="mb-2 mr-1">Danger</b-button>
                            <b-button variant="outline-secondary" class="mb-2 mr-1">Secondary</b-button>
                            <b-button variant="outline-dark" class="mb-2">Dark</b-button>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>

&lt;!-- Primary --&gt;
&lt;b-button variant=&quot;outline-primary&quot; class=&quot;mb-2 mr-1&quot;&gt;Primary&lt;/b-button&gt;

&lt;!-- Info --&gt;
&lt;b-button variant=&quot;outline-info&quot; class=&quot;mb-2 mr-1&quot;&gt;Info&lt;/b-button&gt;

&lt;!-- Success --&gt;
&lt;b-button variant=&quot;outline-success&quot; class=&quot;mb-2 mr-1&quot;&gt;Success&lt;/b-button&gt;

&lt;!-- Warning --&gt;
&lt;b-button variant=&quot;outline-warning&quot; class=&quot;mb-2 mr-1&quot;&gt;Warning&lt;/b-button&gt;

&lt;!-- Danger --&gt;
&lt;b-button variant=&quot;outline-danger&quot; class=&quot;mb-2 mr-1&quot;&gt;Danger&lt;/b-button&gt;

&lt;!-- Secondary --&gt;
&lt;b-button variant=&quot;outline-secondary&quot; class=&quot;mb-2 mr-1&quot;&gt;Secondary&lt;/b-button&gt;

&lt;!-- Dark --&gt;
&lt;b-button variant=&quot;outline-dark&quot; class=&quot;mb-2&quot;&gt;Dark&lt;/b-button&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>


            <div class="row">
                <div id="buttonsSizes" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Button Sizes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" size="lg" class="mb-4 mr-2">Large button</b-button>
                            <b-button variant="secondary" class="mb-4 mr-2">Default button</b-button>
                            <b-button variant="warning" size="sm" class="mb-4 mr-2">Small button</b-button>
                            <b-button variant="primary" size="sm" class="mb-4 mr-2" disabled>Disabled Button</b-button>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; size=&quot;lg&quot; class=&quot;mb-4 mr-2&quot;&gt;Large button&lt;/b-button&gt;
&lt;b-button variant=&quot;secondary&quot; class=&quot;mb-4 mr-2&quot;&gt;Default button&lt;/b-button&gt;
&lt;b-button variant=&quot;warning&quot; size=&quot;sm&quot; class=&quot;mb-4 mr-2&quot;&gt;Small button&lt;/b-button&gt;
&lt;b-button variant=&quot;primary&quot; size=&quot;sm&quot; class=&quot;mb-4 mr-2&quot; disabled&gt;Disabled Button&lt;/b-button&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="buttonsIcons" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Button with Icons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mb-2 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Left</b-button>
                            <b-button variant="warning" pill class="mb-2 mr-2">Right <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg></b-button>
                            <b-button variant="danger" class="mb-2 mr-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></b-button>
                            <b-button variant="dark" class="mb-2 mr-2 rounded-circle"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></b-button>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mb-2 mr-2&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-settings&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;3&quot;&gt;&lt;/circle&gt;&lt;path d=&quot;M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Left&lt;/b-button&gt;
&lt;b-button variant=&quot;warning&quot; pill class=&quot;mb-2 mr-2&quot;&gt;Right &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-edit-2&quot;&gt;&lt;path d=&quot;M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;&lt;/b-button&gt;
&lt;b-button variant=&quot;danger&quot; class=&quot;mb-2 mr-2&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-download&quot;&gt;&lt;path d=&quot;M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;7 10 12 15 17 10&quot;&gt;&lt;/polyline&gt;&lt;line x1=&quot;12&quot; y1=&quot;15&quot; x2=&quot;12&quot; y2=&quot;3&quot;&gt;&lt;/line&gt;&lt;/svg&gt;&lt;/b-button&gt;
&lt;b-button variant=&quot;dark&quot; class=&quot;mb-2 mr-2 rounded-circle&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-sun&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;5&quot;&gt;&lt;/circle&gt;&lt;line x1=&quot;12&quot; y1=&quot;1&quot; x2=&quot;12&quot; y2=&quot;3&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;12&quot; y1=&quot;21&quot; x2=&quot;12&quot; y2=&quot;23&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;4.22&quot; y1=&quot;4.22&quot; x2=&quot;5.64&quot; y2=&quot;5.64&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;18.36&quot; y1=&quot;18.36&quot; x2=&quot;19.78&quot; y2=&quot;19.78&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;1&quot; y1=&quot;12&quot; x2=&quot;3&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;21&quot; y1=&quot;12&quot; x2=&quot;23&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;4.22&quot; y1=&quot;19.78&quot; x2=&quot;5.64&quot; y2=&quot;18.36&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;18.36&quot; y1=&quot;5.64&quot; x2=&quot;19.78&quot; y2=&quot;4.22&quot;&gt;&lt;/line&gt;&lt;/svg&gt;&lt;/b-button&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div id="buttonsBlock" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4> Block Buttons </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" block class="mb-4 mr-2">Button</b-button>
                            <b-button type="submit" variant="info" block class="mb-4 mr-2">Button</b-button>
                            <b-link variant="success" class="btn btn-success btn-block mb-4 mr-2">Button</b-link>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; block class=&quot;mb-4 mr-2&quot;&gt;Button&lt;/b-button&gt;
&lt;b-button type=&quot;submit&quot; variant=&quot;info&quot; block class=&quot;mb-4 mr-2&quot;&gt;Button&lt;/b-button&gt;
&lt;b-link variant=&quot;success&quot; class=&quot;btn btn-success btn-block mb-4 mr-2&quot;&gt;Button&lt;/b-link&gt;
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
        metaInfo: { title: 'Buttons' },
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
