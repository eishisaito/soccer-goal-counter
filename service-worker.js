self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('cache-v1').then((cache) => {
          return cache.addAll([
              '/',
              '/index.html',
              '/styles.css',
              '/script.js',
              '/manifest.json',
              '/icon-192x192.png',
              '/icon-512x512.png',
          ]);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
      caches.match(event.request).then((response) => {
          return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['cache-v1'];
  event.waitUntil(
      caches.keys().then((cacheNames) => {
          return Promise.all(
              cacheNames.map((cacheName) => {
                  if (cacheWhitelist.indexOf(cacheName) === -1) {
                      return caches.delete(cacheName);
                  }
              })
          );
      })
  );
});
