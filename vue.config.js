const path = require('path');
module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false
        }
    },

    devServer:{

        host:'0.0.0.0',
        port: 8080,
        public:'192.168.1.100:8080',
        disableHostCheck: true
    },
    chainWebpack: config => {
        // Remove prefetch plugin and that's it!
        config.plugins.delete('prefetch');
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@themeConfig': path.resolve(__dirname, 'theme.config.js'),                
            }
        }
    }
};
