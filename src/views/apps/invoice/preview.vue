<template>
    <div class="layout-px-spacing">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Invoice Preview</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="row invoice layout-top-spacing layout-spacing apps-invoice">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="doc-container">
                    <div class="row">
                        <div class="col-xl-9">
                            <div class="invoice-container">
                                <div class="invoice-inbox">
                                    <div id="ct" class="">
                                        <div class="invoice-00001">
                                            <div class="content-section">
                                                <div class="inv--head-section inv--detail-section">
                                                    <div class="row">
                                                        <div class="col-sm-6 col-12 mr-auto">
                                                            <div class="d-flex">
                                                                <img class="company-logo" src="@/assets/images/cork-logo.png" alt="company" />
                                                                <h3 class="in-heading align-self-center">Cork Inc.</h3>
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-6 text-sm-right">
                                                            <p class="inv-list-number"><span class="inv-title">Invoice : </span> <span class="inv-number">#0001</span></p>
                                                        </div>

                                                        <div class="col-sm-6 align-self-center mt-3">
                                                            <p class="inv-street-addr">XYZ Delta Street</p>
                                                            <p class="inv-email-address">info@company.com</p>
                                                            <p class="inv-email-address">(120) 456 789</p>
                                                        </div>
                                                        <div class="col-sm-6 align-self-center mt-3 text-sm-right">
                                                            <p class="inv-created-date"><span class="inv-title">Invoice Date : </span> <span class="inv-date">20 Aug 2020</span></p>
                                                            <p class="inv-due-date"><span class="inv-title">Due Date : </span> <span class="inv-date">26 Aug 2020</span></p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="inv--detail-section inv--customer-detail-section">
                                                    <div class="row">
                                                        <div class="col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center">
                                                            <p class="inv-to">Invoice To</p>
                                                        </div>

                                                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 inv--payment-info">
                                                            <h6 class=" inv-title">Payment Info:</h6>
                                                        </div>

                                                        <div class="col-xl-8 col-lg-7 col-md-6 col-sm-4">
                                                            <p class="inv-customer-name">Jesse Cory</p>
                                                            <p class="inv-street-addr">405 Mulberry Rd. Mc Grady, NC, 28649</p>
                                                            <p class="inv-email-address">redq@company.com</p>
                                                            <p class="inv-email-address">(128) 666 070</p>
                                                        </div>

                                                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 order-1">
                                                            <div class="inv--payment-info">
                                                                <p><span class=" inv-subtitle">Bank Name:</span> <span>Bank of America</span></p>
                                                                <p><span class=" inv-subtitle">Account Number: </span> <span>1234567890</span></p>
                                                                <p><span class=" inv-subtitle">SWIFT code:</span> <span>VS70134</span></p>
                                                                <p><span class=" inv-subtitle">Country: </span> <span>United States</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="inv--product-table-section">
                                                    <b-table ref="basic_table" responsive hover :items="items" :fields="columns">
                                                        <template #cell(price)="row"> ${{ row.value }} </template>
                                                        <template #cell(amount)="row"> ${{ row.value }} </template>
                                                    </b-table>
                                                </div>

                                                <div class="inv--total-amounts">
                                                    <div class="row mt-4">
                                                        <div class="col-sm-5 col-12 order-sm-0 order-1"></div>
                                                        <div class="col-sm-7 col-12 order-sm-1 order-0">
                                                            <div class="text-sm-right">
                                                                <div class="row">
                                                                    <div class="col-sm-8 col-7">
                                                                        <p class="">Sub Total:</p>
                                                                    </div>
                                                                    <div class="col-sm-4 col-5">
                                                                        <p class="">$3155</p>
                                                                    </div>
                                                                    <div class="col-sm-8 col-7">
                                                                        <p class="">Tax Amount:</p>
                                                                    </div>
                                                                    <div class="col-sm-4 col-5">
                                                                        <p class="">$700</p>
                                                                    </div>
                                                                    <div class="col-sm-8 col-7">
                                                                        <p class=" discount-rate">Discount : <span class="discount-percentage">5%</span></p>
                                                                    </div>
                                                                    <div class="col-sm-4 col-5">
                                                                        <p class="">$10</p>
                                                                    </div>
                                                                    <div class="col-sm-8 col-7 grand-total-title">
                                                                        <h4 class="">Grand Total :</h4>
                                                                    </div>
                                                                    <div class="col-sm-4 col-5 grand-total-amount">
                                                                        <h4 class="">$3845</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="inv--note">
                                                    <div class="row mt-4">
                                                        <div class="col-sm-12 col-12 order-sm-0 order-1">
                                                            <p>Note: Thank you for doing Business with us.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3">
                            <div class="invoice-actions-btn">
                                <div class="invoice-action-btn">
                                    <div class="row">
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <b-button tag="a" variant="primary" class="btn-send">Send Invoice</b-button>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <b-button tag="a" variant="secondary" class="btn-print action-print" @click="print()">Print</b-button>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <b-button tag="a" variant="success" class="btn-download">Download</b-button>
                                        </div>
                                        <div class="col-xl-12 col-md-3 col-sm-6">
                                            <b-button tag="a" to="/apps/invoice/edit" variant="dark" class="btn-edit">Edit</b-button>
                                        </div>
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
    import '@/assets/sass/apps/invoice-preview.scss';
    export default {
        metaInfo: { title: 'Invoice Preview' },
        data() {
            return {
                items: [],
                columns: []
            };
        },
        mounted() {
            this.bind_data();
        },
        methods: {
            bind_data() {
                this.columns = [
                    { key: 'id', label: 'S.NO', thClass: 'header-checkbox' },
                    { key: 'title', label: 'ITEMS' },
                    { key: 'quantity', label: 'QTY' },
                    { key: 'price', label: 'PRICE', class: 'text-right' },
                    { key: 'amount', label: 'AMOUNT', class: 'text-right' }
                ];
                this.items = [
                    { id: 1, title: 'Calendar App Customization', quantity: 1, price: '120', amount: '120' },
                    { id: 2, title: 'Chat App Customization', quantity: 1, price: '230', amount: '230' },
                    { id: 3, title: 'Laravel Integration', quantity: 1, price: '405', amount: '405' },
                    { id: 4, title: 'Backend UI Design', quantity: 1, price: '2500', amount: '2500' }
                ];
            },
            print() {
                window.print();
            }
        }
    };
</script>
