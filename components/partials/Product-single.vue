<template>
  <li ref="product" class="product-single" :class="hasHover ? 'has-hover' : ''">
    <div class="product-single__product-container">
      <img ref="image" :src="`/images/${data.image.path}`" :alt="data.image.alt" :style="{ width: data.image.width }" class="product-single__image">
      <div class="product-single__circle-container">
        <div v-for="(circle, index) in 3" ref="circles" :key="index" :class="`product-single__circle-${index + 1}`" class="product-single__circle" />
      </div>

      <span ref="title" class="small-heading product-single__title" :class="`product-single__title-${currentIndex % 2 === 0 ? 'left' : 'right'}`">{{ data.title }}</span>
    </div>

    <div ref="button" class="product-single__button-animation">
      <nuxt-link :to="data.path" class="button small-heading product-single__button" @mouseover.native="_mouseOverToggle" @mouseleave.native="_mouseOverToggle">
        {{ button }}
      </nuxt-link>
    </div>
  </li>
</template>

<script>
import gsap from 'gsap'
import isElementInView from '@/helpers/isElementInView'

export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    button: {
      type: String,
      required: true
    },
    currentIndex: {
      type: Number,
      required: true
    },

    mouse: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      tl: gsap.timeline({ paused: true }),
      hasHover: false,
      inViewAnimationDone: false
    }
  },

  mounted () {
    this._setupTimelines()
    this._setupEventListeners()

    if (isElementInView(this.$refs.product)) this._inViewAnimation()
  },

  methods: {
    _setupTimelines () {
      gsap.set(this.$refs.circles, { scale: 0.0 })
      gsap.set(this.$refs.image, { opacity: 0.0 })
      gsap.set(this.$refs.title, { opacity: 0.0 })
      gsap.set(this.$refs.button, { opacity: 0.0, y: 30 })
      gsap.set(this.$refs.product, { opacity: 1.0 })

      this.tl.eventCallback('onComplete', this._timelineCompleteHandler)
      this.tl.to(this.$refs.circles, { scale: 1.0, stagger: 0.1, ease: 'back.out(1.1)', duration: 1.7 }, 0.3)
      this.tl.to(this.$refs.image, { scale: 1.0, opacity: 1.0, duration: 0.3 }, 1.1)
      this.tl.to(this.$refs.title, { opacity: 1.0, duration: 1.3 }, 1.0)
      this.tl.to(this.$refs.button, { opacity: 1.0, y: 0, duration: 0.3 }, 1.0)
    },

    _inViewAnimation () {
      if (this.inViewAnimationDone) return

      this.tl.play()
      this.inViewAnimationDone = true
    },

    _setupEventListeners () {
      window.addEventListener('scroll', this._scrollHandler)
    },

    _mouseOverToggle () {
      this.hasHover = !this.hasHover
    },

    _timelineCompleteHandler () {
      gsap.set([...this.$refs.circles, this.$refs.image, this.$refs.title, this.$refs.button], { clearProps: 'all' })
      for (let i = 0; i < this.$refs.circles.length; i++) this.$refs.circles[i].style.transition = 'transform 0.5s ease-in-out'
      this.tl.kill()
    },

    _scrollHandler () {
      if (isElementInView(this.$refs.product)) this._inViewAnimation()
    }
  }
}
</script>

<style lang="scss" scoped>
.product-single {
  position: relative;

  opacity: 0;
}

.product-single__product-container {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: rem(51px);

  width: rem(418px);
  height: rem(418px);
}

.product-single__circle-container {
  position: absolute;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  opacity: 0.6;
}

.product-single__circle {
  position: absolute;

  border-radius: 100%;

  background: $color-white;

  &-1 {
    width: 100%;
    height: 100%;

    opacity: 0.15;
    z-index: 1;
  }

  &-2 {
    width: rem(355px);
    height: rem(355px);

    opacity: 0.25;
    z-index: 2;
  }

  &-3 {
    height: rem(300px);
    width: rem(300px);

    opacity: 0.35;
    z-index: 3;
  }
}

.product-single__image {
  width: 100%;

  z-index: 4;

  transition: transform 0.4s ease-in-out;
}

.product-single__title {
  display: flex;
  position: absolute;
  justify-content: center;

  height: 100%;
  width: 100%;

  text-align: center;

  transform: rotate(-90deg);

  &-left {
    left: rem(-44px);
  }

  &-right {
    right: rem(-44px);
    align-items: flex-end;
  }
}

.product-single__button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: rem(152px);
  height: rem(66px);

  margin: 0 auto rem(127px);

  letter-spacing: 2.6;
  text-align: center;
  text-decoration: none;

  transition: transform 0.2s ease-in-out;

  &:after {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: url('~assets/svg/button.svg');

    z-index: -1;

    content: '';
  }

  &:hover {
    transform: scale(1.1);
  }
}

.has-hover {
  .product-single__image {
    transform: translateY(rem(-4px)) scale(1.02);
  }

  .product-single__circle {
    &-1 {
      transform: scale(0.98);
    }
    &-2 {
      transform: scale(0.97);
    }
    &-3 {
      transform: scale(0.93);
    }
  }
}
</style>
