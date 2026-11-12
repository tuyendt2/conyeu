// Service worker: lưu toàn bộ app vào bộ nhớ đệm để dùng offline.
// Khi cập nhật nội dung, tăng VERSION để điện thoại tải bản mới.
const VERSION = "beyeu-v3";
const FILES = [
  "./", "index.html", "style.css", "app.js", "manifest.webmanifest", "icon.svg",
  "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-icon.png",
  "data/stories.js", "data/stories2.js", "data/songs.js", "data/poems.js",
  "data/parenting.js", "data/health.js", "data/english.js", "data/extra.js", "data/baby.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Trả bản trong bộ nhớ đệm ngay (nhanh, chạy offline), đồng thời tải bản mới về cho lần mở sau.
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith(
    caches.open(VERSION).then(async (cache) => {
      const cached = await cache.match(e.request, { ignoreSearch: true });
      const network = fetch(e.request).then((res) => {
        if (res.ok) cache.put(e.request, res.clone());
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
