// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: [
    "~/assets/css/index.css",
  ],
  modules: [
    "@nuxtjs/tailwindcss",
    "@vesp/nuxt-fontawesome",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@pinia/nuxt"
  ],  
  app: {
    head:{
      script:[
        {src: "https://accounts.google.com/gsi/client", async: true}
      ],
      meta:[
        {property: "og:title", content: import.meta.env.VITE_NOMBRE},
        {property: "og:description", content: "Portafolio de mis habilidades y experiencias"},
        {property: "og:image", content: "https://swansoftwaresolutions.com/wp-content/uploads/2020/04/05.14.20-Meet-a-Full-Stack-Developer-Vlad-Ryba.jpg"},
        {property: "og:url", content: "https://davidostos.netlify.app/"}

      ],
      link: [
        { rel: "preconnect" , href: "https://fonts.gstatic.com" },
        { rel: "stylesheet" , href: "https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New&display=swap"}
      ],
    }
  },
  fontawesome: {
    icons: {
      solid: ['moon', 'sun', 'bars','circle-down', 'map-marker', 'briefcase','house'],
      brands: ['linkedin', 'github', 'whatsapp','square-js', 'react', 'facebook', 'twitter', 'dribbble'],
      regular: ['file-lines']
    }
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: ''
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
  }
  
})