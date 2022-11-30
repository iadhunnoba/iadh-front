<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Basic</span></li>
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
                    <a href="#form_grid_layouts" class="nav-link scrollactive-item">Form Grid Layouts</a>
                    <a href="#helper_text" class="nav-link scrollactive-item">Helper Text</a>
                    <a href="#form_sizing" class="nav-link scrollactive-item">Sizing</a>
                    <a href="#readonly_input" class="nav-link scrollactive-item">Readonly Input</a>
                    <a href="#html_custom_file_upload" class="nav-link scrollactive-item">HTML Custom File Upload</a>
                    <a href="#disabled_form" class="nav-link scrollactive-item">Disabled Fields</a>
                    <a href="#custom_bs_forms" class="nav-link scrollactive-item">Custom Bootstrap Forms</a>
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

            <div class="row layout-top-spacing">
                <div id="basic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Input Text</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-6 col-12 mx-auto">
                                    <b-form>
                                        <b-form-group>
                                            <p>Use input <code>type="text"</code>.</p>
                                            <b-input placeholder="Some Text..." required></b-input>
                                            <b-button type="submit" variant="primary" class="mt-4">Submit</b-button>
                                        </b-form-group>
                                    </b-form>
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
                                    <h4>Input Password</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-6 col-12 mx-auto">
                                    <b-form>
                                        <b-form-group>
                                            <div class="form-group">
                                                <p>Use input <code>type="password"</code>.</p>
                                                <b-input type="password" placeholder="Password" required></b-input>
                                                <b-button type="submit" variant="primary" class="mt-4">Submit</b-button>
                                            </div>
                                        </b-form-group>
                                    </b-form>
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
                                    <h4>Input Email</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-6 col-12 mx-auto">
                                    <b-form>
                                        <b-form-group>
                                            <p>Use input <code>type="email"</code>.</p>
                                            <b-input type="email" placeholder="email@mail.com" required></b-input>
                                            <b-button type="submit" variant="primary" class="mt-4">Submit</b-button>
                                        </b-form-group>
                                    </b-form>
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
                                    <h4>Input Url</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-6 col-12 mx-auto">
                                    <b-form>
                                        <b-form-group>
                                            <p>Use input <code>type="url"</code>.</p>
                                            <b-input type="url" placeholder="https://dummyurl.com" required></b-input>
                                            <b-button type="submit" variant="primary" class="mt-4">Submit</b-button>
                                        </b-form-group>
                                    </b-form>
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
                                    <h4>Input Telephone</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-6 col-12 mx-auto">
                                    <b-form>
                                        <b-form-group>
                                            <p>Use input <code>type="tel"</code>.</p>
                                            <b-input type="tel" placeholder="6-(666)-111-7777" required></b-input>
                                            <b-button type="submit" variant="primary" class="mt-4">Submit</b-button>
                                        </b-form-group>
                                    </b-form>
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
                                    <h4>Input Search</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-6 col-12 mx-auto">
                                    <b-form>
                                        <b-form-group>
                                            <p>Use input <code>type="search"</code>.</p>
                                            <b-input type="search" placeholder="Search..." required></b-input>
                                            <b-button type="submit" variant="primary" class="mt-4">Submit</b-button>
                                        </b-form-group>
                                    </b-form>
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
                                    <h4>Input Range</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-6 col-12 mx-auto">
                                    <b-form>
                                        <b-form-group>
                                            <p>Use input <code>type="range"</code>.</p>
                                            <b-input type="range" required></b-input>
                                        </b-form-group>
                                    </b-form>
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
                                    <h4>Input With Label</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-6 col-12 mx-auto">
                                    <b-form-group class="form-group" label="Full Name">
                                        <b-input value="Alan Green"></b-input>
                                    </b-form-group>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form-group class=&quot;form-group&quot; label=&quot;Full Name&quot;&gt;
    &lt;b-input value=&quot;Alan Green&quot;&gt;&lt;/b-input&gt;
&lt;/b-form-group&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Form controls</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form>
                                <b-form-group label="Email address">
                                    <b-input type="email" placeholder="name@example.com"></b-input>
                                </b-form-group>
                                <b-form-group label="Example select">
                                    <b-select :value="1">
                                        <b-select-option value="1">1</b-select-option>
                                        <b-select-option value="2">2</b-select-option>
                                        <b-select-option value="3">3</b-select-option>
                                        <b-select-option value="4">4</b-select-option>
                                        <b-select-option value="5">5</b-select-option>
                                    </b-select>
                                </b-form-group>
                                <b-form-group label="Example multiple select">
                                    <b-select multiple :value="[1]">
                                        <b-select-option value="1">1</b-select-option>
                                        <b-select-option value="2">2</b-select-option>
                                        <b-select-option value="3">3</b-select-option>
                                        <b-select-option value="4">4</b-select-option>
                                        <b-select-option value="5">5</b-select-option>
                                    </b-select>
                                </b-form-group>
                                <b-form-group label="Email textarea">
                                    <b-textarea rows="3"></b-textarea>
                                </b-form-group>
                                <b-form-group label="Email file input">
                                    <b-file plain></b-file>
                                </b-form-group>

                                <b-button type="submit" variant="primary" class="my-4">Submit</b-button>
                            </b-form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div id="form_grid_layouts" class="col-lg-12">
                    <div class="seperator-header">
                        <h4 class="">Form Grid Layouts</h4>
                    </div>
                </div>

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Form grid</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form>
                                <div class="row mb-4">
                                    <div class="col">
                                        <b-input placeholder="First name"></b-input>
                                    </div>
                                    <div class="col">
                                        <b-input placeholder="Last name"></b-input>
                                    </div>
                                </div>

                                <b-button type="submit" variant="primary">Submit</b-button>
                            </b-form>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form&gt;
    &lt;div class=&quot;row mb-4&quot;&gt;
        &lt;div class=&quot;col&quot;&gt;
            &lt;b-input placeholder=&quot;First name&quot;&gt;&lt;/b-input&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col&quot;&gt;
            &lt;b-input placeholder=&quot;Last name&quot;&gt;&lt;/b-input&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/b-button&gt;
&lt;/b-form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Form row</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form>
                                <div class="form-row mb-4">
                                    <div class="col">
                                        <b-input placeholder="First name"></b-input>
                                    </div>
                                    <div class="col">
                                        <b-input placeholder="Last name"></b-input>
                                    </div>
                                </div>
                                <b-button type="submit" variant="primary">Submit</b-button>
                            </b-form>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form&gt;
    &lt;div class=&quot;form-row mb-4&quot;&gt;
        &lt;div class=&quot;col&quot;&gt;
            &lt;b-input placeholder=&quot;First name&quot;&gt;&lt;/b-input&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col&quot;&gt;
            &lt;b-input placeholder=&quot;Last name&quot;&gt;&lt;/b-input&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/b-button&gt;
&lt;/b-form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Form groups</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form>
                                <b-form-group class="mb-4" label="Example label">
                                    <b-input placeholder="Example input"></b-input>
                                </b-form-group>
                                <b-form-group class="mb-4" label="Another label">
                                    <b-input placeholder="Another input"></b-input>
                                </b-form-group>
                                <b-button type="submit" variant="primary">Submit</b-button>
                            </b-form>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;Example label&quot;&gt;
        &lt;b-input placeholder=&quot;Example input&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;Another label&quot;&gt;
        &lt;b-input placeholder=&quot;Another input&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/b-button&gt;
&lt;/b-form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Column sizing</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form>
                                <div class="form-row mb-4">
                                    <div class="col-7">
                                        <b-input placeholder="City"></b-input>
                                    </div>
                                    <div class="col">
                                        <b-input placeholder="State"></b-input>
                                    </div>
                                    <div class="col">
                                        <b-input placeholder="Zip"></b-input>
                                    </div>
                                </div>
                                <b-button type="submit" variant="primary">Submit</b-button>
                            </b-form>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form&gt;
    &lt;div class=&quot;form-row mb-4&quot;&gt;
        &lt;div class=&quot;col-7&quot;&gt;
            &lt;b-input placeholder=&quot;City&quot;&gt;&lt;/b-input&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col&quot;&gt;
            &lt;b-input placeholder=&quot;State&quot;&gt;&lt;/b-input&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col&quot;&gt;
            &lt;b-input placeholder=&quot;Zip&quot;&gt;&lt;/b-input&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot;&gt;Submit&lt;/b-button&gt;
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
                <div id="helper_text" class="col-lg-12">
                    <div class="seperator-header">
                        <h4 class="">Helper Text</h4>
                    </div>
                </div>

                <div class="col-xl-12 col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Input with help text ( Default Left)</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xl-7 mx-auto">
                                    <b-form-group>
                                        <p>Use <code>small</code> tag and <code>.text-muted</code> for helper text.</p>
                                        <b-input></b-input>
                                        <small id="sh-text1" class="form-text text-muted">I am the helper text.</small>
                                    </b-form-group>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form-group&gt;
    &lt;p&gt;Use &lt;code&gt;small&lt;/code&gt; tag and &lt;code&gt;.text-muted&lt;/code&gt; for helper text. &lt;/p&gt;
    &lt;b-input&gt;&lt;/b-input&gt;
    &lt;small id=&quot;sh-text1&quot; class=&quot;form-text text-muted&quot;&gt;I am the helper text.&lt;/small&gt;
&lt;/b-form-group&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Input with badge help text (Default Left)</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xl-7 mx-auto">
                                    <b-form-group>
                                        <p>Wrap the <code>small</code> tag inside the <code>span</code> tag with <code>.badge</code></p>
                                        <b-input></b-input>
                                        <div class=" mt-1">
                                            <span class="badge badge-primary">
                                                <small id="sh-text4" class="form-text mt-0">I am the helper text.</small>
                                            </span>
                                        </div>
                                    </b-form-group>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form-group&gt;
    &lt;p&gt;Wrap the &lt;code&gt;small&lt;/code&gt; tag inside the &lt;code&gt;span&lt;/code&gt; tag with  &lt;code&gt;.badge&lt;/code&gt;&lt;/p&gt;
    &lt;b-input&gt;&lt;/b-input&gt;
    &lt;div class=&quot; mt-1&quot;&gt;
        &lt;span class=&quot;badge badge-primary&quot;&gt;
            &lt;small id=&quot;sh-text4&quot; class=&quot;form-text mt-0&quot;&gt;I am the helper text.&lt;/small&gt;
        &lt;/span&gt;
    &lt;/div&gt;
&lt;/b-form-group&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Input with block badge help text (Default Left)</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xl-7 mx-auto">
                                    <b-form-group>
                                        <p>Use <code>.w-100</code> class to the <code>span</code> tag to make block.</p>
                                        <b-input></b-input>
                                        <div class="mt-1">
                                            <span class="badge badge-primary w-100">
                                                <small id="sh-text7" class="form-text mt-0 text-left">I am the helper text.</small>
                                            </span>
                                        </div>
                                    </b-form-group>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form-group&gt;
    &lt;p&gt;Use &lt;code&gt;.w-100&lt;/code&gt; class to the &lt;code&gt;span&lt;/code&gt; tag to make block.&lt;/p&gt;
    &lt;b-input&gt;&lt;/b-input&gt;
    &lt;div class=&quot;mt-1&quot;&gt;
        &lt;span class=&quot;badge badge-primary w-100&quot;&gt;
            &lt;small id=&quot;sh-text7&quot; class=&quot;form-text mt-0 text-left&quot;&gt;I am the helper text.&lt;/small&gt;
        &lt;/span&gt;
    &lt;/div&gt;
&lt;/b-form-group&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Inline Help text</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form inline class="mb-4">
                                <b-form-group block class="text-left" label="Password">
                                    <b-input type="password" class="mt-2"></b-input>
                                    <small id="passwordHelpInline" class="text-muted">
                                        Min 8-20 char
                                    </small>
                                </b-form-group>
                            </b-form>
                            <b-button type="submit" variant="primary">Submit</b-button>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code9')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form inline class=&quot;mb-4&quot;&gt;
    &lt;b-form-group block class=&quot;text-left&quot; label=&quot;Password&quot;&gt;
        &lt;b-input type=&quot;password&quot; class=&quot;mt-2&quot;&gt;&lt;/b-input&gt;
        &lt;small id=&quot;passwordHelpInline&quot; class=&quot;text-muted&quot;&gt;
            Min 8-20 char
        &lt;/small&gt;
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
                <div id="form_sizing" class="col-lg-12">
                    <div class="seperator-header">
                        <h4 class="">Sizing</h4>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Input Fields</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xl-4">
                                    <b-form-group label="Large Input">
                                        <b-input size="lg" placeholder=".form-control-lg"></b-input>
                                    </b-form-group>
                                </div>
                                <div class="col-xl-4">
                                    <b-form-group label="Default Input">
                                        <b-input placeholder="Default input"></b-input>
                                    </b-form-group>
                                </div>
                                <div class="col-xl-4">
                                    <b-form-group label="Small Input">
                                        <b-input size="sm" placeholder=".form-control-sm"></b-input>
                                    </b-form-group>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code10')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;!-- Large Input --&gt;
&lt;b-form-group label=&quot;Large Input&quot;&gt;
    &lt;b-input size=&quot;lg&quot; placeholder=&quot;.form-control-lg&quot;&gt;&lt;/b-input&gt;
&lt;/b-form-group&gt;

&lt;!-- Default Input --&gt;
&lt;b-form-group label=&quot;Default Input&quot;&gt;
    &lt;b-input placeholder=&quot;Default input&quot;&gt;&lt;/b-input&gt;
&lt;/b-form-group&gt;

&lt;!-- Small Input --&gt;
&lt;b-form-group label=&quot;Small Input&quot;&gt;
    &lt;b-input size=&quot;sm&quot; placeholder=&quot;.form-control-sm&quot;&gt;&lt;/b-input&gt;
&lt;/b-form-group&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Select Field</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-xl-4 mb-xl-0 mb-2">
                                    <b-select size="lg" value="Large select">
                                        <b-select-option value="Large select">Large select</b-select-option>
                                        <b-select-option value="One">One</b-select-option>
                                        <b-select-option value="Two">Two</b-select-option>
                                        <b-select-option value="Three">Three</b-select-option>
                                    </b-select>
                                </div>
                                <div class="col-xl-4 mb-xl-0 mb-2">
                                    <b-select value="Default select">
                                        <b-select-option value="Default select">Default select</b-select-option>
                                        <b-select-option value="One">One</b-select-option>
                                        <b-select-option value="Two">Two</b-select-option>
                                        <b-select-option value="Three">Three</b-select-option>
                                    </b-select>
                                </div>
                                <div class="col-xl-4 mb-xl-0 mb-2">
                                    <b-select size="sm" value="Small select">
                                        <b-select-option value="Small select">Small select</b-select-option>
                                        <b-select-option value="One">One</b-select-option>
                                        <b-select-option value="Two">Two</b-select-option>
                                        <b-select-option value="Three">Three</b-select-option>
                                    </b-select>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code11')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;!-- Large Select --&gt;
&lt;b-select size=&quot;lg&quot; value=&quot;Large select&quot;&gt;
    &lt;b-select-option value=&quot;Large select&quot;&gt;Large select&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;One&quot;&gt;One&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;Two&quot;&gt;Two&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;Three&quot;&gt;Three&lt;/b-select-option&gt;
&lt;/b-select&gt;

&lt;!-- Default Select --&gt;
&lt;b-select value=&quot;Default select&quot;&gt;
    &lt;b-select-option value=&quot;Default select&quot;&gt;Default select&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;One&quot;&gt;One&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;Two&quot;&gt;Two&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;Three&quot;&gt;Three&lt;/b-select-option&gt;
&lt;/b-select&gt;

&lt;!-- Small Select --&gt;
&lt;b-select size=&quot;sm&quot; value=&quot;Small select&quot;&gt;
    &lt;b-select-option value=&quot;Small select&quot;&gt;Small select&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;One&quot;&gt;One&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;Two&quot;&gt;Two&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;Three&quot;&gt;Three&lt;/b-select-option&gt;
&lt;/b-select&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Horizontal form label sizing</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form>
                                <b-form-group class="row mb-4" label="Email" label-cols-sm="2" label-size="sm" content-cols-sm="10" label-for="colFormLabelSm">
                                    <b-input type="email" size="sm" id="colFormLabelSm" placeholder="col-form-label-sm"></b-input>
                                </b-form-group>
                                <b-form-group class="row mb-4" label="Email" label-cols-sm="2" content-cols-sm="10" label-for="colFormLabelMd">
                                    <b-input type="email" id="colFormLabelMd" placeholder="col-form-label"></b-input>
                                </b-form-group>
                                <b-form-group class="row mb-4" label="Email" label-cols-sm="2" content-cols-sm="10" label-for="colFormLabelLg">
                                    <b-input type="email" size="lg" id="colFormLabelLg" placeholder="col-form-label-lg"></b-input>
                                </b-form-group>

                                <b-button type="submit" variant="primary" class="mb-4">Submit</b-button>
                            </b-form>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code12')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code12')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form&gt;
    &lt;b-form-group class=&quot;row mb-4&quot; label=&quot;Email&quot; label-cols-sm=&quot;2&quot; label-size=&quot;sm&quot; content-cols-sm=&quot;10&quot; label-for=&quot;colFormLabelSm&quot;&gt;
        &lt;b-input type=&quot;email&quot; size=&quot;sm&quot; id=&quot;colFormLabelSm&quot; placeholder=&quot;col-form-label-sm&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;row mb-4&quot; label=&quot;Email&quot; label-cols-sm=&quot;2&quot; content-cols-sm=&quot;10&quot; label-for=&quot;colFormLabelMd&quot;&gt;
        &lt;b-input type=&quot;email&quot; id=&quot;colFormLabelMd&quot; placeholder=&quot;col-form-label&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;row mb-4&quot; label=&quot;Email&quot; label-cols-sm=&quot;2&quot; content-cols-sm=&quot;10&quot; label-for=&quot;colFormLabelLg&quot;&gt;
        &lt;b-input type=&quot;email&quot; size=&quot;lg&quot; id=&quot;colFormLabelLg&quot; placeholder=&quot;col-form-label-lg&quot;&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;

    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot; class=&quot;mb-4&quot;&gt;Submit&lt;/b-button&gt;
&lt;/b-form&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="readonly_input" class="col-lg-12">
                    <div class="seperator-header">
                        <h4 class="">Readonly</h4>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Input Readonly</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-input placeholder="Readonly input here…" readonly></b-input>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code13')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code13')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-input placeholder=&quot;Readonly input here&hellip;&quot; readonly&gt;&lt;/b-input&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="html_custom_file_upload" class="col-lg-12">
                    <div class="seperator-header">
                        <h4 class="">HTML Custom File Upload</h4>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>File Upload</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="custom-file">
                                <b-file></b-file>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code14')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code14')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-file&gt;&lt;/b-file&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="disabled_form" class="col-lg-12">
                    <div class="seperator-header">
                        <h4 class="">Disabled</h4>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Disabled Fields</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form>
                                <b-form-group class="mb-4" label="Disabled input">
                                    <b-input placeholder="Disabled input" value="Disabled input" disabled></b-input>
                                </b-form-group>
                                <b-form-group class="mb-4" label="Disabled select menu">
                                    <b-select value="" disabled>
                                        <b-select-option value="">Disabled select</b-select-option>
                                    </b-select>
                                </b-form-group>
                                <b-form-group>
                                    <b-checkbox class="checkbox-primary" disabled>Can't check this</b-checkbox>
                                </b-form-group>
                                <b-button type="submit" variant="primary" disabled>Submit</b-button>
                            </b-form>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code15')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code15')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;Disabled input&quot;&gt;
        &lt;b-input placeholder=&quot;Disabled input&quot; disabled&gt;&lt;/b-input&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group class=&quot;mb-4&quot; label=&quot;Disabled select menu&quot;&gt;
        &lt;b-select value=&quot;&quot; disabled&gt;
            &lt;b-select-option value=&quot;&quot;&gt;Disabled select&lt;/b-select-option&gt;
        &lt;/b-select&gt;
    &lt;/b-form-group&gt;
    &lt;b-form-group&gt;
        &lt;b-checkbox class=&quot;checkbox-primary&quot; disabled&gt;Can't check this&lt;/b-checkbox&gt;
    &lt;/b-form-group&gt;
    &lt;b-button type=&quot;submit&quot; variant=&quot;primary&quot; disabled&gt;Submit&lt;/b-button&gt;
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
                <div id="custom_bs_forms" class="col-lg-12">
                    <div class="seperator-header">
                        <h4 class="">Custom</h4>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Checkboxes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-checkbox class="checkbox-primary">Check this custom checkbox</b-checkbox>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code16')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code16')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-checkbox class=&quot;checkbox-primary&quot;&gt;Check this custom checkbox&lt;/b-checkbox&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Inline radio</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-radio-group>
                                <b-radio class="radio-classic radio-primary" value="1">Toggle this custom radio</b-radio>
                                <b-radio class="radio-classic radio-primary" value="2">Toggle this custom radio</b-radio>
                            </b-radio-group>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code17')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code17')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-radio-group&gt;
    &lt;b-radio class=&quot;radio-classic radio-primary&quot; value=&quot;1&quot;&gt;Toggle this custom radio&lt;/b-radio&gt;
    &lt;b-radio class=&quot;radio-classic radio-primary&quot; value=&quot;2&quot;&gt;Toggle this custom radio&lt;/b-radio&gt;
&lt;/b-radio-group&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Radio</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-form-group>
                                <b-radio class="radio-classic radio-primary mb-3" value="1" name="rdo_1">Toggle this custom radio</b-radio>
                                <b-radio class="radio-classic radio-primary" value="2" name="rdo_1">Or toggle this other custom radio</b-radio>
                            </b-form-group>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code18')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code18')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form-group&gt;
    &lt;b-radio class=&quot;radio-classic radio-primary&quot; value=&quot;1&quot; name=&quot;rdo_1&quot;&gt;Toggle this custom radio&lt;/b-radio&gt;
    &lt;b-radio class=&quot;radio-classic radio-primary&quot; value=&quot;2&quot; name=&quot;rdo_1&quot;&gt;Or toggle this other custom radio&lt;/b-radio&gt;
&lt;/b-form-group&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Disabled</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-checkbox class="checkbox-primary mb-3" disabled>Check this custom checkbox</b-checkbox>
                            <b-radio class="radio-classic radio-primary mb-4" value="1" disabled>Toggle this custom radio</b-radio>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code20')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code20')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-checkbox class=&quot;checkbox-primary mb-3&quot; disabled&gt;Check this custom checkbox&lt;/b-checkbox&gt;
&lt;b-radio class=&quot;radio-classic radio-primary mb-4&quot; value=&quot;1&quot; disabled&gt;Toggle this custom radio&lt;/b-radio&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Select menu</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-select class="mb-4" value="">
                                <b-select-option value="" disabled>Open this select menu</b-select-option>
                                <b-select-option value="1">One</b-select-option>
                                <b-select-option value="2">Two</b-select-option>
                                <b-select-option value="3">Three</b-select-option>
                            </b-select>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code21')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code21')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-select class=&quot;mb-4&quot; value=&quot;&quot;&gt;
    &lt;b-select-option value=&quot;&quot; disabled&gt;Open this select menu&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;1&quot;&gt;One&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;2&quot;&gt;Two&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;3&quot;&gt;Three&lt;/b-select-option&gt;
&lt;/b-select&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Select menu sizing</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-select size="lg" value="">
                                <b-select-option value="" disabled>Open this select menu</b-select-option>
                                <b-select-option value="1">One</b-select-option>
                                <b-select-option value="2">Two</b-select-option>
                                <b-select-option value="3">Three</b-select-option>
                            </b-select>

                            <b-select size="sm" class="mt-4" value="">
                                <b-select-option value="" disabled>Open this select menu</b-select-option>
                                <b-select-option value="1">One</b-select-option>
                                <b-select-option value="2">Two</b-select-option>
                                <b-select-option value="3">Three</b-select-option>
                            </b-select>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code22')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code22')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-select size=&quot;lg&quot; value=&quot;&quot;&gt;
    &lt;b-select-option value=&quot;&quot; disabled&gt;Open this select menu&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;1&quot;&gt;One&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;2&quot;&gt;Two&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;3&quot;&gt;Three&lt;/b-select-option&gt;
&lt;/b-select&gt;

&lt;b-select size=&quot;sm&quot; class=&quot;mt-4&quot; value=&quot;&quot;&gt;
    &lt;b-select-option value=&quot;&quot; disabled&gt;Open this select menu&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;1&quot;&gt;One&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;2&quot;&gt;Two&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;3&quot;&gt;Three&lt;/b-select-option&gt;
&lt;/b-select&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Multi select</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-select multiple :value="[1]">
                                <b-select-option value="" disabled>Open this select menu</b-select-option>
                                <b-select-option value="1">One</b-select-option>
                                <b-select-option value="2">Two</b-select-option>
                                <b-select-option value="3">Three</b-select-option>
                            </b-select>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code23')"><span>Code</span></b-button>
                                <div v-if="code_arr.includes('code23')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-select multiple :value=&quot;[1]&quot;&gt;
    &lt;b-select-option value=&quot;&quot; disabled&gt;Open this select menu&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;1&quot;&gt;One&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;2&quot;&gt;Two&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;3&quot;&gt;Three&lt;/b-select-option&gt;
&lt;/b-select&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-12  layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Select size</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-select class="mb-4" :select-size="4" value="">
                                <b-select-option value="" disabled>Open this select menu</b-select-option>
                                <b-select-option value="1">One</b-select-option>
                                <b-select-option value="2">Two</b-select-option>
                                <b-select-option value="3">Three</b-select-option>
                                <b-select-option value="4">Four</b-select-option>
                                <b-select-option value="5">Five</b-select-option>
                            </b-select>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code24')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code24')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-select class=&quot;mb-4&quot; :select-size=&quot;4&quot; value=&quot;&quot;&gt;
    &lt;b-select-option value=&quot;&quot; disabled&gt;Open this select menu&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;1&quot;&gt;One&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;2&quot;&gt;Two&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;3&quot;&gt;Three&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;4&quot;&gt;Four&lt;/b-select-option&gt;
    &lt;b-select-option value=&quot;5&quot;&gt;Five&lt;/b-select-option&gt;
&lt;/b-select&gt;
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
        metaInfo: { title: 'Bootstrap Forms' },
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
