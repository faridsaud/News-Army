applicacion.controller('homeController',['$scope','categoriaFactory','noticiaFactory',function($scope,categoriaFactory,noticiaFactory){
  console.log("homeController");

  io.socket.on("noticia", function (msg) {

    // Let's see what the server has to say...
    switch(msg.verb) {

      case 'created':

      $scope.ultimas6Noticias.pop();
      console.log("socket create");
      $scope.ultimas6Noticias.push(msg.data); // (add the new order to the DOM)
      $scope.$apply();      // (re-render)
      break;break;

      default: return; // ignore any unrecognized messages
    }
  });

  //$scope.categorias=categoriaFactory.query();
  categoriaFactory.query().$promise.then(function success(results){
    $scope.categorias=results;
  },
  function error(error){
    console.log(error);
  });
  noticiaFactory.query({
    limit:'6',
    sort:'createdAt DESC'}
  ).$promise.then(function success(results){
    $scope.ultimas6Noticias=results;
    console.log(results);

    console.log($scope.ultimas6Noticias[1].imagenes);
  }, function error(error){
    console.log(error);
  })
  $scope.usuarioLogeado={id:1};


}]);
