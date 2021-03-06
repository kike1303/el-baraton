myApp.controller('cartViewCtrl', function($scope, $rootScope, $deleteProduct, 
										$location,$localStorage, $timeout){ 

	if(!$rootScope.total_purchase){
		$rootScope.total_purchase = 0;
	}	

	
	$scope.prod_qty = 1;
	$scope.prodQuantity = function(prod,prod_qty){
		prod.prod_qty = prod_qty;
		var prod_price = Number(prod['price'].replace('$','').replace(',','.'));
		if (prod_qty > prod.quantity){			
				prod.total = prod_price;	
		}else {
			prod.total = prod_qty*prod_price;
		}	

		$rootScope.total_purchase = 0;
		angular.forEach($rootScope.productsAdd, function(prod){
			$rootScope.total_purchase += prod.total;
		});	
		$localStorage.total_purchase = $rootScope.total_purchase;
	}
   
   $scope.deleteProd = function(prod){

    	$deleteProduct.deleteProduct(prod);
    	
    };

    $scope.comprar = function(){
    	angular.forEach($rootScope.products_filters, function(prod){
	    	angular.forEach($rootScope.productsAdd, function(prodAdd){
	    		if(prod.id == prodAdd.id ){
	    			prod.ocultar = false;
	    		};
	    	});
		});
    	$rootScope.productsAdd = [];
    	$rootScope.total_purchase = 0;
    	$rootScope.number_prod_add = 0;
    	$localStorage.$reset();
    	$location.path("/checkout");
    }

    jQuery(document).ready(function($) {
		isInHome();
	});

	function isInHome(){

      if($location.path() == "/products" || 
         $location.path() == "/cart" ||
         $location.path() == "/checkout" ){
        
        
        $timeout(function(){
          $('.category-nav').addClass('show-on-click');
        },500); 
      }else{
       
        $timeout(function(){
          $('.category-nav').removeClass('show-on-click');
        },500);
         
      }
    };  
    
});