export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'robot-kittens',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/scss/main.scss',
    'locomotive-scroll/dist/locomotive-scroll.min.css'
  ],

  styleResources: {
    scss: ['~/scss/*.scss']
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/locomotiveScroll.js',
      ssr: false
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/svg'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [
      'gsap'
    ]
  }
}
