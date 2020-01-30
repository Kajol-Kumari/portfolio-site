const express=require("express");
const router = express.Router();
const formidable = require('formidable');
const mv= require("mv");
const blogModel= require("../model/blogdetaillist.model");
var upload_path = "./Images/blog/";

const app = express();

//Get all blogs
router.get("/blog_list", function(req, res){
    blogModel.find().then(list => res.json(list))
             .catch(err => res.status(500).json("Server Error!"))
})

//Get a single blog detail
router.get("/getblog/:id", function(req, res){
    blogModel.find({_id: req.params.id}, function(err){
        if(err){
            console.log(err)
            res.status(500).send()
        }
        else{
            res.status(200).send("found!");
        }
    })
})

//Register Blog
router.post('/admin@harsh@1403/blogregister',(req, res,next) => {
   var form = new formidable.IncomingForm();
   form.parse(req, function(err, fields, files) {
    //    console.log("In function");
       var oldpath = files.image.path;
       var newpath = upload_path + files.image.name;
       mv(oldpath,newpath, function(err){
        //    console.log("processing data");
           if(err) throw err;
           var newblog = new blogModel();
           newblog.Heading = fields.Heading;
           newblog.Subheading =fields.Subheading;
           newblog.Text = fields.Text;
           newblog.image = files.image.name;
           newblog.save();
        //    console.log("saved!");
           res.send("Blog registered Successfully!");
       })
   }); 
});

//Delete blog
router.post('/admin@harsh@1403/delete/:id',(req, res,next) => {

    const id = req.params.id;
    // console.log(id);
    blogModel.findOneAndRemove({ _id: id }, function (err) {
        if (err) {
            console.log(err);
            res.status(500).send()
        }
        else {
            res.status(200).send("Deleted Succesfully");
        }
    }
    )
})

module.exports = router;