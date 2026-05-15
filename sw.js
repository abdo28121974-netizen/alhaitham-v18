const CACHE_NAME = 'alhaitham-v18-two-images-fast-accurate-20260515';
const APP_SHELL = [
  './index.html?v=v18-two-images-fast-accurate-20260515',
  './manifest.webmanifest?v=v18-two-images-fast-accurate-20260515',
  './dewey-database.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).catch(()=>null));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req, { cache: 'no-store' })
        .then(res => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put('./index.html?v=v18-two-images-fast-accurate-20260515', copy)).catch(()=>{});
          return res;
        })
        .catch(() => caches.match('./index.html?v=v18-two-images-fast-accurate-20260515').then(r => r || caches.match('./index.html')))
    );
    return;
  }
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      const copy = res.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(req, copy)).catch(()=>{});
      return res;
    }).catch(() => caches.match('./index.html?v=v18-two-images-fast-accurate-20260515')))
  );
});
