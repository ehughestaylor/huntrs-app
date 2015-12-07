Template.landing.events({
  'click #register-button': function(e, t) {
     e.preventDefault();
     // Retrieve the input field values
     var email = $('#email').val(),
         username = $('#username').val(),
        //  lastName = $('#last-name').val(),
         password = $('#password').val(),
         passwordAgain = $('#password-again').val();
    // Trim Helper
    var trimInput = function(val) {
       return val.replace(/^\s*|\s*$/g, "");
    }
    var email = trimInput(email);
    // Check password is at least 6 chars long
    var isValidPassword = function(pwd, pwd2) {
       if (pwd === pwd2) {
         return pwd.length >= 6 ? true : false;
       } else {
         return swal({
            title: "Passwords don’t match",
            text: "Please try again",
            showConfirmButton: true,
            type: "error"
         });
       }
     }



    // If validation passes, supply the appropriate fields to the
    // Accounts.createUser function.
    if (isValidPassword(password, passwordAgain)) {
       Accounts.createUser({
           username: username,
           email: email,
          //  firstName: firstName,
          //  lastName: lastName,
           password: password,
           profile: {
              name: username
          },
      }, function(error) {
         if (error) {
            console.log("Error: " + error.reason);
         } else {
           Router.go('/products');
           Modal.show('registerModal');
         }
      });
    }
    return false;
  },
  'click #facebook-login': function(event) {
   Meteor.loginWithFacebook({
     requestPermissions: ['email' ]
   }, function(err){
       if (err) {
           throw new Meteor.Error("Facebook login failed");
       } else {
         Router.go('/products');
         Modal.show('registerModal');
       }
   });
 }

});
