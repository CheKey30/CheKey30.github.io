/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/shuchen's blog/public/2019/05/12/Analysis-of-algorithms/index.html","1729c2fdd95b355781fa5eebdd264484"],["D:/shuchen's blog/public/2019/05/13/Search-algorithms/index.html","cf89bdb2ed8795a694c519d1cc1e6b1e"],["D:/shuchen's blog/public/2019/05/14/Sort-algorithms/index.html","d829dff40f080dde4952e51149f7eb21"],["D:/shuchen's blog/public/2019/05/15/New-Start/index.html","876c66cfba6832a859f9973776e1d251"],["D:/shuchen's blog/public/2019/05/16/Sort-algorithms-II/index.html","f1e696f2e505eb973e284087ef5f7c88"],["D:/shuchen's blog/public/2019/05/26/个人机器学习平台搭建1/index.html","a3a07fcfe2275d71c9c1b4de413ae1f0"],["D:/shuchen's blog/public/2019/07/20/个人机器学习平台搭建2/index.html","f8498ed1731cd34eb7c76a4be92ef73a"],["D:/shuchen's blog/public/2019/07/21/利用frp实现非局域网远程连接/index.html","097006f61de77152af7b0f630798ee3a"],["D:/shuchen's blog/public/2019/07/23/frp内网穿透+jupyter-notebook远程连接/index.html","0251e00ccd2f2fc190d63267ec6a3ffe"],["D:/shuchen's blog/public/2019/08/01/Backtracking/index.html","8207b2c941b1d811e3c3b1f66a54b654"],["D:/shuchen's blog/public/2019/08/03/Stack-and-Queue/index.html","4cdde1b3a969a1e961e5d3895b6511d5"],["D:/shuchen's blog/public/2019/08/31/Manacher/index.html","9ddd0cf9294b912da3b3e2eafe42ef25"],["D:/shuchen's blog/public/2019/08/31/Tree/index.html","9cc4e7f4fe7c8ff68641c781cfa60e97"],["D:/shuchen's blog/public/2019/08/31/bit-manipulation/index.html","0ae33c5d03761cc616f5ffd85906ed9a"],["D:/shuchen's blog/public/2019/12/18/MySQL笔记之一-存储结构，存储引擎/index.html","d623216482141135e90220e71dbc813a"],["D:/shuchen's blog/public/2019/12/20/MySQL笔记之三事务的隔离级别/index.html","ecb16a1a84fa5ded0534c14893c64b30"],["D:/shuchen's blog/public/2019/12/20/MySQL笔记之二索引建立和优化/index.html","4e8d8d5e49fcfb4d8d533dee54354168"],["D:/shuchen's blog/public/2020/02/19/dubbo-入门笔记1/index.html","5fb74cdd4e3007d08e18d3b99ea34924"],["D:/shuchen's blog/public/2020/03/25/JDK-源码学习笔记-1/index.html","8a1733ede1b9029a6c691d8a2755024c"],["D:/shuchen's blog/public/2020/05/30/dubbo-入门笔记2/index.html","2ac1965cc0fc01104c778df499e980cf"],["D:/shuchen's blog/public/404/index.html","7b7be43c099c42746d684cf8ed230dd9"],["D:/shuchen's blog/public/README.html","3c4042aa5c3592fe1c802d7c4e29626f"],["D:/shuchen's blog/public/archives/2019/05/index.html","0c1ae9bf9a431123b1830ead055a7cc3"],["D:/shuchen's blog/public/archives/2019/07/index.html","497d65694f8689de09b356cfe0cf882e"],["D:/shuchen's blog/public/archives/2019/08/index.html","3a7e9cdecc461e86234fb376917ea2af"],["D:/shuchen's blog/public/archives/2019/12/index.html","8e9b2e475e8357ec37067250b1040326"],["D:/shuchen's blog/public/archives/2019/index.html","bb48a6fa954d80032482dbb09289a6ea"],["D:/shuchen's blog/public/archives/2019/page/2/index.html","b1523bce45fcc289cfec2e8ef1bfdc9e"],["D:/shuchen's blog/public/archives/2020/02/index.html","002557a46b187e5f144ac2c608eeb80f"],["D:/shuchen's blog/public/archives/2020/03/index.html","d90887d2a50b6f6240e1faf9448e552e"],["D:/shuchen's blog/public/archives/2020/05/index.html","90d680fbd3c99a6da18369c8a423ee5f"],["D:/shuchen's blog/public/archives/2020/index.html","d950be2d450d0acd227f875c552450da"],["D:/shuchen's blog/public/archives/index.html","69cb07e81931bfb9087013a36b8e5209"],["D:/shuchen's blog/public/archives/page/2/index.html","06a83df591925941244d933497dc957a"],["D:/shuchen's blog/public/categories/index.html","dbbee7cbbfee7f9c0a35bf53442862c3"],["D:/shuchen's blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/shuchen's blog/public/css/index.css","e60bc24015b8454e844db53b799155e1"],["D:/shuchen's blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/shuchen's blog/public/gallery/index.html","51e7d431b496cd977c1bea23983402cb"],["D:/shuchen's blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/shuchen's blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/shuchen's blog/public/index.html","cebfa39d5e98324d725c96b8f6684f59"],["D:/shuchen's blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/shuchen's blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/shuchen's blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/shuchen's blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/shuchen's blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/shuchen's blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/shuchen's blog/public/js/scroll.js","603fa932f3ec986228c2136a51a14f94"],["D:/shuchen's blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/shuchen's blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/shuchen's blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/shuchen's blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/shuchen's blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/shuchen's blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/shuchen's blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/shuchen's blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/shuchen's blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/shuchen's blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/shuchen's blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/shuchen's blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/shuchen's blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/shuchen's blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/shuchen's blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/shuchen's blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/shuchen's blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/shuchen's blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/shuchen's blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/shuchen's blog/public/page/2/index.html","1057ba3cc54a0c0f215febc0bd6280a2"],["D:/shuchen's blog/public/search/index.html","5bcac08f4bcefc62547f94b35a701a53"],["D:/shuchen's blog/public/slides/index.html","0186e046a28a417cf3119a2b2238cb68"],["D:/shuchen's blog/public/tags/Equipment/index.html","da1e5051e53c7c4c0fa26b7f545b6328"],["D:/shuchen's blog/public/tags/JDK/index.html","deb9d573ff19cfbb8cc66971b084c45b"],["D:/shuchen's blog/public/tags/Java/index.html","8b3c0d74eba623097b216533b7e1bf80"],["D:/shuchen's blog/public/tags/Linux/index.html","99e279d631779c2f3ccfa42ff930d409"],["D:/shuchen's blog/public/tags/Machine-Learning/index.html","47c8b183ea0b46e6737d1a69136f12ad"],["D:/shuchen's blog/public/tags/MySQL/index.html","eea02dcdcdbec9204597e625a39dcb1c"],["D:/shuchen's blog/public/tags/algorithm/index.html","8bca88a0b6bcb7ed6619070969593ca3"],["D:/shuchen's blog/public/tags/dubbo/index.html","c92aa16acb568db0f374c2f4063a8908"],["D:/shuchen's blog/public/tags/index.html","dad86e95c0442a5bd67d67b862d9417c"],["D:/shuchen's blog/public/tags/talk/index.html","d1f78160b3acde1994e6f0f2e62a6c59"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







