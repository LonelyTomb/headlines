import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

window.UIkit = require('uikit');

UIkit.use(Icons);

// const updateReady = (sw) => {
//   UIkit
//     .modal
//     .confirm('New Version Available')
//     .then(() => {
//       //  Accept
//       sw.postMessage({
//         action: 'skipWaiting',
//       });
//     }, () => {
//       //  Reject
//     });
// };
//
// const trackInstalling = (sw) => {
//   sw.addEventListener('statechange', () => {
//     if (sw.state === 'installed') {
//       return updateReady(sw);
//     }
//     return this;
//   });
// };

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js', {
//     scope: '/',
//   }).then((sw) => {
//     if (sw.waiting) {
//       updateReady(sw.waiting);
//       return;
//     }
//     if (sw.installing) {
//       trackInstalling(sw.installing);
//       return;
//     }
//     sw.addEventListener('updatefound', () => {
//       trackInstalling(sw.installing);
//     });
//   }).catch(() => {
//     // console.log('fail', error);
//   });
//   navigator.serviceWorker.addEventListener('controllerchange', () => {
//     window.location.reload();
//   });
// }
