create database app;

create table operations(
    id serial primary key,
    concepto varchar(50) null,
    monto int not null,
    fecha date not null default current_date,
    tipo enum('ingreso','egreso') not null
);

insert into operations values 
    (default,'comida', 500, default, 'ingreso');
    (default,'servicios', 700, default, 'egreso');
