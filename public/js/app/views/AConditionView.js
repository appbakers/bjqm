define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/AConditionTemplate.html'
], function($, _, Backbone, AConditionTemplate) {
	var View = Backbone.View.extend({
		initialize: function() {},

		render: function() {
			var template = _.template(AConditionTemplate);
			this.$el.html(template);

			return this;
		}
	});

	return View;
});
