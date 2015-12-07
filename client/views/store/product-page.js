Template.productPage.helpers({
  ownPost: function(){
    return this.userId == Meteor.userId();
  },
  products: function (){
    return Products.find();
  },
  comments: function() {
    return Comments.find({productId: this._id});
  },
  commentsCount: function() {
    return Comments.find({productId: this._id}).count();
  }
});
