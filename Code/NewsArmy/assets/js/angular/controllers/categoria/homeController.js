applicacion.controller('categoriaHomeController',['$scope','$stateParams','categoriaFactory','noticiaFactory','$rootScope',function($scope,$stateParams,categoriaFactory,noticiaFactory,$rootScope){
    console.log('Entraste a categoria home');
    console.log("Estamos en la categoria con id"+$stateParams.idCategoria);
    categoriaFactory.get({idCategoria:$stateParams.idCategoria}).$promise.then(function success(results){
      console.log(results);
      console.log(results.data);
      $rootScope.categoriaActiva=results;
      console.log("categoria Activa");
      console.log($scope.categoriaActiva);
    }, function error(error){

    });
    noticiaFactory.query({
      limit:'6',
      sort:'createdAt DESC',
      pertenece:$stateParams.idCategoria}
    ).$promise.then(function success(results){
      $scope.ultimas6NoticiasDeCategoria=results;
      console.log(results);

    }, function error(error){
      console.log(error);
    })

}]);

/*
Uso de $q.all()
applicacion.controller('categoriaHomeController',['$scope','$q','$stateParams','categoriaFactory','noticiaFactory',function($scope,$q,$stateParams,categoriaFactory,noticiaFactory){
    console.log('Entraste a categoria home');
    console.log("Estamos en la categoria con id"+$stateParams.idCategoria);
    //promesa 1
    var promesa1=categoriaFactory.get({idCategoria:$stateParams.idCategoria}).$promise;
    promesa1.then(function success(results){
      console.log(results);
      console.log(results.data);
      $scope.categoriaActiva=results;
    }, function error(error){

    });
    //promesa2
    var promesa2=noticiaFactory.query({
      limit:'6',
      sort:'createdAt DESC',
      pertenece:$stateParams.idCategoria}
    ).$promise;
    promesa2.then(function success(results){
      $scope.ultimas6NoticiasDeCategoria=results;
      console.log(results);

    }, function error(error){
      console.log(error);
    })
    //este codigo se ejecutara solo si mis promesas han acabado
    $q.all([promesa1,promesa2]).then(function success(){
      console.log("Despues de que se cumplieron las 2 promesas");
      console.log("Ultimas 6 noticias\n"+$scope.ultimas6NoticiasDeCategoria);
      console.log("Categoria Activa\n"+$scope.categoriaActiva);
    }, function error(error){})

}]);

*/
