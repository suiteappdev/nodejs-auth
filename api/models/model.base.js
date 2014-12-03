// model base

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Schema = new Schema({
	  created_date : {type: Date},
	  updated_date : {type: Date, default: Date.now}
});


module.exports = new mongoose.model('model', Schema); 