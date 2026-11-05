// ALFREDO GRE PORTAL — offline support. Change VERSION whenever you upload new files.
const VERSION = "alfredo-v10";
const FILES = ["./", "index.html", "styles.css", "app.js", "firebase-config.js", "favicon.svg", "favicon-32.png", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "site.webmanifest"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
// Network first so students get the newest version; cached copy when offline.
// Only the site's own files and the Firebase scripts are cached — never sign-in or database traffic.
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const cacheable = url.origin === location.origin || url.href.startsWith("https://www.gstatic.com/firebasejs/");
  if (!cacheable) return;
  e.respondWith(fetch(e.request).then(res => { if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); } return res; }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html"))));
});
