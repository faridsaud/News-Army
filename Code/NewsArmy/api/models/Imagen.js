/**
* Imagen.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
/*
create table IMAGEN
(
IDIMAGEN             int not null auto_increment,
IDNOTICIA            int,
RUTAIMAGEN           varchar(200) not null,
primary key (IDIMAGEN)
);
*/
module.exports = {
  tableName:'IMAGEN',
  attributes: {

    id:{
      type:'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      columnName: 'IDIMAGEN'
    },
    ruta:{
      type:'string',
      unique: true,
      required:true,
      size:200,
      columnName: 'RUTAIMAGEN'
    },
    imagenDe:{
      model:'noticia',
      columnName: 'IDNOTICIA'
    }
  }
};
