//wrap entire javascript in a closure [GOOD HABIT]
(function(){

	//define store app as module and give dependancies
	var app = angular.module('store', [])

	//define controller for store app. IMPORTANT that "StoreController" is capitalized + with Controller at end.
	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems = [ 
	{
		name: 'Dodecahedron Gem',
		price: 2.95,
		description: 'Some gems havce hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems',
		images: [
			{
				full: "./img/dodecahedron-01-full.jpg",
				thumb: "./img/dodecahedron-01-thumb.jpg"
			},
			{
				full: "./img/dodecahedron-02-full.jpg",
				thumb: "./img/dodecahedron-02-thumb.jpg"
			}
		],
		canPurchase: true,
		soldOut: false
	},
	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: "...",
		images: [
			{
				full: "./img/pentagonal-full.jpg",
				thumb: "./img/pentagonal-thumb.jpg"
			}
		],
		canPurchase: true,
		soldOut: false
	}
	];

})();
