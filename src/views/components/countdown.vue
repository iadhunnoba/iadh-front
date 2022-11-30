<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components </a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Countdown</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div id="navSection" class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#countdownseperator" class="nav-link scrollactive-item">Seperator</a>
                    <a href="#countdowncircle" class="nav-link scrollactive-item">Circle</a>
                </scrollactive>
            </div>

            <div class="row layout-top-spacing">
                <div id="countdownseperator" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Simple Countdown</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="container">
                                <div id="cd-simple">
                                    <div class="countdown">
                                        <div class="clock-count-container">
                                            <h1 class="clock-val">{{ demo1.days }}</h1>
                                        </div>
                                        <h4 class="clock-text">Days</h4>
                                    </div>
                                    <div class="countdown">
                                        <div class="clock-count-container">
                                            <h1 class="clock-val">{{ demo1.hours }}</h1>
                                        </div>
                                        <h4 class="clock-text">Hours</h4>
                                    </div>
                                    <div class="countdown">
                                        <div class="clock-count-container">
                                            <h1 class="clock-val">{{ demo1.minutes }}</h1>
                                        </div>
                                        <h4 class="clock-text">Mins</h4>
                                    </div>
                                    <div class="countdown">
                                        <div class="clock-count-container">
                                            <h1 class="clock-val">{{ demo1.seconds }}</h1>
                                        </div>
                                        <h4 class="clock-text">Sec</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;div id=&quot;cd-simple&quot;&gt;
    &lt;div class=&quot;countdown&quot;&gt;
        &lt;div class=&quot;clock-count-container&quot;&gt;
            &lt;h1 class=&quot;clock-val&quot;&gt;{{ demo1.days }}&lt;/h1&gt;
        &lt;/div&gt;
        &lt;h4 class=&quot;clock-text&quot;&gt;Days&lt;/h4&gt;
    &lt;/div&gt;
    &lt;div class=&quot;countdown&quot;&gt;
        &lt;div class=&quot;clock-count-container&quot;&gt;
            &lt;h1 class=&quot;clock-val&quot;&gt;{{ demo1.hours }}&lt;/h1&gt;
        &lt;/div&gt;
        &lt;h4 class=&quot;clock-text&quot;&gt;Hours&lt;/h4&gt;
    &lt;/div&gt;
    &lt;div class=&quot;countdown&quot;&gt;
        &lt;div class=&quot;clock-count-container&quot;&gt;
            &lt;h1 class=&quot;clock-val&quot;&gt;{{ demo1.minutes }}&lt;/h1&gt;
        &lt;/div&gt;
        &lt;h4 class=&quot;clock-text&quot;&gt;Mins&lt;/h4&gt;
    &lt;/div&gt;
    &lt;div class=&quot;countdown&quot;&gt;
        &lt;div class=&quot;clock-count-container&quot;&gt;
            &lt;h1 class=&quot;clock-val&quot;&gt;{{ demo1.seconds }}&lt;/h1&gt;
        &lt;/div&gt;
        &lt;h4 class=&quot;clock-text&quot;&gt;Sec&lt;/h4&gt;
    &lt;/div&gt;
&lt;/div&gt;
                                            </pre>
                                        </div>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="countdowncircle" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Circle Countdown</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <div class="container">
                                <div id="cd-circle">
                                    <div class="countdown">
                                        <div class="clock-count-container">
                                            <h1 class="clock-val">{{ demo2.days }}</h1>
                                        </div>
                                        <h4 class="clock-text">Days</h4>
                                    </div>
                                    <div class="countdown">
                                        <div class="clock-count-container">
                                            <h1 class="clock-val">{{ demo2.hours }}</h1>
                                        </div>
                                        <h4 class="clock-text">Hours</h4>
                                    </div>
                                    <div class="countdown">
                                        <div class="clock-count-container">
                                            <h1 class="clock-val">{{ demo2.minutes }}</h1>
                                        </div>
                                        <h4 class="clock-text">Mins</h4>
                                    </div>
                                    <div class="countdown">
                                        <div class="clock-count-container">
                                            <h1 class="clock-val">{{ demo2.seconds }}</h1>
                                        </div>
                                        <h4 class="clock-text">Sec</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <div v-pre>
                                            <pre>
&lt;div id=&quot;cd-circle&quot;&gt;
    &lt;div class=&quot;countdown&quot;&gt;
        &lt;div class=&quot;clock-count-container&quot;&gt;
            &lt;h1 class=&quot;clock-val&quot;&gt;{{ demo2.days }}&lt;/h1&gt;
        &lt;/div&gt;
        &lt;h4 class=&quot;clock-text&quot;&gt;Days&lt;/h4&gt;
    &lt;/div&gt;
    &lt;div class=&quot;countdown&quot;&gt;
        &lt;div class=&quot;clock-count-container&quot;&gt;
            &lt;h1 class=&quot;clock-val&quot;&gt;{{ demo2.hours }}&lt;/h1&gt;
        &lt;/div&gt;
        &lt;h4 class=&quot;clock-text&quot;&gt;Hours&lt;/h4&gt;
    &lt;/div&gt;
    &lt;div class=&quot;countdown&quot;&gt;
        &lt;div class=&quot;clock-count-container&quot;&gt;
            &lt;h1 class=&quot;clock-val&quot;&gt;{{ demo2.minutes }}&lt;/h1&gt;
        &lt;/div&gt;
        &lt;h4 class=&quot;clock-text&quot;&gt;Mins&lt;/h4&gt;
    &lt;/div&gt;
    &lt;div class=&quot;countdown&quot;&gt;
        &lt;div class=&quot;clock-count-container&quot;&gt;
            &lt;h1 class=&quot;clock-val&quot;&gt;{{ demo2.seconds }}&lt;/h1&gt;
        &lt;/div&gt;
        &lt;h4 class=&quot;clock-text&quot;&gt;Sec&lt;/h4&gt;
    &lt;/div&gt;
&lt;/div&gt;
                                            </pre>
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
    import '@/assets/sass/components/custom-countdown.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Countdown' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: [],
                demo1: {
                    days: null,
                    hours: null,
                    minutes: null,
                    seconds: null
                },
                demo2: {
                    days: null,
                    hours: null,
                    minutes: null,
                    seconds: null
                }
            };
        },
        mounted() {
            this.set_timer_demo1();
            this.set_timer_demo2();
        },
        methods: {
            toggleCode(name) {
                if (this.code_arr.includes(name)) {
                    this.code_arr = this.code_arr.filter(d => d != name);
                } else {
                    this.code_arr.push(name);
                }
            },

            set_timer_demo1() {
                let date = new Date();
                date.setDate(date.getDate() + 3);
                let countDownDate = date.getTime();

                let timer1 = setInterval(() => {
                    let now = new Date().getTime();

                    let distance = countDownDate - now;

                    this.demo1.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    this.demo1.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    this.demo1.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    this.demo1.seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    if (distance < 0) {
                        clearInterval(timer1);
                    }
                }, 1000);
            },
            set_timer_demo2() {
                let date = new Date();
                date.setFullYear(date.getFullYear() + 1);
                let countDownDate = date.getTime();

                let timer2 = setInterval(() => {
                    let now = new Date().getTime();

                    let distance = countDownDate - now;

                    this.demo2.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    this.demo2.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    this.demo2.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    this.demo2.seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    if (distance < 0) {
                        clearInterval(timer2);
                    }
                }, 1000);
            }
        }
    };
</script>
