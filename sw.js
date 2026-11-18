// Generated at build time by vite-plugin-whc-pwa.ts. Do not edit the built copy.
const CACHE_NAME = 'whc-oyashiro-position-20261118-v5';
const PRECACHE_URLS = [
  "./",
  "./assets/backgrounds/capitol.svg",
  "./assets/backgrounds/club.svg",
  "./assets/backgrounds/crash.svg",
  "./assets/backgrounds/home.svg",
  "./assets/backgrounds/market_night.svg",
  "./assets/backgrounds/night.svg",
  "./assets/backgrounds/office.svg",
  "./assets/backgrounds/office_day.svg",
  "./assets/backgrounds/sec_hq.svg",
  "./assets/backgrounds/senate.svg",
  "./assets/backgrounds/street.svg",
  "./assets/backgrounds/void.svg",
  "./assets/characters/atkins_alt_default.svg",
  "./assets/characters/atkins_alt_serious.svg",
  "./assets/characters/atkins_alt_smile.svg",
  "./assets/characters/atkins_default.svg",
  "./assets/characters/atkins_serious.svg",
  "./assets/characters/atkins_smile.svg",
  "./assets/characters/buffett_default.svg",
  "./assets/characters/cramer_default.svg",
  "./assets/characters/cramer_serious.svg",
  "./assets/characters/cramer_smile.svg",
  "./assets/characters/cz_default.svg",
  "./assets/characters/cz_serious.svg",
  "./assets/characters/cz_smile.svg",
  "./assets/characters/dimon_default.svg",
  "./assets/characters/dimon_serious.svg",
  "./assets/characters/dimon_smile.svg",
  "./assets/characters/fink_default.svg",
  "./assets/characters/hayes_default.svg",
  "./assets/characters/hayes_serious.svg",
  "./assets/characters/hayes_smile.svg",
  "./assets/characters/lummis_default.svg",
  "./assets/characters/lummis_serious.svg",
  "./assets/characters/lummis_smile.svg",
  "./assets/characters/pomp_default.svg",
  "./assets/characters/sanders_default.svg",
  "./assets/characters/sanders_serious.svg",
  "./assets/characters/sanders_smile.svg",
  "./assets/characters/saylor_default.svg",
  "./assets/characters/saylor_serious.svg",
  "./assets/characters/saylor_smile.svg",
  "./assets/characters/sbf_default.svg",
  "./assets/characters/sbf_serious.svg",
  "./assets/characters/sbf_smile.svg",
  "./assets/characters/schiff_default.svg",
  "./assets/characters/selig_default.svg",
  "./assets/characters/selig_serious.svg",
  "./assets/characters/selig_smile.svg",
  "./assets/characters/tomlee_default.svg",
  "./assets/characters/tomlee_serious.svg",
  "./assets/characters/tomlee_smile.svg",
  "./assets/characters/warren_default.svg",
  "./assets/characters/warren_serious.svg",
  "./assets/characters/warren_smile.svg",
  "./assets/index-oyashiro-position-v2.css",
  "./assets/index-oyashiro-20261118.js",
  "./assets/title-day-wide.svg",
  "./assets/title-tall.svg",
  "./assets/title-wide.svg",
  "./assets/title.svg",
  "./icons/apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./index.html",
  "./manifest.webmanifest"
];
const SCOPE = self.registration.scope;
const INDEX_URL = new URL('index.html', SCOPE).href;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      // Add files one by one and tolerate individual failures (e.g. an icon
      // that has not been uploaded yet): cache.addAll would abort the whole
      // install on a single 404 and updates would never reach the device.
      .then((cache) => Promise.all(PRECACHE_URLS.map((u) =>
        cache.add(new URL(u, SCOPE).href).catch(() => undefined))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  if (new URL(request.url).origin !== self.location.origin) return;
  if (request.mode === 'navigate') {
    // App shell: network-first so a fresh deploy is picked up on the next
    // launch; the cached index.html is only the offline fallback (query
    // strings such as ?scenario=demo or ?unlock=all are handled by the app).
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(INDEX_URL, copy));
          }
          return response;
        })
        .catch(() => caches.match(INDEX_URL).then((cached) => cached || fetch(request)))
    );
    return;
  }
  event.respondWith(
    caches.match(request, { ignoreSearch: true }).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
