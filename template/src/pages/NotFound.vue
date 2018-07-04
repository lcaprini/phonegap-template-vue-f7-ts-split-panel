<template>
    <f7-page>
        <f7-navbar title="Not found" back-link="Back"></f7-navbar>
        <f7-block strong>
            <p>Sorry</p>
            <p>Requested content not found.</p>
        </f7-block>
    </f7-page>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component"

@Component
export default class NotFoundPage extends Vue {

};
</script>
