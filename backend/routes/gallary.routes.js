const express = require('express');
const router = express.Router();
const formidable = require('formidable');
const mv= require("mv");
const gallaryModel= require("../model/gallaryview.model");
var upload_path = "./Images/gallary/";

const app = express();

//To get all the pics of the gallary
router.get("/all_pics", function(req, res) {
  gallaryModel.find().then(list => res.json(list))
              .catch(err => res.status(500).json("Server Error"));  
})

//adding the pic to the gallary
router.post("/admin@harsh@1403/picregister", app.post("/admin@harsh@1403/picregister", (req, res) => {
    var form= new formidable.IncomingForm();
    form.parse(req, function(err, fields, files){
          // oldpath : temporary folder to which file is saved to
          var oldpath = files.image.path;
          var newpath = upload_path + files.image.name;
          // copy the file to a new location
          mv(oldpath, newpath, function (err) {
              if (err) throw err;
              var gallarypic = new gallaryModel();
              gallarypic.Heading = fields.Heading;
              gallarypic.image = files.image.name;
              gallarypic.Subheading = fields.Subheading;
              gallarypic.save();
              console.log("saved");
              res.send("Pic registered Successfully!");
          });
    });
}));

//deleting the pic from gallary
router.post('/admin@harsh@1403/delete/:id',(req, res, next) => {
    const id = req.params.id;
    gallaryModel.findOneAndRemove({_id:id}, function(err){
        if(err){
            console.log(err);
            res.status(500).send()
        }
        else{
            res.status(200).send("Deleted successfully");
        }
    })
})

module.exports = router;