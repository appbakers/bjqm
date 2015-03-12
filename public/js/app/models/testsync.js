define([
	'backbone'
], function(Backbone) {
	var Model = Backbone.Model.extend({
	});

//!ref: http://naleid.com/blog/2012/10/29/overriding-backbone-js-sync-to-allow-cross-origin-resource-sharing-cors
// this is only client side. server side config also needed.
// 	(function() {
//
//   var proxiedSync = Backbone.sync;
//
//   Backbone.sync = function(method, model, options) {
//     options || (options = {});
//
//     if (!options.crossDomain) {
//       options.crossDomain = true;
//     }
//
//     if (!options.xhrFields) {
//       options.xhrFields = {withCredentials:true};
//     }
//
//     return proxiedSync(method, model, options);
//   };
// })();

function setDefaultUrlOptionByMethod(syncFunc) {
	return function sync(method, model, options) {
		options = options || {};
		if(!options.url)
			options.url = _.result(model, method+'Url');
		return syncFunc.call(this, method, model, options);
	}
}

	var Collection = Backbone.Collection.extend({
		models: Model,
		sync: setDefaultUrlOptionByMethod(Backbone.sync),
		readUrl: '/testsync.html'
		});

	return {
		model: Model,
		collection: Collection
	};
});
