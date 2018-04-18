<template>
  <div class="main-wrapper">
    <app-header></app-header>
    <main>
      <article>
        <h2 class="uk-text-center uk-heading-line uk-heading-primary"><span>Headlines from <span
          class="uk-text-capitalize">{{ country }}</span></span></h2>
        <div>
          <form action="" class="uk-text-right">
            <div uk-form-custom="target: > * > span:first-child" class="uk-padding-small">
              <select name="countries" id="countries" v-model="cntry" @change="ctry(cntry)">
                <option value="">Country</option>
                <option v-for="country in countries" :value="country">{{ country }}</option>
              </select>
              <button class="uk-button uk-button-secondary" type="button" tabindex="-1">
                <span></span>
                <span uk-icon="icon: chevron-down"></span>
              </button>
            </div>
          </form>
        </div>
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
  //  NewsApi config file
  import newsapi from './../assets/js/newsApi';
  // instantiate indexedDb
  import db from './../assets/js/dexie';

  import countries from './../assets/js/country.json';

  export default {
    name: 'headlines',
    data() {
      return {
        country: this.$route.params.country,
        countries,
        cntry: '',
        headlines: {},
      };
    },
    beforeMount() {
      newsapi.v2.topHeadlines({
        country: this.country,
      }).then((data) => {
        this.headlines = data.articles;
        //  Store returned data in indexedDb for offline access
        db.countryHeadlines.put(this.headlines, this.country);
      }).catch(() => {
        //  If offline, get Data from indexedDb
        db.countryHeadlines.get(this.country).then((val) => {
          this.allHeadlines = val;
        });
      });
    },
    mounted() {
    },
    methods: {
      ctry(ct) {
        this.country = ct;
        newsapi.v2.topHeadlines({
          country: this.country,
        }).then((data) => {
          this.headlines = data.articles;
          //  Store returned data in indexedDb for offline access
          db.countryHeadlines.put(this.headlines, this.country);
        }).catch(() => {
          //  If offline, get Data from indexedDb
          db.countryHeadlines.get(this.country).then((val) => {
            this.allHeadlines = val;
          });
        });
      },
    },
  };
</script>

<style scoped>

</style>
