<template>
    <div class="layout-px-spacing">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components </a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Pricing Tables</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="row">
            <div class="col-lg-12 layout-spacing layout-top-spacing">
                <div class="statbox panel box box-shadow">
                    <div class="panel-heading">
                        <div class="row">
                            <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                <h4>Toggle</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="container pricing-table">
                            <!-- Billing Cycle  -->
                            <div class="billing-cycle-radios mt-5">
                                <div class="radio billed-yearly-radio" :class="{ 'billed-yearly-switch': chk_demo }">
                                    <div class="d-flex justify-content-center">
                                        <span class="txt-monthly">Monthly</span>
                                        <label class="switch s-icons s-outline s-outline-primary">
                                            <input type="checkbox" v-model="chk_demo" />
                                            <span class="slider round"></span>
                                        </label>

                                        <span class="txt-yearly">Yearly <span class="badge badge-pill badge-success">20% Off</span></span>
                                    </div>
                                </div>
                            </div>

                            <!-- Pricing Plans Container -->
                            <div class="pricing-plans-container mt-5 d-md-flex d-block">
                                <div class="pricing-plan mb-5">
                                    <h3>Cloud Hosting</h3>
                                    <p class="margin-top-10">cPanel/WHM included. Intel Xeon E3 with guaranteed 2GB RAM.</p>
                                    <div class="pricing-plan-label billed-monthly-label"><strong>$25</strong>/ monthly</div>
                                    <div class="pricing-plan-label billed-yearly-label"><strong>$290</strong>/ yearly</div>
                                    <div class="pricing-plan-features mb-4">
                                        <strong>Cloud Hosting Features</strong>
                                        <ul>
                                            <li>Single Domain</li>
                                            <li>50 GB SSD</li>
                                            <li>1 TB Premium Bandwidth</li>
                                        </ul>
                                    </div>
                                    <b-button class="button margin-top-20" variant="dark" block>Buy Now</b-button>
                                </div>
                                <div class="pricing-plan mb-5 mt-md-0 recommended">
                                    <div class="recommended-badge">Most Popular</div>
                                    <h3>VPS Hosting</h3>
                                    <p class="margin-top-10">cPanel/WHM included. Intel Xeon E5 with guaranteed 4GB RAM.</p>
                                    <div class="pricing-plan-label billed-monthly-label"><strong>$70</strong>/ monthly</div>
                                    <div class="pricing-plan-label billed-yearly-label"><strong>$670</strong>/ yearly</div>
                                    <div class="pricing-plan-features mb-4">
                                        <strong>VPS Hosting Features</strong>
                                        <ul>
                                            <li>5 Domains</li>
                                            <li>100 GB SSD</li>
                                            <li>2 TB Premium Bandwidth</li>
                                        </ul>
                                    </div>
                                    <b-button class="button margin-top-20" variant="default" block>Buy Now</b-button>
                                </div>
                                <div class="pricing-plan mb-5">
                                    <h3>Business Hosting</h3>
                                    <p class="margin-top-10">cPanel/WHM included. Intel Xeon E5 with guaranteed 8GB RAM.</p>
                                    <div class="pricing-plan-label billed-monthly-label"><strong>$115</strong>/ monthly</div>
                                    <div class="pricing-plan-label billed-yearly-label"><strong>$1100</strong>/ yearly</div>
                                    <div class="pricing-plan-features mb-4">
                                        <strong>Business Hosting Features</strong>
                                        <ul>
                                            <li>Unlimited Domains</li>
                                            <li>1 TB SSD</li>
                                            <li>5 TB Premium Bandwidth</li>
                                        </ul>
                                    </div>
                                    <b-button class="button margin-top-20" variant="dark" block>Buy Now</b-button>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;container pricing-table&quot;&gt;
    &lt;!-- Billing Cycle  --&gt;
    &lt;div class=&quot;billing-cycle-radios mt-5&quot;&gt;
        &lt;div class=&quot;radio billed-yearly-radio&quot; :class=&quot;{'billed-yearly-switch' : chk_demo}&quot;&gt;
            &lt;div class=&quot;d-flex justify-content-center&quot;&gt;
                &lt;span class=&quot;txt-monthly&quot;&gt;Monthly&lt;/span&gt;
                &lt;label class=&quot;switch s-icons s-outline s-outline-primary&quot;&gt;
                    &lt;input type=&quot;checkbox&quot; v-model=&quot;chk_demo&quot; /&gt;
                    &lt;span class=&quot;slider round&quot;&gt;&lt;/span&gt;
                &lt;/label&gt;

                &lt;span class=&quot;txt-yearly&quot;&gt;Yearly &lt;span class=&quot;badge badge-pill badge-success&quot;&gt;20% Off&lt;/span&gt;&lt;/span&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;!-- Pricing Plans Container --&gt;
    &lt;div class=&quot;pricing-plans-container mt-5 d-md-flex d-block&quot;&gt;
        &lt;div class=&quot;pricing-plan mb-5&quot;&gt;
            &lt;h3&gt;Cloud Hosting&lt;/h3&gt;
            &lt;p class=&quot;margin-top-10&quot;&gt;cPanel/WHM included. Intel Xeon E3 with guaranteed 2GB RAM.&lt;/p&gt;
            &lt;div class=&quot;pricing-plan-label billed-monthly-label&quot;&gt;&lt;strong&gt;$25&lt;/strong&gt;/ monthly&lt;/div&gt;
            &lt;div class=&quot;pricing-plan-label billed-yearly-label&quot;&gt;&lt;strong&gt;$290&lt;/strong&gt;/ yearly&lt;/div&gt;
            &lt;div class=&quot;pricing-plan-features mb-4&quot;&gt;
                &lt;strong&gt;Cloud Hosting Features&lt;/strong&gt;
                &lt;ul&gt;
                    &lt;li&gt;Single Domain&lt;/li&gt;
                    &lt;li&gt;50 GB SSD&lt;/li&gt;
                    &lt;li&gt;1 TB Premium Bandwidth&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
            &lt;b-button class=&quot;button margin-top-20&quot; variant=&quot;dark&quot; block&gt;Buy Now&lt;/b-button&gt;
        &lt;/div&gt;
        &lt;div class=&quot;pricing-plan mb-5 mt-md-0 recommended&quot;&gt;
            &lt;div class=&quot;recommended-badge&quot;&gt;Most Popular&lt;/div&gt;
            &lt;h3&gt;VPS Hosting&lt;/h3&gt;
            &lt;p class=&quot;margin-top-10&quot;&gt;cPanel/WHM included. Intel Xeon E5 with guaranteed 4GB RAM.&lt;/p&gt;
            &lt;div class=&quot;pricing-plan-label billed-monthly-label&quot;&gt;&lt;strong&gt;$70&lt;/strong&gt;/ monthly&lt;/div&gt;
            &lt;div class=&quot;pricing-plan-label billed-yearly-label&quot;&gt;&lt;strong&gt;$670&lt;/strong&gt;/ yearly&lt;/div&gt;
            &lt;div class=&quot;pricing-plan-features mb-4&quot;&gt;
                &lt;strong&gt;VPS Hosting Features&lt;/strong&gt;
                &lt;ul&gt;
                    &lt;li&gt;5 Domains&lt;/li&gt;
                    &lt;li&gt;100 GB SSD&lt;/li&gt;
                    &lt;li&gt;2 TB Premium Bandwidth&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
            &lt;b-button class=&quot;button margin-top-20&quot; variant=&quot;default&quot; block&gt;Buy Now&lt;/b-button&gt;
        &lt;/div&gt;
        &lt;div class=&quot;pricing-plan mb-5&quot;&gt;
            &lt;h3&gt;Business Hosting&lt;/h3&gt;
            &lt;p class=&quot;margin-top-10&quot;&gt;cPanel/WHM included. Intel Xeon E5 with guaranteed 8GB RAM.&lt;/p&gt;
            &lt;div class=&quot;pricing-plan-label billed-monthly-label&quot;&gt;&lt;strong&gt;$115&lt;/strong&gt;/ monthly&lt;/div&gt;
            &lt;div class=&quot;pricing-plan-label billed-yearly-label&quot;&gt;&lt;strong&gt;$1100&lt;/strong&gt;/ yearly&lt;/div&gt;
            &lt;div class=&quot;pricing-plan-features mb-4&quot;&gt;
                &lt;strong&gt;Business Hosting Features&lt;/strong&gt;
                &lt;ul&gt;
                    &lt;li&gt;Unlimited Domains&lt;/li&gt;
                    &lt;li&gt;1 TB SSD&lt;/li&gt;
                    &lt;li&gt;5 TB Premium Bandwidth&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
            &lt;b-button class=&quot;button margin-top-20&quot; variant=&quot;dark&quot; block&gt;Buy Now&lt;/b-button&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
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
                                <h4>Animated</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="container pricing-table">
                            <div id="pricingWrapper" class="row">
                                <div class="col-md-6 col-lg-4">
                                    <b-card class="stacked mt-5" header-class="pt-0">
                                        <template #header>
                                            <span class="card-price">$49</span>
                                            <h3 class="card-title mt-3 mb-1">Freelancer</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </template>
                                        <b-list-group class="list-group-minimal mb-3">
                                            <b-list-group-item>Support forum</b-list-group-item>
                                            <b-list-group-item>Free hosting</b-list-group-item>
                                            <b-list-group-item>2 hours of support</b-list-group-item>
                                            <b-list-group-item>5GB of storage space</b-list-group-item>
                                        </b-list-group>
                                        <b-button tag="a" variant="primary" block>Buy Now</b-button>
                                    </b-card>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <b-card class="stacked mt-5" header-class="pt-0">
                                        <template #header>
                                            <span class="card-price">$89</span>
                                            <h3 class="card-title mt-3 mb-1">Small business</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </template>
                                        <b-list-group class="list-group-minimal mb-3">
                                            <b-list-group-item>Unlimited calls</b-list-group-item>
                                            <b-list-group-item>Free hosting</b-list-group-item>
                                            <b-list-group-item>10 hours of support</b-list-group-item>
                                            <b-list-group-item>100GB of storage space</b-list-group-item>
                                        </b-list-group>
                                        <b-button tag="a" variant="primary" block>Buy Now</b-button>
                                    </b-card>
                                </div>
                                <div class="col-md-6 col-lg-4">
                                    <b-card class="stacked mt-5" header-class="pt-0">
                                        <template #header>
                                            <span class="card-price">$129</span>
                                            <h3 class="card-title mt-3 mb-1">Larger business</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        </template>
                                        <b-list-group class="list-group-minimal mb-3">
                                            <b-list-group-item>Unlimited calls</b-list-group-item>
                                            <b-list-group-item>Free hosting</b-list-group-item>
                                            <b-list-group-item>Unlimited hours of support</b-list-group-item>
                                            <b-list-group-item>1TB of storage space</b-list-group-item>
                                        </b-list-group>
                                        <b-button tag="a" variant="primary" block>Buy Now</b-button>
                                    </b-card>
                                </div>
                            </div>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;container pricing-table&quot;&gt;
    &lt;div id=&quot;pricingWrapper&quot; class=&quot;row&quot;&gt;
        &lt;div class=&quot;col-md-6 col-lg-4&quot;&gt;
            &lt;b-card class=&quot;stacked mt-5&quot; header-class=&quot;pt-0&quot;&gt;
                &lt;template #header&gt;
                    &lt;span class=&quot;card-price&quot;&gt;$49&lt;/span&gt;
                    &lt;h3 class=&quot;card-title mt-3 mb-1&quot;&gt;Freelancer&lt;/h3&gt;
                    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/p&gt;
                &lt;/template&gt;
                &lt;b-list-group class=&quot;list-group-minimal mb-3&quot;&gt;
                    &lt;b-list-group-item&gt;Support forum&lt;/b-list-group-item&gt;
                    &lt;b-list-group-item&gt;Free hosting&lt;/b-list-group-item&gt;
                    &lt;b-list-group-item&gt;2 hours of support&lt;/b-list-group-item&gt;
                    &lt;b-list-group-item&gt;5GB of storage space&lt;/b-list-group-item&gt;
                &lt;/b-list-group&gt;
                &lt;b-button tag=&quot;a&quot; variant=&quot;primary&quot; block&gt;Buy Now&lt;/b-button&gt;
            &lt;/b-card&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-6 col-lg-4&quot;&gt;
            &lt;b-card class=&quot;stacked mt-5&quot; header-class=&quot;pt-0&quot;&gt;
                &lt;template #header&gt;
                    &lt;span class=&quot;card-price&quot;&gt;$89&lt;/span&gt;
                    &lt;h3 class=&quot;card-title mt-3 mb-1&quot;&gt;Small business&lt;/h3&gt;
                    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/p&gt;
                &lt;/template&gt;
                &lt;b-list-group class=&quot;list-group-minimal mb-3&quot;&gt;
                    &lt;b-list-group-item&gt;Unlimited calls&lt;/b-list-group-item&gt;
                    &lt;b-list-group-item&gt;Free hosting&lt;/b-list-group-item&gt;
                    &lt;b-list-group-item&gt;10 hours of support&lt;/b-list-group-item&gt;
                    &lt;b-list-group-item&gt;100GB of storage space&lt;/b-list-group-item&gt;
                &lt;/b-list-group&gt;
                &lt;b-button tag=&quot;a&quot; variant=&quot;primary&quot; block&gt;Buy Now&lt;/b-button&gt;
            &lt;/b-card&gt;
        &lt;/div&gt;
        &lt;div class=&quot;col-md-6 col-lg-4&quot;&gt;
            &lt;b-card class=&quot;stacked mt-5&quot; header-class=&quot;pt-0&quot;&gt;
                &lt;template #header&gt;
                    &lt;span class=&quot;card-price&quot;&gt;$129&lt;/span&gt;
                    &lt;h3 class=&quot;card-title mt-3 mb-1&quot;&gt;Larger business&lt;/h3&gt;
                    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit.&lt;/p&gt;
                &lt;/template&gt;
                &lt;b-list-group class=&quot;list-group-minimal mb-3&quot;&gt;
                    &lt;b-list-group-item&gt;Unlimited calls&lt;/b-list-group-item&gt;
                    &lt;b-list-group-item&gt;Free hosting&lt;/b-list-group-item&gt;
                    &lt;b-list-group-item&gt;Unlimited hours of support&lt;/b-list-group-item&gt;
                    &lt;b-list-group-item&gt;1TB of storage space&lt;/b-list-group-item&gt;
                &lt;/b-list-group&gt;
                &lt;b-button tag=&quot;a&quot; variant=&quot;primary&quot; block&gt;Buy Now&lt;/b-button&gt;
            &lt;/b-card&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre
                                        >
                                    </highlight>
                                </div>
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
                                <h4>Basic</h4>
                            </div>
                        </div>
                    </div>
                    <div class="panel-body">
                        <div class="container pricing-table">
                            <section class="pricing-section bg-7 mt-5">
                                <div class="pricing pricing--norbu">
                                    <div class="pricing__item">
                                        <h3 class="pricing__title">Beginner Savers</h3>
                                        <p class="pricing__sentence">For people who are starting out in the water saving business</p>
                                        <div class="pricing__price"><span class="pricing__currency">$</span>19<span class="pricing__period">/ month</span></div>
                                        <ul class="pricing__feature-list text-center">
                                            <li class="pricing__feature">
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
                                                    class="feather feather-arrow-right"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                                Free water saving e-book
                                            </li>
                                            <li class="pricing__feature">
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
                                                    class="feather feather-arrow-right"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                                Free access to forums
                                            </li>
                                            <li class="pricing__feature">
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
                                                    class="feather feather-arrow-right"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                                Beginners tips
                                            </li>
                                        </ul>
                                        <b-button variant="default" class="pricing__action mx-auto mb-4">Buy</b-button>
                                    </div>
                                    <div class="pricing__item pricing__item--featured">
                                        <h3 class="pricing__title">Advanced Savers</h3>
                                        <p class="pricing__sentence">For experienced water savers who'd like to push their limits</p>
                                        <div class="pricing__price"><span class="pricing__currency">$</span>29<span class="pricing__period">/ month</span></div>
                                        <ul class="pricing__feature-list text-center">
                                            <li class="pricing__feature">
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
                                                    class="feather feather-arrow-right"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                                Free water saving e-book
                                            </li>
                                            <li class="pricing__feature">
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
                                                    class="feather feather-arrow-right"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                                Free access to forums
                                            </li>
                                            <li class="pricing__feature">
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
                                                    class="feather feather-arrow-right"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                                Advanced saving tips
                                            </li>
                                        </ul>
                                        <b-button variant="default" class="pricing__action mx-auto mb-4">Buy</b-button>
                                    </div>
                                    <div class="pricing__item">
                                        <h3 class="pricing__title">Pro Savers</h3>
                                        <p class="pricing__sentence">For all the professionals who'd like to educate others, too</p>
                                        <div class="pricing__price"><span class="pricing__currency">$</span>79<span class="pricing__period">/ month</span></div>
                                        <ul class="pricing__feature-list text-center">
                                            <li class="pricing__feature">
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
                                                    class="feather feather-arrow-right"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                                Access to all books
                                            </li>
                                            <li class="pricing__feature">
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
                                                    class="feather feather-arrow-right"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                                Unlimited board topics
                                            </li>
                                            <li class="pricing__feature">
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
                                                    class="feather feather-arrow-right"
                                                >
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                                Beginners tips
                                            </li>
                                        </ul>
                                        <b-button variant="default" class="pricing__action mx-auto mb-4">Buy</b-button>
                                    </div>
                                </div>
                            </section>

                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;div class=&quot;container pricing-table&quot;&gt;
    &lt;section class=&quot;pricing-section bg-7 mt-5&quot;&gt;
        &lt;div class=&quot;pricing pricing--norbu&quot;&gt;
            &lt;div class=&quot;pricing__item&quot;&gt;
                &lt;h3 class=&quot;pricing__title&quot;&gt;Beginner Savers&lt;/h3&gt;
                &lt;p class=&quot;pricing__sentence&quot;&gt;For people who are starting out in the water saving business&lt;/p&gt;
                &lt;div class=&quot;pricing__price&quot;&gt;&lt;span class=&quot;pricing__currency&quot;&gt;$&lt;/span&gt;19&lt;span class=&quot;pricing__period&quot;&gt;/ month&lt;/span&gt;&lt;/div&gt;
                &lt;ul class=&quot;pricing__feature-list text-center&quot;&gt;
                    &lt;li class=&quot;pricing__feature&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-arrow-right&quot;&gt;&lt;line x1=&quot;5&quot; y1=&quot;12&quot; x2=&quot;19&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;polyline points=&quot;12 5 19 12 12 19&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Free water saving e-book&lt;/li&gt;
                    &lt;li class=&quot;pricing__feature&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-arrow-right&quot;&gt;&lt;line x1=&quot;5&quot; y1=&quot;12&quot; x2=&quot;19&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;polyline points=&quot;12 5 19 12 12 19&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Free access to forums&lt;/li&gt;
                    &lt;li class=&quot;pricing__feature&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-arrow-right&quot;&gt;&lt;line x1=&quot;5&quot; y1=&quot;12&quot; x2=&quot;19&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;polyline points=&quot;12 5 19 12 12 19&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Beginners tips&lt;/li&gt;
                &lt;/ul&gt;
                &lt;b-button variant=&quot;default&quot; class=&quot;pricing__action mx-auto mb-4&quot;&gt;Buy&lt;/b-button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;pricing__item pricing__item--featured&quot;&gt;
                &lt;h3 class=&quot;pricing__title&quot;&gt;Advanced Savers&lt;/h3&gt;
                &lt;p class=&quot;pricing__sentence&quot;&gt;For experienced water savers who'd like to push their limits&lt;/p&gt;
                &lt;div class=&quot;pricing__price&quot;&gt;&lt;span class=&quot;pricing__currency&quot;&gt;$&lt;/span&gt;29&lt;span class=&quot;pricing__period&quot;&gt;/ month&lt;/span&gt;&lt;/div&gt;
                &lt;ul class=&quot;pricing__feature-list text-center&quot;&gt;
                    &lt;li class=&quot;pricing__feature&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-arrow-right&quot;&gt;&lt;line x1=&quot;5&quot; y1=&quot;12&quot; x2=&quot;19&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;polyline points=&quot;12 5 19 12 12 19&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Free water saving e-book&lt;/li&gt;
                    &lt;li class=&quot;pricing__feature&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-arrow-right&quot;&gt;&lt;line x1=&quot;5&quot; y1=&quot;12&quot; x2=&quot;19&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;polyline points=&quot;12 5 19 12 12 19&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Free access to forums&lt;/li&gt;
                    &lt;li class=&quot;pricing__feature&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-arrow-right&quot;&gt;&lt;line x1=&quot;5&quot; y1=&quot;12&quot; x2=&quot;19&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;polyline points=&quot;12 5 19 12 12 19&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Advanced saving tips&lt;/li&gt;
                &lt;/ul&gt;
                &lt;b-button variant=&quot;default&quot; class=&quot;pricing__action mx-auto mb-4&quot;&gt;Buy&lt;/b-button&gt;
            &lt;/div&gt;
            &lt;div class=&quot;pricing__item&quot;&gt;
                &lt;h3 class=&quot;pricing__title&quot;&gt;Pro Savers&lt;/h3&gt;
                &lt;p class=&quot;pricing__sentence&quot;&gt;For all the professionals who'd like to educate others, too&lt;/p&gt;
                &lt;div class=&quot;pricing__price&quot;&gt;&lt;span class=&quot;pricing__currency&quot;&gt;$&lt;/span&gt;79&lt;span class=&quot;pricing__period&quot;&gt;/ month&lt;/span&gt;&lt;/div&gt;
                &lt;ul class=&quot;pricing__feature-list text-center&quot;&gt;
                    &lt;li class=&quot;pricing__feature&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-arrow-right&quot;&gt;&lt;line x1=&quot;5&quot; y1=&quot;12&quot; x2=&quot;19&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;polyline points=&quot;12 5 19 12 12 19&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Access to all books&lt;/li&gt;
                    &lt;li class=&quot;pricing__feature&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-arrow-right&quot;&gt;&lt;line x1=&quot;5&quot; y1=&quot;12&quot; x2=&quot;19&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;polyline points=&quot;12 5 19 12 12 19&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Unlimited board topics&lt;/li&gt;
                    &lt;li class=&quot;pricing__feature&quot;&gt;&lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;24&quot; height=&quot;24&quot; viewBox=&quot;0 0 24 24&quot; fill=&quot;none&quot; stroke=&quot;currentColor&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot; class=&quot;feather feather-arrow-right&quot;&gt;&lt;line x1=&quot;5&quot; y1=&quot;12&quot; x2=&quot;19&quot; y2=&quot;12&quot;&gt;&lt;/line&gt;&lt;polyline points=&quot;12 5 19 12 12 19&quot;&gt;&lt;/polyline&gt;&lt;/svg&gt; Beginners tips&lt;/li&gt;
                &lt;/ul&gt;
                &lt;b-button variant=&quot;default&quot; class=&quot;pricing__action mx-auto mb-4&quot;&gt;Buy&lt;/b-button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/section&gt;
&lt;/div&gt;
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
    import '@/assets/sass/pricing-table.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Pricing Tables' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                chk_demo: false
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
