// Service Worker de Turnos EMB — estrategia "red primero":
// con internet siempre carga la última versión; sin internet, usa la caché.
const CACHE = 'turnos-emb';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.pathname.endsWith('.apk')) return;        // el APK siempre se baja de la red
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(resp => {
      if (resp && resp.ok && url.origin === location.origin) {
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return resp;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
