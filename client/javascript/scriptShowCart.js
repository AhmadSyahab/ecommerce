const apiProduct = "http://api.amarboy.tk/product"
const apiTransaction = "http://api.amarboy.tk/transaction"
new Vue({
	el: '#app',
	data: {
		developer : "Ahmad",
		carts : [],
		totalPrice : 0,
		transactions : []
	},
	methods : {
		getAllProduct(){
			axios.get(apiProduct)
			.then(response => {	
				response.data.forEach(product => {
			// console.log(product.productId)	
			if(localStorage[product.productId] !== undefined){
				product.total = localStorage.getItem(product.productId)
				product.subtotal = product.total*product.price
				this.carts.push(product)
			}

			// console.log(product.productId,localStorage[product.productId]
		})	
				console.log(this.carts)
				this.carts.forEach(cart => {
					this.totalPrice = this.totalPrice + cart.subtotal
				})
			})
			.catch(function (error) {
				console.log(error);
			});							
		},
		getAllTransaction(){
			axios.get(apiTransaction)
			.then(response => {
				response.data.forEach(transaction => {
					this.transactions.push(transaction);
				})
			})
			.catch(function (err) {
				console.log(error);
			})
		},
		checkout(event){
			if(event.length == 0){
				alert('Pick the item first')
			}else{
				axios.post(apiTransaction, this.carts)
				.then(response => {
					console.log(response)
					this.carts.forEach(cart => {
						localStorage.removeItem(cart.productId);
					})
					this.carts = [];
					this.totalPrice = 0;
					this.transactions = [];
					this.getAllTransaction()								
				})
			}
		}
	},
	created () {
		this.getAllProduct(),
		this.getAllTransaction()
	}			
})