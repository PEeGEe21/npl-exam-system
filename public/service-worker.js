if(!self.define){let e,a={};const s=(s,t)=>(s=new URL(s+".js",t).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let i={};const d=e=>s(e,n),r={module:{uri:n},exports:i,require:d};a[n]=Promise.all(t.map((e=>r[e]||d(e)))).then((e=>(c(...e),i)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"b6fbc69d69d14ec1b346acfabe6c3c67"},{url:"/_next/static/chunks/168-a67d99b62110c3ed.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/250-f8dfdea9920a8b61.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/255-c1929f94b86b3691.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/516-e43a4823f074ae47.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/736-1a0fe3abd702d694.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/749-9c7d7982bbd7cdcc.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/75-035c412637fc024b.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/783-97788572f7da1c59.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/889.07be540e97230e48.js",revision:"07be540e97230e48"},{url:"/_next/static/chunks/908-0a387cf59b46c477.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/928-831a0d5bc0b3c468.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/938-98a0cbb22a23f5f3.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/991-090921f15b210a9a.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/a5ed7f3c-5aa8aa2d881149ac.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/admin/dashboard/layout-cd97bac080d55eb8.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/admin/dashboard/page-2a3e84c82e2be891.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/admin/question-bank/%5Bslug%5D/loading-1b40eb1c8b551f18.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/admin/question-bank/%5Bslug%5D/page-e27c1d70777d2b53.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/admin/question-bank/create/page-24bb0fec15fdb9db.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/admin/question-bank/layout-0397bfa57abb5cd5.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/admin/question-bank/page-46eef981c0a7e334.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/admin/result-manager/layout-487d90149fe64bfc.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/admin/result-manager/page-ba75678f0f827223.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/admin/test-management/%5Bslug%5D/loading-3ec80855c59009fe.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/admin/test-management/%5Bslug%5D/page-ade32ce62bdf8903.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/admin/test-management/create/page-cea41a165b2e8f52.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/admin/test-management/layout-9b3fc332fd6a520c.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/admin/test-management/page-e2dcbb6dde562927.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/layout-e539067918670e89.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/student/dashboard/layout-1e119f722fb499d4.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/student/dashboard/page-8b5edd5b31653cc2.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/student/take-test/layout-c4015b7e0a97de04.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/(dashboard)/student/take-test/page-2476d9317484241a.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/_not-found-e61fde2de749b6ff.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/auth/layout-498c77e5a1daf174.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/auth/login/page-aeb9864a25d6f834.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/auth/signup/page-ecd224600e7aa6c9.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/layout-bde79adbb4d8b075.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/app/page-e5da7417447b9458.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/cff4c5fa.685cb187fa95976d.js",revision:"685cb187fa95976d"},{url:"/_next/static/chunks/fd9d1056-57b252c76f63a550.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/framework-c5181c9431ddc45b.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/main-7b18cd38f5dd5d2f.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/main-app-bce810af85b1b164.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/pages/_error-e87e5963ec1b8011.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ac7106465ced4d64.js",revision:"y47xdajS6OW8t2jAcRCIb"},{url:"/_next/static/css/8aee48eb52f4c731.css",revision:"8aee48eb52f4c731"},{url:"/_next/static/css/b66e6c5bfcc68dbb.css",revision:"b66e6c5bfcc68dbb"},{url:"/_next/static/css/bbcb35537366f80e.css",revision:"bbcb35537366f80e"},{url:"/_next/static/media/0066078b55585ece-s.p.ttf",revision:"ed86af2ed5bbaf879e9f2ec2e2eac929"},{url:"/_next/static/media/29f102afc662829f-s.p.ttf",revision:"b6d08fb2f89a7b71dd0ca70ce941c922"},{url:"/_next/static/media/54c76208542a99cd-s.p.ttf",revision:"5e077c15f6e1d334dd4e9be62b28ac75"},{url:"/_next/static/media/5f09f4e4c1b6445e-s.p.ttf",revision:"155c2e8af05b78017012be8ff2962731"},{url:"/_next/static/media/62e48611196b08b2-s.p.ttf",revision:"bdb7ba651b7bdcda6ce527b3b6705334"},{url:"/_next/static/media/762f69bea2cb4058-s.p.ttf",revision:"85caebdc62414beb10457fdc6ca2d4c2"},{url:"/_next/static/media/8385b74eed6246b5-s.p.ttf",revision:"5b2485493464681c29bffca44dc643c9"},{url:"/_next/static/media/941396b781615e84-s.p.ttf",revision:"cc10461cb5e0a6f2621c7179f4d6de17"},{url:"/_next/static/media/9b0dfc2b8825f9f9-s.p.ttf",revision:"c72b454ea7db97693cc24d0a82bdce27"},{url:"/_next/static/media/c34e9c35541a465e-s.p.ttf",revision:"25c8b884ca555f338df57a70ee6d539c"},{url:"/_next/static/media/c67a6a7546a3e253-s.p.ttf",revision:"d52e2a5ca7f9d70f174ac0a7095dbccf"},{url:"/_next/static/media/ff52cb1544fca480-s.p.ttf",revision:"fb69990708893276bdb20a98eb2e06d3"},{url:"/_next/static/y47xdajS6OW8t2jAcRCIb/_buildManifest.js",revision:"a1b7599199e2e8c82f2c6bcf8d8aca61"},{url:"/_next/static/y47xdajS6OW8t2jAcRCIb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icons/android-chrome-192x192.png",revision:"7d5a0d6592efa670804ae1586d0efbe6"},{url:"/icons/android-chrome-512x512.png",revision:"117ac878b5320ed55d93ae31efc9b63e"},{url:"/icons/apple-touch-icon.png",revision:"4cc73cc09e85b3a407755df21e883687"},{url:"/icons/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/icons/favicon-16x16.png",revision:"8dc91d3bfb991d9c48d46638007df138"},{url:"/icons/favicon-32x32.png",revision:"6b9a156b29575bf513fafd8efc8c05d0"},{url:"/icons/favicon.ico",revision:"6fa4f67397afcc237d130e8147c803f3"},{url:"/icons/icon-192x192.png",revision:"71bce7bff50006c8ffdf9bb08e50d41b"},{url:"/icons/icon-256x256.png",revision:"580398bdcb8f956461410a2ea0a96c16"},{url:"/icons/icon-384x384.png",revision:"6115540106dd07ed954a32cdc1905426"},{url:"/icons/icon-512x512.png",revision:"d96af6f5023161ebb69862162dcd647f"},{url:"/icons/mstile-150x150.png",revision:"fe03ad12200e7bd759561535410f3295"},{url:"/icons/safari-pinned-tab.svg",revision:"fa2bec50138bf903bbd74a16d0112908"},{url:"/images/navbar-img/avatar-1.png",revision:"b794185eb6e0e2ee3eab0094a01a257e"},{url:"/images/sid",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/images/sidebar-img/ankr.png",revision:"8deeb6e5bf90091ee6a5e1f3ce96faf7"},{url:"/images/socials-img/apple.png",revision:"4f658b9a7d067de5238644b78d8d09cc"},{url:"/images/socials-img/facebook.png",revision:"ba803196d3b7644ffb2576efd1500b6b"},{url:"/images/socials-img/google.png",revision:"ca2f7db280e9c773e341589a81c15082"},{url:"/images/socials-img/twitter.png",revision:"8f35a40403a84631c4125c4f1859c7a6"},{url:"/images/undraw_taken.svg",revision:"a808e67501e9059050bc05898f94dc90"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:t})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));