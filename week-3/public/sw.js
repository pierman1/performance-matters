var cacheName = 'v1';
var cacheFiles = [
    './css/main.css',
    'http://fonts.googleapis.com/css?family=Slabo+27px|Source+Sans+Pro',
    'http://fonts.googleapis.com/css?family=Inconsolata'
];

console.log('sw');

// install event
self.addEventListener('install', function (e) {
    console.log("[Service Worker] Installed")

    e.waitUntil(

        caches.open(cacheName).then(function (cache) {

            console.log("[ServiceWorker] Caching cache");
            return cache.addAll(cacheFiles);
        })

    )
})

// install event
self.addEventListener('activate', function (e) {
    console.log("[Service Worker] Installed")
})

// install event
self.addEventListener('fetch', function (e) {
    console.log("[Service Worker] Fetching", e.request.url)
})