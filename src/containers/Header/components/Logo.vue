<template>
  <div class="logo">
    <router-link :to="`/`" class="logo-wrapper">
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
.logo {
  display: inline;
}

#logo-image{
  width: 100px;
  height: auto;
}

</style>