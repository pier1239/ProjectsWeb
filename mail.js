var express = require("express");
const ejs = require("ejs")
var app = express();
const bodyParser = require('body-parser');
app.use(express.static(__dirname + '/app'));
app.set('view engine', 'ejs')
//app.use(express.static(__dirname + '/css'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){

res.render('app/indexx')
});

app.post('/',function(req,res){

//require('env2')('sendgrid.env');    // loads all entries into process.env

//const sgMail = require('@sendgrid/mail');
//sgMail.setApiKey(process.env.SENDMAIL_KEY);
//const msg = {
//to: 'piertest1239@gmail.com',
//from: req.body.email,
//subject:  req.body.subject,
//text: 'ces facil a prendre',
//html:   req.body.name + ' ' + req.body.message,
//};
//sgMail.send(msg);

//res.redirect('/');
    

  



});



app.listen(process.env.PORT || 5000);

