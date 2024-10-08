/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare module 'flubber';

interface ImportMetaEnv {
    readonly NEON_URL: string
    readonly SENDGRID_API_KEY: string
    readonly TEMPLATE_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}