<template>
  <div class="avatar" :style="style">
    <svg viewBox="0 0 220 220">
      <text transform="matrix(1 0 0 1 110 144)" text-anchor="middle">
        <slot></slot>
      </text>
    </svg>
  </div>
</template>

<!--/////////////////////////////////////////////////////////////////////////-->

<script>
export default {
  name: 'avatar',
  props: ['initials', 'color'],
  computed: {
    style() {
      return {
        background: this.color
      }
    }
  }
}
</script>

<!--/////////////////////////////////////////////////////////////////////////-->

<style scoped>
svg {
  display: block;
  width: 100%;
  background-blend-mode: overlay;
}
svg text {
  fill: currentColor;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  font-size: 105.0759px;
}
</style>