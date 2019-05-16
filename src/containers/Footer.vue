<template>
  <footer>
    <b-container>
      <div style="text-align: left">
        <div>
          <img width="100" height="64" :src="euLogo" alt="Eu_Logo">
          <br>
          <br>
          <div style="color: #fff">{{ $t('FOOTER_TEXT_1') }}</div>
        </div>
        <br>
        <div style="color: #fff;">{{ $t('FOOTER_TEXT_2') }}</div>
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
  margin-top: 30px;
}
</style>