// 监听页面的网络请求和响应
(function() {
  // 重写 fetch 方法
  var originalFetch = window.fetch;
  window.fetch = function(url, options) {
      var requestData = {
          url: url,
          method: options && options.method || 'GET',
          data: options && options.body && JSON.parse(options.body)
      };

      var responsePromise = originalFetch.apply(this, arguments);
      responsePromise.then(function(response) {
          response.clone().text().then(function(responseText) {
              var responseData = {
                  url: url,
                  method: options && options.method || 'GET',
                  status: response.status,
                  statusText: response.statusText,
                  headers: response.headers,
                  data: responseText
              };
              window.webkit.messageHandlers.networkRequest.postMessage(responseData);
          });
      });

      window.webkit.messageHandlers.networkRequest.postMessage(requestData);

      return responsePromise;
  };

  // 监听 XMLHttpRequest 对象的 open 和 send 方法
  var originalOpen = window.XMLHttpRequest.prototype.open;
  var originalSend = window.XMLHttpRequest.prototype.send;

  function handleXMLHttpRequest() {
      var self = this;

      this.addEventListener('load', function() {
          var responseData = {
              url: self._url,
              method: self._method,
              status: self.status,
              statusText: self.statusText,
              headers: self.getAllResponseHeaders(),
              data: self.responseText
          };
          window.webkit.messageHandlers.networkRequest.postMessage(responseData);
      });
  }

  window.XMLHttpRequest.prototype.open = function(method, url) {
      this._method = method;
      this._url = url;
      handleXMLHttpRequest.call(this);
      originalOpen.apply(this, arguments);
  };

  window.XMLHttpRequest.prototype.send = function(data) {
      this._requestData = data;
      originalSend.apply(this, arguments);
  };
})();