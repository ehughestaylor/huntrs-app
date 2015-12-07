



//

if (Meteor.isServer){
  process.env.MAIL_URL = 'smtp://postmaster%40sandbox760999b1f5094de9890542012a73d75c.mailgun.org:d8645e3d700146694c415efc7d03027c@smtp.mailgun.org:587';
  // S3.config = {
  //     key: 'AKIAIJ2O3DX2JLHQYLKQ',
  //     secret: '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',
  //     bucket: 'huntrs-test'
  // };
  Meteor.methods({
    sendEmail: function(to, subj, text) {
      this.unblock();
      // send the email!
      Email.send({
        to:to,
        from:'no-reply@huntrs.com',
        subject:'Thank you for submitting a new product',
        text: text
      });
    }
  });

}
