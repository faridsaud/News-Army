applicacion.controller('homeController',['$scope','categoriaFactory','noticiaFactory',function($scope,categoriaFactory,noticiaFactory){

  io.socket.get('/Noticia',
    function (resData, jwres) {
      console.log('Se suscribio con blueprint de Sailsjs')

      //$digest() es necesario para que se actualice en la vista
      $scope.$digest();
    });
    io.socket.on('noticia', function (msg) {

      // Let's see what the server has to say...
      switch(msg.verb) {

        case 'created':

        console.log("socket create");
        $scope.ultimas6Noticias.pop();
        $scope.ultimas6Noticias.unshift(msg.data); // (add the new order to the DOM)
        $scope.$digest();      // (re-render)
        break;

        default: return; // ignore any unrecognized messages
      }
    });

  console.log("homeController");

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
  }, function error(error){
    console.log(error);
  })

}]);
