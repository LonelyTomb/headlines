<template>
  <div class="main-wrapper">
    <app-header></app-header>
    <main>
      <h2 class="uk-heading-line uk-text-center"><span>All News Sources</span></h2>
      <p class="uk-text-center">
        Browse through the existing list on News Headlines sources
      </p>
      <section class="uk-section uk-section-default">
        <div uk-grid uk-height-match="target: > div > .uk-card"
             class="uk-flex-1 uk-child-width-1-3 uk-grid-medium uk-flex-center uk-grid-margin">
          <div class="" v-if="sources.length === 0">
          </div>
          <div v-for="source in sources">
            <div class="uk-card uk-card-default source-wrapper">
              <div class="uk-card-header">
                <h3 class="uk-text-center uk-card-title">{{ source.name }}</h3>
              </div>
              <div class="uk-card-body">
                <span class="uk-card-badge uk-label">{{ source.country }}</span>
                <p>{{ source.description }}</p>

              </div>
              <div class="uk-card-footer">
                <router-link :to="{name:'sources-id',params:{id:source.id}}">View headlines</router-link>
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
  //  Instantiate headlines database
  import db from './../assets/js/dexie';

  export default {
    name: 'sources',
    data() {
      return {
        sources: {},
        language: 'en',
        country: 'us',
      };
    },
    beforeMount() {
      //  Get NewsApi data
      newsapi.v2.sources({
        language: this.language,
        country: this.country,
      }).then((data) => {
        this.sources = data.sources;
        //  Store data gotten in indexedDb
        data.sources.forEach((val) => {
          db.sources.put(val);
        });
      }).catch(() => {
        //  If offline, get Data from indexedDb
        db.sources.toArray().then((val) => {
          this.sources = val;
        });
      });
    },
    mounted() {
    },
    methods: {},
  }
  ;
</script>

<style scoped>

</style>
