'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c2ed5e75f1bbb436b9a0b9271044f79c",
".git/config": "524ea9e16f5d9b19ca1311c40e622551",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bf9209ed5b6e395e9975bcdf3f2c3bb0",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dff54be7d9e330e036ca084dd60f83a4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/info/refs": "8fa4919f741657e10c469c4c7bc023e3",
".git/logs/HEAD": "645476a2a2379c4f8a9f7cd9b16d1abf",
".git/logs/refs/heads/master": "645476a2a2379c4f8a9f7cd9b16d1abf",
".git/logs/refs/remotes/origin/master": "0a87a120c48e42a47c9f9b12f45f1701",
".git/objects/info/packs": "c418b6f4fa73205787eaf4f32086cf3f",
".git/objects/pack/pack-11acaebb0baef96ecc621c6d12d1c33f34b5eee4.idx": "5870c05e2c03143d293265be6fe4412f",
".git/objects/pack/pack-11acaebb0baef96ecc621c6d12d1c33f34b5eee4.pack": "d17df73d2831208bfae67593ad60a7a8",
".git/ORIG_HEAD": "f89a64ad8851724ca9ed15569316efab",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "a841d63f1e6ecdfe2f39cf3bcb7c9c26",
".git/refs/remotes/origin/master": "a841d63f1e6ecdfe2f39cf3bcb7c9c26",
"assets/AssetManifest.bin": "b5d8916806fa8243da47af3fe67f3752",
"assets/AssetManifest.json": "957ffe699a903a570e159c6f9a3aad63",
"assets/assets/b1_gido.jpg": "f8ca29fda24d63f269e2cb7e195b730c",
"assets/assets/b1_gidoroom.png": "88f91bb416825cb641857981d14d6be4",
"assets/assets/b1_iloveyou.png": "b81fb3ef83ae67c8bf0fcc0911dad6f4",
"assets/assets/b1_nongin.png": "7727b4b47a5dda7b595666b8c4ff62ec",
"assets/assets/b1_present.png": "4119f2087152ebd710c3840d1276f0a9",
"assets/assets/b1_sogroup.jpg": "73da4c5624729756629434797092aa80",
"assets/assets/church.jpg": "35c4d2f4cbe3411371357a9f70baf40e",
"assets/assets/f1_belbroom.jpg": "d4e77ccd4ea7dac6e8408577c73ca950",
"assets/assets/f1_bus.jpg": "63e27c0251faa763709eed784ad9a43d",
"assets/assets/f1_cabinet.jpg": "73a97f840499d1bd31229ed97430ad44",
"assets/assets/f1_cabinetHelp.PNG": "30d9365e91d77103e0d7b6e7980c5ba1",
"assets/assets/f1_create.jpg": "e43818ec827a4b9eb084f828435a689e",
"assets/assets/f1_creativezone.jpg": "b045deaffc6906ffb4f674727250c760",
"assets/assets/f1_cute.gif": "7c618795f485aae5e2abf77b8bcd0452",
"assets/assets/f1_free.jpg": "a1fb1bca4680462f9aa4a5c5731dc60a",
"assets/assets/f1_info.jpg": "808a719ae8e43bdc75ded3e1d15e8ea9",
"assets/assets/f1_jumja.PNG": "3ebe507fe41c00ffe6fab33aa84cd9c6",
"assets/assets/f1_moon.jpg": "32dfc3ca77c46533c417185b13e13a91",
"assets/assets/f1_moonKey.PNG": "b231ec172f8a6290882cf06562e62e96",
"assets/assets/f1_nongdamgom.jpg": "3927113367fbef5095ac420f823deeb8",
"assets/assets/f1_rodemRoad.jpg": "986fc8482511915706711e618662491e",
"assets/assets/f1_stair.jpg": "31cb426f515ba88e430379f6a5cdfcf3",
"assets/assets/f1_youStudio.jpg": "61f688ea9ee851b18d62f3c89afaae2a",
"assets/assets/f1_zzugul.png": "c0714999422f44134c4886357762427c",
"assets/assets/f2_baetel.jpg": "7ad7a754098052e92055de650d1febc3",
"assets/assets/f2_domestic.jpg": "43f44ea8733fa5ad69e5246c8fb66fb2",
"assets/assets/f2_goodjob.gif": "44e02ba8affca6fcf02b0d96ea3b3037",
"assets/assets/f2_international.jpg": "85a32bf16a7ece315053756569a60bbb",
"assets/assets/f2_pray.jpg": "dc25dc04bfc5003a115b1c3059393053",
"assets/assets/f2_recycle.png": "489eff09aab52796fa930f55400601ea",
"assets/assets/f2_taka.jpg": "5c8159c8323737e59218365248157dab",
"assets/assets/f2_takaboo.PNG": "761f0554d6aa40a011f3abce900798b6",
"assets/assets/f3_2.PNG": "998f8ae3d78cca0aff40fddae0055900",
"assets/assets/f3_3.PNG": "eec35d5de5f219569a0e72f75b2dcd7b",
"assets/assets/f3_7.PNG": "46f152e6dea51fad6161dfcd8ef6a44c",
"assets/assets/f3_8.PNG": "eded90d15795b72b6a6770a80cd6e83a",
"assets/assets/f3_bang.PNG": "8a5457820cd931ce665ac88baddbe5b1",
"assets/assets/f3_choi.PNG": "5ab124b8616d114decd42032047176e1",
"assets/assets/f3_clock.jpg": "03cd9e898b71b99824ed4e42aceb23fd",
"assets/assets/f3_f4.jpg": "7d323e4f6fe45802f964e8d0ace608dd",
"assets/assets/f3_isaac.PNG": "c3122275a56872fc7a5919ab9de59e32",
"assets/assets/f3_jaejung.jpg": "1865e9f4df199ee7f107415dab16c0d5",
"assets/assets/f3_jung.PNG": "0983e48e2b6a07351fdf37b09d2318ad",
"assets/assets/f3_kim.PNG": "70699e1bd02e95181d69fc9db71e64be",
"assets/assets/f3_pass.jpg": "c95e9970e3ffa5d7cbcdcf5dcd555025",
"assets/assets/f3_picture.jpg": "be76ae4bcd4fcea9f649dd98ed6af0d6",
"assets/assets/f3_priest.jpg": "f4761438b20c2d1b889aba1e39a50eeb",
"assets/assets/f3_road.jpg": "b33eb7ed13a8a401262d3794cb5e8091",
"assets/assets/f3_son.jpg": "7a26694bbd90cd13cfc65db4cbbd88df",
"assets/assets/f3_stair.jpg": "2fe4847625dad8f821a9919977830a91",
"assets/assets/f3_window.jpg": "19f35ba0b8fb2b6bc202b0fcff46684a",
"assets/assets/f4_401.jpg": "b032054cbe635d21b1183e3555ed7d40",
"assets/assets/f4_andiok.jpg": "63ff7316ba86f9aeefaa742957ffebfd",
"assets/assets/f4_color.jpg": "a8c6cd5dce3151e274485dfa96a1d908",
"assets/assets/f4_ogu.png": "b3087e473bdd6de77e6f5a2ca77c4661",
"assets/assets/f4_road.jpg": "4a9528832dec17d64503639ab63c9bf6",
"assets/assets/f4_samoosil.jpg": "845ec0b8115e1350e18ebe78aafd0795",
"assets/assets/f4_secret.jpg": "fa8ea8e4bd5aaf6fc63ab54dd4c51bd5",
"assets/assets/f4_stair.PNG": "75b811234f79374b9113ab424148a873",
"assets/assets/f5_energy.jpg": "171ebef47fbc051c9292fc355b8fc30a",
"assets/assets/f5_vision.jpg": "34fe408f78152d07995e4ecb121175e2",
"assets/assets/f5_visionhall.jpg": "cfdfe19a728af885475bc0f990769901",
"assets/assets/f6_cabinet.jpg": "3807fa3d37654be565f8d24dae57512d",
"assets/assets/f6_fighting.jpg": "9ec413f5307151c9351561d918c48742",
"assets/assets/f6_memo.PNG": "822f0c3ce6f2937977cc600ce298727f",
"assets/assets/f6_quiz.PNG": "1f088778cfbfb5a35bbefa761a7abaef",
"assets/assets/f6_room.jpg": "443ebf36b4e4ed9c89d62b8e5d23a402",
"assets/assets/f6_things.png": "9aa403f2a73257c151573bf7088cbf31",
"assets/assets/login.png": "c055fab163624cc0f98a57b89e2831ac",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "22364d57ce0f2e3b335120fe53fe5b9b",
"assets/NOTICES": "65ae3546eb60a27e0c2ff7a845142854",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ce78e949991d780b5a78bdcc67a03193",
"/": "ce78e949991d780b5a78bdcc67a03193",
"main.dart.js": "c7dc14b3041b30e3a39e6c67ea473c98",
"manifest.json": "45654708ed63ff5f8fdd8a02b8c27fba",
"version.json": "62be1f8fdbf976e0fe896683be39e99a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
