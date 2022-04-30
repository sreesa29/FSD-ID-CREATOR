const mongoose = require('mongoose');
mongoose.connect("mongodb")
const Schema = mongoose.Schema;

var userSchema = new Schema({
    batch: {type: Array},
    course: {type: Array},
 }, {timestamps:true})

var Batch = mongoose.model('batch', userSchema)

module.exports = Batch;
