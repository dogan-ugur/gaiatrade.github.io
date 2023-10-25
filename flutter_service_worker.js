'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "a764842229706f93ebb18f92a61e801d",
"index.html": "8d19422fe0823c0b927628efc769f4a8",
"/": "8d19422fe0823c0b927628efc769f4a8",
"main.dart.js": "bacf9e9f4258be4982a3a6f145163eef",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "dcec1d9bbb62b003fba34a3913d44880",
".git/config": "a50e81c2ef2c4fc3f6984ba9a43d5847",
".git/objects/0c/b1a3a72153e23082f30d8cc7467ec9fe2d1e7f": "90378f75863a8e0d96755aecc05eace3",
".git/objects/50/c337b5c662ebf8cbb6692ccd79cb00a7f91ae2": "3cb827ccc914acf877f811a6287911f3",
".git/objects/57/d7f11c4e6ecc839ac75bec5451a1f0cd9987bc": "630fca815361af1f995d81191c45ba14",
".git/objects/3b/6feb1c892f684c86e045ca3bfc58d00d3674b3": "eb46532c314f6c693ec7049e96f23bc9",
".git/objects/03/a81e04634288a4323cbd9ae64845774d5d861d": "9a566960aa4e5476fd9deead7a3053e2",
".git/objects/9e/35b717cbc810c03c6e6cbae35923cdc3b37dfa": "4f31673410eb38e79e274728ac299eb7",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9d/108392dad4460cdb7e4c7113df0e423236bd2c": "d4b6a5d8441ae0e69e8e79c9e67912ce",
".git/objects/d9/e10879dd3e53895c8075615d74b08f5c5c0078": "61e63bc4788b4bb7dfe0b228aaf99b37",
".git/objects/ad/149d9bcad870216a38674a7ededfa3e4f8ee73": "9104e62079e5bd764f7dc0e1d0c1bfb6",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/b3/aaabd8520068cd5fdec33e32f47e48510b4556": "36e8328df4256d05fd6b1c563f8f7a4e",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f2/03a0f341762e17a274215c69c472c83357e4bf": "a1c084e25f749f15042e710af826fbb6",
".git/objects/cf/1fa9a32c8a671df7b960b6c1b58d3d4f431231": "0f45d32d66436f5fe1ca6a3eff7d2c0a",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/29/eb61cf540ece5a6f428c81a888b99b03260321": "4540205cee5feb8da180b0d0902c06f7",
".git/objects/89/a77578fead95212b1439f849272fb937f08415": "6974d02424952b36fb0129a5b433e33a",
".git/objects/45/a263fce25d117e81fb9d9640b50c764a890afb": "5372ece5bc50625a12578806bdfa49c7",
".git/objects/1a/92be1c3a628556e228fdfbc253ebf98e17e4c4": "09d2f608cf82d06f70e9a0c18261b5a9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/2f/ab2a53c5e5651ad80f2162f765d373e497830d": "a69d82c21ae83427827f640b582daec2",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/e88dd98db5c222b55fff96d620c674e195c80d": "5b41dc749ed32a0018b5af5c6d8b5c9e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/154b2c639e1fe9db62ebcbaef17710c2681f9d": "b932805c28b83f012f5119b865f122d6",
".git/objects/5d/320d34dc333d4ca973250def38bb42e305d44a": "eb1cee0f2d7640685d17ee89a92e4ede",
".git/objects/65/43d0aca86c203e9340426b6bb9c044c57191a2": "3b44f089411b64686530994932fbe188",
".git/objects/62/7d0455e18c5090cdfefefca6dac0410aa85803": "2675960f858fd82a982b79c103c60d97",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/d2ad4fbbf69712366d870f455011165a85131c": "b8f6d2deea5dd37af00b1f7f89fb56a2",
".git/objects/99/f8b8cec55bbd547d2a550a3e01255d45fefc1c": "10869ebd7a0f67f0b31f63cab0340300",
".git/objects/d3/601af36a30525435fe8a4dae2ee822c3f3f207": "feb2760d2056fe6ba92df097f1a8408d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dc/402ffc404ced16b136e86d872440a6bc5583b6": "a54f6e0f726428359f1ae8f8edda1f3d",
".git/objects/b6/2985884bec550f1e462707186a86b45e9bc50a": "6e4fbea352362166e404027a833b1385",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/541b7ca07d71942b4d45c516ed199876d3ddc9": "3a00e3e4e4122bf5bea40bd9357b6af9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/1c/7add948910970df72fd55862bf55cf4ee175dc": "b557b1def002a68d8de697a6c13995ce",
".git/objects/1c/fe32492bfc7d304d7470a781a6f8dcf9669149": "9b8908af066ffb2d5c319b29d2b4b574",
".git/objects/78/ab229829a9ca7460065de3d31755f1ce5920b4": "dd287dd59c858b182d1a7b3e7c2951c9",
".git/objects/14/4fa2c18f7623b0a6373b0cb8f37e03da502122": "d87572a5ec5e9fb21f2003f7f38fcd94",
".git/objects/22/fd7bcfc1bd802d255a224ebe1a83847e28e374": "b32a11d5c15d818e1a013860dc2e3f80",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "82186b7bd3628aa7bc8dbe772ad352cd",
".git/logs/refs/heads/main": "d794c4be86f3fccc2e2156c7e1acbd8c",
".git/logs/refs/remotes/origin/main": "3a76f31c9ad7b9451e079b892ce55a4a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "60f110c2ae58bf94fa50787e68e1baa6",
".git/refs/remotes/origin/main": "60f110c2ae58bf94fa50787e68e1baa6",
".git/index": "bc3bfe85517e50fa924adb00ff7f502a",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "3b7d31b4ccd77097c74a5d4015ce25ed",
"assets/NOTICES": "6d18158fd78615cf50efc61d98d04021",
"assets/FontManifest.json": "47ae0efc128cbc39848f3bb1205e9bb7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "41b048bc8274427b7397d82f85feb2ff",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/lottie/under_construction.json": "0de6a8dc349ed5ad410cba996277ee40",
"assets/assets/fonts/Mulish-LightItalic.ttf": "b0f92221b66f6a89d94a35b4894bd711",
"assets/assets/fonts/Mulish-ExtraBoldItalic.ttf": "0fd05194939a8d519a3959c060d5c9f2",
"assets/assets/fonts/Mulish-Italic.ttf": "3e6c2d08d53bb71d49a6c954ad99ad1b",
"assets/assets/fonts/Mulish-Regular.ttf": "31423d3904a79ab8fccbad8c31f0c645",
"assets/assets/fonts/Mulish-Black.ttf": "4116253eadb2611951c2085ba73ad636",
"assets/assets/fonts/Mulish-BlackItalic.ttf": "fc91cb43f89445d25fff1ee198265f52",
"assets/assets/fonts/Mulish-SemiBoldItalic.ttf": "0561dfcf7f0119ef58000381ed386575",
"assets/assets/fonts/Mulish-ExtraLightItalic.ttf": "bd34845e05e1b706cb743d17e3036da9",
"assets/assets/fonts/Mulish-Bold.ttf": "987e18dffd501e760afdbea36a4dbeed",
"assets/assets/fonts/Mulish-Light.ttf": "4c3f41a7fb1e614785fa5edda23d7906",
"assets/assets/fonts/Mulish-ExtraBold.ttf": "f4c4920f1de354965565fa1509f5aeae",
"assets/assets/fonts/Mulish-ExtraLight.ttf": "a3fd685c31ee5dce9fce87f7b55a24a0",
"assets/assets/fonts/Mulish-Medium.ttf": "4df899b7abe1a8fc831ac4867d4e6a37",
"assets/assets/fonts/Mulish-MediumItalic.ttf": "7b5ec96749fae1de17999d65424e328c",
"assets/assets/fonts/Mulish-SemiBold.ttf": "922e5ae520dbced208a37bbfd3184b82",
"assets/assets/fonts/Mulish-BoldItalic.ttf": "cdf040e31d4b799279d1f1e9cdcaa63f",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
