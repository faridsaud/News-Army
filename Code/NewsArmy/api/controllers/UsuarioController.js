/**
* UsuarioController
*
* @description :: Server-side logic for managing usuarios
* @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
*/

module.exports = {

	iniciarSesion:function(req,res){

		var user;
		var responseData={
			user:user
		}
		Usuario.find({email:req.param("email"), password:req.param("password")})
		.exec(function (err, results) {

			user = results;
			if(user.length==0){
				return res.json(500,{error:"user doesnt exist"});
			}else{
				req.session.usuarioLogeado=user[0];
				responseData=user[0];
				return res.json(responseData);
			}
		});
	},

	registrar:function(req,res){

		if(!req.param('email')||!req.param('password')||!req.file('inputFile')){
			console.log("parametros error");
			return res.badRequest();
		}
		req.file('inputFile').upload({
			// don't allow the total upload size to exceed ~10MB
			dirname: 'C:\\Users\\farid\\Documents\\7mo\\Web con js\\Proyecto\\FinalProject\\Code\\NewsArmy\\assets\\images\\users',
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
			var str = uploadedFiles[0].fd;
			var reg = str.match(/C:\\Users\\farid\\Documents\\7mo\\Web con js\\Proyecto\\FinalProject\\Code\\NewsArmy\\assets\\images\\users\\(.{0,})/);
			var fileName = "/images/users/"+reg[1];
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
