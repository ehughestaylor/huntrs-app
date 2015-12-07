Template.products.helpers({
  products: function(){
    return Products.find({}, {sort: {submitted: -1}});
  },
  commentsCount: function(){
    return Comments.find({productId: this._id}).count();
  }
});
