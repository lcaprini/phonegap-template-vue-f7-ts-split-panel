<template>
    <f7-panel left :reveal="isiOS" :effect="panelEffect">
        <f7-navbar title="Menu"></f7-navbar>
        <!-- force page background color to white if on iOS -->
        <f7-page :style="pageStyle">

            {{ options.appName }}

            <f7-block-title>Links</f7-block-title>
            <f7-list>
                <f7-list-item link="/" title="Home" link-view="#main-view" panel-close reload-all />
                <f7-list-item link="/about/" title="About" link-view="#main-view" panel-close reload-all />
                <f7-list-item link="/services/" title="Services" link-view="#main-view" panel-close reload-all />
            </f7-list>

            Versione {{ options.appVersion }}

        </f7-page>

    </f7-panel>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component"
import { Prop } from "vue-property-decorator"

import LeftPanelOptions from './LeftPanelOptions';

@Component
export default class LeftPanel extends Vue {
    @Prop() options!: LeftPanelOptions;

    // data
    isMaterial = true;//(window as any).isMaterial;
    isiOS = false;//(window as any).isiOS;

    // computed
    get pageStyle() {
        return this.isiOS ? 'background-color: white;' : '';
    }
    get panelEffect() {
        return this.isiOS ? 'reveal' : 'cover';
    }

};
</script>

<style scoped lang="scss">
.panel-left .page {
    margin-top: 44px;
    padding-bottom: 44px;
}
@media (min-width: 960px) {
    .panel.panel-left {
        border-right: 1px solid #b2b2b2;
    }
}
</style>
