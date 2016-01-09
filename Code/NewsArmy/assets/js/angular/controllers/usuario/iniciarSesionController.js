applicacion.controller('iniciarSesionController',['$scope','usuarioFactory',function($scope,usuarioFactory){
    console.log('Entraste a usuario iniciar sesion');
    $scope.iniciarSesion=function(){
      if($scope.usuarioALogear.email && $scope.usuarioALogear.pass){
        console.log("vamos a logear");
        console.log("Email\n"+$scope.usuarioALogear.email);
        console.log("Password\n"+$scope.usuarioALogear.pass);
        usuarioFactory.query({
          email:$scope.usuarioALogear.email,
          password:$scope.usuarioALogear.pass
        }).$promise.then(function success(results){
          $scope.usuarioLogeado=results;
        }, function error(error){
          console.log("error logeando");
        });
      }
    };
}]);
