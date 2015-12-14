Router.configure({
  layoutTemplate:"mainLayout",
  loadingTemplate: 'loading',
  waitOn: function() {
    return [Meteor.subscribe('products')];
  }
});

Router.map(function(){
  this.route('landing', {
    path: '/',
    layoutTemplate:"withoutNavbarLayout"
  });
  this.route('userProfile', {
    path: '/user-profile'
  });
  this.route('about',{
    path: '/about'
  });
  this.route('addProduct',{
    path: '/submit'
  });
  this.route('contact',{
    path: '/contact'
  });
  this.route('denied',{
    path: '/denied'
  });
  this.route('press',{
    path: '/press'
  });
  this.route('terms',{
    path: '/terms'
  });
});

// PRODUCT ROUTES
Router.map(function(){
  this.route('productPage',{
    path:'/product/:_id',
    waitOn: function() {
      return [Meteor.subscribe('comments')];
    },
    data: function() {
      return Products.findOne(this.params._id);
      return {
        products:Products.find({})
        };
      }
    });

    this.route('editProduct', {
      path: '/products/:_id/edit',
      data: function() { return Products.findOne(this.params._id); }
    });
});

// MEMBER USER ROUTE

Router.route('/users/:username',{
    name: 'member',
    layoutTemplate: 'mainLayout',
    data: function(){
      return {
        user: Meteor.users.findOne({username: this.params.username})
      };
      return (Meteor.users.findOne({username: this.params.username}));
    }
});
