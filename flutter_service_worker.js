'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "36a8a3319252ec4167e506b0494ab87a",
".git/config": "9a4b7b0270e2ee8032b6ac63b67b20c2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ce54d4d469213000557c79154741478c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "53db90a9ddcfa6edc1d2288e4ed29f17",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b700b1f359ed47598c82a4f85a37b4b0",
".git/logs/refs/heads/main": "bc034880cfb57f6d2eb709c0207b8037",
".git/logs/refs/remotes/origin/main": "bcf1f1befcbb586eba03b8f410847ca7",
".git/objects/07/322ea216a72eb21d65f84cf1d6b7fceb5da4c3": "f1647792b2cf530d924ae75a616886a6",
".git/objects/0a/119b7d41a954697d103e967bacfbe5468a865a": "1bc059c3e8df200236ecbc78555ae2c4",
".git/objects/0b/4569ed92bc4709417d160b286bb11b95475f16": "31b5cd38f792c9d2f542b3f962f45417",
".git/objects/0c/624bd270251dbc8a0faa7d750d22b15b858c04": "9a7cdede70ab13c7710678c34bd49f6e",
".git/objects/15/f2b9a162d4c60c20f6cf57d3b69ca087442a5c": "b2584fa527f684373b5070dab3362762",
".git/objects/16/3cf40339ba6a92012ad7d30985f457cd03980c": "44d9ee1fd17d630769e2dd528c495570",
".git/objects/18/c920b2dd4579c960597cfabcd9ccfae4fa2ed6": "a7dae1140970d7ba8751ac096b2879b7",
".git/objects/1f/00121ddd0556a635f38e27e9586add1294437e": "d0f17b1769717740729d8010e0c64dff",
".git/objects/20/9365c7defc65bc8d41035a870d401bc4781536": "af3afd8a0fcab8da7e0ce9703d8d8cb2",
".git/objects/26/1eeb9e9f8b2b4b0d119366dda99c6fd7d35c64": "36b35938e0c57b26db0cfe487524a192",
".git/objects/26/5b1e536264158f46ab1a7cd33ac2a8650fce5a": "1af3da7337c781170033cb7de1ab2de6",
".git/objects/29/dc8cef584fd4fd5fad6afeac02c62ff426639b": "665acd986762c60a7dd6d03da1796635",
".git/objects/2a/ce77339417eb60446b4e4112eaae5df09e36aa": "816f9d80b6071a7dccd2acb3dde3b982",
".git/objects/2c/d8afecd31e0e2c84ed7683d37d47b6599217b0": "a2f5a0d4be853058b5826a20059a8126",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/89e0796ce1e18e828672f46bf830ddc8206cb7": "91a5788dd49dcf22b330b4598ab3b04b",
".git/objects/37/675315850f3d237137c7219c50fc9df7179a83": "06105c24e977a31bd26ae1f7b4a52360",
".git/objects/3d/96e13158abb1a6262fb147e7dcdcea6b7d9422": "faa5f6a50e74186660a1b8ab56cad464",
".git/objects/41/93a640090d495e6ec6ac99dbadf55c0433264e": "527ac9e133ea68e50c2d6cc78f8e1fb8",
".git/objects/43/5696f995689c01a1423a7afa75553a1619603d": "321cbeb8a05dbba3ed5af1a603826d81",
".git/objects/44/55f04158f0d49bee969beb5f7b413a94e4cb62": "f0cfe18bd314fd5ec6f1b9a9f6d7bebc",
".git/objects/45/ca6d4d43b6167640f676e825c17c8a58e93738": "726d2d18a7437907f0b8d13bbccee416",
".git/objects/4e/0ec3f9df6663dc68781ad13307784bf322f8cb": "c569fed9c6fba6b68bbee5e97deadba9",
".git/objects/52/087ebb8bebab757628109870c48d9a82e04ddb": "07f47e66868ed4e2bdc2341db050cc68",
".git/objects/52/744f3f797af6dfeaecd029ac06f318cf196973": "9d2f4f1f584d2095753bfe5b4350f9ab",
".git/objects/56/dd3333146189e557efe7bf664a4530a417172e": "a3fd7a7b359b18ecc2e9c48e2646ef34",
".git/objects/57/153f100f4355daf7b0e88e8a6c410ce9d5bbf2": "44d35a96a178424825b9d12a686d3b28",
".git/objects/59/9852dfc18e60b382348a2f5cfdae8fca1d388e": "f7862cb45e6410aa84ba005eabec0046",
".git/objects/5d/a6a204e17c9f538420914b334dbd9dd968a888": "8f6ba2ae7236a73ea6db4675d1b8b098",
".git/objects/5e/c20b2e17e3923a386d4ead5e6094a2185d004f": "55cb10ab4dec3f3fa6d60e8c044de30a",
".git/objects/64/639a3cc1f3e12912f69108fe92e63150bc23fa": "6e50ee202b3ca98b740ef650140d9236",
".git/objects/65/ca9be48f00a4465e1183bad65f6cf4b452b5d4": "297c85c001f1e71f7e593597bbdd7ced",
".git/objects/6d/7edda463817764de2718c044ae6bae18052191": "0dad5a30a8b623142d33fa6908003f51",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/86/8cb8af8901961d36ab1553e84370c34a84dae2": "28053af387fb63e6f454271861b9b41f",
".git/objects/89/aecc6a21c2c766bcc91a320e1c40b1a25a3d39": "ed50614e6a4df8e1f8fffb17ab5fd965",
".git/objects/8a/27ef1d3b5cb0a9006942bc256aebe7ac9056e3": "3f6518f15642a3c7a33e3bf737e73b7d",
".git/objects/8f/57a99980891ccc68701b94b94342f7ae0e02d6": "1fbb678a273d6cb7864e009f9bfa84c9",
".git/objects/91/8202f323072f37c626164ad8d77b10c66e2f80": "7083a998a2b8e430025f85640579b012",
".git/objects/92/367d1a2acbd605a1ee4c8d73ca93dd81588fab": "aa57387a6976c47127e0212315da3e0f",
".git/objects/94/03c1911695bcf434d6821e645cf4cfd8c4e178": "71d8f460af064cbdd198455b9df98fd8",
".git/objects/a0/9944bf244e5beb563ba7b233aa9dc1c4550d39": "ea5173dd0581b9804a5d8520e198e1d6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/8d94f1de733074c3428fd13ac7242766b67054": "9dd293d19e387d0202da40261070f97a",
".git/objects/a2/2e17419048484fcadd9cb4206a608b7eea6c66": "8155e0d1f557dcdee4cc68ef47f9f4b0",
".git/objects/a2/f4dda4c05acaa540944e727cedcace97743c49": "d9e87b84e3b45b1154154ca574e295d9",
".git/objects/a6/e2975ddde767ca0a86852305df48856e554105": "dd830affef76b94b63ee210398ea49ca",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/daf851a4cc8798fbaac09f7a4d3ff124ee55a3": "540a7fcd378cbbb5cc14ba0ce967b178",
".git/objects/ad/780510fa98dd658effb7339c88ba9f49ee5384": "7a26260ec9c0b884eeab32b9bedd1985",
".git/objects/b3/f41edc5af0505da62d6113746b9aed83eb8cf3": "579f0ede3930e9d4c78d71e8e10252f5",
".git/objects/b4/7285d2661a4c3afce5d7a82232c5c12f044db0": "1fff5cc73f25bd71b791daed7f3b7783",
".git/objects/b9/4b888523e2c68fa908e2bad07928d63af61e66": "b05b593a5efc36d5a34bbbe5100946e3",
".git/objects/bd/7190654c085db13a955925702b3dc1b64cb35d": "90c08644198448bc9a8f04753b8ad8c7",
".git/objects/be/32772ea5a96284a77b8cd6c44b74147347b695": "ceb443d8d7b68a5cb7baa10268e1caed",
".git/objects/c5/f730655e463dc420214b5c2777e8a001cce937": "25726178087b5bd838f9d8be9c71b58e",
".git/objects/c6/a20d18e0ae0b050a21b9441f5708fce43ff8f3": "97f1a02137f4e5d0f391c72b75d21116",
".git/objects/cd/72bcfc7aebb0c2b3eb9c0688d32bb9bec9316b": "fc23b8fb2c85f5175b7214691ad5326c",
".git/objects/ce/6ddc7bbd047f1497c9dc6fef0f1450e95fa2f1": "db7f8961ce713bc09355e0f8afdfb22d",
".git/objects/cf/104373da2b8319c0866a1daf68bdf727031953": "b0fe77f3101eedfc09d82b1d8b5954a6",
".git/objects/dc/2e455a92fc38c468831ae7acbe0773b241b9c7": "4a81a3d22de0ef0df9c3f073448f5bfb",
".git/objects/dc/37e3f1b7ac0b2316792a99ab5443d7ee1001e2": "824cefd41155ea560532b6be26ad7019",
".git/objects/dc/3aa690dd17b510817b11f0063cbcfaf291ea4e": "2f0f8f3ce8a834f5b79b8d6699a753a3",
".git/objects/e1/2357d72af50f7afca41df6cb3442eab8e955e4": "0616f83e5e8ec940ab8fbb60c12ead7d",
".git/objects/e1/657c4ab46105713059fdf442af595fe75a0f08": "7488c0b1992246b2724707d90bc82c4d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/031b700bff7019d104106a586fd18863a8dfdc": "63793998fa0ff69a60b59589a8ed7726",
".git/objects/e9/e605fc03852e6af320ce695ceda2479015fbcd": "969abab9e873c4553472e9086b8c8a18",
".git/objects/ec/2299544f9707f0a1907b708e38df8d03b8479f": "fe3a78e94a8a5d457e9f2648f4d5d99c",
".git/objects/ee/0fad9a3ffc2a8dd56184790379b460f7bf7944": "837c36132e0f7f7305c368fe9aa78bb2",
".git/objects/ee/885256bbfdb22fc626d169b267d98c7c0c8c0f": "f0fb885f8dcaa6236b61e03c596c8d30",
".git/objects/f1/2b50a78098651a8eecf605b65881632f07818f": "5cc545d624729fca214c16cae50648de",
".git/objects/f4/486da4c7342f7c930bf3680582d5db2b64aeea": "ce14aa48ff500826a9f045208ecf55c4",
".git/objects/fa/768620ae7b59c88918077a5df5b2bd82e902f1": "8c3a7323099708801995d2b776d858cd",
".git/objects/fe/064a799bed2bcf09e09aa24f0f12c3150a9b61": "bcb6948298e9b3d3b968758ceea80b21",
".git/ORIG_HEAD": "03141087bfc3e2f1ddef9c93501ba6b1",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "8cac46b9907c3f0001bd3d3b89d0707f",
".git/refs/remotes/origin/main": "8cac46b9907c3f0001bd3d3b89d0707f",
"assets/AssetManifest.json": "57db9504d9421a3578ea7a38e85f1009",
"assets/FontManifest.json": "0c7a4012dca5a3176e7ade181ee5159f",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/sf_pro_black.ttf": "bc43a493c339ab4f2bd3fa9a5ec5b231",
"assets/fonts/sf_pro_medium.ttf": "70830fa4b0f259734f7e52903f3efd59",
"assets/images/background.png": "b9743cdea14eb5e319193db35b2d4870",
"assets/images/halinhit_round.png": "1f98ab7625ed86d2c76455b0f4db5034",
"assets/images/ic_cookipe.png": "11b643062bd38ee3d1f711d8929287ab",
"assets/images/ic_facebook.png": "a2bf4a1323980ed390008824b53dfd97",
"assets/images/ic_hauimatch.png": "51cd0f4fc77e6daa2a8505cdc8c84cbd",
"assets/images/ic_instagram.png": "21ea78c60d214b2f974dcd2e823a71ee",
"assets/images/ic_youtube.png": "01debc77666f6fcfd596a69289e8736c",
"assets/NOTICES": "e576f3bc7332e0749c674b23d3d31e9e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "70f5a2b8edcc29a596ce8abc567090c5",
"icons/Icon-192.png": "c4e8e3cb09486610086dc15e306efa23",
"icons/Icon-512.png": "03de5de368f057eca625f4689f1c47aa",
"index.html": "eca084b89f43efd7dd5554c614943a46",
"/": "eca084b89f43efd7dd5554c614943a46",
"main.dart.js": "24b5626ab41c1b8db86351308ffcc684",
"manifest.json": "b26c999c7c035ed57899b60cb175b8c3",
"version.json": "430d500c51a0e3df2fef822b116e6e45"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
