<template>
  <nav class="uk-navbar-container uk-margin uk-flex" uk-navbar>
    <div class="uk-navbar-left">

      <a class="uk-navbar-item uk-logo" href="#">Headlines</a>
    </div>
    <div class="uk-navbar-right">
      <div>
        <a class="uk-navbar-toggle" href="#" uk-search-icon></a>
        <div class="uk-navbar-dropdown" uk-drop="mode: click; cls-drop: uk-navbar-dropdown; boundary: !nav">
          <div class="uk-grid-small uk-flex-middle" uk-grid>
            <div class="uk-width-expand">
              <form class="uk-search uk-search-navbar uk-width-1-1">
                <input class="uk-search-input" type="search" placeholder="Search..." autofocus>
              </form>
            </div>
            <div class="uk-width-auto">
              <a class="uk-navbar-dropdown-close" href="#" uk-close></a>
            </div>
          </div>

        </div>
      </div>

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
