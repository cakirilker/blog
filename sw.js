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
    "revision": "4bcdb9eef8932eeb7e88b7d2654cfb5a"
  },
  {
    "url": "404/index.html",
    "revision": "ac05e598b83a2d9cc852fe3b1c28e11e"
  },
  {
    "url": "a9a7754c-701ec3fa05f1278e7450.js"
  },
  {
    "url": "a9a7754c-701ec3fa05f1278e7450.js.map",
    "revision": "462271012545e5a5df5a3f3764efbec6"
  },
  {
    "url": "app-24e5364fb090aa1d0184.js"
  },
  {
    "url": "app-24e5364fb090aa1d0184.js.map",
    "revision": "4af6f5709898143634b7a553270f0c6e"
  },
  {
    "url": "app-8cabefebff8242bedc68.js"
  },
  {
    "url": "app-8cabefebff8242bedc68.js.map",
    "revision": "3415b2c8fb63125c8bb9871d67596d8b"
  },
  {
    "url": "app-af8ba4e868f90baa9ba4.js"
  },
  {
    "url": "app-af8ba4e868f90baa9ba4.js.map",
    "revision": "b47b66b2fdaaee699e773e5b340a61c2"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-46c64ada70fa698715ae.js"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-46c64ada70fa698715ae.js.map",
    "revision": "8c08b2a47eeb400cfbb3197db40b50eb"
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
    "revision": "2f1a1dcfb2ccca19356a40d153efeb5d"
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
    "revision": "69f54be972463f18d548c58b3c7a3dfa"
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
    "revision": "99a6d995f9c98d7528a9522266edc920"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b87fd162a204532a1cb2d52fc63a1bc2"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "7c5eca55d061bfd1534754342dd68d62"
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
    "revision": "e42b4d70babb90b987ad7854e7ab738c"
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
    "url": "polyfill-1bb330181573b3494350.js"
  },
  {
    "url": "polyfill-1bb330181573b3494350.js.map",
    "revision": "fe5c3d1300484b259f4aa6236315ceab"
  },
  {
    "url": "sitemap.xml",
    "revision": "70831639a8d6cfc3923f4f17f6e40225"
  },
  {
    "url": "static/d/1132682437.json"
  },
  {
    "url": "static/d/3649515864.json"
  },
  {
    "url": "static/d/63159454.json"
  },
  {
    "url": "styles-24c541b6ac347bae38f1.js"
  },
  {
    "url": "styles-24c541b6ac347bae38f1.js.map",
    "revision": "387715374c40c8b219a502792231f258"
  },
  {
    "url": "styles.3d3a2d5c8b942a06e39d.css"
  },
  {
    "url": "webpack-runtime-5988c4786f3db3812b75.js"
  },
  {
    "url": "webpack-runtime-5988c4786f3db3812b75.js.map",
    "revision": "5b635bdba3ba44b66daf76993a78de4f"
  },
  {
    "url": "webpack-runtime-b128e84e916d64b10dcf.js"
  },
  {
    "url": "webpack-runtime-b128e84e916d64b10dcf.js.map",
    "revision": "d22ed5a8a4b8bf496d345284a973ddea"
  },
  {
    "url": "webpack.stats.json",
    "revision": "81983b7caaed65d666bf6b09e39bb938"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
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
  if (!resources || !(await caches.match(`/blog/app-8cabefebff8242bedc68.js`))) {
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
