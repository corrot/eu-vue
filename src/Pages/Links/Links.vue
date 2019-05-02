<template>
  <b-container>
    <h1>Links</h1>
    <ul class="links-container">
      <li v-for="link in links" :key="link.id" class="link">
        <a :href="link.path">{{ link.title }}</a>
        <div>{{ link.description }}</div>
      </li>
    </ul>
  </b-container>
</template>

<script>
const links = [
  {
    id: 0,
    title: 'example title 1',
    path: 'https://example.net',
    description:
      'example description that`s supposed to be long enough to run on a new line. Is not it already? Okay - Alright! Let`s go on typing some random stuff... I think it`s alright for now!',
  },
  {
    id: 1,
    title: 'example title 2',
    path: 'https://example.net',
    description: 'example description',
  },
];

export default {
  name: 'Links',
  data() {
    return {
      links,
    };
  },
};
</script>

<style lang="postcss" scoped>
.links-container {
  text-align: left;
}
.link {
  margin-borrom: 30px;
}
</style>