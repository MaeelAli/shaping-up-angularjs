//wrap entire javascript in a closure [GOOD HABIT]
(function(){

	//define store app as module and give dependancies
	var app = angular.module('store', [])

	//define controller for store app. IMPORTANT that "StoreController" is capitalized + with Controller at end.
	app.controller('StoreController', function(){
		this.products = gems;
	});

	//define controller for Panel section that holds Description/Spec/Reviews info.
	app.controller('PanelController', function(){
		//init tab to 1
		this.tab = 1;

		//function to set tab property to selected tab
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};

		//returns true or false if tab is selected or not
		this.isSelected = function(checkTab){
			return this.tab == checkTab;
		};

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
		reviews: [
			{
				stars: 5,
				body: "I love this product!",
				author: "enzo@amore.com"
			},
			{
				stars: 1,
				body: "This product sucks!",
				author: "couple@haters.com"
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
		reviews: [
			{
				stars: 1,
				body: "There's only 1 word to describe this... and I am going to spell it out for you... S A W F T SSSSAWWFFFTTT!",
				author: "big@cass.com"
			}
		],
		canPurchase: true,
		soldOut: false
	}
	];

})();
