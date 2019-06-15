self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('mws-restaurant-page-1').then(function(cache){
      return cache.addAll([
        '/',
        '/index.html',
        '/data/restaurants.json',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/css/styles.css',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/restaurant.html',
        'https://api.tiles.mapbox.com/v4/mapbox.streets/16/19297/24640.jpg70?access_token=pk.eyJ1IjoibGVvb3JlaW5hIiwiYSI6ImNqdTJ3aTU4MjBneTU0NHB2aWVhcWI3NGMifQ.rWYO5otgGXDEOCwD_wRwPw'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response){
      if (response) return response;
      return fetch(event.request);
    }).catch(function(error) {
      console.log('Ops! An error occur!');
    })
  )
});
