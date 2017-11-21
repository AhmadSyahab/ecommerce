const ObjectId = require('mongodb').ObjectId;
const Transaction = require('../models/transaction')
const checkDayDifference = require('../helper/checkday')


function findAll(req,res) {
	Transaction.find({}).populate('productId')
	.exec()	
	.then(allTransaction => {
		res.send(allTransaction);
	})
	.catch(err => {
		res.status(500).send(err);
	})
}

function makeTransaction(req,res) {
	let product = []
	console.log(req.body)
	req.body.forEach(body => {
		product.push({
			productId : body._id,
			total : body.total,
			productName : body.name,
			subtotal : body.subtotal
		})
	})
	let transaction = new Transaction({
		products  : product
	})
	transaction.save((err, transaction) => {
		if(err){
			res.status(500).send(err)
		}else{
			transaction.products.forEach(trans => {
				transaction.totalPrice = transaction.totalPrice + trans.subtotal;	
			})
			transaction.save()
			res.send(transaction);
		}
	})
}

function updateBooklist(req,res) {
	Transaction.findById({
		_id : ObjectId(req.params.productId)
	}, (err,transaction) => {
		let dayDifference = checkDayDifference(transaction.due_date);
		transaction.set({
			productId : transaction.productId,			
			total : req.body.total || transaction.total,
			transactionDate : Date.now()
		});

		transaction.save((err, updatedTransaction) => {
			if(err){
				res.status(500).send(err);
			}else{
				res.send(updatedTransaction);
			}
		})
	})

}

module.exports = {
	findAll,
	makeTransaction,
	updateBooklist
}