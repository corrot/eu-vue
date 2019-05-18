<template>
  <div class="server-error">
    <h1>500</h1>
    <h2>{{ $t('InternalServerError') }}</h2>
  </div>
</template>

<script>
export default {
  name: 'ServerError',
};
</script>

<style lang="postcss" scoped>
.server-error {
  text-align: center;
  font-size: 20px;
}

h1 {
  margin: 30px auto 0 auto;
  color: var(--stroke-color);
  font-family: 'Encode Sans Semi Condensed', 'DejaVu Sans Condensed', Verdana,
    sans-serif;
  font-size: 8rem;
  line-height: 10rem;
  font-weight: 200;
  text-align: center;
}
h2 {
  margin: 20px auto 30px auto;
  font-family: 'Encode Sans Semi Condensed', 'DejaVu Sans Condensed', Verdana,
    sans-serif;
  font-size: 1.5rem;
  font-weight: 200;
  text-align: center;
}
h1,
h2 {
  -webkit-transition: opacity 0.5s linear, margin-top 0.5s linear; /* Safari */
  transition: opacity 0.5s linear, margin-top 0.5s linear;
}
</style>