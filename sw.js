// ALFREDO GRE PORTAL — offline support. Bump VERSION whenever you upload new files.
const VERSION = "alfredo-v8";
const FILES = ["./", "index.html", "styles.css", "app.js", "favicon.svg", "favicon-32.png", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "site.webmanifest"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// Network first, so students always get the newest version when online; cached copy when offline.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).then(res => { if (res.ok && new URL(e.request.url).origin === location.origin) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); } return res; }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
});
