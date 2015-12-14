Template.user.helpers({

  username: function(){
    return Meteor.user().profile.name
  }
});
