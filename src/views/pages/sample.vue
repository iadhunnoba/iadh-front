<template>
    <div class="layout-px-spacing">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Pages</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Sample Page</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="row layout-top-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
                <div class="panel br-4">
                    <div class="panel-body">
                        <h6>Kick Start you new project with ease!</h6>
                        <p class="mb-0 mt-3">
                            With CORK starter kit, you can begin your work without any hassle. The starter page is highly optimized which gives you freedom to start with minimal code and add only the
                            desired components and plugins required for your project.
                        </p>
                    </div>
                </div>
            </div>

            <div class="col-xl-4 col-lg-6 col-md-6 mb-4">
                <b-card class="b-l-card-1 h-100" :img-src="require('@/assets/images/grid-blog-style-1.jpg')" img-alt="Card image cap">
                    <strong class="card-category">Trends</strong>
                    <h5 class="card-title mt-2">Trending Style</h5>
                    <p class="card-text meta-info meta-time mb-2"><small class="">3 mins ago</small></p>
                    <p class="card-text mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

                    <b-button variant="outline-warning" class="mt-2">Read More</b-button>
                </b-card>
            </div>

            <div class="col-xl-8 col-lg-6 col-md-6 col-sm-12 col-12" style="margin-bottom:24px;">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Form controls</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <b-form>
                            <b-form-row class=" mb-4">
                                <b-form-group class=" col-md-6" label="Email">
                                    <b-input type="email" placeholder="Email"></b-input>
                                </b-form-group>
                                <b-form-group class="col-md-6" label="Password">
                                    <b-input type="password" placeholder="Password"></b-input>
                                </b-form-group>
                            </b-form-row>
                            <b-form-group class=" mb-4" label="Address">
                                <b-input placeholder="1234 Main St"></b-input>
                            </b-form-group>
                            <b-form-group class=" mb-4" label="Address 2">
                                <b-input placeholder="Apartment, studio, or floor"></b-input>
                            </b-form-group>
                            <b-form-row class="mb-4">
                                <b-form-group class="col-md-6" label="City">
                                    <b-input placeholder="City"></b-input>
                                </b-form-group>
                                <b-form-group class=" col-md-4" label="State">
                                    <b-select value="">
                                        <b-select-option value="">Choose...</b-select-option>
                                        <b-select-option value="...">...</b-select-option>
                                    </b-select>
                                </b-form-group>
                                <b-form-group class="col-md-2" label="Zip">
                                    <b-input placeholder="Zip"></b-input>
                                </b-form-group>
                            </b-form-row>
                            <b-form-group>
                                <b-checkbox variant="primary" class="checkbox-primary">Check me out</b-checkbox>
                            </b-form-group>

                            <b-button type="submit" variant="primary" class="mt-3">Sign in</b-button>
                        </b-form>
                    </div>
                </div>
            </div>

            <div class="col-lg-12 col-md-12 layout-spacing">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Table with Footer</h4>
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
                                <b-tr v-for="(row, index) in table_1" :key="index">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        metaInfo: { title: 'Breadcrumbs' },
        data() {
            return {
                table_1: []
            };
        },
        mounted() {
            this.init_tables();
        },
        methods: {
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
                    },
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
