
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'app')))
  .set('app', path.join(__dirname, 'app'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
 
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


//var express = require("express");
//const ejs = require("ejs")
//var app = express();
//var path    = require("path");
//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(__dirname + '/app'));
//app.set('view engine', 'ejs')
//app.use(express.static(__dirname + '/css'));



//app.get('/',function(req,res){

// res.sendFile(path.join(__dirname+'/index.html'));

//});




//app.post('/',function(req,res){

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
    

  



//});



//app.listen(process.env.PORT || 5000);

