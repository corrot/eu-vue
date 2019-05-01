<template>
  <div>
    <b-row>
      <b-col md="4" class="py-4">
        <a href="https://parliament.ge" target="_blank">
          <img
            id="button-1"
            variant="outline-success"
            src="http://www.parliament.ge/res/app/imgs/logo_ge.png"
          >
        </a>
      </b-col>
    </b-row>

    <!-- Tooltip title specified via prop title -->
    <b-tooltip target="button-1">საქართველოს პარლამენტი</b-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Links',
};
</script>

<style lang="postcss" scoped>
</style>