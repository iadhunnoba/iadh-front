<template>
    <div class="layout-px-spacing">

        <div class="error500 text-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 mr-auto mt-5 text-md-left text-center">
                        <a href="index.html" class="ml-md-5">
                            <img alt="image-500" src="@/assets/images/logo2.svg" class="theme-logo" />
                        </a>
                    </div>
                </div>
            </div>

            <div class="container-fluid error-content">
                <div class="">
                    <h1 class="error-number">500</h1>
                    <p class="mini-text">Ooops!</p>
                    <p class="error-text">Internal Server Error!</p>
                    <b-button tag="a" href="/" variant="secondary" class="mt-5">Go Back</b-button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import '@/assets/sass/pages/error/style-500.scss';
    export default {
        metaInfo: { title: 'Error 500' },
        mounted() {
        },
        methods: {
        }
    };
</script>
