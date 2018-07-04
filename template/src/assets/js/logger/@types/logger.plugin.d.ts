
import Vue from 'vue';
import { Logger } from '../logger.plugin';

declare module 'vue/types/vue' {
    interface Vue {
        $logger: Logger
    }
}