CREATE DATABASE exercicios;
USE exercicios;

CREATE TABLE tarefasFrei(
ID_tarefaF INT PRIMARY KEY AUTO_INCREMENT,
materia VARCHAR(100) NOT NULL,
paginasIni INT,
paginasFim INT,
conteudo VARCHAR(100),
data_entrega DATE NOT NULL,
sobre TEXT
);

CREATE TABLE tarefasEscola(
ID_tarefaE INT PRIMARY KEY AUTO_INCREMENT,
materia VARCHAR(100) NOT NULL,
paginasIni INT,
paginasFim INT,
conteudo VARCHAR(100),
data_entrega DATE NOT NULL,
sobre TEXT
);
