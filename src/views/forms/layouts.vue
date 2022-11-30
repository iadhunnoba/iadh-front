<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Layouts</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#flStackForm" class="nav-link scrollactive-item">Stack Forms</a>
                    <a href="#flHorizontalForm" class="nav-link scrollactive-item">Horizontal form</a>
                    <a href="#flRegistrationForm" class="nav-link scrollactive-item">Registration Forms</a>
                    <a href="#flLoginForm" class="nav-link scrollactive-item">Login Form</a>
                    <a href="#flFormsGrid" class="nav-link scrollactive-item">Forms Grid</a>
                    <a href="#flInlineForm" class="nav-link scrollactive-item">Inline forms</a>
                    <a href="#flAutoSizing" class="nav-link scrollactive-item">Auto-sizing</a>
                    <a href="#flActionButtons" class="nav-link scrollactive-item">Actions Buttons</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/form" class="text-info">
                            https://bootstrap-vue.org/docs/components/form
                        </a>
                    </div>
                </div>
            </div>

            <div class="row">
                <div id="flStackForm" class="col-lg-12 layout-spacing layout-top-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Stack Forms</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form>
                                <b-form-group>
                                    <b-input type="email" placeholder="Email address"></b-input>
                                    <small id="emailHelp1" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </b-form-group>
                                <b-form-group class="mb-4">
                                    <b-input type="password" placeholder="Password"></b-input>
                                </b-form-group>

                                <b-checkbox class="checkbox-primary">Subscribe to weekly newsletter</b-checkbox>

                                <b-button type="submit" variant="primary" class="mt-4">Submit</b-button>
                            </b-form>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form&gt;
    &lt;b-form-group&gt;
        &lt;b-input type=&quot;email&quot; placeholder=&quot;Email address&quot;&gt;&lt;/b-input&gt;
        &lt;small id=&quot;emailHelp1&quot; class=&quot;form-text text-muted&quot;&gt;We'll never share your email with anyone else.&lt;/small&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;mb-4&quot;&gt;
        &lt;b-input type=&quot;password&quot; placeholder=&quot;Password&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;

    &lt;b-checkbox class=&quot;checkbox-primary&quot;&gt;Subscribe to weekly newsletter&lt;/b-checkbox&gt;

    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot; class=&quot;mt-4&quot;&gt;Submit&lt;/b-button&gt;
&lt;/b-form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="flHorizontalForm" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Horizontal form</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form>
                                <b-form-group class="mb-4" label="Email" label-cols-sm="3" label-cols-xl="2" content-cols-sm="9" content-cols-xl="10">
                                    <b-input type="email" placeholder=""></b-input>
                                </b-form-group>
                                <b-form-group class="mb-4" label="Password" label-cols-sm="3" label-cols-xl="2" content-cols-sm="9" content-cols-xl="10">
                                    <b-input type="password" placeholder=""></b-input>
                                </b-form-group>
                                <b-form-group class="mb-4" label="Choose Segements" label-cols-sm="3" label-cols-xl="2" content-cols-sm="9" content-cols-xl="10">
                                    <b-radio class="radio-classic radio-primary" name="hRadio1">Segements 1</b-radio>
                                    <b-radio class="radio-classic radio-primary" name="hRadio1">Segements 2</b-radio>
                                    <b-radio class="radio-classic radio-primary" name="hRadio1" disabled>Segements 3 ( disabled )</b-radio>
                                </b-form-group>
                                <b-form-group label="Apply" label-cols-sm="3" label-cols-xl="2" content-cols-sm="9" content-cols-xl="10">
                                    <b-checkbox class="checkbox-primary mt-2">Terms Conditions</b-checkbox>
                                </b-form-group>

                                <b-form-group>
                                    <b-button type="submit" variant="primary" class="mt-3">Lets Go</b-button>
                                </b-form-group>
                            </b-form>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;Email&quot; label-cols-sm=&quot;3&quot; label-cols-xl=&quot;2&quot; content-cols-sm=&quot;9&quot; content-cols-xl=&quot;10&quot;&gt;
        &lt;b-input type=&quot;email&quot; placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;Password&quot; label-cols-sm=&quot;3&quot; label-cols-xl=&quot;2&quot; content-cols-sm=&quot;9&quot; content-cols-xl=&quot;10&quot;&gt;
        &lt;b-input type=&quot;password&quot; placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;Choose Segements&quot; label-cols-sm=&quot;3&quot; label-cols-xl=&quot;2&quot; content-cols-sm=&quot;9&quot; content-cols-xl=&quot;10&quot;&gt;
        &lt;b-radio class=&quot;radio-classic radio-primary&quot; name=&quot;hRadio1&quot;&gt;Segements 1&lt;/b-radio&gt;
        &lt;b-radio class=&quot;radio-classic radio-primary&quot; name=&quot;hRadio1&quot;&gt;Segements 2&lt;/b-radio&gt;
        &lt;b-radio class=&quot;radio-classic radio-primary&quot; name=&quot;hRadio1&quot; disabled&gt;Segements 3   ( disabled )&lt;/b-radio&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;Apply&quot; label-cols-sm=&quot;3&quot; label-cols-xl=&quot;2&quot; content-cols-sm=&quot;9&quot; content-cols-xl=&quot;10&quot;&gt;
        &lt;b-checkbox class=&quot;checkbox-primary mt-2&quot;&gt;Terms Conditions&lt;/b-checkbox&gt;
    &lt;/b-form-group&gt;

    &lt;b-form-group&gt;
        &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot; class=&quot;mt-3&quot;&gt;Lets Go&lt;/b-button&gt;
    &lt;/b-form-group&gt;
&lt;/b-form&gt;
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
                <div id="flRegistrationForm" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Registration Forms</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form>
                                <b-form-group class="mb-4">
                                    <b-input type="email" placeholder="Email address *"></b-input>
                                </b-form-group>
                                <b-form-group class="mb-4">
                                    <b-input type="password" placeholder="Password *"></b-input>
                                </b-form-group>
                                <b-form-group>
                                    <b-input type="password" placeholder="Confirm Password *"></b-input>
                                </b-form-group>
                                <small id="emailHelp2" class="form-text text-muted">*Required Fields</small>

                                <b-form-group class="pl-0 mt-3">
                                    <b-checkbox class="checkbox-primary">Subscribe to weekly newsletter</b-checkbox>
                                </b-form-group>
                                <b-button type="submit" variant="primary" class="mt-3">Submit</b-button>
                            </b-form>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form&gt;
    &lt;b-form-group class=&quot;mb-4&quot;&gt;
        &lt;b-input type=&quot;email&quot; placeholder=&quot;Email address *&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;mb-4&quot;&gt;
        &lt;b-input type=&quot;password&quot; placeholder=&quot;Password *&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group&gt;
        &lt;b-input type=&quot;password&quot; placeholder=&quot;Confirm Password *&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;small id=&quot;emailHelp2&quot; class=&quot;form-text text-muted&quot;&gt;*Required Fields&lt;/small&gt;

    &lt;b-form-group class=&quot;pl-0 mt-5&quot;&gt;
        &lt;b-checkbox class=&quot;checkbox-primary&quot;&gt;Subscribe to weekly newsletter&lt;/b-checkbox&gt;
    &lt;/b-form-group&gt;
    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot; class=&quot;mt-3&quot;&gt;Submit&lt;/b-button&gt;
&lt;/b-form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="flLoginForm" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Login Form</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form>
                                <b-form-group class="mb-4">
                                    <b-input placeholder="Full Name *"></b-input>
                                </b-form-group>
                                <b-form-group class="mb-4">
                                    <b-input type="email" placeholder="Email address *"></b-input>
                                </b-form-group>
                                <b-form-group>
                                    <b-input type="password" placeholder="Password *"></b-input>
                                </b-form-group>
                                <small id="emailHelp" class="form-text text-muted">*Required Fields</small>

                                <b-button type="submit" variant="primary" class="mt-4">Submit</b-button>
                            </b-form>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form&gt;
    &lt;b-form-group class=&quot;mb-4&quot;&gt;
        &lt;b-input placeholder=&quot;Full Name *&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;mb-4&quot;&gt;
        &lt;b-input type=&quot;email&quot; placeholder=&quot;Email address *&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group&gt;
        &lt;b-input type=&quot;password&quot; placeholder=&quot;Password *&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;small id=&quot;emailHelp&quot; class=&quot;form-text text-muted&quot;&gt;*Required Fields&lt;/small&gt;

    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot; class=&quot;mt-4&quot;&gt;Submit&lt;/b-button&gt;
&lt;/b-form&gt;
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
                <div id="flFormsGrid" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Forms Grid</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form>
                                <b-form-row class="mb-4">
                                    <b-form-group label="Email" class="col-md-6">
                                        <b-input type="email" placeholder="Email"></b-input>
                                    </b-form-group>
                                    <b-form-group label="Password" class="col-md-6">
                                        <b-input type="password" placeholder="Password"></b-input>
                                    </b-form-group>
                                </b-form-row>
                                <b-form-group class="mb-4" label="Address">
                                    <b-input placeholder="1234 Main St"></b-input>
                                </b-form-group>
                                <b-form-group class="mb-4" label="Address 2">
                                    <b-input placeholder="Apartment, studio, or floor"></b-input>
                                </b-form-group>
                                <b-form-row class="mb-4">
                                    <b-form-group class="col-md-6" label="City">
                                        <b-input></b-input>
                                    </b-form-group>
                                    <b-form-group class="col-md-4" label="State">
                                        <b-select value="">
                                            <b-select-option value="">Choose...</b-select-option>
                                            <b-select-option value="...">...</b-select-option>
                                        </b-select>
                                    </b-form-group>
                                    <b-form-group class="col-md-2" label="Zip">
                                        <b-input></b-input>
                                    </b-form-group>
                                </b-form-row>
                                <b-form-group>
                                    <b-checkbox class="checkbox-primary">Check me out</b-checkbox>
                                </b-form-group>

                                <b-button type="submit" variant="primary" class="mt-3">Sign in</b-button>
                            </b-form>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form&gt;
    &lt;b-form-row class=&quot;mb-4&quot;&gt;
        &lt;b-form-group label=&quot;Email&quot; class=&quot;col-md-6&quot;&gt;
            &lt;b-input type=&quot;email&quot; placeholder=&quot;Email&quot;&gt;&lt;/b-input&gt;
        &lt;/b-form-group&gt;
        &lt;b-form-group label=&quot;Password&quot; class=&quot;col-md-6&quot;&gt;
            &lt;b-input type=&quot;password&quot; placeholder=&quot;Password&quot;&gt;&lt;/b-input&gt;
        &lt;/b-form-group&gt;
    &lt;/b-form-row&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;Address&quot;&gt;
        &lt;b-input placeholder=&quot;1234 Main St&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;Address 2&quot;&gt;
        &lt;b-input placeholder=&quot;Apartment, studio, or floor&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-row class=&quot;mb-4&quot;&gt;
        &lt;b-form-group class=&quot;col-md-6&quot; label=&quot;City&quot;&gt;
            &lt;b-input&gt;&lt;/b-input&gt;
        &lt;/b-form-group&gt;
        &lt;b-form-group class=&quot;col-md-4&quot; label=&quot;State&quot;&gt;
            &lt;b-select value=&quot;&quot;&gt;
                &lt;b-select-option value=&quot;&quot;&gt;Choose...&lt;/b-select-option&gt;
                &lt;b-select-option value=&quot;...&quot;&gt;...&lt;/b-select-option&gt;
            &lt;/b-select&gt;
        &lt;/b-form-group&gt;
        &lt;b-form-group class=&quot;col-md-2&quot; label=&quot;Zip&quot;&gt;
            &lt;b-input&gt;&lt;/b-input&gt;
        &lt;/b-form-group&gt;
    &lt;/b-form-row&gt;
    &lt;b-form-group&gt;
        &lt;b-checkbox class=&quot;checkbox-primary&quot;&gt;Check me out&lt;/b-checkbox&gt;
    &lt;/b-form-group&gt;

    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot; class=&quot;mt-3&quot;&gt;Sign in&lt;/b-button&gt;
&lt;/b-form&gt;
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
                <div id="flInlineForm" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Inline forms</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form inline class="justify-content-center">
                                <b-input class="mb-2 mr-sm-2" placeholder="Jane Doe"></b-input>

                                <b-input-group class="mb-2 mr-sm-2">
                                    <b-input-group-prepend>
                                        <b-input-group-text>@</b-input-group-text>
                                    </b-input-group-prepend>
                                    <b-input placeholder="Username"></b-input>
                                </b-input-group>

                                <div class="form-check pl-0 mb-2 mr-sm-2">
                                    <b-checkbox variant="info" class="checkbox-primary">Remember me</b-checkbox>
                                </div>
                                <b-button type="submit" variant="primary" class="mb-2">Submit</b-button>
                            </b-form>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form inline class=&quot;justify-content-center&quot;&gt;
    &lt;b-input class=&quot;mb-2 mr-sm-2&quot; placeholder=&quot;Jane Doe&quot;&gt;&lt;/b-input&gt;

    &lt;b-input-group class=&quot;mb-2 mr-sm-2&quot;&gt;
        &lt;b-input-group-prepend&gt;
            &lt;b-input-group-text&gt;@&lt;/b-input-group-text&gt;
        &lt;/b-input-group-prepend&gt;
        &lt;b-input placeholder=&quot;Username&quot;&gt;&lt;/b-input&gt;
    &lt;/b-input-group&gt;

    &lt;div class=&quot;form-check pl-0 mb-2 mr-sm-2&quot;&gt;
        &lt;b-checkbox variant=&quot;info&quot; class=&quot;checkbox-primary&quot;&gt;Remember me&lt;/b-checkbox&gt;
    &lt;/div&gt;
    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot; class=&quot;mb-2&quot;&gt;Submit&lt;/b-button&gt;
&lt;/b-form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="flAutoSizing" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Auto-sizing</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form>
                                <b-form-row class="align-items-center justify-content-center">
                                    <div class="col-auto">
                                        <b-input class="mb-2" placeholder="Jane Doe"></b-input>
                                    </div>
                                    <div class="col-auto">
                                        <b-input-group class="mb-2">
                                            <b-input-group-prepend>
                                                <b-input-group-text>@</b-input-group-text>
                                            </b-input-group-prepend>
                                            <b-input placeholder="Username"></b-input>
                                        </b-input-group>
                                    </div>
                                    <div class="col-auto">
                                        <div class="form-check pl-0 mb-2 pl-0">
                                            <b-checkbox variant="info" class="checkbox-primary">Remember me</b-checkbox>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <b-button type="submit" variant="primary" class="mb-2">Submit</b-button>
                                    </div>
                                </b-form-row>
                            </b-form>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form&gt;
    &lt;b-form-row class=&quot;align-items-center justify-content-center&quot;&gt;
        &lt;div class=&quot;col-auto&quot;&gt;
            &lt;b-input class=&quot;mb-2&quot; placeholder=&quot;Jane Doe&quot;&gt;&lt;/b-input&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-auto&quot;&gt;
            &lt;b-input-group class=&quot;mb-2&quot;&gt;
                &lt;b-input-group-prepend&gt;
                    &lt;b-input-group-text&gt;@&lt;/b-input-group-text&gt;
                &lt;/b-input-group-prepend&gt;
                &lt;b-input placeholder=&quot;Username&quot;&gt;&lt;/b-input&gt;
            &lt;/b-input-group&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-auto&quot;&gt;
            &lt;div class=&quot;form-check pl-0 mb-2 pl-0&quot;&gt;
                &lt;b-checkbox variant=&quot;info&quot; class=&quot;checkbox-primary&quot;&gt;Remember me&lt;/b-checkbox&gt;
            &lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-auto&quot;&gt;
            &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot; class=&quot;mb-2&quot;&gt;Submit&lt;/b-button&gt;
        &lt;/div&gt;
    &lt;/b-form-row&gt;
&lt;/b-form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row layout-spacing">
                <div id="flActionButtons" class="col-lg-12">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Actions Buttons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form class="form-vertical">
                                <b-form-group class="mb-4" label="First Name:">
                                    <b-input></b-input>
                                </b-form-group>
                                <b-form-group class="mb-4" label="Email:">
                                    <b-input-group>
                                        <b-input-group-prepend>
                                            <b-input-group-text>@</b-input-group-text>
                                        </b-input-group-prepend>
                                        <b-input type="email"></b-input>
                                    </b-input-group>
                                </b-form-group>
                                <b-form-group class="mb-4" label="Website:">
                                    <b-input value="https://"></b-input>
                                </b-form-group>
                                <b-form-group class="mb-4" label="Password:">
                                    <b-input-group>
                                        <b-input type="password"></b-input>
                                        <b-input-group-addon><i class="icon-user"></i></b-input-group-addon>
                                    </b-input-group>
                                </b-form-group>
                                <b-form-group class="mb-4" label="Confirm Password:">
                                    <b-input-group>
                                        <b-input type="password"></b-input>
                                        <b-input-group-addon><i class="icon-user"></i></b-input-group-addon>
                                    </b-input-group>
                                </b-form-group>

                                <b-button type="submit" variant="primary" class="mt-3">Submit</b-button>
                            </b-form>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code8')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form class=&quot;form-vertical&quot;&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;First Name:&quot;&gt;
        &lt;b-input&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;Email:&quot;&gt;
        &lt;b-input-group&gt;
            &lt;b-input-group-prepend&gt;
                &lt;b-input-group-text&gt;@&lt;/b-input-group-text&gt;
            &lt;/b-input-group-prepend&gt;
            &lt;b-input type=&quot;email&quot;&gt;&lt;/b-input&gt;
        &lt;/b-input-group&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;Website:&quot;&gt;
        &lt;b-input value=&quot;https://&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;Password:&quot;&gt;
        &lt;b-input-group&gt;
            &lt;b-input type=&quot;password&quot;&gt;&lt;/b-input&gt;
            &lt;b-input-group-addon&gt;&lt;i class=&quot;icon-user&quot;&gt;&lt;/i&gt;&lt;/b-input-group-addon&gt;
        &lt;/b-input-group&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;Confirm Password:&quot;&gt;
        &lt;b-input-group&gt;
            &lt;b-input type=&quot;password&quot;&gt;&lt;/b-input&gt;
            &lt;b-input-group-addon&gt;&lt;i class=&quot;icon-user&quot;&gt;&lt;/i&gt;&lt;/b-input-group-addon&gt;
        &lt;/b-input-group&gt;
    &lt;/b-form-group&gt;

    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot; class=&quot;mt-3&quot;&gt;Submit&lt;/b-button&gt;
&lt;/b-form&gt;
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
        metaInfo: { title: 'Form Layouts' },
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
