const mongoose = require('mongoose');
// const Schema= mongoose.Schema;

const contactSchema = mongoose.Schema({
    Name: {type: String},
    EmailId: {type: String},
    Message: {type: String},
    createdDate: {type: Date, default: Date.now}
});

// schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('ContactList', contactSchema);