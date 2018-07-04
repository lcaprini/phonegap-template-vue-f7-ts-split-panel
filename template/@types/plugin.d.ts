
import VueT from 'vue';

export type PluginFunction<T> = (Vue: typeof VueT, options?: T) => void;

export interface PluginObject<T> {
    install: PluginFunction<T>;
    [key: string]: any;
}