/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare module 'flubber';

interface ImportMetaEnv {
    readonly SUPABASE_URL: string
    readonly SUPABASE_ANON_KEY: string
    readonly SENDGRID_API_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}