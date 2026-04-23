<template>
    <div :class="[$store.state.layout_style, $store.state.menu_style]">
        <component v-bind:is="layout"></component>
    </div>
</template>
<script>
    // layouts
    import appLayout from './layouts/app-layout.vue';
    import authLayout from './layouts/auth-layout.vue';

    import '@/assets/sass/app.scss';

    export default {
        metaInfo: {
            title: 'Sales Admin',
            titleTemplate: '%s | CORK - Multipurpose Bootstrap Dashboard Template'
        },
        components: {
            app: appLayout,
            auth: authLayout
        },
        computed: {
            layout() {
                return this.$store.getters.layout;
            }
        },
        data() {
            return {};
        },
        mounted() {},
        methods: {}
    };
</script>
