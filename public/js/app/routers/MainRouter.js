define([
  'backbone',
  'app/views/ConditionsView',
  'app/views/GenericsView',
  'app/views/GenericDetailsView',
  'app/views/HeaderView',
  'app/views/FooterView',
  'app/views/JqmPageView',
  'app/models/condition',
  'app/models/generic',
  'app/models/testsync'
], function(Backbone, ConditionsView, GenericsView, GenericDetailsView,
  HeaderView, FooterView, jqMPageView,
  Condition, Generic, Testsync ) {
  var Router = Backbone.Router.extend({
    initialize: function() {

      // Handle back button throughout the application
      $(document).on('click', '[data-rel="back"]', function(generic) {
        window.history.back();
        return false;
      });
    },

    //TODO: http://www.geekdave.com/2012/04/05/module-specific-subroutes-in-backbone/
    routes: {
      'generics': 'getGenerics',
      'generics/:id': 'getGeneric',
      'conditions': 'getConditions',
      'conditions/:id': 'getCondition',
      'testsync': 'getTestsync',
      '': 'main'
    },

    main: function() {
      this.navigate('generics', {
        trigger: true
      });
    },

    getTestsync: function() {
      $.mobile.loading('show');

      var tsCollection = new Testsync.collection();
      var genericPage = new jqMPageView();
      genericPage.setHeaderView(new HeaderView());
      genericPage.setContentView(new GenericsView({
        collection: tsCollection
      }));
      genericPage.setFooterView();

      tsCollection.fetch({
        success: function(collection, response, options) {
          //    cnCollection = collection;
          console.log("Testsync Collection fetch success");
          console.log(response);
        },
        error: function(collection, response) {
          console.log(response);
          throw new Error("Testsync fetch error");
        }
      });

      tsCollection.fetch({
        success: function(collection, response, options) {
          genericPage.navigate();
        }
      });

    },

    getCondition: function(id) {
      $.mobile.loading('show');
      var cnCollection = new Condition.collection();

      cnCollection.fetch({
        success: function(collection, response, options) {
          var model = collection.get(id);
          var genericPage = new jqMPageView();
          genericPage.setHeaderView(new HeaderView({
            model: model
          }), true);
          genericPage.setConditionsView(new ConditionsView({
            model: model
          }));
          genericPage.setFooterView();
          genericPage.navigate('slide');
        }
      });
    },

    getGeneric: function(id) {
      $.mobile.loading('show');
      var gnCollection = new Generic.collection();

      gnCollection.fetch({
        success: function(collection, response, options) {
          var model = collection.get(id);
          var genericPage = new jqMPageView();
          genericPage.setHeaderView(new HeaderView({
            model: model
          }), true);
          genericPage.setContentView(new GenericDetailsView({
            model: model
          }));
          genericPage.setFooterView();
          genericPage.navigate('slide');
        }
      });
    },

    getGenerics: function() {
      $.mobile.loading('show');
      var gnCollection = new Generic.collection();

      var genericPage = new jqMPageView();
      genericPage.setHeaderView(new HeaderView());
      genericPage.setContentView(new GenericsView({
        collection: gnCollection
      }));
      genericPage.setFooterView();

      var cnCollection = new Condition.collection();
      cnCollection.fetch({
        success: function(collection, response, options) {
          //    cnCollection = collection;
          console.log("Condition Collection fetch success");
        },
        error: function(collection, response) {
          throw new Error("Condition fetch error");
        }
      });
      genericPage.setConditionsView(new ConditionsView({
        collection: cnCollection
      }));

      gnCollection.fetch({
        success: function(collection, response, options) {
          genericPage.navigate();
        }
      });
    }
  });

  return Router;
});
