<template>
    <div class="layout-px-spacing">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Pages</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>FAQ</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="faq">

            <div class="faq-layouting layout-spacing">

                <div class="fq-tab-section layout-top-spacing">
                    <div class="row">
                        <div class="col-md-12">

                            <h2>Frequently Asked <span>Questions</span></h2>

                            <div class="row">

                                <div class="col-lg-6">

                                    <div class="accordion" id="simple_faq">
                                        <b-card no-body>
                                            <b-card-header>
                                                <div class="mb-0" v-b-toggle.fqcollapseOne>
                                                    <span class="faq-q-title">Getting started</span> <div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
                                                </div>
                                            </b-card-header>
                                            <b-collapse id="fqcollapseOne" accordion="faq-accordion">
                                                <b-card-body>
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>

                                        <b-card no-body>
                                            <b-card-header>
                                                <div class="mb-0" v-b-toggle.fqcollapseTwo>
                                                    <span class="faq-q-title">How can I unzip porduct files</span> <div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
                                                </div>
                                            </b-card-header>
                                            <b-collapse id="fqcollapseTwo" accordion="faq-accordion" visible>
                                                <b-card-body>
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>

                                        <b-card no-body>
                                            <b-card-header>
                                                <div class="mb-0" v-b-toggle.fqcollapseThree>
                                                    <span class="faq-q-title">Sidebar not rendering CSS</span><div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
                                                </div>
                                            </b-card-header>
                                            <b-collapse id="fqcollapseThree" accordion="faq-accordion">
                                                <b-card-body>
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>

                                        <b-card no-body>
                                            <b-card-header>
                                                <div class="mb-0" v-b-toggle.fqcollapseFour>
                                                    <span class="faq-q-title">Production Level Built</span><div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
                                                </div>
                                            </b-card-header>
                                            <b-collapse id="fqcollapseFour" accordion="faq-accordion">
                                                <b-card-body>
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>

                                        <b-card no-body>
                                            <b-card-header>
                                                <div class="mb-0" v-b-toggle.fqcollapseFive>
                                                    <span class="faq-q-title">Compilation Issue</span><div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
                                                </div>
                                            </b-card-header>
                                            <b-collapse id="fqcollapseFive" accordion="faq-accordion">
                                                <b-card-body>
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>

                                        <b-card no-body>
                                            <b-card-header>
                                                <div class="mb-0" v-b-toggle.fqcollapseSix>
                                                    <span class="faq-q-title">Getting started with starter kits</span><div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
                                                </div>
                                            </b-card-header>
                                            <b-collapse id="fqcollapseSix" accordion="faq-accordion">
                                                <b-card-body>
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>
                                    </div>

                                </div>
                                <div class="col-lg-6">

                                    <div class="accordion" id="simple_faq1">
                                        <b-card no-body>
                                            <b-card-header>
                                                <div class="mb-0" v-b-toggle.fqcollapseOne1>
                                                    <span class="faq-q-title">Are images are provided in the download version?</span> <div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
                                                </div>
                                            </b-card-header>
                                            <b-collapse id="fqcollapseOne1" accordion="faq1-accordion">
                                                <b-card-body>
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>

                                        <b-card no-body>
                                            <b-card-header>
                                                <div class="mb-0" v-b-toggle.fqcollapseTwo2>
                                                    <span class="faq-q-title">How can I customize APPS sections?</span> <div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
                                                </div>
                                            </b-card-header>
                                            <b-collapse id="fqcollapseTwo2" accordion="faq1-accordion">
                                                <b-card-body>
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>

                                        <b-card no-body>
                                            <b-card-header>
                                                <div class="mb-0" v-b-toggle.fqcollapseThree3>
                                                    <span class="faq-q-title">Getting started with multiple layouts</span><div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
                                                </div>
                                            </b-card-header>
                                            <b-collapse id="fqcollapseThree3" accordion="faq1-accordion">
                                                <b-card-body>
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>

                                        <b-card no-body>
                                            <b-card-header>
                                                <div class="mb-0" v-b-toggle.fqcollapseFour4>
                                                    <span class="faq-q-title">How to use task managers?</span><div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
                                                </div>
                                            </b-card-header>
                                            <b-collapse id="fqcollapseFour4" accordion="faq1-accordion">
                                                <b-card-body>
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>

                                        <b-card no-body>
                                            <b-card-header>
                                                <div class="mb-0" v-b-toggle.fqcollapseFive5>
                                                    <span class="faq-q-title">How to setup a vpn?</span><div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
                                                </div>
                                            </b-card-header>
                                            <b-collapse id="fqcollapseFive5" accordion="faq1-accordion">
                                                <b-card-body>
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>

                                        <b-card no-body>
                                            <b-card-header>
                                                <div class="mb-0" v-b-toggle.fqcollapseSix6>
                                                    <span class="faq-q-title">Chrome vs Edge which is better!</span><div class="icons"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></div>
                                                </div>
                                            </b-card-header>
                                            <b-collapse id="fqcollapseSix6" accordion="faq1-accordion" visible>
                                                <b-card-body>
                                                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                </b-card-body>
                                            </b-collapse>
                                        </b-card>
                                    </div>

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
    import '@/assets/sass/pages/faq/faq2.scss';
    export default {
        metaInfo: { title: 'FAQ' },
        mounted() {
        },
        methods: {
        }
    };
</script>
