// Accounts.onCreateUser(function(options, user) {
//     //pass the surname in the options
//
//     user.profile = Meteor.user().username || currentUser.services.facebook.name ;
//
//     return user;
// });
// Accounts.onCreateUser(function(options, user) {
//    // Use provided profile in options, or create an empty object
//
//    // Assigns first and last names to the newly created user object
//    user.profile.name = Meteor.user().username;
//    // Returns the user object
//    return user;
// });
if(Meteor.isServer) {
  Meteor.startup(function () {
   process.env.MAIL_URL = 'smtp://postmaster%40sandbox760999b1f5094de9890542012a73d75c.mailgun.org:d8645e3d700146694c415efc7d03027c@smtp.mailgun.org:587';

   Accounts.emailTemplates.from='no-reply@huntrs.com';
   Accounts.emailTemplates.sitename='HUNTRS';

   Accounts.emailTemplates.verifyEmail.subject = function(user) {
     return 'Confirm Your Email Address';
   };
   Accounts.emailTemplates.verifyEmail.text = function(user, url) {
     return 'Click on the following link to verify your email address: ' + url;
   };

   Accounts.config({
     sendVerificationEmail:true
   });

  //  Accounts.sendVerificationEmail(Meteor.userId());
  });
 }
