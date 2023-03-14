<template>
    <div class="layout-px-spacing">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">DataTables</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Multiple Tables</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                <div class="panel br-6 p-0">
                    <div class="custom-table">
                        <div class="table-header">
                            <div class="d-flex align-items-center">
                                <span>Results :</span>
                                <span class="ml-2">
                                    <b-select v-model="table_option.page_size" class="h-auto">
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
                            sort-by="name"
                            :show-empty="true"
                            @filtered="on_filtered"
                        >
                            <template #cell(salary)="row"> ${{ row.item.salary }} </template>
                            <template #cell(status)="row">
                                <div v-b-tooltip class="t-dot" :class="row.value.class" :title="row.value.tooltip"></div>
                            </template>
                            <template #cell(action)="row">
                                <b-button size="sm" variant="primary" @click="view_row(row.item)">View</b-button>
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
                <div class="panel br-6 p-0 mt-5">
                    <div class="custom-table ">
                        <div class="table-header">
                            <div class="d-flex align-items-center">
                                <span>Results :</span>
                                <span class="ml-2">
                                    <b-select v-model="table_option1.page_size" size="sm">
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
                            :items="items1"
                            :fields="columns1"
                            :per-page="table_option1.page_size"
                            :current-page="table_option1.current_page"
                            :filter="table_option1.search_text"
                            sort-by="name"
                            :show-empty="true"
                            @filtered="on_filtered1"
                        >
                            <template #cell(progress)="row">
                                <b-progress :variant="row.value.class" :value="row.value.count" :max="100"></b-progress>
                            </template>
                            <template #cell(salary)="row"> ${{ row.item.salary }} </template>
                            <template #cell(action)="row">
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
                                    <b-dropdown-item @click="view_row(row.item)">View</b-dropdown-item>
                                    <b-dropdown-item>Edit</b-dropdown-item>
                                    <b-dropdown-item>Delete</b-dropdown-item>
                                </b-dropdown>
                            </template>
                        </b-table>

                        <div class="table-footer">
                            <div class="dataTables_info">Showing {{ meta1.total_items ? meta1.start_index + 1 : 0 }} to {{ meta1.end_index + 1 }} of {{ meta1.total_items }}</div>
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
    </div>
</template>

<script>
    export default {
        metaInfo: { title: 'Bootstrap Multiple Tables' },
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
                meta1: {}
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
            }
        },
        mounted() {
            this.bind_data();
        },
        methods: {
            bind_data() {
                //table 1
                this.columns = [
                    { key: 'name', label: 'Name', sortable: true },
                    { key: 'position', label: 'Position', sortable: true },
                    { key: 'office', label: 'Office', sortable: true },
                    { key: 'age', label: 'Age', sortable: true },
                    { key: 'salary', label: 'Salary', sortable: true },
                    { key: 'status', label: 'Status', class: 'text-center' },
                    { key: 'action', label: 'Actions', class: 'actions text-center' }
                ];
                this.items = [
                    { id: 1, name: 'Tiger Nixon', position: 'System Architect', office: 'Edinburgh', age: 61, status: { class: 'bg-warning', tooltip: 'Low' }, salary: '320,800' },
                    { id: 2, name: 'Garrett Winters', position: 'Accountant', office: 'Tokyo', age: 63, status: { class: 'bg-primary', tooltip: 'Normal' }, salary: '170,750' },
                    { id: 3, name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', age: 66, status: { class: 'bg-warning', tooltip: 'Low' }, salary: '86,000' },
                    { id: 4, name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, status: { class: 'bg-secondary', tooltip: 'Medium' }, salary: '433,060' },
                    { id: 5, name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, status: { class: 'bg-warning', tooltip: 'Low' }, salary: '162,700' },
                    { id: 6, name: 'Brielle Williamson', position: 'Integration Specialist', office: 'New York', age: 61, status: { class: 'bg-primary', tooltip: 'Normal' }, salary: '372,000' },
                    { id: 7, name: 'Herrod Chandler', position: 'Sales Assistant', office: 'San Francisco', age: 59, status: { class: 'bg-warning', tooltip: 'Low' }, salary: '137,500' },
                    { id: 8, name: 'Rhona Davidson', position: 'Integration Specialist', office: 'Tokyo', age: 55, status: { class: 'bg-secondary', tooltip: 'Medium' }, salary: '327,900' },
                    { id: 9, name: 'Colleen Hurst', position: 'Javascript Developer', office: 'San Francisco', age: 39, status: { class: 'bg-danger', tooltip: 'High' }, salary: '205,500' },
                    { id: 10, name: 'Sonya Frost', position: 'Software Engineer', office: 'Edinburgh', age: 23, status: { class: 'bg-secondary', tooltip: 'Medium' }, salary: '103,600' },
                    { id: 11, name: 'Jena Gaines', position: 'Office Manager', office: 'London', age: 30, status: { class: 'bg-warning', tooltip: 'Low' }, salary: '90,560' },
                    { id: 12, name: 'Quinn Flynn', position: 'Support Lead', office: 'Edinburgh', age: 22, status: { class: 'bg-danger', tooltip: 'High' }, salary: '342,000' },
                    { id: 13, name: 'Charde Marshall', position: 'Regional Director', office: 'San Francisco', age: 36, status: { class: 'bg-danger', tooltip: 'High' }, salary: '470,600' }
                ];

                this.table_option.total_rows = this.items.length;
                this.get_meta();

                //table 2
                this.columns1 = [
                    { key: 'name', label: 'Name', sortable: true },
                    { key: 'position', label: 'Position', sortable: true },
                    { key: 'progress', label: 'Progress' },
                    { key: 'office', label: 'Office', sortable: true },
                    { key: 'age', label: 'Age', sortable: true },
                    { key: 'salary', label: 'Salary', sortable: true },
                    { key: 'action', label: 'Actions', class: 'actions text-center' }
                ];
                this.items1 = [
                    { id: 1, name: 'Haley Kennedy', position: 'Senior Marketing Designer', office: 'London', age: 43, progress: { class: 'warning', count: 55 }, salary: '313,500' },
                    { id: 2, name: 'Tatyana Fitzpatrick', position: 'Regional Director', office: 'London', age: 19, progress: { class: 'primary', count: 30 }, salary: '385,750' },
                    { id: 3, name: 'Michael Silva', position: 'Marketing Designer', office: 'London', age: 66, progress: { class: 'danger', count: 85 }, salary: '198,500' },
                    { id: 4, name: 'Paul Byrd', position: 'Chief Financial Officer (CFO)', office: 'New York', age: 64, progress: { class: 'secondary', count: 44 }, salary: '725,000' },
                    { id: 5, name: 'Gloria Little', position: 'Systems Administrator', office: 'New York', age: 59, progress: { class: 'success', count: 100 }, salary: '237,500' },
                    { id: 6, name: 'Bradley Greer', position: 'Software Engineer', office: 'London', age: 41, progress: { class: 'warning', count: 67 }, salary: '132,000' },
                    { id: 7, name: 'Dai Rios', position: 'Personnel Lead', office: 'Edinburgh', age: 35, progress: { class: 'primary', count: 25 }, salary: '217,500' },
                    { id: 8, name: 'Jenette Caldwell', position: 'Development Lead', office: 'New York', age: 61, progress: { class: 'danger', count: 93 }, salary: '345,000' },
                    { id: 9, name: 'Yuri Berry', position: 'Chief Marketing Officer (CMO)', office: 'New York', age: 40, progress: { class: 'secondary', count: 52 }, salary: '675,000' },
                    { id: 10, name: 'Caesar Vance', position: 'Pre-Sales Support', office: 'New York', age: 21, progress: { class: 'warning', count: 24 }, salary: '106,450' },
                    { id: 11, name: 'Doris Wilder', position: 'Sales Assistant', office: 'Sidney', age: 23, progress: { class: 'danger', count: 82 }, salary: '85,600' },
                    { id: 12, name: 'Angelica Ramos', position: 'Chief Executive Officer (CEO)', office: 'London', age: 47, progress: { class: 'warning', count: 70 }, salary: '1,200,000' },
                    { id: 13, name: 'Gavin Joyce', position: 'Developer', office: 'Edinburgh', age: 42, progress: { class: 'secondary', count: 40 }, salary: '92,575' },
                    { id: 14, name: 'Jennifer Chang', position: 'Regional Director', office: 'Singapore', age: 28, progress: { class: 'warning', count: 10 }, salary: '57,650' }
                ];

                this.table_option1.total_rows = this.items1.length;
                this.get_meta1();
            },
            on_filtered(filtered_items) {
                this.refresh_table(filtered_items.length);
            },
            view_row(item) {
                alert('ID: ' + item.id + ', Name: ' + item.name);
            },
            refresh_table(total) {
                this.table_option.total_rows = total;
                this.table_option.currentPage = 1;
            },
            get_meta() {
                var startPage;
                var endPage;
                var totalPages = this.table_option.page_size < 1 ? 1 : Math.ceil(this.table_option.total_rows / this.table_option.page_size);
                totalPages = Math.max(totalPages || 0, 1);

                var maxSize = 5;
                var isMaxSized = typeof maxSize !== 'undefined' && maxSize < totalPages;
                if (isMaxSized) {
                    startPage = Math.max(this.table_option.current_page - Math.floor(maxSize / 2), 1);
                    endPage = startPage + maxSize - 1;

                    if (endPage > totalPages) {
                        endPage = totalPages;
                        startPage = endPage - maxSize + 1;
                    }
                } else {
                    startPage = 1;
                    endPage = totalPages;
                }
                let startIndex = (this.table_option.current_page - 1) * this.table_option.page_size;
                let endIndex = Math.min(startIndex + this.table_option.page_size - 1, this.table_option.total_rows - 1);

                var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(i => startPage + i);
                this.meta = {
                    total_items: this.table_option.total_rows,
                    current_page: this.table_option.current_page,
                    page_size: this.table_option.page_size,
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
            view_row1(item) {
                alert('ID: ' + item.id + ', Name: ' + item.name);
            },
            refresh_table1(total) {
                this.table_option1.total_rows = total;
                this.table_option1.currentPage = 1;
            },
            get_meta1() {
                var startPage;
                var endPage;
                var totalPages = this.table_option1.page_size < 1 ? 1 : Math.ceil(this.table_option1.total_rows / this.table_option1.page_size);
                totalPages = Math.max(totalPages || 0, 1);

                var maxSize = 5;
                var isMaxSized = typeof maxSize !== 'undefined' && maxSize < totalPages;
                if (isMaxSized) {
                    startPage = Math.max(this.table_option1.current_page - Math.floor(maxSize / 2), 1);
                    endPage = startPage + maxSize - 1;

                    if (endPage > totalPages) {
                        endPage = totalPages;
                        startPage = endPage - maxSize + 1;
                    }
                } else {
                    startPage = 1;
                    endPage = totalPages;
                }
                let startIndex = (this.table_option1.current_page - 1) * this.table_option1.page_size;
                let endIndex = Math.min(startIndex + this.table_option1.page_size - 1, this.table_option1.total_rows - 1);

                var pages = Array.from(Array(endPage + 1 - startPage).keys()).map(i => startPage + i);
                this.meta1 = {
                    total_items: this.table_option1.total_rows,
                    current_page: this.table_option1.current_page,
                    page_size: this.table_option1.page_size,
                    total_pages: totalPages,
                    start_page: startPage,
                    end_page: endPage,
                    start_index: startIndex,
                    end_index: endIndex,
                    pages: pages
                };
            }
        }
    };
</script>
