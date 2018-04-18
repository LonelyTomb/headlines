<template>
  <nav class="uk-navbar-container uk-margin uk-flex" uk-navbar>
    <div class="uk-navbar-left">
      <router-link :to="{name:'home'}" class="uk-navbar-item uk-logo">Headlines</router-link>
    </div>
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li>
          <router-link :to="{name:'home'}">
            Home
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'sources-list'}">
            Sources
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'favorites'}">
            Favorites
          </router-link>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
  export default {
    name: 'app-nav',
  };
</script>

<style scoped>

</style>
