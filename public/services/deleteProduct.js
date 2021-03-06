myApp.service('$deleteProduct', function($rootScope,$localStorage){
	this.deleteProduct = function(prod){
		angular.forEach($rootScope.products_filters, function(value){
    		if (prod.id == value.id){
    			value.ocultar = false;
    		}
    	});

    	$rootScope.productsAdd = jQuery.grep($rootScope.productsAdd, function(value) {
		  return value != prod;
		});	

    	$localStorage.productsAdd = $rootScope.productsAdd;
    	$rootScope.total_purchase = 0;
    	angular.forEach($rootScope.productsAdd, function(prod){
			$rootScope.total_purchase += prod.total;
		});
		$localStorage.total_purchase = $rootScope.total_purchase;

		$rootScope.number_prod_add -= 1;
		$localStorage.number_prod_add = $rootScope.number_prod_add;
	};
});