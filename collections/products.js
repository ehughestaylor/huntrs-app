Products = new Mongo.Collection('products');

Products.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Products.deny({
  update: function(userId, product, fieldNames){
    //may only edit the following three fields
    return (_.without(fieldNames, 'name', 'price', 'description').length > 0);
  }
});

Meteor.methods({
  product: function(productAttributes){
    var user = Meteor.user(),
      productWithSameName= Products.findOne({name: productAttributes.name});

      // ensure the user is logged in
      if(!user)
        throw new Meteor.Error(401, "You need to login to post products");

      // ensure the product has a name
      if(!productAttributes.name)
        throw new Meteor.Error(422, 'Please fill in a name');

      //check that there are no previous posts with the same name
      if(productAttributes.name && productWithSameName){
        throw new Meteor.Error(302,
          'This product has already been posted',
          productWithSameName._id);
      }

      //pick out the whitelisted keys
      var product = _.extend(_.pick(productAttributes, 'name', 'price', 'description'), {
        userId: user._id,
        author: user.username,
        submitted: new Date().getTime(),
        commentsCount: 0
      });

      var productId = Products.insert(product);

      return productId;
  }
});




// ProductsIndex = new EasySearch.Index({
//   collection: Products,
//   fields: ['name','price'],
//   engine: new EasySearch.Minimongo()
// });
