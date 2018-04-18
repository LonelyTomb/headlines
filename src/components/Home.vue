<template>
  <div class="main-wrapper">
    <app-header></app-header>
    <main>
      <section class="uk-section uk-section-muted uk-margin-small-top uk-box-shadow-small uk-padding-small">
        <h2 class="uk-heading-primary uk-heading-line uk-text-center"><span>Top Headlines</span></h2>
        <div uk-slider="center: true">
          <small>Country:US</small>
          <div class="uk-position-relative uk-visible-toggle uk-dark">
            <ul class="uk-slider-items uk-child-width-1-3@s uk-grid uk-grid-medium uk-grid-margin"
                uk-height-match="target:
        allHeadlines: [], > li > .uk-card">
              <li v-if="allHeadlines.length === 0"></li>
              <li v-for="hd in allHeadlines">
                <div class="uk-card uk-card-default uk-card-hover">
                  <div class="uk-card-media-top">
                    <img class="uk-responsive-width" :src="hd.urlToImage" alt="">
                  </div>
                  <div class="uk-card-body">
                    <h3 class="uk-card-title uk-text-truncate"> {{hd.title}}</h3>
                    <p class="uk-text-break"> {{hd.description}}</p>
                  </div>
                  <div class="uk-card-footer">
                    <a :href="hd.url" target="_blank">Read More...</a>
                  </div>
                </div>
              </li>
            </ul>
            <a class="uk-position-center-left uk-position-small uk-hidden-hover uk-slidenav-large" href="#"
               uk-slidenav-previous
               uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small uk-hidden-hover uk-slidenav-large uk-dar" href="#"
               uk-slidenav-next
               uk-slider-item="next"></a>

          </div>
          <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
        <div class="uk-text-right">
          <router-link :to="{name:'sources-list'}">
            <button class="uk-button uk-button-default">View All Headlines</button>
          </router-link>

        </div>
      </section>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>

  import Dexie from 'dexie';
  import newsapi from './../assets/js/newsApi';

  const db = new Dexie('hd');
  export default {
    name: 'home',
    data() {
      return {
        allHeadlines: {},
      };
    },
    methods: {},
    beforeMount() {
      newsapi.v2.topHeadlines({
        country: 'us',
      }).then((data) => {
        this.allHeadlines = data.articles;
        const dt = data.articles.map((dl) => {
          if (dl.source.id === null) {
            dl.source.id = dl.source.name;// eslint-disable-line
          }
          return dl;
        });
        dt.forEach((dl) => {
          db.headlinesHome.put(dl);
        });
      }).catch(() => {
        db.headlinesHome.toArray().then((val) => {
          this.allHeadlines = val;
        });
      });
    },
    mounted() {
      db.version(1).stores({
        headlinesHome: '++id',
        sources: '++id',
        allHeadlines: '++id',
      });
    },
  };
</script>

<style scoped>

</style>
