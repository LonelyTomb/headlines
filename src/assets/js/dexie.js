//  IndexedDB wrapper for vuejs
import Dexie from 'dexie';
//  Instantiate headlines database
const db = new Dexie('headlines');

//  Instantiate indexedDb tables
db.version(1).stores({
  headlinesHome: '++id', //  Auto increment id
  sources: '++id',
  sourcesHeadlines: '',
  countryHeadlines: '',
  favorites: '++id,author,source.name', // auto increment id, index by name
});

export default db;
