/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "51b47d9444b1c54b2228f2d90f64c0fb"
  },
  {
    "url": "404/index.html",
    "revision": "0aea1558026d6c96bb92b5015b25751b"
  },
  {
    "url": "app-c5ae6407f0591c96a572.js"
  },
  {
    "url": "app-c5ae6407f0591c96a572.js.map",
    "revision": "61ea90bbbd24592cbe9ae261ea12a54c"
  },
  {
    "url": "app-e0494e7bc6cd728ecaf5.js"
  },
  {
    "url": "app-e0494e7bc6cd728ecaf5.js.map",
    "revision": "f735768fe7c93570cf6194ddb1932b53"
  },
  {
    "url": "chunk-map.json",
    "revision": "9e01d9649fb8a4e0031b6f81f67229d4"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-c25716df4fbb2532700a.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-c25716df4fbb2532700a.js.map",
    "revision": "9f9b77a24c6ef6649c074829a4707138"
  },
  {
    "url": "component---src-pages-404-js-a1287b5769a04fc22d03.js"
  },
  {
    "url": "component---src-pages-404-js-a1287b5769a04fc22d03.js.map",
    "revision": "6028b45b8283f266ef5ddb7a5ae319e8"
  },
  {
    "url": "component---src-pages-index-js-28e64ae9919427afdda9.js"
  },
  {
    "url": "component---src-pages-index-js-28e64ae9919427afdda9.js.map",
    "revision": "390e3470faeade83bde9b39267af2cfd"
  },
  {
    "url": "component---src-templates-blog-post-js-28344e0342544c7a41e1.js"
  },
  {
    "url": "component---src-templates-blog-post-js-28344e0342544c7a41e1.js.map",
    "revision": "cf68a3d3907bc4fbe3b14afb8efb4e8c"
  },
  {
    "url": "d5d7a013bc6c1e2b6d7db819052c16d7efea5559-eb053155b615ea04ce7f.js"
  },
  {
    "url": "d5d7a013bc6c1e2b6d7db819052c16d7efea5559-eb053155b615ea04ce7f.js.map",
    "revision": "3bb8f97e060db60768714a6466cf2866"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2b3f92c66be711092b3aad8159dc239b"
  },
  {
    "url": "framework-d54fcf3f0204b459cf2d.js"
  },
  {
    "url": "framework-d54fcf3f0204b459cf2d.js.map",
    "revision": "616ca85c1adcf4be3b9f747836c81a4a"
  },
  {
    "url": "hello-world/index.html",
    "revision": "578911118da9936892d4dc775fe0d43b"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "6aa69fa27c3ba0f4546169dc6e244df4"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "90515316d09404d38a9f3d5d1bffa926"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "57b810fb73989ed4000665142dac7989"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "db39cfee3b71f9e1bb829d4adb5e22d4"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "3a318e3ceb32f2e06b497c0795ae14cb"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "a8c2b1f94376a0ee09ef45d2c266da8c"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "85ea2ec37c2e6766c0a58176afb38b92"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "2d2d9f28e1e5a9b51e494c57f08f0cfd"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "2709e2c276cf2e2fda7ea5d151ae1a11"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "ae4dc4f0021c71e7bb71dfc792826d11"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e85deb6ce81633fdffb0cb28d48e2572"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "01a23e85d9856cdf6a649e8094b7e698"
  },
  {
    "url": "page-data/hello-world/page-data.json",
    "revision": "6238bcf05f8118e760fad8148a095ded"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "10be23971ec41915e7cf0f38cef003be"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "sitemap.xml",
    "revision": "47a5b754a108b0c83b4bb60f5f78c7cb"
  },
  {
    "url": "static/d/2417117884.json"
  },
  {
    "url": "static/d/2969191536.json"
  },
  {
    "url": "static/d/856328897.json"
  },
  {
    "url": "styles-823ae8103e36ae8a7f9f.js"
  },
  {
    "url": "styles-823ae8103e36ae8a7f9f.js.map",
    "revision": "cb39b01d419a543685bd5ad719f1bc3e"
  },
  {
    "url": "styles.d5ef0abb16ee382cea7f.css"
  },
  {
    "url": "webpack-runtime-6249f4de1e7b802dc587.js"
  },
  {
    "url": "webpack-runtime-6249f4de1e7b802dc587.js.map",
    "revision": "3899a091530cf846de8fc949fd0cb77c"
  },
  {
    "url": "webpack-runtime-cf4982655a1c95b34160.js"
  },
  {
    "url": "webpack-runtime-cf4982655a1c95b34160.js.map",
    "revision": "2102b8e9f49e27d00938eed922b78b65"
  },
  {
    "url": "webpack.stats.json",
    "revision": "5468119be257e76012195f0048a30c63"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/blog`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/blog/app-c5ae6407f0591c96a572.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/blog/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
