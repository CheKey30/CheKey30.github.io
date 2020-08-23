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

var precacheConfig = [["D:/shuchen's blog/public/2019/05/12/Analysis-of-algorithms/index.html","2f3427694d2b402783f7363a318e26f2"],["D:/shuchen's blog/public/2019/05/13/Search-algorithms/index.html","ce8d64741e5c210c1520dc1e3471853f"],["D:/shuchen's blog/public/2019/05/14/Sort-algorithms/index.html","3bb5beeb3c6340abd20327a1531250ac"],["D:/shuchen's blog/public/2019/05/15/New-Start/index.html","2b3e915f09724015bd3b9dae227abd43"],["D:/shuchen's blog/public/2019/05/16/Sort-algorithms-II/index.html","99bd3c90b8c7e64ece72d4dec6e0a922"],["D:/shuchen's blog/public/2019/05/26/个人机器学习平台搭建1/index.html","45438e79c933cf54b2b41f3313f3a9ef"],["D:/shuchen's blog/public/2019/07/20/个人机器学习平台搭建2/index.html","a8d3b60db8de9ec437504d2c4968ad9e"],["D:/shuchen's blog/public/2019/07/21/利用frp实现非局域网远程连接/index.html","f86e3c61736a64fb000904d8886f430b"],["D:/shuchen's blog/public/2019/07/23/frp内网穿透+jupyter-notebook远程连接/index.html","35ea1d8a1f26b4a32d7e880c9b132ee6"],["D:/shuchen's blog/public/2019/08/01/Backtracking/index.html","1b6747d13fff1e18d7e142541654a91a"],["D:/shuchen's blog/public/2019/08/03/Stack-and-Queue/index.html","41a4a8e49a23b64df240e8120dab87aa"],["D:/shuchen's blog/public/2019/08/31/Manacher/index.html","736c32720cc78a93fa09902f771d0586"],["D:/shuchen's blog/public/2019/08/31/Tree/index.html","44242634334020cdc16b283083289172"],["D:/shuchen's blog/public/2019/08/31/bit-manipulation/index.html","9d5dd4d3c3a4d426695455b32415edd1"],["D:/shuchen's blog/public/2019/12/18/MySQL笔记之一-存储结构，存储引擎/index.html","bbc57ad215f595840611dea9b5482ec9"],["D:/shuchen's blog/public/2019/12/20/MySQL笔记之三事务的隔离级别/index.html","46e3dd371ee24b71d072256c664f5ae6"],["D:/shuchen's blog/public/2019/12/20/MySQL笔记之二索引建立和优化/index.html","bc098433fd68a98ddec10abe9d63370d"],["D:/shuchen's blog/public/2020/02/19/dubbo-入门笔记1/index.html","fc43a6a2762085bd4a7f2b5afcebbe3a"],["D:/shuchen's blog/public/2020/03/25/JDK-源码学习笔记-1/index.html","7627c87bb592e6f9681af540694e5a71"],["D:/shuchen's blog/public/2020/05/30/dubbo-入门笔记2/index.html","9cf6ee18351221b9a83ae08c5b2302d7"],["D:/shuchen's blog/public/404/index.html","13e990e6452f172baa9b61c170d8c68d"],["D:/shuchen's blog/public/README.html","619c254621ec9a9ad1e15d8635302d36"],["D:/shuchen's blog/public/archives/2019/05/index.html","17bc4297993f61cf4f24b43dcb9f4a28"],["D:/shuchen's blog/public/archives/2019/07/index.html","df3252597fc37966776fd2458d918971"],["D:/shuchen's blog/public/archives/2019/08/index.html","404983d593faaa126c44c8115ab1188d"],["D:/shuchen's blog/public/archives/2019/12/index.html","82f70db2d0a7961eee94ea6faa01f267"],["D:/shuchen's blog/public/archives/2019/index.html","7f9739fb117ffdf479980db7c2f57c69"],["D:/shuchen's blog/public/archives/2019/page/2/index.html","687cd5038da191ae349904531d099a7d"],["D:/shuchen's blog/public/archives/2020/02/index.html","fb63ee733f0f919f8f0e2afb819cf0dc"],["D:/shuchen's blog/public/archives/2020/03/index.html","f5fed7f9f0dfc83334cc0a5884473020"],["D:/shuchen's blog/public/archives/2020/05/index.html","62f67df0266f64a80f9f17186ddf4b29"],["D:/shuchen's blog/public/archives/2020/index.html","1aced83b422fbd66540c40af41b7650e"],["D:/shuchen's blog/public/archives/index.html","b5ec6b5f5060221cb81c9d469d6e660f"],["D:/shuchen's blog/public/archives/page/2/index.html","8f4e713005fa7b664f637974d49a9a9c"],["D:/shuchen's blog/public/categories/index.html","ee3947c5a34925e145cd7f3f5cd376af"],["D:/shuchen's blog/public/css/404.css","b1bb50e1fabe41adcec483f6427fb3aa"],["D:/shuchen's blog/public/css/index.css","688a9b553fdf94d96a69b23e148645a3"],["D:/shuchen's blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/shuchen's blog/public/gallery/index.html","e2c12b18c86cbf6eb2032748e657c54a"],["D:/shuchen's blog/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/shuchen's blog/public/img/avatar.png","6cc4a809d23e3d8946a299ae4ce4e4cd"],["D:/shuchen's blog/public/index.html","90048aed3d58c445ac67502497ab5d94"],["D:/shuchen's blog/public/js/copy.js","45aae54bf2e43ac27ecc41eb5e0bacf7"],["D:/shuchen's blog/public/js/fancybox.js","f84d626654b9bbc05720952b3effe062"],["D:/shuchen's blog/public/js/fireworks.js","35933ce61c158ef9c33b5e089fe757ac"],["D:/shuchen's blog/public/js/head.js","347edd99f8e3921b45fa617e839d8182"],["D:/shuchen's blog/public/js/hexo-theme-melody.js","d41d8cd98f00b204e9800998ecf8427e"],["D:/shuchen's blog/public/js/katex.js","d971ba8b8dee1120ef66744b89cfd2b1"],["D:/shuchen's blog/public/js/scroll.js","603fa932f3ec986228c2136a51a14f94"],["D:/shuchen's blog/public/js/search/algolia.js","53160985d32d6fd66d98aa0e05b081ac"],["D:/shuchen's blog/public/js/search/local-search.js","1565b508bd866ed6fbd724a3858af5d8"],["D:/shuchen's blog/public/js/sidebar.js","d24db780974e661198eeb2e45f20a28f"],["D:/shuchen's blog/public/js/third-party/anime.min.js","9b4bbe6deb700e1c3606eab732f5eea5"],["D:/shuchen's blog/public/js/third-party/canvas-ribbon.js","09c181544ddff1db701db02ac30453e0"],["D:/shuchen's blog/public/js/third-party/jquery.fancybox.min.js","3c9fa1c1199cd4f874d855ecb1641335"],["D:/shuchen's blog/public/js/third-party/jquery.min.js","c9f5aeeca3ad37bf2aa006139b935f0a"],["D:/shuchen's blog/public/js/third-party/reveal/head.min.js","aad121203010122e05f1766d92385214"],["D:/shuchen's blog/public/js/third-party/reveal/highlight.min.js","44594243bec43813a16371af8fe7e105"],["D:/shuchen's blog/public/js/third-party/reveal/markdown.min.js","7ec4cef5a7fe3f0bf0eb4dc6d7bca114"],["D:/shuchen's blog/public/js/third-party/reveal/marked.min.js","c2a88705e206d71dc21fdc4445349127"],["D:/shuchen's blog/public/js/third-party/reveal/math.min.js","0a278fee2e57c530ab07f7d2d9ea8d96"],["D:/shuchen's blog/public/js/third-party/reveal/notes.min.js","89a0dfae4d706f9c75b317f686c3aa14"],["D:/shuchen's blog/public/js/third-party/reveal/reveal.min.js","8988419d67efb5fe93e291a357e26ec9"],["D:/shuchen's blog/public/js/third-party/reveal/zoom.min.js","9791f96e63e7d534cba2b67d4bda0419"],["D:/shuchen's blog/public/js/third-party/velocity.min.js","64da069aba987ea0512cf610600a56d1"],["D:/shuchen's blog/public/js/third-party/velocity.ui.min.js","c8ca438424a080620f7b2f4ee4b0fff1"],["D:/shuchen's blog/public/js/transition.js","911db4268f0f6621073afcced9e1bfef"],["D:/shuchen's blog/public/js/utils.js","3ff3423d966a1c351e9867813b3f6d36"],["D:/shuchen's blog/public/page/2/index.html","c3e41606115877ddaedbfe837fd3670f"],["D:/shuchen's blog/public/search/index.html","72b0eba22c1e2ded88880e6219d689b6"],["D:/shuchen's blog/public/slides/index.html","f7ecf89fdfd1ede1aa39a6ad28df58a5"],["D:/shuchen's blog/public/tags/Equipment/index.html","d137902587418ee8575b402126a13c15"],["D:/shuchen's blog/public/tags/JDK/index.html","30693b5e71805196696388c7dc9bd080"],["D:/shuchen's blog/public/tags/Java/index.html","b0cd3b3d9642f905fa6c513e29f81b07"],["D:/shuchen's blog/public/tags/Linux/index.html","a28a351001f62a377a8af266fe89720e"],["D:/shuchen's blog/public/tags/Machine-Learning/index.html","dcd053a3ec020f036ecea85d03eae1a8"],["D:/shuchen's blog/public/tags/MySQL/index.html","9464770eb3ab5aa1fb511788c39f64f4"],["D:/shuchen's blog/public/tags/algorithm/index.html","87ae7d9522ab70817c0ac9a3424cde7f"],["D:/shuchen's blog/public/tags/dubbo/index.html","02842994cf97cdfe426b6d1cf7149dd4"],["D:/shuchen's blog/public/tags/index.html","026819f72ea651a5733e6971795153cf"],["D:/shuchen's blog/public/tags/talk/index.html","9c9175b8004b77d12cbcff77abad5332"]];
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







