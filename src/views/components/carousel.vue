<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components </a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Carousel</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#custom_carousel" class="nav-link scrollactive-item">Custom Carousel</a>
                    <a href="#slides_only" class="nav-link scrollactive-item">Slides only</a>
                    <a href="#with_controls" class="nav-link scrollactive-item">With controls</a>
                    <a href="#with_indicators" class="nav-link scrollactive-item">With indicators</a>
                    <a href="#with_captions" class="nav-link scrollactive-item">With captions</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/carousel" class="text-info">
                            https://bootstrap-vue.org/docs/components/carousel
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div id="custom_carousel" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom Carousel</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body  style-custom-1">
                            <div class="container" style="max-width: 928px;">
                                <div class="row">
                                    <div class="col-lg-12 col-md-12 p-0">
                                        <b-carousel ref="carousel1" v-model="slide1" :interval="4000" controls indicators class="style-custom-1">
                                            <b-carousel-slide>
                                                <template #img>
                                                    <img class="d-block w-100 slide-image" src="@/assets/images/1.jpeg" alt="First slide" />
                                                </template>
                                                <span class="badge">Lifestyle</span>
                                                <h3>How To Make More Blog By Doing Less</h3>
                                                <div class="media">
                                                    <img src="@/assets/images/profile-6.jpeg" class="" alt="avatar" />
                                                    <div class="media-body">
                                                        <h6 class="user-name">User name</h6>
                                                        <p class="meta-time">
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
                                                                class="feather feather-calendar"
                                                            >
                                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                                            </svg>
                                                            May, 14 2020
                                                        </p>
                                                    </div>
                                                </div>
                                            </b-carousel-slide>
                                            <b-carousel-slide>
                                                <template #img>
                                                    <img class="d-block w-100 slide-image" src="@/assets/images/2.jpg" alt="Second slide" />
                                                </template>
                                                <span class="badge">Lifestyle</span>
                                                <h3>How To Make Blog</h3>
                                                <div class="media">
                                                    <img src="@/assets/images/profile-6.jpeg" class="" alt="avatar" />
                                                    <div class="media-body">
                                                        <h6 class="user-name">User name</h6>
                                                        <p class="meta-time">
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
                                                                class="feather feather-calendar"
                                                            >
                                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                                            </svg>
                                                            May, 14 2020
                                                        </p>
                                                    </div>
                                                </div>
                                            </b-carousel-slide>
                                            <b-carousel-slide>
                                                <template #img>
                                                    <img class="d-block w-100 slide-image" src="@/assets/images/3.jpeg" alt="Third slide" />
                                                </template>
                                                <span class="badge">Lifestyle</span>
                                                <h3>Best Blog Android Apps</h3>
                                                <div class="media">
                                                    <img src="@/assets/images/profile-6.jpeg" class="" alt="avatar" />
                                                    <div class="media-body">
                                                        <h6 class="user-name">User name</h6>
                                                        <p class="meta-time">
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
                                                                class="feather feather-calendar"
                                                            >
                                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                                                <line x1="3" y1="10" x2="21" y2="10"></line>
                                                            </svg>
                                                            May, 14 2020
                                                        </p>
                                                    </div>
                                                </div>
                                            </b-carousel-slide>
                                        </b-carousel>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-carousel ref=&quot;carousel1&quot; v-model=&quot;slide1&quot; :interval=&quot;4000&quot; controls indicators class=&quot;style-custom-1&quot;&gt;
    &lt;b-carousel-slide&gt;
        &lt;template #img&gt;
            &lt;img class=&quot;d-block w-100 slide-image&quot; src=&quot;@/assets/images/1.jpeg&quot; alt=&quot;First slide&quot;&gt;
        &lt;/template&gt;
        &lt;span class=&quot;badge&quot;&gt;Lifestyle&lt;/span&gt;
        &lt;h3&gt;How To Make More Blog By Doing Less&lt;/h3&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img src=&quot;@/assets/images/profile-6.jpeg&quot; class=&quot;&quot; alt=&quot;avatar&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h6 class=&quot;user-name&quot;&gt;User name&lt;/h6&gt;
                &lt;p class=&quot;meta-time&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-calendar&quot;&gt;&lt;rect x=&quot;3&quot; y=&quot;4&quot; width=&quot;18&quot; height=&quot;18&quot; rx=&quot;2&quot; ry=&quot;2&quot;&gt;&lt;/rect&gt;&lt;line x1=&quot;16&quot; y1=&quot;2&quot; x2=&quot;16&quot; y2=&quot;6&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;8&quot; y1=&quot;2&quot; x2=&quot;8&quot; y2=&quot;6&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;3&quot; y1=&quot;10&quot; x2=&quot;21&quot; y2=&quot;10&quot;&gt;&lt;/line&gt;&lt;/svg&gt; May, 14 2020&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-carousel-slide&gt;
    &lt;b-carousel-slide&gt;
        &lt;template #img&gt;
            &lt;img class=&quot;d-block w-100 slide-image&quot; src=&quot;@/assets/images/2.jpg&quot; alt=&quot;Second slide&quot;&gt;
        &lt;/template&gt;
        &lt;span class=&quot;badge&quot;&gt;Lifestyle&lt;/span&gt;
        &lt;h3&gt;How To Make Blog&lt;/h3&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img src=&quot;@/assets/images/profile-6.jpeg&quot; class=&quot;&quot; alt=&quot;avatar&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h6 class=&quot;user-name&quot;&gt;User name&lt;/h6&gt;
                &lt;p class=&quot;meta-time&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-calendar&quot;&gt;&lt;rect x=&quot;3&quot; y=&quot;4&quot; width=&quot;18&quot; height=&quot;18&quot; rx=&quot;2&quot; ry=&quot;2&quot;&gt;&lt;/rect&gt;&lt;line x1=&quot;16&quot; y1=&quot;2&quot; x2=&quot;16&quot; y2=&quot;6&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;8&quot; y1=&quot;2&quot; x2=&quot;8&quot; y2=&quot;6&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;3&quot; y1=&quot;10&quot; x2=&quot;21&quot; y2=&quot;10&quot;&gt;&lt;/line&gt;&lt;/svg&gt; May, 14 2020&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-carousel-slide&gt;
    &lt;b-carousel-slide&gt;
        &lt;template #img&gt;
            &lt;img class=&quot;d-block w-100 slide-image&quot; src=&quot;@/assets/images/3.jpeg&quot; alt=&quot;Third slide&quot;&gt;
        &lt;/template&gt;
        &lt;span class=&quot;badge&quot;&gt;Lifestyle&lt;/span&gt;
        &lt;h3&gt;Best Blog Android Apps&lt;/h3&gt;
        &lt;div class=&quot;media&quot;&gt;
            &lt;img src=&quot;@/assets/images/profile-6.jpeg&quot; class=&quot;&quot; alt=&quot;avatar&quot;&gt;
            &lt;div class=&quot;media-body&quot;&gt;
                &lt;h6 class=&quot;user-name&quot;&gt;User name&lt;/h6&gt;
                &lt;p class=&quot;meta-time&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-calendar&quot;&gt;&lt;rect x=&quot;3&quot; y=&quot;4&quot; width=&quot;18&quot; height=&quot;18&quot; rx=&quot;2&quot; ry=&quot;2&quot;&gt;&lt;/rect&gt;&lt;line x1=&quot;16&quot; y1=&quot;2&quot; x2=&quot;16&quot; y2=&quot;6&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;8&quot; y1=&quot;2&quot; x2=&quot;8&quot; y2=&quot;6&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;3&quot; y1=&quot;10&quot; x2=&quot;21&quot; y2=&quot;10&quot;&gt;&lt;/line&gt;&lt;/svg&gt; May, 14 2020&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/b-carousel-slide&gt;
&lt;/b-carousel&gt;
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
                <div id="slides_only" class="col-lg-12 col-md-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Slides only</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <b-carousel ref="carousel1" v-model="slide2" :interval="4000">
                                        <div class="carousel-inner">
                                            <b-carousel-slide>
                                                <template #img>
                                                    <img class="d-block w-100" src="@/assets/images/1.jpeg" alt="First slide" />
                                                </template>
                                            </b-carousel-slide>
                                            <b-carousel-slide>
                                                <template #img>
                                                    <img class="d-block w-100" src="@/assets/images/2.jpg" alt="Second slide" />
                                                </template>
                                            </b-carousel-slide>
                                            <b-carousel-slide>
                                                <template #img>
                                                    <img class="d-block w-100" src="@/assets/images/3.jpeg" alt="Third slide" />
                                                </template>
                                            </b-carousel-slide>
                                        </div>
                                    </b-carousel>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-carousel ref=&quot;carousel1&quot; v-model=&quot;slide2&quot; :interval=&quot;4000&quot;&gt;
    &lt;div class=&quot;carousel-inner&quot;&gt;
        &lt;b-carousel-slide&gt;
            &lt;template #img&gt;
                &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/1.jpeg&quot; alt=&quot;First slide&quot;&gt;
            &lt;/template&gt;
        &lt;/b-carousel-slide&gt;
        &lt;b-carousel-slide&gt;
            &lt;template #img&gt;
                &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/2.jpg&quot; alt=&quot;Second slide&quot;&gt;
            &lt;/template&gt;
        &lt;/b-carousel-slide&gt;
        &lt;b-carousel-slide&gt;
            &lt;template #img&gt;
                &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/3.jpeg&quot; alt=&quot;Third slide&quot;&gt;
            &lt;/template&gt;
        &lt;/b-carousel-slide&gt;
    &lt;/div&gt;
&lt;/b-carousel&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="with_controls" class="col-lg-12 col-md-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With controls</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <b-carousel ref="carousel3" v-model="slide3" :interval="4000" controls>
                                        <b-carousel-slide>
                                            <template #img>
                                                <img class="d-block w-100" src="@/assets/images/1.jpeg" alt="First slide" />
                                            </template>
                                        </b-carousel-slide>
                                        <b-carousel-slide>
                                            <template #img>
                                                <img class="d-block w-100" src="@/assets/images/2.jpg" alt="Second slide" />
                                            </template>
                                        </b-carousel-slide>
                                        <b-carousel-slide>
                                            <template #img>
                                                <img class="d-block w-100" src="@/assets/images/3.jpeg" alt="Third slide" />
                                            </template>
                                        </b-carousel-slide>
                                    </b-carousel>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-carousel ref=&quot;carousel1&quot; v-model=&quot;slide2&quot; :interval=&quot;4000&quot;&gt;
    &lt;div class=&quot;carousel-inner&quot;&gt;
        &lt;b-carousel-slide&gt;
            &lt;template #img&gt;
                &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/1.jpeg&quot; alt=&quot;First slide&quot;&gt;
            &lt;/template&gt;
        &lt;/b-carousel-slide&gt;
        &lt;b-carousel-slide&gt;
            &lt;template #img&gt;
                &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/2.jpg&quot; alt=&quot;Second slide&quot;&gt;
            &lt;/template&gt;
        &lt;/b-carousel-slide&gt;
        &lt;b-carousel-slide&gt;
            &lt;template #img&gt;
                &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/3.jpeg&quot; alt=&quot;Third slide&quot;&gt;
            &lt;/template&gt;
        &lt;/b-carousel-slide&gt;
    &lt;/div&gt;
&lt;/b-carousel&gt;
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
                <div id="with_indicators" class="col-lg-12 col-md-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With indicators</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-sm-12">
                                    <b-carousel ref="carousel4" v-model="slide4" :interval="4000" controls indicators>
                                        <b-carousel-slide>
                                            <template #img>
                                                <img class="d-block w-100" src="@/assets/images/1.jpeg" alt="First slide" />
                                            </template>
                                        </b-carousel-slide>
                                        <b-carousel-slide>
                                            <template #img>
                                                <img class="d-block w-100" src="@/assets/images/2.jpg" alt="Second slide" />
                                            </template>
                                        </b-carousel-slide>
                                        <b-carousel-slide>
                                            <template #img>
                                                <img class="d-block w-100" src="@/assets/images/3.jpeg" alt="Third slide" />
                                            </template>
                                        </b-carousel-slide>
                                    </b-carousel>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-carousel ref=&quot;carousel4&quot; v-model=&quot;slide4&quot; :interval=&quot;4000&quot; controls indicators&gt;
    &lt;b-carousel-slide&gt;
        &lt;template #img&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/1.jpeg&quot; alt=&quot;First slide&quot;&gt;
        &lt;/template&gt;
    &lt;/b-carousel-slide&gt;
    &lt;b-carousel-slide&gt;
        &lt;template #img&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/2.jpg&quot; alt=&quot;Second slide&quot;&gt;
        &lt;/template&gt;
    &lt;/b-carousel-slide&gt;
    &lt;b-carousel-slide&gt;
        &lt;template #img&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/3.jpeg&quot; alt=&quot;Third slide&quot;&gt;
        &lt;/template&gt;
    &lt;/b-carousel-slide&gt;
&lt;/b-carousel&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="with_captions" class="col-lg-12 col-md-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With captions</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <b-carousel ref="carousel5" v-model="slide5" :interval="4000" controls indicators>
                                        <b-carousel-slide content-visible-up="sm">
                                            <template #img>
                                                <img class="d-block w-100" src="@/assets/images/1.jpeg" alt="First slide" />
                                            </template>
                                            <h3>First slide</h3>
                                            <h5>Lorem ipsum dolor sit amet, dolore magna aliqua.</h5>
                                        </b-carousel-slide>
                                        <b-carousel-slide content-visible-up="sm">
                                            <template #img>
                                                <img class="d-block w-100" src="@/assets/images/2.jpg" alt="Second slide" />
                                            </template>
                                            <h3>Second slide</h3>
                                            <h5>Lorem ipsum dolor sit amet, dolore magna aliqua.</h5>
                                        </b-carousel-slide>
                                        <b-carousel-slide content-visible-up="sm">
                                            <template #img>
                                                <img class="d-block w-100" src="@/assets/images/3.jpeg" alt="Third slide" />
                                            </template>
                                            <h3>Third slide</h3>
                                            <h5>Lorem ipsum dolor sit amet, dolore magna aliqua.</h5>
                                        </b-carousel-slide>
                                    </b-carousel>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-carousel ref=&quot;carousel5&quot; v-model=&quot;slide5&quot; :interval=&quot;4000&quot; controls indicators&gt;
    &lt;b-carousel-slide content-visible-up=&quot;sm&quot;&gt;
        &lt;template #img&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/1.jpeg&quot; alt=&quot;First slide&quot;&gt;
        &lt;/template&gt;
        &lt;h3&gt;First slide&lt;/h3&gt;
        &lt;h5&gt;Lorem ipsum dolor sit amet, dolore magna aliqua.&lt;/h5&gt;
    &lt;/b-carousel-slide&gt;
    &lt;b-carousel-slide content-visible-up=&quot;sm&quot;&gt;
        &lt;template #img&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/2.jpg&quot; alt=&quot;Second slide&quot;&gt;
        &lt;/template&gt;
        &lt;h3&gt;Second slide&lt;/h3&gt;
        &lt;h5&gt;Lorem ipsum dolor sit amet, dolore magna aliqua.&lt;/h5&gt;
    &lt;/b-carousel-slide&gt;
    &lt;b-carousel-slide content-visible-up=&quot;sm&quot;&gt;
        &lt;template #img&gt;
            &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/3.jpeg&quot; alt=&quot;Third slide&quot;&gt;
        &lt;/template&gt;
        &lt;h3&gt;Third slide&lt;/h3&gt;
        &lt;h5&gt;Lorem ipsum dolor sit amet, dolore magna aliqua.&lt;/h5&gt;
    &lt;/b-carousel-slide&gt;
&lt;/b-carousel&gt;
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
    import '@/assets/sass/components/custom-carousel.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Carousel' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                slide1: 0,
                slide2: 0,
                slide3: 0,
                slide4: 0,
                slide5: 0
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
