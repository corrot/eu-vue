<template>
  <div class="test">
    <router-link :to="`/`" class="logo-wrapper">
      <b-tooltip target="logo-image" placement="right">Competition Agency of Georgia</b-tooltip>
      <img :src="headerLogo" id="logo-image">
    </router-link>
  </div>
</template>

<script>
import headerLogo from '@/assets/logo.png';

export default {
  name: 'Logo',
  data() {
    return {
      headerLogo,
    };
  },
};
</script>

<style lang="postcss" scoped>
.logo-wrapper {
  width: 136px;
  height: 136px;

  img {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .logo-wrapper img {
    width: 110px;
  }
}
</style>