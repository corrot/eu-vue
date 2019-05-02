<template>
  <div>
    <router-link :to="`/`" class="logo-wrapper">
      <img :src="headerLogo">
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
</style>