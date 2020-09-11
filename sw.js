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
    "revision": "cb9336124ed0b7ec9f05915631fb82c8"
  },
  {
    "url": "404/index.html",
    "revision": "087c78c2b07bae52e8b3dc827077f440"
  },
  {
    "url": "a9a7754c-701ec3fa05f1278e7450.js"
  },
  {
    "url": "a9a7754c-701ec3fa05f1278e7450.js.map",
    "revision": "462271012545e5a5df5a3f3764efbec6"
  },
  {
    "url": "app-8cabefebff8242bedc68.js"
  },
  {
    "url": "app-8cabefebff8242bedc68.js.map",
    "revision": "3415b2c8fb63125c8bb9871d67596d8b"
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
    "revision": "9b2618d4743190680d34bfcb073429cf"
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
    "revision": "8e9967987ea79e183fa20df62cc5e4aa"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b87fd162a204532a1cb2d52fc63a1bc2"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1db82e5cea4e45494ac4cbdb74a1e9eb"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "a08b4895c7befbdb6bd592fcae652b14"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "9fe569bae79477e5e96caf91e3a3bef5"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "e42b4d70babb90b987ad7854e7ab738c"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "783445f1b0202513772d41b4c53ffba9"
  },
  {
    "url": "page-data/getting-started/page-data.json",
    "revision": "1ad90d03465a199a46c5327baa92341c"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "9198648749d1b0e5d63443a1af151d08"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/testing-react-part-1/page-data.json",
    "revision": "69a60fa4c4b7eb4059930ea0af46539c"
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
    "url": "static/4d182f6f5810588630547088335ef5d7/12f09/eslint-answers.png"
  },
  {
    "url": "static/4d182f6f5810588630547088335ef5d7/9685e/eslint-answers.png"
  },
  {
    "url": "static/4d182f6f5810588630547088335ef5d7/c83ae/eslint-answers.png"
  },
  {
    "url": "static/4d182f6f5810588630547088335ef5d7/e4a3f/eslint-answers.png"
  },
  {
    "url": "static/4d182f6f5810588630547088335ef5d7/efc66/eslint-answers.png"
  },
  {
    "url": "static/4d182f6f5810588630547088335ef5d7/fcda8/eslint-answers.png"
  },
  {
    "url": "static/54a03f9b6fdddcae5f1e5bd650741af3/12f09/loop-e2e.png"
  },
  {
    "url": "static/54a03f9b6fdddcae5f1e5bd650741af3/b1cde/loop-e2e.png"
  },
  {
    "url": "static/54a03f9b6fdddcae5f1e5bd650741af3/e4a3f/loop-e2e.png"
  },
  {
    "url": "static/c2d41fd58b6acc732481d69a80ccefb8/12f09/test-failed.png"
  },
  {
    "url": "static/c2d41fd58b6acc732481d69a80ccefb8/5bf79/test-failed.png"
  },
  {
    "url": "static/c2d41fd58b6acc732481d69a80ccefb8/e4a3f/test-failed.png"
  },
  {
    "url": "static/c2d41fd58b6acc732481d69a80ccefb8/efc66/test-failed.png"
  },
  {
    "url": "static/c2d41fd58b6acc732481d69a80ccefb8/fcda8/test-failed.png"
  },
  {
    "url": "static/c5ef264949024731cf07f55efb9981ae/12f09/cypress-fail.png"
  },
  {
    "url": "static/c5ef264949024731cf07f55efb9981ae/dc333/cypress-fail.png"
  },
  {
    "url": "static/c5ef264949024731cf07f55efb9981ae/e4a3f/cypress-fail.png"
  },
  {
    "url": "static/c5ef264949024731cf07f55efb9981ae/efc66/cypress-fail.png"
  },
  {
    "url": "static/c5ef264949024731cf07f55efb9981ae/fcda8/cypress-fail.png"
  },
  {
    "url": "static/c9208a5dd5dc0cd9c30ae69e387ad4e9/12f09/test-failed-2.png"
  },
  {
    "url": "static/c9208a5dd5dc0cd9c30ae69e387ad4e9/2e694/test-failed-2.png"
  },
  {
    "url": "static/c9208a5dd5dc0cd9c30ae69e387ad4e9/e4a3f/test-failed-2.png"
  },
  {
    "url": "static/c9208a5dd5dc0cd9c30ae69e387ad4e9/efc66/test-failed-2.png"
  },
  {
    "url": "static/c9208a5dd5dc0cd9c30ae69e387ad4e9/fcda8/test-failed-2.png"
  },
  {
    "url": "static/cd00ea6276e603d70d1fced38ec74500/12f09/cypress-fail-2.png"
  },
  {
    "url": "static/cd00ea6276e603d70d1fced38ec74500/97a96/cypress-fail-2.png"
  },
  {
    "url": "static/cd00ea6276e603d70d1fced38ec74500/c83ae/cypress-fail-2.png"
  },
  {
    "url": "static/cd00ea6276e603d70d1fced38ec74500/e4a3f/cypress-fail-2.png"
  },
  {
    "url": "static/cd00ea6276e603d70d1fced38ec74500/efc66/cypress-fail-2.png"
  },
  {
    "url": "static/cd00ea6276e603d70d1fced38ec74500/fcda8/cypress-fail-2.png"
  },
  {
    "url": "static/cfa95d85450ed855f94d05d918157b9f/12f09/test-todo.png"
  },
  {
    "url": "static/cfa95d85450ed855f94d05d918157b9f/5bf79/test-todo.png"
  },
  {
    "url": "static/cfa95d85450ed855f94d05d918157b9f/e4a3f/test-todo.png"
  },
  {
    "url": "static/cfa95d85450ed855f94d05d918157b9f/efc66/test-todo.png"
  },
  {
    "url": "static/cfa95d85450ed855f94d05d918157b9f/fcda8/test-todo.png"
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
    "url": "static/d12d27ee38c7969da1e475243433cbfc/12f09/initial-cypress-test.png"
  },
  {
    "url": "static/d12d27ee38c7969da1e475243433cbfc/ae28e/initial-cypress-test.png"
  },
  {
    "url": "static/d12d27ee38c7969da1e475243433cbfc/c83ae/initial-cypress-test.png"
  },
  {
    "url": "static/d12d27ee38c7969da1e475243433cbfc/e4a3f/initial-cypress-test.png"
  },
  {
    "url": "static/d12d27ee38c7969da1e475243433cbfc/efc66/initial-cypress-test.png"
  },
  {
    "url": "static/d12d27ee38c7969da1e475243433cbfc/fcda8/initial-cypress-test.png"
  },
  {
    "url": "static/e4ff31291a182ce6df45a57526690bdc/0c3d0/test-listing-failed.png"
  },
  {
    "url": "static/e4ff31291a182ce6df45a57526690bdc/12f09/test-listing-failed.png"
  },
  {
    "url": "static/e4ff31291a182ce6df45a57526690bdc/c83ae/test-listing-failed.png"
  },
  {
    "url": "static/e4ff31291a182ce6df45a57526690bdc/e4a3f/test-listing-failed.png"
  },
  {
    "url": "static/e4ff31291a182ce6df45a57526690bdc/efc66/test-listing-failed.png"
  },
  {
    "url": "static/e4ff31291a182ce6df45a57526690bdc/fcda8/test-listing-failed.png"
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
