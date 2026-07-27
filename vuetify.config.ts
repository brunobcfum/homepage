import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

// Two semantic text colours, defined per theme so they follow the light/dark
// switch. A single fixed value cannot serve both a white card and a #212121
// one — that is what made the previous text-blue-grey-lighten-1 / text-teal
// pair hard to read at one end or the other. Contrast against the card surface:
//
//              light (#FFFFFF)   dark (#212121)
//   prose          9.65:1            8.45:1
//   label          6.61:1            6.60:1
//
// WCAG AA needs 4.5:1 at this text size. Labels sit deliberately below prose
// so the teal reads as a section marker rather than competing with body copy.
export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          prose: '#37474F',
          label: '#00695C',
        },
      },
      dark: {
        colors: {
          prose: '#B0BEC5',
          label: '#4DB6AC',
        },
      },
    },
  },
})
