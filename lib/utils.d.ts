export declare const isIos: boolean;
export declare const isAndroid: boolean;
export declare const enableULink: boolean;
export declare const enableApplink: boolean;
export declare const inWeixin: boolean;
export declare const inQQ: boolean;
export declare const inWeibo: boolean;
export declare const inBaidu: boolean;
export declare const isIOSWithLocationCallSupport: boolean;
export declare const isAndroidWithLocationCallSupport: boolean;
/**
 * location call
 * @param url
 */
export declare const locationCall: (url: string) => void;
/**
 * 宿主环境是否支持link
 */
export declare const supportLink: () => boolean;
/**
 * iframe call
 * @param url
 */
export declare const iframeCall: (url: string) => void;
/**
 * merge object
 */
export declare const deepMerge: (firstObj: any, secondObj: any) => any;
