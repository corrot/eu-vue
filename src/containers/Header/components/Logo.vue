<template>
  <div class="logo">
    <router-link :to="`/`" class="logo-wrapper">
      <img :src="headerLogo" id="logo-image" />
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
.logo {
  display: inline;
}

#logo-image {
  width: 100px;
  height: auto;
}

@media (max-width: 992px) {
  .logo {
    width: 100%;
    position: relative;
    height: 60px;
  }
  .logo-wrapper {
    position: relative;
    left: calc(50% - 30px);
  }
  #logo-image {
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
  }
}
</style>