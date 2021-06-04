const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const nodemailer = require('nodemailer');
const creds = require('./config');

var transport = {
  host: 'leader.herosite.pro',
  port: 465,
  secure: true,
  auth: {
    user: creds.USER || process.env.USER,
    pass: creds.PASS || process.env.PASSWORD
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All works fine, congratz!');
  }
});

app.use(express.json()); 
app.use(cors());
app.post('/send', (req, res, next) => {
  const name = req.body.name
  const message = req.body.messageHtml
  
    var mail = {
      from: 'noreply@xaplemedia.com',
      to: creds.RECEIVER || process.env.RECEIVER, 
      subject: `Requirement Proposal Received from ${name}`,
      html: message
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        })
      } else {
        res.json({
          msg: 'success'
        })
      }
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));