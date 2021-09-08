const CACHE_NAME = 'public-cache';

const urlsToCache = [
    './',
    'index.html',
    'assets/js/app.js',
    'assets/css/style.css',
    'assets/icons/icon-72x72.png',
    'assets/icons/icon-96x96.png',
    'assets/icons/icon-128x128.png',
    'assets/icons/icon-144x144.png',
    'assets/icons/icon-152x152.png',
    'assets/icons/icon-192x192.png',
    'assets/icons/icon-384x384.png',
    'assets/icons/icon-512x512.png',
    'assets/favicons/apple-touch-icon-57x57.png',
    'assets/favicons/apple-touch-icon-60x60.png',
    'assets/favicons/apple-touch-icon-72x72.png',
    'assets/favicons/apple-touch-icon-76x76.png',
    'assets/favicons/apple-touch-icon-114x114.png',
    'assets/favicons/apple-touch-icon-120x120.png',
    'assets/favicons/apple-touch-icon-144x144.png',
    'assets/favicons/apple-touch-icon-152x152.png',
    'assets/favicons/favicon-16x16.png',
    'assets/favicons/favicon-32x32.png',
    'assets/favicons/favicon-96x96.png',
    'assets/favicons/favicon-128x128.png',
    'assets/favicons/favicon-196x196.png',
    'assets/favicons/ms-tile-70x70.png',
    'assets/favicons/ms-tile-144x144.png',
    'assets/favicons/ms-tile-150x150.png',
    'assets/favicons/ms-tile-310x150.png',
    'assets/favicons/ms-tile-310x310.png',
    'assets/favicons/favicon.ico'
];

self.addEventListener('install', evt => {
    console.log('ServiceWorker installing');
    const event = evt as ExtendableEvent;

    // @ts-ignore
    self.skipWaiting();

    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Service Worker caching app shell');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('activate', evt => {
    console.log('Service Worker activating');
    const event = evt as ExtendableEvent;
    event.waitUntil(
        caches
            .keys()
            .then(cacheNames =>
                Promise.all(
                    cacheNames
                        .filter(cacheName => cacheName !== CACHE_NAME)
                        .map(cacheName => caches.delete(cacheName))
                )
            )
    );
});

self.addEventListener('fetch', evt => {
    const event = evt as FetchEvent;
    console.log('Service Worker fetching ', event.request.url);
    caches.match(event.request).then(response => {
        return response || fetch(event.request);
    });
});
