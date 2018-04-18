<template>
  <div class="main-wrapper">
    <app-header></app-header>
    <main>
      <article>
        <h2 class="uk-text-center uk-heading-line uk-heading-primary"><span>Saved Headlines</span></h2>
        <section class="uk-section uk-section-default">
          <div uk-grid uk-height-match="target: > div > div > .uk-card"
               class="uk-flex-1 uk-child-width-1-3@m uk-child-width-1-1\@s uk-grid-medium uk-flex-center uk-grid-margin">
            <div class="" v-if="headlines.length === 0">
              <p>No Headlines Saved</p>
            </div>
            <div v-for="headline in headlines">
              <div>
                <div class="uk-card uk-card-default source-wrapper">
                  <div class="uk-card-media-top">
                    <img class="uk-responsive-width" :src="headline.urlToImage" alt="">
                  </div>
                  <div class="uk-card-body">
                    <h3 class="uk-card-title uk-text-truncate"> {{headline.title}}</h3>
                    <p class="uk-text-break"> {{headline.description}}</p>
                  </div>
                  <div class="uk-card-footer">
                    <a :href="headline.url" target="_blank">Read More...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
    <app-footer></app-footer>
  </div>
</template>
<script>

  // instantiate indexedDb
  import db from './../assets/js/dexie';

  export default {
    name: 'Favorites',
    data() {
      return {
        headlines: {},
      };
    },
    beforeMount() {
      db.favorites.toArray().then((val) => {
        this.headlines = val;
      });
    },
    mounted() {

    },
    methods: {},
  };
</script>

<style scoped>

</style>
