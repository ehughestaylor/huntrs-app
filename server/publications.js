// Meteor.publish("userData", function () {
//     return Meteor.users.find({_id: this.userId},
//         {fields: {'username': 1, 'email': 1}});
// });
Meteor.publish('usersData', function () {
  return Meteor.users.find({});
});
Meteor.publish('products', function(){
  return Products.find();
});
Meteor.publish('comments', function(){
  return Comments.find({}, {sort: {submitted: -1}});
});
