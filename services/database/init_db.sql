CREATE USER 'docker_user'@'%' IDENTIFIED BY '123456';

CREATE DATABASE IF NOT EXISTS `crud_simples`;

GRANT ALL PRIVILEGES on `crud_simples`.*
TO 'docker_user'@'%' IDENTIFIED BY '123456'
WITH GRANT OPTION;

USE `crud_simples`;

CREATE TABLE `filme` (
	`id` INT AUTO_INCREMENT,
	`nome` VARCHAR(100) NULL,
	`ano` INT NULL,
	PRIMARY KEY (`id`)
);
