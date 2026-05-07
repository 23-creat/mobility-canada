declare global {
  interface Window {
    fbq: (action: string, event: string, params?: object) => void;
  }
}
export {};
