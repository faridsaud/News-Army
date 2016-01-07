/**
* Noticia.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
/*
create table NOTICIA
(
IDNOTICIA            int not null auto_increment,
IDUSUARIO            int not null,
IDCATEGORIA          int not null,
TITULONOTICIA        varchar(50) not null,
CONTENIDONOTICIA     varchar(200) not null,
primary key (IDNOTICIA)
);
*/
module.exports = {

  tableName:'NOTICIA',
  attributes: {

    id:{
      type:'integer',
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      columnName: 'IDNOTICIA'
    },
    titulo:{
      type:'string',
      required:true,
      size:50,
      columnName: 'TITULONOTICIA'
    },
    contenido:{
      type:'string',
      required:true,
      size:200,
      columnName: 'CONTENIDONOTICIA'
    },
    creador:{
      model:'usuario',
      columnName: 'IDUSUARIO'
    },
    pertenece:{
      model:'categoria',
      columnName: 'IDCATEGORIA'
    },
    imagenes:{
      collection:'imagen',
      via:'imagenDe'
    }

  }
};
