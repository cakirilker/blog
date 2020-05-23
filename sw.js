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
    "revision": "f75973b5db41821b75c3c939fa5e41f8"
  },
  {
    "url": "404/index.html",
    "revision": "2b88cfb621c49594c47428329ab033a0"
  },
  {
    "url": "app-30f102eda8c73a5edc83.js"
  },
  {
    "url": "app-30f102eda8c73a5edc83.js.map",
    "revision": "a82bb83cb9180780b03ce4e80f0927a6"
  },
  {
    "url": "app-3a49f6ba27c7b70182b0.js"
  },
  {
    "url": "app-3a49f6ba27c7b70182b0.js.map",
    "revision": "09a6d46735488cc004f88f8d4edcb562"
  },
  {
    "url": "app-a8e7292133bd538687f3.js"
  },
  {
    "url": "app-a8e7292133bd538687f3.js.map",
    "revision": "8890a3888d1f2b70794c67c5d1d7e883"
  },
  {
    "url": "app-c153234d69d23354edc1.js"
  },
  {
    "url": "app-c153234d69d23354edc1.js.map",
    "revision": "d173d95421ac78c4585a8403b02b339b"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-984cb3c56f6b97f564f0.js"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-984cb3c56f6b97f564f0.js.map",
    "revision": "4ed4b7b479d07197bd8b7d69f097478e"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-9cebbbcccb2c990e2dcb.js"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-9cebbbcccb2c990e2dcb.js.map",
    "revision": "a950afe1bcca327dcb3589a54ffe209b"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-e9dc5887fd6be62fae54.js"
  },
  {
    "url": "b79069689330af6ebec416d0224ba4ba1c9f1d46-e9dc5887fd6be62fae54.js.map",
    "revision": "ef2cb55d30cd0a99e0f256226bde99c6"
  },
  {
    "url": "chunk-map.json",
    "revision": "d623d0db7b5fdf2f0872f12475c682c5"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-235e751eb037707e5d1a.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-235e751eb037707e5d1a.js.map",
    "revision": "916f682476dd993162282a2582b4ccfd"
  },
  {
    "url": "component---src-pages-404-js-3705b05823bab7e27c5b.js"
  },
  {
    "url": "component---src-pages-404-js-3705b05823bab7e27c5b.js.map",
    "revision": "c716bbe8289d528bf67ccc1324d769eb"
  },
  {
    "url": "component---src-pages-404-js-9e1d38f82295adb8890d.js"
  },
  {
    "url": "component---src-pages-404-js-9e1d38f82295adb8890d.js.map",
    "revision": "a879a38845c9530a288ecca031936169"
  },
  {
    "url": "component---src-pages-404-js-b0acb04990728b22a9cc.js"
  },
  {
    "url": "component---src-pages-404-js-b0acb04990728b22a9cc.js.map",
    "revision": "e78d5652a1cb4312958ecdc6ffca5425"
  },
  {
    "url": "component---src-pages-404-js-fd5e92fda7a932bb6652.js"
  },
  {
    "url": "component---src-pages-404-js-fd5e92fda7a932bb6652.js.map",
    "revision": "e8ef6d33aa85df14c04fed828d1e7ab7"
  },
  {
    "url": "component---src-pages-index-js-56c7a926be847361e7df.js"
  },
  {
    "url": "component---src-pages-index-js-56c7a926be847361e7df.js.map",
    "revision": "93e9635b0497bd9081c946ba7c718fa2"
  },
  {
    "url": "component---src-pages-index-js-5dccf57d70b45d42840f.js"
  },
  {
    "url": "component---src-pages-index-js-5dccf57d70b45d42840f.js.map",
    "revision": "4d24722d489aadbbc7e55138ab51f841"
  },
  {
    "url": "component---src-pages-index-js-755b47728fd4c5dfcfab.js"
  },
  {
    "url": "component---src-pages-index-js-755b47728fd4c5dfcfab.js.map",
    "revision": "b916a2cc220e70018d95f6fb93af2246"
  },
  {
    "url": "component---src-pages-index-js-94aa2891a27ed75e2366.js"
  },
  {
    "url": "component---src-pages-index-js-94aa2891a27ed75e2366.js.map",
    "revision": "f42784d9bb4783116893c668ef2e1b88"
  },
  {
    "url": "component---src-templates-blog-post-js-38632dd4afc0cd3f31cd.js"
  },
  {
    "url": "component---src-templates-blog-post-js-38632dd4afc0cd3f31cd.js.map",
    "revision": "9f7e904b65898d46e08fbf78d69c8425"
  },
  {
    "url": "component---src-templates-post-template-js-108c43abbc64a71c121a.js"
  },
  {
    "url": "component---src-templates-post-template-js-108c43abbc64a71c121a.js.map",
    "revision": "b18c36b582e482f150b03b1a4dded70a"
  },
  {
    "url": "component---src-templates-post-template-js-1b152884ba04c5c14ad1.js"
  },
  {
    "url": "component---src-templates-post-template-js-1b152884ba04c5c14ad1.js.map",
    "revision": "c3e038a1b6a02b210fdef99b0b7db409"
  },
  {
    "url": "component---src-templates-post-template-js-92ae2a92ac65cb041c84.js"
  },
  {
    "url": "component---src-templates-post-template-js-92ae2a92ac65cb041c84.js.map",
    "revision": "f93155174d362c4fbd429d85174fb2a9"
  },
  {
    "url": "d5d7a013bc6c1e2b6d7db819052c16d7efea5559-984cb3c56f6b97f564f0.js"
  },
  {
    "url": "d5d7a013bc6c1e2b6d7db819052c16d7efea5559-984cb3c56f6b97f564f0.js.map",
    "revision": "b58c705eaaeaf9770f7982e93838961a"
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
    "revision": "585b8044a71e6e7ac6ea700c762ebeda"
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
    "revision": "059182dd13e9f6fb22cd259e6d2dcc0a"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "d0d038d79d9ebc3a1c1eac36db00d958"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2c8d5b7bdbdc9b215578d396da9f01f0"
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
    "revision": "02c45e09b041105dcf6a4906fd5aec8b"
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
    "url": "page-data/hello-world/page-data.json",
    "revision": "aa56f07ce436017b7cd15deee144e652"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "2c23f44fde4065e6d5b8b31a4ac1dc11"
  },
  {
    "url": "page-data/minko/page-data.json",
    "revision": "fc0059969d7bfaac5b50b0ee1217f659"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/welcome/page-data.json",
    "revision": "b09f30ed478925ee4a077a4971ec3d8e"
  },
  {
    "url": "sitemap.xml",
    "revision": "a476e8ce59e9d653d8a5e3d726a55a5f"
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
    "url": "webpack-runtime-a63567f766c525c6e788.js"
  },
  {
    "url": "webpack-runtime-a63567f766c525c6e788.js.map",
    "revision": "318bfbb31330abb4ecb0ca8052d281e8"
  },
  {
    "url": "webpack-runtime-ac263cb02fe3146258e4.js"
  },
  {
    "url": "webpack-runtime-ac263cb02fe3146258e4.js.map",
    "revision": "954183158243c629fed161d57bd9e9b2"
  },
  {
    "url": "webpack-runtime-f115e3d8fb89f5cb83b6.js"
  },
  {
    "url": "webpack-runtime-f115e3d8fb89f5cb83b6.js.map",
    "revision": "6244e85bb2c966017d1cf851dd0854db"
  },
  {
    "url": "webpack.stats.json",
    "revision": "aca92b23ce51a46f27383f94a1716dd0"
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
  if (!resources || !(await caches.match(`/blog/app-c153234d69d23354edc1.js`))) {
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
