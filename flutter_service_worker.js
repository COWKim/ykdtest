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
".git/index": "9a5035132fd5c73cab3e996a699b1666",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/info/refs": "8fa4919f741657e10c469c4c7bc023e3",
".git/logs/HEAD": "981c0247f2513d2bfbbba080730f3ec2",
".git/logs/refs/heads/master": "981c0247f2513d2bfbbba080730f3ec2",
".git/logs/refs/remotes/origin/master": "14556cd7a9d8710e4c5fc4a1c5eb370b",
".git/objects/10/4ddfb788d7a67fb7157d5e5aa07f7882a7fcdd": "833618e72d8c164378518564c4cee459",
".git/objects/16/e25d974120cd9abf227c3d747de5df6f1cb7fd": "f7a99fc5264e9be023af7cfdca3da2a5",
".git/objects/17/6ea1479d3a1492520b1607358c1488643c94e7": "81b05d67fe64748d6cb3e9a24bdfe428",
".git/objects/21/b6233530cf3b31fb86a1c7febc47e03634bf4b": "5b89445d5bb9e8ed8180f69eb4def3d5",
".git/objects/36/111b863f95118647d9f83bbcc95e9c936da952": "a27954de2572b79cf31cd35ee3625290",
".git/objects/48/5806b07d542e2ca47e2bc541aebec18742ce92": "9e3506e9d70293190eca8e6768ba1d36",
".git/objects/4b/a0726e84d83e0a85c059cded1eba40bc2d2fd4": "aeb714447043e7d52ff5c19804f50851",
".git/objects/53/f60e9a5133410801b4162d0a4cb8dd34967429": "0c690b9265a09e496ba20b5077c4f662",
".git/objects/58/4e237fe9ef48779a159347a7bcbabd82e8da63": "278300af271de8d09a8bccc5e4742cc0",
".git/objects/5c/06277e6c24abd801f81b0a7fd1fec3dcb8448f": "baee6571d12201656b45da7e6e4eb7bf",
".git/objects/5c/6eb2c84b2d016847b54e80d519c41f8b1de24e": "56edc394930f762fed30adb4b068bcef",
".git/objects/60/af73f8d20f3d6f78513b0a13f60af29afd4fb4": "66de9d0b957b488812b9e73979ae41cb",
".git/objects/6b/55a7ebcc2937a8a66d6d19de2b3d0a3efa18d9": "c9e793834577d7673fc0c1e5d466d3a7",
".git/objects/6e/e6eb886605636531d5f793ab8acdb08a81001a": "b6f2a0129033587f86a6e7289aca4cd2",
".git/objects/75/b17911e2310606addea62e385a6afa58511aff": "46061680b288a397d5295d6fec9c2bba",
".git/objects/79/2d3e0ffdfe795969d5eb2e208d4c6f842038e9": "29af5f3b98adde06f74d714f4ee1680c",
".git/objects/7d/82e689d539fdd9f4437480ccee18284a9a9b51": "ef5708a004f377abdfd824e3d48b7175",
".git/objects/94/31c5598e2a0729336a629a924592660253eaee": "ac35e1401a4c5cb2952caa9fb533b067",
".git/objects/a1/ff23baff75b375ae6a3dc9a3b3653e841237b5": "0e68473bd75e2403e37cf24802fab214",
".git/objects/a3/01813796d8b4cdc1a06784af62e9d049960384": "e44a9a7ef4bfcd57ed94002ab636a907",
".git/objects/b0/efe8aa3f3342ff06933f420643aa8163220a50": "76f1b601a70b513a0fcd3204f14e3ad4",
".git/objects/b5/55d05e548a7478182ba47349566f367f8c59ab": "ac06f246f61f3de4cc7ecc2efee2ee5e",
".git/objects/b8/7f0431f87ed32599325138b56e2887580969bf": "c0345529dd71b53ee47b1f32f797fe24",
".git/objects/bb/7c432d4d380e65f3e0adb8a66842ec7e402fd3": "4da32fac105a756035e95acf6263c9be",
".git/objects/be/d062f33fd0f5eeb5a6e545c4b3b330448c5af0": "e3285be63cc718bfc5147547fed1fa80",
".git/objects/c1/738559b8b826d80e8b15797d0f7e69e4d2bb56": "be06da5674d860a51577a64327af8106",
".git/objects/c4/c55dce0dfe93b3635befa7cd22b423f010a45d": "1528bee5678324c3c7ad12b12dff79f6",
".git/objects/ce/da92a3caf3719bedd171ac721d4fa3e48ad74f": "b01b0e95cdc5e7fd89e8534612509f85",
".git/objects/d1/cb5d666943235450d7549585d66e51802d2195": "16f1fb59e8db3c4b5e3d33f94371bd74",
".git/objects/d5/9c9465d044c37516b4883b5ab6092ac5f1e10f": "ad559a0e05ce16723ae5cd7a8b07eb7b",
".git/objects/de/6de65dd97d16a8e4c8942164ac2aa76f2c8e3b": "328b1e3e2fb6031ffa2a032e570fe4a0",
".git/objects/ea/42bf4bbdd3596c808a9c7bcee4235b94b0a69c": "55b7560367b17e96b06a9fa8f9eebf41",
".git/objects/ea/9f54a278b5b05a8976d22231fe308d2dfc88f0": "79aa37c447a178ad91db04d99e497437",
".git/objects/f1/3e67eaaf874366ed427e8cae6aba2388d04ef4": "7958e7bf778c08606f3e9d36400c395b",
".git/objects/f4/738e1977a2f7050752c32a8edcab8fea0823b9": "904da14975d19a3c9b8f4ef547d33661",
".git/objects/info/packs": "c418b6f4fa73205787eaf4f32086cf3f",
".git/objects/pack/pack-11acaebb0baef96ecc621c6d12d1c33f34b5eee4.idx": "5870c05e2c03143d293265be6fe4412f",
".git/objects/pack/pack-11acaebb0baef96ecc621c6d12d1c33f34b5eee4.pack": "d17df73d2831208bfae67593ad60a7a8",
".git/ORIG_HEAD": "f89a64ad8851724ca9ed15569316efab",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "59b17171cf33599e6f8cc5f6723242ba",
".git/refs/remotes/origin/master": "59b17171cf33599e6f8cc5f6723242ba",
"assets/AssetManifest.bin": "7b140480c54946978ba4b003237546c1",
"assets/AssetManifest.json": "cb9b4e8431ba139fb99dbec09b15936e",
"assets/assets/church.jpg": "35c4d2f4cbe3411371357a9f70baf40e",
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
"index.html": "0965877a2a0b281929965a31e3515255",
"/": "0965877a2a0b281929965a31e3515255",
"main.dart.js": "ec4903ee5e5db15fdeda47cad66c641a",
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
