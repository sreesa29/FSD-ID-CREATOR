const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://<db>:<password>@cluster0.nshve.mongodb.net/ICTAK-ID-APP?retryWrites=true&w=majority")
const Schema = mongoose.Schema;

var userSchema = new Schema({
    batch: {type: Array},
    course: {type: Array},
 }, {timestamps:true})

var Batch = mongoose.model('batch', userSchema)

module.exports = Batch;
