<template>
  <div class="main-wrapper">
    <app-header></app-header>
    <main>
      <h2 class="uk-text-center uk-heading-line"><span v-if="headlines.length > 0">Headlines from {{ headlines[0].source.name }}</span>
      </h2>
      <section class="uk-section uk-section-default">
        <div uk-grid uk-height-match="target: > div > .uk-card"
             class="uk-flex-1 uk-child-width-1-3@m uk-child-width-1-1\@s uk-grid-medium uk-flex-center uk-grid-margin">
          <div class="" v-if="headlines.length === 0">
          </div>
          <div v-for="headline in headlines">
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
                <button class="uk-button uk-button-secondary uk-align-right" @click="addToFavorites(headline)">Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
  //  NewsApi config file
  import newsapi from './../assets/js/newsApi';
  //  Instantiate indexedDb
  import db from './../assets/js/dexie';

  export default {
    name: 'sources',
    data() {
      return {
        source: this.$route.params.id,
        country: 'us',
        headlines: {},
      };
    },
    beforeMount() {
      newsapi.v2.topHeadlines({
        sources: this.source,
      }).then((data) => {
        this.headlines = data.articles;
        //  Store the headlines with the source as id
        db.sourcesHeadlines.put(this.headlines, this.source);
      }).catch(() => {
        //  If offline, get Data from indexedDb using the source as id
        db.sourcesHeadlines.get(this.source).then((val) => {
          this.headlines = val;
        });
      });
    },
    mounted() {
    },
    methods: {
      addToFavorites(headline) {
        db.favorites.put(headline);
      },
      formatDate(date) {
        return new Date(date);
      },
    },
  };
</script>

<style scoped>

</style>
