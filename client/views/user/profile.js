Template.userProfile.helpers({

  username: function(){
    return Meteor.user().profile.name
  }
});
