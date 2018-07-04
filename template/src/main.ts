/* eslint-disable no-unused-vars */
declare var require: any

// Import Vue
import Vue from 'vue';

// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Styles
const Framework7Styles = require('framework7/dist/css/framework7.css');

// Import della configurazione F7
import F7Config from './f7.config';

// Import App Custom Styles
const AppStyle = require('@sass/main.scss');

// Import App Component
import App from './App.vue';

// Import other plugins
import { LoggerPlugin } from '@js/logger';

// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7);
// Init Logger plugin
Vue.use(LoggerPlugin);

// Init App
const baseApp = new Vue({
    el         : '#app',
    template   : '<app/>',
    // Init Framework7 by passing parameters here
    framework7 : F7Config,
    // Register App Component
    components : {
        app : App
    }
});
