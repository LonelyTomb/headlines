<template>
  <header>
    <app-nav></app-nav>
  </header>
</template>

<script>
  import nav from './Nav';

  export default {
    name: 'app-header',
    components: {
      'app-nav': nav,
    },
  };
</script>

<style scoped>

</style>
