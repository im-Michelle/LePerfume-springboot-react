drop database if exists le_perfume;
create database if not exists le_perfume;

use le_perfume;
create table perfume (
                         id	integer not null auto_increment,
                         img_mobile	varchar(500) not null,
                         img_desktop	varchar(500) not null,
                         name	varchar(100) not null unique,
                         description varchar(500) not null,
                         price	double not null,
                         price_with_discount double,
                         primary key(id)
);


insert into perfume(img_mobile,img_desktop,name,description,price,price_with_discount) values("https://s1.eestatic.com/2023/05/18/mujer/belleza/764683734_233244088_1706x960.jpg","https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80","Gabrielle Essence Eau De Parfum","A floral, solar and voluptuous interpretation composed by Olivier Palge, Perfumer. Creator for the House of CHANEL",169.99,149.99);
insert into perfume(img_mobile,img_desktop,name,description,price,price_with_discount) values("https://m.media-amazon.com/images/I/318BjjcuClL._AC_.jpg","https://m.media-amazon.com/images/I/61i+LNUkzvL.jpg","Perfume N°5 Eau De Parfum","N°5, la mismísima esencia de la feminidad. Un perfume mítico y atemporal",189.99,169.99);