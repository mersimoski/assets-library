/// <reference types="vite/client" />

declare module '*.svg?react' {
    import * as React from 'react';
    const src: React.FC<React.SVGProps<SVGSVGElement>>;
    export default src;
}
