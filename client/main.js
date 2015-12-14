if (Meteor.isClient){
  // var ACCESS_KEY_ID = Meteor.settings.key;
  // var SECRET_ACCESS_KEY = Meteor.settings.secret;
  // var BUCKET_NAME = Meteor.settings.bucket;
  // var BUCKET_URL = Meteor.settings.bucketUrl
  //
  // ImageUpload.configure({
  //   accessKeyId: ACCESS_KEY_ID,
  //   secretAccessKey: SECRET_ACCESS_KEY,
  //   bucketName: BUCKET_NAME,
  //   bucketUrl: BUCKET_URL, //"https://your_bucket_name.s3.amazonaws.com/"
  // });

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });

 // Tracker.autorun(function () {
 //     Meteor.subscribe("userData");
 // });
 Tracker.autorun(function(){
  if(Meteor.user()){
    // login handler
    Router.go("userProfile");
  }
  else{
    // logout handler
  }
  });
}
