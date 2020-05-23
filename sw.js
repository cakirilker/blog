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
    "revision": "1e07c28c864b263fc312787b5ecd2582"
  },
  {
    "url": "404/index.html",
    "revision": "a05fd9f3cb146ad6d572263fdcf8b09f"
  },
  {
    "url": "app-87a36d806e3476f111cf.js"
  },
  {
    "url": "app-87a36d806e3476f111cf.js.map",
    "revision": "0f239490a99db1adaf8b9fde4bfe6ca9"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-9cebbbcccb2c990e2dcb.js"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-9cebbbcccb2c990e2dcb.js.map",
    "revision": "a950afe1bcca327dcb3589a54ffe209b"
  },
  {
    "url": "chunk-map.json",
    "revision": "f428c307b3bcaab4788fc2d065b63359"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-235e751eb037707e5d1a.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-235e751eb037707e5d1a.js.map",
    "revision": "916f682476dd993162282a2582b4ccfd"
  },
  {
    "url": "component---src-pages-404-js-b0acb04990728b22a9cc.js"
  },
  {
    "url": "component---src-pages-404-js-b0acb04990728b22a9cc.js.map",
    "revision": "e78d5652a1cb4312958ecdc6ffca5425"
  },
  {
    "url": "component---src-pages-index-js-755b47728fd4c5dfcfab.js"
  },
  {
    "url": "component---src-pages-index-js-755b47728fd4c5dfcfab.js.map",
    "revision": "b916a2cc220e70018d95f6fb93af2246"
  },
  {
    "url": "component---src-templates-post-template-js-108c43abbc64a71c121a.js"
  },
  {
    "url": "component---src-templates-post-template-js-108c43abbc64a71c121a.js.map",
    "revision": "b18c36b582e482f150b03b1a4dded70a"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2b3f92c66be711092b3aad8159dc239b"
  },
  {
    "url": "framework-81e6052b3504df28bf0b.js"
  },
  {
    "url": "framework-81e6052b3504df28bf0b.js.map",
    "revision": "4673292a9dfc8e0ffbc62c10cdd98df0"
  },
  {
    "url": "getting-started/index.html",
    "revision": "74a60fdb5d9e4476a5b25bc3f3ee79c7"
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
    "revision": "c5f595debc41c0421daabc9ebe5b3bea"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "f32474defc966589ec6c2cdbed4f7202"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d9f8bbe11a2ee4f9b2389fcaabcfdbce"
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
    "revision": "4fa393120227862d07130026d4e975ba"
  },
  {
    "url": "page-data/getting-started/page-data.json",
    "revision": "7a66eeefdaec3dbf5362dca1dcfca675"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "2c23f44fde4065e6d5b8b31a4ac1dc11"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "sitemap.xml",
    "revision": "70831639a8d6cfc3923f4f17f6e40225"
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
    "url": "styles-ae6d046c35c187471a06.js"
  },
  {
    "url": "styles-ae6d046c35c187471a06.js.map",
    "revision": "f7bede00500e57b4fff89713756c0bd9"
  },
  {
    "url": "styles.f3c2c888d40c5aadd218.css"
  },
  {
    "url": "webpack-runtime-11aa8f3bf2905631fbdd.js"
  },
  {
    "url": "webpack-runtime-11aa8f3bf2905631fbdd.js.map",
    "revision": "4a5637638b120b56a1db5033560421b9"
  },
  {
    "url": "webpack.stats.json",
    "revision": "28084f317d193a201a04c7857bea1102"
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
  if (!resources || !(await caches.match(`/blog/app-87a36d806e3476f111cf.js`))) {
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
