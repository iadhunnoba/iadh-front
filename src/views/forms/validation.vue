<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Validation</span></li>
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
                    <a href="#email" class="nav-link scrollactive-item">Email</a>
                    <a href="#select" class="nav-link scrollactive-item">Select</a>
                    <a href="#custom_styles" class="nav-link scrollactive-item">Custom Styles</a>
                    <a href="#browser_default" class="nav-link scrollactive-item">Browser Default</a>
                    <a href="#tooltips" class="nav-link scrollactive-item">Tooltips</a>
                </scrollactive>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        Documentation: <a target="_blank" href="https://bootstrap-vue.org/docs/components/form" class="text-info">
                            https://bootstrap-vue.org/docs/components/form
                        </a>
                    </div>
                </div>
            </div>


            <div class="row layout-top-spacing">

                <div id="basic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form class="simple-example" novalidate @submit.stop.prevent="submit_form1">
                                <b-form-row>
                                    <div class="col-md-12 mb-4">
                                        <label for="fullName">Full Name</label>
                                        <b-input id="fullName" v-model="form1.name" placeholder="" :class="[is_submit_form1 ? (form1.name ? 'is-valid' : 'is-invalid') : '']"></b-input>
                                        <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                                        <b-form-invalid-feedback :class="{'d-block' : is_submit_form1 && !form1.name}">Please fill the name</b-form-invalid-feedback>
                                    </div>
                                </b-form-row>
                                <b-button type="submit" variant="primary" class="mt-2">Submit form</b-button>
                            </b-form>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form class=&quot;simple-example&quot; novalidate @submit.stop.prevent=&quot;submit_form1&quot;&gt;
    &lt;b-form-row&gt;
        &lt;div class=&quot;col-md-12 mb-4&quot;&gt;
            &lt;label for=&quot;fullName&quot;&gt;Full Name&lt;/label&gt;
            &lt;b-input id=&quot;fullName&quot; v-model=&quot;form1.name&quot; placeholder=&quot;&quot; :class=&quot;[is_submit_form1 ? (form1.name ? 'is-valid' : 'is-invalid') : '']&quot;&gt;&lt;/b-input&gt;
            &lt;b-form-valid-feedback&gt;Looks good!&lt;/b-form-valid-feedback&gt;
            &lt;b-form-invalid-feedback :class=&quot;{'d-block' : is_submit_form1 &amp;&amp; !form1.name}&quot;&gt;Please fill the name&lt;/b-form-invalid-feedback&gt;
        &lt;/div&gt;
    &lt;/b-form-row&gt;
    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot; class=&quot;mt-2&quot;&gt;Submit form&lt;/b-button&gt;
&lt;/b-form&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="email" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Email</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form class="email" novalidate @submit.stop.prevent="submit_form2">
                                <b-form-row>
                                    <div class="col-md-12 mb-4">
                                        <label for="e_mail">Email</label>
                                        <b-input type="email" id="e_mail" v-model="form2.email" :class="[is_submit_form2 ? (form2.email && email_validate(form2.email) ? 'is-valid' : 'is-invalid') : '']"></b-input>
                                        <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                                        <b-form-invalid-feedback :class="{'d-block' : is_submit_form2 && !form2.email}">Please fill the Email</b-form-invalid-feedback>
                                    </div>
                                </b-form-row>
                                <b-button variant="primary" class="mb-4 mt-2" type="submit">Submit form</b-button>
                            </b-form>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form class=&quot;email&quot; novalidate @submit.stop.prevent=&quot;submit_form2&quot;&gt;
    &lt;b-form-row&gt;
        &lt;div class=&quot;col-md-12 mb-4&quot;&gt;
            &lt;label for=&quot;e_mail&quot;&gt;Email&lt;/label&gt;
            &lt;b-input type=&quot;email&quot; id=&quot;e_mail&quot; v-model=&quot;form2.email&quot; :class=&quot;[is_submit_form2 ? (form2.email &amp;&amp; email_validate(form2.email) ? 'is-valid' : 'is-invalid') : '']&quot;&gt;&lt;/b-input&gt;
            &lt;b-form-valid-feedback&gt;Looks good!&lt;/b-form-valid-feedback&gt;
            &lt;b-form-invalid-feedback :class=&quot;{'d-block' : is_submit_form2 &amp;&amp; !form2.email}&quot;&gt;Please fill the Email&lt;/b-form-invalid-feedback&gt;
        &lt;/div&gt;
    &lt;/b-form-row&gt;
    &lt;b-button variant=&quot;primary&quot; class=&quot;mb-4 mt-2&quot; type=&quot;submit&quot;&gt;Submit form&lt;/b-button&gt;
&lt;/b-form&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="select" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Select</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form class="select mt-4" novalidate @submit.stop.prevent="submit_form3">
                                <b-form-row>
                                    <div class="col-md-12">
                                        <b-form-group class="mb-4">
                                            <b-select v-model="form3.select" :class="[is_submit_form3 ? form3.select ? 'is-valid' : 'is-invalid' : '']">
                                                <b-select-option value="">Open this select menu</b-select-option>
                                                <b-select-option value="1">One</b-select-option>
                                                <b-select-option value="2">Two</b-select-option>
                                                <b-select-option value="3">Three</b-select-option>
                                            </b-select>
                                            <b-form-valid-feedback>Example valid custom select feedback</b-form-valid-feedback>
                                            <b-form-invalid-feedback :class="{'d-block' : is_submit_form3 && !form3.select}">Please Select the field</b-form-invalid-feedback>
                                        </b-form-group>
                                    </div>
                                </b-form-row>
                                <b-button variant="primary" class="mt-2" type="submit">Submit form</b-button>
                            </b-form>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form class=&quot;select mt-4&quot; novalidate @submit.stop.prevent=&quot;submit_form3&quot;&gt;
    &lt;b-form-row&gt;
        &lt;div class=&quot;col-md-12&quot;&gt;
            &lt;b-form-group class=&quot;mb-4&quot;&gt;
                &lt;b-select v-model=&quot;form3.select&quot; :class=&quot;[is_submit_form3 ? form3.select ? 'is-valid' : 'is-invalid' : '']&quot;&gt;
                    &lt;b-select-option value=&quot;&quot;&gt;Open this select menu&lt;/b-select-option&gt;
                    &lt;b-select-option value=&quot;1&quot;&gt;One&lt;/b-select-option&gt;
                    &lt;b-select-option value=&quot;2&quot;&gt;Two&lt;/b-select-option&gt;
                    &lt;b-select-option value=&quot;3&quot;&gt;Three&lt;/b-select-option&gt;
                &lt;/b-select&gt;
                &lt;b-form-valid-feedback&gt;Example valid custom select feedback&lt;/b-form-valid-feedback&gt;
                &lt;b-form-invalid-feedback :class=&quot;{'d-block' : is_submit_form2 &amp;&amp; !form2.email}&quot;&gt;Please Select the field&lt;/b-form-invalid-feedback&gt;
            &lt;/b-form-group&gt;
        &lt;/div&gt;
    &lt;/b-form-row&gt;
    &lt;b-button variant=&quot;primary&quot; class=&quot;mt-2&quot; type=&quot;submit&quot;&gt;Submit form&lt;/b-button&gt;
&lt;/b-form&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div id="custom_styles" class="col-lg-12 layout-spacing col-md-12">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom styles</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form class="needs-validation" novalidate @submit.stop.prevent="submit_form4">
                                <b-form-row>
                                    <div class="col-md-4 mb-4">
                                        <label for="validationCustom01">First name</label>
                                        <b-input id="validationCustom01" v-model="form4.first_name" :class="[is_submit_form4 ? (form4.first_name ? 'is-valid' : 'is-invalid') : '']" placeholder="First name"></b-input>
                                        <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                                        <b-form-invalid-feedback :class="{'d-block' : is_submit_form4 && !form4.first_name}">Please fill the first name</b-form-invalid-feedback>
                                    </div>
                                    <div class="col-md-4 mb-4">
                                        <label for="validationCustom02">Last name</label>
                                        <b-input id="validationCustom02" v-model="form4.last_name" :class="[is_submit_form4 ? (form4.last_name ? 'is-valid' : 'is-invalid') : '']" placeholder="Last name"></b-input>
                                        <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                                        <b-form-invalid-feedback :class="{'d-block' : is_submit_form4 && !form4.last_name}">Please fill the last name</b-form-invalid-feedback>
                                    </div>
                                    <div class="col-md-4 mb-4">
                                        <label for="validationCustomUsername">Username</label>
                                        <b-input-group>
                                            <b-input-group-prepend>
                                                <b-input-group-text>@</b-input-group-text>
                                            </b-input-group-prepend>
                                            <b-input id="validationCustomUsername" v-model="form4.username" :class="[is_submit_form4 ? (form4.username ? 'is-valid' : 'is-invalid') : '']" placeholder="Username"></b-input>

                                            <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                                            <b-form-invalid-feedback :class="{'d-block' : is_submit_form4 && !form4.username}">Please choose a username.</b-form-invalid-feedback>
                                        </b-input-group>
                                    </div>
                                </b-form-row>
                                <b-form-row>
                                    <div class="col-md-6 mb-4">
                                        <label for="validationCustom03">City</label>
                                        <b-input id="validationCustom03" v-model="form4.city" :class="[is_submit_form4 ? (form4.city ? 'is-valid' : 'is-invalid') : '']" placeholder="City"></b-input>

                                        <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                                        <b-form-invalid-feedback :class="{'d-block' : is_submit_form4 && !form4.city}">Please provide a valid city.</b-form-invalid-feedback>
                                    </div>
                                    <div class="col-md-3 mb-4">
                                        <label for="validationCustom04">State</label>
                                        <b-input id="validationCustom04" v-model="form4.state" :class="[is_submit_form4 ? (form4.state ? 'is-valid' : 'is-invalid') : '']" placeholder="State"></b-input>
                                        <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                                        <b-form-invalid-feedback :class="{'d-block' : is_submit_form4 && !form4.state}">Please provide a valid state.</b-form-invalid-feedback>
                                    </div>
                                    <div class="col-md-3 mb-4">
                                        <label for="validationCustom05">Zip</label>
                                        <b-input id="validationCustom05" v-model="form4.zip" :class="[is_submit_form4 ? (form4.zip ? 'is-valid' : 'is-invalid') : '']" placeholder="Zip"></b-input>
                                        <b-form-valid-feedback>Looks good!</b-form-valid-feedback>
                                        <b-form-invalid-feedback :class="{'d-block' : is_submit_form4 && !form4.zip}">Please provide a valid zip.</b-form-invalid-feedback>
                                    </div>
                                </b-form-row>
                                <b-form-group class="mb-4">
                                    <div class="form-check pl-0">
                                        <b-checkbox class="checkbox-primary" v-model="form4.is_terms">
                                            Agree to terms and conditions
                                            <b-form-invalid-feedback :class="{'d-block' : is_submit_form4 && !form4.is_terms}">You must agree before submitting.</b-form-invalid-feedback>
                                        </b-checkbox>
                                    </div>
                                </b-form-group>
                                <b-button type="submit" variant="primary" class="mt-2">Submit form</b-button>
                            </b-form>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form class=&quot;needs-validation&quot; novalidate @submit.stop.prevent=&quot;submit_form4&quot;&gt;
    &lt;b-form-row&gt;
        &lt;div class=&quot;col-md-4 mb-4&quot;&gt;
            &lt;label for=&quot;validationCustom01&quot;&gt;First name&lt;/label&gt;
            &lt;b-input id=&quot;validationCustom01&quot; v-model=&quot;form4.first_name&quot; :class=&quot;[is_submit_form4 ? (form4.first_name ? 'is-valid' : 'is-invalid') : '']&quot; placeholder=&quot;First name&quot;&gt;&lt;/b-input&gt;
            &lt;b-form-valid-feedback&gt;Looks good!&lt;/b-form-valid-feedback&gt;
            &lt;b-form-invalid-feedback :class=&quot;{'d-block' : is_submit_form4 &amp;&amp; !form4.first_name}&quot;&gt;Please fill the first name&lt;/b-form-invalid-feedback&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-4 mb-4&quot;&gt;
            &lt;label for=&quot;validationCustom02&quot;&gt;Last name&lt;/label&gt;
            &lt;b-input id=&quot;validationCustom02&quot; v-model=&quot;form4.last_name&quot; :class=&quot;[is_submit_form4 ? (form4.last_name ? 'is-valid' : 'is-invalid') : '']&quot; placeholder=&quot;Last name&quot;&gt;&lt;/b-input&gt;
            &lt;b-form-valid-feedback&gt;Looks good!&lt;/b-form-valid-feedback&gt;
            &lt;b-form-invalid-feedback :class=&quot;{'d-block' : is_submit_form4 &amp;&amp; !form4.last_name}&quot;&gt;Please fill the last name&lt;/b-form-invalid-feedback&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-4 mb-4&quot;&gt;
            &lt;label for=&quot;validationCustomUsername&quot;&gt;Username&lt;/label&gt;
            &lt;b-input-group&gt;
                &lt;b-input-group-prepend&gt;
                    &lt;b-input-group-text&gt;@&lt;/b-input-group-text&gt;
                &lt;/b-input-group-prepend&gt;
                &lt;b-input id=&quot;validationCustomUsername&quot; v-model=&quot;form4.username&quot; :class=&quot;[is_submit_form4 ? (form4.username ? 'is-valid' : 'is-invalid') : '']&quot; placeholder=&quot;Username&quot;&gt;&lt;/b-input&gt;

                &lt;b-form-valid-feedback&gt;Looks good!&lt;/b-form-valid-feedback&gt;
                &lt;b-form-invalid-feedback :class=&quot;{'d-block' : is_submit_form4 &amp;&amp; !form4.username}&quot;&gt;Please choose a username.&lt;/b-form-invalid-feedback&gt;
            &lt;/b-input-group&gt;
        &lt;/div&gt;
    &lt;/b-form-row&gt;
    &lt;b-form-row&gt;
        &lt;div class=&quot;col-md-6 mb-4&quot;&gt;
            &lt;label for=&quot;validationCustom03&quot;&gt;City&lt;/label&gt;
            &lt;b-input id=&quot;validationCustom03&quot; v-model=&quot;form4.city&quot; :class=&quot;[is_submit_form4 ? (form4.city ? 'is-valid' : 'is-invalid') : '']&quot; placeholder=&quot;City&quot;&gt;&lt;/b-input&gt;

            &lt;b-form-valid-feedback&gt;Looks good!&lt;/b-form-valid-feedback&gt;
            &lt;b-form-invalid-feedback :class=&quot;{'d-block' : is_submit_form4 &amp;&amp; !form4.city}&quot;&gt;Please provide a valid city.&lt;/b-form-invalid-feedback&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-3 mb-4&quot;&gt;
            &lt;label for=&quot;validationCustom04&quot;&gt;State&lt;/label&gt;
            &lt;b-input id=&quot;validationCustom04&quot; v-model=&quot;form4.state&quot; :class=&quot;[is_submit_form4 ? (form4.state ? 'is-valid' : 'is-invalid') : '']&quot; placeholder=&quot;State&quot;&gt;&lt;/b-input&gt;
            &lt;b-form-valid-feedback&gt;Looks good!&lt;/b-form-valid-feedback&gt;
            &lt;b-form-invalid-feedback :class=&quot;{'d-block' : is_submit_form4 &amp;&amp; !form4.state}&quot;&gt;Please provide a valid state.&lt;/b-form-invalid-feedback&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-3 mb-4&quot;&gt;
            &lt;label for=&quot;validationCustom05&quot;&gt;Zip&lt;/label&gt;
            &lt;b-input id=&quot;validationCustom05&quot; v-model=&quot;form4.zip&quot; :class=&quot;[is_submit_form4 ? (form4.zip ? 'is-valid' : 'is-invalid') : '']&quot; placeholder=&quot;Zip&quot;&gt;&lt;/b-input&gt;
            &lt;b-form-valid-feedback&gt;Looks good!&lt;/b-form-valid-feedback&gt;
            &lt;b-form-invalid-feedback :class=&quot;{'d-block' : is_submit_form4 &amp;&amp; !form4.zip}&quot;&gt;Please provide a valid zip.&lt;/b-form-invalid-feedback&gt;
        &lt;/div&gt;
    &lt;/b-form-row&gt;
    &lt;b-form-group class=&quot;mb-4&quot;&gt;
        &lt;div class=&quot;form-check pl-0&quot;&gt;
            &lt;b-checkbox class=&quot;checkbox-primary&quot; v-model=&quot;form4.is_terms&quot;&gt;
                Agree to terms and conditions
                &lt;b-form-invalid-feedback :class=&quot;{'d-block' : is_submit_form4 &amp;&amp; !form4.is_terms}&quot;&gt;You must agree before submitting.&lt;/b-form-invalid-feedback&gt;
            &lt;/b-checkbox&gt;
        &lt;/div&gt;
    &lt;/b-form-group&gt;
    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot; class=&quot;mt-2&quot;&gt;Submit form&lt;/b-button&gt;
&lt;/b-form&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div id="browser_default" class="col-lg-12 layout-spacing col-md-12">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Browser defaults</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form @submit.stop.prevent="submit_form5">
                                <b-form-row>
                                    <div class="col-md-4 mb-4">
                                        <label for="validationDefault01">First name</label>
                                        <b-input id="validationDefault01" v-model="form5.first_name" placeholder="First name" required></b-input>
                                    </div>
                                    <div class="col-md-4 mb-4">
                                        <label for="validationDefault02">Last name</label>
                                        <b-input id="validationDefault02" v-model="form5.last_name" placeholder="Last name" required></b-input>
                                    </div>
                                    <div class="col-md-4 mb-4">
                                        <label for="validationDefaultUsername">Username</label>
                                        <b-input-group>
                                            <b-input-group-prepend>
                                                <b-input-group-text>@</b-input-group-text>
                                            </b-input-group-prepend>
                                            <b-input id="validationDefaultUsername" v-model="form5.username" placeholder="Username" required></b-input>
                                        </b-input-group>
                                    </div>
                                </b-form-row>
                                <b-form-row>
                                    <div class="col-md-6 mb-4">
                                        <label for="validationDefault03">City</label>
                                        <b-input id="validationDefault03" v-model="form5.city" placeholder="City" required></b-input>
                                    </div>
                                    <div class="col-md-3 mb-4">
                                        <label for="validationDefault04">State</label>
                                        <b-input id="validationDefault04" v-model="form5.state" placeholder="State" required></b-input>
                                    </div>
                                    <div class="col-md-3 mb-4">
                                        <label for="validationDefault05">Zip</label>
                                        <b-input id="validationDefault05" v-model="form5.zip" placeholder="Zip" required></b-input>
                                    </div>
                                </b-form-row>
                                <b-form-group class="mb-4">
                                    <b-checkbox class="checkbox-primary" v-model="form5.is_terms" :required="true">
                                        Agree to terms and conditions
                                    </b-checkbox>

                                </b-form-group>
                                <b-button type="submit" variant="primary" class="mt-2">Submit form</b-button>
                            </b-form>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form @submit.stop.prevent=&quot;submit_form5&quot;&gt;
    &lt;b-form-row&gt;
        &lt;div class=&quot;col-md-4 mb-4&quot;&gt;
            &lt;label for=&quot;validationDefault01&quot;&gt;First name&lt;/label&gt;
            &lt;b-input id=&quot;validationDefault01&quot; v-model=&quot;form5.first_name&quot; placeholder=&quot;First name&quot; required&gt;&lt;/b-input&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-4 mb-4&quot;&gt;
            &lt;label for=&quot;validationDefault02&quot;&gt;Last name&lt;/label&gt;
            &lt;b-input id=&quot;validationDefault02&quot; v-model=&quot;form5.last_name&quot; placeholder=&quot;Last name&quot; required&gt;&lt;/b-input&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-4 mb-4&quot;&gt;
            &lt;label for=&quot;validationDefaultUsername&quot;&gt;Username&lt;/label&gt;
            &lt;b-input-group&gt;
                &lt;b-input-group-prepend&gt;
                    &lt;b-input-group-text&gt;@&lt;/b-input-group-text&gt;
                &lt;/b-input-group-prepend&gt;
                &lt;b-input id=&quot;validationDefaultUsername&quot; v-model=&quot;form5.username&quot; placeholder=&quot;Username&quot; required&gt;&lt;/b-input&gt;
            &lt;/b-input-group&gt;
        &lt;/div&gt;
    &lt;/b-form-row&gt;
    &lt;b-form-row&gt;
        &lt;div class=&quot;col-md-6 mb-4&quot;&gt;
            &lt;label for=&quot;validationDefault03&quot;&gt;City&lt;/label&gt;
            &lt;b-input id=&quot;validationDefault03&quot; v-model=&quot;form5.city&quot; placeholder=&quot;City&quot; required&gt;&lt;/b-input&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-3 mb-4&quot;&gt;
            &lt;label for=&quot;validationDefault04&quot;&gt;State&lt;/label&gt;
            &lt;b-input id=&quot;validationDefault04&quot; v-model=&quot;form5.state&quot; placeholder=&quot;State&quot; required&gt;&lt;/b-input&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-3 mb-4&quot;&gt;
            &lt;label for=&quot;validationDefault05&quot;&gt;Zip&lt;/label&gt;
            &lt;b-input id=&quot;validationDefault05&quot; v-model=&quot;form5.zip&quot; placeholder=&quot;Zip&quot; required&gt;&lt;/b-input&gt;
        &lt;/div&gt;
    &lt;/b-form-row&gt;
    &lt;b-form-group class=&quot;mb-4&quot;&gt;
        &lt;b-checkbox class=&quot;checkbox-primary&quot; v-model=&quot;form5.is_terms&quot; :required=&quot;true&quot;&gt;
            Agree to terms and conditions
        &lt;/b-checkbox&gt;

    &lt;/b-form-group&gt;
    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot; class=&quot;mt-2&quot;&gt;Submit form&lt;/b-button&gt;
&lt;/b-form&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div id="tooltips" class="col-lg-12 layout-spacing col-md-12">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Tooltips</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form class="needs-validation" novalidate @submit.stop.prevent="submit_form6">
                                <b-form-row>
                                    <div class="col-md-4 mb-5">
                                        <label for="validationCustom01">First name</label>
                                        <b-input id="validationCustom01" v-model="form6.first_name" :class="[is_submit_form6 ? (form6.first_name ? 'is-valid' : 'is-invalid') : '']" placeholder="First name"></b-input>
                                        <div class="valid-tooltip">Looks good!</div>
                                        <div class="invalid-tooltip" :class="{'d-block' : is_submit_form6 && !form6.first_name}">Please fill the first name</div>
                                    </div>
                                    <div class="col-md-4 mb-5">
                                        <label for="validationCustom02">Last name</label>
                                        <b-input id="validationCustom02" v-model="form6.last_name" :class="[is_submit_form6 ? (form6.last_name ? 'is-valid' : 'is-invalid') : '']" placeholder="Last name"></b-input>
                                        <div class="valid-tooltip">Looks good!</div>
                                        <div class="invalid-tooltip" :class="{'d-block' : is_submit_form6 && !form6.last_name}">Please fill the last name</div>
                                    </div>
                                    <div class="col-md-4 mb-5">
                                        <label for="validationCustomUsername">Username</label>
                                        <b-input-group>
                                            <b-input-group-prepend>
                                                <b-input-group-text>@</b-input-group-text>
                                            </b-input-group-prepend>
                                            <b-input id="validationCustomUsername" v-model="form6.username" :class="[is_submit_form6 ? (form6.username ? 'is-valid' : 'is-invalid') : '']" placeholder="Username"></b-input>

                                            <div class="invalid-tooltip" :class="{'d-block' : is_submit_form6 && !form6.username}">Please choose a username.</div>
                                        </b-input-group>
                                    </div>
                                </b-form-row>
                                <b-form-row>
                                    <div class="col-md-6 mb-5">
                                        <label for="validationCustom03">City</label>
                                        <b-input id="validationCustom03" v-model="form6.city" :class="[is_submit_form6 ? (form6.city ? 'is-valid' : 'is-invalid') : '']" placeholder="City"></b-input>

                                        <div class="invalid-tooltip" :class="{'d-block' : is_submit_form6 && !form6.city}">Please provide a valid city.</div>
                                    </div>
                                    <div class="col-md-3 mb-5">
                                        <label for="validationCustom04">State</label>
                                        <b-input id="validationCustom04" v-model="form6.state" :class="[is_submit_form6 ? (form6.state ? 'is-valid' : 'is-invalid') : '']" placeholder="State"></b-input>
                                        <div class="invalid-tooltip" :class="{'d-block' : is_submit_form6 && !form6.state}">Please provide a valid state.</div>
                                    </div>
                                    <div class="col-md-3 mb-5">
                                        <label for="validationCustom05">Zip</label>
                                        <b-input id="validationCustom05" v-model="form6.zip" :class="[is_submit_form6 ? (form6.zip ? 'is-valid' : 'is-invalid') : '']" placeholder="Zip"></b-input>
                                        <div class="invalid-tooltip" :class="{'d-block' : is_submit_form6 && !form6.zip}">Please provide a valid zip.</div>
                                    </div>
                                </b-form-row>
                                <b-form-group class="mb-5">
                                    <div class="form-check pl-0">
                                        <b-checkbox class="checkbox-primary" v-model="form6.is_terms">
                                            Agree to terms and conditions
                                            <div class="invalid-tooltip" :class="{'d-block' : is_submit_form6 && !form6.is_terms}">You must agree before submitting.</div>
                                        </b-checkbox>
                                    </div>
                                </b-form-group>
                                <b-button type="submit" variant="primary" class="mt-2">Submit form</b-button>
                            </b-form>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form class=&quot;needs-validation&quot; novalidate @submit.stop.prevent=&quot;submit_form6&quot;&gt;
    &lt;b-form-row&gt;
        &lt;div class=&quot;col-md-4 mb-5&quot;&gt;
            &lt;label for=&quot;validationCustom01&quot;&gt;First name&lt;/label&gt;
            &lt;b-input id=&quot;validationCustom01&quot; v-model=&quot;form6.first_name&quot; :class=&quot;[is_submit_form6 ? (form6.first_name ? 'is-valid' : 'is-invalid') : '']&quot; placeholder=&quot;First name&quot;&gt;&lt;/b-input&gt;
            &lt;div class=&quot;valid-tooltip&quot;&gt;Looks good!&lt;/div&gt;
            &lt;div class=&quot;invalid-tooltip&quot; :class=&quot;{'d-block' : is_submit_form6 &amp;&amp; !form6.first_name}&quot;&gt;Please fill the first name&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-4 mb-5&quot;&gt;
            &lt;label for=&quot;validationCustom02&quot;&gt;Last name&lt;/label&gt;
            &lt;b-input id=&quot;validationCustom02&quot; v-model=&quot;form6.last_name&quot; :class=&quot;[is_submit_form6 ? (form6.last_name ? 'is-valid' : 'is-invalid') : '']&quot; placeholder=&quot;Last name&quot;&gt;&lt;/b-input&gt;
            &lt;div class=&quot;valid-tooltip&quot;&gt;Looks good!&lt;/div&gt;
            &lt;div class=&quot;invalid-tooltip&quot; :class=&quot;{'d-block' : is_submit_form6 &amp;&amp; !form6.last_name}&quot;&gt;Please fill the last name&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-4 mb-5&quot;&gt;
            &lt;label for=&quot;validationCustomUsername&quot;&gt;Username&lt;/label&gt;
            &lt;b-input-group&gt;
                &lt;b-input-group-prepend&gt;
                    &lt;b-input-group-text&gt;@&lt;/b-input-group-text&gt;
                &lt;/b-input-group-prepend&gt;
                &lt;b-input id=&quot;validationCustomUsername&quot; v-model=&quot;form6.username&quot; :class=&quot;[is_submit_form6 ? (form6.username ? 'is-valid' : 'is-invalid') : '']&quot; placeholder=&quot;Username&quot;&gt;&lt;/b-input&gt;

                &lt;div class=&quot;invalid-tooltip&quot; :class=&quot;{'d-block' : is_submit_form6 &amp;&amp; !form6.username}&quot;&gt;Please choose a username.&lt;/div&gt;
            &lt;/b-input-group&gt;
        &lt;/div&gt;
    &lt;/b-form-row&gt;
    &lt;b-form-row&gt;
        &lt;div class=&quot;col-md-6 mb-5&quot;&gt;
            &lt;label for=&quot;validationCustom03&quot;&gt;City&lt;/label&gt;
            &lt;b-input id=&quot;validationCustom03&quot; v-model=&quot;form6.city&quot; :class=&quot;[is_submit_form6 ? (form6.city ? 'is-valid' : 'is-invalid') : '']&quot; placeholder=&quot;City&quot;&gt;&lt;/b-input&gt;

            &lt;div class=&quot;invalid-tooltip&quot; :class=&quot;{'d-block' : is_submit_form6 &amp;&amp; !form6.city}&quot;&gt;Please provide a valid city.&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-3 mb-5&quot;&gt;
            &lt;label for=&quot;validationCustom04&quot;&gt;State&lt;/label&gt;
            &lt;b-input id=&quot;validationCustom04&quot; v-model=&quot;form6.state&quot; :class=&quot;[is_submit_form6 ? (form6.state ? 'is-valid' : 'is-invalid') : '']&quot; placeholder=&quot;State&quot;&gt;&lt;/b-input&gt;
            &lt;div class=&quot;invalid-tooltip&quot; :class=&quot;{'d-block' : is_submit_form6 &amp;&amp; !form6.state}&quot;&gt;Please provide a valid state.&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-3 mb-5&quot;&gt;
            &lt;label for=&quot;validationCustom05&quot;&gt;Zip&lt;/label&gt;
            &lt;b-input id=&quot;validationCustom05&quot; v-model=&quot;form6.zip&quot; :class=&quot;[is_submit_form6 ? (form6.zip ? 'is-valid' : 'is-invalid') : '']&quot; placeholder=&quot;Zip&quot;&gt;&lt;/b-input&gt;
            &lt;div class=&quot;invalid-tooltip&quot; :class=&quot;{'d-block' : is_submit_form6 &amp;&amp; !form6.zip}&quot;&gt;Please provide a valid zip.&lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-form-row&gt;
    &lt;b-form-group class=&quot;mb-5&quot;&gt;
        &lt;div class=&quot;form-check pl-0&quot;&gt;
            &lt;b-checkbox class=&quot;checkbox-primary&quot; v-model=&quot;form6.is_terms&quot;&gt;
                Agree to terms and conditions
                &lt;div class=&quot;invalid-tooltip&quot; :class=&quot;{'d-block' : is_submit_form6 &amp;&amp; !form6.is_terms}&quot;&gt;You must agree before submitting.&lt;/div&gt;
            &lt;/b-checkbox&gt;
        &lt;/div&gt;
    &lt;/b-form-group&gt;
    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot; class=&quot;mt-2&quot;&gt;Submit form&lt;/b-button&gt;
&lt;/b-form&gt;
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
        metaInfo: { title: 'Bootstrap Form Validation' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                form1: { name: '' }, is_submit_form1: false,
                form2: { email: '' }, is_submit_form2: false,
                form3: { select: '' }, is_submit_form3: false,
                form4: { first_name: 'Shaun', last_name: 'Park', username: '', city: '', state: '', zip: '', is_terms: false }, is_submit_form4: false,
                form5: { first_name: 'Shaun', last_name: 'Park', username: '', city: '', state: '', zip: '', is_terms: false }, is_submit_form5: false,
                form6: { first_name: 'Shaun', last_name: 'Park', username: '', city: '', state: '', zip: '', is_terms: false }, is_submit_form6: false,
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
            },
            email_validate(email) {
                const regexp = /^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/;
                return regexp.test(email);
            },
            submit_form1() {
                this.is_submit_form1 = true;
                if (this.form1.name) {
                    //form validated success
                    this.$bvToast.toast('Form submitted successfully.', { headerClass: 'd-none', bodyClass: 'toast-success', toaster: 'b-toaster-top-center', autohidedelay: 2000 })
                }
            },
            submit_form2() {
                this.is_submit_form2 = true;
                if (this.email_validate(this.form2.email)) {
                    //form validated success
                    this.$bvToast.toast('Form submitted successfully.', { headerClass: 'd-none', bodyClass: 'toast-success', toaster: 'b-toaster-top-center', autohidedelay: 2000 })
                }
            },
            submit_form3() {
                this.is_submit_form3 = true;
                if (this.form3.select) {
                    //form validated success
                    this.$bvToast.toast('Form submitted successfully.', { headerClass: 'd-none', bodyClass: 'toast-success', toaster: 'b-toaster-top-center', autohidedelay: 2000 })
                }
            },
            submit_form4() {
                this.is_submit_form4 = true;
                if (this.form4.first_name && this.form4.last_name && this.form4.username && this.form4.city && this.form4.state && this.form4.zip && this.form4.is_terms) {
                    //form validated success
                    this.$bvToast.toast('Form submitted successfully.', { headerClass: 'd-none', bodyClass: 'toast-success', toaster: 'b-toaster-top-center', autohidedelay: 2000 })
                }
            },
            submit_form5() {
                this.is_submit_form5 = true;
                if (this.form5.first_name && this.form5.last_name && this.form5.username && this.form5.city && this.form5.state && this.form5.zip && this.form5.is_terms) {
                    //form validated success
                    this.$bvToast.toast('Form submitted successfully.', { headerClass: 'd-none', bodyClass: 'toast-success', toaster: 'b-toaster-top-center', autohidedelay: 2000 })
                }
            },
            submit_form6() {
                this.is_submit_form6 = true;
                if (this.form6.first_name && this.form6.last_name && this.form6.username && this.form6.city && this.form6.state && this.form6.zip && this.form6.is_terms) {
                    //form validated success
                    this.$bvToast.toast('Form submitted successfully.', { headerClass: 'd-none', bodyClass: 'toast-success', toaster: 'b-toaster-top-center', autohidedelay: 2000 })
                }
            }
        }
    };
</script>
