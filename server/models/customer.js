const mongoose = require('mongoose').connect('mongodb://localhost:27017/library');
const Schema = mongoose.Schema;


const customerSchema = new Schema({
	name : String,
	memberid : String,
	address : String,
	zipcode : Number,
	phone : {
		type : String,
		validate : {
			validator : function (v) {
				return v.length>6;
			},
			message : "phone number to short"
		}
	}
})

const customerModel = mongoose.model('customer',customerSchema);

module.exports = customerModel