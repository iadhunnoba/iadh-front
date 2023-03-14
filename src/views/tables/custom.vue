<template>
    <div class="layout-px-spacing">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">DataTables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Custom</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="seperator-header layout-top-spacing">
            <h4 class="">Style 1</h4>
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
                            <div class="header-search">
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

                        <b-table
                            ref="basic_table"
                            responsive
                            :items="items"
                            :fields="columns"
                            :per-page="table_option.page_size"
                            :current-page="table_option.current_page"
                            :filter="table_option.search_text"
                            sort-by="first_name"
                            :show-empty="true"
                            @filtered="on_filtered"
                            @sort-changed="clear_selection"
                        >
                            <template #head(id)>
                                <b-checkbox v-model="is_select_all" variant="primary" class="checkbox-outline-primary" @change="select_all()" />
                            </template>

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
            <h4 class="">Style 2</h4>
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
                            hover
                            :items="items1"
                            :fields="columns1"
                            :per-page="table_option1.page_size"
                            :current-page="table_option1.current_page"
                            :filter="table_option1.search_text"
                            :show-empty="true"
                            @filtered="on_filtered1"
                            @sort-changed="clear_selection1"
                        >
                            <template #head(id)>
                                <b-checkbox v-model="is_select_all1" variant="primary" class="checkbox-outline-primary" @change="select_all1()" />
                            </template>

                            <template #cell(id)="row">
                                <b-checkbox v-model="selected_rows1" :value="row.value" variant="primary" class="checkbox-outline-primary" @change="check_select_all1"></b-checkbox>
                            </template>
                            <template #cell(thumb)="row">
                                <img :src="require('@/assets/images/' + row.item.thumb)" class="rounded-circle profile-img" alt="avatar" />
                            </template>
                            <template #cell(status)="row">
                                <b-badge :variant="row.value.class">{{ row.value.key }}</b-badge>
                            </template>
                            <template #cell(action)>
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
                                    <b-dropdown-item>View</b-dropdown-item>
                                    <b-dropdown-item>Edit</b-dropdown-item>
                                    <b-dropdown-item>View Response</b-dropdown-item>
                                    <b-dropdown-item>Delete</b-dropdown-item>
                                </b-dropdown>
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
            <h4 class="">Style 3</h4>
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
                            hover
                            :items="items2"
                            :fields="columns2"
                            :per-page="table_option2.page_size"
                            :current-page="table_option2.current_page"
                            :filter="table_option2.search_text"
                            sort-by="id"
                            :show-empty="true"
                            @filtered="on_filtered"
                            @sort-changed="clear_selection"
                        >
                            <template #cell(thumb)="row">
                                <img :src="require('@/assets/images/' + row.item.thumb)" class="rounded profile-img" alt="avatar" />
                            </template>
                            <template #cell(status)="row">
                                <b-badge :variant="row.value.class">{{ row.value.key }}</b-badge>
                            </template>
                            <template #cell(action)>
                                <a href="javascript:void(0);" class="mr-1" v-b-tooltip title="Edit">
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
                                        class="feather feather-edit-2"
                                    >
                                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                                    </svg>
                                </a>
                                <a href="javascript:void(0);" v-b-tooltip title="Delete">
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
                                        class="feather feather-trash"
                                    >
                                        <polyline points="3 6 5 6 21 6"></polyline>
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                    </svg>
                                </a>
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
        metaInfo: { title: 'Bootstrap Custom Table' },
        data() {
            return {
                //table 1
                items: [],
                columns: [],
                table_option: { total_rows: 0, current_page: 1, page_size: 5, search_text: '' },
                meta: {},
                is_select_all: false,
                selected_rows: [],

                //table 2
                items1: [],
                columns1: [],
                table_option1: { total_rows: 0, current_page: 1, page_size: 5, search_text: '' },
                meta1: {},
                is_select_all1: false,
                selected_rows1: [],

                //table 3
                items2: [],
                columns2: [],
                table_option2: { total_rows: 0, current_page: 1, page_size: 5, search_text: '' },
                meta2: {},
                is_select_all2: false,
                selected_rows2: []
            };
        },
        watch: {
            table_option: {
                handler: function() {
                    this.get_meta();
                    this.clear_selection();
                },
                deep: true
            },
            table_option1: {
                handler: function() {
                    this.get_meta1();
                    this.clear_selection1();
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
        mounted() {
            this.bind_data();
        },
        methods: {
            bind_data() {
                //table 1
                this.columns = [
                    { key: 'id', label: '', thClass: 'header-checkbox' },
                    { key: 'first_name', label: 'First Name', sortable: true },
                    { key: 'last_name', label: 'Last Name', sortable: true },
                    { key: 'email', label: 'Email', sortable: true },
                    { key: 'phone', label: 'Mobile No.', sortable: true },
                    { key: 'thumb', label: 'Profile', class: 'text-center w-90' },
                    { key: 'status', label: 'Status' },
                    { key: 'action', label: 'Actions', class: 'actions text-center' }
                ];
                this.items = [
                    { id: 1, thumb: 'profile-9.jpeg', first_name: 'Tiger', last_name: 'Nixon', email: 'tiger@gmail.com', phone: '555-555-5555', status: { key: 'Approved', class: 'primary' } },
                    { id: 2, thumb: 'profile-11.jpeg', first_name: 'Garrett', last_name: 'Winters', email: 'garrett@gmail.com', phone: '222-222-2222', status: { key: 'Closed', class: 'danger' } },
                    { id: 3, thumb: 'profile-12.jpeg', first_name: 'Ashton', last_name: 'Cox', email: 'ashton@gmail.com', phone: '333-333-3333', status: { key: 'Suspended', class: 'warning' } },
                    { id: 4, thumb: 'profile-13.jpeg', first_name: 'Cedric', last_name: 'Kelly', email: 'cedric@gmail.com', phone: '444-444-4444', status: { key: 'Suspended', class: 'warning' } },
                    { id: 5, thumb: 'profile-14.jpeg', first_name: 'Airi', last_name: 'Satou', email: 'airi@gmail.com', phone: '555-555-5555', status: { key: 'Approved', class: 'primary' } },
                    { id: 6, thumb: 'profile-15.jpeg', first_name: 'Brielle', last_name: 'Williamson', email: 'brielle@gmail.com', phone: '666-666-6666', status: { key: 'Closed', class: 'danger' } },
                    { id: 7, thumb: 'profile-16.jpeg', first_name: 'Herrod', last_name: 'Chandler', email: 'herrod@gmail.com', phone: '555-555-5555', status: { key: 'Approved', class: 'primary' } }
                ];

                this.table_option.total_rows = this.items.length;
                this.get_meta();

                //table 2
                this.columns1 = [
                    { key: 'id', label: '', thClass: 'header-checkbox' },
                    { key: 'thumb', label: 'Profile', thClass: 'w-90' },
                    { key: 'name', label: 'Name', tdClass: 'text-secondary font-weight-bold', sortable: true },
                    { key: 'email', label: 'Email', sortable: true },
                    { key: 'phone', label: 'Mobile No.', sortable: true },
                    { key: 'status', label: 'Status' },
                    { key: 'action', label: 'Actions', class: 'actions text-center' }
                ];
                this.items1 = [
                    { id: 1, thumb: 'profile-9.jpeg', name: 'Tiger Nixon', email: 'tiger@gmail.com', phone: '555-555-5555', status: { key: 'Approved', class: 'primary' } },
                    { id: 2, thumb: 'profile-11.jpeg', name: 'Garrett Winters', email: 'garrett@gmail.com', phone: '222-222-2222', status: { key: 'Closed', class: 'danger' } },
                    { id: 3, thumb: 'profile-12.jpeg', name: 'Ashton Cox', email: 'ashton@gmail.com', phone: '333-333-3333', status: { key: 'Suspended', class: 'warning' } },
                    { id: 4, thumb: 'profile-13.jpeg', name: 'Cedric Kelly', email: 'cedric@gmail.com', phone: '444-444-4444', status: { key: 'Suspended', class: 'warning' } },
                    { id: 5, thumb: 'profile-14.jpeg', name: 'Airi Satou', email: 'airi@gmail.com', phone: '555-555-5555', status: { key: 'Approved', class: 'primary' } },
                    { id: 6, thumb: 'profile-15.jpeg', name: 'Brielle Williamson', email: 'brielle@gmail.com', phone: '666-666-6666', status: { key: 'Closed', class: 'danger' } },
                    { id: 7, thumb: 'profile-16.jpeg', name: 'Herrod Chandler', email: 'herrod@gmail.com', phone: '555-555-5555', status: { key: 'Approved', class: 'primary' } }
                ];

                this.table_option1.total_rows = this.items1.length;
                this.get_meta1();

                //table 3
                this.columns2 = [
                    { key: 'id', label: 'ID', sortable: true },
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

            //checkbox selection
            select_all() {
                this.selected_rows = this.$refs.basic_table.paginatedItems.map(d => {
                    return d.id;
                });
                if (!this.is_select_all) {
                    this.clear_selection();
                }
                this.check_select_all();
            },
            check_select_all() {
                let ids = this.$refs.basic_table.paginatedItems.map(d => {
                    return d.id;
                });
                this.is_select_all = false;
                if (ids.length == this.selected_rows.length) {
                    this.is_select_all = true;
                }
            },
            clear_selection() {
                this.is_select_all = false;
                this.selected_rows = [];
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
            //checkbox selection
            select_all1() {
                this.selected_rows1 = this.$refs.basic_table1.paginatedItems.map(d => {
                    return d.id;
                });
                if (!this.is_select_all1) {
                    this.clear_selection1();
                }
                this.check_select_all1();
            },
            check_select_all1() {
                let ids = this.$refs.basic_table1.paginatedItems.map(d => {
                    return d.id;
                });
                this.is_select_all1 = false;
                if (ids.length == this.selected_rows1.length) {
                    this.is_select_all1 = true;
                }
            },
            clear_selection1() {
                this.is_select_all1 = false;
                this.selected_rows1 = [];
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
