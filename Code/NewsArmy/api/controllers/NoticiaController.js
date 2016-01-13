/**
* NoticiaController
*
* @description :: Server-side logic for managing noticias
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {

  registrar:function(req,res){

    if(!req.param('titulo')||!req.param('contenido')||!req.file('inputFiles')||!req.param('categoriaId')){
      console.log("parametros error noticia");
      if(!req.param('titulo'))
      console.log("error parametro titulo");
      if(!req.param('contenido'))
      console.log("error parametro contenido");
      if(!req.file('inputFiles'))
      console.log("error parametro imagen");
      if(!req.param('categoriaId'))
      console.log("error parametro categoriaid")
      return res.badRequest();
    }
    req.file('inputFiles').upload({
      // don't allow the total upload size to exceed ~10MB
      dirname: 'C:\\Users\\farid\\Documents\\7mo\\Web con js\\Proyecto\\FinalProject\\Code\\NewsArmy\\assets\\images\\news',
      maxBytes: 10000000
    },function whenDone(err, uploadedFiles) {
      if (err) {
        console.log("error subiendo archivo")
        return res.negotiate(err);
      }
      // If no files were uploaded, respond with an error.

      if (uploadedFiles.length === 0){
        console.log("no se subio ningun archivo");
        return res.badRequest('No file was uploaded');
      }
      // Save the "fd" and the url where the avatar for a user can be accessed
      var fileNames=[""];
      for(var i=0;i<uploadedFiles.length;i++){
        var str = uploadedFiles[i].fd;
        var reg = str.match(/C:\\Users\\farid\\Documents\\7mo\\Web con js\\Proyecto\\FinalProject\\Code\\NewsArmy\\assets\\images\\news\\(.{0,})/);
        var fileName = "/images/news/"+reg[1];
        fileNames[i]=fileName;

        console.log("filename:"+fileName);

      }
      console.log("filenames:"+fileNames);
      Noticia.create({titulo:req.param('titulo'),contenido:req.param('contenido'),creador:req.session.usuarioLogeado.id, pertenece:req.param('categoriaId')})
      .exec(function (error, noticiaCreated){
        if (error){
          console.log("error en la creacion de Noticia");
          return res.negotiate(err);
        }else{
          console.log("noticiaCreated"+noticiaCreated);
          console.log("creando imagenes");
          console.log(fileNames);
          for(var j=0; j<fileNames.length;j++){
            Imagen.create({ruta:fileNames[j],imagenDe:noticiaCreated.id}).exec(function (error,data){
              console.log(typeof(fileNames));
              console.log("dentro de creacion de imagen de"+fileNames[j]);
              if(error){
                console.log("error en la creacion de imagen");
                return res.negotiate(err);
              }
            });
          }

          return res.redirect('/');

        }

      });
    });
  }


};
