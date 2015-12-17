
Template.navigation.rendered=function(){
  Meteor.typeahead.inject();
  $('.typeahead').bind('typeahead:select', function(ev, suggestion) {
    console.log('Selection: ', suggestion.value);
    Router.go('member', { username: suggestion.value });
  });
};

Template.navigation.helpers({
  usernames: function(){
    return Meteor.users.find().fetch().map(function(user){
      return user.username;
      return user.emails[0].address;
      return user.createdAt;
    });
  }
});
