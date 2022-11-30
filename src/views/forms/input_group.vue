<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Forms</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Input Group</span></li>
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
                    <a href="#sizes" class="nav-link scrollactive-item">Sizes</a>
                    <a href="#multiple" class="nav-link scrollactive-item">Multiple</a>
                    <a href="#Input_group_action" class="nav-link scrollactive-item">Input group with action</a>
                </scrollactive>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        Documentation: <a target="_blank" href="https://bootstrap-vue.org/docs/components/input-group" class="text-info">
                            https://bootstrap-vue.org/docs/components/input-group
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">

                <div id="basic" class="col-lg-12 col-sm-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Default</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-input-group class="mb-4">
                                <b-input-group-prepend><b-input-group-text>@</b-input-group-text></b-input-group-prepend>
                                <b-input placeholder="Username"></b-input>
                            </b-input-group>

                            <b-input-group class="mb-4">
                                <b-input placeholder="Recipient's username"></b-input>
                                <b-input-group-append><b-input-group-text>@example.com</b-input-group-text></b-input-group-append>
                            </b-input-group>


                            <label for="basic-url">Your vanity URL</label>
                            <b-input-group class="mb-4">
                                <b-input-group-prepend><b-input-group-text>https://</b-input-group-text></b-input-group-prepend>
                                <b-input placeholder="example.com/users/"></b-input>
                            </b-input-group>

                            <b-input-group class="mb-4">
                                <b-input-group-prepend><b-input-group-text>$</b-input-group-text></b-input-group-prepend>
                                <b-input placeholder=""></b-input>
                                <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
                            </b-input-group>

                            <b-input-group class="mb-4">
                                <b-input-group-prepend><b-input-group-text>With textarea</b-input-group-text></b-input-group-prepend>
                                <b-textarea></b-textarea>
                            </b-input-group>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;&lt;b-input-group-text&gt;@&lt;/b-input-group-text&gt;&lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;Username&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;

&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input placeholder=&quot;Recipient's username&quot;&gt;&lt;/b-input&gt;
    &lt;b-input-group-append&gt;&lt;b-input-group-text&gt;@example.com&lt;/b-input-group-text&gt;&lt;/b-input-group-append&gt;
&lt;/b-input-group&gt;


&lt;label for=&quot;basic-url&quot;&gt;Your vanity URL&lt;/label&gt;
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;&lt;b-input-group-text&gt;https://&lt;/b-input-group-text&gt;&lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;example.com/users/&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;

&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;&lt;b-input-group-text&gt;$&lt;/b-input-group-text&gt;&lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
    &lt;b-input-group-append&gt;&lt;b-input-group-text&gt;.00&lt;/b-input-group-text&gt;&lt;/b-input-group-append&gt;
&lt;/b-input-group&gt;

&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;&lt;b-input-group-text&gt;With textarea&lt;/b-input-group-text&gt;&lt;/b-input-group-prepend&gt;
    &lt;b-textarea&gt;&lt;/b-textarea&gt;
&lt;/b-input-group&gt;
</pre>
                                    </highlight>
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
                                    <h4>Simple Icon</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p class="">Left</p>
                            <b-input-group class="mb-4">
                                <b-input-group-prepend>
                                    <b-input-group-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                    </b-input-group-text>
                                </b-input-group-prepend>
                                <b-input placeholder="Notification"></b-input>
                            </b-input-group>


                            <p class="">Right</p>
                            <b-input-group class="mb-4">
                                <b-input placeholder="Notification"></b-input>
                                <b-input-group-append>
                                    <b-input-group-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                    </b-input-group-text>
                                </b-input-group-append>
                            </b-input-group>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
=========
  LEFT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;
        &lt;b-input-group-text&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-bell&quot;&gt;&lt;path d=&quot;M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9&quot;&gt;&lt;/path&gt;&lt;path d=&quot;M13.73 21a2 2 0 0 1-3.46 0&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
        &lt;/b-input-group-text&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;Notification&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;


=========
  RIGHT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input placeholder=&quot;Notification&quot;&gt;&lt;/b-input&gt;
    &lt;b-input-group-append&gt;
        &lt;b-input-group-text&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-bell&quot;&gt;&lt;path d=&quot;M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9&quot;&gt;&lt;/path&gt;&lt;path d=&quot;M13.73 21a2 2 0 0 1-3.46 0&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
        &lt;/b-input-group-text&gt;
    &lt;/b-input-group-append&gt;
&lt;/b-input-group&gt;
</pre>
                                    </highlight>
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
                                    <h4>Spinning Icon</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p class="">Left</p>
                            <b-input-group class="mb-4">
                                <b-input-group-prepend>
                                    <b-input-group-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                                    </b-input-group-text>
                                </b-input-group-prepend>
                                <b-input placeholder="Spinners"></b-input>
                            </b-input-group>

                            <p class="">Right</p>
                            <b-input-group class="mb-4">
                                <b-input placeholder="Spinners"></b-input>
                                <b-input-group-append>
                                    <b-input-group-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
                                    </b-input-group-text>
                                </b-input-group-append>
                            </b-input-group>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
=========
  LEFT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;
        &lt;b-input-group-text&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-loader spin&quot;&gt;&lt;line x1=&quot;12&quot; y1=&quot;2&quot; x2=&quot;12&quot; y2=&quot;6&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;12&quot; y1=&quot;18&quot; x2=&quot;12&quot; y2=&quot;22&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;4.93&quot; y1=&quot;4.93&quot; x2=&quot;7.76&quot; y2=&quot;7.76&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;16.24&quot; y1=&quot;16.24&quot; x2=&quot;19.07&quot; y2=&quot;19.07&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;2&quot; y1=&quot;12&quot; x2=&quot;6&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;18&quot; y1=&quot;12&quot; x2=&quot;22&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;4.93&quot; y1=&quot;19.07&quot; x2=&quot;7.76&quot; y2=&quot;16.24&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;16.24&quot; y1=&quot;7.76&quot; x2=&quot;19.07&quot; y2=&quot;4.93&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
        &lt;/b-input-group-text&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;Spinners&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;

=========
  RIGHT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input placeholder=&quot;Spinners&quot;&gt;&lt;/b-input&gt;
    &lt;b-input-group-append&gt;
        &lt;b-input-group-text&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-loader spin&quot;&gt;&lt;line x1=&quot;12&quot; y1=&quot;2&quot; x2=&quot;12&quot; y2=&quot;6&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;12&quot; y1=&quot;18&quot; x2=&quot;12&quot; y2=&quot;22&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;4.93&quot; y1=&quot;4.93&quot; x2=&quot;7.76&quot; y2=&quot;7.76&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;16.24&quot; y1=&quot;16.24&quot; x2=&quot;19.07&quot; y2=&quot;19.07&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;2&quot; y1=&quot;12&quot; x2=&quot;6&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;18&quot; y1=&quot;12&quot; x2=&quot;22&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;4.93&quot; y1=&quot;19.07&quot; x2=&quot;7.76&quot; y2=&quot;16.24&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;16.24&quot; y1=&quot;7.76&quot; x2=&quot;19.07&quot; y2=&quot;4.93&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
        &lt;/b-input-group-text&gt;
    &lt;/b-input-group-append&gt;
&lt;/b-input-group&gt;
</pre>
                                    </highlight>
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
                                    <h4>Dropdown Icon</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p class="">Left</p>
                            <b-input-group class="mb-4">
                                <b-input-group-prepend>
                                    <b-dropdown variant="primary">
                                        <template #button-content>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                        </template>
                                        <b-dropdown-item>Action</b-dropdown-item>
                                        <b-dropdown-item>Another action</b-dropdown-item>
                                        <b-dropdown-item>Something else here</b-dropdown-item>
                                        <b-dropdown-divider></b-dropdown-divider>
                                        <b-dropdown-item>Separated link</b-dropdown-item>
                                    </b-dropdown>
                                </b-input-group-prepend>
                                <b-input placeholder="Dropdown"></b-input>
                            </b-input-group>

                            <p class="">Right</p>
                            <b-input-group class="mb-4">
                                <b-input placeholder="Dropdown"></b-input>
                                <b-input-group-append>
                                    <b-dropdown variant="success" :right="true">
                                        <template #button-content>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                        </template>
                                        <b-dropdown-item>Action</b-dropdown-item>
                                        <b-dropdown-item>Another action</b-dropdown-item>
                                        <b-dropdown-item>Something else here</b-dropdown-item>
                                        <b-dropdown-divider></b-dropdown-divider>
                                        <b-dropdown-item>Separated link</b-dropdown-item>
                                    </b-dropdown>
                                </b-input-group-append>
                            </b-input-group>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
=========
  LEFT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;
        &lt;b-dropdown variant=&quot;primary&quot;&gt;
            &lt;template #button-content&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-settings&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;3&quot;&gt;&lt;/circle&gt;&lt;path d=&quot;M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
            &lt;/template&gt;
            &lt;b-dropdown-item&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;Dropdown&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;

=========
  RIGHT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input placeholder=&quot;Dropdown&quot;&gt;&lt;/b-input&gt;
    &lt;b-input-group-append&gt;
        &lt;b-dropdown variant=&quot;success&quot; :right=&quot;true&quot;&gt;
            &lt;template #button-content&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-settings&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;3&quot;&gt;&lt;/circle&gt;&lt;path d=&quot;M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
            &lt;/template&gt;
            &lt;b-dropdown-item&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-input-group-append&gt;
&lt;/b-input-group&gt;
</pre>
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
                                    <h4>Checkboxes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p class="">Left</p>
                            <b-input-group class="mb-4">
                                <b-input-group-prepend>
                                    <b-input-group-text>
                                        <b-checkbox class="checkbox-danger" :checked="true"></b-checkbox>
                                    </b-input-group-text>
                                </b-input-group-prepend>
                                <b-input placeholder="Checkbox"></b-input>
                            </b-input-group>

                            <p class="">Right</p>
                            <b-input-group class="mb-4">
                                <b-input placeholder="Checkbox"></b-input>
                                <b-input-group-append>
                                    <b-input-group-text>
                                        <b-checkbox class="checkbox-warning" :checked="true"></b-checkbox>
                                    </b-input-group-text>
                                </b-input-group-append>
                            </b-input-group>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
=========
  LEFT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;
        &lt;b-input-group-text&gt;
            &lt;b-checkbox class=&quot;checkbox-danger&quot; :checked=&quot;true&quot;&gt;&lt;/b-checkbox&gt;
        &lt;/b-input-group-text&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;Checkbox&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;

=========
  RIGHT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input placeholder=&quot;Checkbox&quot;&gt;&lt;/b-input&gt;
    &lt;b-input-group-append&gt;
        &lt;b-input-group-text&gt;
            &lt;b-checkbox class=&quot;checkbox-warning&quot; :checked=&quot;true&quot;&gt;&lt;/b-checkbox&gt;
        &lt;/b-input-group-text&gt;
    &lt;/b-input-group-append&gt;
&lt;/b-input-group&gt;
</pre>
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
                                    <h4>Radios</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p class="">Left</p>
                            <b-input-group class="mb-4">
                                <b-input-group-prepend>
                                    <b-input-group-text>
                                        <b-radio class="radio-primary" name="custom-radio-1" :checked="true"></b-radio>
                                    </b-input-group-text>
                                </b-input-group-prepend>
                                <b-input placeholder="Radio"></b-input>
                            </b-input-group>

                            <p class="">Right</p>
                            <b-input-group class="mb-4">
                                <b-input placeholder="Radio"></b-input>
                                <b-input-group-append>
                                    <b-input-group-text>
                                        <b-radio class="radio-success" name="custom-radio-1"></b-radio>
                                    </b-input-group-text>
                                </b-input-group-append>
                            </b-input-group>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
=========
  LEFT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;
        &lt;b-input-group-text&gt;
            &lt;b-radio class=&quot;radio-primary&quot; name=&quot;custom-radio-1&quot; :checked=&quot;true&quot;&gt;&lt;/b-radio&gt;
        &lt;/b-input-group-text&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;Radio&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;

=========
  RIGHT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input placeholder=&quot;Radio&quot;&gt;&lt;/b-input&gt;
    &lt;b-input-group-append&gt;
        &lt;b-input-group-text&gt;
            &lt;b-radio class=&quot;radio-success&quot; name=&quot;custom-radio-1&quot;&gt;&lt;/b-radio&gt;
        &lt;/b-input-group-text&gt;
    &lt;/b-input-group-append&gt;
&lt;/b-input-group&gt;
</pre>
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
                                    <h4>Switch</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p class="">Left</p>
                            <b-input-group class="mb-4">
                                <b-input-group-prepend>
                                    <b-input-group-text>
                                        <b-checkbox switch class="checkbox-primary" :checked="true"></b-checkbox>
                                    </b-input-group-text>
                                </b-input-group-prepend>
                                <b-input placeholder="Switch"></b-input>
                            </b-input-group>

                            <p class="">Right</p>
                            <b-input-group class="mb-4">
                                <b-input placeholder="Switch"></b-input>
                                <b-input-group-append>
                                    <b-input-group-text>
                                        <b-checkbox switch class="checkbox-danger" :checked="true"></b-checkbox>
                                    </b-input-group-text>
                                </b-input-group-append>
                            </b-input-group>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre>
=========
  LEFT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;
        &lt;b-input-group-text&gt;
            &lt;b-checkbox switch class=&quot;checkbox-primary&quot; :checked=&quot;true&quot;&gt;&lt;/b-checkbox&gt;
        &lt;/b-input-group-text&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;Switch&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;

=========
  RIGHT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input placeholder=&quot;Switch&quot;&gt;&lt;/b-input&gt;
    &lt;b-input-group-append&gt;
        &lt;b-input-group-text&gt;
            &lt;b-checkbox switch class=&quot;checkbox-danger&quot; :checked=&quot;true&quot;&gt;&lt;/b-checkbox&gt;
        &lt;/b-input-group-text&gt;
    &lt;/b-input-group-append&gt;
&lt;/b-input-group&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row layout-spacing">

                <div id="sizes" class="col-lg-12">
                    <div class="seperator-header">
                        <h4 class="">Sizing</h4>
                    </div>
                </div>

                <div class="col-lg-12 col-sm-12 col-12 layout-spacing">
                    <div class="row">
                        <div class="col-md-12 mb-4">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Sizing</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <b-input-group size="sm" class="mb-4">
                                        <b-input-group-prepend><b-input-group-text>Small</b-input-group-text></b-input-group-prepend>
                                        <b-input placeholder=""></b-input>
                                    </b-input-group>
                                    <b-input-group class="mb-4">
                                        <b-input-group-prepend><b-input-group-text>Default</b-input-group-text></b-input-group-prepend>
                                        <b-input placeholder=""></b-input>
                                    </b-input-group>
                                    <b-input-group size="lg" class="mb-4">
                                        <b-input-group-prepend><b-input-group-text>Large</b-input-group-text></b-input-group-prepend>
                                        <b-input placeholder=""></b-input>
                                    </b-input-group>

                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></b-button>

                                        <div v-if="code_arr.includes('code8')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-input-group size=&quot;sm&quot; class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;&lt;b-input-group-text&gt;Small&lt;/b-input-group-text&gt;&lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;&lt;b-input-group-text&gt;Default&lt;/b-input-group-text&gt;&lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;
&lt;b-input-group size=&quot;lg&quot; class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;&lt;b-input-group-text&gt;Large&lt;/b-input-group-text&gt;&lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;
</pre>
                                            </highlight>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div id="multiple" class="col-lg-12">
                            <div class="seperator-header">
                                <h4 class="">Multiple Fields</h4>
                            </div>
                        </div>

                        <div class="col-md-12">
                            <div class="statbox panel box box-shadow">
                                <div class="panel-heading">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                            <h4>Multiple inputs</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="panel-body">
                                    <b-input-group class="mb-4">
                                        <b-input-group-prepend><b-input-group-text>First and last name</b-input-group-text></b-input-group-prepend>
                                        <b-input placeholder="First Name"></b-input>
                                        <b-input placeholder="Last Name"></b-input>
                                    </b-input-group>

                                    <div class="code-section-container show-code">

                                        <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></b-button>

                                        <div v-if="code_arr.includes('code9')" class="code-section text-left">
                                            <highlight>
                                                <pre>
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;&lt;b-input-group-text&gt;First and last name&lt;/b-input-group-text&gt;&lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;First Name&quot;&gt;&lt;/b-input&gt;
    &lt;b-input placeholder=&quot;Last Name&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;
</pre>
                                            </highlight>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-sm-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Multiple addons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p class="">Left</p>
                            <b-input-group class="mb-4">
                                <b-input-group-prepend>
                                    <b-input-group-text>$</b-input-group-text>
                                    <b-input-group-text>0.00</b-input-group-text>
                                </b-input-group-prepend>
                                <b-input placeholder=""></b-input>
                            </b-input-group>

                            <p class="">Right</p>
                            <b-input-group class="mb-4">
                                <b-input placeholder=""></b-input>
                                <b-input-group-append>
                                    <b-input-group-text>$</b-input-group-text>
                                    <b-input-group-text>0.00</b-input-group-text>
                                </b-input-group-append>
                            </b-input-group>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code10')" class="code-section text-left">
                                    <highlight>
                                        <pre>
=========
  LEFT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;
        &lt;b-input-group-text&gt;$&lt;/b-input-group-text&gt;
        &lt;b-input-group-text&gt;0.00&lt;/b-input-group-text&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;

=========
  RIGHT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
    &lt;b-input-group-append&gt;
        &lt;b-input-group-text&gt;$&lt;/b-input-group-text&gt;
        &lt;b-input-group-text&gt;0.00&lt;/b-input-group-text&gt;
    &lt;/b-input-group-append&gt;
&lt;/b-input-group&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="Input_group_action" class="col-lg-12">
                    <div class="seperator-header">
                        <h4 class="">Input Group with Action</h4>
                    </div>
                </div>

                <div class="col-lg-12 col-sm-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Buttons with dropdowns</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p class="">Left</p>
                            <b-input-group class="mb-4">
                                <b-input-group-prepend>
                                    <b-dropdown variant="secondary" class="custom-dropdown">
                                        <template #button-content>
                                            Dropdown
                                        </template>
                                        <b-dropdown-item>Action</b-dropdown-item>
                                        <b-dropdown-item>Another action</b-dropdown-item>
                                        <b-dropdown-item>Something else here</b-dropdown-item>
                                        <b-dropdown-divider></b-dropdown-divider>
                                        <b-dropdown-item>Separated link</b-dropdown-item>
                                    </b-dropdown>
                                </b-input-group-prepend>
                                <b-input placeholder=""></b-input>
                            </b-input-group>

                            <p class="">Right</p>
                            <b-input-group class="mb-4">
                                <b-input placeholder=""></b-input>
                                <b-input-group-append>
                                    <b-dropdown variant="secondary" :right="true" class="custom-dropdown">
                                        <template #button-content>
                                            Dropdown
                                        </template>
                                        <b-dropdown-item>Action</b-dropdown-item>
                                        <b-dropdown-item>Another action</b-dropdown-item>
                                        <b-dropdown-item>Something else here</b-dropdown-item>
                                        <b-dropdown-divider></b-dropdown-divider>
                                        <b-dropdown-item>Separated link</b-dropdown-item>
                                    </b-dropdown>
                                </b-input-group-append>
                            </b-input-group>


                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code11')" class="code-section text-left">
                                    <highlight>
                                        <pre>
=========
  LEFT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;
        &lt;b-dropdown variant=&quot;secondary&quot; class=&quot;custom-dropdown&quot;&gt;
            &lt;template #button-content&gt;
                Dropdown
            &lt;/template&gt;
            &lt;b-dropdown-item&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;

=========
  RIGHT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
    &lt;b-input-group-append&gt;
        &lt;b-dropdown variant=&quot;secondary&quot; :right=&quot;true&quot; class=&quot;custom-dropdown&quot;&gt;
            &lt;template #button-content&gt;
                Dropdown
            &lt;/template&gt;
            &lt;b-dropdown-item&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-input-group-append&gt;
&lt;/b-input-group&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-sm-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Segmented buttons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p class="">Left</p>
                            <b-input-group class="mb-4">
                                <b-input-group-prepend>
                                    <b-button variant="info">Action</b-button>
                                    <b-dropdown variant="outline-info" class="custom-dropdown">
                                        <template #button-content>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </template>
                                        <b-dropdown-item>Action</b-dropdown-item>
                                        <b-dropdown-item>Another action</b-dropdown-item>
                                        <b-dropdown-item>Something else here</b-dropdown-item>
                                        <b-dropdown-divider></b-dropdown-divider>
                                        <b-dropdown-item>Separated link</b-dropdown-item>
                                    </b-dropdown>
                                </b-input-group-prepend>
                                <b-input placeholder=""></b-input>
                            </b-input-group>

                            <p class="">Right</p>
                            <b-input-group class="mb-4">
                                <b-input placeholder=""></b-input>
                                <b-input-group-append>
                                    <b-button variant="outline-info">Action</b-button>
                                    <b-dropdown variant="info" :right="true" class="custom-dropdown">
                                        <template #button-content>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </template>
                                        <b-dropdown-item>Action</b-dropdown-item>
                                        <b-dropdown-item>Another action</b-dropdown-item>
                                        <b-dropdown-item>Something else here</b-dropdown-item>
                                        <b-dropdown-divider></b-dropdown-divider>
                                        <b-dropdown-item>Separated link</b-dropdown-item>
                                    </b-dropdown>
                                </b-input-group-append>
                            </b-input-group>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code12')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code12')" class="code-section text-left">
                                    <highlight>
                                        <pre>
=========
  LEFT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;
        &lt;b-button variant=&quot;info&quot;&gt;Action&lt;/b-button&gt;
        &lt;b-dropdown variant=&quot;outline-info&quot; class=&quot;custom-dropdown&quot;&gt;
            &lt;template #button-content&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-chevron-down&quot;&gt;&lt;polyline points=&quot;6 9 12 15 18 9&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt;
            &lt;/template&gt;
            &lt;b-dropdown-item&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;

=========
  RIGHT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
    &lt;b-input-group-append&gt;
        &lt;b-button variant=&quot;outline-info&quot;&gt;Action&lt;/b-button&gt;
        &lt;b-dropdown variant=&quot;info&quot; :right=&quot;true&quot; class=&quot;custom-dropdown&quot;&gt;
            &lt;template #button-content&gt;
                &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-chevron-down&quot;&gt;&lt;polyline points=&quot;6 9 12 15 18 9&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt;
            &lt;/template&gt;
            &lt;b-dropdown-item&gt;Action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item&gt;Another action&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-item&gt;Something else here&lt;/b-dropdown-item&gt;
            &lt;b-dropdown-divider&gt;&lt;/b-dropdown-divider&gt;
            &lt;b-dropdown-item&gt;Separated link&lt;/b-dropdown-item&gt;
        &lt;/b-dropdown&gt;
    &lt;/b-input-group-append&gt;
&lt;/b-input-group&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="col-lg-12 col-sm-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Button addons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <p class="">Left</p>
                            <b-input-group class="mb-4">
                                <b-input-group-prepend>
                                    <b-button variant="primary">Button</b-button>
                                </b-input-group-prepend>
                                <b-input placeholder=""></b-input>
                            </b-input-group>

                            <p class="">Right</p>
                            <b-input-group class="mb-4">
                                <b-input placeholder=""></b-input>
                                <b-input-group-append>
                                    <b-button variant="primary">Button</b-button>
                                </b-input-group-append>
                            </b-input-group>

                            <p class="">Left</p>
                            <b-input-group class="mb-4">
                                <b-input-group-prepend>
                                    <b-button variant="outline-primary">Button</b-button>
                                </b-input-group-prepend>
                                <b-input-group-prepend>
                                    <b-button variant="outline-primary">Button</b-button>
                                </b-input-group-prepend>
                                <b-input placeholder=""></b-input>
                            </b-input-group>


                            <p class="">Right</p>
                            <b-input-group class="mb-4">
                                <b-input placeholder=""></b-input>
                                <b-input-group-append>
                                    <b-button variant="outline-primary">Button</b-button>
                                </b-input-group-append>
                                <b-input-group-append>
                                    <b-button variant="outline-primary">Button</b-button>
                                </b-input-group-append>
                            </b-input-group>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code13')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code13')" class="code-section text-left">
                                    <highlight>
                                        <pre>
=========
  LEFT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Button&lt;/b-button&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;

=========
  RIGHT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
    &lt;b-input-group-append&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Button&lt;/b-button&gt;
    &lt;/b-input-group-append&gt;
&lt;/b-input-group&gt;

=========
  LEFT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input-group-prepend&gt;
        &lt;b-button variant=&quot;outline-primary&quot;&gt;Button&lt;/b-button&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-input-group-prepend&gt;
        &lt;b-button variant=&quot;outline-primary&quot;&gt;Button&lt;/b-button&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;


=========
  RIGHT
=========
&lt;b-input-group class=&quot;mb-4&quot;&gt;
    &lt;b-input placeholder=&quot;&quot;&gt;&lt;/b-input&gt;
    &lt;b-input-group-append&gt;
        &lt;b-button variant=&quot;outline-primary&quot;&gt;Button&lt;/b-button&gt;
    &lt;/b-input-group-append&gt;
    &lt;b-input-group-append&gt;
        &lt;b-button variant=&quot;outline-primary&quot;&gt;Button&lt;/b-button&gt;
    &lt;/b-input-group-append&gt;
&lt;/b-input-group&gt;
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
        metaInfo: { title: 'Input Group' },
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
