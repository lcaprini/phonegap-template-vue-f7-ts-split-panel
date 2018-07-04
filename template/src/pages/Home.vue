<template>
    <f7-page>
        <f7-navbar sliding>
            <f7-nav-left>
                <f7-link icon-f7="icon-bars" panel-open="left"></f7-link>
            </f7-nav-left>
            <f7-nav-title>
                Home
            </f7-nav-title>
        </f7-navbar>
        <f7-block-title>{{ title }}</f7-block-title>
        <f7-block inner>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est aliquam officiis quaerat placeat, cum explicabo magni soluta totam maxime autem minima accusamus eos suscipit dignissimos corporis modi voluptatum fugiat!
        </f7-block>
    </f7-page>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component"

@Component
export default class HomePage extends Vue {
    title: string = 'Hello World';
};
</script>
