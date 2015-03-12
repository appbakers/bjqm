require.config({
  baseUrl: 'js',
  paths: {
    'jquery': '../libs/jquery/jquery.min',
    'backbone': '../libs/backbone/backbone-min',
    'underscore': '../libs/underscore/underscore-min',
    'jquerymobile': '../libs/jquery-mobile-bower/js/jquery.mobile-1.3.2.min',
    'app': './app',
    'templates': '../templates'
  },
  shim: {
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});

//!ref: https://coderwall.com/p/8ldaqw/add-a-root-url-to-all-backbone-api-request
// define(['config'], function(config) {
//   'use strict';
//
//   // Store the original version of Backbone.sync
//   var backboneSync = Backbone.sync;
//
//   Backbone.sync = function(method, model, options) {
//     /*
//      * Change the `url` property of options to begin
//      * with the URL from settings
//      * This works because the options object gets sent as
//      * the jQuery ajax options, which includes the `url` property
//      */
//     options = _.extend(options, {
//       url: config.api.url + (_.isFunction(model.url) ? model.url() :
//         model.url)
//     });
//
//     /*
//      *  Call the stored original Backbone.sync
//      * method with the new url property
//      */
//     backboneSync(method, model, options);
//   };
// 
// });


require([
  "jquery",
  "backbone",
  "app/routers/MainRouter",
  "app/helpers/jQmInit"
], function($, Backbone, MainRouter) {

  require(["jquerymobile"], function() {
    // Instantiates a new Backbone.js Mobile Router
    this.router = new MainRouter();

    Backbone.history.start();
  });
});
