<template>
    <div class="layout-px-spacing">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Pages</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Helpdesk</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="helpdesk container">

            <div class="helpdesk layout-spacing">

                <div class="hd-header-wrapper">
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <h4 class="">Helpdesk</h4>
                            <p class="">A knowledge base Admin Template </p>

                            <div class="row">
                                <div class="col-xl-6 col-lg-7 col-md-7 col-sm-11 col-11 mx-auto">
                                    <b-input-group class="mb-3">
                                        <template #prepend>
                                            <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
                                        </template>
                                        <b-form-input placeholder="Let's find your question in fast way"></b-form-input>
                                    </b-input-group>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hd-tab-section">
                    <div class="row">
                        <div class="col-md-12 mb-5 mt-5">

                            <div class="accordion" id="hd-statistics">
                                <b-card no-body>
                                    <b-card-header role="tab">
                                        <div class="mb-0">
                                            <div v-b-toggle.collapse-hd-statistics-1>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                                                Popular articles
                                            </div>
                                        </div>
                                    </b-card-header>

                                    <b-collapse id="collapse-hd-statistics-1" accordion="helpdesk-accordion">
                                        <b-card-body>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body>
                                    <b-card-header role="tab">
                                        <div class="mb-0">
                                            <div v-b-toggle.collapse-hd-statistics-2>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                                                Get started with CORK
                                            </div>
                                        </div>
                                    </b-card-header>
                                    <b-collapse id="collapse-hd-statistics-2" visible accordion="helpdesk-accordion">
                                        <b-card-body>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body>
                                    <b-card-header>
                                        <div class="mb-0">
                                            <div v-b-toggle.collapse-hd-statistics-3>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                                                Browse the web
                                            </div>
                                        </div>
                                    </b-card-header>
                                    <b-collapse id="collapse-hd-statistics-3" accordion="helpdesk-accordion">
                                        <b-card-body>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>


                                <b-card no-body>
                                    <b-card-header>
                                        <div class="mb-0">
                                            <div v-b-toggle.collapse-hd-statistics-4>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                                                Customize data easily
                                            </div>
                                        </div>
                                    </b-card-header>

                                    <b-collapse id="collapse-hd-statistics-4" accordion="helpdesk-accordion">
                                        <b-card-body>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header>
                                        <div class="mb-0">
                                            <div v-b-toggle.collapse-hd-statistics-5>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                                                Let CORK do tasks for you
                                            </div>
                                        </div>
                                    </b-card-header>
                                    <b-collapse id="collapse-hd-statistics-5" accordion="helpdesk-accordion">
                                        <b-card-body>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header>
                                        <div class="mb-0">
                                            <div v-b-toggle.collapse-hd-statistics-6>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                                                Track your Todo list
                                            </div>
                                        </div>
                                    </b-card-header>
                                    <b-collapse id="collapse-hd-statistics-6" accordion="helpdesk-accordion">
                                        <b-card-body>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>


                                <b-card no-body>
                                    <b-card-header>
                                        <div class="mb-0">
                                            <div v-b-toggle.collapse-hd-statistics-7>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                                                Secure chat and mail system
                                            </div>
                                        </div>
                                    </b-card-header>

                                    <b-collapse id="collapse-hd-statistics-7" accordion="helpdesk-accordion">
                                        <b-card-body>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header>
                                        <div class="mb-0">
                                            <div v-b-toggle.collapse-hd-statistics-8>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                                                Schedule your days
                                            </div>
                                        </div>
                                    </b-card-header>

                                    <b-collapse id="collapse-hd-statistics-8" accordion="helpdesk-accordion">
                                        <b-card-body>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                                <b-card no-body>
                                    <b-card-header>
                                        <div class="mb-0">
                                            <div v-b-toggle.collapse-hd-statistics-9>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                                                Use CORK with any programming language
                                            </div>
                                        </div>
                                    </b-card-header>
                                    <b-collapse id="collapse-hd-statistics-9" accordion="helpdesk-accordion">
                                        <b-card-body>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>
                                <b-card no-body>
                                    <b-card-header>
                                        <div class="mb-0">
                                            <div v-b-toggle.collapse-hd-statistics-10>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line></svg>
                                                Change CORK settings
                                            </div>
                                        </div>
                                    </b-card-header>
                                    <b-collapse id="collapse-hd-statistics-10" accordion="helpdesk-accordion">
                                        <b-card-body>
                                            <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                        </b-card-body>
                                    </b-collapse>
                                </b-card>

                            </div>


                        </div>
                    </div>
                </div>

                <div class="hd-contact-section">
                    <div class="hd-slider">
                        <div class="row">
                            <div class="col-sm-12">
                                <b-carousel ref="helpdesk_slider" indicators>
                                    <b-carousel-slide class="community-help">
                                        <template #img>
                                            <div class="carousel-item-content">
                                                <h4 class="hd-slide-header">Get help by community.</h4>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <div class="media">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                                            <div class="media-body">
                                                                <h5>CORK Forum</h5>
                                                                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="media">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-terminal"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                                                            <div class="media-body">
                                                                <h5>How to Code</h5>
                                                                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </b-carousel-slide>
                                    <b-carousel-slide class="news-updates">
                                        <template #img>
                                            <div class="carousel-item-content">
                                                <h4 class="hd-slide-header">Latest news and updates</h4>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <div class="media">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                                            <div class="media-body">
                                                                <h5>CORK Blog</h5>
                                                                <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                    </b-carousel-slide>


                                    <a href="javascript:;" class="carousel-control-prev" @click="$refs.helpdesk_slider.prev()">
                                        <span class="carousel-control-prev-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a href="javascript:;" class="carousel-control-next" @click="$refs.helpdesk_slider.next()">
                                        <span class="carousel-control-next-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </b-carousel>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
    import '@/assets/sass/pages/helpdesk.scss';
    export default {
        metaInfo: { title: 'Helpdesk' },
        mounted() {
        },
        methods: {
        }
    };
</script>
