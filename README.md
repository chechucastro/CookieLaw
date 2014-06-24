Cookielaw plugin
================================

Zepto and jQuery Plugin to insert a cookie in order to inform the visitor about the cookies inserted in his/her pc

Examples :
---------

HTML:
```
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cookielaw</title>
    <link rel="stylesheet" href="css/cookielaw.min.css">
</head>
<body>

    <!-- Cookie law block -->
    <div class="cookie-block">
        <div class="message"><span data-icon="i"></span>En poursuivant votre navigation sans modifier vos paramètres de cookies, vous acceptez l'utilisation des cookies pour disposer de services et d'offres adaptés à vos centres d'intérêts.
            <a href="#">
                <strong>Pour gérer et modifier ces paramètres, cliquez ici.</strong>
            </a>
        </div>
        <div class="btn"><a href="#" class="close">X</a></div>
    </div>
    <!-- End Cookie law block -->
    <script src="js/lib/zepto/zepto.min.js"></script>
    <script src="js/cookielaw.js"></script>
    <script>
        $(document).ready(function() {
            $('.cookie-block').cookielaw();
        });
    </script>
</body>
</html>
```

JAVASCRIPT :
```
(function ($) {
  'use strict';
  var pluginName = 'cookielaw';
  $[pluginName] = (function () {

    /**
     * Plugin Constructor. This function build the basic object for the plugin
     * @param (object) element - The jQuery or Zepto DOM element
     * @param (object) options - A list of options for the plugin
     */
     $[pluginName] = function (element, options) {
      this.options = $.extend({}, options);
      this.$cookieLawBlock = $(element); // Css Class ".cookie-block"
      // Dom elements
      this.$closeBtn = this.$cookieLawBlock.find('.btn a');
      // init plugin
      return this._CookieLaw();
    };

    $[pluginName].prototype = {
      _CookieLaw: function () {
        var t = this,
            cookieTimeLeft = 395; // 11 months from now (The current time)
        var initEntryPoint = function () {
          (getCookie('cookielaw')) ? t.$cookieLawBlock.hide(): showHideBlock();;
        };
        var showHideBlock = function () {
          // Hide block & Set cookie
          t.$closeBtn.click(function () {
            t.$cookieLawBlock.addClass('hidden');
            setCookie('cookielaw', 'accepted', cookieTimeLeft);
          });
        };
        //get cookie
        var getCookie = function (name) {
          var start = document.cookie.indexOf(name + "=");
          var len = start + name.length + 1;
          if ((!start) && (name != document.cookie.substring(0, name.length))) {
            return null;
          }
          if (start == -1) return null;
          var end = document.cookie.indexOf(';', len);
          if (end == -1) end = document.cookie.length;
          //console.log('The cookie ' + name+ ' is set');
          return unescape(document.cookie.substring(len, end));
        };

        //set cookie
        var setCookie = function (name, value, expires, path, domain, secure) {
          var today = new Date();
          today.setTime(today.getTime());
          if (expires) {
            expires = expires * 1000 * 60 * 60 * 24;
          }
          var expires_date = new Date(today.getTime() + (expires));
          document.cookie = name + '=' + escape(value) +
            ((expires) ? ';expires=' + expires_date.toGMTString() : '') + //expires.toGMTString()
            ((path) ? ';path=' + path : '') +
            ((domain) ? ';domain=' + domain : '') +
            ((secure) ? ';secure' : '');
          };

        //delete cookie
        var deleteCookie = function (name, path, domain) {
          if (getCookie(name)) document.cookie = name + '=' +
            ((path) ? ';path=' + path : '') +
          ((domain) ? ';domain=' + domain : '') +
          ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
        };
        // Entry point
        initEntryPoint();
      }
    };
    // Building the plugin
    /**
     * The plugin component
     * @param  {object} options - list of all parameters for the jQuery/Zepto module
     * @return {object} - The jQuery/Zepto DOM element
     */
     return $[pluginName];
   }(window));

$.fn[pluginName] = function (options) {
  return this.each(function () {
    if (!$(this).data(pluginName)) {
      if (options === 'destroy') {
        return;
      }
      $(this).data(pluginName, new $[pluginName](this, options));
    } else {
      var $plugin = $(this).data(pluginName);
    }
  });
};

})(window.Zepto || window.jQuery);

```
