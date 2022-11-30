<template>
    <div class="layout-px-spacing">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item active" aria-current="page"><span>Drag and Drop</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

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
                    <a target="_blank" href="https://www.npmjs.com/package/vuedraggable" class="text-info">
                        https://www.npmjs.com/package/vuedraggable
                    </a>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12 layout-spacing layout-top-spacing">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Vue Draggable</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="parent ex-1">
                            <div class="row">
                                <div class="col-sm-6">
                                    <draggable class="drag-drop dragula" group="default" ghost-class="gu-transit" drag-class="el-drag-ex-1" :animation="200">
                                        <b-media class="d-md-flex d-block text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/profile-2.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-xl-flex d-block justify-content-between">
                                                <div class="">
                                                    <h6 class="">Need to be approved</h6>
                                                    <p class="">Kelly Young</p>
                                                </div>
                                                <div>
                                                    <b-button variant="secondary" size="sm">View</b-button>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-md-flex d-block text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/profile-3.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-xl-flex d-block justify-content-between">
                                                <div class="">
                                                    <h6 class="">Meeting with client</h6>
                                                    <p class="">Andy King</p>
                                                </div>
                                                <div>
                                                    <b-button variant="secondary" size="sm">View</b-button>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-md-flex d-block text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/profile-4.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-xl-flex d-block justify-content-between">
                                                <div class="">
                                                    <h6 class="">Project Detail</h6>
                                                    <p class="">Judy Holmes</p>
                                                </div>
                                                <div>
                                                    <b-button variant="secondary" size="sm">View</b-button>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-md-flex d-block text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/profile-5.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-xl-flex d-block justify-content-between">
                                                <div class="">
                                                    <h6 class="">Edited Post Apporval</h6>
                                                    <p class="">Vincent Carpenter</p>
                                                </div>
                                                <div>
                                                    <b-button variant="secondary" size="sm">View</b-button>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-md-flex d-block text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/profile-6.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-xl-flex d-block justify-content-between">
                                                <div class="">
                                                    <h6 class="">Project Lead Pickup</h6>
                                                    <p class="">Mary McDonald</p>
                                                </div>
                                                <div>
                                                    <b-button variant="secondary" size="sm">View</b-button>
                                                </div>
                                            </div>
                                        </b-media>
                                    </draggable>
                                </div>

                                <div class="col-sm-6">
                                    <draggable class="drag-drop" group="default" ghost-class="gu-transit" drag-class="el-drag-ex-1" :animation="200">
                                        <b-media class="d-md-flex d-block text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/profile-7.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-xl-flex d-block justify-content-between">
                                                <div class="">
                                                    <h6 class="">Need to be approved</h6>
                                                    <p class="">Shaun Park</p>
                                                </div>
                                                <div>
                                                    <b-button variant="secondary" size="sm">View</b-button>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-md-flex d-block text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/profile-8.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-xl-flex d-block justify-content-between">
                                                <div class="">
                                                    <h6 class="">Meeting with client</h6>
                                                    <p class="">Roxanne</p>
                                                </div>
                                                <div>
                                                    <b-button variant="secondary" size="sm">View</b-button>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-md-flex d-block text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/profile-9.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-xl-flex d-block justify-content-between">
                                                <div class="">
                                                    <h6 class="">Project Detail</h6>
                                                    <p class="">Lisa Doe</p>
                                                </div>
                                                <div>
                                                    <b-button variant="secondary" size="sm">View</b-button>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-md-flex d-block text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/profile-10.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-xl-flex d-block justify-content-between">
                                                <div class="">
                                                    <h6 class="">Edited Post Apporval</h6>
                                                    <p class="">Kristen Beck</p>
                                                </div>
                                                <div>
                                                    <b-button variant="secondary" size="sm">View</b-button>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-md-flex d-block text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/profile-11.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-xl-flex d-block justify-content-between">
                                                <div class="">
                                                    <h6 class="">Project Lead Pickup</h6>
                                                    <p class="">Alma Clarke</p>
                                                </div>
                                                <div>
                                                    <b-button variant="secondary" size="sm">View</b-button>
                                                </div>
                                            </div>
                                        </b-media>
                                    </draggable>
                                </div>
                            </div>
                        </div>

                        <div class="code-section-container show-code">
                            <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                            <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                <highlight>
                                    <pre>
&lt;div class='parent ex-1'&gt;
    &lt;div class=&quot;row&quot;&gt;

        &lt;div class=&quot;col-sm-6&quot;&gt;
            &lt;draggable class='drag-drop dragula' group=&quot;default&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-1&quot; :animation=&quot;200&quot;&gt;
                &lt;b-media class=&quot;d-md-flex d-block text-sm-left text-center&quot;&gt;
                    &lt;template #aside&gt;
                        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-2.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                    &lt;/template&gt;
                    &lt;div class=&quot;d-xl-flex d-block justify-content-between&quot;&gt;
                        &lt;div class=&quot;&quot;&gt;
                            &lt;h6 class=&quot;&quot;&gt;Need to be approved&lt;/h6&gt;
                            &lt;p class=&quot;&quot;&gt;Kelly Young&lt;/p&gt;
                        &lt;/div&gt;
                        &lt;div&gt;
                            &lt;b-button variant=&quot;secondary&quot; size=&quot;sm&quot;&gt;View&lt;/b-button&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/b-media&gt;                
            &lt;/draggable&gt;
        &lt;/div&gt;

        &lt;div class=&quot;col-sm-6&quot;&gt;
            &lt;draggable class='drag-drop' group=&quot;default&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-1&quot; :animation=&quot;200&quot;&gt;
                &lt;b-media class=&quot;d-md-flex d-block text-sm-left text-center&quot;&gt;
                    &lt;template #aside&gt;
                        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-7.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                    &lt;/template&gt;
                    &lt;div class=&quot;d-xl-flex d-block justify-content-between&quot;&gt;
                        &lt;div class=&quot;&quot;&gt;
                            &lt;h6 class=&quot;&quot;&gt;Need to be approved&lt;/h6&gt;
                            &lt;p class=&quot;&quot;&gt;Shaun Park&lt;/p&gt;
                        &lt;/div&gt;
                        &lt;div&gt;
                            &lt;b-button variant=&quot;secondary&quot; size=&quot;sm&quot;&gt;View&lt;/b-button&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/b-media&gt;                
            &lt;/draggable&gt;
        &lt;/div&gt;

    &lt;/div&gt;
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
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Icon Change</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="parent ex-2">
                            <div class="row">
                                <div class="col-md-6">
                                    <draggable class="drag-drop" group="icon_change" ghost-class="gu-transit" drag-class="el-drag-ex-2" :animation="200">
                                        <b-media class="d-block d-sm-flex">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/profile-16.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-flex justify-content-between">
                                                <div class="">
                                                    <h6 class="">Lisa Doe</h6>
                                                    <p class="">New post is written by Andy.</p>
                                                </div>
                                                <div class="">
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
                                                        class="feather feather-star f-icon-line"
                                                        style="display:block"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                    </svg>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-block d-sm-flex">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/drag-4.jpg" class="img-fluid" />
                                            </template>
                                            <div class="d-flex justify-content-between">
                                                <div class="">
                                                    <h6 class="">Shaun Park</h6>
                                                    <p class="">New project meeting.</p>
                                                </div>
                                                <div class="">
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
                                                        class="feather feather-star f-icon-line"
                                                        style="display:block"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                    </svg>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-block d-sm-flex">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/profile-26.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-flex justify-content-between">
                                                <div class="">
                                                    <h6 class="">Andy King</h6>
                                                    <p class="">Get new project details from Shaun</p>
                                                </div>
                                                <div class="">
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
                                                        class="feather feather-star f-icon-line"
                                                        style="display:block"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                    </svg>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-block d-sm-flex">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/g-7.png" class="img-fluid" />
                                            </template>
                                            <div class="d-flex justify-content-between">
                                                <div class="">
                                                    <h6 class="">Judy Holmes</h6>
                                                    <p class="">A post is edited by Mary.</p>
                                                </div>
                                                <div class="">
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
                                                        class="feather feather-star f-icon-line"
                                                        style="display:block"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                    </svg>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-block d-sm-flex">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/drag-2.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-flex justify-content-between">
                                                <div class="">
                                                    <h6 class="">Alma Clarke</h6>
                                                    <p class="">Pick up Lisa Doe from the airport.</p>
                                                </div>
                                                <div class="">
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
                                                        class="feather feather-star f-icon-line"
                                                        style="display:block"
                                                    >
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                                                    </svg>
                                                </div>
                                            </div>
                                        </b-media>
                                    </draggable>
                                </div>

                                <div class="col-md-6">
                                    <draggable class="drag-drop" group="icon_change" ghost-class="gu-transit" drag-class="el-drag-ex-2" :animation="200">
                                        <b-media class="d-block d-sm-flex">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/p7.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-flex justify-content-between">
                                                <div class="">
                                                    <h6 class="">John Doe</h6>
                                                    <p class="">New post is written by Andy.</p>
                                                </div>
                                                <div class="">
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
                                                        class="feather feather-heart f-icon-fill"
                                                    >
                                                        <path
                                                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-block d-sm-flex">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/drag-1.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-flex justify-content-between">
                                                <div class="">
                                                    <h6 class="">Linda Nelson</h6>
                                                    <p class="">New project meeting.</p>
                                                </div>
                                                <div class="">
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
                                                        class="feather feather-heart f-icon-fill"
                                                    >
                                                        <path
                                                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-block d-sm-flex">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/g-8.png" class="img-fluid" />
                                            </template>
                                            <div class="d-flex justify-content-between">
                                                <div class="">
                                                    <h6 class="">Angie Young</h6>
                                                    <p class="">Get new project details from Shaun</p>
                                                </div>
                                                <div class="">
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
                                                        class="feather feather-heart f-icon-fill"
                                                    >
                                                        <path
                                                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-block d-sm-flex">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/p9.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-flex justify-content-between">
                                                <div class="">
                                                    <h6 class="">Amy Diaz</h6>
                                                    <p class="">A post is edited by Mary.</p>
                                                </div>
                                                <div class="">
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
                                                        class="feather feather-heart f-icon-fill"
                                                    >
                                                        <path
                                                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-block d-sm-flex">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/p6.jpeg" class="img-fluid" />
                                            </template>
                                            <div class="d-flex justify-content-between">
                                                <div class="">
                                                    <h6 class="">Lila Perry</h6>
                                                    <p class="">Pick up Lisa Doe from the airport.</p>
                                                </div>
                                                <div class="">
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
                                                        class="feather feather-heart f-icon-fill"
                                                    >
                                                        <path
                                                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </b-media>
                                    </draggable>
                                </div>
                            </div>
                        </div>

                        <div class="code-section-container show-code">
                            <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                            <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                <highlight>
                                    <pre>
&lt;div class='parent ex-2'&gt;
    &lt;div class='row'&gt;

        &lt;div class=&quot;col-md-6&quot;&gt;
            &lt;draggable class='drag-drop' group=&quot;icon_change&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-2&quot; :animation=&quot;200&quot;&gt;
                &lt;b-media class=&quot;d-block d-sm-flex&quot;&gt;
                    &lt;template #aside&gt;
                        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-16.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                    &lt;/template&gt;
                    &lt;div class=&quot;d-flex justify-content-between&quot;&gt;
                        &lt;div class=&quot;&quot;&gt;
                            &lt;h6 class=&quot;&quot;&gt;Lisa Doe&lt;/h6&gt;
                            &lt;p class=&quot;&quot;&gt;New post is written by Andy.&lt;/p&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;&quot;&gt;
                            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-star f-icon-line&quot; style=&quot;display:block&quot;&gt;&lt;polygon points=&quot;12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2&quot;&gt;&lt;/polygon&gt;&lt;/svg&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/b-media&gt;
            &lt;/draggable&gt;
        &lt;/div&gt;

        &lt;div class=&quot;col-md-6&quot;&gt;
            &lt;draggable class='drag-drop' group=&quot;icon_change&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-2&quot; :animation=&quot;200&quot;&gt;
                &lt;b-media class=&quot;d-block d-sm-flex&quot;&gt;
                    &lt;template #aside&gt;
                        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/p7.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                    &lt;/template&gt;
                    &lt;div class=&quot;d-flex justify-content-between&quot;&gt;
                        &lt;div class=&quot;&quot;&gt;
                            &lt;h6 class=&quot;&quot;&gt;John Doe&lt;/h6&gt;
                            &lt;p class=&quot;&quot;&gt;New post is written by Andy.&lt;/p&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;&quot;&gt;
                            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-heart f-icon-fill&quot;&gt;&lt;path d=&quot;M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/b-media&gt;
            &lt;/draggable&gt;
        &lt;/div&gt;

    &lt;/div&gt;
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
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Delete User</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="parent ex-3">
                            <div class="row">
                                <div class="col-md-6">
                                    <draggable id="left-rm-spill" class="drag-drop" group="delete_user" :removeOnSpill="true" ghost-class="gu-transit" drag-class="el-drag-ex-3" :animation="200">
                                        <b-media class="d-block d-sm-flex text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/delete-user-15.jpeg" class="img-fluid" />
                                            </template>
                                            <h5 class=""><span class="usr-commented">Alma Clarke</span> commented on Irene Collins's <span class="comment-topic">Status</span></h5>
                                            <p class="meta-time">18 min ago</p>
                                        </b-media>

                                        <b-media class="d-block d-sm-flex text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/delete-user-4.jpeg" class="img-fluid" />
                                            </template>
                                            <h5 class=""><span class="usr-commented">Susan Phillips</span> commented on Vincent Carpenter's <span class="comment-topic">Status</span></h5>
                                            <p class="meta-time">18 min ago</p>
                                        </b-media>

                                        <b-media class="d-block d-sm-flex text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/delete-user-11.jpeg" class="img-fluid" />
                                            </template>
                                            <h5 class=""><span class="usr-commented">Linda Nelson</span> commented on James Taylor's <span class="comment-topic">Status</span></h5>
                                            <p class="meta-time">18 min ago</p>
                                        </b-media>
                                    </draggable>
                                </div>

                                <div class="col-md-6">
                                    <draggable id="right-rm-spill" class="drag-drop" group="delete_user" :removeOnSpill="true" ghost-class="gu-transit" drag-class="el-drag-ex-3" :animation="200">
                                        <b-media class="d-block d-sm-flex text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/delete-user-12.jpeg" class="img-fluid" />
                                            </template>
                                            <h5 class=""><span class="usr-commented">Grace Roberts</span> commented on Amy Diaz's <span class="comment-topic">Status</span></h5>
                                            <p class="meta-time">18 min ago</p>
                                        </b-media>

                                        <b-media class="d-block d-sm-flex text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/delete-user-16.jpeg" class="img-fluid" />
                                            </template>
                                            <h5 class=""><span class="usr-commented">Mary Mcdonald</span> commented on Judy Holmes's <span class="comment-topic">Status</span></h5>
                                            <p class="meta-time">18 min ago</p>
                                        </b-media>

                                        <b-media class="d-block d-sm-flex text-sm-left text-center">
                                            <template #aside>
                                                <img alt="avatar" src="@/assets/images/delete-user-17.jpeg" class="img-fluid" />
                                            </template>
                                            <h5 class=""><span class="usr-commented">Oscar Garner</span> commented on Justin Cross's <span class="comment-topic">Status</span></h5>
                                            <p class="meta-time">18 min ago</p>
                                        </b-media>
                                    </draggable>
                                </div>
                            </div>
                        </div>

                        <div class="code-section-container show-code">
                            <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                            <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                <highlight>
                                    <pre>
&lt;div class='parent ex-3'&gt;
    &lt;div class='row'&gt;

        &lt;div class=&quot;col-md-6&quot;&gt;
            &lt;draggable id='left-rm-spill' class='drag-drop' group=&quot;delete_user&quot; :removeOnSpill=&quot;true&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-3&quot; :animation=&quot;200&quot;&gt;
                &lt;b-media class=&quot;d-block d-sm-flex text-sm-left text-center&quot;&gt;
                    &lt;template #aside&gt;
                        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/delete-user-15.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                    &lt;/template&gt;
                    &lt;h5 class=&quot;&quot;&gt;&lt;span class=&quot;usr-commented&quot;&gt;Alma Clarke&lt;/span&gt; commented on Irene Collins's &lt;span class=&quot;comment-topic&quot;&gt;Status&lt;/span&gt;&lt;/h5&gt;
                    &lt;p class=&quot;meta-time&quot;&gt;18 min ago&lt;/p&gt;
                &lt;/b-media&gt;
            &lt;/draggable&gt;
        &lt;/div&gt;

        &lt;div class=&quot;col-md-6&quot;&gt;
            &lt;draggable id='right-rm-spill' class='drag-drop' group=&quot;delete_user&quot; :removeOnSpill=&quot;true&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-3&quot; :animation=&quot;200&quot;&gt;
                &lt;b-media class=&quot;d-block d-sm-flex text-sm-left text-center&quot;&gt;
                    &lt;template #aside&gt;
                        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/delete-user-12.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                    &lt;/template&gt;
                    &lt;h5 class=&quot;&quot;&gt;&lt;span class=&quot;usr-commented&quot;&gt;Grace Roberts&lt;/span&gt; commented on Amy Diaz's &lt;span class=&quot;comment-topic&quot;&gt;Status&lt;/span&gt;&lt;/h5&gt;
                    &lt;p class=&quot;meta-time&quot;&gt;18 min ago&lt;/p&gt;
                &lt;/b-media&gt;
            &lt;/draggable&gt;
        &lt;/div&gt;

    &lt;/div&gt;
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
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>News Feeds</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="parent ex-4">
                            <div class="row">
                                <div class="col-md-6">
                                    <draggable id="left-rollbacks" class="drag-drop" group="news_feed" ghost-class="gu-transit" drag-class="el-drag-ex-4" :animation="200">
                                        <div class="card post text-post" style="">
                                            <div class="card-body">
                                                <b-media class="user-meta d-sm-flex d-block text-sm-left text-center">
                                                    <template #aside>
                                                        <img alt="avatar" src="@/assets/images/dragp-1.jpeg" class="img-fluid" />
                                                    </template>
                                                    <h5 class="">Linda Nelson</h5>
                                                    <p class="meta-time">11 hours ago</p>
                                                </b-media>

                                                <div class="post-content  text-sm-left text-center">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                        veniam, quis nostrud exercitation.
                                                    </p>
                                                </div>
                                                <div class="row people-liked-post">
                                                    <div class="col-sm-5 text-sm-left text-center">
                                                        <ul class="list-inline people-liked-img">
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-6.jpeg" class="" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-7.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-8.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-10.jpeg" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-7 text-sm-right text-center">
                                                        <div class="people-liked-post-name">
                                                            <span><a href="">Vincent, Mary</a> and 19 other like this</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card post text-post" style="">
                                            <div class="card-body">
                                                <b-media class="user-meta d-sm-flex d-block text-sm-left text-center">
                                                    <template #aside>
                                                        <img alt="avatar" src="@/assets/images/dragp-7.jpeg" class="img-fluid" />
                                                    </template>
                                                    <h5 class="">Irene Collins</h5>
                                                    <p class="meta-time">11 hours ago</p>
                                                </b-media>

                                                <div class="post-content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                        veniam, quis nostrud exercitation.
                                                    </p>
                                                </div>
                                                <div class="row people-liked-post">
                                                    <div class="col-sm-5 text-sm-left text-center">
                                                        <ul class="list-inline people-liked-img">
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-6.jpeg" class="" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-7.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-8.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-10.jpeg" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-7 text-sm-right text-center">
                                                        <div class="people-liked-post-name">
                                                            <span><a href="">Vincent, Mary</a> and 19 other like this</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>

                                <div class="col-md-6">
                                    <draggable id="right-rollbacks" class="drag-drop" group="news_feed" ghost-class="gu-transit" drag-class="el-drag-ex-4" :animation="200">
                                        <div class="card post text-post" style="">
                                            <div class="card-body">
                                                <b-media class="user-meta d-sm-flex d-block text-sm-left text-center">
                                                    <template #aside>
                                                        <img alt="avatar" src="@/assets/images/dragp-4.jpeg" class="img-fluid" />
                                                    </template>
                                                    <h5 class="">Dale Butler</h5>
                                                    <p class="meta-time">11 hours ago</p>
                                                </b-media>

                                                <div class="post-content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                        veniam, quis nostrud exercitation.
                                                    </p>
                                                </div>
                                                <div class="row people-liked-post">
                                                    <div class="col-sm-5 text-sm-left text-center">
                                                        <ul class="list-inline people-liked-img">
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-6.jpeg" class="" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-7.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-8.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-10.jpeg" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-7 text-sm-right text-center">
                                                        <div class="people-liked-post-name">
                                                            <span><a href="">Vincent, Mary</a> and 19 other like this</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card post text-post" style="">
                                            <div class="card-body">
                                                <b-media class="user-meta d-sm-flex d-block text-sm-left text-center">
                                                    <template #aside>
                                                        <img alt="avatar" src="@/assets/images/dragp-6.jpeg" class="img-fluid" />
                                                    </template>
                                                    <h5 class="">Iris Hubbard</h5>
                                                    <p class="meta-time">11 hours ago</p>
                                                </b-media>

                                                <div class="post-content">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                        veniam, quis nostrud exercitation.
                                                    </p>
                                                </div>
                                                <div class="row people-liked-post">
                                                    <div class="col-sm-5 text-sm-left text-center">
                                                        <ul class="list-inline people-liked-img">
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-6.jpeg" class="" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-7.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-8.jpeg" />
                                                            </li>
                                                            <li class="list-inline-item chat-online-usr">
                                                                <img alt="avatar" src="@/assets/images/profile-10.jpeg" />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-sm-7 text-sm-right text-center">
                                                        <div class="people-liked-post-name">
                                                            <span><a href="">Vincent, Mary</a> and 19 other like this</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </draggable>
                                </div>
                            </div>
                        </div>

                        <div class="code-section-container show-code">
                            <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                            <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                <highlight>
                                    <pre>
&lt;div class='parent ex-4'&gt;
    &lt;div class='row'&gt;

        &lt;div class=&quot;col-md-6&quot;&gt;
            &lt;draggable id='left-rollbacks' class='drag-drop' group=&quot;news_feed&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-4&quot; :animation=&quot;200&quot;&gt;
                &lt;div class=&quot;card post text-post&quot; style=&quot;&quot;&gt;
                    &lt;div class=&quot;card-body&quot;&gt;
                        &lt;b-media class=&quot;user-meta d-sm-flex d-block text-sm-left text-center&quot;&gt;
                            &lt;template #aside&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/dragp-1.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                            &lt;/template&gt;
                            &lt;h5 class=&quot;&quot;&gt;Linda Nelson&lt;/h5&gt;
                            &lt;p class=&quot;meta-time&quot;&gt;11 hours ago&lt;/p&gt;
                        &lt;/b-media&gt;

                        &lt;div class=&quot;post-content  text-sm-left text-center&quot;&gt;
                            &lt;p&gt;
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation.
                            &lt;/p&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;row people-liked-post&quot;&gt;
                            &lt;div class=&quot;col-sm-5 text-sm-left text-center&quot;&gt;
                                &lt;ul class=&quot;list-inline people-liked-img&quot;&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-6.jpeg&quot; class=&quot;&quot;&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-7.jpeg&quot;&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-8.jpeg&quot;&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-10.jpeg&quot;&gt;
                                    &lt;/li&gt;
                                &lt;/ul&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;col-sm-7 text-sm-right text-center&quot;&gt;
                                &lt;div class=&quot;people-liked-post-name&quot;&gt;
                                    &lt;span&gt;&lt;a href=&quot;&quot;&gt;Vincent, Mary&lt;/a&gt; and 19 other like this&lt;/span&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/draggable&gt;
        &lt;/div&gt;

        &lt;div class=&quot;col-md-6&quot;&gt;
            &lt;draggable id='right-rollbacks' class='drag-drop' group=&quot;news_feed&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-4&quot; :animation=&quot;200&quot;&gt;
                &lt;div class=&quot;card post text-post&quot; style=&quot;&quot;&gt;
                    &lt;div class=&quot;card-body&quot;&gt;
                        &lt;b-media class=&quot;user-meta d-sm-flex d-block text-sm-left text-center&quot;&gt;
                            &lt;template #aside&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/dragp-4.jpeg&quot; class=&quot;img-fluid&quot; /&gt;
                            &lt;/template&gt;
                            &lt;h5 class=&quot;&quot;&gt;Dale Butler&lt;/h5&gt;
                            &lt;p class=&quot;meta-time&quot;&gt;11 hours ago&lt;/p&gt;
                        &lt;/b-media&gt;

                        &lt;div class=&quot;post-content&quot;&gt;
                            &lt;p&gt;
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation.
                            &lt;/p&gt;
                        &lt;/div&gt;
                        &lt;div class=&quot;row people-liked-post&quot;&gt;
                            &lt;div class=&quot;col-sm-5 text-sm-left text-center&quot;&gt;
                                &lt;ul class=&quot;list-inline people-liked-img&quot;&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-6.jpeg&quot; class=&quot;&quot;&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-7.jpeg&quot;&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-8.jpeg&quot;&gt;
                                    &lt;/li&gt;
                                    &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-10.jpeg&quot;&gt;
                                    &lt;/li&gt;
                                &lt;/ul&gt;
                            &lt;/div&gt;
                            &lt;div class=&quot;col-sm-7 text-sm-right text-center&quot;&gt;
                                &lt;div class=&quot;people-liked-post-name&quot;&gt;
                                    &lt;span&gt;&lt;a href=&quot;&quot;&gt;Vincent, Mary&lt;/a&gt; and 19 other like this&lt;/span&gt;
                                &lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/draggable&gt;
        &lt;/div&gt;

    &lt;/div&gt;
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
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Drag Handler</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="parent ex-5">
                            <div class="row">
                                <div class="col-md-6">
                                    <draggable id="left-lovehandles" class="drag-drop" group="drag_handle" handle=".handle" ghost-class="gu-transit" drag-class="el-drag-ex-5" :animation="200">
                                        <b-media class=" d-block d-xl-flex">
                                            <template #aside>
                                                <ul class="list-inline people-liked-img text-center text-sm-left ml-2">
                                                    <li class="list-inline-item badge-notify mr-0">
                                                        <div class="notification">
                                                            <span class="badge badge-primary">5</span>
                                                        </div>
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-6.jpeg" class="" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-7.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-8.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-10.jpeg" />
                                                    </li>
                                                </ul>
                                            </template>
                                            <div class="d-sm-flex d-block justify-content-between text-sm-left text-center">
                                                <div class="">
                                                    <h5 class="">Engineering & Security</h5>
                                                </div>
                                                <div>
                                                    <span class="handle">+</span>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-block d-xl-flex">
                                            <template #aside>
                                                <ul class="list-inline people-liked-img text-center text-sm-left ml-2">
                                                    <li class="list-inline-item badge-notify mr-0">
                                                        <div class="notification">
                                                            <span class="badge badge-secondary">5</span>
                                                        </div>
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-6.jpeg" class="" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-7.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-8.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-10.jpeg" />
                                                    </li>
                                                </ul>
                                            </template>
                                            <div class="d-sm-flex d-block justify-content-between text-sm-left text-center">
                                                <div class="">
                                                    <h5 class="">Front Office</h5>
                                                </div>
                                                <div>
                                                    <span class="handle">+</span>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-block d-xl-flex">
                                            <template #aside>
                                                <ul class="list-inline people-liked-img text-center text-sm-left ml-2">
                                                    <li class="list-inline-item badge-notify mr-0">
                                                        <div class="notification">
                                                            <span class="badge badge-success">2</span>
                                                        </div>
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-6.jpeg" class="" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-7.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-8.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-10.jpeg" />
                                                    </li>
                                                </ul>
                                            </template>
                                            <div class="d-sm-flex d-block justify-content-between text-sm-left text-center">
                                                <div class="">
                                                    <h5 class="">Logistics</h5>
                                                </div>
                                                <div>
                                                    <span class="handle">+</span>
                                                </div>
                                            </div>
                                        </b-media>
                                    </draggable>
                                </div>

                                <div class="col-md-6">
                                    <draggable id="right-lovehandles" class="drag-drop" group="drag_handle" handle=".handle" ghost-class="gu-transit" drag-class="el-drag-ex-5" :animation="200">
                                        <b-media class="d-block d-xl-flex">
                                            <template #aside>
                                                <ul class="list-inline people-liked-img text-center text-sm-left ml-2">
                                                    <li class="list-inline-item badge-notify mr-0">
                                                        <div class="notification">
                                                            <span class="badge badge-info">5</span>
                                                        </div>
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-6.jpeg" class="" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-7.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-8.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-10.jpeg" />
                                                    </li>
                                                </ul>
                                            </template>
                                            <div class="d-sm-flex d-block justify-content-between text-sm-left text-center">
                                                <div class="">
                                                    <h5 class="">Marketing & Sales</h5>
                                                </div>
                                                <div>
                                                    <span class="handle">+</span>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-block d-xl-flex">
                                            <template #aside>
                                                <ul class="list-inline people-liked-img text-center text-sm-left ml-2">
                                                    <li class="list-inline-item badge-notify mr-0">
                                                        <div class="notification">
                                                            <span class="badge badge-danger">9</span>
                                                        </div>
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-6.jpeg" class="" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-7.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-8.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-10.jpeg" />
                                                    </li>
                                                </ul>
                                            </template>
                                            <div class="d-sm-flex d-block justify-content-between text-sm-left text-center">
                                                <div class="">
                                                    <h5 class="">Admin</h5>
                                                </div>
                                                <div>
                                                    <span class="handle">+</span>
                                                </div>
                                            </div>
                                        </b-media>

                                        <b-media class="d-block d-xl-flex">
                                            <template #aside>
                                                <ul class="list-inline people-liked-img text-center text-sm-left ml-2">
                                                    <li class="list-inline-item badge-notify mr-0">
                                                        <div class="notification">
                                                            <span class="badge badge-primary">8</span>
                                                        </div>
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-6.jpeg" class="" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-7.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-8.jpeg" />
                                                    </li>
                                                    <li class="list-inline-item chat-online-usr">
                                                        <img alt="avatar" src="@/assets/images/profile-10.jpeg" />
                                                    </li>
                                                </ul>
                                            </template>
                                            <div class="d-sm-flex d-block justify-content-between text-sm-left text-center">
                                                <div class="">
                                                    <h5 class="">HR</h5>
                                                </div>
                                                <div>
                                                    <span class="handle">+</span>
                                                </div>
                                            </div>
                                        </b-media>
                                    </draggable>
                                </div>
                            </div>
                        </div>

                        <div class="code-section-container show-code">
                            <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                            <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                <highlight>
                                    <pre>
&lt;div class='parent ex-5'&gt;
    &lt;div class='row'&gt;

        &lt;div class=&quot;col-md-6&quot;&gt;
            &lt;draggable id='left-lovehandles' class='drag-drop' group=&quot;drag_handle&quot; handle=&quot;.handle&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-5&quot; :animation=&quot;200&quot;&gt;

                &lt;b-media class=&quot; d-block d-xl-flex&quot;&gt;
                    &lt;template #aside&gt;
                        &lt;ul class=&quot;list-inline people-liked-img text-center text-sm-left ml-2&quot;&gt;
                            &lt;li class=&quot;list-inline-item badge-notify mr-0&quot;&gt;
                                &lt;div class=&quot;notification&quot;&gt;
                                    &lt;span class=&quot;badge badge-primary&quot;&gt;5&lt;/span&gt;
                                &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-6.jpeg&quot; class=&quot;&quot;&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-7.jpeg&quot;&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-8.jpeg&quot;&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-10.jpeg&quot;&gt;
                            &lt;/li&gt;
                        &lt;/ul&gt;
                    &lt;/template&gt;
                    &lt;div class=&quot;d-sm-flex d-block justify-content-between text-sm-left text-center&quot;&gt;
                        &lt;div class=&quot;&quot;&gt;
                            &lt;h5 class=&quot;&quot;&gt;Engineering &amp; Security&lt;/h5&gt;
                        &lt;/div&gt;
                        &lt;div&gt;
                            &lt;span class=&quot;handle&quot;&gt;+&lt;/span&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/b-media&gt;
            &lt;/draggable&gt;
        &lt;/div&gt;

        &lt;div class=&quot;col-md-6&quot;&gt;
            &lt;draggable id='right-lovehandles' class='drag-drop' group=&quot;drag_handle&quot; handle=&quot;.handle&quot; ghost-class=&quot;gu-transit&quot; drag-class=&quot;el-drag-ex-5&quot; :animation=&quot;200&quot;&gt;

                &lt;b-media class=&quot;d-block d-xl-flex&quot;&gt;
                    &lt;template #aside&gt;
                        &lt;ul class=&quot;list-inline people-liked-img text-center text-sm-left ml-2&quot;&gt;
                            &lt;li class=&quot;list-inline-item badge-notify mr-0&quot;&gt;
                                &lt;div class=&quot;notification&quot;&gt;
                                    &lt;span class=&quot;badge badge-info&quot;&gt;5&lt;/span&gt;
                                &lt;/div&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-6.jpeg&quot; class=&quot;&quot;&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-7.jpeg&quot;&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-8.jpeg&quot;&gt;
                            &lt;/li&gt;
                            &lt;li class=&quot;list-inline-item chat-online-usr&quot;&gt;
                                &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-10.jpeg&quot;&gt;
                            &lt;/li&gt;
                        &lt;/ul&gt;
                    &lt;/template&gt;
                    &lt;div class=&quot;d-sm-flex d-block justify-content-between text-sm-left text-center&quot;&gt;
                        &lt;div class=&quot;&quot;&gt;
                            &lt;h5 class=&quot;&quot;&gt;Marketing &amp; Sales&lt;/h5&gt;
                        &lt;/div&gt;
                        &lt;div&gt;
                            &lt;span class=&quot;handle&quot;&gt;+&lt;/span&gt;
                        &lt;/div&gt;
                    &lt;/div&gt;
                &lt;/b-media&gt;
            &lt;/draggable&gt;
        &lt;/div&gt;

    &lt;/div&gt;
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
</template>
<style scoped>
    .panel {
        padding: 0;
    }
</style>
<script>
    import '@/assets/sass/scrollspyNav.scss';
    import '@/assets/sass/drag-drop/drag-drop.css';
    import highlight from '@/components/plugins/highlight.vue';
    import draggable from 'vuedraggable';

    export default {
        metaInfo: { title: 'Drag & Drop' },
        components: {
            highlight,
            draggable
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
