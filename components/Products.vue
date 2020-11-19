<template>
  <section class="products">
    <img ref="image_unity" src="~/assets/svg/unity.svg" alt="Unity sign" class="products__image-unity">
    <div class="products__flare" />
    <div class="products__container">
      <img src="~/assets/svg/rise.svg" alt="Still I rise emblem" class="products__rise">
      <ul class="products__list">
        <template v-for="(item, index) in products.items">
          <ProductSingle
            :key="index"
            :data="item"
            :button="products.button.text"
            :current-index="index"
            :mouse="mouse"
            :class="`products__single products__single-${index + 1}`" />
        </template>
      </ul>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap'

import { products } from '@/static/content.json'
import ProductSingle from '@/components/partials/Product-single'

export default {
  components: { ProductSingle },

  props: {
    mouse: {
      type: Object,
      default: () => {}
    }
  },

  data () {
    return {
      products
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
      gsap.set(this.$refs.image_unity, { x: (val.normalize.x * 5.5) * -1, y: (val.normalize.y * 5.5) * -1 })
    }
  }
}
</script>

<style lang="scss" scoped>
.products {
  position: relative;

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;

    width: rem(1402px);
    height: rem(934px);

    transform: translate3d(-50%, -50%, 0);

    background: url('/images/stars-masked-1.png');
    background-size: 100% 100%;

    z-index: -1;
    opacity: 0.11;
    content: '';
    // mix-blend-mode: screen;
  }

  &:after {
    position: absolute;
    top: rem(50px);
    left: rem(542px);

    width: rem(1402px);
    height: rem(542px);

    background: url('/images/stars-masked-2.png');
    background-size: 100% 100%;

    z-index: -1;
    opacity: 0.08;
    content: '';
    // mix-blend-mode: multiply;
  }
}

.products__image-unity {
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  z-index: -2;
}

.products__flare {
  &:before {
    position: absolute;
    top: 0;
    right: rem(160px);

    width: rem(702px);
    height: rem(702px);

    background: radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 65%);

    opacity: 0.05;

    z-index: -1;
    content: '';
    // mix-blend-mode: overlay;
  }

  &:after {
    position: absolute;
    left: 0;
    bottom: 0;

    width: rem(702px);
    height: rem(702px);

    background: radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 65%);

    opacity: 0.11;

    z-index: -1;
    content: '';
    // mix-blend-mode: overlay;
  }
}

.products__container {
  position: relative;

  max-width: rem($container);

  margin: 0 auto rem(43px);
  padding: 0 rem(44px) rem(261px);

  // background: rgba(0, 0 ,0, 0.2);
}

.products__rise {
  position: absolute;
  top: rem(-70px);
  left: percentage(190 / 1044);

  width: rem(149px);
}

.products__list {
  display: flex;

  flex-wrap: wrap;
}

.products__single:nth-child(odd) {
  transform: translateY(rem(261px));
}

.products__single:nth-child(even) {
  margin-left: auto;
}
</style>
