<template>
  <footer class="footer">
    <img src="~/assets/svg/scribble_text.svg" alt="Scribble text" class="footer__image-scribble">
    <img src="~/assets/svg/TOMMY_FLAG.svg" alt="Tommy Hilfiger flag" class="footer__image-flag">
    <img src="/images/would-you-love-me.png" alt="Would you love me" class="footer__image-one">
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  position: relative;

  margin-bottom: rem(150px);

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: rem(702px);
    height: rem(702px);

    background: radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 65%);

    opacity: 0.11;

    z-index: -1;
    content: '';
    filter: blur(30px);
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    right: rem(175px);
    transform: translate(calc(-50% + 175px), calc(-50% + -95px));

    width: rem(510px);
    height: rem(510px);

    background: radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 65%);

    opacity: 0.11;

    z-index: -1;
    content: '';
    //mix-blend-mode: overlay;
  }
}
.footer__image-scribble {
  position: absolute;
  top: rem(-295px);
  right: rem(289px / 2);

  z-index: -1;
}

.footer__image-flag {
  display: block;
  margin: 0 auto;
}

.footer__image-one {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: rem(796px);
}
</style>
