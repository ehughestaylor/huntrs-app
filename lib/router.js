Router.configure({
  layoutTemplate:"mainLayout",
  loadingTemplate: 'loading',
  waitOn: function() {
    return [Meteor.subscribe('products')];
  }
});


//////////////////////////
// USERS ROUTE
/////////////////////////

Router.route('/users/:username',{
    name: 'profile',
    layoutTemplate: 'mainLayout',
    data: function(){
      return {
        user: Meteor.users.findOne({username: this.params.username})
      };
      return (Meteor.users.findOne({username: this.params.username}));
    }
});

//////////////////////////
// PRODUCT ROUTES
/////////////////////////
Router.route('/products', {
    name: 'products',
    layoutTemplate: 'mainLayout',
    data: function () {
      return {
        products:Products.find({})
      };
    }
  });

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

////////////////////////////
// Landing Page
///////////////////////////
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

// Router.route('/cart', function () {
//   this.render('cart', {
//     data: function () {
//     	return {
//     		products:Products.find({})
//     	};
//     }
//   });
// });
// REQUIRE LOGIN HOOK


var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('denied');
  } else {
    this.render('userProfile');
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {except: ['landing', 'productPage', 'about', 'terms', 'press', 'contact']});
