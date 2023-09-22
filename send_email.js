var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'guiritter7@gmail.com',
    pass: 'ujdj aupu kndb zxoq'
  }
});

var mailOptions = {
  from: 'guiritter7@gmail.com',
  to: 'joedio.borges@ifc.edu.com',
  subject: 'Sending Email using Node.js',
  text: 'Guilherme Ritter 2B ujdj aupu kndb zxoq'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});