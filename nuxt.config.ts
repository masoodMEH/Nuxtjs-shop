// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css:[
    "@/assets/css/custom.css",
    "@/assets/css/theme.css",
  ],
  // alias: {
  //   'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
  //   'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
  //   'data': fileURLToPath(new URL('./assets/other/data', import.meta.url))
  // }
})
