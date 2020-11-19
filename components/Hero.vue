<template>
  <section class="hero">
    <div class="hero__container">
      <img src="~/assets/svg/HER_LOGO.svg" alt="HER logo" class="hero__logo">
      <p class="hero__content paragraph">
        {{ hero.content }}
      </p>
      <img src="~/assets/svg/HERO_DRAW_LINE.svg" alt="HER draw line" class="hero__draw-line">
      <img src="~/assets/svg/finger.svg" alt="Big green finger" class="hero__finger">
      <img ref="image_loyalty" src="~/assets/svg/loyalty.svg" alt="Big green finger" class="hero__loyalty">
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'
import { hero } from '@/static/content.json'

export default {
  props: {
    mouse: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      hero
    }
  },

  watch: {
    mouse: {
      handler (val) {
        this._updateMousePosition(val)
      }
    }
  },

  methods: {
    _updateMousePosition (val) {
      gsap.to(this.$refs.image_loyalty, { x: (val.normalize.x * 3.5) * -1, y: (val.normalize.y * 3.5) * -1, duration: 0.1 })
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  &:before {
    position: absolute;
    top: rem(-156px);
    left: rem(-387px);

    width: rem(921px);
    height: rem(883px);

    background: url('/images/stars-masked-1.png');
    background-size: cover;

    opacity: 0.13;
    content: '';
  }

  &:after {
    position: absolute;
    top: rem(-138px);
    right: rem(-339px);

    width: rem(921px);
    height: rem(883px);

    background: url('/images/stars-masked-1.png');
    background-size: cover;

    opacity: 0.15;
    content: '';
  }
}

.hero__container {
  position: relative;

  width: 100%;
  max-width: rem($container-small);

  margin: rem(100px) auto rem(255px);
}

.hero__logo {
  height: rem(36px);
  width: auto;

  margin: 0 0 rem(30px) rem(-5px);
}

.hero__content {
  width: 100%;
  max-width: rem(455px);

  padding: 0 0 rem(40px) rem(18px);

  &:before {
    position: absolute;
    top: rem(-300px);
    left: 0;

    width: rem(702px);
    height: rem(702px);

    background: radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 65%);

    opacity: 0.11;

    z-index: -1;
    content: '';
    // mix-blend-mode: overlay;
  }
}

.hero__draw-line {
  width: rem(147px);

  margin-left: rem(-13px);
}

.hero__finger {
  position: absolute;
  top: rem(-33px);
  right: rem(22px);

  height: rem(231px);
}

.hero__loyalty {
  position: absolute;
  top: rem(-44px);
  right: rem(65px);

  width: rem(475px);
}
</style>
