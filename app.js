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
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Some gems havce hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems',
		canPurchase: true,
		soldOut: false
	},
	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: "...",
		canPurchase: true,
		soldOut: false
	}
	];

})();
