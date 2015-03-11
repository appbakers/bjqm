define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/GenericListItemTemplate.html'
], function($, _, Backbone, genericListItemTemplate) {
  var View = Backbone.View.extend({
    tagName: 'li',

    events: {
      'click a': 'goToDetails'
    },

    render: function() {
      this.$el.html(_.template(genericListItemTemplate, this.model.toJSON()));
      return this;
    },

    goToDetails: function() {
      Backbone.history.navigate('generics/' + this.model.id, {
        trigger: true
      });
    }
  });

  return View;
});
