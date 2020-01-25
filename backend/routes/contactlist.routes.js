const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const contactModel= require('../model/contact.model');
//sendGrid
const sgMail = require('@sendgrid/mail');

// const app = express();

//For getting list of all the people who contacted admin
router.get('/admin@harsh@1403/contact_list', function(req, res) {
    contactModel.find().then(list => res.json(list))
    .catch(err => res.status(500).json("Server Error"));  
})

///For sending mail
router.post("/sendmail",(req,res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    let user = req.body;
    const msg = {
        to: 'kajolkumarisingh222@gmail.com',
        from: 'singhkajolkumari22@example.com',
        subject: "New Message for you Harsh 😃",
        text: 'Testing the sendGrid feature :)',
        html: `<strong> <h3>${user.name}</h3>
                        <h4>${user.email}</h4>
                        <h4>${user.message}</h4>
                </strong>`,
      };
      sgMail.send(msg);
});


router.post('/contact_register', function(req,res,next) {
    var form = new formidable.IncomingForm();
   form.parse(req, function(err, fields, files) {
           if(err) throw err;
            // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            // const msg = {
            //     to: 'kajolkumarisingh222@gmail.com',
            //     from: 'singhkajolkumari22@example.com',
            //     subject: "New Message for you Harsh 😃",
            //     text: 'Testing the sendGrid feature :)',
            //     html: `<strong> Name: <h3>${fields.name}</h3>
            //             Email ID: <h4>${fields.email}</h4>
            //             Message: <h4>${fields.message}</h4>
            //             </strong>`,
            // };
            // sgMail.send(msg);

           var newcontact = new contactModel();
           newcontact.Name = fields.name;
           newcontact.EmailId =fields.email;
           newcontact.Message = fields.message;
           newcontact.save();
        //    console.log("saved!");
           res.send("Contact registered Successfully!");
   }); 
})
module.exports = router;