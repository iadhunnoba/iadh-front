<template>
    <div class="layout-px-spacing">

        <div class="error404 text-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 mr-auto mt-5 text-md-left text-center">
                        <a href="index.html" class="ml-md-5">
                            <img alt="image-404" src="@/assets/images/logo2.svg" class="theme-logo" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="container-fluid error-content">
                <div class="">
                    <h1 class="error-number">404</h1>
                    <p class="mini-text">Ooops!</p>
                    <p class="error-text mb-4 mt-1">The page you requested was not found!</p>
                    <b-button tag="a" href="/" variant="primary" class="mt-5">Go Back</b-button>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import '@/assets/sass/pages/error/style-400.scss';
    export default {
        metaInfo: { title: 'Error 404' },
        mounted() {
        },
        methods: {
        }
    };
</script>
