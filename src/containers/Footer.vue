<template>
  <footer>
    <b-container>
      <div style="text-align: left">
        <div style="display: flex">
          <img width="70" height="46" class="mr-3" :src="euLogo" alt="Eu_Logo" style="display: inline">
          <span>
            <span style="color: #fff;">{{ $t('FOOTER_TEXT_1') }}</span>
            <!-- <span style="color: #fff;">&copy;</span> -->
            <span style="color: #fff;">{{ $t('FOOTER_TEXT_2') }}</span>
          </span>
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
  background: #141e3a;
  font-family: 'Open Sans', 'BPG Glaho WEB Caps', sans-serif;
}
</style>