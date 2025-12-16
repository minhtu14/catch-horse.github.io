<<<<<<<< HEAD:web-mobile/index.8709d.js
System.register(["./application.e7ba1.js"], function (_export, _context) {
========
System.register(["./application.cc965.js"], function (_export, _context) {
>>>>>>>> c33c10a957983fdcfc736f2312a389c95de771f4:web-mobile/index.20d49.js
  "use strict";

  var Application, canvas, $p, bcr, application;
  function topLevelImport(url) {
    return System["import"](url);
  }
  return {
    setters: [function (_applicationJs) {
      Application = _applicationJs.Application;
    }],
    execute: function () {
      canvas = document.getElementById('GameCanvas');
      $p = canvas.parentElement;
      bcr = $p.getBoundingClientRect();
      canvas.width = bcr.width;
      canvas.height = bcr.height;
      application = new Application();
      topLevelImport('cc').then(function (engine) {
        return application.init(engine);
      }).then(function () {
        return application.start();
      })["catch"](function (err) {
        console.error(err);
      });
    }
  };
});