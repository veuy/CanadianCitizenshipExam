// Cache name — change this version number whenever you update files
const CACHE_NAME = 'citizenship-exam-v1';

// List of all files the app needs to work offline
const FILES_TO_CACHE = [
    '.',
    'index.html',
    'css/app.css',
    'js/app.js',
    'data/questions.js',
    'manifest.json'
];

// INSTALL event — fires when the service worker is first installed
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
});

// ACTIVATE event — clean up old caches from previous versions
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (name !== CACHE_NAME) {
                        return caches.delete(name);
                    }
                })
            );
        })
    );
});

// FETCH event — intercept every network request
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Return cached file if it exists, otherwise try network
            return cachedResponse || fetch(event.request);
        })
    );
});
