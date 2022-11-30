<template>
    <div class="layout-px-spacing">
        <portal to="breadcrumb">
            <ul class="navbar-nav flex-row">
                <li>
                    <div class="page-header">
                        <nav class="breadcrumb-one" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="javascript:;">Pages</a></li>
                                <li class="breadcrumb-item active" aria-current="page"><span>Profile</span></li>
                            </ol>
                        </nav>
                    </div>
                </li>
            </ul>
        </portal>

        <div class="maintanence text-center">
            <div class="container-fluid maintanence-content">
                <div class="">
                    <div class="maintanence-hero-img">
                        <img alt="logo" src="@/assets/images/logo2.svg" />
                    </div>
                    <h1 class="error-title">Under Maintenance</h1>
                    <p class="error-text">Thank you for visiting us.</p>
                    <p class="text">We are currently working on making some improvements <br /> to give you better user experience.</p>
                    <p class="text">Please visit us again shortly.</p>
                    <b-button tag="a" href="/" variant="info" class="mt-4">Home</b-button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import '@/assets/sass/pages/error/style-maintanence.scss';
    export default {
        metaInfo: { title: 'Maintenence' },
        mounted() {
        },
        methods: {
        }
    };
</script>
