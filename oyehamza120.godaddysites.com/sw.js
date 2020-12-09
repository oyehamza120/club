"use strict";

const CACHE_NAME = 'oyehamza120.godaddysites.com-1607507988012';
const SW_SUPPORTED_PROTOCOL_REGEX = /http(s?):/;
const pageUrls = JSON.parse('["/","/term-and-conditions","/about","/blogs-detail","/blog","/club","/contact","/privacy-and-policy","/tags","/markup/ad"]');
const staticAssets = JSON.parse('["//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/b33ff3d0fe5d3e2a/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/107ddf955eaecf1c/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/1e981abcd5144a6e/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/42a99859e40d7425/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/fe0964e8375612dd/styles.css","https://img1.wsimg.com/poly/v2/polyfill.min.js?unknown=polyfill&flags=gated&features=default%2Cfetch%2CArray.prototype.%40%40iterator%2CArray.prototype.find%2CArray.prototype.findIndex%2CFunction.name%2CNumber.isFinite%2CPromise%2CString.prototype.repeat%2CMath.sign%2CMath.trunc%2CArray.prototype.includes%2CObject.entries%2CObject.values%2CObject.is%2CIntersectionObserver%2CIntl.~locale.en-PK","//img1.wsimg.com/blobby/go/gpub/2a59d93f02cd8216/script.js","//img1.wsimg.com/blobby/go/gpub/2188bb0881d579fc/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/91b38cdb995a6e8e/script.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/layout26-47a25f3b.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/humanisticFilled-b6ab5f85.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/index2-0a140993.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/Layout-2200b798.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/index9-a4c127c9.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/loaders-cdd1ec86.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/minimalSocialIconPack-b3dd2ed5.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/SubTagline-5336804e.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/utils-6f80a19a.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/video-2d5f0f4d.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/utils2-523b4d00.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/utils3-f3f78e42.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/client-8eb1458b.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/HeroBackground-0dac5887.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/LAYOUT/c/HeroImageCropped-6c4ece91.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/HEADER/header9-3dacd7f7.js","https://img1.wsimg.com/blobby/go/static/radpack/@widget/HEADER/c/defaultProps-620e170a.js","//img1.wsimg.com/ceph-p3-01/website-builder-data-prod/static/widgets/UX.3.73.1.js","//img1.wsimg.com/blobby/go/gpub/e2dde61bfb3e8031/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/b2aaee5b55f1c537/script.js","//img1.wsimg.com/blobby/go/gpub/ed2b3a4f8a9661b3/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/e8d69bf354818955/script.js","//img1.wsimg.com/blobby/go/gpub/434d24cfadc80a70/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/6667e10c7319f935/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/4b83d0afd86a6cc3/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/3fea00e874384af3/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/5f24fbef8f988d75/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/382b1c1830c93682/script.js","//fonts.googleapis.com/css?family=Yellowtail&display=swap","//fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/dc7731cd8b8bc219/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/5ccc3dcc515a6aba/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/6e90bb42952cb3be/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/29fda956cb7b20f8/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/fa20c6e75809a789/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/fddb80528c8e1ef8/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/3d86b98144532605/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/494cf4e9e45d72ec/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/a93940985ee08218/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/81d6995abb5a2dee/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/8aa0c2460e0235f2/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/27e9c25963fd68a9/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/ad6b5cc073f93cc9/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/c583946f1dfc01da/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/a6d6e371090c61de/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/db31ae6745c59907/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/7389951189f9768a/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/e0b79ac6ede524d3/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/21b1be10d0b8775f/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/6acbe082c334464a/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/da4ecfbfcbc6df46/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/32605d478da36064/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/cdc47729b7bbdb4a/script.js","//img1.wsimg.com/blobby/go/gpub/2ecdf2bcc69be12d/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/6975be3864a3bfc2/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/68a55bfb1033aca7/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/57f1c63235f6044f/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/d7f2c203ef3c6e8b/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/5e0dd3aef880e000/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/3fb14c92140393ac/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/525e3131215caa05/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/2c825d9a0cca554f/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/76240d188e125331/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/6358192b31770ff1/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/14a8093f28a2d88b/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/ea1744bbc3b899fa/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/cc9b87e17713bfd2/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/2f51852071345dc7/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/6e76fcd1b455b0b3/script.js","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/25382f0bd5d18599/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/6d1fa0cfa1961ce1/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/7d84999776882fcc/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/b05be800ae8706a2/styles.css","//img1.wsimg.com/blobby/go/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/gpub/418c7183124449b6/script.js"]');
const networkOnlyUrls = JSON.parse('["https://api.ola.godaddy.com","https://0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7.onlinestore.godaddy.com","https://img.secureserver.net/t/1/tl/event","https://img.test-secureserver.net/t/1/tl/event","https://www.google-analytics.com/collect","https://calendar.apps.dev-secureserver.net","https://calendar.apps.test-secureserver.net","https://calendar.apps.secureserver.net"]');
const networkOnlyUrlsRegex = JSON.parse('["oyehamza120.godaddysites.com/m/api/.*","oyehamza120.godaddysites.com(?:/.*)?/ola/services/.*","oyehamza120.godaddysites.com/ola/meetings/.*","securepay.godaddy.com/api/apps/ola/accounts/.*"]').map(regexString => new RegExp(regexString));
const networkThenCacheUrls = JSON.parse('["https://blog.apps.secureserver.net/v1/website/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/feed/post/","https://blog.apps.secureserver.net/v1/website/0c5f15d6-6578-4dc2-860c-99f6a9a4a1f7/feed"]');
const networkThenCacheUrlsRegex = JSON.parse('["oyehamza120.godaddysites.com(?:/.*)?/f/.*"]').map(regexString => new RegExp(regexString));
self.addEventListener('unhandledrejection', function(event) {
    // eslint-disable-next-line no-console
    console.warn('sw unhandledrejection error: ', event.reason);
});

function preCacheResources() {
    return caches.open(CACHE_NAME).then(function(cache) {
        // Pre-Cache pages to improve subsequent navigation but don't making it blocking
        // Avoid extremely large websites from using the end-users data in unexpected amount
        cache.addAll(pageUrls); // Pre-cache all static assets by keeping them as installation dependency

        return cache.addAll(staticAssets);
    });
}

self.addEventListener('install', function(event) {
    // Let the new worker take over as fast as possible
    // For quirks refer: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#skip_the_waiting_phase
    self.skipWaiting();
    event.waitUntil(preCacheResources());
});

function clearOldCache() {
    return caches.keys().then(function(keys) {
        return Promise.all(keys.filter(function(key) {
            return key !== CACHE_NAME;
        }).map(function(key) {
            return caches.delete(key);
        }));
    });
}

self.addEventListener('activate', function(event) {
    // Remember to keep this step as lean as possible
    // Only sutiable for performing stuff that can't be done while the previous worker is running
    event.waitUntil(clearOldCache().then(function() {
        clients.claim(); // eslint-disable-line no-undef
    }));
});

function isPageRequest(url) {
    return url.origin === location.origin && pageUrls.includes(url.pathname);
}

function isNetworkOnlyRequest(url, requestMethod) {
    // Browser extensions don't use the standard `http` and `https` protocols
    // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
    if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
        return true;
    }

    const urlOrigin = url.origin;
    const urlPathName = url.pathname;
    const fullUrl = `${urlOrigin}${urlPathName}`;

    if (networkOnlyUrls.includes(urlOrigin) || networkOnlyUrls.includes(fullUrl)) {
        return true;
    }

    if (networkOnlyUrlsRegex.some(regex => regex.test(fullUrl))) {
        return true;
    }

    return false;
}

function isNetworkThenCacheRequest(url, requestMethod) {
    // Browser extensions don't use the standard `http` and `https` protocols
    // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
    if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
        return true;
    }

    const urlOrigin = url.origin;
    const urlPathName = url.pathname;
    const fullUrl = `${urlOrigin}${urlPathName}`;

    if (networkThenCacheUrls.includes(urlOrigin) || networkThenCacheUrls.includes(fullUrl)) {
        return true;
    }

    if (networkThenCacheUrlsRegex.some(regex => regex.test(fullUrl))) {
        return true;
    }

    return false;
}

function handleWithNetworkThenCache(event) {
    return event.respondWith(fetch(event.request).then(function(networkResponse) {
        if (!networkResponse.ok) {
            return networkResponse;
        }

        return caches.open(CACHE_NAME).then(function(cache) {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
        });
    }).catch(function() {
        // network failed, try to serve a cached response or offline page if there is one
        return caches.match(event.request);
    }));
}

function handleWithCacheThenNetwork(event) {
    return event.respondWith(caches.open(CACHE_NAME).then(function(cache) {
        return cache.match(event.request).then(function(response) {
            return response || fetch(event.request).then(function(networkResponse) {
                networkResponse.ok && cache.put(event.request, networkResponse.clone());
                return networkResponse;
            });
        });
    }).catch(function(err) {
        // TODO: respond with `offline.html` as the final fallback for page requests
        // and use appropriate response for other cases
        return err;
    }));
}

function handleWithNetwork(event) {
    return event.respondWith(fetch(event.request));
}

function handleRequests(event) {
    const requestURL = new URL(event.request.url);

    if (isNetworkOnlyRequest(requestURL, event.request.method)) {
        return handleWithNetwork(event);
    }

    if (isPageRequest(requestURL) || isNetworkThenCacheRequest(requestURL, event.request.method)) {
        // To avoid serving stale content after a publish
        // always fetch the markup from origin and use cache only when the user is offline
        return handleWithNetworkThenCache(event);
    }

    return handleWithCacheThenNetwork(event);
}

self.addEventListener('fetch', handleRequests);