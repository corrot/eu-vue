<template>
  <div class="social">
    <ul class="social-container">
      <li>
        <a class="btn-social fb" href="https://facebook.com" title="Facebook" target="_blank">
          <font-awesome-icon class="fa" :icon="['fab', 'facebook']"/>
        </a>
      </li>
      <li>
        <a class="btn-social twitter" href="https://twitter.com" title="Twitter" target="_blank">
          <font-awesome-icon class="fa" :icon="['fab', 'twitter']"/>
        </a>
      </li>
      <li>
        <a class="btn-social youtube" href="https://youtube.com" title="Youtube" target="_blank">
          <font-awesome-icon class="fa" :icon="['fab', 'youtube']"/>
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
.social-container {
  display: flex;
  margin-top: 20px;
  float: right;
}

.btn-social {
  padding: 5px 8px;
  text-align: center;
  color: #fff !important;
}
.btn-social.fb {
  background: #405d9b;
}
.btn-social.twitter {
  background: #1da1f2;
}
.btn-social.youtube {
  background: #f01111;
}
.btn-social.fb:hover {
  background: #405d9bcc;
}
.btn-social.twitter:hover {
  background: #1da1f2cc;
}
.btn-social.youtube:hover {
  background: #f01111cc;
}
</style>