<template>
    <div class="container">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Components </a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Sweet Alerts</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="container">
            <div id="navSection" class="nav sidenav">
                <scrollactive class="sidenav-content" tag="div" active-class="active" :offset="120" :modifyUrl="false" :highlightFirstItem="true">
                    <a href="#sweetalertbasic" class="nav-link scrollactive-item">Basic</a>
                    <a href="#sweetalertmessage" class="nav-link scrollactive-item">Message</a>
                    <a href="#sweetalertdynamic" class="nav-link scrollactive-item">Dynamic</a>
                    <a href="#sweetalertatitlewithtext" class="nav-link scrollactive-item">A title with text</a>
                    <a href="#sweetalertchainingmodals" class="nav-link scrollactive-item">Chaining modals</a>
                    <a href="#sweetalertanimation" class="nav-link scrollactive-item">Animation</a>
                    <a href="#sweetalertautoclosetimer" class="nav-link scrollactive-item">Auto close timer</a>
                    <a href="#sweetalertcustomimage" class="nav-link scrollactive-item">Custom image</a>
                    <a href="#sweetalertcustomhtml" class="nav-link scrollactive-item">Custom HTML</a>
                    <a href="#sweetalertwarningmessage" class="nav-link scrollactive-item">Warning message</a>
                    <a href="#sweetalertcancel" class="nav-link scrollactive-item">Cancel</a>
                    <a href="#sweetalertcustomstyle" class="nav-link scrollactive-item">Custom Style</a>
                    <a href="#sweetalertfooter" class="nav-link scrollactive-item">Footer</a>
                    <a href="#sweetalertrtl" class="nav-link scrollactive-item">RTL</a>
                    <a href="#sweetalertmixin" class="nav-link scrollactive-item">Mixin</a>
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
                        <a target="_blank" href="https://www.npmjs.com/package/vue-sweetalert2" class="text-info">
                            https://www.npmjs.com/package/vue-sweetalert2
                        </a>
                    </div>
                </div>
            </div>
            <div class="row layout-top-spacing">
                <div id="sweetalertbasic" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Basic message</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(1)">Basic message</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code1')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code1')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(1)&quot;&gt;Basic message&lt;/b-button&gt;

 this.$swal({
    title: 'Saved succesfully',
    padding: '2em'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertmessage" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Success message</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(2)">Success message!</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code2')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code2')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(2)&quot;&gt;Success message!&lt;/b-button&gt;

this.$swal({
    icon: 'success',
    title: 'Good job!',
    text: 'You clicked the!',
    padding: '2em'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertdynamic" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Dynamic queue</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(3)">Dynamic queue</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code3')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code3')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(3)&quot;&gt;Dynamic queue&lt;/b-button&gt;

const ipAPI = 'https://api.ipify.org?format=json';
this.$swal({
    title: 'Your public IP',
    confirmButtonText: 'Show my public IP',
    text: 'Your public IP will be received ' + 'via AJAX request',
    showLoaderOnConfirm: true,
    preConfirm: () =&gt; {
        return fetch(ipAPI)
            .then(response =&gt; {
                return response.json();
            })
            .then(data =&gt; {
                this.$swal({
                    title: data.ip
                });
            })
            .catch(() =&gt; {
                this.$swal({
                    type: 'error',
                    title: 'Unable to get your public IP'
                });
            });
    }
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertatitlewithtext" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>A title with a text under</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(4)">Title & text</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code4')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code4')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(4)&quot;&gt;Title &amp; text&lt;/b-button&gt;

this.$swal({
    icon: 'question',
    title: 'The Internet?',
    text: 'That thing is still around?',
    padding: '2em'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertchainingmodals" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Chaining modals (queue)</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(5)">Chaining modals (queue)</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code5')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code5')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(5)&quot;&gt;Chaining modals (queue)&lt;/b-button&gt;

const steps = ['1', '2', '3'];
const swalQueueStep = this.$swal.mixin({
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    progressSteps: steps,
    input: 'text',
    inputAttributes: {
        required: true
    },
    validationMessage: 'This field is required',
    padding: '2em'
});

const values = [];
let currentStep;

for (currentStep = 0; currentStep &lt; steps.length; ) {
    const result = await swalQueueStep.fire({
        title: `Question ${steps[currentStep]}`,
        text: currentStep == 0 ? 'Chaining swal2 modals is easy.' : '',
        inputValue: values[currentStep],
        showCancelButton: currentStep &gt; 0,
        currentProgressStep: currentStep
    });

    if (result.value) {
        values[currentStep] = result.value;
        currentStep++;
    } else if (result.dismiss === this.$swal.DismissReason.cancel) {
        currentStep--;
    } else {
        break;
    }
}

if (currentStep === steps.length) {
    this.$swal.fire({
        title: 'All done!',
        padding: '2em',
        html: 'Your answers: &lt;pre&gt;' + JSON.stringify(values) + '&lt;/pre&gt;',
        confirmButtonText: 'Lovely!'
    });
}
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertanimation" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom animation</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(6)">Custom animation</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code6')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code6')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(6)&quot;&gt;Custom animation&lt;/b-button&gt;

this.$swal({
    title: 'Custom animation with Animate.css',
    animation: false,
    customClass: 'animated tada',
    padding: '2em'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertautoclosetimer" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Message with auto close timer</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(7)">Message timer</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code7')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code7')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(7)&quot;&gt;Message timer&lt;/b-button&gt;

let timerInterval;

this.$swal({
    title: 'Auto close alert!',
    html: 'I will close in &lt;b&gt;&lt;/b&gt; milliseconds.',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () =&gt; {
        this.$swal.showLoading();
        const b = this.$swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() =&gt; {
            b.textContent = this.$swal.getTimerLeft();
        }, 100);
    },
    willClose: () =&gt; {
        clearInterval(timerInterval);
    }
}).then(function(result) {
    if (result.dismiss === this.$swal.DismissReason.timer) {
        console.log('I was closed by the timer');
    }
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertcustomimage" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Message with custom image</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(8)">Message with custom image</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code8')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code8')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(8)&quot;&gt;Message with custom image&lt;/b-button&gt;

this.$swal({
    title: 'Sweet!',
    text: 'Modal with a custom image.',
    imageUrl: require('@/assets/images/thumbs-up.jpg'),
    imageWidth: 224,
    imageHeight: 200,
    imageAlt: 'Custom image',
    animation: false,
    padding: '2em'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertcustomhtml" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Custom HTML description and buttons</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(9)">Custom Description & buttons</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code9')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code9')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(9)&quot;&gt;Custom Description &amp; buttons&lt;/b-button&gt;

this.$swal({
    icon: 'info',
    title: '&lt;i&gt;HTML&lt;/i&gt; &lt;u&gt;example&lt;/u&gt;',
    html: 'You can use &lt;b&gt;bold text&lt;/b&gt;, ' + '&lt;a href=&quot;//github.com&quot;&gt;links&lt;/a&gt; ' + 'and other HTML tags',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText: '&lt;i class=&quot;flaticon-checked-1&quot;&gt;&lt;/i&gt; Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText: '&lt;i class=&quot;flaticon-cancel-circle&quot;&gt;&lt;/i&gt; Cancel',
    cancelButtonAriaLabel: 'Thumbs down',
    padding: '2em'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertwarningmessage" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Warning message, with "Confirm" button</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(10)">Confirm</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code10')"><span>Confirm</span></b-button>

                                <div v-if="code_arr.includes('code10')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(10)&quot;&gt;Confirm&lt;/b-button&gt;

this.$swal({
    title: 'Are you sure?',
    text: &quot;You won't be able to revert this!&quot;,
    type: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Delete',
    padding: '2em'
}).then(result =&gt; {
    if (result.value) {
        this.$swal('Deleted!', 'Your file has been deleted.', 'success');
    }
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertcancel" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Execute something else for "Cancel".</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(11)">Addition else for "Cancel".</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code11')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code11')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(11)&quot;&gt;Addition else for &quot;Cancel&quot;.&lt;/b-button&gt;

const swalWithBootstrapButtons = this.$swal.mixin({
    confirmButtonClass: 'btn btn-secondary',
    cancelButtonClass: 'btn btn-dark mr-3',
    buttonsStyling: false
});
swalWithBootstrapButtons
    .fire({
        title: 'Are you sure?',
        text: &quot;You won't be able to revert this!&quot;,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
        padding: '2em'
    })
    .then(result =&gt; {
        if (result.value) {
            swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
        } else if (result.dismiss === this.$swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
        }
    });
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertcustomstyle" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>A message with custom width, padding and background</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(12)">Custom Message</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code12')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code12')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(12)&quot;&gt;Custom Message&lt;/b-button&gt;

this.$swal({
    title: 'Custom width, padding, background.',
    width: 600,
    padding: '7em',
    customClass: 'background-modal',
    background: '#fff url(' + require('@/assets/images/sweet-bg.jpg') + ') no-repeat 100% 100%'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertfooter" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>With Footer</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(13)">With Footer</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code13')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code13')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(13)&quot;&gt;With Footer&lt;/b-button&gt;

this.$swal({
    type: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '&lt;a href&gt;Why do I have this issue?&lt;/a&gt;',
    padding: '2em'
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertrtl" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>RTL Support</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(14)">RTL</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code14')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code14')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(14)&quot;&gt;RTL&lt;/b-button&gt;

this.$swal({
    title: 'هل تريد الاستمرار؟',
    confirmButtonText: 'نعم',
    cancelButtonText: 'لا',
    showCancelButton: true,
    showCloseButton: true,
    padding: '2em',
    target: document.getElementById('rtl-container')
});
                                        </pre>
                                    </highlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sweetalertmixin" class="col-lg-12 col-12 layout-spacing">
                    <div class="statbox panel box box-shadow">
                        <div class="panel-heading">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Mixin</h4>
                                </div>
                            </div>
                        </div>
                        <div class="panel-body text-center">
                            <b-button variant="primary" class="mr-2 btn" @click="showAlert(15)">Mixin</b-button>
                            <div class="code-section-container show-code">
                                <b-button variant="default" class="toggle-code-snippet" @click="toggleCode('code15')"><span>Code</span></b-button>

                                <div v-if="code_arr.includes('code15')" class="code-section text-left">
                                    <highlight>
                                        <pre>
&lt;b-button variant=&quot;primary&quot; class=&quot;mr-2 btn&quot; @click=&quot;showAlert(15)&quot;&gt;Mixin&lt;/b-button&gt;

const toast = this.$swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    padding: '2em'
});
toast.fire({
    icon: 'success',
    title: 'Signed in successfully',
    padding: '2em'
});
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
    import '@/assets/sass/components/custom-sweetalert.scss';
    import highlight from '@/components/plugins/highlight.vue';
    export default {
        metaInfo: { title: 'Tabs' },
        components: {
            highlight
        },
        data() {
            return {
                code_arr: []
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
            },

            async showAlert(type) {
                if (type === 1) {
                    this.$swal({
                        title: 'Saved succesfully',
                        padding: '2em'
                    });
                } else if (type === 2) {
                    this.$swal({
                        icon: 'success',
                        title: 'Good job!',
                        text: 'You clicked the!',
                        padding: '2em'
                    });
                } else if (type === 3) {
                    const ipAPI = 'https://api.ipify.org?format=json';
                    this.$swal({
                        title: 'Your public IP',
                        confirmButtonText: 'Show my public IP',
                        text: 'Your public IP will be received ' + 'via AJAX request',
                        showLoaderOnConfirm: true,
                        preConfirm: () => {
                            return fetch(ipAPI)
                                .then(response => {
                                    return response.json();
                                })
                                .then(data => {
                                    this.$swal({
                                        title: data.ip
                                    });
                                })
                                .catch(() => {
                                    this.$swal({
                                        type: 'error',
                                        title: 'Unable to get your public IP'
                                    });
                                });
                        }
                    });
                } else if (type === 4) {
                    this.$swal({
                        icon: 'question',
                        title: 'The Internet?',
                        text: 'That thing is still around?',
                        padding: '2em'
                    });
                } else if (type === 5) {
                    const steps = ['1', '2', '3'];
                    const swalQueueStep = this.$swal.mixin({
                        confirmButtonText: 'Next →',
                        showCancelButton: true,
                        progressSteps: steps,
                        input: 'text',
                        inputAttributes: {
                            required: true
                        },
                        validationMessage: 'This field is required',
                        padding: '2em'
                    });

                    const values = [];
                    let currentStep;

                    for (currentStep = 0; currentStep < steps.length; ) {
                        const result = await swalQueueStep.fire({
                            title: `Question ${steps[currentStep]}`,
                            text: currentStep == 0 ? 'Chaining swal2 modals is easy.' : '',
                            inputValue: values[currentStep],
                            showCancelButton: currentStep > 0,
                            currentProgressStep: currentStep
                        });

                        if (result.value) {
                            values[currentStep] = result.value;
                            currentStep++;
                        } else if (result.dismiss === this.$swal.DismissReason.cancel) {
                            currentStep--;
                        } else {
                            break;
                        }
                    }

                    if (currentStep === steps.length) {
                        this.$swal.fire({
                            title: 'All done!',
                            padding: '2em',
                            html: 'Your answers: <pre>' + JSON.stringify(values) + '</pre>',
                            confirmButtonText: 'Lovely!'
                        });
                    }
                } else if (type === 6) {
                    this.$swal({
                        title: 'Custom animation with Animate.css',
                        animation: false,
                        customClass: 'animated tada',
                        padding: '2em'
                    });
                } else if (type === 7) {
                    let timerInterval;

                    this.$swal({
                        title: 'Auto close alert!',
                        html: 'I will close in <b></b> milliseconds.',
                        timer: 2000,
                        timerProgressBar: true,
                        didOpen: () => {
                            this.$swal.showLoading();
                            const b = this.$swal.getHtmlContainer().querySelector('b');
                            timerInterval = setInterval(() => {
                                b.textContent = this.$swal.getTimerLeft();
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);
                        }
                    }).then(function(result) {
                        if (result.dismiss === this.$swal.DismissReason.timer) {
                            console.log('I was closed by the timer');
                        }
                    });
                } else if (type === 8) {
                    this.$swal({
                        title: 'Sweet!',
                        text: 'Modal with a custom image.',
                        imageUrl: require('@/assets/images/thumbs-up.jpg'),
                        imageWidth: 224,
                        imageHeight: 200,
                        imageAlt: 'Custom image',
                        animation: false,
                        padding: '2em'
                    });
                } else if (type === 9) {
                    this.$swal({
                        icon: 'info',
                        title: '<i>HTML</i> <u>example</u>',
                        html: 'You can use <b>bold text</b>, ' + '<a href="//github.com">links</a> ' + 'and other HTML tags',
                        showCloseButton: true,
                        showCancelButton: true,
                        focusConfirm: false,
                        confirmButtonText: '<i class="flaticon-checked-1"></i> Great!',
                        confirmButtonAriaLabel: 'Thumbs up, great!',
                        cancelButtonText: '<i class="flaticon-cancel-circle"></i> Cancel',
                        cancelButtonAriaLabel: 'Thumbs down',
                        padding: '2em'
                    });
                } else if (type === 10) {
                    this.$swal({
                        icon: 'warning',
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        showCancelButton: true,
                        confirmButtonText: 'Delete',
                        padding: '2em'
                    }).then(result => {
                        if (result.value) {
                            this.$swal('Deleted!', 'Your file has been deleted.', 'success');
                        }
                    });
                } else if (type === 11) {
                    const swalWithBootstrapButtons = this.$swal.mixin({
                        confirmButtonClass: 'btn btn-secondary',
                        cancelButtonClass: 'btn btn-dark mr-3',
                        buttonsStyling: false
                    });
                    swalWithBootstrapButtons
                        .fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonText: 'Yes, delete it!',
                            cancelButtonText: 'No, cancel!',
                            reverseButtons: true,
                            padding: '2em'
                        })
                        .then(result => {
                            if (result.value) {
                                swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
                            } else if (result.dismiss === this.$swal.DismissReason.cancel) {
                                swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
                            }
                        });
                } else if (type === 12) {
                    this.$swal({
                        title: 'Custom width, padding, background.',
                        width: 600,
                        padding: '7em',
                        customClass: 'background-modal',
                        background: '#fff url(' + require('@/assets/images/sweet-bg.jpg') + ') no-repeat 100% 100%'
                    });
                } else if (type === 13) {
                    this.$swal({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: '<a href>Why do I have this issue?</a>',
                        padding: '2em'
                    });
                } else if (type === 14) {
                    this.$swal({
                        title: 'هل تريد الاستمرار؟',
                        confirmButtonText: 'نعم',
                        cancelButtonText: 'لا',
                        showCancelButton: true,
                        showCloseButton: true,
                        padding: '2em',
                        target: document.getElementById('rtl-container')
                    });
                } else if (type === 15) {
                    const toast = this.$swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        padding: '2em'
                    });
                    toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully',
                        padding: '2em'
                    });
                }
            }
        }
    };
</script>
