<template>
    <!-- App -->
    <div id="app">

        <!-- Statusbar -->
        <f7-statusbar></f7-statusbar>

        <!-- Left Panel / View -->
        <left-panel-view :options="panelOptions" />

        <!-- Main View -->
        <f7-view id="main-view" url="/" main></f7-view>

    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component"
import { Prop } from "vue-property-decorator"

import LeftPanel from './components/LeftPanel';
import LeftPanelOptions from './components/LeftPanelOptions';

@Component({
    components: {
        'left-panel-view': LeftPanel
    }
})
export default class App extends Vue {

    panelOptions: LeftPanelOptions = {
        appName : 'CordovaF7Vue',
        appVersion : '0.0.1'
    }

    created() {
        document.addEventListener('backbutton', this.handleBackButton);
    }

    get isiOS(): boolean {
        return this.$theme.ios;
    }

    handleBackButton() {
        this.$logger.debug('handleBackButton');

        // NOTE: The back button will behave differently depending on circumstance
        // If the side panel is open, close it
        if (document.querySelector('.panel-left.panel-active')) {
            // This will do nothing when the split-view is open
            return this.$f7.panel.close();
        }
        // Close modals
        // @TODO How to handle modals we shouldn't close like a login-screen?
        if (document.querySelector('.modal-in')) {
            return this.$f7.popover.close('');
        }
        // If we have a back button, we want it to go back
        if (this.$f7.views.main.router.history.length > 1) {
            return this.$f7.views.main.router.back();
        }
        // Default to closing the app
        return (window.navigator as any).app.exitApp();
    }
}
</script>


<style lang="scss">
/* style is not `scoped` so navbars in Pages are modified as well */
@media (min-width: 960px) {
    /* Let's hide panel-opener button when left panel is visible */
    .view-main .navbar .panel-open {
        display: none;
    }
}
</style>
