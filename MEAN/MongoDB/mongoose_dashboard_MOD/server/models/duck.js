//: Require Mongoose
var mongoose = require('mongoose');

//: Create Schema
var DuckSchema = new mongoose.Schema({
    name : { type: String, required: true },
    gender : { type: String, required: true },
    age : { type: String, required: true },
    description : { type: String, required: true },
    created : { type: Date, default: Date.now }
})

//: Register schema as a model
var Duck = mongoose.model('Duck', DuckSchema);
