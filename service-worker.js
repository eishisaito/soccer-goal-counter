self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('cache-v1').then((cache) => {
          return cache.addAll([
              '/point-system-generated-by-ai/', // この行を修正
              '/point-system-generated-by-ai/index.html', // この行を修正
              '/point-system-generated-by-ai/styles.css', // この行を修正
              '/point-system-generated-by-ai/script.js', // この行を修正
              '/point-system-generated-by-ai/manifest.json', // この行を修正
              '/point-system-generated-by-ai/icon-192x192.png', // この行を修正
              '/point-system-generated-by-ai/icon-512x512.png', // この行を修正
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
