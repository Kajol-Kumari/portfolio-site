var express= require('express');
const cors = require("cors");
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const mongoose =require("mongoose");

mongoose.connect("mongodb+srv://kajol:Ppts3hkaPS9LmqYQ@cluster0-pnyfq.mongodb.net/HarshDB",{useNewUrlParser: true})
        .then(() => {
          console.log("Connected to the database :)")
        })
        .catch(()=>{
          console.log("Connection failed :(")
        })



//Routes
const AdminBlogRoutes = require("./routes/blog.routes");
const AdminContactRoutes=require("./routes/contactlist.routes");
const AdminGallaryRoutes=require("./routes/gallary.routes");


const port= process.env.PORT || 3000;

var app= express();
app.use(cors({ origin: "*" }));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.send(
      "<h1 style='text-align: center'>Welcome to Backend <br><br>😃👻😃👻😃👻😃👻😃</h1>"
    );
  });



  //Sendgrid for mailing test
app.post("http://localhost:4200/sendmail",(req,res) => {
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


app.listen(port,() =>{
    console.log('Backend is runing here!')
})

app.use('/api/blog', AdminBlogRoutes);
app.use('/api/contact',AdminContactRoutes);
app.use('/app/gallary',AdminGallaryRoutes);
app.use('/Images/',express.static('Images/'));
module.exports = app;
