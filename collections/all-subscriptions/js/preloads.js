
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.a304734e7448bd545666.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1110.latest.en.020cb15f59b1fd8f3925.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6605.latest.en.0a027deb4f4e87ae29a9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.en.d3bc65d7a91c6d71a13d.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.349a91ccfb18792d19d9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.en.e8b98a9ed829efc0c730.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/1662.latest.en.4892ba65f4970525948a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.en.8ff27283522475e94436.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.en.5117e670600bcaf49bb5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8831.latest.en.46124333a52e789a8cf9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/236.latest.en.dddec3274998e39cad92.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5718.latest.en.f9e2edab1ede84708161.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2714.latest.en.b0cde60d5ac1ed0e64b8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4619.latest.en.f85e8b5eb0a530d35b33.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.2b4c333baf34c564c3c5.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/1110.latest.en.40cc870ad0f292b10d20.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.8ae030d5b62ddbf3a670.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.3e483127dbf554cf988e.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0654/7079/1899/files/Vector_x320.png?v=1707344688"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  