Template.addProduct.events({
  'submit form': function(e) {
      e.preventDefault();
      var product = {
        name: $(e.target).find('[name=name]').val(),
        price: $(e.target).find('[name=price]').val(),
        description: $(e.target).find('[name=description]').val()
      }

      Meteor.call('product', product, function(error, id){
        if (error)
          return alert(error.reason);

        Router.go('productPage', {_id: id});
      });
    }

});
// Template.newProductEmail.events({
//   'submit form': function(e,t) {
//
//       e.preventDefault();
//
//       var toAddress = 'huntrs@gmail.com'
//       var productName = $(e.target).find('[name=name]').val();
//       var productPrice = $(e.target).find('[name=price]').val();
//       var productDescription =  $(e.target).find('[name=description]').val();
//
//       Meteor.call('sendEmail', toAddress, productName, productPrice, productDescription);
//
//     }
//
// });
// if(Meteor.isClient){
//   Template.newProductEmail.events({
//     'click #product-button': function (e,t) {
//       e.preventDefault();
//
//             var toAddr = 'ehughespt@gmail.com';
//             var subj = $(e.target).find('[name=price]').val();
//             // var productPrice = $(e.target).find('[name=price]').val();
//             var body =  t.find('#productDescription').value;
//
//       // if someone click on the button ( tag), then we ask the server to execute the function sendEmail (RPC call)
//       Meteor.call('sendEmail', toAddr, subj, body)
//     }
//   });
// }
