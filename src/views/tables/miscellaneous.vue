<template>
    <div class="layout-px-spacing">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">DataTables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Miscellaneous</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="seperator-header layout-top-spacing">
            <h4 class="">Show/ Hide Columns</h4>
        </div>
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel p-0">
                    <div class="custom-table">
                        <div class="table-header">
                            <div class="d-flex align-items-center">
                                <span>Results :</span>
                                <span class="ml-2">
                                    <b-select v-model="table_option.page_size" size="sm">
                                        <b-select-option value="5">5</b-select-option>
                                        <b-select-option value="10">10</b-select-option>
                                        <b-select-option value="20">20</b-select-option>
                                        <b-select-option value="50">50</b-select-option>
                                    </b-select>
                                </span>
                            </div>
                            <div class="d-flex">
                                <b-dropdown ref="column_dropdown" :right="true" variant="outline-primary" class="custom-dropdown column-visibility mr-2 flex-shrink-0">
                                    <template #button-content>
                                        Columns
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
                                    </template>
                                    <b-checkbox v-for="(column, index) in columns" :key="index" v-model="column.is_visible" variant="primary" class="checkbox-outline-primary mx-3 my-2">
                                        {{ column.label }}
                                    </b-checkbox>
                                </b-dropdown>
                                <div class="header-search">
                                    <div>
                                        <b-input v-model="table_option.search_text" size="sm" placeholder="Search..." />
                                        <div class="search-image">
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
                                                class="feather feather-search"
                                            >
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <b-table
                            ref="basic_table"
                            responsive
                            :items="items"
                            :fields="visible_fields"
                            :per-page="table_option.page_size"
                            :current-page="table_option.current_page"
                            :filter="table_option.search_text"
                            sort-by="first_name"
                            :show-empty="true"
                            @filtered="on_filtered"
                        >
                            <template #cell(id)="row">
                                <b-checkbox v-model="selected_rows" :value="row.value" variant="primary" class="checkbox-outline-primary" @change="check_select_all"></b-checkbox>
                            </template>
                            <template #cell(thumb)="row">
                                <img :src="require('@/assets/images/' + row.item.thumb)" class="rounded-circle profile-img" alt="avatar" />
                            </template>
                            <template #cell(status)="row">
                                <b-badge :variant="row.value.class">{{ row.value.key }}</b-badge>
                            </template>
                            <template #cell(action)>
                                <a href="javascript:;" class="cancel">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-x-circle table-cancel"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="15" y1="9" x2="9" y2="15"></line>
                                        <line x1="9" y1="9" x2="15" y2="15"></line>
                                    </svg>
                                </a>
                            </template>
                        </b-table>

                        <div class="table-footer">
                            <div class="dataTables_info">Showing {{ meta.total_items ? meta.start_index + 1 : 0 }} to {{ meta.end_index + 1 }} of {{ meta.total_items }}</div>
                            <div class="paginating-container pagination-solid flex-column align-items-right">
                                <b-pagination
                                    v-model="table_option.current_page"
                                    :total-rows="table_option.total_rows"
                                    :per-page="table_option.page_size"
                                    prev-text="Prev"
                                    next-text="Next"
                                    first-text="First"
                                    last-text="Last"
                                    first-class="first"
                                    prev-class="prev"
                                    next-class="next"
                                    last-class="last"
                                    class="rounded"
                                >
                                    <template #first-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                        </svg>
                                    </template>
                                    <template #prev-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </template>
                                    <template #next-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </template>
                                    <template #last-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                        </svg>
                                    </template>
                                </b-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="seperator-header layout-top-spacing">
            <h4 class="">Individual column searching (text inputs)</h4>
        </div>
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel p-0">
                    <div class="custom-table">
                        <div class="table-header">
                            <div class="d-flex align-items-center">
                                <span>Results :</span>
                                <span class="ml-2">
                                    <b-select v-model="table_option1.page_size" class="h-auto">
                                        <b-select-option value="5">5</b-select-option>
                                        <b-select-option value="10">10</b-select-option>
                                        <b-select-option value="20">20</b-select-option>
                                        <b-select-option value="50">50</b-select-option>
                                    </b-select>
                                </span>
                            </div>
                            <div class="header-search">
                                <b-input v-model="table_option1.search_text" size="sm" placeholder="Search..." />
                                <div class="search-image">
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
                                        class="feather feather-search"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <b-table
                            ref="basic_table1"
                            responsive
                            :items="filter_items1"
                            :fields="columns1"
                            :per-page="table_option1.page_size"
                            :current-page="table_option1.current_page"
                            :filter="table_option1.search_text"
                            :show-empty="true"
                            @filtered="on_filtered1"
                        >
                            <template #top-row>
                                <td v-for="field in columns1" :key="field.key">
                                    <b-input v-model="column_filters[field.key]" size="sm" :placeholder="field.label"></b-input>
                                </td>
                            </template>

                            <template #cell(salary)="row">
                                {{ row.item.salary ? '$' + row.item.salary : '' }}
                            </template>
                            <template #cell(action)>
                                <a href="javascript:;" class="cancel">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-x-circle table-cancel"
                                    >
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="15" y1="9" x2="9" y2="15"></line>
                                        <line x1="9" y1="9" x2="15" y2="15"></line>
                                    </svg>
                                </a>
                            </template>
                        </b-table>

                        <div class="table-footer">
                            <div class="dataTables_info">Showing {{ meta1.total_items ? meta1.start_index + 1 : 0 }} to {{ meta1.end_index + 1 }} of {{ meta1.total_items }}</div>
                            <div class="paginating-container pagination-solid flex-column align-items-right">
                                <b-pagination
                                    v-model="table_option1.current_page"
                                    :total-rows="table_option1.total_rows"
                                    :per-page="table_option1.page_size"
                                    prev-text="Prev"
                                    next-text="Next"
                                    first-text="First"
                                    last-text="Last"
                                    first-class="first"
                                    prev-class="prev"
                                    next-class="next"
                                    last-class="last"
                                    class="rounded"
                                >
                                    <template #first-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                        </svg>
                                    </template>
                                    <template #prev-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </template>
                                    <template #next-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </template>
                                    <template #last-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                        </svg>
                                    </template>
                                </b-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="seperator-header layout-top-spacing">
            <h4 class="">Column Filter</h4>
        </div>
        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel p-0">
                    <div class="custom-table table3">
                        <div class="table-header">
                            <div class="d-flex align-items-center">
                                <span>Results :</span>
                                <span class="ml-2">
                                    <b-select v-model="table_option2.page_size" class="h-auto">
                                        <b-select-option value="5">5</b-select-option>
                                        <b-select-option value="10">10</b-select-option>
                                        <b-select-option value="20">20</b-select-option>
                                        <b-select-option value="50">50</b-select-option>
                                    </b-select>
                                </span>
                            </div>
                            <div class="header-search">
                                <b-input v-model="table_option2.search_text" size="sm" placeholder="Search..." />
                                <div class="search-image">
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
                                        class="feather feather-search"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <b-table
                            ref="basic_table2"
                            responsive
                            :items="items2"
                            :fields="columns2"
                            :per-page="table_option2.page_size"
                            :current-page="table_option2.current_page"
                            :filter="table_option2.search_text"
                            sort-by="id"
                            :show-empty="true"
                            @filtered="on_filtered2"
                            @sort-changed="clear_selection2"
                        >
                            <template #head(id)>
                                <b-checkbox v-model="is_select_all2" variant="primary" class="checkbox-outline-primary" @change="select_all2()" />
                            </template>

                            <template #cell(id)="row">
                                <b-checkbox v-model="selected_rows2" :value="row.value" variant="primary" class="checkbox-outline-primary" @change="check_select_all2"></b-checkbox>
                            </template>
                            <template #cell(thumb)="row">
                                <img :src="require('@/assets/images/' + row.item.thumb)" class="rounded-circle profile-img" alt="avatar" />
                            </template>
                            <template #cell(status)="row">
                                <b-badge :variant="row.value.class">{{ row.value.key }}</b-badge>
                            </template>
                            <template #cell(action)>
                                <b-button variant="outline-primary" size="sm">View</b-button>
                            </template>
                        </b-table>

                        <div class="table-footer">
                            <div class="dataTables_info">Showing {{ meta2.total_items ? meta2.start_index + 1 : 0 }} to {{ meta2.end_index + 1 }} of {{ meta2.total_items }}</div>
                            <div class="paginating-container pagination-solid flex-column align-items-right">
                                <b-pagination
                                    v-model="table_option2.current_page"
                                    :total-rows="table_option2.total_rows"
                                    :per-page="table_option2.page_size"
                                    prev-text="Prev"
                                    next-text="Next"
                                    first-text="First"
                                    last-text="Last"
                                    first-class="first"
                                    prev-class="prev"
                                    next-class="next"
                                    last-class="last"
                                    class="rounded"
                                >
                                    <template #first-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                                        </svg>
                                    </template>
                                    <template #prev-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </template>
                                    <template #next-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </template>
                                    <template #last-text>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                        </svg>
                                    </template>
                                </b-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .table3 .actions svg {
        padding: 2px;
    }
</style>
<script>
    export default {
        metaInfo: { title: 'Bootstrap Miscellaneous Table' },
        data() {
            return {
                //table 1
                items: [],
                columns: [],
                table_option: { total_rows: 0, current_page: 1, page_size: 10, search_text: '' },
                meta: {},

                //table 2
                items1: [],
                columns1: [],
                table_option1: { total_rows: 0, current_page: 1, page_size: 10, search_text: '' },
                meta1: {},
                column_filters: { id: '', name: '', position: '', office: '', age: '', start_date: '', salary: '' },

                //table 3
                items2: [],
                columns2: [],
                table_option2: { total_rows: 0, current_page: 1, page_size: 10, search_text: '' },
                meta2: {},
                is_select_all2: false,
                selected_rows2: []
            };
        },
        watch: {
            table_option: {
                handler: function() {
                    this.get_meta();
                },
                deep: true
            },
            table_option1: {
                handler: function() {
                    this.get_meta1();
                },
                deep: true
            },
            table_option2: {
                handler: function() {
                    this.get_meta2();
                    this.clear_selection2();
                },
                deep: true
            }
        },
        computed: {
            visible_fields() {
                return this.columns.filter(field => field.is_visible);
            },
            filter_items1() {
                const filtered = this.items1.filter(item => {
                    return Object.keys(this.column_filters).every(key => {
                        let check_val = item[key] ? String(item[key]).toLowerCase() : '';
                        return check_val.includes(this.column_filters[key].toLowerCase());
                    });
                });
                return filtered;
            }
        },
        mounted() {
            this.bind_data();
        },
        methods: {
            bind_data() {
                //table 1
                this.columns = [
                    { key: 'name', label: 'Name', sortable: true, is_visible: true },
                    { key: 'position', label: 'Position', sortable: true, is_visible: true },
                    { key: 'office', label: 'Office', sortable: true, is_visible: true },
                    { key: 'age', label: 'Age', sortable: true, is_visible: true },
                    { key: 'start_date', label: 'Start Date', sortable: true, is_visible: true },
                    { key: 'salary', label: 'Salary', sortable: true, is_visible: true }
                ];
                this.items = [
                    { id: 1, name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '320,800' },
                    { id: 2, name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, start_date: '2011/07/25', salary: '170,750' },
                    { id: 3, name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', age: 66, start_date: '2009/01/12', salary: '86,000' },
                    { id: 4, name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, start_date: '2012/03/29', salary: '433,060' },
                    { id: 5, name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, start_date: '2008/11/28', salary: '162,700' },
                    { id: 6, name: 'Brielle Williamson', position: 'Integration Specialist', office: 'New York', age: 61, start_date: '2012/12/02', salary: '372,000' },
                    { id: 7, name: 'Herrod Chandler', position: 'Sales Assistant', office: 'San Francisco', age: 59, start_date: '2012/08/06', salary: '137,500' },
                    { id: 8, name: 'Rhona Davidson', position: 'Integration Specialist', office: 'Tokyo', age: 55, start_date: '2010/10/14', salary: '327,900' },
                    { id: 9, name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', age: 39, start_date: '2009/09/15', salary: '205,500' },
                    { id: 10, name: 'Sonya Frost', position: 'Software Engineer', office: 'Edinburgh', age: 23, start_date: '2008/12/13', salary: '103,600' },
                    { id: 11, name: 'Jena Gaines', position: 'Office Manager', office: 'London', age: 30, start_date: '2008/12/19', salary: '90,560' },
                    { id: 12, name: 'Quinn Flynn', position: 'Support Lead', office: 'Edinburgh', age: 22, start_date: '2013/03/03', salary: '342,000' },
                    { id: 13, name: 'Charde Marshall', position: 'Regional Director', office: 'San Francisco', age: 36, start_date: '2008/10/16', salary: '470,600' },
                    { id: 14, name: 'Haley Kennedy', position: 'Senior Marketing Designer', office: 'London', age: 43, start_date: '2012/12/18', salary: '313,500' },
                    { id: 15, name: 'Tatyana Fitzpatrick', position: 'Regional Director', office: 'London', age: 19, start_date: '2010/03/17', salary: '385,750' },
                    { id: 16, name: 'Michael Silva', position: 'Marketing Designer', office: 'London', age: 66, start_date: '2012/11/27', salary: '198,500' },
                    { id: 17, name: 'Paul Byrd', position: 'Chief Financial Officer (CFO)', office: 'New York', age: 64, start_date: '2010/06/09', salary: '725,000' },
                    { id: 18, name: 'Gloria Little', position: 'Systems Administrator', office: 'New York', age: 59, start_date: '2009/04/10', salary: '237,500' },
                    { id: 19, name: 'Bradley Greer', position: 'Software Engineer', office: 'London', age: 41, start_date: '2012/10/13', salary: '132,000' },
                    { id: 20, name: 'Dai Rios', position: 'Personnel Lead', office: 'Edinburgh', age: 35, start_date: '2012/09/26', salary: '217,500' },
                    { id: 21, name: 'Jenette Caldwell', position: 'Development Lead', office: 'New York', age: 61, start_date: '2011/09/03', salary: '345,000' },
                    { id: 22, name: 'Yuri Berry', position: 'Chief Marketing Officer (CMO)', office: 'New York', age: 40, start_date: '2009/06/25', salary: '675,000' },
                    { id: 23, name: 'Caesar Vance', position: 'Pre-Sales Support', office: 'New York', age: 21, start_date: '2011/12/12', salary: '106,450' },
                    { id: 24, name: 'Doris Wilder', position: 'Sales Assistant', office: 'Sidney', age: 23, start_date: '2010/09/20', salary: '85,600' },
                    { id: 25, name: 'Angelica Ramos', position: 'Chief Executive Officer (CEO)', office: 'London', age: 47, start_date: '2009/10/09', salary: '1,200,000' },
                    { id: 26, name: 'Gavin Joyce', position: 'Developer', office: 'Edinburgh', age: 42, start_date: '2010/12/22', salary: '92,575' },
                    { id: 27, name: 'Jennifer Chang', position: 'Regional Director', office: 'Singapore', age: 28, start_date: '2010/11/14', salary: '57,650' }
                ];

                this.table_option.total_rows = this.items.length;
                this.get_meta();

                //table 2
                this.columns1 = [
                    { key: 'id', label: '#', sortable: true },
                    { key: 'name', label: 'Name', sortable: true },
                    { key: 'position', label: 'Position', sortable: true },
                    { key: 'office', label: 'Office', sortable: true },
                    { key: 'age', label: 'Age', sortable: true },
                    { key: 'start_date', label: 'Start Date', sortable: true },
                    { key: 'salary', label: 'Salary', sortable: true },
                    { key: 'action', label: 'Actions', class: 'actions text-center' }
                ];
                this.items1 = [
                    { id: 1, name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, start_date: '2011/04/25', salary: '320,800' },
                    { id: 2, name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, start_date: '2011/07/25', salary: '170,750' },
                    { id: 3, name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', age: 66, start_date: '2009/01/12', salary: '86,000' },
                    { id: 4, name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, start_date: '2012/03/29', salary: '433,060' },
                    { id: 5, name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, start_date: '2008/11/28', salary: '162,700' },
                    { id: 6, name: 'Brielle Williamson', position: 'Integration Specialist', office: 'New York', age: 61, start_date: '2012/12/02', salary: '372,000' },
                    { id: 7, name: 'Herrod Chandler', position: 'Sales Assistant', office: 'San Francisco', age: 59, start_date: '2012/08/06', salary: '137,500' },
                    { id: 8, name: 'Rhona Davidson', position: 'Integration Specialist', office: 'Tokyo', age: 55, start_date: '2010/10/14', salary: '327,900' },
                    { id: 9, name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', age: 39, start_date: '2009/09/15', salary: '205,500' },
                    { id: 10, name: 'Sonya Frost', position: 'Software Engineer', office: 'Edinburgh', age: 23, start_date: '2008/12/13', salary: '103,600' },
                    { id: 11, name: 'Jena Gaines', position: 'Office Manager', office: 'London', age: 30, start_date: '2008/12/19', salary: '90,560' },
                    { id: 12, name: 'Quinn Flynn', position: 'Support Lead', office: 'Edinburgh', age: 22, start_date: '2013/03/03', salary: '342,000' },
                    { id: 13, name: 'Charde Marshall', position: 'Regional Director', office: 'San Francisco', age: 36, start_date: '2008/10/16', salary: '470,600' },
                    { id: 14, name: 'Haley Kennedy', position: 'Senior Marketing Designer', office: 'London', age: 43, start_date: '2012/12/18', salary: '313,500' },
                    { id: 15, name: 'Tatyana Fitzpatrick', position: 'Regional Director', office: 'London', age: 19, start_date: '2010/03/17', salary: '385,750' },
                    { id: 16, name: 'Michael Silva', position: 'Marketing Designer', office: 'London', age: 66, start_date: '2012/11/27', salary: '198,500' },
                    { id: 17, name: 'Paul Byrd', position: 'Chief Financial Officer (CFO)', office: 'New York', age: 64, start_date: '2010/06/09', salary: '725,000' },
                    { id: 18, name: 'Gloria Little', position: 'Systems Administrator', office: 'New York', age: 59, start_date: '2009/04/10', salary: '237,500' },
                    { id: 19, name: 'Bradley Greer', position: 'Software Engineer', office: 'London', age: 41, start_date: '2012/10/13', salary: '132,000' },
                    { id: 20, name: 'Dai Rios', position: 'Personnel Lead', office: 'Edinburgh', age: 35, start_date: '2012/09/26', salary: '217,500' },
                    { id: 21, name: 'Jenette Caldwell', position: 'Development Lead', office: 'New York', age: 61, start_date: '2011/09/03', salary: '345,000' },
                    { id: 22, name: 'Yuri Berry', position: 'Chief Marketing Officer (CMO)', office: 'New York', age: 40, start_date: '2009/06/25', salary: '675,000' },
                    { id: 23, name: 'Caesar Vance', position: 'Pre-Sales Support', office: 'New York', age: 21, start_date: '2011/12/12', salary: '106,450' },
                    { id: 24, name: 'Doris Wilder', position: 'Sales Assistant', office: 'Sidney', age: 23, start_date: '2010/09/20', salary: '85,600' },
                    { id: 25, name: 'Angelica Ramos', position: 'Chief Executive Officer (CEO)', office: 'London', age: 47, start_date: '2009/10/09', salary: '1,200,000' },
                    { id: 26, name: 'Gavin Joyce', position: 'Developer', office: 'Edinburgh', age: 42, start_date: '2010/12/22', salary: '92,575' },
                    { id: 27, name: 'Jennifer Chang', position: 'Regional Director', office: 'Singapore', age: 28, start_date: '2010/11/14', salary: '57,650' }
                ];

                this.table_option1.total_rows = this.items1.length;
                this.get_meta1();

                //table 3
                this.columns2 = [
                    { key: 'id', label: '', thClass: 'header-checkbox' },
                    { key: 'thumb', label: 'Profile', thClass: 'text-center w-90' },
                    { key: 'first_name', label: 'First Name', sortable: true },
                    { key: 'last_name', label: 'Last Name', sortable: true },
                    { key: 'email', label: 'Email', sortable: true },
                    { key: 'phone', label: 'Mobile No.', sortable: true },
                    { key: 'status', label: 'Status' },
                    { key: 'action', label: 'Actions', class: 'actions text-center' }
                ];
                this.items2 = [
                    { id: 1, thumb: 'profile-9.jpeg', first_name: 'Tiger', last_name: 'Nixon', email: 'tiger@gmail.com', phone: '555-555-5555', status: { key: 'Approved', class: 'primary' } },
                    { id: 2, thumb: 'profile-11.jpeg', first_name: 'Garrett', last_name: 'Winters', email: 'garrett@gmail.com', phone: '222-222-2222', status: { key: 'Closed', class: 'danger' } },
                    { id: 3, thumb: 'profile-12.jpeg', first_name: 'Ashton', last_name: 'Cox', email: 'ashton@gmail.com', phone: '333-333-3333', status: { key: 'Suspended', class: 'warning' } },
                    { id: 4, thumb: 'profile-13.jpeg', first_name: 'Cedric', last_name: 'Kelly', email: 'cedric@gmail.com', phone: '444-444-4444', status: { key: 'Suspended', class: 'warning' } },
                    { id: 5, thumb: 'profile-14.jpeg', first_name: 'Airi', last_name: 'Satou', email: 'airi@gmail.com', phone: '555-555-5555', status: { key: 'Approved', class: 'primary' } },
                    { id: 6, thumb: 'profile-15.jpeg', first_name: 'Brielle', last_name: 'Williamson', email: 'brielle@gmail.com', phone: '666-666-6666', status: { key: 'Closed', class: 'danger' } },
                    { id: 7, thumb: 'profile-16.jpeg', first_name: 'Herrod', last_name: 'Chandler', email: 'herrod@gmail.com', phone: '555-555-5555', status: { key: 'Approved', class: 'primary' } }
                ];

                this.table_option2.total_rows = this.items2.length;
                this.get_meta2();
            },

            //table 1
            hide_dropdown(bvEvent) {
                bvEvent.preventDefault();
            },
            show_hide_columns(column) {
                column.is_visible = !column.is_visible;
            },
            on_filtered(filtered_items) {
                this.refresh_table(filtered_items.length);
            },
            refresh_table(total) {
                this.table_option.total_rows = total;
                this.table_option.currentPage = 1;
            },
            get_meta() {
                this.meta = this.get_common_meta(this.table_option);
            },

            get_common_meta(table_option) {
                var startPage;
                var endPage;
                var totalPages = table_option.page_size < 1 ? 1 : Math.ceil(table_option.total_rows / table_option.page_size);
                totalPages = Math.max(totalPages || 0, 1);

                var maxSize = 5;
                var isMaxSized = typeof maxSize !== 'undefined' && maxSize < totalPages;
                if (isMaxSized) {
                    startPage = Math.max(table_option.current_page - Math.floor(maxSize / 2), 1);
                    endPage = startPage + maxSize - 1;

                    if (endPage > totalPages) {
                        endPage = totalPages;
                        startPage = endPage - maxSize + 1;
                    }
                } else {
                    startPage = 1;
                    endPage = totalPages;
                }
                let startIndex = (table_option.current_page - 1) * table_option.page_size;
                let endIndex = Math.min(startIndex + table_option.page_size - 1, table_option.total_rows - 1);

                var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(i => startPage + i);
                return {
                    total_items: table_option.total_rows,
                    current_page: table_option.current_page,
                    page_size: table_option.page_size,
                    total_pages: totalPages,
                    start_page: startPage,
                    end_page: endPage,
                    start_index: startIndex,
                    end_index: endIndex,
                    pages: pages
                };
            },

            //table 2
            on_filtered1(filtered_items) {
                this.refresh_table1(filtered_items.length);
            },
            refresh_table1(total) {
                this.table_option1.total_rows = total;
                this.table_option1.currentPage = 1;
            },
            get_meta1() {
                this.meta1 = this.get_common_meta(this.table_option1);
            },

            //table 3
            on_filtered2(filtered_items) {
                this.refresh_table2(filtered_items.length);
            },
            refresh_table2(total) {
                this.table_option2.total_rows = total;
                this.table_option2.currentPage = 1;
            },
            get_meta2() {
                this.meta2 = this.get_common_meta(this.table_option2);
            },
            //checkbox selection
            select_all2() {
                this.selected_rows2 = this.$refs.basic_table2.paginatedItems.map(d => {
                    return d.id;
                });
                if (!this.is_select_all2) {
                    this.clear_selection2();
                }
                this.check_select_all2();
            },
            check_select_all2() {
                let ids = this.$refs.basic_table2.paginatedItems.map(d => {
                    return d.id;
                });
                this.is_select_all2 = false;
                if (ids.length == this.selected_rows2.length) {
                    this.is_select_all2 = true;
                }
            },
            clear_selection2() {
                this.is_select_all2 = false;
                this.selected_rows2 = [];
            }
        }
    };
</script>
