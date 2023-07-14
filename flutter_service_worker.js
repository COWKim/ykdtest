'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "920df382ab316eca2d5e57fc5581f577",
".git/config": "c13d34848ab84125971f078b3f144a4a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1156aaa7250377b53c8341d2e36c5755",
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
".git/index": "4d3debf42dba698415176c9dc6126d50",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "18f6af1b3983005b00578913fb08c404",
".git/logs/refs/heads/master": "18f6af1b3983005b00578913fb08c404",
".git/logs/refs/remotes/origin/master": "ccb4e711d7e89137b215df18eaa7f6c2",
".git/objects/01/f87b90101c0f350a716bff361238b0f6076f08": "4f3bcd1231bfb2ebbfa9e14306d479a3",
".git/objects/03/9f53e4d81709a803b6596a31cb735ca2172bc2": "3f0270d0d057af186a69c917f19b7e57",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/a448a2af04b02e624ff8b1d410db1e195c3d7f": "48b2f66640df3107d4c111e140bec1fd",
".git/objects/09/c374a50c0cd950696d45983b88fd6d88d88f34": "341ff6dce58bd799b7556a89b561af1d",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/10/17ac7325092d914ac96ce06c462578185bba43": "4d707fde84ab00374cb5aff6c7bf4dc8",
".git/objects/10/2de65dc9ed651dd2e1ab2f4bf6099636177fd1": "4c2cd8540b156c50e7f3aeb2d485bdd8",
".git/objects/16/2fe12f36f264c41ae647eefd96fb649f3d965c": "b36356b93971b2e7c7068e290ec24ec0",
".git/objects/1a/dff2ba58365a976322dd00ccf442ad2e3ce9dd": "1d96a25e0fbb4171166701ea02114537",
".git/objects/1d/06fa323b9c743dad813f79a0fdc82f60d9dc58": "19410203874e8443f94c220627b9fda2",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/4f25ab4c468b3ec33b35580945bfc265ae66a5": "e79d5f0adcb2f7ee75ea22f6d2632ec8",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/a63ab45a861f122652453d3fd6c6d8f8952947": "8dcad0ed9534b6eb7014793ab40aa335",
".git/objects/2e/c002c5e1f3e38d399dc44f579e28c93f3e8652": "20e58d2abef66e9809c2c4efd35957c9",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/39/8fd7366c6fe4f0952ab85aeab8f2208deb0913": "7a2f5af8e68681c60498160f9e19fb83",
".git/objects/3e/ce0c22a4cbaf5f1f9ef1ad34ed31f5450772b3": "c235f2b81ce4e57b4dc2cb227731fb70",
".git/objects/41/c2fe1826b657a9c901781dbdf36239646127ef": "fac12b2761adc4c9b2a730ea97ce7662",
".git/objects/44/04165c4d4e7131aecd998207a7e9eb67747c7e": "3bab52ea88fc8e8e033d00c78e660e24",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/b8b0088e4efeaffeb954e2a3b9941a7f00c717": "2aebc4dc63ec9be776ec918107bd9dbb",
".git/objects/55/d31fbc2389ec6149211a7021289d7e1dc19cad": "e865f189d4462c34bde7693321d470f5",
".git/objects/57/80f2f70f1fd429c62aa92dcec0bbeb9c6da4c3": "0d33684e49191366b2aea29e6b653c71",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/4291382acec26446eaabb5a3f32e05f2407738": "40b0b27e381d5f2d4d7506d1c6c7d7a7",
".git/objects/6e/47c58fb5dd60bf8adae3e6795fb7284745ae00": "036e36ee5657795ae5d7eddb4abf9256",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/77/dd3238dd178e19e1cfa5571368a834a428d9c5": "6ee73d69af4e5d60726723893da004a2",
".git/objects/78/58093491099dfcb659f1165773db8dcf137b97": "b51b3e9a2fddfeb600cc0c3d74320138",
".git/objects/7a/c047491bed5f5e04084c3fd4e66d10cb9c8608": "d7fdcc6eff926ac791a44da5abc2a03c",
".git/objects/7c/109159f4b89fd2be64a9e68b81946682f224ef": "6d25aee119bba3630277554e7cc33581",
".git/objects/7c/eb27540a101c48d62c9b54b95a8bdc7733184f": "0fc5ededa64b176e1b5dbb4eff77f327",
".git/objects/80/6561965666e7d617f7d08d4bc71f20491c9233": "ccf939caa3ab0c8abc290c8d505eb19f",
".git/objects/81/fd79ac841e64b0fbce3b0719c4f1e8eae85664": "95ad3b4a44a50580ad6915e6b16d691f",
".git/objects/85/72b76d495e930fd893b4c29005cce492bbc6e9": "101158cb8e33233708c0a3f97bcb82e2",
".git/objects/86/ee3bab51c7c8846eb96a44afc8b58578db0157": "43a75da95b8f7cd7228180f2ede290bc",
".git/objects/87/c50eeeb4590cc38f5cb6f1d3513767fb95278b": "238358ff5ca84120a96703438cdb48ed",
".git/objects/88/8a71033648ca3a5393188f656372e8824a2163": "53ecb456c254186ddb422fa1750078c9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/c0cdddc4751aa78f8c7754996ef2b59759c03a": "3dbb2a6804d70540e2a3940031e7919c",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/ca5e67dfae498b50bbc1e6cf2eda0c0fa559a7": "70cdc8a29d58c9e1815c80cd364619d1",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/99/bfb717f4c2f6362f3b36e5f911cca23f5009ed": "6e02530b26472246b489dcf8649983dc",
".git/objects/9b/c6b8b098c0cab52875898fdabec799c0223a03": "826bbaa4163a3b7ed08c91a59ed5c609",
".git/objects/a0/d32e0f55af045c709dccf587c605a3497200d2": "a55b7a950e0f28784516f875c8f65a6a",
".git/objects/a8/1e52d2418a7931d13f0a2c2886adac777f3788": "b203e21ebb39e690b790b961f10dd868",
".git/objects/a9/8d0a54353c584f4e681ae7b342267e366b36ed": "acc46770ad53bb7d6f0e0291902f1e95",
".git/objects/a9/be1e301f9c406cb59246e774921fcbaa1d73e3": "15b8c4c6653e4d3891e9d400c9656e6f",
".git/objects/aa/fffd171a665e3b9197e93fe02cb529caba430c": "72bc6ffe54c23a2b99bb465ecef185b0",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/274a014ae4fc29f755c9bd2c71d412bcfc0f12": "18bd99ca4ef36c6677d319eb36c54814",
".git/objects/af/3a8a3fb808625737d2cd20671ec1497c34282e": "b8ac971c361faa66c97154f2a83d235f",
".git/objects/b0/3a80fb3b3283d24455bacf7a3e2501cf0b8eaf": "f69a0516ee971aad128415b9c24ea909",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c8/1d54a0d2f8e78b191120e61a1caebee264af14": "6346089865fc73044d23dee2f106cb4c",
".git/objects/cb/de09be702f2b1e052c722c51777014a8ed9fdb": "b2b60e34b4093d2b77ff892ac7babed9",
".git/objects/cf/76d98d3cb9cdff23e49cf0e2c91870762b214c": "1c61a58ef8d1fc9afe49338e271597ae",
".git/objects/d3/a0155af44bdcf6e1e87e01fb3471a16d90c50d": "7453c8512c993a9d578bdff454f7aa87",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/bc42d8ed7de9a999248afcabf836840d6fe546": "d20f749b883b72858161fc3df0e117a0",
".git/objects/e0/1c320e4ce4ed98181b91e7c43673a7c2837600": "74e61e2a1cf826958e844ee668d85b69",
".git/objects/e0/8422c8a1768a8da9b3179ec57ef6013b11d66f": "31bdf4cd8c5aaacfeff2884d662a2588",
".git/objects/e3/1b40d045eb36e3ea08de90c0bdcc7356ee2695": "a471eac8a0b71ff0f47a2671d8d6e556",
".git/objects/e6/f7c8d8930ad5fbcdcc6a7750677bdb7d915346": "4a2eb3052cddcb062420705dc932b910",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/ORIG_HEAD": "9f6492fb10c16ddc03e39a6c046196ee",
".git/refs/heads/master": "9f6492fb10c16ddc03e39a6c046196ee",
".git/refs/remotes/origin/master": "9f6492fb10c16ddc03e39a6c046196ee",
"assets/AssetManifest.bin": "8935bb3323d6234ceef03e8b77da2daa",
"assets/AssetManifest.json": "1b8dd90db648b732fecf917a2548a1fb",
"assets/assets/church.jpg": "35c4d2f4cbe3411371357a9f70baf40e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1ad9d46e5f2ef722ea4429ad5346db50",
"assets/NOTICES": "bdd87585deefb6e04728f796091ef299",
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
"index.html": "947cc0b9f553a892d51260b1df0fcbce",
"/": "947cc0b9f553a892d51260b1df0fcbce",
"main.dart.js": "d46e7c83671bf04a2531d18080615433",
"manifest.json": "eabdefabb6ea587ec4b35489fb44a0d7",
"version.json": "8847619482566267af1c5e1eb6659918"};
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
