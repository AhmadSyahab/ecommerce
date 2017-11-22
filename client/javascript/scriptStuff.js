// $('.gal').hide()
const api = 'http://api.amarboy.tk/product'
new Vue({
	el: '#app',
	data: {
		developer : "Ahmad",
		products : []
	},
	methods : {
		getAllProduct(){
			axios.get(api)
			.then(response => {	
				response.data.forEach(product => {
					this.products.push(product)	
				// $.fn.matchHeight._update()
				$(function() {
					console.log('same height')
					// $('.thumbnail').matchHeight({
					// 	byRow: true,
					// 	property: 'height',
					// 	target: null,
					// 	remove: false
					// });
				});

			})	
				this.updateHeight()	
				$.fn.matchHeight._update()	
				console.log(this.products)
			})
			.catch(function (error) {
				console.log(error);
			});
		},
		updateHeight(){
			console.log('updating height')
			$.fn.matchHeight._update()
		},
		addCart(event){
			if(localStorage[event]){
				let total = +localStorage.getItem(event) + 1;
				localStorage.setItem(event, total);
			}else{
				localStorage.setItem(event, 1);
			}
		}
	},
	created () {
		this.getAllProduct()
	}
})	