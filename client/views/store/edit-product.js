Template.editProduct.events({
  'submit form': function(e) {
      e.preventDefault();

      var currentProductId = this._id;

      var productProperties = {
        name: $(e.target).find('[name=name]').val(),
        price: e.target.price.value,
        description: $(e.target).find('[name=description]').val()
      }

      Products.update(currentProductId, {$set: productProperties} , function(error) {
          if (error){
            //display error to user
            alert(error.reason);
          } else {
            Router.go('productPage', {_id: currentProductId});
          }
      });
    },

    'click .delete': function(e){
      e.preventDefault();

      if(confirm("Delete this post?")){
        var currentProductId = this._id;
        Products.remove(currentProductId);
        Router.go('products');
      }
    }

});
