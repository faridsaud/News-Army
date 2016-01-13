/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     1/13/2016 9:20:56 AM                         */
/*==============================================================*/


drop table if exists CATEGORIA;

drop table if exists IMAGEN;

drop table if exists NOTICIA;

drop table if exists USUARIO;

/*==============================================================*/
/* Table: CATEGORIA                                             */
/*==============================================================*/
create table CATEGORIA
(
   NOMBRECATEGORIA      varchar(100) not null,
   DESCRIPCIONCATEGORIA varchar(400) not null,
   IDCATEGORIA          int not null auto_increment,
   PATHIMAGENCATEGORIA  varchar(200),
   primary key (IDCATEGORIA)
);

/*==============================================================*/
/* Table: IMAGEN                                                */
/*==============================================================*/
create table IMAGEN
(
   IDIMAGEN             int not null auto_increment,
   IDNOTICIA            int,
   RUTAIMAGEN           varchar(200) not null,
   primary key (IDIMAGEN)
);

/*==============================================================*/
/* Table: NOTICIA                                               */
/*==============================================================*/
create table NOTICIA
(
   IDNOTICIA            int not null auto_increment,
   IDUSUARIO            int not null,
   IDCATEGORIA          int not null,
   TITULONOTICIA        varchar(50) not null,
   CONTENIDONOTICIA     varchar(200) not null,
   FECHACREACIONNOTICIA datetime,
   FECHAACTUALIZACIONNOTICIA datetime,
   primary key (IDNOTICIA)
);

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO
(
   EMAILUSUARIO         varchar(50) not null,
   PASSWORDUSUARIO      varchar(50) not null,
   PATHIMAGENUSUARIO    varchar(200) not null,
   IDUSUARIO            int not null auto_increment,
   primary key (IDUSUARIO)
);

alter table IMAGEN add constraint FK_TIENE foreign key (IDNOTICIA)
      references NOTICIA (IDNOTICIA) on delete restrict on update restrict;

alter table NOTICIA add constraint FK_POSEE foreign key (IDCATEGORIA)
      references CATEGORIA (IDCATEGORIA) on delete restrict on update restrict;

alter table NOTICIA add constraint FK_POSTEA foreign key (IDUSUARIO)
      references USUARIO (IDUSUARIO) on delete restrict on update restrict;

