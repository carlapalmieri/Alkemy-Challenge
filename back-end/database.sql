create database app;

CREATE SCHEMA public
    AUTHORIZATION postgres;

-- mi contraseña esta configurada en el back como "2310"

create table public.operations(
    id serial primary key,
    concepto varchar(50) null,
    monto int not null,
    fecha date not null default current_date,
    tipo varchar(7) not null
);

insert into operations values 
    (default,'comida', 500, default, 'ingreso');
    (default,'servicios', 700, default, 'egreso');
    (default,'sueldo', 50000, default, 'ingreso');
    (default,'expensas', 3000, default, 'egreso');
    (default,'alquiler', 10000, default, 'egreso');
    (default,'kiosco', 200, default, 'egreso');
