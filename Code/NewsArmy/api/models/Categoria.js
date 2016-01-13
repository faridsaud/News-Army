/**
* Categoria.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

/*
NOMBRECATEGORIA      varchar(100) not null,
DESCRIPCIONCATEGORIA varchar(400) not null,
IDCATEGORIA          int not null auto_increment,
*/
module.exports = {
  tableName:'CATEGORIA',
  attributes: {

    id:{
      type:'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      columnName: 'IDCATEGORIA'
    },
    nombre:{
      type:'string',
      unique: true,
      required:true,
      size:400,
      columnName: 'NOMBRECATEGORIA'
    },
    descripcion:{
      type:'string',
      size:400,
      required:true,
      columnName: 'DESCRIPCIONCATEGORIA'
    },
    pathImagen:{
      type:'string',
      size:200,
      columnName: 'PATHIMAGENCATEGORIA'
    },
    noticias: {
      collection: 'noticia',
      via: 'pertenece'
    }
  }
};
