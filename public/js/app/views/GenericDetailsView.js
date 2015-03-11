define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/GenericDetailsTemplate.html'
], function($, _, Backbone, genericDetailsTemplate) {
	var View = Backbone.View.extend({
		render: function() {
			this.$el.html(_.template(genericDetailsTemplate, this.model.toJSON()));
			return this;
		}
	});

	return View;
});
