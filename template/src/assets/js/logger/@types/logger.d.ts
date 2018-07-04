
export interface Logger {
    /** Change the logger level for future uses */
    changeLevel(newLogLevel: string): void;
    /** Print an error message */
    error(...args: any[]): void;
    /** Print a warning message */
    warn(...args: any[]): void;
    /** Print an info message */
    info(...args: any[]): void;
    /** Print a debug message */
    debug(...args: any[]): void;
}