// src/config/env.ts

interface EnvConfig {
  APP_NAME: string;
  PLATFORM_NAME: string;
  CONTACT_PHONE_NUMBER: string; // formato E.164 → +5571988888888
  CONTACT_PHONE_LABEL: string; // formato humano → +55 (71) 98888‑8888
  CONTACT_EMAIL: string;

  VITE_EMAILJS_SERVICE_ID: string;
  VITE_EMAILJS_TEMPLATE_ID: string;
  VITE_EMAILJS_PUBLIC_KEY: string;
}

export const env: EnvConfig = {
  APP_NAME: import.meta.env.VITE_APP_NAME ?? "Meu portfólio",
  PLATFORM_NAME: import.meta.env.VITE_PLATFORM_NAME ?? "Gothd",
  CONTACT_PHONE_NUMBER:
    import.meta.env.VITE_CONTACT_PHONE_NUMBER ?? "+5571999990000",
  CONTACT_PHONE_LABEL:
    import.meta.env.VITE_CONTACT_PHONE_LABEL ?? "+55 (71) 99999‑0000",
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL ?? "contato@exemplo.com",

  VITE_EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
