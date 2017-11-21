const mongoose = require('mongoose').connect('mongodb://localhost:27017/ecommerce');
const Schema = mongoose.Schema;


const transactionSchema = new Schema({
	products : [{
		productId: {
			type: Schema.Types.ObjectId, ref: 'product'	
		},
		total: Number,
		productName : String,
		subtotal : Number
	}],
	totalPrice : {
		type : Number,
		default : 0
	},
	transactionDate  : {
		type : Date,
		default : Date.now()
	}
})

const transactionModel = mongoose.model('transaction', transactionSchema);

module.exports = transactionModel