// TypeScript definitions for Klaro! Consent Manager
// Extends the global Window interface to include klaro

declare module 'klaro' {
  export function setup(config: any): void;
  export function show(config?: any, modal?: boolean): void;
  export function getManager(config?: any): any;
  export const version: string;
}

declare module 'klaro/dist/klaro.css' {
  const content: any;
  export default content;
}

declare global {
  interface Window {
    klaro?: {
      show: (config?: any, modal?: boolean) => void;
      getManager: (config?: any) => any;
      version: string;
    };
    klaroConfig?: any;
  }
}

export {};
