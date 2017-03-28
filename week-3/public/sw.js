var cacheName = 'v1';
var cacheFiles = [
    './css/main.css'
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