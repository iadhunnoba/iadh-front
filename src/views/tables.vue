<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Tables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Basic</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#tableSimple" class="nav-link scrollactive-item">Simple</a>
                    <a href="#tableHover" class="nav-link scrollactive-item">Hover</a>
                    <a href="#tableStriped" class="nav-link scrollactive-item">Striped</a>
                    <a href="#tableLight" class="nav-link scrollactive-item">Light</a>
                    <a href="#tableCaption" class="nav-link scrollactive-item">Caption</a>
                    <a href="#tableProgress" class="nav-link scrollactive-item">Progress</a>
                    <a href="#tableContextual" class="nav-link scrollactive-item">Contextual</a>
                    <a href="#tableDropdown" class="nav-link scrollactive-item">Dropdown</a>
                    <a href="#tableFooter" class="nav-link scrollactive-item">Footer</a>
                    <a href="#tableCheckbox" class="nav-link scrollactive-item">Checkbox</a>
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
                        <a target="_blank" href="https://bootstrap-vue.org/docs/components/table" class="text-info">
                            https://bootstrap-vue.org/docs/components/table
                        </a>
                    </div>
                </div>
            </div>

            <div class="row layout-top-spacing">
                <div id="tableSimple" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Simple Table</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-table
                                responsive
                                bordered
                                :items="table_1"
                                :fields="['name', 'date', 'sale', { key: 'status', label: 'status', class: 'text-center' }, { key: 'action', label: '', class: 'text-center' }]"
                            >
                                <template #cell(status)="row">
                                    <span
                                        :class="{
                                            'text-success': row.value == 'Complete',
                                            'text-secondary': row.value == 'Pending',
                                            'text-info': row.value == 'In progress',
                                            'text-danger': row.value == 'Canceled'
                                        }"
                                    >
                                        {{ row.value }}
                                    </span>
                                </template>
                                <template #cell(action)>
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
                                        class="feather feather-trash-2 icon"
                                    >
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </template>
                            </b-table>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;b-table responsive bordered :items=&quot;table_1&quot; :fields=&quot;['name', 'date', 'sale', { key: 'status', label: 'status', class: 'text-center' },{ key: 'action', label: '', class: 'text-center' }]&quot;&gt;
    &lt;template #cell(status)=&quot;row&quot;&gt;
        &lt;span :class=&quot;{'text-success': row.value == 'Complete', 'text-secondary': row.value == 'Pending','text-info': row.value == 'In progress','text-danger': row.value == 'Canceled' }&quot;&gt;
            {{ row.value }}
        &lt;/span&gt;
    &lt;/template&gt;
    &lt;template #cell(action)&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-trash-2 icon&quot;&gt;&lt;polyline points=&quot;3 6 5 6 21 6&quot;&gt;&lt;/polyline&gt;&lt;path d=&quot;M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2&quot;&gt;&lt;/path&gt;&lt;line x1=&quot;10&quot; y1=&quot;11&quot; x2=&quot;10&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;14&quot; y1=&quot;11&quot; x2=&quot;14&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
    &lt;/template&gt;
&lt;/b-table&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableHover" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Hover Table</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-table
                                responsive
                                bordered
                                hover
                                :items="table_1"
                                :fields="['name', 'date', 'sale', { key: 'status', label: 'status', class: 'text-center' }, { key: 'action', label: '', class: 'text-center' }]"
                            >
                                <template #cell(status)="row">
                                    <span
                                        :class="{
                                            'text-success': row.value == 'Complete',
                                            'text-secondary': row.value == 'Pending',
                                            'text-info': row.value == 'In progress',
                                            'text-danger': row.value == 'Canceled'
                                        }"
                                    >
                                        {{ row.value }}
                                    </span>
                                </template>
                                <template #cell(action)>
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
                                        class="feather feather-trash-2 icon"
                                    >
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                        <line x1="10" y1="11" x2="10" y2="17"></line>
                                        <line x1="14" y1="11" x2="14" y2="17"></line>
                                    </svg>
                                </template>
                            </b-table>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;b-table responsive bordered hover :items=&quot;table_1&quot; :fields=&quot;['name', 'date', 'sale', { key: 'status', label: 'status', class: 'text-center' },{ key: 'action', label: '', class: 'text-center' }]&quot;&gt;
    &lt;template #cell(status)=&quot;row&quot;&gt;
        &lt;span :class=&quot;{'text-success': row.value == 'Complete', 'text-secondary': row.value == 'Pending','text-info': row.value == 'In progress','text-danger': row.value == 'Canceled' }&quot;&gt;
            {{ row.value }}
        &lt;/span&gt;
    &lt;/template&gt;
    &lt;template #cell(action)&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-trash-2 icon&quot;&gt;&lt;polyline points=&quot;3 6 5 6 21 6&quot;&gt;&lt;/polyline&gt;&lt;path d=&quot;M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2&quot;&gt;&lt;/path&gt;&lt;line x1=&quot;10&quot; y1=&quot;11&quot; x2=&quot;10&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;14&quot; y1=&quot;11&quot; x2=&quot;14&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
    &lt;/template&gt;
&lt;/b-table&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableStriped" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Striped Table</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-table responsive bordered striped :items="table_1" :fields="['name', 'date', 'sale', { key: 'action', label: 'action', class: 'text-center' }]">
                                <template #cell(name)="row">
                                    <div class="d-flex">
                                        <div class="usr-img-frame mr-2 rounded-circle">
                                            <img alt="avatar" class="img-fluid rounded-circle" :src="require('@/assets/images/' + row.item.thumb)" />
                                        </div>
                                        <p class="align-self-center mb-0">{{ row.value }}</p>
                                    </div>
                                </template>
                                <template #cell(action)>
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
                                        class="feather feather-x t-icon t-hover-icon"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </template>
                            </b-table>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;b-table responsive bordered striped :items=&quot;table_1&quot; :fields=&quot;['name', 'date', 'sale', { key: 'action', label: 'action', class: 'text-center' }]&quot;&gt;
    &lt;template #cell(name)=&quot;row&quot;&gt;
        &lt;div class=&quot;d-flex&quot;&gt;
            &lt;div class=&quot;usr-img-frame mr-2 rounded-circle&quot;&gt;
                &lt;img alt=&quot;avatar&quot; class=&quot;img-fluid rounded-circle&quot; :src=&quot;require('@/assets/images/' + row.item.thumb)&quot; /&gt;
            &lt;/div&gt;
            &lt;p class=&quot;align-self-center mb-0&quot;&gt;{{ row.value }}&lt;/p&gt;
        &lt;/div&gt;
    &lt;/template&gt;
    &lt;template #cell(action)&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-x t-icon t-hover-icon&quot;&gt;&lt;line x1=&quot;18&quot; y1=&quot;6&quot; x2=&quot;6&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;6&quot; y1=&quot;6&quot; x2=&quot;18&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
    &lt;/template&gt;
&lt;/b-table&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableLight" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Table Light</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-table
                                responsive
                                hover
                                class="table-light"
                                :items="table_1"
                                :fields="[{ key: 'index', label: '#' }, 'first name', 'last name', 'email', { key: 'action', label: '', class: 'text-center' }]"
                            >
                                <template #cell(index)="row">
                                    {{ row.index + 1 }}
                                </template>
                                <template #cell(action)>
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
                                        class="feather feather-x t-icon"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </template>
                            </b-table>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;b-table responsive hover class=&quot;table-light&quot; :items=&quot;table_1&quot; :fields=&quot;[{ key:'index', label: '#'}, 'first name', 'last name', 'email', { key: 'action', label: '', class: 'text-center' }]&quot;&gt;
    &lt;template #cell(index)=&quot;row&quot;&gt;
        {{ row.index + 1 }}
    &lt;/template&gt;
    &lt;template #cell(action)&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-x t-icon&quot;&gt;&lt;line x1=&quot;18&quot; y1=&quot;6&quot; x2=&quot;6&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;6&quot; y1=&quot;6&quot; x2=&quot;18&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
    &lt;/template&gt;
&lt;/b-table&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableCaption" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Captions</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-table responsive :items="table_1" :fields="[{ key: 'index', label: '#' }, { key: 'name', tdClass: 'text-success' }, 'email', 'status', 'register']">
                                <template #cell(index)="row">
                                    {{ row.index + 1 }}
                                </template>
                                <template #cell(status)="row">
                                    <span
                                        class="badge"
                                        :class="{
                                            'outline-badge-primary': row.value == 'Complete',
                                            'outline-badge-secondary': row.value == 'Pending',
                                            'outline-badge-info': row.value == 'In progress',
                                            'outline-badge-danger': row.value == 'Canceled'
                                        }"
                                    >
                                        {{ row.value }}
                                    </span>
                                </template>
                                <template #cell(action)>
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
                                        class="feather feather-x t-icon"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </template>
                            </b-table>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;b-table responsive :items=&quot;table_1&quot; :fields=&quot;[{ key:'index', label: '#'}, {key:'name', tdClass:'text-success'}, 'email', 'status', 'register']&quot;&gt;
    &lt;template #cell(index)=&quot;row&quot;&gt;
        {{ row.index + 1 }}
    &lt;/template&gt;
    &lt;template #cell(status)=&quot;row&quot;&gt;
        &lt;span class=&quot;badge&quot; :class=&quot;{'outline-badge-primary': row.value == 'Complete', 'outline-badge-secondary': row.value == 'Pending','outline-badge-info': row.value == 'In progress','outline-badge-danger': row.value == 'Canceled' }&quot;&gt;
            {{ row.value }}
        &lt;/span&gt;
    &lt;/template&gt;
    &lt;template #cell(action)&gt;
        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-x t-icon&quot;&gt;&lt;line x1=&quot;18&quot; y1=&quot;6&quot; x2=&quot;6&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;6&quot; y1=&quot;6&quot; x2=&quot;18&quot; y2=&quot;18&quot;&gt;&lt;/line&gt;&lt;/svg&gt;
    &lt;/template&gt;
&lt;/b-table&gt;
    </pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableProgress" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Progress Table</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-table responsive bordered :items="table_1" :fields="[{ key: 'index', label: '#' }, 'name', 'progress', 'sales', { key: 'action', class: 'text-center' }]">
                                <template #cell(index)="row">
                                    {{ row.index + 1 }}
                                </template>
                                <template #cell(name)="row">
                                    {{ row.item['first name'] + ' ' + row.item['last name'] }}
                                </template>
                                <template #cell(progress)="row">
                                    <b-progress v-if="row.index == 0" variant="primary" :value="row.item.sales" :min="0" :max="100" class="br-30"></b-progress>
                                    <b-progress v-if="row.index == 1" variant="warning" :value="row.item.sales" :min="0" :max="100" class="br-30"></b-progress>
                                    <b-progress v-if="row.index == 2" variant="success" :value="row.item.sales" :min="0" :max="100" class="br-30"></b-progress>
                                    <b-progress v-if="row.index == 3" variant="secondary" :value="row.item.sales" :min="0" :max="100" class="br-30"></b-progress>
                                </template>
                                <template #cell(sales)="row">
                                    <p :class="row.index == 3 ? 'text-success' : 'text-danger'">{{ row.value + '%' }}</p>
                                </template>
                                <template #cell(action)>
                                    <ul class="table-controls">
                                        <li>
                                            <a href="javascript:void(0);" v-b-tooltip title="Edit"
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
                                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" v-b-tooltip title="Delete"
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
                                                    <line x1="14" y1="11" x2="14" y2="17"></line></svg
                                            ></a>
                                        </li>
                                    </ul>
                                </template>
                            </b-table>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;b-table responsive bordered :items=&quot;table_1&quot; :fields=&quot;[{ key:'index', label: '#'}, 'name', 'progress', 'sales', { key: 'action', class: 'text-center' }]&quot;&gt;
    &lt;template #cell(index)=&quot;row&quot;&gt;
        {{ row.index + 1 }}
    &lt;/template&gt;
    &lt;template #cell(name)=&quot;row&quot;&gt;
        {{ row.item['first name'] + ' ' + row.item['last name'] }}
    &lt;/template&gt;
    &lt;template #cell(progress)=&quot;row&quot;&gt;
        &lt;b-progress v-if=&quot;row.index == 0&quot; variant=&quot;primary&quot; :value=&quot;row.item.sales&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;
        &lt;b-progress v-if=&quot;row.index == 1&quot; variant=&quot;warning&quot; :value=&quot;row.item.sales&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;
        &lt;b-progress v-if=&quot;row.index == 2&quot; variant=&quot;success&quot; :value=&quot;row.item.sales&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;
        &lt;b-progress v-if=&quot;row.index == 3&quot; variant=&quot;secondary&quot; :value=&quot;row.item.sales&quot; :min=&quot;0&quot; :max=&quot;100&quot; class=&quot;br-30&quot;&gt;&lt;/b-progress&gt;
    &lt;/template&gt;
    &lt;template #cell(sales)=&quot;row&quot;&gt;
        &lt;p :class=&quot;row.index == 3 ? 'text-success' : 'text-danger'&quot;&gt;{{ row.value + '%' }}&lt;/p&gt;
    &lt;/template&gt;
    &lt;template #cell(action)&gt;
        &lt;ul class=&quot;table-controls&quot;&gt;
            &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; v-b-tooltip title=&quot;Edit&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-edit-2&quot;&gt;&lt;path d=&quot;M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; v-b-tooltip title=&quot;Delete&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-trash-2&quot;&gt;&lt;polyline points=&quot;3 6 5 6 21 6&quot;&gt;&lt;/polyline&gt;&lt;path d=&quot;M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2&quot;&gt;&lt;/path&gt;&lt;line x1=&quot;10&quot; y1=&quot;11&quot; x2=&quot;10&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;14&quot; y1=&quot;11&quot; x2=&quot;14&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;&lt;/svg&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/template&gt;
&lt;/b-table&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableContextual" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Contextual</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-table-simple responsive class="contextual-table">
                                <b-thead>
                                    <b-tr>
                                        <b-th>#</b-th>
                                        <b-th>first name</b-th>
                                        <b-th>last name</b-th>
                                        <b-th>email</b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr v-for="(row, index) in table_2" :key="index" :class="'table-' + random_class(index)">
                                        <b-td>{{ index + 1 }}</b-td>
                                        <b-td>{{ row['first name'] }}</b-td>
                                        <b-td>{{ row['last name'] }}</b-td>
                                        <b-td>{{ row['email'] }}</b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;b-table-simple responsive class=&quot;contextual-table&quot;&gt;
    &lt;b-thead&gt;
        &lt;b-tr&gt;
            &lt;b-th&gt;#&lt;/b-th&gt;
            &lt;b-th&gt;first name&lt;/b-th&gt;
            &lt;b-th&gt;last name&lt;/b-th&gt;
            &lt;b-th&gt;email&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr v-for=&quot;(row,index) in table_2&quot; :key=&quot;index&quot; :class=&quot;'table-' + random_class(index)&quot;&gt;
            &lt;b-td&gt;{{ index + 1 }}&lt;/b-td&gt;
            &lt;b-td&gt;{{ row['first name'] }}&lt;/b-td&gt;
            &lt;b-td&gt;{{ row['last name'] }}&lt;/b-td&gt;
            &lt;b-td&gt;{{ row['email'] }}&lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableDropdown" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dropdown</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-table-simple responsive bordered>
                                <b-thead>
                                    <b-tr>
                                        <b-th>Name</b-th>
                                        <b-th>Date</b-th>
                                        <b-th>Sale</b-th>
                                        <b-th class="text-center">Status</b-th>
                                        <b-th class="text-center">Action</b-th>
                                    </b-tr>
                                </b-thead>
                                <b-tbody>
                                    <b-tr v-for="(row, index) in table_2" :key="index">
                                        <b-td>{{ row.name }}</b-td>
                                        <b-td>{{ row.date }}</b-td>
                                        <b-td>{{ row.sale }}</b-td>
                                        <b-td>
                                            <b-badge :variant="random_class(index + 1)">{{ row.status }}</b-badge>
                                        </b-td>
                                        <b-td class="text-center">
                                            <b-dropdown :right="true" variant="icon-only" toggle-tag="a" class="custom-dropdown">
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
                                                <b-dropdown-item>Download</b-dropdown-item>
                                                <b-dropdown-item>Share</b-dropdown-item>
                                                <b-dropdown-item>Edit</b-dropdown-item>
                                                <b-dropdown-item>Delete</b-dropdown-item>
                                            </b-dropdown>
                                        </b-td>
                                    </b-tr>
                                </b-tbody>
                            </b-table-simple>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-left">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;b-table-simple responsive bordered&gt;
    &lt;b-thead&gt;
        &lt;b-tr&gt;
            &lt;b-th&gt;Name&lt;/b-th&gt;
            &lt;b-th&gt;Date&lt;/b-th&gt;
            &lt;b-th&gt;Sale&lt;/b-th&gt;
            &lt;b-th class=&quot;text-center&quot;&gt;Status&lt;/b-th&gt;
            &lt;b-th class=&quot;text-center&quot;&gt;Action&lt;/b-th&gt;
        &lt;/b-tr&gt;
    &lt;/b-thead&gt;
    &lt;b-tbody&gt;
        &lt;b-tr v-for=&quot;(row,index) in table_2&quot; :key=&quot;index&quot;&gt;
            &lt;b-td&gt;{{ row.name }}&lt;/b-td&gt;
            &lt;b-td&gt;{{ row.date }}&lt;/b-td&gt;
            &lt;b-td&gt;{{ row.sale }}&lt;/b-td&gt;
            &lt;b-td&gt;
                &lt;b-badge :variant=&quot;random_class(index+1)&quot;&gt;{{ row.status }}&lt;/b-badge&gt;
            &lt;/b-td&gt;
            &lt;b-td class=&quot;text-center&quot;&gt;
                &lt;b-dropdown :right=&quot;true&quot; variant=&quot;icon-only&quot; toggle-tag=&quot;a&quot; class=&quot;custom-dropdown&quot;&gt;
                    &lt;template #button-content&gt;
                        &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-more-horizontal&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;1&quot;&gt;&lt;/circle&gt;&lt;circle cx=&quot;19&quot; cy=&quot;12&quot; r=&quot;1&quot;&gt;&lt;/circle&gt;&lt;circle cx=&quot;5&quot; cy=&quot;12&quot; r=&quot;1&quot;&gt;&lt;/circle&gt;&lt;/svg&gt;
                    &lt;/template&gt;
                    &lt;b-dropdown-item&gt;Download&lt;/b-dropdown-item&gt;
                    &lt;b-dropdown-item&gt;Share&lt;/b-dropdown-item&gt;
                    &lt;b-dropdown-item&gt;Edit&lt;/b-dropdown-item&gt;
                    &lt;b-dropdown-item&gt;Delete&lt;/b-dropdown-item&gt;
                &lt;/b-dropdown&gt;
            &lt;/b-td&gt;
        &lt;/b-tr&gt;
    &lt;/b-tbody&gt;
&lt;/b-table-simple&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableFooter" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Table with Footer</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-table responsive bordered hover foot-clone class="table-condensed" :items="table_1" :fields="['name', 'position', 'office', { key: 'action', class: 'text-center' }]">
                                <template #cell(action)>
                                    <ul class="table-controls">
                                        <li>
                                            <a href="javascript:void(0);" v-b-tooltip title="Edit"
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
                                                    class="feather feather-check-circle text-primary"
                                                >
                                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                    <polyline points="22 4 12 14.01 9 11.01"></polyline></svg
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" v-b-tooltip title="Delete"
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
                                                    class="feather feather-x-circle text-danger"
                                                >
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                                    <line x1="9" y1="9" x2="15" y2="15"></line></svg
                                            ></a>
                                        </li>
                                    </ul>
                                </template>
                            </b-table>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code9')" class="code-section text-left">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;b-table responsive bordered hover foot-clone class=&quot;table-condensed&quot; :items=&quot;table_1&quot; :fields=&quot;['name', 'position', 'office', { key: 'action', class: 'text-center' }]&quot;&gt;
    &lt;template #cell(action)&gt;
        &lt;ul class=&quot;table-controls&quot;&gt;
            &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; v-b-tooltip title=&quot;Edit&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-check-circle text-primary&quot;&gt;&lt;path d=&quot;M22 11.08V12a10 10 0 1 1-5.93-9.14&quot;&gt;&lt;/path&gt;&lt;polyline points=&quot;22 4 12 14.01 9 11.01&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; v-b-tooltip title=&quot;Delete&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-x-circle text-danger&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;10&quot;&gt;&lt;/circle&gt;&lt;line x1=&quot;15&quot; y1=&quot;9&quot; x2=&quot;9&quot; y2=&quot;15&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;9&quot; y1=&quot;9&quot; x2=&quot;15&quot; y2=&quot;15&quot;&gt;&lt;/line&gt;&lt;/svg&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/template&gt;
&lt;/b-table&gt;
</pre
                                            >
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="tableCheckbox" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Checkboxes</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body">
                            <b-table
                                responsive
                                bordered
                                hover
                                striped
                                class="table-checkable table-highlight-head"
                                :items="table_1"
                                :fields="[{ key: 'checkbox', class: 'text-center' }, 'name', 'date', 'sale', { key: 'action', label: 'icons', class: 'text-center' }]"
                            >
                                <template #head(checkbox)>
                                    <b-checkbox variant="primary" class="checkbox-primary"></b-checkbox>
                                </template>
                                <template #cell(checkbox)>
                                    <b-checkbox variant="primary" class="checkbox-primary"></b-checkbox>
                                </template>
                                <template #cell(action)>
                                    <ul class="table-controls">
                                        <li>
                                            <a href="javascript:void(0);" v-b-tooltip title="Settings"
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
                                                    class="feather feather-settings text-primary"
                                                >
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                    <path
                                                        d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                                                    ></path></svg
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" v-b-tooltip title="Edit"
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
                                                    class="feather feather-edit-2 text-success"
                                                >
                                                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg
                                            ></a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);" v-b-tooltip title="Delete"
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
                                                    class="feather feather-trash-2 text-danger"
                                                >
                                                    <polyline points="3 6 5 6 21 6"></polyline>
                                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                    <line x1="10" y1="11" x2="10" y2="17"></line>
                                                    <line x1="14" y1="11" x2="14" y2="17"></line></svg
                                            ></a>
                                        </li>
                                    </ul>
                                </template>
                            </b-table>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code10')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code10')" class="code-section text-left">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;b-table responsive bordered hover striped class=&quot;table-checkable table-highlight-head&quot; :items=&quot;table_1&quot; :fields=&quot;[{key: 'checkbox', class:'text-center'}, 'name', 'date', 'sale', { key: 'action', label : 'icons', class: 'text-center' }]&quot;&gt;
    &lt;template #head(checkbox)&gt;
        &lt;b-checkbox variant=&quot;primary&quot; class=&quot;checkbox-primary&quot;&gt;&lt;/b-checkbox&gt;
    &lt;/template&gt;
    &lt;template #cell(checkbox)&gt;
        &lt;b-checkbox variant=&quot;primary&quot; class=&quot;checkbox-primary&quot;&gt;&lt;/b-checkbox&gt;
    &lt;/template&gt;
    &lt;template #cell(action)&gt;
        &lt;ul class=&quot;table-controls&quot;&gt;
            &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; v-b-tooltip title=&quot;Settings&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-settings text-primary&quot;&gt;&lt;circle cx=&quot;12&quot; cy=&quot;12&quot; r=&quot;3&quot;&gt;&lt;/circle&gt;&lt;path d=&quot;M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;&lt;/a&gt; &lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; v-b-tooltip title=&quot;Edit&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-edit-2 text-success&quot;&gt;&lt;path d=&quot;M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z&quot;&gt;&lt;/path&gt;&lt;/svg&gt;&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href=&quot;javascript:void(0);&quot; v-b-tooltip title=&quot;Delete&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-trash-2 text-danger&quot;&gt;&lt;polyline points=&quot;3 6 5 6 21 6&quot;&gt;&lt;/polyline&gt;&lt;path d=&quot;M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2&quot;&gt;&lt;/path&gt;&lt;line x1=&quot;10&quot; y1=&quot;11&quot; x2=&quot;10&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;&lt;line x1=&quot;14&quot; y1=&quot;11&quot; x2=&quot;14&quot; y2=&quot;17&quot;&gt;&lt;/line&gt;&lt;/svg&gt;&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/template&gt;
&lt;/b-table&gt;
</pre
                                            >
                                        </div>
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
    import '@/assets/sass/tables/table-basic.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Tables' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                table_1: [],
                table_2: []
            };
        },
        mounted() {
            this.init_tables();
        },
        methods: {
            toggleCode(name) {
                if (this.code_arr.includes(name)) {
                    this.code_arr = this.code_arr.filter(d => d != name);
                } else {
                    this.code_arr.push(name);
                }
            },
            init_tables() {
                this.table_1 = [
                    {
                        thumb: 'boy.png',
                        name: 'Shaun Park',
                        'first name': 'John',
                        'last name': 'Doe',
                        email: 'johndoe@yahoo.com',
                        date: '10/08/2020',
                        sale: '320',
                        sales: '29.56',
                        status: 'Complete',
                        status_class: 'text-success',
                        register: '5 min ago',
                        position: 'Developer',
                        office: 'London'
                    },
                    {
                        thumb: 'girl-1.png',
                        name: 'Alma Clarke',
                        'first name': 'Andy',
                        'last name': 'King',
                        email: 'andyking@gmail.com',
                        date: '11/08/2020',
                        sale: '420',
                        sales: '19.15',
                        status: 'Pending',
                        status_class: 'text-secondary',
                        register: '10 min ago',
                        position: 'Designer',
                        office: 'New York'
                    },
                    {
                        thumb: 'girl-2.png',
                        name: 'Xavier',
                        'first name': 'Lisa',
                        'last name': 'Doe',
                        email: 'lisadoe@yahoo.com',
                        date: '12/08/2020',
                        sale: '130',
                        sales: '39.00',
                        status: 'In progress',
                        status_class: 'text-info',
                        register: '1 hour ago',
                        position: 'Accountant',
                        office: 'Amazon'
                    },
                    {
                        thumb: 'boy-2.png',
                        name: 'Vincent Carpenter',
                        'first name': 'Vincent',
                        'last name': 'Carpenter',
                        email: 'vinnyc@yahoo.com',
                        date: '13/08/2020',
                        sale: '260',
                        sales: '88.03',
                        status: 'Canceled',
                        status_class: 'text-danger',
                        register: '1 day ago',
                        position: 'Data Scientist',
                        office: 'Canada'
                    }
                ];

                this.table_2 = [
                    {
                        thumb: 'boy.png',
                        name: 'Amy Diaz',
                        'first name': 'Amy',
                        'last name': 'Diaz',
                        email: 'amydiaz@yahoo.com',
                        date: '10/08/2020',
                        sale: '320',
                        sales: '29.56',
                        status: 'Complete',
                        status_class: 'text-success',
                        register: '5 min ago'
                    },
                    {
                        thumb: 'girl-1.png',
                        name: 'Nia Hillyer',
                        'first name': 'Nia',
                        'last name': 'Hillyer',
                        email: 'niahill@gmail.com',
                        date: '11/08/2020',
                        sale: '420',
                        sales: '19.15',
                        status: 'Pending',
                        status_class: 'text-secondary',
                        register: '10 min ago'
                    },
                    {
                        thumb: 'girl-2.png',
                        name: 'Marry',
                        'first name': 'Marry',
                        'last name': 'McDonald',
                        email: 'marryMcD@yahoo.com',
                        date: '12/08/2020',
                        sale: '130',
                        sales: '39.00',
                        status: 'In progress',
                        status_class: 'text-info',
                        register: '1 hour ago'
                    },
                    {
                        thumb: 'boy-2.png',
                        name: 'Shaun Park',
                        'first name': 'Shaun',
                        'last name': 'Park',
                        email: 'park@yahoo.com',
                        date: '13/08/2020',
                        sale: '260',
                        sales: '88.03',
                        status: 'Canceled',
                        status_class: 'text-danger',
                        register: '1 day ago'
                    }
                ];
                this.table_2 = this.table_1.concat(this.table_2);
            },
            random_class(index) {
                if (index == 0) {
                    return 'default';
                } else if (index == 1) {
                    return 'primary';
                } else if (index == 2) {
                    return 'secondary';
                } else if (index == 3) {
                    return 'success';
                } else if (index == 4) {
                    return 'dark';
                } else if (index == 5) {
                    return 'danger';
                } else if (index == 6) {
                    return 'info';
                } else if (index == 7) {
                    return 'warning';
                }
                return 'dark';
            }
        }
    };
</script>
