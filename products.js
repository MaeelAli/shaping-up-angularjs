(function(){

	var app = angular.module('store-products', [ ]);
		// element directive for <product-title>
	app.directive('productTitle', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	app.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller: function() {
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
			},
			controllerAs: 'panel'
		};
	});
})();