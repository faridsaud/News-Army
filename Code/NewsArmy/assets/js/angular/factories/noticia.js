applicacion.factory('noticiaFactory',['$resource',function($resource){

    var factory = $resource(
        'http://localhost:1337/Noticia/:idNoticia',
    {
        idNoticia:'@idNoticia'
    },
         {
          actualizar:
            {
                method:'PUT',
                params:{
                    idNoticia:'@idNoticia'
                }

            }
         });

    return factory;

}]);
