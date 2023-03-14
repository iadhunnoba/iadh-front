<template>
    <div class="layout-px-spacing apps-invoice-add">

        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Apps</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Invoice Edit</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="row invoice layout-top-spacing layout-spacing">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">

                <div class="doc-container">

                    <div class="row">
                        <div class="col-xl-9">

                            <div class="invoice-content">

                                <div class="invoice-detail-body">

                                    <div class="invoice-detail-title">

                                        <div class="invoice-logo">
                                            <div class="upload pr-md-4">
                                                <input ref="fl_profile" type="file" class="d-none" accept="image/*" @change="change_file" />
                                                <img v-if="selected_file" :src="selected_file ? selected_file : require('@/assets/images/user-profile.jpeg')" alt="profile" class="profile-preview" @click="$refs.fl_profile.click()" />
                                                <div v-else class="profile-preview upload-preview" @click="$refs.fl_profile.click()">
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-upload-cloud"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                                                    </div>
                                                    <div class="mt-2">Click to Upload Picture/Logo</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="invoice-title">
                                            <b-input v-model="params.title" placeholder="Invoice Label"></b-input>
                                        </div>

                                    </div>

                                    <div class="invoice-detail-header">

                                        <div class="row justify-content-between">
                                            <div class="col-xl-5 invoice-address-company">

                                                <h4>From:-</h4>

                                                <div class="invoice-address-company-fields">

                                                    <div class="form-group row">
                                                        <label for="company-name" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
                                                        <div class="col-sm-9">
                                                            <b-input v-model="params.from.name" size="sm" id="company-name" placeholder="Business Name"></b-input>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="company-email" class="col-sm-3 col-form-label col-form-label-sm">Email</label>
                                                        <div class="col-sm-9">
                                                            <b-input v-model="params.from.email" size="sm" id="company-email" placeholder="name@company.com"></b-input>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="company-address" class="col-sm-3 col-form-label col-form-label-sm">Address</label>
                                                        <div class="col-sm-9">
                                                            <b-input v-model="params.from.address" size="sm" id="company-address" placeholder="XYZ Street"></b-input>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="company-phone" class="col-sm-3 col-form-label col-form-label-sm">Phone</label>
                                                        <div class="col-sm-9">
                                                            <b-input v-model="params.from.phone" size="sm" id="company-phone" placeholder="(123) 456 789"></b-input>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>


                                            <div class="col-xl-5 invoice-address-client">

                                                <h4>Bill To:-</h4>

                                                <div class="invoice-address-client-fields">

                                                    <div class="form-group row">
                                                        <label for="client-name" class="col-sm-3 col-form-label col-form-label-sm">Name</label>
                                                        <div class="col-sm-9">
                                                            <b-input v-model="params.to.name" size="sm" id="client-name" placeholder="Client Name"></b-input>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="client-email" class="col-sm-3 col-form-label col-form-label-sm">Email</label>
                                                        <div class="col-sm-9">
                                                            <b-input v-model="params.to.email" size="sm" id="client-email" placeholder="name@company.com"></b-input>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="client-address" class="col-sm-3 col-form-label col-form-label-sm">Address</label>
                                                        <div class="col-sm-9">
                                                            <b-input v-model="params.to.address" size="sm" id="client-address" placeholder="XYZ Street"></b-input>
                                                        </div>
                                                    </div>

                                                    <div class="form-group row">
                                                        <label for="client-phone" class="col-sm-3 col-form-label col-form-label-sm">Phone</label>
                                                        <div class="col-sm-9">
                                                            <b-input v-model="params.to.phone" size="sm" id="client-phone" placeholder="(123) 456 789"></b-input>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>


                                        </div>

                                    </div>

                                    <div class="invoice-detail-terms">

                                        <div class="row justify-content-between">

                                            <div class="col-md-3">

                                                <div class="form-group mb-4">
                                                    <label for="number">Invoice Number</label>
                                                    <b-input v-model="params.invoice_no" size="sm" id="number" placeholder="#0001"></b-input>
                                                </div>

                                            </div>

                                            <div class="col-md-3">

                                                <div class="form-group mb-4">
                                                    <label for="date">Invoice Date</label>
                                                    <flat-pickr v-model="params.invoice_date" class="form-control form-control-sm flatpickr active" placeholder="Invoice Date"></flat-pickr>
                                                </div>
                                            </div>

                                            <div class="col-md-3">
                                                <div class="form-group mb-4">
                                                    <label for="due">Due Date</label>
                                                    <flat-pickr v-model="params.due_date" class="form-control form-control-sm flatpickr active" placeholder="Due Date"></flat-pickr>
                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                    <div class="invoice-detail-items">

                                        <div class="table-responsive">
                                            <table class="table table-bordered item-table">
                                                <thead>
                                                    <tr>
                                                        <th class=""></th>
                                                        <th>Description</th>
                                                        <th class="">Rate</th>
                                                        <th class="">Qty</th>
                                                        <th class="text-right">Amount</th>
                                                        <th class="text-center">Tax</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in items" :key="index">
                                                        <td class="delete-item-row">
                                                            <ul class="table-controls">
                                                                <li>
                                                                    <a href="javascript:void(0);" class="delete-item" v-b-tooltip title="Delete" @click="remove_item(item)">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                        <td class="description">
                                                            <b-input v-model="item.title" size="sm" placeholder="Item Description"></b-input>
                                                            <b-textarea v-model="item.description" placeholder="Additional Details"></b-textarea>
                                                        </td>
                                                        <td class="rate">
                                                            <b-input type="number" v-model="item.rate" size="sm" placeholder="Price"></b-input>
                                                        </td>
                                                        <td class="text-right qty">
                                                            <b-input type="number" v-model="item.quantity" size="sm" placeholder="Quantity"></b-input>
                                                        </td>
                                                        <td class="text-right amount">
                                                            <span class="editable-amount mt-2">
                                                                <span class="currency">$</span> <span class="amount">{{item.amount}}</span>
                                                            </span>
                                                        </td>
                                                        <td class="text-center tax">
                                                            <b-checkbox v-model="item.is_tax" variant="primary" class="checkbox-primary"></b-checkbox>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <b-button variant="secondary" class="additem btn-sm" @click="add_item()">Add Item</b-button>

                                    </div>


                                    <div class="invoice-detail-total">

                                        <div class="row">

                                            <div class="col-md-6">

                                                <div class="form-group row invoice-created-by">
                                                    <label for="payment-method-account" class="col-sm-3 col-form-label col-form-label-sm">Account #:</label>
                                                    <div class="col-sm-9">
                                                        <b-input v-model="params.bank_info.no" size="sm" id="payment-method-account" placeholder="Bank Account Number"></b-input>
                                                    </div>
                                                </div>

                                                <div class="form-group row invoice-created-by">
                                                    <label for="payment-method-bank-name" class="col-sm-3 col-form-label col-form-label-sm">Bank Name:</label>
                                                    <div class="col-sm-9">
                                                        <b-input v-model="params.bank_info.name" size="sm" id="payment-method-bank-name" placeholder="Insert Bank Name"></b-input>
                                                    </div>
                                                </div>

                                                <div class="form-group row invoice-created-by">
                                                    <label for="payment-method-code" class="col-sm-3 col-form-label col-form-label-sm">SWIFT code:</label>
                                                    <div class="col-sm-9">
                                                        <b-input v-model="params.bank_info.swift_code" size="sm" id="payment-method-code" placeholder="Insert Code"></b-input>
                                                    </div>
                                                </div>

                                                <div class="form-group row invoice-created-by">
                                                    <label for="payment-method-country" class="col-sm-3 col-form-label col-form-label-sm">Country:</label>
                                                    <div class="col-sm-9">
                                                        <b-select v-model="params.bank_info.country" size="sm" class="country_code" id="payment-method-country">
                                                            <b-select-option value="">Choose Country</b-select-option>
                                                            <b-select-option value="United States">United States</b-select-option>
                                                            <b-select-option value="United Kingdom">United Kingdom</b-select-option>
                                                            <b-select-option value="Canada">Canada</b-select-option>
                                                            <b-select-option value="Australia">Australia</b-select-option>
                                                            <b-select-option value="Germany">Germany</b-select-option>
                                                            <b-select-option value="Sweden">Sweden</b-select-option>
                                                            <b-select-option value="Denmark">Denmark</b-select-option>
                                                            <b-select-option value="Norway">Norway</b-select-option>
                                                            <b-select-option value="New-Zealand">New Zealand</b-select-option>
                                                            <b-select-option value="Afghanistan">Afghanistan</b-select-option>
                                                            <b-select-option value="Albania">Albania</b-select-option>
                                                            <b-select-option value="Algeria">Algeria</b-select-option>
                                                            <b-select-option value="American-Samoa">Andorra</b-select-option>
                                                            <b-select-option value="Angola">Angola</b-select-option>
                                                            <b-select-option value="Antigua Barbuda">Antigua &amp; Barbuda</b-select-option>
                                                            <b-select-option value="Argentina">Argentina</b-select-option>
                                                            <b-select-option value="Armenia">Armenia</b-select-option>
                                                            <b-select-option value="Aruba">Aruba</b-select-option>
                                                            <b-select-option value="Austria">Austria</b-select-option>
                                                            <b-select-option value="Azerbaijan">Azerbaijan</b-select-option>
                                                            <b-select-option value="Bahamas">Bahamas</b-select-option>
                                                            <b-select-option value="Bahrain">Bahrain</b-select-option>
                                                            <b-select-option value="Bangladesh">Bangladesh</b-select-option>
                                                            <b-select-option value="Barbados">Barbados</b-select-option>
                                                            <b-select-option value="Belarus">Belarus</b-select-option>
                                                            <b-select-option value="Belgium">Belgium</b-select-option>
                                                            <b-select-option value="Belize">Belize</b-select-option>
                                                            <b-select-option value="Benin">Benin</b-select-option>
                                                            <b-select-option value="Bermuda">Bermuda</b-select-option>
                                                            <b-select-option value="Bhutan">Bhutan</b-select-option>
                                                            <b-select-option value="Bolivia">Bolivia</b-select-option>
                                                            <b-select-option value="Bosnia">Bosnia &amp; Herzegovina</b-select-option>
                                                            <b-select-option value="Botswana">Botswana</b-select-option>
                                                            <b-select-option value="Brazil">Brazil</b-select-option>
                                                            <b-select-option value="British">British Virgin Islands</b-select-option>
                                                            <b-select-option value="Brunei">Brunei</b-select-option>
                                                            <b-select-option value="Bulgaria">Bulgaria</b-select-option>
                                                            <b-select-option value="Burkina">Burkina Faso</b-select-option>
                                                            <b-select-option value="Burundi">Burundi</b-select-option>
                                                            <b-select-option value="Cambodia">Cambodia</b-select-option>
                                                            <b-select-option value="Cameroon">Cameroon</b-select-option>
                                                            <b-select-option value="Cape">Cape Verde</b-select-option>
                                                            <b-select-option value="Cayman">Cayman Islands</b-select-option>
                                                            <b-select-option value="Central-African">Central African Republic</b-select-option>
                                                            <b-select-option value="Chad">Chad</b-select-option>
                                                            <b-select-option value="Chile">Chile</b-select-option>
                                                            <b-select-option value="China">China</b-select-option>
                                                            <b-select-option value="Colombia">Colombia</b-select-option>
                                                            <b-select-option value="Comoros">Comoros</b-select-option>
                                                            <b-select-option value="Costa-Rica">Costa Rica</b-select-option>
                                                            <b-select-option value="Croatia">Croatia</b-select-option>
                                                            <b-select-option value="Cuba">Cuba</b-select-option>
                                                            <b-select-option value="Cyprus">Cyprus</b-select-option>
                                                            <b-select-option value="Czechia">Czechia</b-select-option>
                                                            <b-select-option value="Côte">Côte d’Ivoire</b-select-option>
                                                            <b-select-option value="Djibouti">Djibouti</b-select-option>
                                                            <b-select-option value="Dominica">Dominica</b-select-option>
                                                            <b-select-option value="Dominican">Dominican Republic</b-select-option>
                                                            <b-select-option value="Ecuador">Ecuador</b-select-option>
                                                            <b-select-option value="Egypt">Egypt</b-select-option>
                                                            <b-select-option value="El-Salvador">El Salvador</b-select-option>
                                                            <b-select-option value="Equatorial-Guinea">Equatorial Guinea</b-select-option>
                                                            <b-select-option value="Eritrea">Eritrea</b-select-option>
                                                            <b-select-option value="Estonia">Estonia</b-select-option>
                                                            <b-select-option value="Ethiopia">Ethiopia</b-select-option>
                                                            <b-select-option value="Fiji">Fiji</b-select-option>
                                                            <b-select-option value="Finland">Finland</b-select-option>
                                                            <b-select-option value="France">France</b-select-option>
                                                            <b-select-option value="Gabon">Gabon</b-select-option>
                                                            <b-select-option value="Georgia">Georgia</b-select-option>
                                                            <b-select-option value="Ghana">Ghana</b-select-option>
                                                            <b-select-option value="Greece">Greece</b-select-option>
                                                            <b-select-option value="Grenada">Grenada</b-select-option>
                                                            <b-select-option value="Guatemala">Guatemala</b-select-option>
                                                            <b-select-option value="Guernsey">Guernsey</b-select-option>
                                                            <b-select-option value="Guinea">Guinea</b-select-option>
                                                            <b-select-option value="Guinea-Bissau">Guinea-Bissau</b-select-option>
                                                            <b-select-option value="Guyana">Guyana</b-select-option>
                                                            <b-select-option value="Haiti">Haiti</b-select-option>
                                                            <b-select-option value="Honduras">Honduras</b-select-option>
                                                            <b-select-option value="Hong-Kong">Hong Kong SAR China</b-select-option>
                                                            <b-select-option value="Hungary">Hungary</b-select-option>
                                                            <b-select-option value="Iceland">Iceland</b-select-option>
                                                            <b-select-option value="India">India</b-select-option>
                                                            <b-select-option value="Indonesia">Indonesia</b-select-option>
                                                            <b-select-option value="Iran">Iran</b-select-option>
                                                            <b-select-option value="Iraq">Iraq</b-select-option>
                                                            <b-select-option value="Ireland">Ireland</b-select-option>
                                                            <b-select-option value="Israel">Israel</b-select-option>
                                                            <b-select-option value="Italy">Italy</b-select-option>
                                                            <b-select-option value="Jamaica">Jamaica</b-select-option>
                                                            <b-select-option value="Japan">Japan</b-select-option>
                                                            <b-select-option value="Jordan">Jordan</b-select-option>
                                                            <b-select-option value="Kazakhstan">Kazakhstan</b-select-option>
                                                            <b-select-option value="Kenya">Kenya</b-select-option>
                                                            <b-select-option value="Kuwait">Kuwait</b-select-option>
                                                            <b-select-option value="Kyrgyzstan">Kyrgyzstan</b-select-option>
                                                            <b-select-option value="Laos">Laos</b-select-option>
                                                            <b-select-option value="Latvia">Latvia</b-select-option>
                                                            <b-select-option value="Lebanon">Lebanon</b-select-option>
                                                            <b-select-option value="Lesotho">Lesotho</b-select-option>
                                                            <b-select-option value="Liberia">Liberia</b-select-option>
                                                            <b-select-option value="Libya">Libya</b-select-option>
                                                            <b-select-option value="Liechtenstein">Liechtenstein</b-select-option>
                                                            <b-select-option value="Lithuania">Lithuania</b-select-option>
                                                            <b-select-option value="Luxembourg">Luxembourg</b-select-option>
                                                            <b-select-option value="Macedonia">Macedonia</b-select-option>
                                                            <b-select-option value="Madagascar">Madagascar</b-select-option>
                                                            <b-select-option value="Malawi">Malawi</b-select-option>
                                                            <b-select-option value="Malaysia">Malaysia</b-select-option>
                                                            <b-select-option value="Maldives">Maldives</b-select-option>
                                                            <b-select-option value="Mali">Mali</b-select-option>
                                                            <b-select-option value="Malta">Malta</b-select-option>
                                                            <b-select-option value="Mauritania">Mauritania</b-select-option>
                                                            <b-select-option value="Mauritius">Mauritius</b-select-option>
                                                            <b-select-option value="Mexico">Mexico</b-select-option>
                                                            <b-select-option value="Moldova">Moldova</b-select-option>
                                                            <b-select-option value="Monaco">Monaco</b-select-option>
                                                            <b-select-option value="Mongolia">Mongolia</b-select-option>
                                                            <b-select-option value="Montenegro">Montenegro</b-select-option>
                                                            <b-select-option value="Morocco">Morocco</b-select-option>
                                                            <b-select-option value="Mozambique">Mozambique</b-select-option>
                                                            <b-select-option value="Myanmar">Myanmar (Burma)</b-select-option>
                                                            <b-select-option value="Namibia">Namibia</b-select-option>
                                                            <b-select-option value="Nepal">Nepal</b-select-option>
                                                            <b-select-option value="Netherlands">Netherlands</b-select-option>
                                                            <b-select-option value="Nicaragua">Nicaragua</b-select-option>
                                                            <b-select-option value="Niger">Niger</b-select-option>
                                                            <b-select-option value="Nigeria">Nigeria</b-select-option>
                                                            <b-select-option value="North-Korea">North Korea</b-select-option>
                                                            <b-select-option value="Oman">Oman</b-select-option>
                                                            <b-select-option value="Pakistan">Pakistan</b-select-option>
                                                            <b-select-option value="Palau">Palau</b-select-option>
                                                            <b-select-option value="Palestinian">Palestinian Territories</b-select-option>
                                                            <b-select-option value="Panama">Panama</b-select-option>
                                                            <b-select-option value="Papua">Papua New Guinea</b-select-option>
                                                            <b-select-option value="Paraguay">Paraguay</b-select-option>
                                                            <b-select-option value="Peru">Peru</b-select-option>
                                                            <b-select-option value="Philippines">Philippines</b-select-option>
                                                            <b-select-option value="Poland">Poland</b-select-option>
                                                            <b-select-option value="Portugal">Portugal</b-select-option>
                                                            <b-select-option value="Puerto">Puerto Rico</b-select-option>
                                                            <b-select-option value="Qatar">Qatar</b-select-option>
                                                            <b-select-option value="Romania">Romania</b-select-option>
                                                            <b-select-option value="Russia">Russia</b-select-option>
                                                            <b-select-option value="Rwanda">Rwanda</b-select-option>
                                                            <b-select-option value="Réunion">Réunion</b-select-option>
                                                            <b-select-option value="Samoa">Samoa</b-select-option>
                                                            <b-select-option value="San-Marino">San Marino</b-select-option>
                                                            <b-select-option value="Saudi-Arabia">Saudi Arabia</b-select-option>
                                                            <b-select-option value="Senegal">Senegal</b-select-option>
                                                            <b-select-option value="Serbia">Serbia</b-select-option>
                                                            <b-select-option value="Seychelles">Seychelles</b-select-option>
                                                            <b-select-option value="Sierra-Leone">Sierra Leone</b-select-option>
                                                            <b-select-option value="Singapore">Singapore</b-select-option>
                                                            <b-select-option value="Slovakia">Slovakia</b-select-option>
                                                            <b-select-option value="Slovenia">Slovenia</b-select-option>
                                                            <b-select-option value="Solomon-Islands">Solomon Islands</b-select-option>
                                                            <b-select-option value="Somalia">Somalia</b-select-option>
                                                            <b-select-option value="South-Africa">South Africa</b-select-option>
                                                            <b-select-option value="South-Korea">South Korea</b-select-option>
                                                            <b-select-option value="Spain">Spain</b-select-option>
                                                            <b-select-option value="Sri-Lanka">Sri Lanka</b-select-option>
                                                            <b-select-option value="Sudan">Sudan</b-select-option>
                                                            <b-select-option value="Suriname">Suriname</b-select-option>
                                                            <b-select-option value="Swaziland">Swaziland</b-select-option>
                                                            <b-select-option value="Switzerland">Switzerland</b-select-option>
                                                            <b-select-option value="Syria">Syria</b-select-option>
                                                            <b-select-option value="Sao-Tome-and-Principe">São Tomé &amp; Príncipe</b-select-option>
                                                            <b-select-option value="Tajikistan">Tajikistan</b-select-option>
                                                            <b-select-option value="Tanzania">Tanzania</b-select-option>
                                                            <b-select-option value="Thailand">Thailand</b-select-option>
                                                            <b-select-option value="Timor-Leste">Timor-Leste</b-select-option>
                                                            <b-select-option value="Togo">Togo</b-select-option>
                                                            <b-select-option value="Tonga">Tonga</b-select-option>
                                                            <b-select-option value="Trinidad-and-Tobago">Trinidad &amp; Tobago</b-select-option>
                                                            <b-select-option value="Tunisia">Tunisia</b-select-option>
                                                            <b-select-option value="Turkey">Turkey</b-select-option>
                                                            <b-select-option value="Turkmenistan">Turkmenistan</b-select-option>
                                                            <b-select-option value="Uganda">Uganda</b-select-option>
                                                            <b-select-option value="Ukraine">Ukraine</b-select-option>
                                                            <b-select-option value="UAE">United Arab Emirates</b-select-option>
                                                            <b-select-option value="Uruguay">Uruguay</b-select-option>
                                                            <b-select-option value="Uzbekistan">Uzbekistan</b-select-option>
                                                            <b-select-option value="Vanuatu">Vanuatu</b-select-option>
                                                            <b-select-option value="Venezuela">Venezuela</b-select-option>
                                                            <b-select-option value="Vietnam">Vietnam</b-select-option>
                                                            <b-select-option value="Yemen">Yemen</b-select-option>
                                                            <b-select-option value="Zambia">Zambia</b-select-option>
                                                            <b-select-option value="Zimbabwe">Zimbabwe</b-select-option>
                                                        </b-select>
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="col-md-6">
                                                <div class="totals-row">
                                                    <div class="invoice-totals-row invoice-summary-subtotal">
                                                        <div class="invoice-summary-label">Subtotal</div>
                                                        <div class="invoice-summary-value">
                                                            <div class="subtotal-amount">
                                                                <span class="currency">$</span><span class="amount">100</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="invoice-totals-row invoice-summary-total">
                                                        <div class="invoice-summary-label">Discount</div>
                                                        <div class="invoice-summary-value">
                                                            <div class="total-amount">
                                                                <span class="currency">$</span><span>10</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="invoice-totals-row invoice-summary-tax">
                                                        <div class="invoice-summary-label">Tax</div>
                                                        <div class="invoice-summary-value">
                                                            <div class="tax-amount">
                                                                <span>0%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="invoice-totals-row invoice-summary-balance-due">
                                                        <div class="invoice-summary-label">Total</div>
                                                        <div class="invoice-summary-value">
                                                            <div class="balance-due-amount">
                                                                <span class="currency">$</span><span>90</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="invoice-detail-note">

                                        <div class="row">

                                            <div class="col-md-12 align-self-center">

                                                <div class="form-group row invoice-note">
                                                    <label for="invoice-detail-notes" class="col-sm-12 col-form-label col-form-label-sm">Notes:</label>
                                                    <div class="col-sm-12">
                                                        <b-textarea v-model="params.notes" rows="3" id="invoice-detail-notes" placeholder='Notes - For example, "Thank you for doing business with us"'></b-textarea>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>


                                </div>

                            </div>

                        </div>

                        <div class="col-xl-3">

                            <div class="invoice-actions">

                                <div class="invoice-action-currency">

                                    <div class="form-group mb-0">
                                        <label for="currency">Currency</label>
                                        <b-dropdown :right="true" variant="icon-only" toggle-tag="a" toggle-class="text-nowrap" menu-class="top-0" class="selectable-dropdown invoice-select d-block">
                                            <template #button-content>
                                                <img :src="require('@/assets/images/'+selected_currency.thumb)" class="flag-width" alt="flag">
                                                <span class="selectable-text">{{selected_currency.key}}</span>
                                                <span class="selectable-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
                                            </template>
                                            <b-dropdown-item v-for="(item, index) in currency_list" :key="index" @click="selected_currency = item;">
                                                <img :src="require('@/assets/images/'+item.thumb)" class="flag-width" alt="flag"> {{item.key}}
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </div>

                                </div>

                                <div class="invoice-action-tax">

                                    <h5>Tax</h5>

                                    <div class="invoice-action-tax-fields">

                                        <div class="row">

                                            <div class="col-6">

                                                <div class="form-group mb-0">
                                                    <label for="type">Type</label>
                                                    <b-dropdown variant="icon-only" toggle-tag="a" toggle-class="text-nowrap" menu-class="top-0" class="selectable-dropdown invoice-tax-select d-block">
                                                        <template #button-content>
                                                            <span class="selectable-text">{{selected_tax_type.key}}</span>
                                                            <span class="selectable-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
                                                        </template>
                                                        <b-dropdown-item v-for="(item, index) in tax_type_list" :key="index" @click="selected_tax_type = item;">
                                                            {{item.key}}
                                                        </b-dropdown-item>
                                                    </b-dropdown>
                                                </div>

                                            </div>

                                            <div class="col-6">
                                                <div v-if="selected_tax_type.value !== null" class="form-group mb-0 tax-rate-deducted">
                                                    <label for="rate">Rate (%)</label>
                                                    <b-input v-model="selected_tax_type.value" type="number" min="0" max="100" class="input-rate" placeholder="Rate"></b-input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div class="invoice-action-discount">

                                    <h5>Discount</h5>

                                    <div class="invoice-action-discount-fields">

                                        <div class="row">

                                            <div class="col-6">
                                                <div class="form-group mb-0">
                                                    <label for="type">Type</label>

                                                    <b-dropdown variant="icon-only" toggle-tag="a" toggle-class="text-nowrap" menu-class="top-0" class="selectable-dropdown invoice-discount-select d-block">
                                                        <template #button-content>
                                                            <span class="selectable-text">{{selected_discount.key}}</span>
                                                            <span class="selectable-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
                                                        </template>
                                                        <b-dropdown-item v-for="(item, index) in discount_list" :key="index" @click="selected_discount = item;">
                                                            {{item.key}}
                                                        </b-dropdown-item>
                                                    </b-dropdown>
                                                </div>

                                            </div>

                                            <div class="col-6">
                                                <div v-if="selected_discount.value !== null" class="form-group mb-0 discount-amount">
                                                    <label for="rate" class="text-capitalize">{{selected_discount.type}}</label>
                                                    <b-input v-model="selected_discount.value" type="number" min="0" class="input-rate" placeholder="Rate"></b-input>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div class="invoice-actions-btn">

                                <div class="invoice-action-btn">

                                    <div class="row">
                                        <div class="col-xl-12 col-md-4">
                                            <b-button tag="a" variant="primary" class="btn-send">Send Invoice</b-button>
                                        </div>
                                        <div class="col-xl-12 col-md-4">
                                            <b-button tag="a" to="/apps/invoice/preview" variant="dark" class="btn-preview">Preview</b-button>
                                        </div>
                                        <div class="col-xl-12 col-md-4">
                                            <b-button tag="a" variant="success" class="btn-download">Save</b-button>
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
    import '@/assets/sass/apps/invoice-edit.scss';

    //flatpickr
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    import '@/assets/sass/forms/custom-flatpickr.css';

    export default {
        metaInfo: { title: 'Invoice Edit' },
        components: {
            flatPickr
        },
        data() {
            return {
                items: [],
                selected_file: require('@/assets/images/cork-logo.png'),
                params: {
                    title: 'Cork Inc.', invoice_no: '#0001',
                    from: { name: 'Cork Inc.', email: 'info@company.com', address: 'XYZ Delta Street', phone: '(120) 456 789' },
                    to: { name: 'Jesse Cory', email: 'redq@company.com', address: '405 Mulberry Rd. Mc Grady, NC, 28649', phone: '(128) 666 070' },

                    invoice_date: '', due_date: '',
                    bank_info: { no: '1234567890', name: 'Bank of America', swift_code: 'VS70134', country: 'United States' },
                    notes: 'Thank you for doing business with us.'
                },
                currency_list: [], selected_currency: { key: 'USD - US Dollar', thumb: 'flags/en.png' },
                tax_type_list: [], selected_tax_type: { key: 'None', value: null },
                discount_list: [], selected_discount: { key: 'None', value: null, type: '' },
            }
        },
        mounted() {
            //set default data
            this.items = [
                { id: 1, title: 'Calendar App Customization', description: 'Make Calendar App Dynamic', rate: 60, quantity: 2, amount: 120, is_tax: false },
                { id: 2, title: 'Chat App Customization', description: 'Customized Chat Application to resolve some Bug Fixes', rate: 25, quantity: 1, amount: 25, is_tax: false }
            ];

            let dt = new Date();
            this.params.invoice_date = JSON.parse(JSON.stringify(dt));
            dt.setDate(dt.getDate() + 5);
            this.params.due_date = dt;


            //currency list
            this.currency_list = [
                { key: 'USD - US Dollar', thumb: 'flags/en.png' },
                { key: 'GBP - British Pound', thumb: 'flags/gbp.png' },
                { key: 'IDR - Indonesian Rupiah', thumb: 'flags/idr.png' },
                { key: 'INR - Indian Rupee', thumb: 'flags/inr.png' },
                { key: 'BRL - Brazilian Real', thumb: 'flags/brl.png' },
                { key: 'EUR - Germany (Euro)', thumb: 'flags/de.png' },
                { key: 'TRY - Turkish Lira', thumb: 'flags/tr.png' }
            ];

            //tax type list
            this.tax_type_list = [
                { key: 'Deducted', value: 10 },
                { key: 'Per Item', value: 5 },
                { key: 'On Total', value: 25 },
                { key: 'None', value: null },
            ];

            //discount list
            this.discount_list = [
                { key: 'Percent', value: 10, type: 'percent' },
                { key: 'Flat Amount', value: 25, type: 'amount' },
                { key: 'None', value: null, type: '' },
            ];
        },
        methods: {
            change_file(event) {
                this.selected_file = URL.createObjectURL(event.target.files[0]);
            },
            add_item() {
                let max_id = 0;
                if (this.items && this.items.length) {
                    max_id = this.items.reduce((max, character) => (character.id > max ? character.id : max), this.items[0].id);
                }
                this.items.push({ id: max_id + 1, title: '', description: '', rate: 0, quantity: 0, amount: 0, is_tax: false });
            },
            remove_item(item) {
                this.items = this.items.filter(d => d.id != item.id);
            }
        }
    };
</script>
