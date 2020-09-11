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
    "revision": "daa6c10cf867953154ba2349110ea4c0"
  },
  {
    "url": "404/index.html",
    "revision": "912cb80f65ec7349ecfd6b764e72bb5b"
  },
  {
    "url": "a9a7754c-701ec3fa05f1278e7450.js"
  },
  {
    "url": "a9a7754c-701ec3fa05f1278e7450.js.map",
    "revision": "462271012545e5a5df5a3f3764efbec6"
  },
  {
    "url": "app-2889b9f66c6b77ab6b1d.js"
  },
  {
    "url": "app-2889b9f66c6b77ab6b1d.js.map",
    "revision": "58f3134f73c655702c5a3c5c8f2f99ab"
  },
  {
    "url": "app-a028001cd4afeea80e15.js"
  },
  {
    "url": "app-a028001cd4afeea80e15.js.map",
    "revision": "6b7a3861ac53c723027a9954bd99321f"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-03e68c872898f9e10010.js"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-03e68c872898f9e10010.js.map",
    "revision": "fa3f25d05c49fbcecb17eb1d02d85b4f"
  },
  {
    "url": "cb1608f2-79bbfa53d6e3e5b4374a.js"
  },
  {
    "url": "cb1608f2-79bbfa53d6e3e5b4374a.js.map",
    "revision": "dff993385c26c72f2160a250a2a45995"
  },
  {
    "url": "chunk-map.json",
    "revision": "d47a50b8d24c37f4d8fd0e30590954b7"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e5cb9e0c77a823b86dc2.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e5cb9e0c77a823b86dc2.js.map",
    "revision": "ffad71d20086cc3decaa1bc515572407"
  },
  {
    "url": "component---src-pages-404-js-b5340ac47653ec5093a3.js"
  },
  {
    "url": "component---src-pages-404-js-b5340ac47653ec5093a3.js.map",
    "revision": "b94db15a2a7727eb7f9875ade957bf17"
  },
  {
    "url": "component---src-pages-index-js-c265a20190cfa614699d.js"
  },
  {
    "url": "component---src-pages-index-js-c265a20190cfa614699d.js.map",
    "revision": "8f430a8e3ac222abb02c10ce78ba5aea"
  },
  {
    "url": "component---src-templates-post-template-js-01225c7f2cbd3f907cba.js"
  },
  {
    "url": "component---src-templates-post-template-js-01225c7f2cbd3f907cba.js.map",
    "revision": "5809babe5f802370d21379418699e22a"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2b3f92c66be711092b3aad8159dc239b"
  },
  {
    "url": "framework-b5b229d58c3c710d5429.js"
  },
  {
    "url": "framework-b5b229d58c3c710d5429.js.map",
    "revision": "912f19303fcb38625576731ce25e1b8f"
  },
  {
    "url": "getting-started/index.html",
    "revision": "7f9f723e5c7e2f11b3ca96a8738e4514"
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
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "1a8559413f7a1299096afc43c5eff4a9"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b87fd162a204532a1cb2d52fc63a1bc2"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a1f4b8a608d63c4de68577f375ef7434"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "7132d2aa30453ca5a1cde7dc2522a9d7"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "5b647e46c7ab5ff292ec76303b7283c1"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "d741d57d13047943e176fcee446048c8"
  },
  {
    "url": "page-data/getting-started/page-data.json",
    "revision": "6c2f9071fb8fd34152672da02a897472"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "491c91ff21d0eaaab34a5fe9db67527b"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/sq/d/1132682437.json",
    "revision": "ad6a96b766085f443b720139191996da"
  },
  {
    "url": "page-data/sq/d/3649515864.json",
    "revision": "99ada62b51bb7a0eafdc2d03252cc3a8"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "87c58dea02a06ddad7e33febe1babe08"
  },
  {
    "url": "polyfill-905013744daa67b74738.js"
  },
  {
    "url": "polyfill-905013744daa67b74738.js.map",
    "revision": "bf3e0bc23ed7dbe50dfc14537dc2b86f"
  },
  {
    "url": "sitemap.xml",
    "revision": "b083bc5efead6609fb237e35a4ea0137"
  },
  {
    "url": "styles-24c541b6ac347bae38f1.js"
  },
  {
    "url": "styles-24c541b6ac347bae38f1.js.map",
    "revision": "387715374c40c8b219a502792231f258"
  },
  {
    "url": "styles.0b05fc5f3048033406ca.css"
  },
  {
    "url": "webpack-runtime-684c3d81874ba0d5592e.js"
  },
  {
    "url": "webpack-runtime-684c3d81874ba0d5592e.js.map",
    "revision": "d1324abac93578ffe4f1bfa9091207b8"
  },
  {
    "url": "webpack-runtime-d3a16efa939e0b2acdd3.js"
  },
  {
    "url": "webpack-runtime-d3a16efa939e0b2acdd3.js.map",
    "revision": "ab39892929f89cfb2dac48ea357e8049"
  },
  {
    "url": "webpack.stats.json",
    "revision": "914eb16a03f7a060094bf5409abb4c76"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

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
  if (!resources || !(await caches.match(`/blog/app-2889b9f66c6b77ab6b1d.js`))) {
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
