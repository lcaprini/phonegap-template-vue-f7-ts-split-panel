
import _Vue from 'vue';
import { LoggerLevels, LoggerOptions } from '.';

// const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
const isFirefox = !!(window as any).InstallTrigger;
// const isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
// const isIE = /* @cc_on!@ */false || !!document.documentMode;
// const isEdge = !isIE && !!window.StyleMedia;
const isChrome = !!(window as any).chrome && !!(window as any).chrome.webstore;
// const isBlink = (isChrome || isOpera) && !!window.CSS;

export class Logger {
    private logLevel: number = LoggerLevels.DEBUG;
    private overrideLogLevel: number|null = null;

    constructor(
        options?: LoggerOptions
    ) {
        if(options){
            // Check if the override log lever exists and if it's one of the available levels
            if (options.overrideLevel && options.overrideLevel in LoggerLevels) {
                this.overrideLogLevel = options.overrideLevel;
                this.logLevel = this.overrideLogLevel;
            }
        }
    }


    /**
     * Return the arg to string if is necessary
     * @param  {any} arg Argument to parse
     * @returns {string}
     */
    private parseArg(arg: any): string {
        if(arg instanceof Array || arg instanceof Object){
            return JSON.stringify(arg);
        }
        else {
            return arg;
        }
    }


    /**
     * Print all supplied arguments with the right level function (on browser)
     * and convert all array and object to string (on device)
     * @param  {string} func Console function
     * @param  {any[]} others All other arguments to print
     */
    private print(func: string, others: any[]) {

        // If the app is running on device all arguments to print will be transformed into string
        if (!!(window as any).cordova) {
            const strings = others.map(this.parseArg);
            console.log(`${func.toUpperCase()}: ${strings.join(', ')}`);
        }
        else {
            // The app is running on browser
            // Get the line which call the logger
            let line = '';

            if (isChrome) {
                line = (new Error().stack as string).split('\n')[3];
                line = (line.indexOf(' (') >= 0) ? line.split(' (')[1].substring(0, line.length - 1) : line.split('at ')[1];
                line = line.lastIndexOf(')') !== -1 ? line.substring(0, line.lastIndexOf(')')) : line;
            }
            else if (isFirefox) {
                line = (new Error().stack as string).split('\n')[3].split('@')[1];
            }

            // Then print all arguments with the right console function
            const functionToCall = eval('console[func]');
            functionToCall(`${line}: `, ...others);
        }
    }


    /**
     * Change the logger level for future uses
     * @param  {string='DEBUG'} requestedLogLevel
     */
    changeLevel(newLogLevel: string) {
        // If the override was set the new log level will be ignored
        if (!this.overrideLogLevel) {
            // Check if the new log lever exists and if it's one of the available levels
            if (newLogLevel && newLogLevel.toUpperCase() in LoggerLevels) {
                this.logLevel = parseInt(LoggerLevels[<any>newLogLevel.toUpperCase()]);
            }
        }

        console.log(`Logger is active with level <${LoggerLevels[this.logLevel]}>`);
    }


    /**
     * Print with warn function
     * @param  {any[]} ...args
     */
    error(...args: any[]) {
        this.print('error', args);
    }


    /**
     * Print with warn function
     * @param  {any[]} ...args
     */
    warn(...args: any[]) {
        if (this.logLevel >= LoggerLevels.WARN) {
            this.print('warn', args);
        }
    }


    /**
     * Print with info function
     * @param  {any[]} ...args
     */
    info(...args: any[]) {
        if (this.logLevel >= LoggerLevels.INFO) {
            this.print('info', args);
        }
    }


    /**
     * Print with debug function
     * @param  {any[]} ...args
     */
    debug(...args: any[]) {
        if (this.logLevel >= LoggerLevels.DEBUG) {
            this.print('debug', args);
        }
    }
}

export function LoggerPlugin(Vue: typeof _Vue, options?: LoggerOptions): void {
    const $logger = new Logger(options);
    Object.defineProperty(Vue.prototype, '$logger', { value: $logger });
}