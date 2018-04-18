//  IndexedDB wrapper for vuejs
import Dexie from 'dexie';
//  Instantiate headlines database
const db = new Dexie('headlines');

//  Instantiate indexedDb tables
db.version(1).stores({
  headlinesHome: '++id',
  sources: '++id',
  sourcesHeadlines: '',
  countryHeadlines: '++id',
  favorites: '++id',
});

export default db;
