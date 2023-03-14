<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Checkbox and Radio</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#checkbox" class="nav-link scrollactive-item">Checkbox</a>
                    <a href="#radio" class="nav-link scrollactive-item">Radio</a>
                </scrollactive>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        Documentation: <a target="_blank" href="https://bootstrap-vue.org/docs/components/form-checkbox" class="text-info">
                            https://bootstrap-vue.org/docs/components/form-checkbox
                        </a>
                    </div>
                </div>
            </div>


            <div class="row layout-top-spacing">

                <div id="checkbox" class="col-lg-12">
                    <div class="seperator-header">
                        <h4 class="">Checkbox</h4>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="row">

                        <!-- Background -->
                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Default</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.checkbox-*</code> class to change different colors.</p>

                                    <b-checkbox variant="default" class="checkbox-default">Default</b-checkbox>
                                    <b-checkbox variant="primary" class="checkbox-primary" :checked="true">Primary</b-checkbox>
                                    <b-checkbox variant="success" class="checkbox-success">Success</b-checkbox>
                                    <b-checkbox variant="info" class="checkbox-info">Info</b-checkbox>
                                    <b-checkbox variant="warning" class="checkbox-warning">Warning</b-checkbox>
                                    <b-checkbox variant="danger" class="checkbox-danger">Danger</b-checkbox>
                                    <b-checkbox variant="secondary" class="checkbox-secondary">Secondary</b-checkbox>
                                    <b-checkbox variant="dark" class="checkbox-dark">Dark</b-checkbox>


                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                        <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-checkbox variant=&quot;default&quot; class=&quot;checkbox-default&quot;&gt;Default&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;primary&quot; class=&quot;checkbox-primary&quot; :checked=&quot;true&quot;&gt;Primary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;success&quot; class=&quot;checkbox-success&quot;&gt;Success&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;info&quot; class=&quot;checkbox-info&quot;&gt;Info&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;warning&quot; class=&quot;checkbox-warning&quot;&gt;Warning&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;danger&quot; class=&quot;checkbox-danger&quot;&gt;Danger&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;secondary&quot; class=&quot;checkbox-secondary&quot;&gt;Secondary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;dark&quot; class=&quot;checkbox-dark&quot;&gt;Dark&lt;/b-checkbox&gt;
</pre>
                                            </highlight>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Default Rounded</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.rounded</code> class to create checkboxes rounded.</p>

                                    <b-checkbox variant="default" class="checkbox-default rounded">Default</b-checkbox>
                                    <b-checkbox variant="primary" class="checkbox-primary rounded" :checked="true">Primary</b-checkbox>
                                    <b-checkbox variant="success" class="checkbox-success rounded">Success</b-checkbox>
                                    <b-checkbox variant="info" class="checkbox-info rounded">Info</b-checkbox>
                                    <b-checkbox variant="warning" class="checkbox-warning rounded">Warning</b-checkbox>
                                    <b-checkbox variant="danger" class="checkbox-danger rounded">Danger</b-checkbox>
                                    <b-checkbox variant="secondary" class="checkbox-secondary rounded">Secondary</b-checkbox>
                                    <b-checkbox variant="dark" class="checkbox-dark rounded">Dark</b-checkbox>

                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                        <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-checkbox variant=&quot;default&quot; class=&quot;checkbox-default rounded&quot;&gt;Default&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;primary&quot; class=&quot;checkbox-primary rounded&quot; :checked=&quot;true&quot;&gt;Primary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;success&quot; class=&quot;checkbox-success rounded&quot;&gt;Success&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;info&quot; class=&quot;checkbox-info rounded&quot;&gt;Info&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;warning&quot; class=&quot;checkbox-warning rounded&quot;&gt;Warning&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;danger&quot; class=&quot;checkbox-danger rounded&quot;&gt;Danger&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;secondary&quot; class=&quot;checkbox-secondary rounded&quot;&gt;Secondary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;dark&quot; class=&quot;checkbox-dark rounded&quot;&gt;Dark&lt;/b-checkbox&gt;
</pre>
                                            </highlight>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Outline</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.checkbox-outline-*</code> class to create checkboxes outlined and change different colors.</p>

                                    <b-checkbox variant="default" class="checkbox-outline-default">Default</b-checkbox>
                                    <b-checkbox variant="primary" class="checkbox-outline-primary" :checked="true">Primary</b-checkbox>
                                    <b-checkbox variant="success" class="checkbox-outline-success">Success</b-checkbox>
                                    <b-checkbox variant="info" class="checkbox-outline-info">Info</b-checkbox>
                                    <b-checkbox variant="warning" class="checkbox-outline-warning">Warning</b-checkbox>
                                    <b-checkbox variant="danger" class="checkbox-outline-danger">Danger</b-checkbox>
                                    <b-checkbox variant="secondary" class="checkbox-outline-secondary">Secondary</b-checkbox>
                                    <b-checkbox variant="dark" class="checkbox-outline-dark">Dark</b-checkbox>

                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                        <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-checkbox variant=&quot;default&quot; class=&quot;checkbox-outline-default&quot;&gt;Default&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;primary&quot; class=&quot;checkbox-outline-primary&quot; :checked=&quot;true&quot;&gt;Primary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;success&quot; class=&quot;checkbox-outline-success&quot;&gt;Success&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;info&quot; class=&quot;checkbox-outline-info&quot;&gt;Info&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;warning&quot; class=&quot;checkbox-outline-warning&quot;&gt;Warning&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;danger&quot; class=&quot;checkbox-outline-danger&quot;&gt;Danger&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;secondary&quot; class=&quot;checkbox-outline-secondary&quot;&gt;Secondary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;dark&quot; class=&quot;checkbox-outline-dark&quot;&gt;Dark&lt;/b-checkbox&gt;
</pre>
                                            </highlight>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Outline Rounded</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.rounded</code> class to create checkboxes rounded.</p>

                                    <b-checkbox variant="default" class="checkbox-outline-default rounded">Default</b-checkbox>
                                    <b-checkbox variant="primary" class="checkbox-outline-primary rounded" :checked="true">Primary</b-checkbox>
                                    <b-checkbox variant="success" class="checkbox-outline-success rounded">Success</b-checkbox>
                                    <b-checkbox variant="info" class="checkbox-outline-info rounded">Info</b-checkbox>
                                    <b-checkbox variant="warning" class="checkbox-outline-warning rounded">Warning</b-checkbox>
                                    <b-checkbox variant="danger" class="checkbox-outline-danger rounded">Danger</b-checkbox>
                                    <b-checkbox variant="secondary" class="checkbox-outline-secondary rounded">Secondary</b-checkbox>
                                    <b-checkbox variant="dark" class="checkbox-outline-dark rounded">Dark</b-checkbox>


                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                        <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-checkbox variant=&quot;default&quot; class=&quot;checkbox-outline-default rounded&quot;&gt;Default&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;primary&quot; class=&quot;checkbox-outline-primary rounded&quot; :checked=&quot;true&quot;&gt;Primary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;success&quot; class=&quot;checkbox-outline-success rounded&quot;&gt;Success&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;info&quot; class=&quot;checkbox-outline-info rounded&quot;&gt;Info&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;warning&quot; class=&quot;checkbox-outline-warning rounded&quot;&gt;Warning&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;danger&quot; class=&quot;checkbox-outline-danger rounded&quot;&gt;Danger&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;secondary&quot; class=&quot;checkbox-outline-secondary rounded&quot;&gt;Secondary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;dark&quot; class=&quot;checkbox-outline-dark rounded&quot;&gt;Dark&lt;/b-checkbox&gt;
</pre>
                                            </highlight>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Default Text Color</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.text-color</code> class to make text colored as checkbox.</p>

                                    <div class="row">

                                        <div class="col-md-6 col-6">

                                            <b-checkbox variant="default" class="checkbox-default text-color">Default</b-checkbox>
                                            <b-checkbox variant="primary" class="checkbox-primary text-color" :checked="true">Primary</b-checkbox>
                                            <b-checkbox variant="success" class="checkbox-success text-color">Success</b-checkbox>
                                            <b-checkbox variant="info" class="checkbox-info text-color">Info</b-checkbox>
                                            <b-checkbox variant="warning" class="checkbox-warning text-color">Warning</b-checkbox>
                                            <b-checkbox variant="danger" class="checkbox-danger text-color">Danger</b-checkbox>
                                            <b-checkbox variant="secondary" class="checkbox-secondary text-color">Secondary</b-checkbox>
                                            <b-checkbox variant="dark" class="checkbox-dark text-color">Dark</b-checkbox>

                                        </div>

                                        <div class="col-md-6 col-6">

                                            <b-checkbox variant="default" class="checkbox-outline-default text-color">Default</b-checkbox>
                                            <b-checkbox variant="primary" class="checkbox-outline-primary text-color" :checked="true">Primary</b-checkbox>
                                            <b-checkbox variant="success" class="checkbox-outline-success text-color">Success</b-checkbox>
                                            <b-checkbox variant="info" class="checkbox-outline-info text-color">Info</b-checkbox>
                                            <b-checkbox variant="warning" class="checkbox-outline-warning text-color">Warning</b-checkbox>
                                            <b-checkbox variant="danger" class="checkbox-outline-danger text-color">Danger</b-checkbox>
                                            <b-checkbox variant="secondary" class="checkbox-outline-secondary text-color">Secondary</b-checkbox>
                                            <b-checkbox variant="dark" class="checkbox-outline-dark text-color">Dark</b-checkbox>

                                        </div>

                                    </div>

                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                        <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-checkbox variant=&quot;default&quot; class=&quot;checkbox-default text-color&quot;&gt;Default&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;primary&quot; class=&quot;checkbox-primary text-color&quot; :checked=&quot;true&quot;&gt;Primary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;success&quot; class=&quot;checkbox-success text-color&quot;&gt;Success&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;info&quot; class=&quot;checkbox-info text-color&quot;&gt;Info&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;warning&quot; class=&quot;checkbox-warning text-color&quot;&gt;Warning&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;danger&quot; class=&quot;checkbox-danger text-color&quot;&gt;Danger&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;secondary&quot; class=&quot;checkbox-secondary text-color&quot;&gt;Secondary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;dark&quot; class=&quot;checkbox-dark text-color&quot;&gt;Dark&lt;/b-checkbox&gt;

&lt;b-checkbox variant=&quot;default&quot; class=&quot;checkbox-outline-default text-color&quot;&gt;Default&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;primary&quot; class=&quot;checkbox-outline-primary text-color&quot; :checked=&quot;true&quot;&gt;Primary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;success&quot; class=&quot;checkbox-outline-success text-color&quot;&gt;Success&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;info&quot; class=&quot;checkbox-outline-info text-color&quot;&gt;Info&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;warning&quot; class=&quot;checkbox-outline-warning text-color&quot;&gt;Warning&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;danger&quot; class=&quot;checkbox-outline-danger text-color&quot;&gt;Danger&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;secondary&quot; class=&quot;checkbox-outline-secondary text-color&quot;&gt;Secondary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;dark&quot; class=&quot;checkbox-outline-dark text-color&quot;&gt;Dark&lt;/b-checkbox&gt;
</pre>
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Rounded Text Color</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.text-color</code> class to make text colored as checkbox.</p>

                                    <div class="row">

                                        <div class="col-md-6 col-6">

                                            <b-checkbox variant="default" class="checkbox-default text-color rounded">Default</b-checkbox>
                                            <b-checkbox variant="primary" class="checkbox-primary text-color rounded" :checked="true">Primary</b-checkbox>
                                            <b-checkbox variant="success" class="checkbox-success text-color rounded">Success</b-checkbox>
                                            <b-checkbox variant="info" class="checkbox-info text-color rounded">Info</b-checkbox>
                                            <b-checkbox variant="warning" class="checkbox-warning text-color rounded">Warning</b-checkbox>
                                            <b-checkbox variant="danger" class="checkbox-danger text-color rounded">Danger</b-checkbox>
                                            <b-checkbox variant="secondary" class="checkbox-secondary text-color rounded">Secondary</b-checkbox>
                                            <b-checkbox variant="dark" class="checkbox-dark text-color rounded">Dark</b-checkbox>

                                        </div>

                                        <div class="col-md-6 col-6">

                                            <b-checkbox variant="default" class="checkbox-outline-default text-color rounded">Default</b-checkbox>
                                            <b-checkbox variant="primary" class="checkbox-outline-primary text-color rounded" :checked="true">Primary</b-checkbox>
                                            <b-checkbox variant="success" class="checkbox-outline-success text-color rounded">Success</b-checkbox>
                                            <b-checkbox variant="info" class="checkbox-outline-info text-color rounded">Info</b-checkbox>
                                            <b-checkbox variant="warning" class="checkbox-outline-warning text-color rounded">Warning</b-checkbox>
                                            <b-checkbox variant="danger" class="checkbox-outline-danger text-color rounded">Danger</b-checkbox>
                                            <b-checkbox variant="secondary" class="checkbox-outline-secondary text-color rounded">Secondary</b-checkbox>
                                            <b-checkbox variant="dark" class="checkbox-outline-dark text-color rounded">Dark</b-checkbox>

                                        </div>

                                    </div>

                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>
                                        <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-checkbox variant=&quot;default&quot; class=&quot;checkbox-default text-color rounded&quot;&gt;Default&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;primary&quot; class=&quot;checkbox-primary text-color rounded&quot; :checked=&quot;true&quot;&gt;Primary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;success&quot; class=&quot;checkbox-success text-color rounded&quot;&gt;Success&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;info&quot; class=&quot;checkbox-info text-color rounded&quot;&gt;Info&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;warning&quot; class=&quot;checkbox-warning text-color rounded&quot;&gt;Warning&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;danger&quot; class=&quot;checkbox-danger text-color rounded&quot;&gt;Danger&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;secondary&quot; class=&quot;checkbox-secondary text-color rounded&quot;&gt;Secondary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;dark&quot; class=&quot;checkbox-dark text-color rounded&quot;&gt;Dark&lt;/b-checkbox&gt;

&lt;b-checkbox variant=&quot;default&quot; class=&quot;checkbox-outline-default text-color rounded&quot;&gt;Default&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;primary&quot; class=&quot;checkbox-outline-primary text-color rounded&quot; :checked=&quot;true&quot;&gt;Primary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;success&quot; class=&quot;checkbox-outline-success text-color rounded&quot;&gt;Success&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;info&quot; class=&quot;checkbox-outline-info text-color rounded&quot;&gt;Info&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;warning&quot; class=&quot;checkbox-outline-warning text-color rounded&quot;&gt;Warning&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;danger&quot; class=&quot;checkbox-outline-danger text-color rounded&quot;&gt;Danger&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;secondary&quot; class=&quot;checkbox-outline-secondary text-color rounded&quot;&gt;Secondary&lt;/b-checkbox&gt;
&lt;b-checkbox variant=&quot;dark&quot; class=&quot;checkbox-outline-dark text-color rounded&quot;&gt;Dark&lt;/b-checkbox&gt;
</pre>
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row layout-top-spacing">
                        <div class="col-12">
                            <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                Documentation: <a target="_blank" href="https://bootstrap-vue.org/docs/components/form-radio" class="text-info">
                                    https://bootstrap-vue.org/docs/components/form-radio
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="row layout-top-spacing">

                        <div id="radio" class="col-lg-12">
                            <div class="seperator-header">
                                <h4 class="">Radio</h4>
                            </div>
                        </div>

                        <!-- Background -->
                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Default</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.radio-*</code> class to change different colors.</p>

                                    <b-radio v-model="radio_1" class="radio-default" name="custom-radio-1" value="radio-1">Default</b-radio>
                                    <b-radio v-model="radio_1" class="radio-primary" name="custom-radio-1" value="radio-2">Primary</b-radio>
                                    <b-radio v-model="radio_1" class="radio-success" name="custom-radio-1" value="radio-3">Success</b-radio>
                                    <b-radio v-model="radio_1" class="radio-info" name="custom-radio-1" value="radio-4">Info</b-radio>
                                    <b-radio v-model="radio_1" class="radio-warning" name="custom-radio-1" value="radio-5">Warning</b-radio>
                                    <b-radio v-model="radio_1" class="radio-danger" name="custom-radio-1" value="radio-6">Danger</b-radio>
                                    <b-radio v-model="radio_1" class="radio-secondary" name="custom-radio-1" value="radio-7">Secondary</b-radio>
                                    <b-radio v-model="radio_1" class="radio-dark" name="custom-radio-1" value="radio-8">Dark</b-radio>


                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>

                                        <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-radio v-model=&quot;radio_1&quot; class=&quot;radio-default&quot; name=&quot;custom-radio-1&quot; value=&quot;radio-1&quot;&gt;Default&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_1&quot; class=&quot;radio-primary&quot; name=&quot;custom-radio-1&quot;  value=&quot;radio-2&quot;&gt;Primary&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_1&quot; class=&quot;radio-success&quot; name=&quot;custom-radio-1&quot; value=&quot;radio-3&quot;&gt;Success&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_1&quot; class=&quot;radio-info&quot; name=&quot;custom-radio-1&quot; value=&quot;radio-4&quot;&gt;Info&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_1&quot; class=&quot;radio-warning&quot; name=&quot;custom-radio-1&quot; value=&quot;radio-5&quot;&gt;Warning&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_1&quot; class=&quot;radio-danger&quot; name=&quot;custom-radio-1&quot; value=&quot;radio-6&quot;&gt;Danger&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_1&quot; class=&quot;radio-secondary&quot; name=&quot;custom-radio-1&quot; value=&quot;radio-7&quot;&gt;Secondary&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_1&quot; class=&quot;radio-dark&quot; name=&quot;custom-radio-1&quot; value=&quot;radio-8&quot;&gt;Dark&lt;/b-radio&gt;
</pre>
                                            </highlight>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Classic</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.radio-classic</code> class to make classic.</p>

                                    <b-radio v-model="radio_2" class="radio-classic radio-default" name="custom-radio-2" value="radio-1">Default</b-radio>
                                    <b-radio v-model="radio_2" class="radio-classic radio-primary" name="custom-radio-2" value="radio-2">Primary</b-radio>
                                    <b-radio v-model="radio_2" class="radio-classic radio-success" name="custom-radio-2" value="radio-3">Success</b-radio>
                                    <b-radio v-model="radio_2" class="radio-classic radio-info" name="custom-radio-2" value="radio-4">Info</b-radio>
                                    <b-radio v-model="radio_2" class="radio-classic radio-warning" name="custom-radio-2" value="radio-5">Warning</b-radio>
                                    <b-radio v-model="radio_2" class="radio-classic radio-danger" name="custom-radio-2" value="radio-6">Danger</b-radio>
                                    <b-radio v-model="radio_2" class="radio-classic radio-secondary" name="custom-radio-2" value="radio-7">Secondary</b-radio>
                                    <b-radio v-model="radio_2" class="radio-classic radio-dark" name="custom-radio-2" value="radio-8">Dark</b-radio>

                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></b-button>
                                        <div v-if="code_arr.includes('code8')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-radio v-model=&quot;radio_2&quot; class=&quot;radio-classic radio-default&quot; name=&quot;custom-radio-2&quot; value=&quot;radio-1&quot;&gt;Default&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_2&quot; class=&quot;radio-classic radio-primary&quot; name=&quot;custom-radio-2&quot; value=&quot;radio-2&quot;&gt;Primary&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_2&quot; class=&quot;radio-classic radio-success&quot; name=&quot;custom-radio-2&quot; value=&quot;radio-3&quot;&gt;Success&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_2&quot; class=&quot;radio-classic radio-info&quot; name=&quot;custom-radio-2&quot; value=&quot;radio-4&quot;&gt;Info&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_2&quot; class=&quot;radio-classic radio-warning&quot; name=&quot;custom-radio-2&quot; value=&quot;radio-5&quot;&gt;Warning&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_2&quot; class=&quot;radio-classic radio-danger&quot; name=&quot;custom-radio-2&quot; value=&quot;radio-6&quot;&gt;Danger&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_2&quot; class=&quot;radio-classic radio-secondary&quot; name=&quot;custom-radio-2&quot; value=&quot;radio-7&quot;&gt;Secondary&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_2&quot; class=&quot;radio-classic radio-dark&quot; name=&quot;custom-radio-2&quot; value=&quot;radio-8&quot;&gt;Dark&lt;/b-radio&gt;
</pre>
                                            </highlight>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Square</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.square-radio</code> class to make squares.</p>

                                    <b-radio v-model="radio_3" class="square-radio radio-default" name="custom-radio-3" value="radio-1">Default</b-radio>
                                    <b-radio v-model="radio_3" class="square-radio radio-primary" name="custom-radio-3" value="radio-2">Primary</b-radio>
                                    <b-radio v-model="radio_3" class="square-radio radio-success" name="custom-radio-3" value="radio-3">Success</b-radio>
                                    <b-radio v-model="radio_3" class="square-radio radio-info" name="custom-radio-3" value="radio-4">Info</b-radio>
                                    <b-radio v-model="radio_3" class="square-radio radio-warning" name="custom-radio-3" value="radio-5">Warning</b-radio>
                                    <b-radio v-model="radio_3" class="square-radio radio-danger" name="custom-radio-3" value="radio-6">Danger</b-radio>
                                    <b-radio v-model="radio_3" class="square-radio radio-secondary" name="custom-radio-3" value="radio-7">Secondary</b-radio>
                                    <b-radio v-model="radio_3" class="square-radio radio-dark" name="custom-radio-3" value="radio-8">Dark</b-radio>

                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></b-button>
                                        <div v-if="code_arr.includes('code9')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-radio v-model=&quot;radio_3&quot; class=&quot;square-radio radio-default&quot; name=&quot;custom-radio-3&quot; value=&quot;radio-1&quot;&gt;Default&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_3&quot; class=&quot;square-radio radio-primary&quot; name=&quot;custom-radio-3&quot; value=&quot;radio-2&quot;&gt;Primary&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_3&quot; class=&quot;square-radio radio-success&quot; name=&quot;custom-radio-3&quot; value=&quot;radio-3&quot;&gt;Success&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_3&quot; class=&quot;square-radio radio-info&quot; name=&quot;custom-radio-3&quot; value=&quot;radio-4&quot;&gt;Info&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_3&quot; class=&quot;square-radio radio-warning&quot; name=&quot;custom-radio-3&quot; value=&quot;radio-5&quot;&gt;Warning&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_3&quot; class=&quot;square-radio radio-danger&quot; name=&quot;custom-radio-3&quot; value=&quot;radio-6&quot;&gt;Danger&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_3&quot; class=&quot;square-radio radio-secondary&quot; name=&quot;custom-radio-3&quot; value=&quot;radio-7&quot;&gt;Secondary&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_3&quot; class=&quot;square-radio radio-dark&quot; name=&quot;custom-radio-3&quot; value=&quot;radio-8&quot;&gt;Dark&lt;/b-radio&gt;
</pre>
                                            </highlight>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Default Text Color</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.text-color</code> class to make text colored as checkbox.</p>

                                    <b-radio v-model="radio_4" class="text-color radio-default" name="custom-radio-4" value="radio-1">Default</b-radio>
                                    <b-radio v-model="radio_4" class="text-color radio-primary" name="custom-radio-4" value="radio-2">Primary</b-radio>
                                    <b-radio v-model="radio_4" class="text-color radio-success" name="custom-radio-4" value="radio-3">Success</b-radio>
                                    <b-radio v-model="radio_4" class="text-color radio-info" name="custom-radio-4" value="radio-4">Info</b-radio>
                                    <b-radio v-model="radio_4" class="text-color radio-warning" name="custom-radio-4" value="radio-5">Warning</b-radio>
                                    <b-radio v-model="radio_4" class="text-color radio-danger" name="custom-radio-4" value="radio-6">Danger</b-radio>
                                    <b-radio v-model="radio_4" class="text-color radio-secondary" name="custom-radio-4" value="radio-7">Secondary</b-radio>
                                    <b-radio v-model="radio_4" class="text-color radio-dark" name="custom-radio-4" value="radio-8">Dark</b-radio>

                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></b-button>

                                        <div v-if="code_arr.includes('code10')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-radio v-model=&quot;radio_4&quot; class=&quot;text-color radio-default&quot; name=&quot;custom-radio-4&quot; value=&quot;radio-1&quot;&gt;Default&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_4&quot; class=&quot;text-color radio-primary&quot; name=&quot;custom-radio-4&quot; value=&quot;radio-2&quot;&gt;Primary&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_4&quot; class=&quot;text-color radio-success&quot; name=&quot;custom-radio-4&quot; value=&quot;radio-3&quot;&gt;Success&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_4&quot; class=&quot;text-color radio-info&quot; name=&quot;custom-radio-4&quot; value=&quot;radio-4&quot;&gt;Info&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_4&quot; class=&quot;text-color radio-warning&quot; name=&quot;custom-radio-4&quot; value=&quot;radio-5&quot;&gt;Warning&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_4&quot; class=&quot;text-color radio-danger&quot; name=&quot;custom-radio-4&quot; value=&quot;radio-6&quot;&gt;Danger&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_4&quot; class=&quot;text-color radio-secondary&quot; name=&quot;custom-radio-4&quot; value=&quot;radio-7&quot;&gt;Secondary&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_4&quot; class=&quot;text-color radio-dark&quot; name=&quot;custom-radio-4&quot; value=&quot;radio-8&quot;&gt;Dark&lt;/b-radio&gt;
</pre>
                                            </highlight>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Classic Text Color</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.radio-classic.text-color</code> class to make text colored as checkbox..</p>

                                    <b-radio v-model="radio_5" class="radio-classic text-color radio-default" name="custom-radio-5" value="radio-1">Default</b-radio>
                                    <b-radio v-model="radio_5" class="radio-classic text-color radio-primary" name="custom-radio-5" value="radio-2">Primary</b-radio>
                                    <b-radio v-model="radio_5" class="radio-classic text-color radio-success" name="custom-radio-5" value="radio-3">Success</b-radio>
                                    <b-radio v-model="radio_5" class="radio-classic text-color radio-info" name="custom-radio-5" value="radio-4">Info</b-radio>
                                    <b-radio v-model="radio_5" class="radio-classic text-color radio-warning" name="custom-radio-5" value="radio-5">Warning</b-radio>
                                    <b-radio v-model="radio_5" class="radio-classic text-color radio-danger" name="custom-radio-5" value="radio-6">Danger</b-radio>
                                    <b-radio v-model="radio_5" class="radio-classic text-color radio-secondary" name="custom-radio-5" value="radio-7">Secondary</b-radio>
                                    <b-radio v-model="radio_5" class="radio-classic text-color radio-dark" name="custom-radio-5" value="radio-8">Dark</b-radio>

                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></b-button>

                                        <div v-if="code_arr.includes('code11')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-radio v-model=&quot;radio_5&quot; class=&quot;radio-classic text-color radio-default&quot; name=&quot;custom-radio-5&quot; value=&quot;radio-1&quot;&gt;Default&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_5&quot; class=&quot;radio-classic text-color radio-primary&quot; name=&quot;custom-radio-5&quot; value=&quot;radio-2&quot;&gt;Primary&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_5&quot; class=&quot;radio-classic text-color radio-success&quot; name=&quot;custom-radio-5&quot; value=&quot;radio-3&quot;&gt;Success&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_5&quot; class=&quot;radio-classic text-color radio-info&quot; name=&quot;custom-radio-5&quot; value=&quot;radio-4&quot;&gt;Info&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_5&quot; class=&quot;radio-classic text-color radio-warning&quot; name=&quot;custom-radio-5&quot; value=&quot;radio-5&quot;&gt;Warning&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_5&quot; class=&quot;radio-classic text-color radio-danger&quot; name=&quot;custom-radio-5&quot; value=&quot;radio-6&quot;&gt;Danger&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_5&quot; class=&quot;radio-classic text-color radio-secondary&quot; name=&quot;custom-radio-5&quot; value=&quot;radio-7&quot;&gt;Secondary&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_5&quot; class=&quot;radio-classic text-color radio-dark&quot; name=&quot;custom-radio-5&quot; value=&quot;radio-8&quot;&gt;Dark&lt;/b-radio&gt;
</pre>
                                            </highlight>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="col-xl-12 col-12 layout-spacing">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Square Text Color</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <p class="mb-4">Use <code>.square-radio.text-color</code> class to make text colored as checkbox.</p>

                                    <b-radio v-model="radio_6" class="square-radio text-color radio-default" name="custom-radio-6" value="radio-1">Default</b-radio>
                                    <b-radio v-model="radio_6" class="square-radio text-color radio-primary" name="custom-radio-6" value="radio-2">Primary</b-radio>
                                    <b-radio v-model="radio_6" class="square-radio text-color radio-success" name="custom-radio-6" value="radio-3">Success</b-radio>
                                    <b-radio v-model="radio_6" class="square-radio text-color radio-info" name="custom-radio-6" value="radio-4">Info</b-radio>
                                    <b-radio v-model="radio_6" class="square-radio text-color radio-warning" name="custom-radio-6" value="radio-5">Warning</b-radio>
                                    <b-radio v-model="radio_6" class="square-radio text-color radio-danger" name="custom-radio-6" value="radio-6">Danger</b-radio>
                                    <b-radio v-model="radio_6" class="square-radio text-color radio-secondary" name="custom-radio-6" value="radio-7">Secondary</b-radio>
                                    <b-radio v-model="radio_6" class="square-radio text-color radio-dark" name="custom-radio-6" value="radio-8">Dark</b-radio>

                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code12')"><span>Code</span></b-button>

                                        <div v-if="code_arr.includes('code12')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-radio v-model=&quot;radio_6&quot; class=&quot;square-radio text-color radio-default&quot; name=&quot;custom-radio-6&quot; value=&quot;radio-1&quot;&gt;Default&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_6&quot; class=&quot;square-radio text-color radio-primary&quot; name=&quot;custom-radio-6&quot; value=&quot;radio-2&quot;&gt;Primary&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_6&quot; class=&quot;square-radio text-color radio-success&quot; name=&quot;custom-radio-6&quot; value=&quot;radio-3&quot;&gt;Success&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_6&quot; class=&quot;square-radio text-color radio-info&quot; name=&quot;custom-radio-6&quot; value=&quot;radio-4&quot;&gt;Info&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_6&quot; class=&quot;square-radio text-color radio-warning&quot; name=&quot;custom-radio-6&quot; value=&quot;radio-5&quot;&gt;Warning&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_6&quot; class=&quot;square-radio text-color radio-danger&quot; name=&quot;custom-radio-6&quot; value=&quot;radio-6&quot;&gt;Danger&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_6&quot; class=&quot;square-radio text-color radio-secondary&quot; name=&quot;custom-radio-6&quot; value=&quot;radio-7&quot;&gt;Secondary&lt;/b-radio&gt;
&lt;b-radio v-model=&quot;radio_6&quot; class=&quot;square-radio text-color radio-dark&quot; name=&quot;custom-radio-6&quot; value=&quot;radio-8&quot;&gt;Dark&lt;/b-radio&gt;
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

        </div>

    </div>
</template>

<style scoped>
    .custom-checkbox, .custom-radio { margin-bottom: 0.5rem; }
</style>
<script>
    import '@/assets/sass/scrollspyNav.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Checkbox and Radio' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                radio_1: 'radio-2', radio_2: 'radio-2', radio_3: 'radio-2', radio_4: 'radio-2', radio_5: 'radio-2', radio_6: 'radio-2',
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
