const ObjectId = require('mongodb').ObjectId;
const Product = require('../models/product')


function create(req,res) {
	let product = new Product(req.body);
	product.save((err, product) => {
		if(err){
			res.send(err)
		}else{
			res.send(product);
		}
	})
}

function findAll(req,res) {
	Product.find((err, allProduct) => {
		if(err){
			res.send(err);
		}else{
			res.send(allProduct)
		}
	})
}

function destroy(req,res) {
	Product.remove({_id : ObjectId(req.params.productId)}, (err,rmvProduct) => {
		if(err){
			res.send(err);
		}else{
			res.send(rmvProduct)
		}
	})
}

function update(req,res) {
	Product.findOneAndUpdate(
		{_id : ObjectId(req.params.productId)},
		req.body,
		function (err,updatedProduct){
			if(err){
				res.send(err);
			}else{
				res.send(updatedProduct);
			}
		})
}

module.exports = {
	create,
	findAll,
	destroy,
	update
}