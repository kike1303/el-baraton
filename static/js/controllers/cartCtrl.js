myApp.controller('cartCtrl', function($scope,$timeout, $rootScope,
										$deleteProduct,$localStorage){ 

    // $timeout(function(){
    //  loadMainJS();
    // },100);
    
	$rootScope.number_prod_add = $localStorage.number_prod_add;	
	if(!$rootScope.number_prod_add){
		$rootScope.number_prod_add = 0;
	};

	$rootScope.total_purchase = $localStorage.total_purchase;
	if(!$rootScope.total_purchase){
		$rootScope.total_purchase = 0;
	}

	$scope.deleteProd = function(prod){
		$deleteProduct.deleteProduct(prod); 
	};
    
});