# CRUD-Simples

- Banco de dados:

	```sql
	CREATE DATABASE crud_simples;
	```

- Tabela a ser criada:

	```sql
	CREATE TABLE `filme` (
		`id` INT AUTO_INCREMENT,
		`nome` VARCHAR(100) NULL,
		`ano` INT NULL,
		PRIMARY KEY (`id`)
	);
	```

- Service frontend:

	- Compilar código go:

		CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o frontend .
