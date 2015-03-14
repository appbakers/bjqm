// example for Backbone.sync
define([
  'backbone'
], function(Backbone) {

  //!ref: http://stackoverflow.com/questions/8731729/backbone-js-model-different-url-for-create-and-update
  function setDefaultUrlOptionByMethod(syncFunc) {
    return function sync(method, model, options) {
      options = options || {};
      if (!options.url)
        options.url = _.result(model, method + 'Url');
      return syncFunc.call(this, method, model, options);
    }
  }
  var ROOT = "http://demos.jquerymobile.com/1.4.5/";
  var Model = Backbone.Model.extend({
    //!ref: http://stackoverflow.com/questions/7644767/backbone-js-use-different-urls-for-model-save-and-fetch
    fetch: function(attributes, options) {
      options = _.defaults((options || {}), {
        url: ROOT
      });
      return Backbone.Model.prototype.save.call(this, attributes,
        options);
    },
    sync: setDefaultUrlOptionByMethod(Backbone.sync)
      //readUrl: 'pages'

  });

  var Collection = Backbone.Collection.extend({
    models: Model,
    url: '/pages'
  });

  return {
    model: Model,
    collection: Collection
  };
});
