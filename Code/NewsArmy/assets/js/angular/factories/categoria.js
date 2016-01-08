applicacion.factory('categoriaFactory',['$resource',function($resource){

    var factory = $resource(
        'http://localhost:1337/Categoria/:idCategoria',
    {
        idCategoria:'@idCategoria'
    },
         {
          actualizar:
            {
                method:'PUT',
                params:{
                    idCategoria:'@idCategoria'
                }

            }
         });

    return factory;

}]);
