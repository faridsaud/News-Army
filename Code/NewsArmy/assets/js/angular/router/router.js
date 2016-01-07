console.log("cargandi2");
applicacion.config(function ($stateProvider, $urlRouterProvider) {


  //SI LA URL QUE INGRESA EL USUARIO NO EXISTE SE REDIRIGE AQUI:
  $urlRouterProvider.otherwise("/home");
  //
  // VISTAS DE NUESTRA APLICACION
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'html/angular/views/home.html',
    controller: 'homeController'
  });

});
console.log("cargo2");
