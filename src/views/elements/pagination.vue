<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Pagination</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#paginationDefault" class="nav-link scrollactive-item">Default</a>
                    <a href="#paginationSolid" class="nav-link scrollactive-item">Solid</a>
                    <a href="#paginationIcons" class="nav-link scrollactive-item">Icons</a>
                    <a href="#paginationNo-spacing" class="nav-link scrollactive-item">No Spacing</a>
                </scrollactive>
            </div>

            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        Documentation: <a target="_blank" href="https://bootstrap-vue.org/docs/components/pagination" class="text-info">
                            https://bootstrap-vue.org/docs/components/pagination
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing" id="cancel-row">

                <div id="paginationDefault" class="col-xl-12 col-sm-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Default</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">

                            <div class="paginating-container pagination-default flex-column align-items-center">
                                <b-pagination :value="2" :total-rows="9" :per-page="3" prev-text="Prev" next-text="Next" first-text="First" last-text="Last" class="mb-4"></b-pagination>
                                <b-pagination :value="2" :total-rows="9" :per-page="3" prev-text="Prev" next-text="Next" first-number last-number></b-pagination>
                            </div>


                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-pagination :value=&quot;2&quot; :total-rows=&quot;9&quot; :per-page=&quot;3&quot; prev-text=&quot;Prev&quot; next-text=&quot;Next&quot; first-text=&quot;First&quot; last-text=&quot;Last&quot; class=&quot;mb-4&quot;&gt;&lt;/b-pagination&gt;

&lt;b-pagination :value=&quot;2&quot; :total-rows=&quot;9&quot; :per-page=&quot;3&quot; prev-text=&quot;Prev&quot; next-text=&quot;Next&quot; first-number last-number&gt;&lt;/b-pagination&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div id="paginationSolid" class="col-xl-12 col-sm-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Solid</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">

                            <div class="paginating-container pagination-solid flex-column align-items-center">
                            <b-pagination :value="2" :total-rows="9" :per-page="3" prev-text="Prev" next-text="Next" first-text="First" last-text="Last" first-class="first" prev-class="prev" next-class="next" last-class="last" class="mb-4"></b-pagination>

                                <b-pagination :value="2" :total-rows="9" :per-page="3" prev-text="Prev" next-text="Next" prev-class="prev" next-class="next" first-number last-number></b-pagination>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-pagination :value=&quot;2&quot; :total-rows=&quot;9&quot; :per-page=&quot;3&quot; prev-text=&quot;Prev&quot; next-text=&quot;Next&quot; first-text=&quot;First&quot; last-text=&quot;Last&quot; first-class=&quot;first&quot; prev-class=&quot;prev&quot; next-class=&quot;next&quot; last-class=&quot;last&quot; class=&quot;mb-4&quot;&gt;&lt;/b-pagination&gt;
                                
&lt;b-pagination :value=&quot;2&quot; :total-rows=&quot;9&quot; :per-page=&quot;3&quot; prev-text=&quot;Prev&quot; next-text=&quot;Next&quot; prev-class=&quot;prev&quot; next-class=&quot;next&quot; first-number last-number&gt;&lt;/b-pagination&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="paginationIcons" class="col-xl-12 col-sm-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With Icons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">

                            <div class="paginating-container pagination-solid flex-column align-items-center">
                                <b-pagination :value="2" :total-rows="9" :per-page="3" first-class="first" prev-class="prev" next-class="next" last-class="last" class="mb-4">
                                    <template #first-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
                                    </template>
                                    <template #prev-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                                    </template>
                                    <template #next-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                                    </template>
                                    <template #last-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                                    </template>
                                </b-pagination>

                                <b-pagination :value="2" :total-rows="9" :per-page="3" prev-class="prev" next-class="next" first-number last-number>
                                    <template #prev-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                                    </template>
                                    <template #next-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                                    </template>
                                </b-pagination>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-pagination :value=&quot;2&quot; :total-rows=&quot;9&quot; :per-page=&quot;3&quot; first-class=&quot;first&quot; prev-class=&quot;prev&quot; next-class=&quot;next&quot; last-class=&quot;last&quot; class=&quot;mb-4&quot;&gt;
    &lt;template #first-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M11 19l-7-7 7-7m8 14l-7-7 7-7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;template #prev-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 19l-7-7 7-7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;template #next-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5l7 7-7 7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;template #last-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M13 5l7 7-7 7M5 5l7 7-7 7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
&lt;/b-pagination&gt;
                                
&lt;b-pagination :value=&quot;2&quot; :total-rows=&quot;9&quot; :per-page=&quot;3&quot; prev-class=&quot;prev&quot; next-class=&quot;next&quot; first-number last-number&gt;
    &lt;template #prev-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 19l-7-7 7-7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;template #next-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5l7 7-7 7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
&lt;/b-pagination&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="paginationIconsrounded" class="col-xl-12 col-sm-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With Icons and Rounded </h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="paginating-container pagination-solid flex-column align-items-center">
                                <b-pagination :value="2" :total-rows="9" :per-page="3" first-class="first" prev-class="prev" next-class="next" last-class="last" class="mb-4 rounded">
                                    <template #first-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
                                    </template>
                                    <template #prev-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                                    </template>
                                    <template #next-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                                    </template>
                                    <template #last-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                                    </template>
                                </b-pagination>

                                <b-pagination :value="2" :total-rows="9" :per-page="3" prev-class="prev" next-class="next" first-number last-number class="rounded" >
                                    <template #prev-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                                    </template>
                                    <template #next-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                                    </template>
                                </b-pagination>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-pagination :value=&quot;2&quot; :total-rows=&quot;9&quot; :per-page=&quot;3&quot; first-class=&quot;first&quot; prev-class=&quot;prev&quot; next-class=&quot;next&quot; last-class=&quot;last&quot; class=&quot;mb-4 rounded&quot;&gt;
    &lt;template #first-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M11 19l-7-7 7-7m8 14l-7-7 7-7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;template #prev-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 19l-7-7 7-7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;template #next-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5l7 7-7 7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;template #last-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M13 5l7 7-7 7M5 5l7 7-7 7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
&lt;/b-pagination&gt;
                                
&lt;b-pagination :value=&quot;2&quot; :total-rows=&quot;9&quot; :per-page=&quot;3&quot; prev-class=&quot;prev&quot; next-class=&quot;next&quot; first-number last-number class=&quot;rounded&quot;&gt;
    &lt;template #prev-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 19l-7-7 7-7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;template #next-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5l7 7-7 7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
&lt;/b-pagination&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div id="paginationNo-spacing" class="col-xl-12 col-sm-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>No Spacing</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">

                            <div class="paginating-container pagination-no_spacing flex-column align-items-center">

                                <b-pagination :value="2" :total-rows="9" :per-page="3" class="mb-4" first-class="first" prev-class="prev" next-class="next" last-class="last">
                                    <template #first-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
                                    </template>
                                    <template #prev-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                                    </template>
                                    <template #next-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                                    </template>
                                    <template #last-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" /></svg>
                                    </template>
                                </b-pagination>

                                <b-pagination :value="2" :total-rows="9" :per-page="3" prev-class="prev" next-class="next" first-number last-number>
                                    <template #prev-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>
                                    </template>
                                    <template #next-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                                    </template>
                                </b-pagination>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-pagination :value=&quot;2&quot; :total-rows=&quot;9&quot; :per-page=&quot;3&quot; class=&quot;mb-4&quot; first-class=&quot;first&quot; prev-class=&quot;prev&quot; next-class=&quot;next&quot; last-class=&quot;last&quot;&gt;
    &lt;template #first-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M11 19l-7-7 7-7m8 14l-7-7 7-7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;template #prev-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 19l-7-7 7-7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;template #next-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5l7 7-7 7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;template #last-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M13 5l7 7-7 7M5 5l7 7-7 7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
&lt;/b-pagination&gt;

&lt;b-pagination :value=&quot;2&quot; :total-rows=&quot;9&quot; :per-page=&quot;3&quot; prev-class=&quot;prev&quot; next-class=&quot;next&quot; first-number last-number&gt;
    &lt;template #prev-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M15 19l-7-7 7-7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;template #next-text&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; fill=&quot;none&quot; viewBox=&quot;0 0 24 24&quot; stroke=&quot;currentColor&quot;&gt;&lt;path stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; stroke-width=&quot;2&quot; d=&quot;M9 5l7 7-7 7&quot; /&gt;&lt;/svg&gt;
    &lt;/template&gt;
&lt;/b-pagination&gt;
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
        metaInfo: { title: 'Pagination' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                rows: 9,
                perPage: 3,
                currentPage: 2
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
