const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    body : String,
    rating : Number
});

module.exports = new mongoose.model('Review',reviewSchema);