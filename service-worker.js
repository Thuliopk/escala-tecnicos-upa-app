self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Apenas intercepta as requisições.
  // Não vamos usar cache ainda para evitar travar versão antiga do app.
});
