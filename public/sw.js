const staticAnimeApp = "Anime List PWA v1";

const assets = [
    '/',
    '/completed',
    '/user'
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticAnimeApp).then(cache=>{
            cache.addAll(assets)
        })
    )
})
self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
});

