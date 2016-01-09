applicacion.controller('categoriaHomeController',['$scope','$stateParams','categoriaFactory','noticiaFactory',function($scope,$stateParams,categoriaFactory,noticiaFactory){
    console.log('Entraste a categoria home');
    console.log("Estamos en la categoria con id"+$stateParams.idCategoria);
    categoriaFactory.get({idCategoria:$stateParams.idCategoria}).$promise.then(function success(results){
      console.log(results);
      console.log(results.data);
      $scope.categoriaActiva=results;
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
