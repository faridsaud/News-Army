applicacion.controller('iniciarSesionController',['$scope','$http','usuarioFactory','$location','$rootScope', function($scope,$http,usuarioFactory, $location,$rootScope){
    console.log('Entraste a usuario iniciar sesion');
    $scope.iniciarSesion=function(){
      if($scope.usuarioALogear.email && $scope.usuarioALogear.pass){
        console.log("vamos a logear");
        console.log("Email\n"+$scope.usuarioALogear.email);
        console.log("Password\n"+$scope.usuarioALogear.pass);
        $http({
          method:'POST',
          url:'/login',
          params:{
            email:$scope.usuarioALogear.email,
            password:$scope.usuarioALogear.pass
          }
        }).then(function success(response){
          $rootScope.loggedUser=response.data;
          console.log($scope.loggedUser);
          $location.path('/home');
        }, function error(response){
          console.log(response);
        })
      }
    };
}]);
