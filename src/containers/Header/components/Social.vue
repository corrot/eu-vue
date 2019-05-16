<template>
  <div style="display: block">
    <ul class="social-container">
      <li>
        <a href="https://facebook.com" title="Facebook" target="_blank">
          <font-awesome-icon class="fa-2x icon icon-fb" :icon="['fab', 'facebook-square']"/>
        </a>
      </li>
      <li>
        <a href="https://twitter.com" title="Twitter" target="_blank">
          <font-awesome-icon class="fa-2x icon icon-twitter" :icon="['fab', 'twitter-square']"/>
        </a>
      </li>
      <li>
        <a href="https://youtube.com" title="Youtube" target="_blank">
          <font-awesome-icon class="fa-2x icon icon-youtube" :icon="['fab', 'youtube-square']"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import headerLogo from '@/assets/logo.png';

export default {
  name: 'Social',
  components: {},
  data() {
    return {
      headerLogo,
    };
  },
};
</script>

<style lang="postcss" scoped>
.icon{
  width: 25px;
}

.social-container {
  display: flex;
}

.social-container > li {
  margin-left: 10px;
}

.icon-fb > path,
.icon-twitter > path,
.icon-youtube > path {
  transition: 0.3s all ease;
  fill: #2c3e50;
}

.icon-fb:hover > path {
  transition: 0.3s all ease;
  fill: #405d9b;
}

.icon-twitter:hover > path {
  transition: 0.3s all ease;
  fill: #1da1f2;
}

.icon-youtube:hover > path {
  transition: 0.3s all ease;
  fill: #ff0000;
}
</style>