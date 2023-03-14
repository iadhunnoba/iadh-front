<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components </a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Tabs</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">

            <div id="navSection" class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#tabsSimple" class="nav-link scrollactive-item">Simple</a>
                    <a href="#tabsIcons" class="nav-link scrollactive-item">Icons</a>
                    <a href="#tabsBordered" class="nav-link scrollactive-item">Bordered</a>
                    <a href="#tabsLine" class="nav-link scrollactive-item">Line</a>
                    <a href="#tabsAlignments" class="nav-link scrollactive-item">Alignments</a>
                    <a href="#tabsWithIcons" class="nav-link scrollactive-item">With Icons</a>
                    <a href="#tabsVerticalWithIcon" class="nav-link scrollactive-item">Vertical With Icon</a>
                    <a href="#tabsVertical" class="nav-link scrollactive-item">Vertical</a>
                </scrollactive>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-12">
                    <div class="alert alert-arrow-left alert-icon-left alert-light-info mb-0 text-break">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        Documentation: <a target="_blank" href="https://bootstrap-vue.org/docs/components/tabs" class="text-info">
                            https://bootstrap-vue.org/docs/components/tabs
                        </a>
                    </div>
                </div>
            </div>
            <div class="row layout-top-spacing">

                <div id="tabsSimple" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Simple Tabs</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body simple-tab">
                            <b-tabs nav-class="mb-3 mt-3">
                                <b-tab title="Home" active>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile">
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Contact">
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                                <b-tab title="Disabled" disabled>Disabled</b-tab>
                            </b-tabs>
                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs nav-class=&quot;mb-3 mt-3&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot;&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Contact&quot;&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Disabled&quot; disabled&gt;Disabled&lt;/b-tab&gt;
&lt;/b-tabs&gt;
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
                                    <h4>Simple Pills</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body simple-pills">
                            <b-tabs pills nav-class="mb-3 mt-3">
                                <b-tab title="Home" active>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile">
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Contact">
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                                <b-tab title="Disabled" disabled>Disabled</b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs pills nav-class=&quot;mb-3 mt-3&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot;&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Contact&quot;&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Disabled&quot; disabled&gt;Disabled&lt;/b-tab&gt;
&lt;/b-tabs&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div class="row">

                <div id="tabsIcons" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Icon Tabs</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body icon-tab">
                            <b-tabs nav-class="mb-3 mt-3">
                                <b-tab active>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home
                                    </template>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile
                                    </template>
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Contact
                                    </template>
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                                <b-tab disabled>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg> Disabled
                                    </template>
                                    Disabled
                                </b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs nav-class=&quot;mb-3 mt-3&quot;&gt;
    &lt;b-tab active&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-home&quot;&gt;&lt;path d=&quot;M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;9 22 9 12 15 12 15 22&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Home
        &lt;/template&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-user&quot;&gt;&lt;path d=&quot;M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2&quot;&gt;&lt;/path&gt;&lt;circle cx=&quot;12&quot; cy=&quot;7&quot; r=&quot;4&quot;&gt;&lt;/circle&gt;&lt;/svg&gt; Profile
        &lt;/template&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-phone&quot;&gt;&lt;path d=&quot;M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Contact
        &lt;/template&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab disabled&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-alert-circle&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;10&quot;&gt;&lt;/circle&gt;&lt;line x1=&quot;12&quot; y1=&quot;8&quot; x2=&quot;12&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;12&quot; y1=&quot;16&quot; x2=&quot;12&quot; y2=&quot;16&quot;&gt;&lt;/line&gt;&lt;/svg&gt; Disabled
        &lt;/template&gt;
        Disabled
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
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
                                    <h4>Icon Pills</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body icon-pill">

                            <b-tabs pills nav-class="mb-3 mt-3">
                                <b-tab active>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home
                                    </template>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile
                                    </template>
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Contact
                                    </template>
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                                <b-tab disabled>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line></svg> Disabled
                                    </template>
                                    Disabled
                                </b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>


                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs pills nav-class=&quot;mb-3 mt-3&quot;&gt;
    &lt;b-tab active&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-home&quot;&gt;&lt;path d=&quot;M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;9 22 9 12 15 12 15 22&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Home
        &lt;/template&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-user&quot;&gt;&lt;path d=&quot;M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2&quot;&gt;&lt;/path&gt;&lt;circle cx=&quot;12&quot; cy=&quot;7&quot; r=&quot;4&quot;&gt;&lt;/circle&gt;&lt;/svg&gt; Profile
        &lt;/template&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-phone&quot;&gt;&lt;path d=&quot;M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Contact
        &lt;/template&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab disabled&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-alert-circle&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;10&quot;&gt;&lt;/circle&gt;&lt;line x1=&quot;12&quot; y1=&quot;8&quot; x2=&quot;12&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;12&quot; y1=&quot;16&quot; x2=&quot;12&quot; y2=&quot;16&quot;&gt;&lt;/line&gt;&lt;/svg&gt; Disabled
        &lt;/template&gt;
        Disabled
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div class="row">

                <div id="tabsBordered" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Vertical Bordered</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body vertical-border-pill">
                            <b-tabs pills vertical class="mb-4 mt-3" nav-wrapper-class="col-sm-3 col-12" nav-class="mb-sm-0 mb-3   text-center mx-auto">
                                <b-tab title="Home" active>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile">
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Messages">
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                                <b-tab title="Settings">
                                    <blockquote class="blockquote">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </blockquote>
                                </b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>


                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs pills vertical class=&quot;mb-4 mt-3&quot; nav-wrapper-class=&quot;col-sm-3 col-12&quot; nav-class=&quot;mb-sm-0 mb-3   text-center mx-auto&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot;&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Messages&quot;&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Settings&quot;&gt;
        &lt;blockquote class=&quot;blockquote&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        &lt;/blockquote&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
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
                                    <h4>Border Tabs</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body border-tab">
                            <b-tabs nav-class="mt-3" content-class="mb-4">
                                <b-tab active>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home
                                    </template>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile
                                    </template>
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Contact
                                    </template>
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs nav-class=&quot;mt-3&quot; content-class=&quot;mb-4&quot;&gt;
    &lt;b-tab active&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-home&quot;&gt;&lt;path d=&quot;M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;9 22 9 12 15 12 15 22&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Home
        &lt;/template&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-user&quot;&gt;&lt;path d=&quot;M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2&quot;&gt;&lt;/path&gt;&lt;circle cx=&quot;12&quot; cy=&quot;7&quot; r=&quot;4&quot;&gt;&lt;/circle&gt;&lt;/svg&gt; Profile
        &lt;/template&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-phone&quot;&gt;&lt;path d=&quot;M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Contact
        &lt;/template&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
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
                                    <h4>Border Top</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body border-top-tab">
                            <b-tabs class="mb-3 mt-3">
                                <b-tab title="Home" active>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home
                                    </template>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile
                                    </template>
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Contact">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Contact
                                    </template>
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                                <b-tab title="Settings">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Settings
                                    </template>
                                    <blockquote class="blockquote">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </blockquote>
                                </b-tab>
                            </b-tabs>


                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs class=&quot;mb-3 mt-3&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-home&quot;&gt;&lt;path d=&quot;M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;9 22 9 12 15 12 15 22&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Home
        &lt;/template&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-user&quot;&gt;&lt;path d=&quot;M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2&quot;&gt;&lt;/path&gt;&lt;circle cx=&quot;12&quot; cy=&quot;7&quot; r=&quot;4&quot;&gt;&lt;/circle&gt;&lt;/svg&gt; Profile
        &lt;/template&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Contact&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-phone&quot;&gt;&lt;path d=&quot;M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Contact
        &lt;/template&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Settings&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-settings&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;3&quot;&gt;&lt;/circle&gt;&lt;path d=&quot;M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Settings
        &lt;/template&gt;
        &lt;blockquote class=&quot;blockquote&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        &lt;/blockquote&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div class="row">
                <div id="tabsLine" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Line</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body underline-content">
                            <b-tabs class="mb-3">
                                <b-tab title="Home" active>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home
                                    </template>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile
                                    </template>
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Contact">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Contact
                                    </template>
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs class=&quot;mb-3&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-home&quot;&gt;&lt;path d=&quot;M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;9 22 9 12 15 12 15 22&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Home
        &lt;/template&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-user&quot;&gt;&lt;path d=&quot;M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2&quot;&gt;&lt;/path&gt;&lt;circle cx=&quot;12&quot; cy=&quot;7&quot; r=&quot;4&quot;&gt;&lt;/circle&gt;&lt;/svg&gt; Profile
        &lt;/template&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Contact&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-phone&quot;&gt;&lt;path d=&quot;M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Contact
        &lt;/template&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
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
                                    <h4>Animated Line</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body animated-underline-content">
                            <b-tabs class="mb-3">
                                <b-tab title="Home" active>
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home
                                    </template>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile
                                    </template>
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Contact">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Contact
                                    </template>
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code9')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs class=&quot;mb-3&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-home&quot;&gt;&lt;path d=&quot;M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;9 22 9 12 15 12 15 22&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Home
        &lt;/template&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-user&quot;&gt;&lt;path d=&quot;M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2&quot;&gt;&lt;/path&gt;&lt;circle cx=&quot;12&quot; cy=&quot;7&quot; r=&quot;4&quot;&gt;&lt;/circle&gt;&lt;/svg&gt; Profile
        &lt;/template&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Contact&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-phone&quot;&gt;&lt;path d=&quot;M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Contact
        &lt;/template&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
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
                                    <h4>Vertical Line Tab</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body vertical-line-pill">
                            <b-tabs pills vertical class="mb-4 mt-3" nav-wrapper-class="col-sm-3 col-12" nav-class="mb-sm-0 mb-3   text-center mx-auto">
                                <b-tab title="Home" active title-link-class="mb-3 text-center">
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile" title-link-class="mb-3 text-center">
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Messages" title-link-class="mb-3 text-center">
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                                <b-tab title="Settings" title-link-class="text-center">
                                    <blockquote class="blockquote">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </blockquote>
                                </b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code10')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs pills vertical class=&quot;mb-4 mt-3&quot; nav-wrapper-class=&quot;col-sm-3 col-12&quot; nav-class=&quot;mb-sm-0 mb-3   text-center mx-auto&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active title-link-class=&quot;mb-3 text-center&quot;&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot; title-link-class=&quot;mb-3 text-center&quot;&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Messages&quot; title-link-class=&quot;mb-3 text-center&quot;&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Settings&quot; title-link-class=&quot;text-center&quot;&gt;
        &lt;blockquote class=&quot;blockquote&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        &lt;/blockquote&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div id="tabsAlignments" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4 class="justify-tab">Justify Tabs</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body justify-tab">
                            <b-tabs nav-class="mb-3 mt-3 nav-fill">
                                <b-tab title="Home" active>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile">
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Contact">
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code11')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs nav-class=&quot;mb-3 mt-3 nav-fill&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot;&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Contact&quot;&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
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
                                    <h4>Justify Pills</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body justify-pill">
                            <b-tabs pills nav-class="mb-3 mt-3 nav-fill">
                                <b-tab title="Home" active>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile">
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Contact">
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code12')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code12')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs pills nav-class=&quot;mb-3 mt-3 nav-fill&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot;&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Contact&quot;&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row">

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Justify Center Tabs</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body tab-justify-centered">
                            <b-tabs nav-class="mb-3 mt-3 justify-content-center">
                                <b-tab title="Home" active>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile">
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Contact">
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code13')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code13')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs nav-class=&quot;mb-3 mt-3 justify-content-center&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot;&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Contact&quot;&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
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
                                    <h4>Justify Center Pills</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body pill-justify-centered">
                            <b-tabs pills nav-class="mb-3 mt-3 justify-content-center">
                                <b-tab title="Home" active>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile">
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Contact">
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                            </b-tabs>


                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code14')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code14')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs pills nav-class=&quot;mb-3 mt-3 justify-content-center&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot;&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Contact&quot;&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div class="row">

                <div class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Justify Right Tabs</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body tab-justify-right">
                            <b-tabs nav-class="mb-3 mt-3 justify-content-end">
                                <b-tab title="Home" active>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile">
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Contact">
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                            </b-tabs>


                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code15')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code15')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs nav-class=&quot;mb-3 mt-3 justify-content-end&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot;&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Contact&quot;&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
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
                                    <h4>Justify Right Pills</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body pill-justify-right">
                            <b-tabs pills nav-class="mb-3 mt-3 justify-content-end">
                                <b-tab title="Home" active>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile">
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Contact">
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code16')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code16')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs pills nav-class=&quot;mb-3 mt-3 justify-content-end&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot;&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Contact&quot;&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div class="row">

                <div id="tabsWithIcons" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Pills with Icon</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body rounded-pills-icon">
                            <b-tabs pills nav-class="mb-4 mt-3  justify-content-center">
                                <b-tab active title-item-class="ml-2 mr-2" title-link-class="mb-2 text-center">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home
                                    </template>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title-item-class="ml-2 mr-2" title-link-class="mb-2 text-center">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile
                                    </template>
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title-item-class="ml-2 mr-2" title-link-class="mb-2 text-center">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> Contact
                                    </template>
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                                <b-tab title-item-class="ml-2 mr-2" title-link-class="mb-2 text-center">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Settings
                                    </template>
                                    <blockquote class="blockquote">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </blockquote>
                                </b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code17')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code17')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs pills nav-class=&quot;mb-4 mt-3  justify-content-center&quot;&gt;
    &lt;b-tab active title-item-class=&quot;ml-2 mr-2&quot; title-link-class=&quot;mb-2 text-center&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-home&quot;&gt;&lt;path d=&quot;M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;9 22 9 12 15 12 15 22&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Home
        &lt;/template&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title-item-class=&quot;ml-2 mr-2&quot; title-link-class=&quot;mb-2 text-center&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-user&quot;&gt;&lt;path d=&quot;M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2&quot;&gt;&lt;/path&gt;&lt;circle cx=&quot;12&quot; cy=&quot;7&quot; r=&quot;4&quot;&gt;&lt;/circle&gt;&lt;/svg&gt; Profile
        &lt;/template&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title-item-class=&quot;ml-2 mr-2&quot; title-link-class=&quot;mb-2 text-center&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-phone&quot;&gt;&lt;path d=&quot;M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Contact
        &lt;/template&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title-item-class=&quot;ml-2 mr-2&quot; title-link-class=&quot;mb-2 text-center&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-settings&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;3&quot;&gt;&lt;/circle&gt;&lt;path d=&quot;M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Settings
        &lt;/template&gt;
        &lt;blockquote class=&quot;blockquote&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        &lt;/blockquote&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
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
                                    <h4>Circle with Icon</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body rounded-circle-pills-icon">
                            <b-tabs pills nav-class="mb-4 mt-3  justify-content-center">
                                <b-tab active title-item-class="ml-2 mr-2" title-link-class="mb-1 rounded-circle">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                    </template>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title-item-class="ml-2 mr-2" title-link-class="mb-1 rounded-circle">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    </template>
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title-item-class="ml-2 mr-2" title-link-class="mb-1 rounded-circle">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </template>
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                                <b-tab title-item-class="ml-2 mr-2" title-link-class="mb-1 rounded-circle">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                    </template>
                                    <blockquote class="blockquote">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </blockquote>
                                </b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code18')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code18')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs pills nav-class=&quot;mb-4 mt-3  justify-content-center&quot;&gt;
    &lt;b-tab active title-item-class=&quot;ml-2 mr-2&quot; title-link-class=&quot;mb-1 rounded-circle&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-home&quot;&gt;&lt;path d=&quot;M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;9 22 9 12 15 12 15 22&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt;
        &lt;/template&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title-item-class=&quot;ml-2 mr-2&quot; title-link-class=&quot;mb-1 rounded-circle&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-user&quot;&gt;&lt;path d=&quot;M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2&quot;&gt;&lt;/path&gt;&lt;circle cx=&quot;12&quot; cy=&quot;7&quot; r=&quot;4&quot;&gt;&lt;/circle&gt;&lt;/svg&gt;
        &lt;/template&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title-item-class=&quot;ml-2 mr-2&quot; title-link-class=&quot;mb-1 rounded-circle&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-phone&quot;&gt;&lt;path d=&quot;M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
        &lt;/template&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title-item-class=&quot;ml-2 mr-2&quot; title-link-class=&quot;mb-1 rounded-circle&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-settings&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;3&quot;&gt;&lt;/circle&gt;&lt;path d=&quot;M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
        &lt;/template&gt;
        &lt;blockquote class=&quot;blockquote&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        &lt;/blockquote&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div class="row">

                <div id="tabsVerticalWithIcon" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Vertical Rounded With Icon</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body rounded-vertical-pills-icon">
                            <b-tabs pills vertical class="mb-4 mt-3" nav-wrapper-class="col-sm-4 col-12" nav-class="mb-sm-0 mb-3">
                                <b-tab title="Home" active title-link-class="mb-2 mx-auto">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Home
                                    </template>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile" title-link-class="mb-2 mx-auto">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile
                                    </template>
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Messages" title-link-class="mb-2 mx-auto">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Messages
                                    </template>
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                            </b-tabs>


                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code19')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code19')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs pills vertical class=&quot;mb-4 mt-3&quot; nav-wrapper-class=&quot;col-sm-4 col-12&quot; nav-class=&quot;mb-sm-0 mb-3&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active title-link-class=&quot;mb-2 mx-auto&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-home&quot;&gt;&lt;path d=&quot;M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;9 22 9 12 15 12 15 22&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Home
        &lt;/template&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot; title-link-class=&quot;mb-2 mx-auto&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-user&quot;&gt;&lt;path d=&quot;M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2&quot;&gt;&lt;/path&gt;&lt;circle cx=&quot;12&quot; cy=&quot;7&quot; r=&quot;4&quot;&gt;&lt;/circle&gt;&lt;/svg&gt; Profile
        &lt;/template&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Messages&quot; title-link-class=&quot;mb-2 mx-auto&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-mail&quot;&gt;&lt;path d=&quot;M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;22,6 12,13 2,6&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Messages
        &lt;/template&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
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
                                    <h4>Vertical Circle With Icon</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body rounded-circle-vertical-pills-icon">
                            <b-tabs pills vertical class="mb-4 mt-3" nav-wrapper-class="col-sm-4 col-12">
                                <b-tab title="Home" active title-link-class="rounded-circle mb-3  mx-auto">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                    </template>
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile" title-link-class="rounded-circle mb-3  mx-auto">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                    </template>
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Messages" title-link-class="rounded-circle mb-3  mx-auto">
                                    <template #title>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    </template>
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                            </b-tabs>


                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code20')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code20')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs pills vertical class=&quot;mb-4 mt-3&quot; nav-wrapper-class=&quot;col-sm-4 col-12&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active title-link-class=&quot;rounded-circle mb-3  mx-auto&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-home&quot;&gt;&lt;path d=&quot;M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;9 22 9 12 15 12 15 22&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt;
        &lt;/template&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot; title-link-class=&quot;rounded-circle mb-3  mx-auto&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-user&quot;&gt;&lt;path d=&quot;M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2&quot;&gt;&lt;/path&gt;&lt;circle cx=&quot;12&quot; cy=&quot;7&quot; r=&quot;4&quot;&gt;&lt;/circle&gt;&lt;/svg&gt;
        &lt;/template&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Messages&quot; title-link-class=&quot;rounded-circle mb-3  mx-auto&quot;&gt;
        &lt;template #title&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-phone&quot;&gt;&lt;path d=&quot;M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
        &lt;/template&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div class="row">

                <div id="tabsVertical" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Vertical Pills</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body vertical-pill">
                            <b-tabs pills vertical class="mb-4 mt-3" nav-wrapper-class="col-sm-3 col-12" nav-class="mb-sm-0 mb-3">
                                <b-tab title="Home" active title-link-class="mb-2">
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile" title-link-class="mb-2">
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Text" title-link-class="mb-2">
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                                <b-tab title="Settings">
                                    <blockquote class="blockquote">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </blockquote>
                                </b-tab>
                            </b-tabs>


                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code21')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code21')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs pills vertical class=&quot;mb-4 mt-3&quot; nav-wrapper-class=&quot;col-sm-3 col-12&quot; nav-class=&quot;mb-sm-0 mb-3&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active title-link-class=&quot;mb-2&quot;&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot; title-link-class=&quot;mb-2&quot;&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Text&quot; title-link-class=&quot;mb-2&quot;&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Settings&quot;&gt;
        &lt;blockquote class=&quot;blockquote&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        &lt;/blockquote&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
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
                                    <h4>Justify Vertical Pills Right</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body vertical-pill-right">
                            <b-tabs pills vertical end class="mb-4 mt-3" nav-wrapper-class="col-sm-3 col-12" nav-class="mb-sm-0 mb-3" content-class="order-sm-0 order-1">
                                <b-tab title="Home" active title-link-class="mb-2">
                                    <h4 class="mb-4">We move your world!</h4>
                                    <p class="mb-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </b-tab>
                                <b-tab title="Profile" title-link-class="mb-2">
                                    <div class="media">
                                        <img class="mr-3" src="@/assets/images/profile-32.jpeg" alt="Generic placeholder image">
                                        <div class="media-body">
                                            <h5 class="mt-0 mb-3">Media heading</h5>
                                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                </b-tab>
                                <b-tab title="Text" title-link-class="mb-2">
                                    <p class="">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </b-tab>
                                <b-tab title="Settings">
                                    <blockquote class="blockquote">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    </blockquote>
                                </b-tab>
                            </b-tabs>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code22')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code22')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-tabs pills vertical end class=&quot;mb-4 mt-3&quot; nav-wrapper-class=&quot;col-sm-3 col-12&quot; nav-class=&quot;mb-sm-0 mb-3&quot; content-class=&quot;order-sm-0 order-1&quot;&gt;
    &lt;b-tab title=&quot;Home&quot; active title-link-class=&quot;mb-2&quot;&gt;
        &lt;h4 class=&quot;mb-4&quot;&gt;We move your world!&lt;/h4&gt;
        &lt;p class=&quot;mb-4&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;

        &lt;p&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Profile&quot; title-link-class=&quot;mb-2&quot;&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img class=&quot;mr-3&quot; src=&quot;@/assets/images/profile-32.jpeg&quot; alt=&quot;Generic placeholder image&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h5 class=&quot;mt-0 mb-3&quot;&gt;Media heading&lt;/h5&gt;
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Text&quot; title-link-class=&quot;mb-2&quot;&gt;
        &lt;p class=&quot;&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        &lt;/p&gt;
    &lt;/b-tab&gt;
    &lt;b-tab title=&quot;Settings&quot;&gt;
        &lt;blockquote class=&quot;blockquote&quot;&gt;
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        &lt;/blockquote&gt;
    &lt;/b-tab&gt;
&lt;/b-tabs&gt;
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
    import '@/assets/sass/components/tabs-accordian/custom-tabs.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Tabs' },
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
