/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare module 'flubber';

interface ImportMetaEnv {
    readonly NEON_URL: string
    readonly TWILIO_SID: string
    readonly TWILIO_AUTH_TOKEN: string
    readonly TWILIO_NUM: string
    readonly SENDGRID_API_KEY: string
    readonly TEMPLATE_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}