<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components </a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Modals</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#modalBasic" class="nav-link scrollactive-item">Basic</a>
                    <a href="#modalVerticallyCentered" class="nav-link scrollactive-item">Vertically Centered</a>
                    <a href="#modalRemoveAnimation" class="nav-link scrollactive-item">Remove animation</a>
                    <a href="#modalOptionalSizes" class="nav-link scrollactive-item">Optional sizes</a>
                    <a href="#modalVideo" class="nav-link scrollactive-item">Video</a>
                    <a href="#modalAnimationStyleModal" class="nav-link scrollactive-item">Animation Style Modal</a>
                    <a href="#modalCustom" class="nav-link scrollactive-item">Custom</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/modal" class="text-info">
                            https://bootstrap-vue.org/docs/components/modal
                        </a>
                    </div>
                </div>
            </div>
            <div class="row layout-top-spacing">
                <div id="modalBasic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <!-- Button trigger modal -->
                            <div class="text-center">
                                <b-button variant="primary" class="mb-2 mr-2" v-b-modal.exampleModal>Launch modal</b-button>
                            </div>
                            <!-- Modal -->
                            <b-modal id="exampleModal" title="Modal title">
                                <p class="modal-text">
                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                                    montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('exampleModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-modal id=&quot;exampleModal&quot; title=&quot;Modal title&quot;&gt;
    &lt;p class=&quot;modal-text&quot;&gt;Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi. &lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('exampleModal')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="modalVerticallyCentered" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Vertically centered</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="text-center">
                                <!-- Button trigger modal -->
                                <b-button variant="primary" class="mb-2 mr-2" v-b-modal.exampleModalCenter>Launch modal</b-button>
                            </div>
                            <!-- Modal -->
                            <b-modal id="exampleModalCenter" title="Vertically Aligned" centered>
                                <h4 class="modal-heading mb-4 mt-2">Aligned Center</h4>
                                <p class="modal-text">
                                    In hac habitasse platea dictumst. Proin sollicitudin et lacus in tincidunt. Integer nisl ex, sollicitudin eget nulla nec, pharetra lacinia nisl. Aenean nec nunc ex.
                                    Integer varius neque at dolor scelerisque porttitor.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('exampleModalCenter')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-modal id=&quot;exampleModalCenter&quot; title=&quot;Vertically Aligned&quot; centered&gt;
    &lt;h4 class=&quot;modal-heading mb-4 mt-2&quot;&gt;Aligned Center&lt;/h4&gt;
    &lt;p class=&quot;modal-text&quot;&gt;In hac habitasse platea dictumst. Proin sollicitudin et lacus in tincidunt. Integer nisl ex, sollicitudin eget nulla nec, pharetra lacinia nisl. Aenean nec nunc ex. Integer varius neque at dolor scelerisque porttitor.&lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('exampleModalCenter')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
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
                <div id="modalRemoveAnimation" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Remove animation</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="text-center">
                                <b-button variant="primary" class="mb-2 mr-2" v-b-modal.exampleModalRemoveAnimation>Launch modal</b-button>
                            </div>
                            <b-modal id="exampleModalRemoveAnimation" title="No Animations" no-fade>
                                <p class="modal-text">
                                    Proin sollicitudin et lacus in tincidunt. Integer nisl ex, sollicitudin eget nulla nec, pharetra lacinia nisl. Aenean nec nunc ex. Integer varius neque at dolor
                                    scelerisque porttitor.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('exampleModalRemoveAnimation')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-modal id=&quot;exampleModalRemoveAnimation&quot; title=&quot;No Animations&quot; no-fade&gt;
    &lt;p class=&quot;modal-text&quot;&gt;Proin sollicitudin et lacus in tincidunt. Integer nisl ex, sollicitudin eget nulla nec, pharetra lacinia nisl. Aenean nec nunc ex. Integer varius neque at dolor scelerisque porttitor. &lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('exampleModalRemoveAnimation')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="modalOptionalSizes" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Optional sizes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="text-center">
                                <!-- xtra Large modal -->
                                <b-button variant="primary" class="mb-2 mr-2" v-b-modal.modalxl>Extra large</b-button>
                                <!-- Lage modal -->
                                <b-button variant="primary" class="mb-2 mr-2" v-b-modal.modallg>Large</b-button>
                                <!-- Small modal -->
                                <b-button variant="primary" class="mb-2 mr-2" v-b-modal.modalsm>Small</b-button>
                            </div>

                            <!-- xtra Large modal -->
                            <b-modal id="modalxl" title="Extra Large" size="xl">
                                <p class="modal-text">
                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                                    montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('modalxl')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>
                            <!-- Lage modal -->
                            <b-modal id="modallg" title="Large" size="lg">
                                <p class="modal-text">
                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                                    montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('modallg')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>
                            <!-- Small modal -->
                            <b-modal id="modalsm" title="Small" size="sm">
                                <p class="modal-text">
                                    Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient
                                    montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('modalsm')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;!-- xtra Large modal --&gt;
&lt;b-modal id=&quot;modalxl&quot; title=&quot;Extra Large&quot; size=&quot;xl&quot;&gt;
    &lt;p class=&quot;modal-text&quot;&gt;Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.&lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('modalxl')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
&lt;!-- Lage modal --&gt;
&lt;b-modal id=&quot;modallg&quot; title=&quot;Large&quot; size=&quot;lg&quot;&gt;
    &lt;p class=&quot;modal-text&quot;&gt;Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.&lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('modallg')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
&lt;!-- Small modal --&gt;
&lt;b-modal id=&quot;modalsm&quot; title=&quot;Small&quot; size=&quot;sm&quot;&gt;
    &lt;p class=&quot;modal-text&quot;&gt;Mauris mi tellus, pharetra vel mattis sed, tempus ultrices eros. Phasellus egestas sit amet velit sed luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Vivamus ultrices sed urna ac pulvinar. Ut sit amet ullamcorper mi.&lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('modalsm')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
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
                <div id="modalVideo" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Video</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body  text-center modal-video">
                            <b-button variant="primary" class="mb-2 mr-2" v-b-modal.modalYoutube>Play Youtube</b-button>
                            <!-- Modal -->
                            <b-modal id="modalYoutube" modal-class="modal-video" size="lg" body-class="p-0" :hide-footer="true" header-class="p-0 border-0">
                                <template #modal-header-close>
                                    <svg
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-x"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </template>
                                <div class="video-container">
                                    <iframe src="https://www.youtube.com/embed/YE7VzlLtp-4" width="560" height="315" allow="encrypted-media" style="border: 0px;"></iframe>
                                </div>
                            </b-modal>

                            <b-button variant="primary" class="mb-2 mr-2" v-b-modal.modalVimeo>Play Vimeo</b-button>
                            <!-- Modal -->
                            <b-modal id="modalVimeo" modal-class="modal-video" size="lg" body-class="p-0" :hide-footer="true" header-class="p-0 border-0">
                                <template #modal-header-close>
                                    <svg
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-x"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </template>
                                <div class="video-container">
                                    <iframe src="https://player.vimeo.com/video/1084537" width="560" height="315" allow="encrypted-media" style="border: 0px;"></iframe>
                                </div>
                            </b-modal>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
===========
  Youtube
===========

&lt;button id=&quot;yt-video-link&quot; type=&quot;button&quot; class=&quot;btn btn-primary mb-2 mr-2&quot; v-b-modal.modalYoutube&gt;Play Youtube&lt;/button&gt;

&lt;!-- Modal --&gt;
&lt;b-modal id=&quot;modalYoutube&quot; modal-class=&quot;modal-video&quot; size=&quot;lg&quot; body-class=&quot;p-0&quot; :hide-footer=&quot;true&quot; header-class=&quot;p-0 border-0&quot;&gt;
    &lt;template #modal-header-close&gt;
        &lt;svg aria-hidden=&quot;true&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-x&quot;&gt;&lt;line x1=&quot;18&quot; y1=&quot;6&quot; x2=&quot;6&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;6&quot; y1=&quot;6&quot; x2=&quot;18&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;div class=&quot;video-container&quot;&gt;
        &lt;iframe src=&quot;https://www.youtube.com/embed/YE7VzlLtp-4&quot; width=&quot;560&quot; height=&quot;315&quot; allow=&quot;encrypted-media&quot; style=&quot;border: 0px;&quot;&gt;&lt;/iframe&gt;
    &lt;/div&gt;
&lt;/b-modal&gt;

===========
  Vimeo
===========

&lt;button id=&quot;vimeo-video-link&quot; type=&quot;button&quot; class=&quot;btn btn-primary mb-2 mr-2&quot; v-b-modal.modalVimeo&gt;Play Vimeo&lt;/button&gt;

&lt;!-- Modal --&gt;
&lt;b-modal id=&quot;modalVimeo&quot; modal-class=&quot;modal-video&quot; size=&quot;lg&quot; body-class=&quot;p-0&quot; :hide-footer=&quot;true&quot; header-class=&quot;p-0 border-0&quot;&gt;
    &lt;template #modal-header-close&gt;
        &lt;svg aria-hidden=&quot;true&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-x&quot;&gt;&lt;line x1=&quot;18&quot; y1=&quot;6&quot; x2=&quot;6&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;6&quot; y1=&quot;6&quot; x2=&quot;18&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;div class=&quot;video-container&quot;&gt;
        &lt;iframe src=&quot;https://player.vimeo.com/video/1084537&quot; width=&quot;560&quot; height=&quot;315&quot; allow=&quot;encrypted-media&quot; style=&quot;border: 0px;&quot;&gt;&lt;/iframe&gt;
    &lt;/div&gt;
&lt;/b-modal&gt;
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
                <div id="modalAnimationStyleModal" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Animation Style Modal</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body  text-center">
                            <div class="row">
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.fadeInDown</code></p>
                                    <!-- Fade in down modal -->
                                    <b-button variant="primary" class="mb-2 mr-2" v-b-modal.fadeinModal>FadeIn</b-button>
                                </div>
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.slideInDown</code></p>
                                    <!-- Slide in down modal -->
                                    <b-button variant="info" class="mb-2 mr-2" v-b-modal.slidedownModal>SlideIn Down</b-button>
                                </div>
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.fadeInUp</code></p>
                                    <!-- Fade in up modal -->
                                    <b-button variant="success" class="mb-2 mr-2" v-b-modal.fadeupModal>FadeIn Up</b-button>
                                </div>
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.slideInUp</code></p>
                                    <!-- Slide in up modal -->
                                    <b-button variant="warning" class="mb-2 mr-2" v-b-modal.slideupModal>SlideIn Up</b-button>
                                </div>
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.fadeInLeft</code></p>
                                    <!-- Fade in left modal -->
                                    <b-button variant="secondary" class="mb-2 mr-2" v-b-modal.fadeleftModal>FadeIn Left</b-button>
                                </div>
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.rotateInDownLeft</code></p>
                                    <!-- Rotate in right modal -->
                                    <b-button variant="info" class="mb-2 mr-2" v-b-modal.rotateleftModal>RotateIn Left</b-button>
                                </div>
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.fadeInRight</code></p>
                                    <!-- Fade in right modal -->
                                    <b-button variant="dark" class="mb-2 mr-2" v-b-modal.faderightModal>FadeIn Right</b-button>
                                </div>
                                <div class="col-lg-6">
                                    <p class="mb-2 mt-3"><code>.zoomInUp</code></p>
                                    <!-- Zoom in up modal -->
                                    <b-button variant="danger" class="mb-2 mr-2" v-b-modal.zoomupModal>ZoomIn Up</b-button>
                                </div>
                            </div>
                            <!-- Fade in down modal -->
                            <b-modal id="fadeinModal" modal-class="animated fadeInDown text-center" title="Modal Header">
                                <p class="modal-text">
                                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien
                                    nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('fadeinModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>
                            <!-- Slide in down modal -->
                            <b-modal id="slidedownModal" modal-class="animated slideInDown custo-slideInDown text-center" title="Modal Header">
                                <p class="modal-text">
                                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien
                                    nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('slidedownModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>
                            <!-- Slide in up modal -->
                            <b-modal id="slideupModal" modal-class="animated slideInUp custo-slideInUp text-center" title="Modal Header">
                                <p class="modal-text">
                                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien
                                    nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('slideupModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>
                            <!-- Fade in up modal -->
                            <b-modal id="fadeupModal" modal-class="animated fadeInUp custo-fadeInUp text-center" title="Modal Header">
                                <p class="modal-text">
                                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien
                                    nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('fadeupModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>
                            <!-- Rotate in right modal -->
                            <b-modal id="rotateleftModal" modal-class="animated rotateInDownLeft custo-rotateInDownLeft text-center" title="Modal Header">
                                <p class="modal-text">
                                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien
                                    nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('rotateleftModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>
                            <!-- Fade in left modal -->
                            <b-modal id="fadeleftModal" modal-class="animated fadeInLeft custo-fadeInLeft text-center" title="Modal Header">
                                <p class="modal-text">
                                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien
                                    nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('fadeleftModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>
                            <!-- Zoom in up modal -->
                            <b-modal id="zoomupModal" modal-class="animated zoomInUp custo-zoomInUp text-center" title="Modal Header">
                                <p class="modal-text">
                                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien
                                    nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('zoomupModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>
                            <!-- Fade in right modal -->
                            <b-modal id="faderightModal" modal-class="animated fadeInRight custo-fadeInRight text-center" title="Modal Header">
                                <p class="modal-text">
                                    Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien
                                    nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('faderightModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;!-- Fade in down modal --&gt;
&lt;b-modal id=&quot;fadeinModal&quot; modal-class=&quot;animated fadeInDown text-center&quot; title=&quot;Modal Header&quot;&gt;
    &lt;p class=&quot;modal-text&quot;&gt;Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.&lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('fadeinModal')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
&lt;!-- Slide in down modal --&gt;
&lt;b-modal id=&quot;slidedownModal&quot; modal-class=&quot;animated slideInUp custo-slideInDown text-center&quot; title=&quot;Modal Header&quot;&gt;
    &lt;p class=&quot;modal-text&quot;&gt;Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.&lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('slideupModal')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
&lt;!-- Slide in up modal --&gt;
&lt;b-modal id=&quot;slideupModal&quot; modal-class=&quot;animated slideInUp custo-slideInUp text-center&quot; title=&quot;Modal Header&quot;&gt;
    &lt;p class=&quot;modal-text&quot;&gt;Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.&lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('slideupModal')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
&lt;!-- Fade in up modal --&gt;
&lt;b-modal id=&quot;fadeupModal&quot; modal-class=&quot;animated fadeInUp custo-fadeInUp text-center&quot; title=&quot;Modal Header&quot;&gt;
    &lt;p class=&quot;modal-text&quot;&gt;Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.&lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('fadeupModal')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
&lt;!-- Rotate in right modal --&gt;
&lt;b-modal id=&quot;rotateleftModal&quot; modal-class=&quot;animated rotateInDownLeft custo-rotateInDownLeft text-center&quot; title=&quot;Modal Header&quot;&gt;
    &lt;p class=&quot;modal-text&quot;&gt;Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.&lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('rotateleftModal')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
&lt;!-- Fade in left modal --&gt;
&lt;b-modal id=&quot;fadeleftModal&quot; modal-class=&quot;animated fadeInLeft custo-fadeInLeft text-center&quot; title=&quot;Modal Header&quot;&gt;
    &lt;p class=&quot;modal-text&quot;&gt;Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.&lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('fadeleftModal')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
&lt;!-- Zoom in up modal --&gt;
&lt;b-modal id=&quot;zoomupModal&quot; modal-class=&quot;animated zoomInUp custo-zoomInUp text-center&quot; title=&quot;Modal Header&quot;&gt;
    &lt;p class=&quot;modal-text&quot;&gt;Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.&lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('zoomupModal')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
&lt;!-- Fade in right modal --&gt;
&lt;b-modal id=&quot;faderightModal&quot; modal-class=&quot;animated fadeInRight custo-fadeInRight text-center&quot; title=&quot;Modal Header&quot;&gt;
    &lt;p class=&quot;modal-text&quot;&gt;Nulla imperdiet sed ipsum non lacinia. Duis accumsan egestas nulla, vel commodo orci tempus quis. Fusce malesuada felis nec vehicula luctus. Proin luctus sapien nunc, quis varius dui gravida quis. Sed eget elit a augue porta elementum ut nec nibh. Morbi non dolor ac quam commodo interdum.&lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('faderightModal')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="modalCustom" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body  text-center advance-content signinModal-content">
                            <p class="mb-4">More Custom Modals.</p>

                            <!-- Button trigger modal -->
                            <b-button variant="warning" class="mb-2 mr-2" v-b-modal.standardModal>Standard</b-button>

                            <!-- Standard Modal -->
                            <b-modal id="standardModal" modal-class="modal-notification text-center" footer-class="justify-content-between" :hide-header="true">
                                <div class="icon-content">
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
                                </div>
                                <p class="modal-text">
                                    Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor turpis, vitae dictum
                                    augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum.
                                </p>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('standardModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>

                            <!-- Button trigger modal -->
                            <b-button variant="info" class="mb-2 mr-2" v-b-modal.tabsModal>Tabs</b-button>

                            <!-- Tabs Modal -->
                            <b-modal id="tabsModal" title="Modal title" modal-class="text-center">
                                <b-tabs nav-class="mb-3">
                                    <b-tab title="Home" active>
                                        <p class="modal-text">
                                            Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor turpis, vitae
                                            dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum.
                                        </p>
                                    </b-tab>
                                    <b-tab title="Profile">
                                        <p class="modal-text">
                                            Fusce ac fringilla ex. Sed ligula ipsum, fringilla ut orci nec, suscipit commodo felis. Sed imperdiet eros dignissim, vehicula erat vel, rutrum lorem. In
                                            porttitor id ante nec laoreet. Etiam quis sapien ac nunc ullamcorper elementum. Fusce ullamcorper ante convallis nisl eleifend, sit amet dapibus urna
                                            eleifend.
                                        </p>
                                    </b-tab>
                                    <b-tab title="Contact">
                                        <p class="modal-text">
                                            Pellentesque semper tortor id ligula ultrices suscipit. Donec viverra vulputate lectus non consectetur. Donec ac interdum lacus. Donec euismod nisi at justo
                                            molestie elementum. Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                        </p>
                                    </b-tab>
                                </b-tabs>
                                <template #modal-footer>
                                    <b-button variant="default" data-dismiss="modal" @click="$bvModal.hide('tabsModal')"><i class="flaticon-cancel-12"></i> Discard</b-button>
                                    <b-button variant="primary">Save</b-button>
                                </template>
                            </b-modal>

                            <!-- Button trigger modal -->
                            <b-button variant="danger" class="mb-2 mr-2" v-b-modal.profileModal>Profile</b-button>

                            <!-- Profile Modal -->
                            <b-modal id="profileModal" modal-class="text-center profile-modal" header-class="justify-content-center p-0 border-0" footer-class="justify-content-center mb-4" size="sm">
                                <div class="modal-profile mt-4 mb-5">
                                    <img alt="avatar" src="@/assets/images/profile-2.jpeg" class="rounded-circle" />
                                </div>
                                <p class="mt-2">Click on view to access your profile.</p>
                                <template #modal-footer>
                                    <b-button variant="default">View</b-button>
                                </template>
                            </b-modal>

                            <!-- Button trigger modal -->
                            <b-button variant="dark" class="mb-2 mr-2" v-b-modal.loginModal>Login</b-button>

                            <!-- Login Modal -->
                            <b-modal id="loginModal" title="Login" title-tag="h4" modal-class="login-modal" footer-class="justify-content-center">
                                <form class="mt-0">
                                    <div class="form-group">
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
                                            class="feather feather-user"
                                        >
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <b-form-input type="email" class="mb-2" placeholder="Email"></b-form-input>
                                    </div>
                                    <div class="form-group">
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
                                            class="feather feather-lock"
                                        >
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        <b-form-input type="password" class="mb-4" placeholder="Password"></b-form-input>
                                    </div>
                                    <b-button variant="primary" block class="mt-2 mb-2" @click="$bvModal.hide('loginModal')">Login</b-button>
                                </form>

                                <div class="division">
                                    <span>OR</span>
                                </div>

                                <div class="social">
                                    <a href="javascript:void(0);" class="btn social-fb mx-1"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-facebook"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                        <span class="brand-name">Facebook</span></a
                                    >
                                    <a href="javascript:void(0);" class="btn social-github"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-github"
                                        >
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                            ></path>
                                        </svg>
                                        <span class="brand-name">Github</span></a
                                    >
                                </div>

                                <template #modal-footer>
                                    <div class="forgot login-footer">
                                        <span>Looking to <a href="javascript:void(0);">create an account</a>?</span>
                                    </div>
                                </template>
                            </b-modal>

                            <!-- Button trigger modal -->
                            <b-button variant="secondary" class="mb-2 mr-2" v-b-modal.registerModal>Register</b-button>

                            <!-- Register Modal -->
                            <b-modal id="registerModal" title="Register" title-tag="h4" modal-class="register-modal" footer-class="justify-content-center">
                                <form class="mt-0">
                                    <div class="form-group">
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
                                            class="feather feather-user"
                                        >
                                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                        </svg>
                                        <b-form-input type="text" class="mb-2" placeholder="Username"></b-form-input>
                                    </div>
                                    <div class="form-group">
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
                                            class="feather feather-at-sign"
                                        >
                                            <circle cx="12" cy="12" r="4"></circle>
                                            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                                        </svg>
                                        <b-form-input type="email" class="mb-2" placeholder="Email"></b-form-input>
                                    </div>
                                    <div class="form-group">
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
                                            class="feather feather-lock"
                                        >
                                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                        </svg>
                                        <b-form-input type="password" class="mb-4" placeholder="Password"></b-form-input>
                                    </div>
                                    <b-button variant="primary" block class="mt-2 mb-2" @click="$bvModal.hide('registerModal')">Register</b-button>
                                </form>

                                <div class="division">
                                    <span>OR</span>
                                </div>

                                <div class="social">
                                    <a href="javascript:void(0);" class="btn social-fb mx-1"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-facebook"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                        <span class="brand-name">Facebook</span></a
                                    >
                                    <a href="javascript:void(0);" class="btn social-github"
                                        ><svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-github"
                                        >
                                            <path
                                                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                            ></path>
                                        </svg>
                                        <span class="brand-name">Github</span></a
                                    >
                                </div>

                                <template #modal-footer>
                                    <div class="forgot login-footer">
                                        <span>Already have <a href="javascript:void(0);">Login</a>?</span>
                                    </div>
                                </template>
                            </b-modal>

                            <!-- Button trigger modal -->
                            <b-button variant="success" class="mb-2 mr-2" v-b-modal.sliderModal>Slider</b-button>

                            <!-- Slider Modal -->
                            <b-modal id="sliderModal" body-class="p-0" centered :hide-header="true" :hide-footer="true">
                                <b-button-close @click="$bvModal.hide('sliderModal')">
                                    <span aria-hidden="true"
                                        ><svg
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="feather feather-x"
                                        >
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line></svg
                                    ></span>
                                </b-button-close>
                                <b-carousel ref="myCarousel" v-model="slide" :interval="4000" controls indicators>
                                    <b-carousel-slide>
                                        <template #img>
                                            <img class="d-block w-100" src="@/assets/images/slider-1.jpeg" alt="First slide" />
                                        </template>
                                    </b-carousel-slide>
                                    <b-carousel-slide>
                                        <template #img>
                                            <img class="d-block w-100" src="@/assets/images/slider-2.jpeg" alt="First slide" />
                                        </template>
                                    </b-carousel-slide>
                                    <b-carousel-slide>
                                        <template #img>
                                            <img class="d-block w-100" src="@/assets/images/slider-3.jpeg" alt="First slide" />
                                        </template>
                                    </b-carousel-slide>
                                </b-carousel>

                                <a class="carousel-control-prev" href="javascript:;" @click="$refs.myCarousel.prev()">
                                    <span class="carousel-control-prev-text"> Previous</span>
                                </a>
                                <a class="carousel-control-next" href="javascript:;" @click="$refs.myCarousel.next()">
                                    <span class="carousel-control-next-text"> Next</span>
                                </a>
                            </b-modal>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;!-- Standard Modal --&gt;
&lt;b-modal id=&quot;standardModal&quot; modal-class=&quot;modal-notification text-center&quot; footer-class=&quot;justify-content-between&quot; :hide-header=&quot;true&quot;&gt;
    &lt;div class=&quot;icon-content&quot;&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-bell&quot;&gt;&lt;path d=&quot;M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9&quot;&gt;&lt;/path&gt;&lt;path d=&quot;M13.73 21a2 2 0 0 1-3.46 0&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
    &lt;/div&gt;
    &lt;p class=&quot;modal-text&quot;&gt;Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor turpis, vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum.&lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('standardModal')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
&lt;!-- Tabs Modal --&gt;
&lt;b-modal id=&quot;tabsModal&quot; title=&quot;Modal title&quot; modal-class=&quot;text-center&quot;&gt;
    &lt;b-tabs nav-class=&quot;mb-3&quot;&gt;
        &lt;b-tab title=&quot;Home&quot; active&gt;
            &lt;p class=&quot;modal-text&quot;&gt;Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi consequat auctor turpis, vitae dictum augue efficitur vitae. Vestibulum a risus ipsum. Quisque nec lacus dolor. Quisque ornare tempor orci id rutrum.&lt;/p&gt;
        &lt;/b-tab&gt;
        &lt;b-tab title=&quot;Profile&quot;&gt;
            &lt;p class=&quot;modal-text&quot;&gt;Fusce ac fringilla ex. Sed ligula ipsum, fringilla ut orci nec, suscipit commodo felis. Sed imperdiet eros dignissim, vehicula erat vel, rutrum lorem. In porttitor id ante nec laoreet. Etiam quis sapien ac nunc ullamcorper elementum. Fusce ullamcorper ante convallis nisl eleifend, sit amet dapibus urna eleifend.&lt;/p&gt;
        &lt;/b-tab&gt;
        &lt;b-tab title=&quot;Contact&quot;&gt;
            &lt;p class=&quot;modal-text&quot;&gt;Pellentesque semper tortor id ligula ultrices suscipit. Donec viverra vulputate lectus non consectetur. Donec ac interdum lacus. Donec euismod nisi at justo molestie elementum. Vivamus vitae hendrerit neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.&lt;/p&gt;
        &lt;/b-tab&gt;
    &lt;/b-tabs&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot; data-dismiss=&quot;modal&quot; @click=&quot;$bvModal.hide('tabsModal')&quot;&gt;&lt;i class=&quot;flaticon-cancel-12&quot;&gt;&lt;/i&gt; Discard&lt;/b-button&gt;
        &lt;b-button variant=&quot;primary&quot;&gt;Save&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
&lt;!-- Profile Modal --&gt;
&lt;b-modal id=&quot;profileModal&quot; modal-class=&quot;text-center profile-modal&quot; header-class=&quot;justify-content-center p-0 border-0&quot; footer-class=&quot;justify-content-center mb-4&quot; size=&quot;sm&quot;&gt;
    &lt;div class=&quot;modal-profile mt-4 mb-5&quot;&gt;
        &lt;img alt=&quot;avatar&quot; src=&quot;@/assets/images/profile-2.jpeg&quot; class=&quot;rounded-circle&quot;&gt;
    &lt;/div&gt;
    &lt;p class=&quot;mt-2&quot;&gt;Click on view to access your profile.&lt;/p&gt;
    &lt;template #modal-footer&gt;
        &lt;b-button variant=&quot;default&quot;&gt;View&lt;/b-button&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
&lt;!-- Login Modal --&gt;
&lt;b-modal id=&quot;loginModal&quot; title=&quot;Login&quot; title-tag=&quot;h4&quot; modal-class=&quot;login-modal&quot; footer-class=&quot;justify-content-center&quot;&gt;
    &lt;form class=&quot;mt-0&quot;&gt;
        &lt;div class=&quot;form-group&quot;&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-user&quot;&gt;&lt;path d=&quot;M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2&quot;&gt;&lt;/path&gt;&lt;circle cx=&quot;12&quot; cy=&quot;7&quot; r=&quot;4&quot;&gt;&lt;/circle&gt;&lt;/svg&gt;
            &lt;b-form-input type=&quot;email&quot; class=&quot;mb-2&quot; placeholder=&quot;Email&quot;&gt;&lt;/b-form-input&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-group&quot;&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-lock&quot;&gt;&lt;rect x=&quot;3&quot; y=&quot;11&quot; width=&quot;18&quot; height=&quot;11&quot; rx=&quot;2&quot; ry=&quot;2&quot;&gt;&lt;/rect&gt;&lt;path d=&quot;M7 11V7a5 5 0 0 1 10 0v4&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
            &lt;b-form-input type=&quot;password&quot; class=&quot;mb-4&quot; placeholder=&quot;Password&quot;&gt;&lt;/b-form-input&gt;
        &lt;/div&gt;
        &lt;b-button variant=&quot;primary&quot; block class=&quot;mt-2 mb-2&quot; @click=&quot;$bvModal.hide('loginModal')&quot;&gt;Login&lt;/b-button&gt;
    &lt;/form&gt;

    &lt;div class=&quot;division&quot;&gt;
        &lt;span&gt;OR&lt;/span&gt;
    &lt;/div&gt;

    &lt;div class=&quot;social&quot;&gt;
        &lt;a href=&quot;javascript:void(0);&quot; class=&quot;btn social-fb mx-1&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-facebook&quot;&gt;&lt;path d=&quot;M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; &lt;span class=&quot;brand-name&quot;&gt;Facebook&lt;/span&gt;&lt;/a&gt;
        &lt;a href=&quot;javascript:void(0);&quot; class=&quot;btn social-github&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-github&quot;&gt;&lt;path d=&quot;M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22&quot;&gt;&lt;/path&gt;&lt;/svg&gt; &lt;span class=&quot;brand-name&quot;&gt;Github&lt;/span&gt;&lt;/a&gt;
    &lt;/div&gt;

    &lt;template #modal-footer&gt;
        &lt;div class=&quot;forgot login-footer&quot;&gt;
            &lt;span&gt;Looking to &lt;a href=&quot;javascript:void(0);&quot;&gt;create an account&lt;/a&gt;?&lt;/span&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
&lt;!-- Register Modal --&gt;
&lt;b-modal id=&quot;registerModal&quot; title=&quot;Register&quot; title-tag=&quot;h4&quot; modal-class=&quot;register-modal&quot; footer-class=&quot;justify-content-center&quot;&gt;
    &lt;form class=&quot;mt-0&quot;&gt;
        &lt;div class=&quot;form-group&quot;&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-user&quot;&gt;&lt;path d=&quot;M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2&quot;&gt;&lt;/path&gt;&lt;circle cx=&quot;12&quot; cy=&quot;7&quot; r=&quot;4&quot;&gt;&lt;/circle&gt;&lt;/svg&gt;
            &lt;b-form-input type=&quot;text&quot; class=&quot;mb-2&quot; placeholder=&quot;Username&quot;&gt;&lt;/b-form-input&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-group&quot;&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-at-sign&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;4&quot;&gt;&lt;/circle&gt;&lt;path d=&quot;M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
            &lt;b-form-input type=&quot;email&quot; class=&quot;mb-2&quot; placeholder=&quot;Email&quot;&gt;&lt;/b-form-input&gt;
        &lt;/div&gt;
        &lt;div class=&quot;form-group&quot;&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-lock&quot;&gt;&lt;rect x=&quot;3&quot; y=&quot;11&quot; width=&quot;18&quot; height=&quot;11&quot; rx=&quot;2&quot; ry=&quot;2&quot;&gt;&lt;/rect&gt;&lt;path d=&quot;M7 11V7a5 5 0 0 1 10 0v4&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
            &lt;b-form-input type=&quot;password&quot; class=&quot;mb-4&quot; placeholder=&quot;Password&quot;&gt;&lt;/b-form-input&gt;
        &lt;/div&gt;
        &lt;b-button variant=&quot;primary&quot; block class=&quot;mt-2 mb-2&quot; @click=&quot;$bvModal.hide('registerModal')&quot;&gt;Register&lt;/b-button&gt;
    &lt;/form&gt;

    &lt;div class=&quot;division&quot;&gt;
        &lt;span&gt;OR&lt;/span&gt;
    &lt;/div&gt;

    &lt;div class=&quot;social&quot;&gt;
        &lt;a href=&quot;javascript:void(0);&quot; class=&quot;btn social-fb mx-1&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-facebook&quot;&gt;&lt;path d=&quot;M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; &lt;span class=&quot;brand-name&quot;&gt;Facebook&lt;/span&gt;&lt;/a&gt;
        &lt;a href=&quot;javascript:void(0);&quot; class=&quot;btn social-github&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-github&quot;&gt;&lt;path d=&quot;M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22&quot;&gt;&lt;/path&gt;&lt;/svg&gt; &lt;span class=&quot;brand-name&quot;&gt;Github&lt;/span&gt;&lt;/a&gt;
    &lt;/div&gt;

    &lt;template #modal-footer&gt;
        &lt;div class=&quot;forgot login-footer&quot;&gt;
            &lt;span&gt;Already have &lt;a href=&quot;javascript:void(0);&quot;&gt;Login&lt;/a&gt;?&lt;/span&gt;
        &lt;/div&gt;
    &lt;/template&gt;
&lt;/b-modal&gt;
&lt;!-- Slider Modal --&gt;
&lt;b-modal id=&quot;sliderModal&quot; body-class=&quot;p-0&quot; centered :hide-header=&quot;true&quot; :hide-footer=&quot;true&quot;&gt;
    &lt;b-button-close @click=&quot;$bvModal.hide('sliderModal')&quot;&gt;
        &lt;span aria-hidden=&quot;true&quot;&gt;&lt;svg aria-hidden=&quot;true&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-x&quot;&gt;&lt;line x1=&quot;18&quot; y1=&quot;6&quot; x2=&quot;6&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;6&quot; y1=&quot;6&quot; x2=&quot;18&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;&lt;/svg&gt;&lt;/span&gt;
    &lt;/b-button-close&gt;
    &lt;b-carousel ref=&quot;myCarousel&quot; v-model=&quot;slide&quot; :interval=&quot;4000&quot; controls indicators&gt;
        &lt;b-carousel-slide&gt;
            &lt;template #img&gt;
                &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/slider-1.jpeg&quot; alt=&quot;First slide&quot;&gt;
            &lt;/template&gt;
        &lt;/b-carousel-slide&gt;
        &lt;b-carousel-slide&gt;
            &lt;template #img&gt;
                &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/slider-2.jpeg&quot; alt=&quot;First slide&quot;&gt;
            &lt;/template&gt;
        &lt;/b-carousel-slide&gt;
        &lt;b-carousel-slide&gt;
            &lt;template #img&gt;
                &lt;img class=&quot;d-block w-100&quot; src=&quot;@/assets/images/slider-3.jpeg&quot; alt=&quot;First slide&quot;&gt;
            &lt;/template&gt;
        &lt;/b-carousel-slide&gt;
    &lt;/b-carousel&gt;

    &lt;a class=&quot;carousel-control-prev&quot; href=&quot;javascript:;&quot; @click=&quot;$refs.myCarousel.prev()&quot;&gt;
        &lt;span class=&quot;carousel-control-prev-text&quot;&gt; Previous&lt;/span&gt;
    &lt;/a&gt;
    &lt;a class=&quot;carousel-control-next&quot; href=&quot;javascript:;&quot; @click=&quot;$refs.myCarousel.next()&quot;&gt;
        &lt;span class=&quot;carousel-control-next-text&quot;&gt; Next&lt;/span&gt;
    &lt;/a&gt;
&lt;/b-modal&gt;
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
    import '@/assets/sass/components/custom-modal.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Modals' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                slide: 0,
                sliding: null
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
