if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let c={};const o=e=>s(e,n),r={module:{uri:n},exports:c,require:o};i[n]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"bb8a2303aeaf3ecd02ff817b27085e18"},{url:"/_next/static/Moqk50uiK565Nfh6ioJtG/_buildManifest.js",revision:"a27b2b7607326fa26b144e657011ec52"},{url:"/_next/static/Moqk50uiK565Nfh6ioJtG/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1176-aaccabe24e443b93.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/1362-76b067d49dff6cdc.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/1387-df5afc3fb86a3b69.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/2512-5d20aae5c9731ee0.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/4938-259b9028579741d1.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/5511-9882d147601017fe.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/5651-9e03a1d2b4b230b7.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/57-2f1e6f9a146b2a3b.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/5743-54f3a726ed0b2585.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/583-1fe40ae5e5634be5.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/6691-8b6c7d326d35b97f.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/6783-9c868c86bbcdc3f3.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/7333-ae621f374d35ed8d.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/7891-340a265f867ae73d.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/8889.fe8be4655315c31d.js",revision:"fe8be4655315c31d"},{url:"/_next/static/chunks/9644-cd9ad4f8b4d00b76.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/9670-a4bc235c422e0aca.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/a5ed7f3c-e237bb4022c72e90.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/dashboard/layout-2969d182eca95b57.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/dashboard/page-5f2f3f41eac04a31.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/question-bank/%5Bslug%5D/loading-053eb9f5e0ad0510.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/question-bank/%5Bslug%5D/page-8310ad067c23fffc.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/question-bank/create/page-e9279114fbf8baae.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/question-bank/layout-945764172c648bd8.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/question-bank/page-a74bb8974dc17508.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/result-manager/%5Bslug%5D/loading-20efe21b557a0066.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/result-manager/%5Bslug%5D/page-e51abb7575da833e.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/result-manager/%5Bslug%5D/test-details/page-a493bf31c22e55c6.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/result-manager/layout-41451e04008a8292.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/result-manager/page-431cc02f88c0bb34.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/test-management/%5Bslug%5D/loading-ce5c8e23ed878da5.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/test-management/%5Bslug%5D/page-0c27f08176b3d1c5.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/test-management/create/page-bac6609ebd03cc5d.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/test-management/layout-a1236712d56b0a53.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/admin/test-management/page-4faee7c68b5b8082.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/layout-16446fb135517f9e.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/student/dashboard/layout-e151a2517594902d.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/student/dashboard/page-3582c4d4071ab0a0.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/student/take-test/layout-1c10067800d988b0.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/(dashboard)/student/take-test/page-50ef8be4e7857c0b.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/_not-found-ea13f795607dd338.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/auth/layout-3cdb9b7f601b59d3.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/auth/login/page-15c8068a364a340d.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/auth/signup/page-7a7970e9455592f9.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/layout-bc683eff5ca11a83.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/app/page-82abec32d2c9c39d.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/cff4c5fa.2eeac0ba17740731.js",revision:"2eeac0ba17740731"},{url:"/_next/static/chunks/fd9d1056-93b277276f7f5cb2.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/framework-638abc5ad5ea33cc.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/main-4a9a8efad4c4e1fe.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/main-app-18ab7245e33d1199.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/pages/_app-31397adcb4d2b835.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/pages/_error-b225d4412fb76f89.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-d0290e03c40a23b0.js",revision:"Moqk50uiK565Nfh6ioJtG"},{url:"/_next/static/css/8aee48eb52f4c731.css",revision:"8aee48eb52f4c731"},{url:"/_next/static/css/8f28da55c6027b9a.css",revision:"8f28da55c6027b9a"},{url:"/_next/static/css/b66e6c5bfcc68dbb.css",revision:"b66e6c5bfcc68dbb"},{url:"/_next/static/media/0066078b55585ece-s.p.ttf",revision:"ed86af2ed5bbaf879e9f2ec2e2eac929"},{url:"/_next/static/media/29f102afc662829f-s.p.ttf",revision:"b6d08fb2f89a7b71dd0ca70ce941c922"},{url:"/_next/static/media/54c76208542a99cd-s.p.ttf",revision:"5e077c15f6e1d334dd4e9be62b28ac75"},{url:"/_next/static/media/5f09f4e4c1b6445e-s.p.ttf",revision:"155c2e8af05b78017012be8ff2962731"},{url:"/_next/static/media/62e48611196b08b2-s.p.ttf",revision:"bdb7ba651b7bdcda6ce527b3b6705334"},{url:"/_next/static/media/762f69bea2cb4058-s.p.ttf",revision:"85caebdc62414beb10457fdc6ca2d4c2"},{url:"/_next/static/media/8385b74eed6246b5-s.p.ttf",revision:"5b2485493464681c29bffca44dc643c9"},{url:"/_next/static/media/89b23a7d5f7348d2-s.p.ttf",revision:"3345ecbd07a3550c764b3417ab608c06"},{url:"/_next/static/media/941396b781615e84-s.p.ttf",revision:"cc10461cb5e0a6f2621c7179f4d6de17"},{url:"/_next/static/media/9b0dfc2b8825f9f9-s.p.ttf",revision:"c72b454ea7db97693cc24d0a82bdce27"},{url:"/_next/static/media/c34e9c35541a465e-s.p.ttf",revision:"25c8b884ca555f338df57a70ee6d539c"},{url:"/_next/static/media/c67a6a7546a3e253-s.p.ttf",revision:"d52e2a5ca7f9d70f174ac0a7095dbccf"},{url:"/_next/static/media/ff52cb1544fca480-s.p.ttf",revision:"fb69990708893276bdb20a98eb2e06d3"},{url:"/icons/android-chrome-192x192.png",revision:"7d5a0d6592efa670804ae1586d0efbe6"},{url:"/icons/android-chrome-512x512.png",revision:"117ac878b5320ed55d93ae31efc9b63e"},{url:"/icons/apple-touch-icon.png",revision:"4cc73cc09e85b3a407755df21e883687"},{url:"/icons/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"/icons/favicon-16x16.png",revision:"8dc91d3bfb991d9c48d46638007df138"},{url:"/icons/favicon-32x32.png",revision:"6b9a156b29575bf513fafd8efc8c05d0"},{url:"/icons/favicon.ico",revision:"6fa4f67397afcc237d130e8147c803f3"},{url:"/icons/icon-192x192.png",revision:"71bce7bff50006c8ffdf9bb08e50d41b"},{url:"/icons/icon-256x256.png",revision:"580398bdcb8f956461410a2ea0a96c16"},{url:"/icons/icon-384x384.png",revision:"6115540106dd07ed954a32cdc1905426"},{url:"/icons/icon-512x512.png",revision:"d96af6f5023161ebb69862162dcd647f"},{url:"/icons/mstile-150x150.png",revision:"fe03ad12200e7bd759561535410f3295"},{url:"/icons/safari-pinned-tab.svg",revision:"fa2bec50138bf903bbd74a16d0112908"},{url:"/images/create-question.png",revision:"fde33422e09d5e272990fd8b465a3765"},{url:"/images/create-test.png",revision:"81d64786d785698c13d50b047a64c9c7"},{url:"/images/navbar-img/Screenshot from 2024-09-13 22-39-37.png",revision:"a4c2e0cb99f999196f7d394ba3b978e6"},{url:"/images/navbar-img/avatar-1.png",revision:"b794185eb6e0e2ee3eab0094a01a257e"},{url:"/images/sid",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/images/sidebar-img/ankr.png",revision:"8deeb6e5bf90091ee6a5e1f3ce96faf7"},{url:"/images/socials-img/apple.png",revision:"4f658b9a7d067de5238644b78d8d09cc"},{url:"/images/socials-img/facebook.png",revision:"ba803196d3b7644ffb2576efd1500b6b"},{url:"/images/socials-img/google.png",revision:"ca2f7db280e9c773e341589a81c15082"},{url:"/images/socials-img/twitter.png",revision:"8f35a40403a84631c4125c4f1859c7a6"},{url:"/images/test-list.png",revision:"a4c2e0cb99f999196f7d394ba3b978e6"},{url:"/images/undraw_taken.svg",revision:"a808e67501e9059050bc05898f94dc90"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
