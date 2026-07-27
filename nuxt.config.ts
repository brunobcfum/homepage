// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,

  // when enabling ssr option you need to disable inlineStyles and maybe devLogs
  features: {
    inlineStyles: false,
    devLogs: false,
  },

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },

  css: ['~/assets/app.scss'],
  modules: ['@nuxt/fonts', 'vuetify-nuxt-module', '@nuxt/eslint'],

  fonts: {
    families: [
      { name: 'Montserrat', provider: 'google' },
      { name: 'Oxygen', weights: [300, 400, 700], provider: 'google' },
      { name: 'Comfortaa', provider: 'google' },
      { name: 'Tangerine', provider: 'google' },
      { name: 'Inconsolata', provider: 'google' },
      { name: 'Droid Sans', provider: 'google' }
    ]
  },

  vuetify: {
    moduleOptions: {
      // Nuxt 4.5 added a built-in useLayout, which collides with Vuetify's.
      // This prefixes the Vuetify composables (useLayout -> useVLayout, and the
      // same for useTheme, useDisplay, useLocale, useDefaults, useRtl, useDate)
      // so the Nuxt built-ins keep their names.
      prefixComposables: true,

      // check https://nuxt.vuetifyjs.com/guide/server-side-rendering.html
      ssrClientHints: {
        reloadOnFirstRequest: false,
        viewportSize: true,
        prefersColorScheme: false,

        prefersColorSchemeOptions: {
          useBrowserThemeOnly: false,
        },
      },

      // /* If customizing sass global variables ($utilities, $reset, $color-pack, $body-font-family, etc) */
      // disableVuetifyStyles: true,
      styles: {
        configFile: 'assets/settings.scss',
      },
      defaultAssets: {
        font: {
          family: 'Montserrat'
        }
      },
    },
  },
    // Add this head configuration for favicon
  app: {
    head: {
      title: 'Bruno Chianca Ferreira — Senior R&D Engineer, Distributed Systems',
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://bcferreira.space/' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Bruno Chianca Ferreira: Senior R&D Engineer at Hitachi Energy in Västerås, Sweden. PhD in distributed computing over dynamic networks. Experience, education, research and publications.' },
        { name: 'author', content: 'Bruno Chianca Ferreira' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
        { property: 'og:type', content: 'profile' },
        { property: 'og:site_name', content: 'bcferreira.space' },
        { property: 'og:url', content: 'https://bcferreira.space/' },
        { property: 'og:title', content: 'Bruno Chianca Ferreira — Senior R&D Engineer, Distributed Systems' },
        { property: 'og:description', content: 'Senior R&D Engineer at Hitachi Energy in Västerås, Sweden. PhD in distributed computing over dynamic networks.' },
        { property: 'og:image', content: 'https://bcferreira.space/avatar.jpg' },
        { name: 'twitter:card', content: 'summary' }
      ],
      noscript: [
        { innerHTML: '<meta http-equiv="refresh" content="0; url=/plain.html">' }
      ]
    }
  }
})