/**
 * NoticiaController
 *
 * @description :: Server-side logic for managing noticias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  registrar:function(req,res){

		if(!req.param('titulo')||!req.param('contenido')||!req.file('inputFiles')){
			console.log("parametros error");
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
      var filenames;
      for(var i=0;i<uploadedFiles.length;i++){
        var str = uploadedFiles[0].fd;
  			var reg = str.match(/C:\\Users\\farid\\Documents\\7mo\\Web con js\\Proyecto\\FinalProject\\Code\\NewsArmy\\assets\\images\\news\\(.{0,})/);
  			var fileName = "/images/"+reg[1];
        fileName.push(fileName);

      }

			Usuario.create({email:req.param('email'),password:req.param('password'),pathImagen:fileName})
			.exec(function (error){
				if (error){
					console.log("error en la creacion");
					return res.negotiate(err);
				}else{

					console.log("redirijiendo a homepage");
					return res.redirect('/');
				}

			});
		});
	}


};
