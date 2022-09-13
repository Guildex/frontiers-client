export const isRunningBrowser = typeof window !== 'undefined';

export const isTouchDisplay = isRunningBrowser && window.ontouchend;
