var mongoose = require('mongoose'),
    Schema = mongoose.Schema
    
var List = new Schema({
        description : String,
        ownerID : String
        // date : {type: Date, default: Date.now()}
});    
    
module.exports = mongoose.model('lists', List);