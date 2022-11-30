<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Dropdown</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#dropdownBasic" class="nav-link scrollactive-item">Basic</a>
                    <a href="#dropdownDirections" class="nav-link scrollactive-item">Directions</a>
                    <a href="#dropdownSizes" class="nav-link scrollactive-item">Sizes</a>
                    <a href="#dropdownGrouped" class="nav-link scrollactive-item">Grouped</a>
                    <a href="#dropdownSplit" class="nav-link scrollactive-item">Split</a>
                    <a href="#dropdownCustom" class="nav-link scrollactive-item">Custom</a>
                </scrollactive>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        Documentation: <a target="_blank" href="https://bootstrap-vue.org/docs/components/dropdown" class="text-info">
                            https://bootstrap-vue.org/docs/components/dropdown
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div id="dropdownBasic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4> Dropdown </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                                    <div class="row">

                                        <div class="col-lg-6">
                                            <b-dropdown variant="primary" class="mb-4 mr-2 custom-dropdown">
                                                <template #button-content>
                                                    Action
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                </template>
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                        <div class="col-lg-6">
                                            <b-dropdown variant="outline-primary" class="mb-4 mr-2 custom-dropdown">
                                                <template #button-content>
                                                    Action
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                </template>
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-dropdown variant=&quot;primary&quot; class=&quot;mb-4 mr-2&quot;&gt;
    &lt;template #button-content&gt;
        Action
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-chevron-down&quot;&gt;&lt;polyline points=&quot;6 9 12 15 18 9&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;b-dropdown-item&gt;Action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Another action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Something else here&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;

&lt;b-dropdown variant=&quot;outline-primary&quot; class=&quot;mb-4 mr-2&quot;&gt;
    &lt;template #button-content&gt;
        Action
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-chevron-down&quot;&gt;&lt;polyline points=&quot;6 9 12 15 18 9&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;b-dropdown-item&gt;Action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Another action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Something else here&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="dropdownDirections" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dropup </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                                    <div class="row">

                                        <div class="col-lg-6">
                                            <b-dropdown variant="info" dropup class="mb-4 mr-2 custom-dropdown">
                                                <template #button-content>
                                                    Up
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                                </template>
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                        <div class="col-lg-6">
                                            <b-dropdown variant="outline-info" dropup class="mb-4 mr-2 custom-dropdown">
                                                <template #button-content>
                                                    Up
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                                </template>
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dropright </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                                    <div class="row">

                                        <div class="col-lg-6">
                                            <b-dropdown variant="warning" dropright class="mb-4 mr-2 custom-dropdown">
                                                <template #button-content>
                                                    Right
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                </template>
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                        <div class="col-lg-6">
                                            <b-dropdown variant="outline-warning" dropright class="mb-4 mr-2 custom-dropdown">
                                                <template #button-content>
                                                    Right
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                </template>
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dropleft </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                                    <div class="row">

                                        <div class="col-lg-6">
                                            <b-dropdown variant="danger" dropleft class="mb-4 mr-2 custom-dropdown">
                                                <template #button-content>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                                    Left
                                                </template>
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                        <div class="col-lg-6">
                                            <b-dropdown variant="outline-danger" dropleft class="mb-4 mr-2 custom-dropdown">
                                                <template #button-content>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
                                                    Left
                                                </template>
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="dropdownSizes" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Small Button </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                                    <div class="row">

                                        <div class="col-lg-6">
                                            <b-dropdown variant="dark" size="sm" class="mb-4 mr-2 custom-dropdown">
                                                <template #button-content>
                                                    Small button
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                </template>
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                        <div class="col-lg-6">
                                            <b-dropdown variant="outline-dark" size="sm" class="mb-4 mr-2 custom-dropdown">
                                                <template #button-content>
                                                    Small button
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                </template>
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Large Button </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                                    <div class="row">

                                        <div class="col-lg-6">
                                            <b-dropdown variant="success" size="lg" class="mb-4 mr-2 custom-dropdown">
                                                <template #button-content>
                                                    Large button
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                </template>
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                        <div class="col-lg-6">
                                            <b-dropdown variant="outline-success" size="lg" class="mb-4 mr-2 custom-dropdown">
                                                <template #button-content>
                                                    Large button
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                </template>
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="dropdownGrouped" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Grouped Dropdown Buttons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                                    <div class="row">

                                        <div class="col-lg-6">
                                            <b-button-group class="mb-4 mr-2 ">
                                                <b-button variant="secondary">1</b-button>
                                                <b-button variant="secondary">2</b-button>
                                                <b-button-group>
                                                    <b-dropdown variant="secondary" class="custom-dropdown">
                                                        <template #button-content>
                                                            Dropdown
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                        </template>
                                                        <b-dropdown-item href="#">Dropdown link</b-dropdown-item>
                                                        <b-dropdown-item href="#">Dropdown link</b-dropdown-item>
                                                    </b-dropdown>
                                                </b-button-group>
                                            </b-button-group>
                                        </div>

                                        <div class="col-lg-6">
                                            <b-button-group class="mb-4 mr-2">
                                                <b-button variant="outline-secondary">1</b-button>
                                                <b-button variant="outline-secondary">2</b-button>
                                                <b-button-group>
                                                    <b-dropdown variant="outline-secondary" class="custom-dropdown">
                                                        <template #button-content>
                                                            Dropdown
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                                        </template>
                                                        <b-dropdown-item href="#">Dropdown link</b-dropdown-item>
                                                        <b-dropdown-item href="#">Dropdown link</b-dropdown-item>
                                                    </b-dropdown>
                                                </b-button-group>
                                            </b-button-group>
                                        </div>

                                    </div>

                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                        <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-button-group class=&quot;mb-4 mr-2 custom-dropdown&quot;&gt;
    &lt;b-button variant=&quot;secondary&quot;&gt;1&lt;/b-button&gt;
    &lt;b-button variant=&quot;secondary&quot;&gt;2&lt;/b-button&gt;
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;secondary&quot;&gt;
            &lt;template #button-content&gt;
                Dropdown
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-chevron-down&quot;&gt;&lt;polyline points=&quot;6 9 12 15 18 9&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt;
            &lt;/template&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Dropdown link&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Dropdown link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;
&lt;/b-button-group&gt;

&lt;b-button-group class=&quot;mb-4 mr-2 custom-dropdown&quot;&gt;
    &lt;b-button variant=&quot;outline-secondary&quot;&gt;1&lt;/b-button&gt;
    &lt;b-button variant=&quot;outline-secondary&quot;&gt;2&lt;/b-button&gt;
    &lt;b-button-group&gt;
        &lt;b-dropdown variant=&quot;outline-secondary&quot;&gt;
            &lt;template #button-content&gt;
                Dropdown
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-chevron-down&quot;&gt;&lt;polyline points=&quot;6 9 12 15 18 9&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt;
            &lt;/template&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Dropdown link&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item href=&quot;#&quot;&gt;Dropdown link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-button-group&gt;
&lt;/b-button-group&gt;
</pre>
                                            </highlight>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="dropdownSplit" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4> Split </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center split-buttons">
                            <div class="row">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                                    <div class="row">

                                        <div class="col-lg-6">
                                            <b-dropdown variant="primary" :split="true" text="Action" class="mb-4 mr-2 custom-dropdown">
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                        <div class="col-lg-6">
                                            <b-dropdown variant="outline-primary" :split="true" text="Action" class="mb-4 mr-2 custom-dropdown">
                                                <b-dropdown-item>Action</b-dropdown-item>
                                                <b-dropdown-item>Another action</b-dropdown-item>
                                                <b-dropdown-item>Something else here</b-dropdown-item>
                                                <b-dropdown-item>Separated link</b-dropdown-item>
                                            </b-dropdown>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-dropdown variant=&quot;primary&quot; :split=&quot;true&quot; text=&quot;Action&quot; class=&quot;mb-4 mr-2 custom-dropdown&quot;&gt;
    &lt;b-dropdown-item&gt;Action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Another action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Something else here&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;

&lt;b-dropdown variant=&quot;outline-primary&quot; :split=&quot;true&quot; text=&quot;Action&quot; class=&quot;mb-4 mr-2 custom-dropdown&quot;&gt;
    &lt;b-dropdown-item&gt;Action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Another action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Something else here&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="dropdownCustom" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom Dropdown</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="row">
                                <div class="col-md-3 col-sm-3 col-3 mb-5">
                                    <b-dropdown variant="icon-only" toggle-tag="a" class="mb-4 mr-2 custom-dropdown">
                                        <template #button-content>
                                            <svg xmlns="http://www.w3.org/2000/svg" style="width:24px;height:24px;" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                        </template>
                                        <b-dropdown-item>Action</b-dropdown-item>
                                        <b-dropdown-item>Another action</b-dropdown-item>
                                        <b-dropdown-item>Something else here</b-dropdown-item>
                                        <b-dropdown-item>Separated link</b-dropdown-item>
                                    </b-dropdown>
                                </div>
                                <div class="col-md-3 col-sm-3 col-3 mb-5">
                                    <b-dropdown variant="icon-only" toggle-tag="a" class="mb-4 mr-2 custom-dropdown">
                                        <template #button-content>
                                            <svg xmlns="http://www.w3.org/2000/svg" style="width:24px;height:24px;" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                        </template>
                                        <b-dropdown-item>Action</b-dropdown-item>
                                        <b-dropdown-item>Another action</b-dropdown-item>
                                        <b-dropdown-item>Something else here</b-dropdown-item>
                                        <b-dropdown-item>Separated link</b-dropdown-item>
                                    </b-dropdown>
                                </div>

                                <div class="col-md-3 col-sm-3 col-3 mb-5">
                                    <b-dropdown variant="icon-only" toggle-tag="a" class="mb-4 mr-2 custom-dropdown">
                                        <template #button-content>
                                            <svg xmlns="http://www.w3.org/2000/svg" style="width:24px;height:24px;" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                        </template>
                                        <b-dropdown-item>Action</b-dropdown-item>
                                        <b-dropdown-item>Another action</b-dropdown-item>
                                        <b-dropdown-item>Something else here</b-dropdown-item>
                                        <b-dropdown-item>Separated link</b-dropdown-item>
                                    </b-dropdown>
                                </div>

                                <div class="col-md-3 col-sm-3 col-3 mb-5">
                                    <b-dropdown variant="icon-only" toggle-tag="a" :right="true" class="mb-4 mr-2 custom-dropdown">
                                        <template #button-content>
                                            <svg xmlns="http://www.w3.org/2000/svg" style="width:24px;height:24px;" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                        </template>
                                        <b-dropdown-item>Action</b-dropdown-item>
                                        <b-dropdown-item>Another action</b-dropdown-item>
                                        <b-dropdown-item>Something else here</b-dropdown-item>
                                        <b-dropdown-item>Separated link</b-dropdown-item>
                                    </b-dropdown>
                                </div>

                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-dropdown variant=&quot;icon-only&quot; toggle-tag=&quot;a&quot; class=&quot;mb-4 mr-2 custom-dropdown&quot;&gt;
    &lt;template #button-content&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; style=&quot;width:24px;height:24px;&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-more-vertical&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;1&quot;&gt;&lt;/circle&gt;&lt;circle cx=&quot;12&quot; cy=&quot;5&quot; r=&quot;1&quot;&gt;&lt;/circle&gt;&lt;circle cx=&quot;12&quot; cy=&quot;19&quot; r=&quot;1&quot;&gt;&lt;/circle&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;b-dropdown-item&gt;Action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Another action&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Something else here&lt;/b-dropdown-item&gt;
    &lt;b-dropdown-item&gt;Separated link&lt;/b-dropdown-item&gt;
&lt;/b-dropdown&gt;
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
        metaInfo: { title: 'Dropdown' },
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
