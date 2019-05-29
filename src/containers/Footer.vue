<template>
  <footer>
    <b-container>
      <div style="text-align: left">
        <!-- <img width="70" height="auto" :src="euLogo" alt="Eu_Logo"> -->
        <div style="text-align: center;">
          <span style="color: #fff;">{{ $t('FOOTER_TEXT_1') }}</span>
          <span style="color: #fff;">&copy;</span>
          <span style="color: #fff;">{{ $t('FOOTER_TEXT_2') }}</span>
        </div>
      </div>
    </b-container>
  </footer>
</template>

<script>
import euLogo from '@/assets/EU.jpg';

export default {
  name: 'Footer',
  data() {
    return {
      euLogo,
    };
  },
};
</script>

<style scoped>
footer {
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px 0;
  background: #0a0a2d;
}
</style>