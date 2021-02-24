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

INSERT INTO Owners VALUES (1, 'Juan Pablo', 'Muñoz Arias', '12.334.145-9', 'jp@gmail.com', 'Sta algo 1234', '2021-11-03');

INSERT INTO Pets VALUES (1, 'jack', 'Perro', 'Quiltro', 'Macho', '2009-11-02', 1);
INSERT INTO Pets VALUES (2, 'kaito', 'gato', 'Quiltro', 'Macho', '2009-11-02', 1);

SELECT * FROM Pets INNER JOIN Owners on Pets.owner = Owners.id;