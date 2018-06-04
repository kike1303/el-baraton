myApp.controller('navCtrl', function($scope,$http,$timeout,$location, $rootScope,$localStorage){

  
	$http.get('json/categories.json').
	  then(function onSuccess(response) {
	     $rootScope.categories = response.data.categories;
	  }).
	  catch(function onError(response) {
	   console.log(response);
	  });

    $http.get('json/products.json').
    then(function onSuccess(response) {
       $rootScope.products = response.data.products;
    }).
    catch(function onError(response) {
     console.log(response);
    });
	 
	  $rootScope.productsAdd = $localStorage.productsAdd;
    if (!$rootScope.productsAdd){
      $rootScope.productsAdd = [];
    };

	  $timeout(function() {
	  	// NAVIGATION
      var responsiveNav = $('#responsive-nav'),
        catToggle = $('#responsive-nav .category-nav .category-header'),
        catList = $('#responsive-nav .category-nav .category-list'),
        menuToggle = $('#responsive-nav .menu-nav .menu-header'),
        menuList = $('#responsive-nav .menu-nav .menu-list');

      catToggle.on('click', function() {
        menuList.removeClass('open');
        catList.toggleClass('open');
      });

      menuToggle.on('click', function() {
        catList.removeClass('open');
        menuList.toggleClass('open');
      });

      $(document).click(function(event) {
        if (!$(event.target).closest(responsiveNav).length) {
          if (responsiveNav.hasClass('open')) {
            responsiveNav.removeClass('open');
            $('#navigation').removeClass('shadow');
          } else {
            if ($(event.target).closest('.nav-toggle > button').length) {
              if (!menuList.hasClass('open') && !catList.hasClass('open')) {
                menuList.addClass('open');
              }
              $('#navigation').addClass('shadow');
              responsiveNav.addClass('open');
            }
          }
        }
      });
    	  }, 500);

    $scope.categorySelected = function(cat){
      
      $rootScope.products_filters = [];      
      
      angular.forEach($rootScope.products, function(product){
        if (product.sublevel_id == cat.id) {
            $rootScope.products_filters.push(product)            
        }  
      });

      if(!cat.sublevels){
        $rootScope.searchActive = true;
      }else{
        $rootScope.searchActive = false;
      };
       

       if ($location.path() != "/products"){
          $location.path("/products");
       };
       
      isInHome();
    };
    $scope.allProducts = function(){
      $rootScope.searchActive = false;
      $rootScope.products_filters = $rootScope.products;
      
      if ($location.path() != "/products"){
          $location.path("/products");
       };
       isInHome();
    };

    
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
    isInHome();
    
    
    $scope.home = function(){      
      
      $location.path('/home');
      isInHome();
    }

    


})