<template>
  <main class="home">
    <Background />
    <Hero :mouse="mouse" />
    <Products :mouse="mouse" />
    <Footer />
  </main>
</template>

<script>
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Footer from '@/components/Footer'

import Background from '@/components/Background'
import locomotive from '~/mixins/locomotiveScroll.js'

export default {
  components: { Hero, Products, Footer, Background },

  mixins: [locomotive],

  data () {
    return {
      mouse: {}
    }
  },

  mounted () {
    // this.initScroll()
    this._setupEventListners()
  },

  beforeDestroy () {
    window.removeEventListener('mousemove', this._updateMousePosition)
  },

  methods: {
    _setupEventListners () {
      this._mouseMoveHandler()
    },

    _updateMousePosition (value) {
      const { clientX, clientY } = event

      const xNormalized = (clientX / window.innerWidth) * 2 - 1
      const yNormalized = (clientY / window.innerHeight) * 2 - 1

      this.mouse = {
        x: clientX,
        y: clientY,
        normalize: {
          x: xNormalized,
          y: yNormalized
        },
        ...event
      }
    },

    // Handlers

    _mouseMoveHandler () {
      window.addEventListener('mousemove', this._updateMousePosition)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
