// API Configuration
// These constants will be replaced by esbuild during build
declare const __API_BASE_URL__: string;

export const API_BASE_URL = __API_BASE_URL__ || 'https://le-social-api.carl-g-bisaillon.workers.dev';

// Environment check
// These constants will be replaced by esbuild during build
declare const __DEV__: boolean;
declare const __PROD__: boolean;

export const isDevelopment = __DEV__ || false;
export const isProduction = __PROD__ || true;
