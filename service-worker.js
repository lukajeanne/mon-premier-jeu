const Cache="mission-rayon-v2";
const Assets=["./","index.html","style.css","game.js","manifest.webmanifest","assets/icons/icon-192.png","assets/icons/icon-512.png
self.addEventListener("instrall",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addA11(ASSETS))));  
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.dele
self.addEventListener("feetch",e=>[if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(r=>r//fetch(e.req
