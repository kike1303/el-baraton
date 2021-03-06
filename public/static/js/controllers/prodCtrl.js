myApp.controller('prodCtrl', function($scope,$http,$location, $timeout, $rootScope,$localStorage){ 


    $rootScope.products_filters = $rootScope.products;
    
    // PRICE SLIDER
	var slider = document.getElementById('price-slider');
		if (slider) {
		noUiSlider.create(slider, {
		  start: [1, 20],
		  connect: true,
		  tooltips: [true, true],
		  format: {
		    to: function(value) {
		    	
		      return '$' + value.toFixed(2);
		    },
		    from: function(value) {
		    	
		      return value
		    }
		  },
		  range: {
		    'min': 1,
		    'max': 20
		  }
		});
	}

	

	$scope.minPrice = 1;
	$scope.maxPrice = 20;
	$scope.filterPriceBtn = function(){
		var sliderValue = slider.noUiSlider.get()
		$scope.minPrice =  Number(sliderValue[0].replace('$',''));
		$scope.maxPrice =  Number(sliderValue[1].replace('$',''));		
	}

	

	$scope.priceRange = function(prod){
		
		var nr = Number(prod['price'].replace('$','').replace(',','.'))
		return (

			nr >= $scope.minPrice && nr <= $scope.maxPrice

			);
	};



	$scope.available = false;
	$scope.isAvailable = function(prod){
		
		if($scope.available){
			return prod['available'];
		}else{
			return prod ;
		}		
	};

	$scope.quantity = 0;
	$scope.quantityFilter = function(prod){
		return prod['quantity'] > $scope.quantity;
	};


    $scope.orderProd = function(prod){

    	if( $scope.sortBy == 'Precio' ){
    		return Number(prod['price'].replace('$','').replace(',','.'));
    	}else if( $scope.sortBy == 'Disponibilidad'){
    		return -prod['available'];
    	}else if( $scope.sortBy == 'Cantidad' ){
    		return prod['quantity'];
    	}else {
    		return prod;
    	} 	
    };

    angular.forEach($rootScope.products_filters, function(prod){
    	angular.forEach($rootScope.productsAdd, function(prodAdd){
    		if(prod.id == prodAdd.id ){
    			prod.ocultar = true;
    		};
    	});
	});

	angular.forEach($rootScope.products_filters, function(prod){
    		if(!prod.available ){
    			prod.ocultar = true;
    		};
	});
    
    $rootScope.qty_prod = 1;
    $scope.addProductToCart = function(prod){    	
    	prod.ocultar = true;   	
    	
    	$rootScope.productsAdd.push(prod);
    	$localStorage.productsAdd = $rootScope.productsAdd;  		

    
		prod.total = Number(prod['price'].replace('$','').replace(',','.'));
		$rootScope.total_purchase += prod.total;
		
		$localStorage.total_purchase = $rootScope.total_purchase;

		$rootScope.number_prod_add += 1;
		$localStorage.number_prod_add = $rootScope.number_prod_add;

    }
});