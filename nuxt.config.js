import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Boiling Room',
    titleTemplate: 'Boiling Room | %s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Boiling Room' } //,
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
        defer: true
      }
    ]
  },
  ssr: true,
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/globals.sass', 'swiper/css/swiper.css'],
  target: 'static',

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/lazysizes.client.js',
    { src: '~/plugins/nuxt-swiper-plugin.js', mode: 'client' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxt/image', '@nuxtjs/vuetify'],
  image: {
    // Generate images to `/_nuxt/image/file.png`
    staticFilename: '[publicPath]/images/[name]-[hash][ext]'
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/robots',
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap'
  ],
  styleResources: {
    sass: ['~/assets/globals.sass']
  },
  content: {
    // Options
  },
  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/globals.sass'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  generate: {
    fallback: true
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['font'].includes(type)
      }
    }
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  sitemap: {
    hostname: 'https://boilingroom.netlify.app'
  }
}
