var express = require("express");
require('dotenv').config();
var app     = express();
const bodyParser = require('body-parser');
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/css'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){

});

app.post('/send',function(req,res){

console.log('test ');  

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
to: 'piertest1239@gmail.com',
from: req.body.email,
subject:  req.body.subject,
text: 'ces facil a prendre',
html:   req.body.name + ' ' + req.body.message,
};
sgMail.send(msg);

res.redirect('/');
    

  



});



app.listen(3000);

