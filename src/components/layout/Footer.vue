<template>
  <footer>
    <div class="uk-section uk-section-secondary uk-padding-small uk-margin-remove">
      <p>Headlines App</p>
      <small class="uk-text-muted">
        {{ year }}
      </small>
    </div>
  </footer>
</template>

<script>
  const year = new Date().getFullYear();
  export default {
    name: 'app-footer',
    data() {
      return {
        year,
      };
    },
  };
</script>

<style scoped>

</style>
