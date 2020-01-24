const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const contactModel= require('../model/contact.model');

const app = express();

//For getting list of all the people who contacted admin
router.get('getallcontact', function(req, res) {
    contactModel.find().then(list => res.json(list))
    .catch(err => res.status(500).json("Server Error"));  
})

module.exports = router;