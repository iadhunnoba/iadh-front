<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components </a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Media Object</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#mediaObjectSimple" class="nav-link scrollactive-item">Simple</a>
                    <a href="#mediaObjectOrder" class="nav-link scrollactive-item">Order</a>
                    <a href="#mediaObjectAlignment" class="nav-link scrollactive-item">Alignment</a>
                    <a href="#mediaObjectList" class="nav-link scrollactive-item">List</a>
                    <a href="#mediaObjectNesting" class="nav-link scrollactive-item">Nesting</a>
                    <a href="#mediaObjectNotationText" class="nav-link scrollactive-item">Notation Text</a>
                    <a href="#mediaObjectNotationIcon" class="nav-link scrollactive-item">Notation Icon</a>
                    <a href="#mediaObjectBadge" class="nav-link scrollactive-item">Badge</a>
                    <a href="#mediaObjectDropdown" class="nav-link scrollactive-item">Dropdown</a>
                    <a href="#mediaObjectIcon" class="nav-link scrollactive-item">Labels</a>
                    <a href="#mediaObjectCheckbox" class="nav-link scrollactive-item">Checkbox</a>
                    <a href="#mediaObjectRadio" class="nav-link scrollactive-item">Radio</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/media" class="text-info">
                            https://bootstrap-vue.org/docs/components/media
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div id="mediaObjectSimple" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Simple</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-media>
                                <template #aside>
                                    <img class="rounded" src="@/assets/images/profile-4.jpeg" alt="pic1" />
                                </template>
                                <h4 class="media-heading">Heading</h4>
                                <p class="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </b-media>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-media&gt;
    &lt;template #aside&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;@/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot;&gt;
    &lt;/template&gt;
    &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque.&lt;/p&gt;
&lt;/b-media&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="mediaObjectOrder" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Order</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-media right-align>
                                <h4 class="media-heading">Heading</h4>
                                <p class="media-text">
                                    Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean
                                    dignissim sed ante eget dapibus.
                                </p>
                                <template #aside>
                                    <img class="rounded" src="@/assets/images/profile-4.jpeg" alt="pic1" />
                                </template>
                            </b-media>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-media right-align&gt;
    &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;
        Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.
    &lt;/p&gt;
    &lt;template #aside&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;@/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot;&gt;
    &lt;/template&gt;
&lt;/b-media&gt;
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
                <div id="mediaObjectAlignment" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Top-aligned media</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-media>
                                <template #aside>
                                    <img class="rounded" src="@/assets/images/profile-4.jpeg" alt="pic1" />
                                </template>
                                <h4 class="media-heading">Heading</h4>
                                <p class="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque. Pellentesque pellentesque sed magna vitae porttitor. Integer quis urna eget ligula commodo venenatis in et ligula.
                                </p>
                            </b-media>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-media&gt;
    &lt;template #aside&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;@/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot;&gt;
    &lt;/template&gt;
    &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt; Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Pellentesque pellentesque sed magna vitae porttitor. Integer quis urna eget ligula commodo venenatis in et ligula.&lt;/p&gt;
&lt;/b-media&gt;
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
                                    <h4>Center-aligned media</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-media vertical-align="center">
                                <template #aside>
                                    <img class="rounded" src="@/assets/images/profile-4.jpeg" alt="pic1" />
                                </template>
                                <h4 class="media-heading">Heading</h4>
                                <p class="media-text">
                                    Pellentesque pellentesque sed magna vitae porttitor. Integer quis urna eget ligula commodo venenatis in et ligula. Integer eget lorem sodales, sodales dui vel,
                                    mattis erat. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.
                                </p>
                            </b-media>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-media vertical-align=&quot;center&quot;&gt;
    &lt;template #aside&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;@/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot;&gt;
    &lt;/template&gt;
    &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;Pellentesque pellentesque sed magna vitae porttitor. Integer quis urna eget ligula commodo venenatis in et ligula. Integer eget lorem sodales, sodales dui vel, mattis erat. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.&lt;/p&gt;
&lt;/b-media&gt;
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
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Bottom-aligned media</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-media vertical-align="bottom">
                                <template #aside>
                                    <img class="rounded" src="@/assets/images/profile-4.jpeg" alt="pic1" />
                                </template>
                                <h4 class="media-heading">Heading</h4>
                                <p class="media-text">
                                    Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Pellentesque pellentesque sed magna vitae porttitor. Integer
                                    quis urna eget ligula commodo venenatis in et ligula. Integer eget lorem sodales, sodales dui vel, mattis erat. Fusce condimentum cursus mauris et ornare.
                                </p>
                            </b-media>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-media vertical-align=&quot;bottom&quot;&gt;
    &lt;template #aside&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;@/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot;&gt;
    &lt;/template&gt;
    &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Pellentesque pellentesque sed magna vitae porttitor. Integer quis urna eget ligula commodo venenatis in et ligula. Integer eget lorem sodales, sodales dui vel, mattis erat. Fusce condimentum cursus mauris et ornare.&lt;/p&gt;
&lt;/b-media&gt;
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
                                    <h4>Right Aligned</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body media-right-aligned">
                            <b-media right-align class="text-right">
                                <h4 class="media-heading">Heading</h4>
                                <p class="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                                <template #aside>
                                    <img class="rounded" src="@/assets/images/profile-4.jpeg" alt="pic1" />
                                </template>
                            </b-media>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-media right-align class=&quot;text-right&quot;&gt;
    &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque.&lt;/p&gt;
    &lt;template #aside&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;@/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot;&gt;
    &lt;/template&gt;
&lt;/b-media&gt;
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
                <div id="mediaObjectList" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Media list</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-nav class="d-block list-unstyled">
                                <b-media tag="li">
                                    <template #aside>
                                        <img class="rounded" src="@/assets/images/profile-3.jpeg" alt="pic1" />
                                    </template>
                                    <h4 class="media-heading">Heading</h4>
                                    <p class="media-text">
                                        Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean
                                        dignissim sed ante eget dapibus.
                                    </p>
                                </b-media>
                                <b-media tag="li">
                                    <template #aside>
                                        <img class="rounded" src="@/assets/images/profile-4.jpeg" alt="pic1" />
                                    </template>
                                    <h4 class="media-heading">Heading</h4>
                                    <p class="media-text">
                                        Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum,
                                        rutrum neque eu, gravida neque.
                                    </p>
                                </b-media>
                                <b-media tag="li">
                                    <template #aside>
                                        <img class="rounded" src="@/assets/images/profile-5.jpeg" alt="pic1" />
                                    </template>
                                    <h4 class="media-heading">Heading</h4>
                                    <p class="media-text">
                                        Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum
                                        mi id sollicitudin viverra.
                                    </p>
                                </b-media>
                            </b-nav>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-nav class=&quot;d-block list-unstyled&quot;&gt;
    &lt;b-media tag=&quot;li&quot;&gt;
        &lt;template #aside&gt;
            &lt;img class=&quot;rounded&quot; src=&quot;@/assets/images/profile-3.jpeg&quot; alt=&quot;pic1&quot;&gt;
        &lt;/template&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.&lt;/p&gt;
    &lt;/b-media&gt;
    &lt;b-media tag=&quot;li&quot;&gt;
        &lt;template #aside&gt;
            &lt;img class=&quot;rounded&quot; src=&quot;@/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot;&gt;
        &lt;/template&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque.&lt;/p&gt;
    &lt;/b-media&gt;
    &lt;b-media tag=&quot;li&quot;&gt;
        &lt;template #aside&gt;
            &lt;img class=&quot;rounded&quot; src=&quot;@/assets/images/profile-5.jpeg&quot; alt=&quot;pic1&quot;&gt;
        &lt;/template&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.&lt;/p&gt;
    &lt;/b-media&gt;
&lt;/b-nav&gt;
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
                <div id="mediaObjectNesting" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Nesting</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body nesting">
                            <b-media>
                                <template #aside>
                                    <img class="meta-usr-img rounded" src="@/assets/images/profile-3.jpeg" alt="pic1" />
                                </template>
                                <h4 class="media-heading">Heading</h4>
                                <p class="media-text">
                                    Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean
                                    dignissim sed ante eget dapibus.
                                </p>

                                <b-media>
                                    <template #aside>
                                        <img class="rounded" src="@/assets/images/profile-4.jpeg" alt="pic2" />
                                    </template>
                                    <h4 class="media-heading">Heading</h4>
                                    <p class="media-text">
                                        Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum
                                        mi id sollicitudin viverra.
                                    </p>
                                </b-media>
                            </b-media>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-media&gt;
    &lt;template #aside&gt;
        &lt;img class=&quot;meta-usr-img rounded&quot; src=&quot;@/assets/images/profile-3.jpeg&quot; alt=&quot;pic1&quot;&gt;
    &lt;/template&gt;
    &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.&lt;/p&gt;

    &lt;b-media&gt;
        &lt;template #aside&gt;
            &lt;img class=&quot;rounded&quot; src=&quot;@/assets/images/profile-4.jpeg&quot; alt=&quot;pic2&quot;&gt;
        &lt;/template&gt;
        &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
        &lt;p class=&quot;media-text&quot;&gt;Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.&lt;/p&gt;
    &lt;/b-media&gt;
&lt;/b-media&gt;
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
                <div id="mediaObjectNotationText" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Notation Text</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body notation-text">
                            <b-media>
                                <template #aside>
                                    <img class="meta-usr-img rounded" src="@/assets/images/profile-4.jpeg" alt="pic1" />
                                </template>
                                <h4 class="media-heading">Heading</h4>
                                <p class="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                                <div class="media-notation">
                                    <a href="javascript:void(0);" class=""> Reply </a>
                                    <a href="javascript:void(0);" class=""> Edit </a>
                                    <a href="javascript:void(0);" class=""> Delete </a>
                                </div>
                            </b-media>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code9')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-media&gt;
    &lt;template #aside&gt;
        &lt;img class=&quot;meta-usr-img rounded&quot; src=&quot;@/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot;&gt;
    &lt;/template&gt;
    &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque.&lt;/p&gt;
    &lt;div class=&quot;media-notation&quot;&gt;
        &lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt; Reply &lt;/a&gt;
        &lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt; Edit &lt;/a&gt;
        &lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt; Delete &lt;/a&gt;
    &lt;/div&gt;
&lt;/b-media&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="mediaObjectNotationIcon" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Notation Text with Icon</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body notation-text-icon">
                            <b-media>
                                <template #aside>
                                    <img class=" rounded" src="@/assets/images/profile-4.jpeg" alt="pic1" />
                                </template>
                                <h4 class="media-heading">Heading</h4>
                                <p class="media-text">
                                    Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean
                                    dignissim sed ante eget dapibus.
                                </p>
                                <div class="media-notation">
                                    <a href="javascript:void(0);" class=""
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
                                            class="feather feather-message-square"
                                        >
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        Reply
                                    </a>
                                    <a href="javascript:void(0);" class=""
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
                                            class="feather feather-edit-2"
                                        >
                                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                        </svg>
                                        Edit
                                    </a>
                                    <a href="javascript:void(0);" class=""
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
                                            class="feather feather-trash-2"
                                        >
                                            <polyline points="3 6 5 6 21 6"></polyline>
                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                            <line x1="10" y1="11" x2="10" y2="17"></line>
                                            <line x1="14" y1="11" x2="14" y2="17"></line>
                                        </svg>
                                        Delete
                                    </a>
                                </div>
                            </b-media>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code10')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-media&gt;
    &lt;template #aside&gt;
        &lt;img class=&quot; rounded&quot; src=&quot;@/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot;&gt;
    &lt;/template&gt;
    &lt;h4 class=&quot;media-heading&quot;&gt;Heading&lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.&lt;/p&gt;
    &lt;div class=&quot;media-notation&quot;&gt;
        &lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-message-square&quot;&gt;&lt;path d=&quot;M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Reply &lt;/a&gt;
        &lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-edit-2&quot;&gt;&lt;path d=&quot;M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z&quot;&gt;&lt;/path&gt;&lt;/svg&gt; Edit &lt;/a&gt;
        &lt;a href=&quot;javascript:void(0);&quot; class=&quot;&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-trash-2&quot;&gt;&lt;polyline points=&quot;3 6 5 6 21 6&quot;&gt;&lt;/polyline&gt;&lt;path d=&quot;M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2&quot;&gt;&lt;/path&gt;&lt;line x1=&quot;10&quot; y1=&quot;11&quot; x2=&quot;10&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;14&quot; y1=&quot;11&quot; x2=&quot;14&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;&lt;/svg&gt; Delete &lt;/a&gt;
    &lt;/div&gt;
&lt;/b-media&gt;
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
                <div id="mediaObjectBadge" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Badge</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body m-o-label">
                            <b-media>
                                <template #aside>
                                    <img class="rounded" src="@/assets/images/profile-4.jpeg" alt="pic1" />
                                </template>
                                <h4 class="media-heading"><span class="media-title"> Heading</span><span class="badge badge-primary">Web Designer</span></h4>
                                <p class="media-text">
                                    Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean
                                    dignissim sed ante eget dapibus.
                                </p>
                            </b-media>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code11')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-media&gt;
    &lt;template #aside&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;@/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot;&gt;
    &lt;/template&gt;
    &lt;h4 class=&quot;media-heading&quot;&gt;&lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;&lt;span class=&quot;badge badge-primary&quot;&gt;Web Designer&lt;/span&gt;&lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.&lt;/p&gt;
&lt;/b-media&gt;
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
                <div id="mediaObjectDropdown" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dropdown List</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body m-o-dropdown-list">
                            <b-media>
                                <template #aside>
                                    <img class="rounded" src="@/assets/images/profile-4.jpeg" alt="pic1" />
                                </template>
                                <div class="media-heading">
                                    <span class="media-title"> Heading</span>
                                    <b-nav tag="div" class="dropdown-list">
                                        <b-nav-dropdown variant="normal" :right="true" toggle-tag="a" toggle-class="p-0">
                                            <template #button-content>
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
                                                    class="feather feather-more-horizontal"
                                                >
                                                    <circle cx="12" cy="12" r="1"></circle>
                                                    <circle cx="19" cy="12" r="1"></circle>
                                                    <circle cx="5" cy="12" r="1"></circle>
                                                </svg>
                                            </template>

                                            <b-dropdown-item>
                                                <span>Start chat</span>
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
                                                    class="feather feather-message-circle"
                                                >
                                                    <path
                                                        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                                                    ></path>
                                                </svg>
                                            </b-dropdown-item>
                                            <b-dropdown-item>
                                                <span>Make a call</span>
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
                                                    class="feather feather-phone"
                                                >
                                                    <path
                                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                    ></path>
                                                </svg>
                                            </b-dropdown-item>
                                            <b-dropdown-item>
                                                <span>Statistics</span>
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
                                                    class="feather feather-bar-chart-2"
                                                >
                                                    <line x1="18" y1="20" x2="18" y2="10"></line>
                                                    <line x1="12" y1="20" x2="12" y2="4"></line>
                                                    <line x1="6" y1="20" x2="6" y2="14"></line>
                                                </svg>
                                            </b-dropdown-item>
                                        </b-nav-dropdown>
                                    </b-nav>
                                </div>
                                <p class="media-text">
                                    Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean
                                    dignissim sed ante eget dapibus.
                                </p>
                            </b-media>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code12')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code12')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-media&gt;
    &lt;template #aside&gt;
        &lt;img class=&quot;rounded&quot; src=&quot;@/assets/images/profile-4.jpeg&quot; alt=&quot;pic1&quot;&gt;
    &lt;/template&gt;
    &lt;div class=&quot;media-heading&quot;&gt;
        &lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;
        &lt;b-nav tag=&quot;div&quot; class=&quot;dropdown-list&quot;&gt;
            &lt;b-nav-dropdown variant=&quot;normal&quot; toggle-tag=&quot;a&quot; toggle-class=&quot;p-0&quot;&gt;
                &lt;template #button-content&gt;
                    &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-more-horizontal&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;1&quot;&gt;&lt;/circle&gt;&lt;circle cx=&quot;19&quot; cy=&quot;12&quot; r=&quot;1&quot;&gt;&lt;/circle&gt;&lt;circle cx=&quot;5&quot; cy=&quot;12&quot; r=&quot;1&quot;&gt;&lt;/circle&gt;&lt;/svg&gt;
                &lt;/template&gt;

                &lt;b-dropdown-item&gt;
                    &lt;span&gt;Start chat&lt;/span&gt; &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-message-circle&quot;&gt;&lt;path d=&quot;M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
                &lt;/b-dropdown-item&gt;
                &lt;b-dropdown-item&gt;
                    &lt;span&gt;Make a call&lt;/span&gt; &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-phone&quot;&gt;&lt;path d=&quot;M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;
                &lt;/b-dropdown-item&gt;
                &lt;b-dropdown-item&gt;
                    &lt;span&gt;Statistics&lt;/span&gt; &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-bar-chart-2&quot;&gt;&lt;line x1=&quot;18&quot; y1=&quot;20&quot; x2=&quot;18&quot; y2=&quot;10&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;12&quot; y1=&quot;20&quot; x2=&quot;12&quot; y2=&quot;4&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;6&quot; y1=&quot;20&quot; x2=&quot;6&quot; y2=&quot;14&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
                &lt;/b-dropdown-item&gt;
            &lt;/b-nav-dropdown&gt;
        &lt;/b-nav&gt;
    &lt;/div&gt;
    &lt;p class=&quot;media-text&quot;&gt;Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus.&lt;/p&gt;
&lt;/b-media&gt;
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
                <div id="mediaObjectIcon" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Labels</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body m-o-label-icon">
                            <b-media vertical-align="center">
                                <template #aside>
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
                                        class="feather feather-x-circle label-icon label-danger"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="15" y1="9" x2="9" y2="15"></line>
                                        <line x1="9" y1="9" x2="15" y2="15"></line>
                                    </svg>
                                </template>
                                <h4 class="media-heading">
                                    <span class="media-title"> Heading</span>
                                </h4>
                                <p class="media-text">
                                    Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                                    id sollicitudin viverra.
                                </p>
                            </b-media>

                            <b-media vertical-align="center">
                                <template #aside>
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
                                        class="feather feather-alert-triangle label-icon label-warning"
                                    >
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                        <line x1="12" y1="9" x2="12" y2="13"></line>
                                        <line x1="12" y1="17" x2="12" y2="17"></line>
                                    </svg>
                                </template>
                                <h4 class="media-heading">
                                    <span class="media-title"> Heading</span>
                                </h4>
                                <p class="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </b-media>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code13')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code13')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-media vertical-align=&quot;center&quot;&gt;
    &lt;template #aside&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-x-circle label-icon label-danger&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;10&quot;&gt;&lt;/circle&gt;&lt;line x1=&quot;15&quot; y1=&quot;9&quot; x2=&quot;9&quot; y2=&quot;15&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;9&quot; y1=&quot;9&quot; x2=&quot;15&quot; y2=&quot;15&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;h4 class=&quot;media-heading&quot;&gt;
        &lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;
    &lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.&lt;/p&gt;
&lt;/b-media&gt;

&lt;b-media vertical-align=&quot;center&quot;&gt;
    &lt;template #aside&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-alert-triangle label-icon label-warning&quot;&gt;&lt;path d=&quot;M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z&quot;&gt;&lt;/path&gt;&lt;line x1=&quot;12&quot; y1=&quot;9&quot; x2=&quot;12&quot; y2=&quot;13&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;12&quot; y1=&quot;17&quot; x2=&quot;12&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
    &lt;/template&gt;
    &lt;h4 class=&quot;media-heading&quot;&gt;
        &lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;
    &lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque.&lt;/p&gt;
&lt;/b-media&gt;
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
                <div id="mediaObjectCheckbox" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Checkbox</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body m-o-chkbox">
                            <b-media>
                                <template #aside>
                                    <b-checkbox v-model="chk_demo" class="checkbox-dark" value="checkbox-1"></b-checkbox>
                                </template>
                                <h4 class="media-heading">
                                    <span class="media-title"> Heading</span>
                                </h4>
                                <p class="media-text">
                                    Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                                    id sollicitudin viverra.
                                </p>
                            </b-media>

                            <b-media>
                                <template #aside>
                                    <b-checkbox v-model="chk_demo" class="checkbox-dark" value="checkbox-2"></b-checkbox>
                                </template>
                                <h4 class="media-heading">
                                    <span class="media-title"> Heading</span>
                                </h4>
                                <p class="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </b-media>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code14')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code14')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-media&gt;
    &lt;template #aside&gt;
        &lt;b-checkbox v-model=&quot;chk_demo&quot; class=&quot;checkbox-dark&quot; value=&quot;checkbox-1&quot;&gt;&lt;/b-checkbox&gt;
    &lt;/template&gt;
    &lt;h4 class=&quot;media-heading&quot;&gt;
        &lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;
    &lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.&lt;/p&gt;
&lt;/b-media&gt;

&lt;b-media&gt;
    &lt;template #aside&gt;
        &lt;b-checkbox v-model=&quot;chk_demo&quot; class=&quot;checkbox-dark&quot; value=&quot;checkbox-2&quot;&gt;&lt;/b-checkbox&gt;
    &lt;/template&gt;
    &lt;h4 class=&quot;media-heading&quot;&gt;
        &lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;
    &lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque.&lt;/p&gt;
&lt;/b-media&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="mediaObjectRadio" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Radio</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body m-o-radio">
                            <b-media>
                                <template #aside>
                                    <b-radio v-model="rdo_demo" class="radio-classic radio-dark" name="custom-radio-1" value="radio-1"></b-radio>
                                </template>

                                <h4 class="media-heading">
                                    <span class="media-title"> Heading</span>
                                </h4>
                                <p class="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </b-media>

                            <b-media>
                                <template #aside>
                                    <b-radio v-model="rdo_demo" class="radio-classic radio-dark" name="custom-radio-1" value="radio-2"></b-radio>
                                </template>

                                <h4 class="media-heading">
                                    <span class="media-title"> Heading</span>
                                </h4>
                                <p class="media-text">
                                    Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi
                                    id sollicitudin viverra.
                                </p>
                            </b-media>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code15')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code15')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-media&gt;
    &lt;template #aside&gt;
        &lt;b-radio v-model=&quot;rdo_demo&quot; class=&quot;radio-classic radio-dark&quot; name=&quot;custom-radio-1&quot; value=&quot;radio-1&quot;&gt;&lt;/b-radio&gt;
    &lt;/template&gt;

    &lt;h4 class=&quot;media-heading&quot;&gt;
        &lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;
    &lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque.&lt;/p&gt;
&lt;/b-media&gt;

&lt;b-media&gt;
    &lt;template #aside&gt;
        &lt;b-radio v-model=&quot;rdo_demo&quot; class=&quot;radio-classic radio-dark&quot; name=&quot;custom-radio-1&quot; value=&quot;radio-2&quot;&gt;&lt;/b-radio&gt;
    &lt;/template&gt;

    &lt;h4 class=&quot;media-heading&quot;&gt;
        &lt;span class=&quot;media-title&quot;&gt; Heading&lt;/span&gt;
    &lt;/h4&gt;
    &lt;p class=&quot;media-text&quot;&gt;Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra.&lt;/p&gt;
&lt;/b-media&gt;
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
    import '@/assets/sass/components/custom-media_object.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Media Object' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                chk_demo: ['checkbox-1'],
                rdo_demo: 'radio-1'
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
