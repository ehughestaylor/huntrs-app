Template.navigation.helpers({
   cartCount: function(){
     return Session.get('Cart-itemCount');
   }
});
Template.navigation.rendered=function(){
  Meteor.typeahead.inject();
  $('.typeahead').bind('typeahead:select', function(ev, suggestion) {
    console.log('Selection: ', suggestion.value);
    Router.go('profile', { username: suggestion.value });
  });
};

Template.navigation.helpers({
  usernames: function(){
    return Meteor.users.find().fetch().map(function(user){
      return user.username;
      return User.services.facebook.name;
    });
  }
});
