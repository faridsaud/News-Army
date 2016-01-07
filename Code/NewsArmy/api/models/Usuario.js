/**
* Usuario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
/*
create table USUARIO
(
EMAILUSUARIO         varchar(50) not null,
PASSWORDUSUARIO      varchar(50) not null,
PATHIMAGENUSUARIO    varchar(200) not null,
IDUSUARIO            int not null auto_increment,
primary key (IDUSUARIO)
);
*/

module.exports = {
  tableName:'USUARIO',
  attributes: {

    id:{
      type:'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      columnName: 'IDUSUARIO'
    },
    email:{
      type:'email',
      required:true,
      size:50,
      columnName: 'EMAILUSUARIO'
    },
    password:{

      type:'string',
      required:true,
      size:50,
      columnName: 'PASSWORDUSUARIO'
    },
    pathImagen:{
      type:'string',
      required:true,
      size:200,
      columnName: 'PATHIMAGENUSUARIO'
    },
    noticiasCreadas: {
      collection: 'noticia',
      via: 'creador'
    }
  }
};
