const ObjectId = require('mongodb').ObjectId;
const Customer = require('../models/customer')


function create(req,res) {
	let customer = new Customer(req.body);
	customer.save((err, customer) => {
		if(err){
			res.send(err)
		}else{
			res.send(customer);
		}
	})
}

function findAll(req,res) {
	Customer.find((err, allCustomer) => {
		if(err){
			res.send(err);
		}else{
			res.send(allCustomer)
		}
	})
}

function destroy(req,res) {
	Customer.remove({_id : ObjectId(req.params.userId)}, (err,rmvCustomer) => {
		if(err){
			res.send(err);
		}else{
			res.send(rmvCustomer)
		}
	})
}

function update(req,res) {
	Customer.findOneAndUpdate(
		{_id : ObjectId(req.params.userId)},
		req.body,
		function (err,updatedCustomer){
			if(err){
				res.send(err);
			}else{
				res.send(updatedCustomer);
			}
		})
}

module.exports = {
	create,
	findAll,
	destroy,
	update
}