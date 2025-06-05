self.addEventListener('fetch', function(event) {
   if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('Service Worker registrado'))
      .catch(err => console.error('Error en SW:', err));
  }
});
