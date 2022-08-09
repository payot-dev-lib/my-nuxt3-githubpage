import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: ['@vueuse/nuxt'],
  app: {
    baseURL: '/my-nuxt3-githubpage/'
  }
});
