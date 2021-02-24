CREATE DATABASE OwnersAndPets;

USE OwnersAndPets;

CREATE TABLE Owners (
    id INT(12) primary key NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    rut VARCHAR(12) NOT NULL,
    email VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    birthday VARCHAR(100)
);

CREATE TABLE Pets (
    id INT(12) primary key NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    type_pet VARCHAR(50) NOT NULL,
    race VARCHAR(50),
    sex VARCHAR(20),
    birthday VARCHAR(100),
    owner INT(12),
    CONSTRAINT fk_pet_owner FOREIGN KEY (owner) REFERENCES Owners(id)
);

INSERT INTO Owners VALUES (1, 'Juan Pablo', 'Muñoz Arias', '12.334.145-9', 'jp@gmail.com', 'Sta algo 1234', '1994-11-03');
INSERT INTO Owners VALUES (2, 'Alfredo Matías', 'Cárdenas Loreto', '23.345.431-1', 'alfredo@gmail.com', 'Sta del carmen 34556', '2001-04-03');
INSERT INTO Owners VALUES (3, 'Gabriel Lannet', 'Nuñez Arriaga', '32.345.675-2', 'gabriel@gmail.com', 'Av iberoamericano 2337', '1990-07-22');

INSERT INTO Pets VALUES (1, 'jack', 'Perro', 'Quiltro', 'Macho', '2009-11-02', 1);
INSERT INTO Pets VALUES (2, 'kaito', 'gato', 'Quiltro', 'Macho', '2009-11-02', 1);
INSERT INTO Pets VALUES (3, 'Firulais', 'Perro', 'San Bernardo', 'Macho', '2009-04-09', 2);
INSERT INTO Pets VALUES (4, 'Martina', 'Perra', 'San Bernardo', 'Hembra', '2001-04-09', 2);
INSERT INTO Pets VALUES (5, 'Rogelia', 'Gata', 'Indeterminado', 'Hembra', '2011-04-09', 3);
INSERT INTO Pets VALUES (6, 'Camila', 'Gata', 'Indeterminado', 'Hembra', '2019-04-09', 3);

SELECT * FROM Pets INNER JOIN Owners on Pets.owner = Owners.id;