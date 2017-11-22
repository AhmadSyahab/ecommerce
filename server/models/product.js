const mongoose = require('mongoose')
const Schema = mongoose.Schema;



const productSchema = new Schema({
	productId : String,
	name : String,
	image : String,
	category : String,
	stock : Number,
	price : Number,
	createdAt : {
		type : Date,
		default : Date.now()
	},
	updatedAt : {
		type : Date
	}	
})

const productModel = mongoose.model('product',productSchema);

module.exports = productModel


