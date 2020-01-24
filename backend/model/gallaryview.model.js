const mongoose = require('mongoose');
// const Schema= mongoose.Schema;

const gallarySchema = mongoose.Schema({
    Heading: {type: String},
    image: {type: String},
    createdDate: {type: Date, default: Date.now}
});

// schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('GalleryView', gallarySchema);