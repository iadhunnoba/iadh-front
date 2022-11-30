<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components </a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Accordions</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div id="navSection" class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#accordionBasic" class="nav-link scrollactive-item">Basic</a>
                    <a href="#accordionWithout-spacing" class="nav-link scrollactive-item">Without Spacing</a>
                    <a href="#accordionIcons" class="nav-link scrollactive-item">Icons</a>
                    <a href="#accordionNo-icons" class="nav-link scrollactive-item">No Icons</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/collapse#accordion-support" class="text-info">
                            https://bootstrap-vue.org/docs/components/collapse#accordion-support
                        </a>
                    </div>
                </div>
            </div>
            <div class="row layout-top-spacing">
                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div id="accordionBasic" class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div id="toggleAccordion">
                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div role="menu" v-b-toggle.headingOne1>
                                                Collapsible Group Item #1
                                                <div class="icons">
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </b-card-header>
                                    <b-collapse id="headingOne1" accordion="basic-accordion">
                                        <b-card-body>
                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>

                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div role="menu" v-b-toggle.headingTwo1>
                                                Collapsible Group Item #2
                                                <div class="icons">
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </b-card-header>
                                    <b-collapse id="headingTwo1" accordion="basic-accordion" visible>
                                        <b-card-body>
                                            <ul class="list-unstyled">
                                                <li><a href="javascript:void(0);" class="">Apple</a></li>
                                                <li><a href="javascript:void(0);" class="">Orange</a></li>
                                                <li><a href="javascript:void(0);" class="">Banana</a></li>
                                                <li><a href="javascript:void(0);" class="">list</a></li>
                                            </ul>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div role="menu" v-b-toggle.headingThree1>
                                                Collapsible Group Item #3
                                                <div class="icons">
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </b-card-header>
                                    <b-collapse id="headingThree1" accordion="basic-accordion">
                                        <b-card-body>
                                            <p>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </p>

                                            <b-button variant="primary" class="mt-4">Accept</b-button>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div id=&quot;toggleAccordion&quot;&gt;
    &lt;b-card no-body&gt;
        &lt;b-card-header header-tag=&quot;header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div role=&quot;menu&quot; v-b-toggle.headingOne1&gt;
                    Collapsible Group Item #1  &lt;div class=&quot;icons&quot;&gt;&lt;svg&gt; ... &lt;/svg&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/b-card-header&gt;
        &lt;b-collapse id=&quot;headingOne1&quot; accordion=&quot;basic-accordion&quot;&gt;
            &lt;b-card-body&gt;
                                
                ..................
                ..................

            &lt;/b-card-body&gt;
        &lt;/b-collapse&gt;
    &lt;/b-card&gt;
    &lt;b-card no-body&gt;
        &lt;b-card-header header-tag=&quot;header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div role=&quot;menu&quot; v-b-toggle.headingTwo1&gt;
                    Collapsible Group Item #2  &lt;div class=&quot;icons&quot;&gt;&lt;svg&gt; ... &lt;/svg&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/b-card-header&gt;
        &lt;b-collapse id=&quot;headingTwo1&quot; accordion=&quot;basic-accordion&quot; visible&gt;
            &lt;b-card-body&gt;
                                
                ..................
                ..................

            &lt;/b-card-body&gt;
        &lt;/b-collapse&gt;
    &lt;/b-card&gt;
    &lt;b-card no-body&gt;
        &lt;b-card-header header-tag=&quot;header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div role=&quot;menu&quot; v-b-toggle.headingThree1&gt;
                    Collapsible Group Item #3  &lt;div class=&quot;icons&quot;&gt;&lt;svg&gt; ... &lt;/svg&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/b-card-header&gt;
        &lt;b-collapse id=&quot;headingThree1&quot; accordion=&quot;basic-accordion&quot;&gt;
            &lt;b-card-body&gt;
                                
                ..................
                ..................

            &lt;/b-card-body&gt;
        &lt;/b-collapse&gt;
    &lt;/b-card&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div id="accordionWithout-spacing" class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Without Spacing</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body icon-accordion-content">
                            <div id="withoutSpacing" class="no-outer-spacing">
                                <b-card no-body class="no-outer-spacing">
                                    <b-card-header header-tag="header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div role="menu" v-b-toggle.headingOne2>
                                                Collapsible Group Item #1
                                                <div class="icons">
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </b-card-header>
                                    <b-collapse id="headingOne2" accordion="nospace-accordion">
                                        <b-card-body>
                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>

                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body class="no-outer-spacing">
                                    <b-card-header header-tag="header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div role="menu" v-b-toggle.headingTwo2>
                                                Collapsible Group Item #2
                                                <div class="icons">
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </b-card-header>
                                    <b-collapse id="headingTwo2" accordion="nospace-accordion">
                                        <b-card-body>
                                            <ul class="list-unstyled">
                                                <li><a href="javascript:void(0);" class="">Apple</a></li>
                                                <li><a href="javascript:void(0);" class="">Orange</a></li>
                                                <li><a href="javascript:void(0);" class="">Banana</a></li>
                                                <li><a href="javascript:void(0);" class="">list</a></li>
                                            </ul>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body class="no-outer-spacing">
                                    <b-card-header header-tag="header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div role="menu" v-b-toggle.headingThree2>
                                                Collapsible Group Item #3
                                                <div class="icons">
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </b-card-header>
                                    <b-collapse id="headingThree2" accordion="nospace-accordion" visible>
                                        <b-card-body>
                                            <p>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </p>

                                            <b-button variant="primary" class="mt-4">Accept</b-button>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div id=&quot;withoutSpacing&quot; class=&quot;no-outer-spacing&quot;&gt;
    &lt;b-card no-body class=&quot;no-outer-spacing&quot;&gt;
        &lt;b-card-header header-tag=&quot;header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div role=&quot;menu&quot; v-b-toggle.headingOne2&gt;
                    Collapsible Group Item #1  &lt;div class=&quot;icons&quot;&gt;&lt;svg&gt; ... &lt;/svg&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/b-card-header&gt;
        &lt;b-collapse id=&quot;headingOne2&quot; accordion=&quot;nospace-accordion&quot; visible&gt;
            &lt;b-card-body&gt;
                                
                ..................
                ..................

            &lt;/b-card-body&gt;
        &lt;/b-collapse&gt;
    &lt;/b-card&gt;
    &lt;b-card no-body class=&quot;no-outer-spacing&quot;&gt;
        &lt;b-card-header header-tag=&quot;header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div role=&quot;menu&quot; v-b-toggle.headingTwo2&gt;
                    Collapsible Group Item #2  &lt;div class=&quot;icons&quot;&gt;&lt;svg&gt; ... &lt;/svg&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/b-card-header&gt;
        &lt;b-collapse id=&quot;headingTwo2&quot; accordion=&quot;nospace-accordion&quot;&gt;
            &lt;b-card-body&gt;
                                
                ..................
                ..................

            &lt;/b-card-body&gt;
        &lt;/b-collapse&gt;
    &lt;/b-card&gt;
    &lt;b-card no-body class=&quot;no-outer-spacing&quot;&gt;
        &lt;b-card-header header-tag=&quot;header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div role=&quot;menu&quot; v-b-toggle.headingThree2&gt;
                    Collapsible Group Item #3  &lt;div class=&quot;icons&quot;&gt;&lt;svg&gt; ... &lt;/svg&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/b-card-header&gt;
        &lt;b-collapse id=&quot;headingThree2&quot; accordion=&quot;nospace-accordion&quot;&gt;
            &lt;b-card-body&gt;
                                
                ..................
                ..................

            &lt;/b-card-body&gt;
        &lt;/b-collapse&gt;
    &lt;/b-card&gt;
&lt;/div&gt;
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
                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div id="accordionIcons" class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Icons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div id="iconsAccordion" class="accordion-icons">
                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div role="menu" v-b-toggle.headingOne3>
                                                <div class="accordion-icon">
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
                                                        class="feather feather-airplay"
                                                    >
                                                        <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                                                        <polygon points="12 15 17 21 7 21 12 15"></polygon>
                                                    </svg>
                                                </div>
                                                Collapsible Group Item #1
                                                <div class="icons">
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </b-card-header>
                                    <b-collapse id="headingOne3" accordion="icon-accordion">
                                        <b-card-body>
                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>

                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body class="no-outer-spacing">
                                    <b-card-header header-tag="header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div role="menu" v-b-toggle.headingTwo3>
                                                <div class="accordion-icon">
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
                                                        class="feather feather-box"
                                                    >
                                                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                                    </svg>
                                                </div>
                                                Collapsible Group Item #2
                                                <div class="icons">
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </b-card-header>
                                    <b-collapse id="headingTwo3" accordion="icon-accordion">
                                        <b-card-body>
                                            <ul class="list-unstyled">
                                                <li><a href="javascript:void(0);" class="">Apple</a></li>
                                                <li><a href="javascript:void(0);" class="">Orange</a></li>
                                                <li><a href="javascript:void(0);" class="">Banana</a></li>
                                                <li><a href="javascript:void(0);" class="">list</a></li>
                                            </ul>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body class="no-outer-spacing">
                                    <b-card-header header-tag="header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div role="menu" v-b-toggle.headingThree3>
                                                <div class="accordion-icon">
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
                                                        class="feather feather-layout"
                                                    >
                                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                        <line x1="3" y1="9" x2="21" y2="9"></line>
                                                        <line x1="9" y1="21" x2="9" y2="9"></line>
                                                    </svg>
                                                </div>
                                                Collapsible Group Item #3
                                                <div class="icons">
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
                                                        class="feather feather-chevron-down"
                                                    >
                                                        <polyline points="6 9 12 15 18 9"></polyline>
                                                    </svg>
                                                </div>
                                            </div>
                                        </section>
                                    </b-card-header>
                                    <b-collapse id="headingThree3" accordion="icon-accordion" visible>
                                        <b-card-body>
                                            <p>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </p>

                                            <b-button variant="primary" class="mt-4">Accept</b-button>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div id=&quot;iconsAccordion&quot; class=&quot;accordion-icons&quot;&gt;
    &lt;b-card no-body&gt;
        &lt;b-card-header header-tag=&quot;header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div role=&quot;menu&quot; v-b-toggle.headingOne3&gt;
                    &lt;div class=&quot;accordion-icon&quot;&gt;&lt;svg&gt; ... &lt;/svg&gt;&lt;/div&gt;
                    Collapsible Group Item #1  &lt;div class=&quot;icons&quot;&gt;&lt;svg&gt; ... &lt;/svg&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/b-card-header&gt;
        &lt;b-collapse id=&quot;headingOne3&quot; accordion=&quot;icon-accordion&quot;&gt;
            &lt;b-card-body&gt;
                
                ..................
                ..................

            &lt;/b-card-body&gt;
        &lt;/b-collapse&gt;
    &lt;/b-card&gt;
    &lt;b-card no-body class=&quot;no-outer-spacing&quot;&gt;
        &lt;b-card-header header-tag=&quot;header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div role=&quot;menu&quot; v-b-toggle.headingThree3&gt;
                    &lt;div class=&quot;accordion-icon&quot;&gt;&lt;svg&gt; ... &lt;/svg&gt;&lt;/div&gt;
                    Collapsible Group Item #2  &lt;div class=&quot;icons&quot;&gt;&lt;svg&gt; ... &lt;/svg&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/b-card-header&gt;
        &lt;b-collapse id=&quot;headingThree3&quot; accordion=&quot;icon-accordion&quot;&gt;
            &lt;b-card-body&gt;
                
                ..................
                ..................

            &lt;/b-card-body&gt;
        &lt;/b-collapse&gt;
    &lt;/b-card&gt;
    &lt;b-card no-body class=&quot;no-outer-spacing&quot;&gt;
        &lt;b-card-header header-tag=&quot;header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div role=&quot;menu&quot; v-b-toggle.headingThree2&gt;
                    &lt;div class=&quot;accordion-icon&quot;&gt;&lt;svg&gt; ... &lt;/svg&gt;&lt;/div&gt;
                    Collapsible Group Item #3  &lt;div class=&quot;icons&quot;&gt;&lt;svg&gt; ... &lt;/svg&gt;&lt;/div&gt;
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/b-card-header&gt;
        &lt;b-collapse id=&quot;headingThree2&quot; accordion=&quot;icon-accordion&quot; visible&gt;
            &lt;b-card-body&gt;

                ..................
                ..................

            &lt;/b-card-body&gt;
        &lt;/b-collapse&gt;
    &lt;/b-card&gt;

&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div id="accordionNo-icons" class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>No Icons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body creative3-accordion-content">
                            <div id="noIconsAccordion" class="no-icons">
                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div role="menu" v-b-toggle.headingOne4>
                                                Collapsible Group Item #1
                                            </div>
                                        </section>
                                    </b-card-header>
                                    <b-collapse id="headingOne4" accordion="noicon-accordion" visible>
                                        <b-card-body>
                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>

                                            <p class="">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                            </p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div role="menu" v-b-toggle.headingTwo4>
                                                Collapsible Group Item #2
                                            </div>
                                        </section>
                                    </b-card-header>
                                    <b-collapse id="headingTwo4" accordion="noicon-accordion">
                                        <b-card-body>
                                            <ul class="list-unstyled">
                                                <li><a href="javascript:void(0);" class="">Apple</a></li>
                                                <li><a href="javascript:void(0);" class="">Orange</a></li>
                                                <li><a href="javascript:void(0);" class="">Banana</a></li>
                                                <li><a href="javascript:void(0);" class="">list</a></li>
                                            </ul>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body>
                                    <b-card-header header-tag="header" role="tab">
                                        <section class="mb-0 mt-0">
                                            <div role="menu" v-b-toggle.headingThree4>
                                                Collapsible Group Item #3
                                            </div>
                                        </section>
                                    </b-card-header>
                                    <b-collapse id="headingThree4" accordion="noicon-accordion">
                                        <b-card-body>
                                            <p>
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                                                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
                                                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                                                Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                            </p>

                                            <b-button variant="primary" class="mt-4">Accept</b-button>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div id=&quot;noIconsAccordion&quot; class=&quot;no-icons&quot;&gt;
    &lt;b-card no-body&gt;
        &lt;b-card-header header-tag=&quot;header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div role=&quot;menu&quot; v-b-toggle.headingOne4&gt;
                    Collapsible Group Item #1
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/b-card-header&gt;
        &lt;b-collapse id=&quot;headingOne4&quot; accordion=&quot;noicon-accordion&quot; visible&gt;
            &lt;b-card-body&gt;

                ..................
                ..................

            &lt;/b-card-body&gt;
        &lt;/b-collapse&gt;
    &lt;/b-card&gt;
    &lt;b-card no-body&gt;
        &lt;b-card-header header-tag=&quot;header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div role=&quot;menu&quot; v-b-toggle.headingTwo4&gt;
                    Collapsible Group Item #2
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/b-card-header&gt;
        &lt;b-collapse id=&quot;headingTwo4&quot; accordion=&quot;noicon-accordion&quot;&gt;
            &lt;b-card-body&gt;

                ..................
                ..................

        &lt;/b-collapse&gt;
    &lt;/b-card&gt;
    &lt;b-card no-body&gt;
        &lt;b-card-header header-tag=&quot;header&quot; role=&quot;tab&quot;&gt;
            &lt;section class=&quot;mb-0 mt-0&quot;&gt;
                &lt;div role=&quot;menu&quot; v-b-toggle.headingThree4&gt;
                    Collapsible Group Item #3
                &lt;/div&gt;
            &lt;/section&gt;
        &lt;/b-card-header&gt;
        &lt;b-collapse id=&quot;headingThree4&quot; accordion=&quot;noicon-accordion&quot;&gt;
            &lt;b-card-body&gt;

                ..................
                ..................

            &lt;/b-card-body&gt;
        &lt;/b-collapse&gt;
    &lt;/b-card&gt;
&lt;/div&gt;
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
    import '@/assets/sass/components/tabs-accordian/custom-accordions.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: ' Accordions' },
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
