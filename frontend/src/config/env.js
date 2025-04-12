// Fail fast only in browser context
if (typeof import.meta !== 'undefined' &&
    (!import.meta.env.VITE_API_BASE_URL || !/^https?:\/\//.test(import.meta.env.VITE_API_BASE_URL))) {
  throw new Error('VITE_API_BASE_URL must be a valid URL');
}
export const API_BASE_URL = import.meta.env?.VITE_API_BASE_URL ?? '';