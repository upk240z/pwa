/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./js/service-worker.ts ***!
  \******************************/

var CACHE_NAME = 'public-cache';
var urlsToCache = [
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
self.addEventListener('install', function (evt) {
    console.log('ServiceWorker installing');
    var event = evt;
    // @ts-ignore
    self.skipWaiting();
    event.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
        console.log('Service Worker caching app shell');
        return cache.addAll(urlsToCache);
    }));
});
self.addEventListener('activate', function (evt) {
    console.log('Service Worker activating');
    var event = evt;
    event.waitUntil(caches
        .keys()
        .then(function (cacheNames) {
        return Promise.all(cacheNames
            .filter(function (cacheName) { return cacheName !== CACHE_NAME; })
            .map(function (cacheName) { return caches.delete(cacheName); }));
    }));
});
self.addEventListener('fetch', function (evt) {
    var event = evt;
    console.log('Service Worker fetching ', event.request.url);
    caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGtDQUFrQztBQUM3RSx3Q0FBd0Msa0NBQWtDO0FBQzFFLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvc2VydmljZS13b3JrZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQ0FDSEVfTkFNRSA9ICdwdWJsaWMtY2FjaGUnO1xudmFyIHVybHNUb0NhY2hlID0gW1xuICAgICcuLycsXG4gICAgJ2luZGV4Lmh0bWwnLFxuICAgICdhc3NldHMvanMvYXBwLmpzJyxcbiAgICAnYXNzZXRzL2Nzcy9zdHlsZS5jc3MnLFxuICAgICdhc3NldHMvaWNvbnMvaWNvbi03Mng3Mi5wbmcnLFxuICAgICdhc3NldHMvaWNvbnMvaWNvbi05Nng5Ni5wbmcnLFxuICAgICdhc3NldHMvaWNvbnMvaWNvbi0xMjh4MTI4LnBuZycsXG4gICAgJ2Fzc2V0cy9pY29ucy9pY29uLTE0NHgxNDQucG5nJyxcbiAgICAnYXNzZXRzL2ljb25zL2ljb24tMTUyeDE1Mi5wbmcnLFxuICAgICdhc3NldHMvaWNvbnMvaWNvbi0xOTJ4MTkyLnBuZycsXG4gICAgJ2Fzc2V0cy9pY29ucy9pY29uLTM4NHgzODQucG5nJyxcbiAgICAnYXNzZXRzL2ljb25zL2ljb24tNTEyeDUxMi5wbmcnLFxuICAgICdhc3NldHMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi01N3g1Ny5wbmcnLFxuICAgICdhc3NldHMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi02MHg2MC5wbmcnLFxuICAgICdhc3NldHMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi03Mng3Mi5wbmcnLFxuICAgICdhc3NldHMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi03Nng3Ni5wbmcnLFxuICAgICdhc3NldHMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xMTR4MTE0LnBuZycsXG4gICAgJ2Fzc2V0cy9mYXZpY29ucy9hcHBsZS10b3VjaC1pY29uLTEyMHgxMjAucG5nJyxcbiAgICAnYXNzZXRzL2Zhdmljb25zL2FwcGxlLXRvdWNoLWljb24tMTQ0eDE0NC5wbmcnLFxuICAgICdhc3NldHMvZmF2aWNvbnMvYXBwbGUtdG91Y2gtaWNvbi0xNTJ4MTUyLnBuZycsXG4gICAgJ2Fzc2V0cy9mYXZpY29ucy9mYXZpY29uLTE2eDE2LnBuZycsXG4gICAgJ2Fzc2V0cy9mYXZpY29ucy9mYXZpY29uLTMyeDMyLnBuZycsXG4gICAgJ2Fzc2V0cy9mYXZpY29ucy9mYXZpY29uLTk2eDk2LnBuZycsXG4gICAgJ2Fzc2V0cy9mYXZpY29ucy9mYXZpY29uLTEyOHgxMjgucG5nJyxcbiAgICAnYXNzZXRzL2Zhdmljb25zL2Zhdmljb24tMTk2eDE5Ni5wbmcnLFxuICAgICdhc3NldHMvZmF2aWNvbnMvbXMtdGlsZS03MHg3MC5wbmcnLFxuICAgICdhc3NldHMvZmF2aWNvbnMvbXMtdGlsZS0xNDR4MTQ0LnBuZycsXG4gICAgJ2Fzc2V0cy9mYXZpY29ucy9tcy10aWxlLTE1MHgxNTAucG5nJyxcbiAgICAnYXNzZXRzL2Zhdmljb25zL21zLXRpbGUtMzEweDE1MC5wbmcnLFxuICAgICdhc3NldHMvZmF2aWNvbnMvbXMtdGlsZS0zMTB4MzEwLnBuZycsXG4gICAgJ2Fzc2V0cy9mYXZpY29ucy9mYXZpY29uLmljbydcbl07XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2luc3RhbGwnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgY29uc29sZS5sb2coJ1NlcnZpY2VXb3JrZXIgaW5zdGFsbGluZycpO1xuICAgIHZhciBldmVudCA9IGV2dDtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgc2VsZi5za2lwV2FpdGluZygpO1xuICAgIGV2ZW50LndhaXRVbnRpbChjYWNoZXMub3BlbihDQUNIRV9OQU1FKS50aGVuKGZ1bmN0aW9uIChjYWNoZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZSBXb3JrZXIgY2FjaGluZyBhcHAgc2hlbGwnKTtcbiAgICAgICAgcmV0dXJuIGNhY2hlLmFkZEFsbCh1cmxzVG9DYWNoZSk7XG4gICAgfSkpO1xufSk7XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ2FjdGl2YXRlJywgZnVuY3Rpb24gKGV2dCkge1xuICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIFdvcmtlciBhY3RpdmF0aW5nJyk7XG4gICAgdmFyIGV2ZW50ID0gZXZ0O1xuICAgIGV2ZW50LndhaXRVbnRpbChjYWNoZXNcbiAgICAgICAgLmtleXMoKVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoY2FjaGVOYW1lcykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoY2FjaGVOYW1lc1xuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoY2FjaGVOYW1lKSB7IHJldHVybiBjYWNoZU5hbWUgIT09IENBQ0hFX05BTUU7IH0pXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjYWNoZU5hbWUpIHsgcmV0dXJuIGNhY2hlcy5kZWxldGUoY2FjaGVOYW1lKTsgfSkpO1xuICAgIH0pKTtcbn0pO1xuc2VsZi5hZGRFdmVudExpc3RlbmVyKCdmZXRjaCcsIGZ1bmN0aW9uIChldnQpIHtcbiAgICB2YXIgZXZlbnQgPSBldnQ7XG4gICAgY29uc29sZS5sb2coJ1NlcnZpY2UgV29ya2VyIGZldGNoaW5nICcsIGV2ZW50LnJlcXVlc3QudXJsKTtcbiAgICBjYWNoZXMubWF0Y2goZXZlbnQucmVxdWVzdCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlIHx8IGZldGNoKGV2ZW50LnJlcXVlc3QpO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=