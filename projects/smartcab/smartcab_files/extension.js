<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">

    <title>Jupyter Notebook</title>
    <link rel="shortcut icon" type="image/x-icon" href="/static/base/images/favicon.ico?v=97c6417ed01bdc0ae3ef32ae4894fd03">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="stylesheet" href="/static/components/jquery-ui/themes/smoothness/jquery-ui.min.css?v=9b2c8d3489227115310662a343fce11c" type="text/css" />
    <link rel="stylesheet" href="/static/components/jquery-typeahead/dist/jquery.typeahead.min.css?v=7afb461de36accb1aa133a1710f5bc56" type="text/css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    

    <link rel="stylesheet" href="/static/style/style.min.css?v=974839a888beb55bbba87883fafd90fa" type="text/css"/>
    
<style type="text/css">
/* disable initial hide */
div#header, div#site {
    display: block;
}
</style>

    <link rel="stylesheet" href="/custom/custom.css" type="text/css" />
    <script src="/static/components/es6-promise/promise.min.js?v=f004a16cb856e0ff11781d01ec5ca8fe" type="text/javascript" charset="utf-8"></script>
    <script src="/static/components/requirejs/require.js?v=6da8be361b9ee26c5e721e76c6d4afce" type="text/javascript" charset="utf-8"></script>
    <script>
      require.config({
          
          urlArgs: "v=20170227114903",
          
          baseUrl: '/static/',
          paths: {
            'auth/js/main': 'auth/js/main.min',
            custom : '/custom',
            nbextensions : '/nbextensions',
            kernelspecs : '/kernelspecs',
            underscore : 'components/underscore/underscore-min',
            backbone : 'components/backbone/backbone-min',
            jquery: 'components/jquery/jquery.min',
            bootstrap: 'components/bootstrap/js/bootstrap.min',
            bootstraptour: 'components/bootstrap-tour/build/js/bootstrap-tour.min',
            'jquery-ui': 'components/jquery-ui/ui/minified/jquery-ui.min',
            moment: 'components/moment/moment',
            codemirror: 'components/codemirror',
            termjs: 'components/xterm.js/dist/xterm',
            typeahead: 'components/jquery-typeahead/dist/jquery.typeahead.min',
          },
	  map: { // for backward compatibility
	    "*": {
		"jqueryui": "jquery-ui",
	    }
	  },
          shim: {
            typeahead: {
              deps: ["jquery"],
              exports: "typeahead"
            },
            underscore: {
              exports: '_'
            },
            backbone: {
              deps: ["underscore", "jquery"],
              exports: "Backbone"
            },
            bootstrap: {
              deps: ["jquery"],
              exports: "bootstrap"
            },
            bootstraptour: {
              deps: ["bootstrap"],
              exports: "Tour"
            },
            "jquery-ui": {
              deps: ["jquery"],
              exports: "$"
            }
          },
          waitSeconds: 30,
      });

      require.config({
          map: {
              '*':{
                'contents': 'services/contents',
              }
          }
      });

      define("bootstrap", function () {
          return window.$;
      });

      define("jquery", function () {
          return window.$;
      });

      define("jqueryui", function () {
          return window.$;
      });

      define("jquery-ui", function () {
          return window.$;
      });
      // error-catching custom.js shim.
      define("custom", function (require, exports, module) {
          try {
              var custom = require('custom/custom');
              console.debug('loaded custom.js');
              return custom;
          } catch (e) {
              console.error("error loading custom.js", e);
              return {};
          }
      })
    </script>

    
    

</head>

<body class="" >

<noscript>
    <div id='noscript'>
      Jupyter Notebook requires JavaScript.<br>
      Please enable it to proceed.
  </div>
</noscript>

<div id="header">
  <div id="header-container" class="container">
  <div id="ipython_notebook" class="nav navbar-brand pull-left"><a href="/tree" title='dashboard'><img src='/static/base/images/logo.png?v=641991992878ee24c6f3826e81054a0f' alt='Jupyter Notebook'/></a></div>

  
  
  


  

  
  
  </div>
  <div class="header-bar"></div>

  
  
</div>

<div id="site">


<div class="error">
    
    <h1>404 : Not Found</h1>
    
    
<p>You are requesting a page that does not exist!</p>

</header>


</div>







</body>

</html>