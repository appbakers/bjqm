define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/ConditionListItemTemplate.html'
], function($, _, Backbone, ConditionListItemTemplate) {
	var View = Backbone.View.extend({
		tagName: 'li',

		events: {
			'change #12341-button': '_clicked'
		},

		render: function() {
			this.$el.html(_.template(ConditionListItemTemplate, this.model.toJSON()));
			return this;
		},

		_clicked: function() {
			// Backbone.history.navigate('conditions/' + this.model.id, {
			// 	trigger: true
			// });
		}
	});

	return View;
});
