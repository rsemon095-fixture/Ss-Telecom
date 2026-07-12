// ==============================
// SS TELECOM Service Worker
// Version 1.0
// ==============================

const CACHE_NAME = "ss-telecom-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./login.html",
  "./dashboard.html",

  "./manifest.json",

  "./css/style.css",
  "./css/dashboard.css",
  "./css/animation.css",

  "./js/app.js",
  "./js/auth.js",
  "./js/dashboard.js",
  "./js/report.js",
  "./js/stock.js",
  "./js/chat.js",

  "./firebase.js",

  "./pages/flexiload.html",
  "./pages/bill.html",
  "./pages/products.html",
  "./pages/due.html",
  "./pages/profit.html",
  "./pages/loss.html",
  "./pages/addmoney.html",
  "./pages/daily.html",
  "./pages/monthly.html",
  "./pages/stock.html",

  "./assets/logo.png",
  "./assets/banner.jpg"
];

// Install
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

// Activate
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// Fetch
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => {
          return caches.match("./index.html");
        })
      );
    })
  );
});
