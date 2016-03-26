var mongoose = require('mongoose');

module.exports = mongoose.model('Task', {
    name : {type : String, default: ''},
    location : {type : String, default: ''},
    description : {type : String, default: ''},
    lon : {type : Number, default: 0},
    lat : {type : Number, default: 0}
});
