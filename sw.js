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
    "revision": "6e6e4c3d53fdfd565bc51e729e63e3b2"
  },
  {
    "url": "404/index.html",
    "revision": "a9ead56658787eed298c298f12b308e8"
  },
  {
    "url": "a9a7754c-7d3eed2cffadbf1fda62.js"
  },
  {
    "url": "a9a7754c-7d3eed2cffadbf1fda62.js.map",
    "revision": "31d1ee33adbb3a187c0d7d1fb0df2a95"
  },
  {
    "url": "app-bb6a33a9f5eb7aa9bf71.js"
  },
  {
    "url": "app-bb6a33a9f5eb7aa9bf71.js.map",
    "revision": "2181d0dbec39e8956d1cf7b07993d3f2"
  },
  {
    "url": "app-e16227ebe5ba1338afa7.js"
  },
  {
    "url": "app-e16227ebe5ba1338afa7.js.map",
    "revision": "37a207b506c74850e9527e3029a108ec"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-77f04cb777f1d63a8b42.js"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-77f04cb777f1d63a8b42.js.map",
    "revision": "1d2cc53bc797fe652a4da4ed8129fc75"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-85618bb4bc19f33e222c.js"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-85618bb4bc19f33e222c.js.map",
    "revision": "6220e9380dcd6c5e3601b0f44a2065fe"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-aecc8d3d8c87fad05ab9.js"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-aecc8d3d8c87fad05ab9.js.map",
    "revision": "e7a9a67fcd2db488581f14dd832cd4f3"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-c97bc1187996b6a270a3.js"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-c97bc1187996b6a270a3.js.map",
    "revision": "4a08d09f721a68ab6490ef239160fc75"
  },
  {
    "url": "cb1608f2-941f511b66e6f3e8b7e2.js"
  },
  {
    "url": "cb1608f2-941f511b66e6f3e8b7e2.js.map",
    "revision": "4a251bfa321d193d61ff654dc886f33a"
  },
  {
    "url": "chunk-map.json",
    "revision": "c214e96f4aba3a859f72bef161911e3e"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-06e676c3cd7b78941a0b.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-06e676c3cd7b78941a0b.js.map",
    "revision": "68dfd5f0448c3f87e5b11cdf109a44f0"
  },
  {
    "url": "component---src-pages-404-js-ce6375a384fea3ae54e9.js"
  },
  {
    "url": "component---src-pages-404-js-ce6375a384fea3ae54e9.js.map",
    "revision": "875ab88b482b5e2ca41a01aa24b38bab"
  },
  {
    "url": "component---src-pages-index-js-4af9532aa533fa6add7b.js"
  },
  {
    "url": "component---src-pages-index-js-4af9532aa533fa6add7b.js.map",
    "revision": "54e93ba5b15c05be9b4897fd9abbde5f"
  },
  {
    "url": "component---src-templates-post-template-js-1d8fa26467d4998fd3c9.js"
  },
  {
    "url": "component---src-templates-post-template-js-1d8fa26467d4998fd3c9.js.map",
    "revision": "7286cd1da790d12de357b43b68f06340"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "2b3f92c66be711092b3aad8159dc239b"
  },
  {
    "url": "framework-75da9754c2a76bbaf08a.js"
  },
  {
    "url": "framework-75da9754c2a76bbaf08a.js.map",
    "revision": "542c967af4f8d296f0b4f44e8d9abdce"
  },
  {
    "url": "getting-started/index.html",
    "revision": "734da4f602e6f308c566d175533ebe9a"
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
    "revision": "7ab97b87499378902d349d8ef5514349"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "f32474defc966589ec6c2cdbed4f7202"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "3d6e96198b99ae1fc4cb26d101fff70a"
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
    "revision": "8388bc9e412e32598aefc4a0f8f3167b"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "e50187a21ae8c7b9b1b1626ae5bcc51c"
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
    "revision": "b083bc5efead6609fb237e35a4ea0137"
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
    "url": "styles-0088909554f7ad2ac065.js"
  },
  {
    "url": "styles-0088909554f7ad2ac065.js.map",
    "revision": "3e5a7ca32c01cd61ca6c408b18c8f583"
  },
  {
    "url": "styles.634a9500b5b1b4cd80a5.css"
  },
  {
    "url": "webpack-runtime-02ca3010f5f75a8f35e7.js"
  },
  {
    "url": "webpack-runtime-02ca3010f5f75a8f35e7.js.map",
    "revision": "05a483eb53b0a658a04c9da0b2f017e2"
  },
  {
    "url": "webpack-runtime-37abc1ea729e3a6c3b92.js"
  },
  {
    "url": "webpack-runtime-37abc1ea729e3a6c3b92.js.map",
    "revision": "79438774868008895d0d2e4df9192844"
  },
  {
    "url": "webpack-runtime-959c3b94bd8e0c7fd0c0.js"
  },
  {
    "url": "webpack-runtime-959c3b94bd8e0c7fd0c0.js.map",
    "revision": "cbd78f005040a5904d2ad2ec1fba20a5"
  },
  {
    "url": "webpack-runtime-9d7e72ec43ef0dbdc874.js"
  },
  {
    "url": "webpack-runtime-9d7e72ec43ef0dbdc874.js.map",
    "revision": "5633051fc6fab34911c7f1bdde4f5a6c"
  },
  {
    "url": "webpack-runtime-df9b0c237043c5b0ff2b.js"
  },
  {
    "url": "webpack-runtime-df9b0c237043c5b0ff2b.js.map",
    "revision": "8f3aafdeacb3b72397e76c85fa40e38f"
  },
  {
    "url": "webpack.stats.json",
    "revision": "ac706cbc4142f00f52f99df0ddda57db"
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
  if (!resources || !(await caches.match(`/blog/app-e16227ebe5ba1338afa7.js`))) {
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
