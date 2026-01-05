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

  css: [],
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
      title: 'BCFerreira',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Personal website.' }
      ]
    }
  }
})