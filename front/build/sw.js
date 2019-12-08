if ('function' === typeof importScripts) {
    const externalImagesPrefix=[
        "https://res.cloudinary.com",
        "https://images.unsplash.com"
    ];

    const networkOnlyRoutesPrefix=[
        "https://top-image.herokuapp.com/socket.io"
    ];

    const cacheFirstRoutesPrefix=[
        "https://top-image.herokuapp.com/api"
    ];
    
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
  
        /* Debug config*/
        workbox.setConfig({ debug: true });
        workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);
      
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute([
  {
    "url": "favicon.png",
    "revision": "8cecfb5831592d6acda4e8ffdd66611a"
  },
  {
    "url": "index.html",
    "revision": "e44d1d0f194f053700845f23f6e0cd63"
  },
  {
    "url": "logo192.png",
    "revision": "8e3575dc3866e905ae09be0fe05930f1"
  },
  {
    "url": "logo512.png",
    "revision": "dd9d29871509ac16b6d81a5369df987d"
  },
  {
    "url": "precache-manifest.41722f13c814ff8c60748aeb000cd820.js",
    "revision": "41722f13c814ff8c60748aeb000cd820"
  },
  {
    "url": "service-worker.js",
    "revision": "2de355a50170d763da9cd7ca6ad0ddca"
  },
  {
    "url": "static/css/main.a34605ec.chunk.css",
    "revision": "2efa9216f788583ab2f779e9412ca10a"
  },
  {
    "url": "static/js/2.5e78cd0e.chunk.js",
    "revision": "99f23394399281fb9a6b568bda0a9502"
  },
  {
    "url": "static/js/main.6c6abfcb.chunk.js",
    "revision": "8e6c203351821a330c4ab9a6f17601e1"
  },
  {
    "url": "static/js/runtime~main.e774a519.js",
    "revision": "bf9b6bcf4d2aa873e6a4c9ab056024d9"
  },
  {
    "url": "static/media/autorenew.f4d9cf73.svg",
    "revision": "f4d9cf73dd9243c6be6c0e16224bb7bc"
  },
  {
    "url": "static/media/cameraLogin.ade877c3.jpg",
    "revision": "ade877c3afaf28919598ef5d018c77ee"
  },
  {
    "url": "static/media/cameraMain.666dca49.jpg",
    "revision": "666dca4953c3cfa74f4393cb52e1b225"
  },
  {
    "url": "static/media/dislike.3f1544fc.svg",
    "revision": "3f1544fcbea7cec760e8a85dcc47867c"
  },
  {
    "url": "static/media/dislikeU.921dfa34.svg",
    "revision": "921dfa340b84128931a4e928c78435ac"
  },
  {
    "url": "static/media/go.03b5df92.svg",
    "revision": "03b5df92b067774cbfa6b1291a97f1f8"
  },
  {
    "url": "static/media/goB.df177f23.svg",
    "revision": "df177f232ab8f4bfb84b6fec1c8a5351"
  },
  {
    "url": "static/media/help.840adbfd.svg",
    "revision": "840adbfd201d0a090fd21f84d2e6b828"
  },
  {
    "url": "static/media/like.a467c6a0.svg",
    "revision": "a467c6a087eae74b9a1b7602902b6d31"
  },
  {
    "url": "static/media/likeU.08723e07.svg",
    "revision": "08723e079bc49bce212308c3aa7a89af"
  },
  {
    "url": "static/media/link.e4498435.svg",
    "revision": "e44984354b537481043fe0cd32fbc8d0"
  },
  {
    "url": "static/media/logo.5cc607db.svg",
    "revision": "5cc607db31f4dc48e7dac3a1f900d31e"
  },
  {
    "url": "static/media/magnifying-glass.adf7b08c.svg",
    "revision": "adf7b08c60b741cf837acfb0242f50a5"
  },
  {
    "url": "static/media/menu.aa9d6fc1.svg",
    "revision": "aa9d6fc1b2a1017b1a61d7897a01eb11"
  },
  {
    "url": "static/media/person.0c32117b.svg",
    "revision": "0c32117b17dc8c49b53f338a3e6af326"
  },
  {
    "url": "static/media/private.43959578.svg",
    "revision": "4395957885e753ea2fa5d89d8a3e3d94"
  },
  {
    "url": "static/media/tuto1.d1ae3bc7.png",
    "revision": "d1ae3bc791cf3411ff0d5aacdf9b3157"
  },
  {
    "url": "static/media/tuto10.1d2cd4ef.png",
    "revision": "1d2cd4ef7ce4409d5a968b71c2d0d570"
  },
  {
    "url": "static/media/tuto2.1e3ed942.png",
    "revision": "1e3ed9428ea0a2b99f7a1a30deb765ea"
  },
  {
    "url": "static/media/tuto3.933486e3.png",
    "revision": "933486e32877ad250be5a457e3aaca54"
  },
  {
    "url": "static/media/tuto4.01d93e73.png",
    "revision": "01d93e73d49bcb839999bfb8d9ac63b1"
  },
  {
    "url": "static/media/tuto5-backup.e2c8a7aa.png",
    "revision": "e2c8a7aa403d31b8e1589b2c87a9164c"
  },
  {
    "url": "static/media/tuto5.42414e7e.png",
    "revision": "42414e7ec1fb806430b6b7cd46aad965"
  },
  {
    "url": "static/media/tuto6.4d22a315.png",
    "revision": "4d22a315a522d0b6203ee414705ec52a"
  },
  {
    "url": "static/media/tuto7.45d73162.png",
    "revision": "45d73162f3dccc1b24e3db5d720583ce"
  },
  {
    "url": "static/media/tuto8.d8cace18.png",
    "revision": "d8cace180216be5f663dd9bbfc88591e"
  },
  {
    "url": "static/media/tuto9.aeb9cc60.png",
    "revision": "aeb9cc606c608d9b8c08163bdb0c87a5"
  }
]);

      /* Default CRA service worker msg support*/
      self.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'SKIP_WAITING') {
          self.skipWaiting();
        }
      });
  /* custom cache rules*/
  workbox.routing.registerNavigationRoute('/index.html', {
        blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
      });
  
  workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg|svg)$/,
        workbox.strategies.cacheFirst({
          cacheName: 'images',
          plugins: [
            new workbox.expiration.Plugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
          ],
        })
      );
    
    externalImagesPrefix.forEach(prefix=>{
        workbox.routing.registerRoute(
            new RegExp(`${prefix}/.+`),
            workbox.strategies.cacheFirst({
                cacheName: 'images',
                plugins: [
                new workbox.expiration.Plugin({
                    maxEntries: 60,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                }),
                ],
            })
        );
    })

    networkOnlyRoutesPrefix.forEach(prefix=>{
        workbox.routing.registerRoute(
            new RegExp(`${prefix}/.+`),
            workbox.strategies.networkOnly()
        );    
    })

    cacheFirstRoutesPrefix.forEach(prefix=>{
        workbox.routing.registerRoute(
            new RegExp(`${prefix}/.+`),
            workbox.strategies.cacheFirst({
                    cacheName: 'contests',
                    plugins: [
                    new workbox.expiration.Plugin({
                        maxEntries: 60,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                    }),
                ],
            })
        );    
    })

  
  } else {
      console.log('Workbox could not be loaded. No Offline support');
    }
  }