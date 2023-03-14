<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Avatar</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#avatarBasic" class="nav-link scrollactive-item">Basic</a>
                    <a href="#avatarIndicators" class="nav-link scrollactive-item">Indicators</a>
                    <a href="#avatarShapes" class="nav-link scrollactive-item">Shapes</a>
                    <a href="#avatarInitials" class="nav-link scrollactive-item">Initials</a>
                    <a href="#avatarGroup" class="nav-link scrollactive-item">Group</a>
                    <a href="#avatarAnimate" class="nav-link scrollactive-item">Animate</a>
                    <a href="#avatarTooltip" class="nav-link scrollactive-item">Tooltip</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/avatar" class="text-info">
                            https://bootstrap-vue.org/docs/components/avatar
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div id="avatarBasic" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Avatar</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <b-avatar :src="require('@/assets/images/profile-12.jpeg')" class="avatar-xl mr-1"></b-avatar>
                            <b-avatar :src="require('@/assets/images/profile-12.jpeg')" class="avatar-lg mr-1"></b-avatar>
                            <b-avatar :src="require('@/assets/images/profile-12.jpeg')" size="3rem" class=" mr-1"></b-avatar>
                            <b-avatar :src="require('@/assets/images/profile-12.jpeg')" class="avatar-sm"></b-avatar>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; class=&quot;avatar-xl mr-1&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; class=&quot;avatar-lg mr-1&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; size=&quot;3rem&quot; class=&quot; mr-1&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; class=&quot;avatar-sm&quot;&gt;&lt;/b-avatar&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="avatarIndicators" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Indicators</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <b-avatar :src="require('@/assets/images/profile-12.jpeg')" badge badge-variant="danger" class="avatar-xl mr-1"></b-avatar>
                            <b-avatar :src="require('@/assets/images/profile-12.jpeg')" badge badge-variant="success" class="avatar-lg mr-1"></b-avatar>
                            <b-avatar :src="require('@/assets/images/profile-12.jpeg')" badge badge-variant="dark" size="3rem" class=" mr-1"></b-avatar>
                            <b-avatar :src="require('@/assets/images/profile-12.jpeg')" badge badge-variant="info" class="avatar-sm"></b-avatar>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; badge badge-variant=&quot;danger&quot; class=&quot;avatar-xl mr-1&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; badge badge-variant=&quot;success&quot; class=&quot;avatar-lg mr-1&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; badge badge-variant=&quot;dark&quot; size=&quot;3rem&quot; class=&quot; mr-1&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; badge badge-variant=&quot;info&quot; class=&quot;avatar-sm&quot;&gt;&lt;/b-avatar&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="avatarShapes" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Shapes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <b-avatar :src="require('@/assets/images/profile-12.jpeg')" size="5rem" rounded="lg" class="mr-1"></b-avatar>
                            <b-avatar :src="require('@/assets/images/profile-12.jpeg')" size="4rem" class="mr-1"></b-avatar>
                            <b-avatar :src="require('@/assets/images/profile-12.jpeg')" size="3rem" rounded="sm" class="mr-1"></b-avatar>
                            <b-avatar :src="require('@/assets/images/profile-12.jpeg')" size="2rem" :square="true"></b-avatar>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; rounded=&quot;lg&quot; class=&quot;avatar-xl mr-1&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; class=&quot;avatar-xl mr-1&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; rounded=&quot;sm&quot; class=&quot;avatar-lg mr-1&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; :square=&quot;true&quot; size=&quot;3rem&quot;&gt;&lt;/b-avatar&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="avatarInitials" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Initials</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <b-avatar variant="success" text="AG" class="avatar-xl mr-1"></b-avatar>
                            <b-avatar variant="primary" text="AG" class="avatar-lg mr-1"></b-avatar>
                            <b-avatar variant="info" text="AG" size="3rem" class=" mr-1"></b-avatar>
                            <b-avatar variant="danger" text="AG" class="avatar-sm"></b-avatar>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-avatar variant=&quot;success&quot; text=&quot;AG&quot; class=&quot;avatar-xl mr-1&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;primary&quot; text=&quot;AG&quot; class=&quot;avatar-lg mr-1&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;info&quot; text=&quot;AG&quot; size=&quot;3rem&quot; class=&quot; mr-1&quot;&gt;&lt;/b-avatar&gt;
&lt;b-avatar variant=&quot;danger&quot; text=&quot;AG&quot; class=&quot;avatar-sm&quot;&gt;&lt;/b-avatar&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="avatarGroup" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Group</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <div class="d-sm-flex d-block align-items-center justify-content-center">
                                <b-avatar-group size="4rem" class="mr-3">
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')"></b-avatar>
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')"></b-avatar>
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')"></b-avatar>
                                    <b-avatar text="AG"></b-avatar>
                                </b-avatar-group>

                                <b-avatar-group size="3rem" class="mt-2 mt-sm-0">
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')"></b-avatar>
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')"></b-avatar>
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')"></b-avatar>
                                    <b-avatar text="AG"></b-avatar>
                                </b-avatar-group>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-avatar-group size=&quot;4rem&quot; class=&quot;mr-3&quot;&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar text=&quot;AG&quot;&gt;&lt;/b-avatar&gt;
&lt;/b-avatar-group&gt;

&lt;b-avatar-group size=&quot;3rem&quot;&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar text=&quot;AG&quot;&gt;&lt;/b-avatar&gt;
&lt;/b-avatar-group&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="avatarAnimate" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Animate Y-axis</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <div class="d-flex justify-content-center">
                                <b-avatar-group size="3rem">
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')" class="translateY-axis"></b-avatar>
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')" class="translateY-axis"></b-avatar>
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')" class="translateY-axis"></b-avatar>
                                    <b-avatar text="AG" class="translateY-axis"></b-avatar>
                                </b-avatar-group>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-avatar-group size=&quot;3rem&quot;&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; class=&quot;translateY-axis&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; class=&quot;translateY-axis&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; class=&quot;translateY-axis&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar text=&quot;AG&quot; class=&quot;translateY-axis&quot;&gt;&lt;/b-avatar&gt;
&lt;/b-avatar-group&gt;
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
                                    <h4>Animate X-axis</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <div class="d-flex justify-content-center">
                                <b-avatar-group size="3rem">
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')" class="translateX-axis"></b-avatar>
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')" class="translateX-axis"></b-avatar>
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')" class="translateX-axis"></b-avatar>
                                    <b-avatar text="AG" class="translateX-axis"></b-avatar>
                                </b-avatar-group>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-avatar-group size=&quot;3rem&quot;&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; class=&quot;translateX-axis&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; class=&quot;translateX-axis&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; class=&quot;translateX-axis&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar text=&quot;AG&quot; class=&quot;translateX-axis&quot;&gt;&lt;/b-avatar&gt;
&lt;/b-avatar-group&gt;
</pre
                                        >
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="avatarTooltip" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Tooltip</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body image-style-content text-center">
                            <div class="d-flex justify-content-center">
                                <b-avatar-group size="3rem">
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')" v-b-tooltip.hover title="Judy Holmes"></b-avatar>
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')" v-b-tooltip.hover title="Judy Holmes"></b-avatar>
                                    <b-avatar :src="require('@/assets/images/profile-12.jpeg')" v-b-tooltip.hover title="Judy Holmes"></b-avatar>
                                    <b-avatar text="AG" v-b-tooltip.hover title="Alan Green"></b-avatar>
                                </b-avatar-group>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-avatar-group size=&quot;3rem&quot;&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; v-b-tooltip.hover title=&quot;Judy Holmes&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; v-b-tooltip.hover title=&quot;Judy Holmes&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar :src=&quot;require('@/assets/images/profile-12.jpeg')&quot; v-b-tooltip.hover title=&quot;Judy Holmes&quot;&gt;&lt;/b-avatar&gt;
    &lt;b-avatar text=&quot;AG&quot; v-b-tooltip.hover title=&quot;Alan Green&quot;&gt;&lt;/b-avatar&gt;
&lt;/b-avatar-group&gt;
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
    import '@/assets/sass/elements/avatar.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Avtar' },
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
