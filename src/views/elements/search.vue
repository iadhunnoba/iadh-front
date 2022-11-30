<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Elements</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Search</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#searchLive" class="nav-link scrollactive-item">Live</a>
                    <a href="#searchOverlay" class="nav-link scrollactive-item">Overlay</a>
                    <a href="#searchBoxed" class="nav-link scrollactive-item">Boxed</a>
                </scrollactive>
            </div>

            <div class="row layout-top-spacing">

                <div id="searchLive" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Live Search</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center tags-content">

                            <div class="row">
                                <div class="col-lg-8 col-md-8 col-sm-9 filtered-list-search-live mx-auto">
                                    <b-form class="form-inline my-2 my-lg-0 justify-content-center" @submit.prevent="search">
                                        <div class="w-100">
                                            <b-input v-model="search_text" class="w-100 product-search br-30" placeholder="Search Attendees..." @keyup="search"></b-input>
                                            <b-button variant="primary" type="submit">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                            </b-button>
                                        </div>
                                    </b-form>
                                </div>
                                <div class="col-lg-12">

                                    <div class="searchable-container-live">
                                        <div class="row">
                                            <div class="col-md-12">

                                                <div class="searchable-items">
                                                    <div v-for="(item, index) in search_items" class="items" :key="index">
                                                        <div class="user-profile">
                                                            <img :src="require('@/assets/images/'+item.thumb)" alt="avatar" />
                                                        </div>
                                                        <div class="user-name">
                                                            <p class="">{{item.name}}</p>
                                                        </div>
                                                        <div class="user-email">
                                                            <p>{{item.email}}</p>
                                                        </div>
                                                        <div class="user-status">
                                                            <span :class="item.status_class">{{item.status}}</span>
                                                        </div>
                                                        <div class="action-btn">
                                                            <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-form class=&quot;form-inline my-2 my-lg-0 justify-content-center&quot;&gt;
    &lt;div class=&quot;w-100&quot;&gt;
        &lt;b-input class=&quot;w-100 product-search br-30&quot; placeholder=&quot;Search Attendees...&quot;&gt;&lt;/b-input&gt;
        &lt;b-button variant=&quot;primary&quot; type=&quot;submit&quot;&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-search&quot;&gt;&lt;circle cx=&quot;11&quot; cy=&quot;11&quot; r=&quot;8&quot;&gt;&lt;/circle&gt;&lt;line x1=&quot;21&quot; y1=&quot;21&quot; x2=&quot;16.65&quot; y2=&quot;16.65&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
        &lt;/b-button&gt;
    &lt;/div&gt;
&lt;/b-form&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="searchOverlay" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Overlay</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center tags-content">
                            <div class="demo-search-overlay" :class="{'show': is_show_search_overlay}" @click="is_show_search_overlay = !is_show_search_overlay"></div>

                            <div class="full-search search-form-overlay" :class="{'input-focused': is_show_search_overlay}" @click="is_show_search_overlay = !is_show_search_overlay">
                                <b-form class="form-inline form-inline search mt-lg-0">
                                    <span @click="$event.stopPropagation()">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    </span>
                                    <div class="search-bar">
                                        <b-input class="search-form-control ml-lg-auto" placeholder="Search..." @click="$event.stopPropagation()"></b-input>
                                    </div>
                                </b-form>
                            </div>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;demo-search-overlay&quot; :class=&quot;{'show': is_show_search_overlay}&quot; @click=&quot;is_show_search_overlay = !is_show_search_overlay&quot;&gt;&lt;/div&gt;

&lt;div class=&quot;full-search search-form-overlay&quot; :class=&quot;{'input-focused': is_show_search_overlay}&quot; @click=&quot;is_show_search_overlay = !is_show_search_overlay&quot;&gt;
    &lt;b-form class=&quot;form-inline form-inline search mt-lg-0&quot;&gt;
        &lt;span @click=&quot;$event.stopPropagation()&quot;&gt;
            &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-search&quot;&gt;&lt;circle cx=&quot;11&quot; cy=&quot;11&quot; r=&quot;8&quot;&gt;&lt;/circle&gt;&lt;line x1=&quot;21&quot; y1=&quot;21&quot; x2=&quot;16.65&quot; y2=&quot;16.65&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
        &lt;/span&gt;
        &lt;div class=&quot;search-bar&quot;&gt;
            &lt;b-input class=&quot;search-form-control ml-lg-auto&quot; placeholder=&quot;Search...&quot; @click=&quot;$event.stopPropagation()&quot;&gt;&lt;/b-input&gt;
        &lt;/div&gt;
    &lt;/b-form&gt;
&lt;/div&gt;
</pre>
                                    </highlight>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div id="searchBoxed" class="col-lg-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Search Box</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center tags-content">
                            <b-input-group class="search-input-group-style input-group mb-3">
                                <b-input-group-prepend>
                                    <span class="input-group-text"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
                                </b-input-group-prepend>
                                <b-input placeholder="Let's find your question in fast way"></b-input>
                            </b-input-group>

                            <div class="code-section-container show-code">

                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-input-group class=&quot;search-input-group-style input-group mb-3&quot;&gt;
    &lt;b-input-group-prepend&gt;
        &lt;span class=&quot;input-group-text&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-search&quot;&gt;&lt;circle cx=&quot;11&quot; cy=&quot;11&quot; r=&quot;8&quot;&gt;&lt;/circle&gt;&lt;line x1=&quot;21&quot; y1=&quot;21&quot; x2=&quot;16.65&quot; y2=&quot;16.65&quot;&gt;&lt;/line&gt;&lt;/svg&gt;&lt;/span&gt;
    &lt;/b-input-group-prepend&gt;
    &lt;b-input placeholder=&quot;Let's find your question in fast way&quot;&gt;&lt;/b-input&gt;
&lt;/b-input-group&gt;
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
    import '@/assets/sass/elements/search.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Search' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                all_items: [], search_items: [],
                search_text: '',
                is_show_search_overlay: false
            }
        },
        mounted() {
            this.all_items = [
                { thumb: 'profile-5.jpeg', name: 'Alan Green', email: 'alan@mail.com', status: 'Active', status_class: 'badge badge-primary' },
                { thumb: 'profile-11.jpeg', name: 'Linda Nelson', email: 'Linda@mail.com', status: 'Busy', status_class: 'badge badge-danger' },
                { thumb: 'profile-12.jpeg', name: 'Lila Perry', email: 'Lila@mail.com', status: 'Closed', status_class: 'badge badge-warning' },
                { thumb: 'profile-3.jpeg', name: 'Andy King', email: 'Andy@mail.com', status: 'Active', status_class: 'badge badge-primary' },
                { thumb: 'profile-15.jpeg', name: 'Jesse Cory', email: 'Jesse@mail.com', status: 'Busy', status_class: 'badge badge-danger' },
            ];
            this.search_items = this.all_items;
        },
        methods: {
            toggleCode(name) {
                if (this.code_arr.includes(name)) {
                    this.code_arr = this.code_arr.filter(d => d != name);
                }
                else {
                    this.code_arr.push(name);
                }
            },
            search() {
                let value = this.search_text ? this.search_text.toLowerCase() : this.search_text;
                this.search_items = this.all_items.filter(d => { return d.name.toLowerCase().includes(value) || d.email.toLowerCase().includes(value) || d.status.toLowerCase().includes(value) });
            }
        }
    };
</script>
